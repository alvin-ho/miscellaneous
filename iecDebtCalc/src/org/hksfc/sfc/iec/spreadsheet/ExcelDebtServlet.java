/**
 *  Servlet to handle form action for saving spreadsheets
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-22</TD><TD>02/01/2014</TD><TD>Urban Air Design Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.spreadsheet;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;  
import javax.servlet.ServletOutputStream;

import org.apache.poi.hssf.usermodel.HSSFFormulaEvaluator;
import org.apache.poi.hssf.usermodel.HSSFName;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.AreaReference;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellReference;
//import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
//import org.apache.poi.xssf.usermodel.XSSFName;
//import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.hksfc.sfc.iec.pdf.Log;
import org.hksfc.sfc.iec.pdf.PdfProperties;

/**
 * The servlet class ExcelBudgetServlet
 */
public class ExcelDebtServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final int SIZE = "IFERROR(".length();
	/**
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		RequestDispatcher view = request.getRequestDispatcher("/error404.html");
		view.forward(request, response);			
	}
	
	/**
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{      	
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
        try {
			ServletContext servletContext = this.getServletConfig().getServletContext();
			String lang = request.getParameter("lang");
			String filename = "";
			if(lang.equals("0")) {
				filename = "debt_en.xlsx";
			}else {
				filename = "debt_tc.xls";
			}
			
			String file = servletContext.getRealPath("/excel/" + filename);
			
			HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(file)); 
	        
			Map<String, String[]> parameterMap = request.getParameterMap(); // handle form value
	        Map <String, Object> map = new HashMap<String, Object>();
			Iterator<String> it = parameterMap.keySet().iterator();
			String key = null;
			String test = null;
			Boolean isValid = true;
			Object value;
			// validation checking for all frontend field 2013.11.15
			while(it.hasNext()) {
				key = it.next();
				value = parameterMap.get(key)[0];
				
				test = (String)value;
				if(key.startsWith("n")) {
					if(test != null && test.length() > 25) {
						isValid = false;
						break;
					}
				}else if(key.startsWith("p")) {
					
					if(test != null && test.length() > 10) {
						isValid = false;
						break;	
					}
					

				}
				map.put(key, value);
			}
			
			if(!isValid) {
				Log.getCMLog().getLogger().error("Error encountered while trying to generate excel file in ExcelDebtServlet");
				throw new Exception("Input value is not valid");
			}
			// ended
	        
	        Iterator<String> keyIterator =  map.keySet().iterator();
	        while (keyIterator.hasNext()){
				  String refName = (String)keyIterator.next();
				  HSSFName namedCell = workbook.getName(refName);
				  
				  if(namedCell != null) {
					  
					  AreaReference ref = new AreaReference(namedCell.getRefersToFormula());
					  CellReference[] crefs = ref.getAllReferencedCells();
					  
					  for (int i=0; i<crefs.length;i++) {
						  	Sheet s = workbook.getSheet(crefs[i].getSheetName());
						  	
						  	
						  	Row r = s.getRow(crefs[i].getRow());
					        Cell c = r.getCell(crefs[i].getCol());
				        	Object valueObj = map.get(refName);
				            	
					        if (valueObj instanceof String){
					            
					        	test = (String)valueObj;
					        	if(test.matches("-?\\d+(\\.\\d+)?")) {
					        		if(refName.startsWith("i")) {
					        			c.setCellValue(test); 
					        			c.setCellValue(Double.parseDouble((String)valueObj));
					        		}else {
					        			c.setCellValue(Double.parseDouble((String)valueObj));
					        		}
					        		
					        	}else {
					        		c.setCellValue((String)valueObj);
					        	}
					        	  
					        }
					        else if (valueObj instanceof Double){
					              c.setCellValue((Double)valueObj);
					        }  
					  }
				  }
	        }
	        HSSFFormulaEvaluator.evaluateAllFormulaCells(workbook);
	        ServletOutputStream ouputStream = response.getOutputStream();
	        response.setContentType("application/vnd.ms-excel");
            String fileLang = ("0".equals(lang)) ? "_eng_" : "_chi_";
            Format formatter = new SimpleDateFormat("dd-MM-yyyy");
            String date = formatter.format(new Date()); 
            String arg2 = PdfProperties.getInstance().DEBTHEADERARG;
            arg2 = arg2.replace(".pdf", fileLang + date + ".xls");
	        
            response.setHeader(PdfProperties.getInstance().HEADERARG1, arg2);	
	        workbook.write(ouputStream);
	        ouputStream.flush();
	        ouputStream.close();
	        
	        Log.getCMLog().getLogger().info("Generate exccel file in ExcelDebtServlet successfully");

        }catch(Exception e) {
	    	Log.getCMLog().getLogger().error("Error encountered while trying to generate excel file in ExcelDebtServlet : " + e);
			RequestDispatcher view = request.getRequestDispatcher("/error500.html");
			view.forward(request, response);
        }
        
    }

}
