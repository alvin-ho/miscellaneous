/**
 *  Servlet to handle form action for saving spreadsheets
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-6</TD><TD>05/11/2013</TD><TD>PacificLink iMedia Ltd</TD><TD>First version</TD></TR>
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
public class ExcelBudgetServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

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
				filename = "budget_en.xls";
			}else {
				filename = "budget_tc.xls";
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
				if(key.startsWith("t")) {
					if(test != null && test.length() > 25) {
						isValid = false;
						break;
					}
				}else if(key.startsWith("p")) {
					if( // special input name for the savings and investment
					key.equals("p1Saving9Title") ||
					key.equals("p1Saving10Title") ||
					key.equals("p1Saving11Title")
					) {
						if(test != null && test.length() > 25) {
							isValid = false;
							break;
						}
					}else {
						if(test != null && test.length() > 10) {
							isValid = false;
							break;	
						}
					}
				}else if(key.startsWith("s")) {
					
					if(test != null && !test.matches("^[0-2]$")) {
						isValid = false;
						break;
					}
				}				
				map.put(key, value);
			}
			
			if(!isValid) {
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
					        		if(refName.startsWith("s")) {
					        			if(test.equals("1")) {
					        				c.setCellValue(1);
					        			}else if(test.equals("0")) {
					        				c.setCellValue(2);
					        			}else if(test.equals("2")) {
					        				c.setCellValue(3);
					        			}
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
            String arg2 = PdfProperties.getInstance().BUDGETHEADERARG2;
            arg2 = arg2.replace(".pdf", fileLang + date + ".xls");
	        
            response.setHeader(PdfProperties.getInstance().HEADERARG1, arg2);	
	        workbook.write(ouputStream);
	        ouputStream.flush();
	        ouputStream.close();

        }catch(Exception e) {
	    	Log.getCMLog().getLogger().error("Error encountered while trying to generate excel file in ExcelBudgetServlet : " + e);
			RequestDispatcher view = request.getRequestDispatcher("/error500.html");
			view.forward(request, response);
        }
        
    }
	
}
