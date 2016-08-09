/**
 *  Servlet to handle generation of excel spreadsheet
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-36</TD><TD>20/10/2014</TD><TD>Pacific Link</TD><TD>Initial Version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.excel;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFFormulaEvaluator;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.hksfc.sfc.iec.excel.Log;

public class SpreadSheet extends HttpServlet {

	// <editor-fold defaultstate="collapsed"
	// desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
	/**
	 * Handles the HTTP <code>GET</code> method.
	 * 
	 * @param request
	 *            servlet request
	 * @param response
	 *            servlet response
	 * @throws ServletException
	 *             if a servlet-specific error occurs
	 * @throws IOException
	 *             if an I/O error occurs
	 */

	private static final long serialVersionUID = 1L;
	public static final int SIZE = "IFERROR(".length();

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		RequestDispatcher view = request.getRequestDispatcher("/error404.html");
		view.forward(request, response);

	}

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		String[] paramNames = { "grossSalary", "grossExpenses", "extraIncome",
				"incomeTax", "liquidCash", "liabilitiesMortgage",
				"liquidSavings", "liabilitiesQuestion1", "liquidCurrent",
				"liabilitiesCarLoan", "liquidFixed", "liabilitiesQuestion2",
				"liquidOther", "liabilitiesCredit", "liabilitiesOverdraft",
				"investmentProperties", "liabilitiesOtherLoan",
				"investmentMpf", "liabilitiesQuestion3", "investmentInsurance",
				"investmentFunds", "investmentStocks", "investmentBonds",
				"investmentOther", "personalResidential", "personalJewellery",
				"personalCar", "personalUse" };

		String locale = "en";

		try {

			if (request.getParameter("locale").equals("en")
					|| request.getParameter("locale").equals("tc")) {
				locale = request.getParameter("locale");
			}
			
			Map<String, String[]> parameterMap = new HashMap<String, String[]>(request.getParameterMap());
			
			Iterator<String> it = parameterMap.keySet().iterator();
			String key = null;
			String test = null;
			Boolean isValid = true;
			Object value;

			while (it.hasNext()) {
				key = it.next();
				
				if (!key.equals("locale") ){
					value = parameterMap.get(key)[0];

					test = (String) value;

					if (test.length() != 0) {

						if (test.length() > 13 || !test.matches("[0-9\\.,]+")) {
							isValid = false;
							break;

						}

					}
				}
			}

			if (!isValid) {

				Log.getCMLog()
					.getLogger()
					.error(	"Error encountered while trying to generate excel file");
				throw new Exception("Input value is not valid");

			} else {

				SimpleDateFormat dateFormat = new SimpleDateFormat("dd_MM_yyyy");
				String excelFile = "networth_" + locale;
				// source file location
				String inFile = getServletContext().getRealPath("/").replace(
						'\\', '/')
						+ "/excel/" + excelFile + ".xls";

				response.setHeader("content-type", "application/vnd.ms-excel");
				response.setHeader("content-disposition",
						"attachment; filename=" + excelFile + "_"
								+ dateFormat.format(new Date()) + ".xls");

				HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(
						inFile));

				// select sheet 1
				HSSFSheet sheet = workbook.getSheetAt(0);
				HSSFCell cell = null;

				// indices of cells to be edited in the left column
				List<Integer> leftColIndex = Arrays.asList(14, 18, 27, 30, 33,
						36, 39, 44, 47, 50, 53, 56, 59, 62, 67, 70, 73, 76);

				// indices of cells to be edited in the right column
				List<Integer> rightColIndex = Arrays.asList(14, 18, 27, 30, 33,
						36, 39, 42, 45, 48);

				int index = 0;
				for (int i = 12; i < 80; i++) {

					// updating the cells in the left column
					if (leftColIndex.contains(i)) {
						cell = sheet.getRow(i).getCell(6);
						cell.setCellValue(notNull(request
								.getParameter(paramNames[index++])));
					}

					// updating the cells in the right column
					if (rightColIndex.contains(i)) {
						cell = sheet.getRow(i).getCell(15);
						cell.setCellValue(notNull(request
								.getParameter(paramNames[index++])));
					}
				}

				// IMPORTANT trigger all formulas
				HSSFFormulaEvaluator.evaluateAllFormulaCells(workbook);

				workbook.write(response.getOutputStream());

				Log.getCMLog().getLogger().info(
						"Generate exccel file in SpreadSheet successfully");
			}
		} catch (Exception e) {
			Log.getCMLog().getLogger().error(
					"Error encountered while trying to generate excel file in SpreadSheet : "
							+ e.getMessage(), e);
			RequestDispatcher view = request
					.getRequestDispatcher("/error500.html");
			view.forward(request, response);

		}

	}

	private Double notNull(String str) {
		if (str == null || str.equals("")) {
			str = "0";
		}
		return Double.parseDouble(str.replaceAll(",", ""));
	}
}
