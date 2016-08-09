/**
 *  Servlet to handle form action and validation
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-6</TD><TD>09/10/2013</TD><TD>PacificLink iMedia Ltd</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;  
import javax.servlet.ServletOutputStream;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanArrayDataSource;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.FileBufferedOutputStream;
import net.sf.jasperreports.engine.util.JRLoader;

import org.hksfc.sfc.iec.pdf.BudgetWording;
import org.hksfc.sfc.iec.pdf.PdfProperties;

/**
 * The servlet class PdfBudgetServlet
 */
public class PdfBudgetServlet extends HttpServlet {
	
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
		String language = (String)request.getParameter("lang");
		String print = (String)request.getParameter("print");
		int lang = 0; // 0 for ENG & 1 for CHI
		if(language.equalsIgnoreCase("0")) {
			lang = 0;
		}else {
			lang = 1;
		}		
        try {
		// all required variables		
		String key = null;
		Object value = null;
		//load jasper file from ServletContext()
        
        // 3 .jasper file to get
        String jasperFile1 = null;
        String jasperFile2 = null;
        String jasperFile3 = null;
        String decoded = PdfProperties.getInstance().PATH; 
        if(lang == 0) {
        	jasperFile1 = decoded + PdfProperties.getInstance().BUDGETREPORTFILE1;
        	jasperFile2 = decoded + PdfProperties.getInstance().BUDGETREPORTFILE2;
        	jasperFile3 = decoded + PdfProperties.getInstance().BUDGETREPORTFILE3;
        }else {
        	jasperFile1 = decoded + PdfProperties.getInstance().BUDGETREPORTFILE1TC;
        	jasperFile2 = decoded + PdfProperties.getInstance().BUDGETREPORTFILE2TC;
        	jasperFile3 = decoded + PdfProperties.getInstance().BUDGETREPORTFILE3TC;
        }

        JasperPrint jasperPrint1 = null;
        JasperPrint jasperPrint2 = null;
        JasperPrint jasperPrint3 = null;
        
        // parameters to loop through and assign
        Map<String, Object> parameters1 = new HashMap<String, Object>();
        Map<String, Object> parameters2 = new HashMap<String, Object>();
        Map<String, Object> parameters3 = new HashMap<String, Object>();
        @SuppressWarnings("unchecked")
		Map<String, String[]> parameterMap = request.getParameterMap(); // handle form value
		Iterator<String> it = parameterMap.keySet().iterator();

        // language wording
		BudgetWording bw = new BudgetWording(lang);
		bw.putP1All(parameters1);
		bw.putP2All(parameters2);
		bw.putP3All(parameters3);
        String[] beansWording = bw.getBeanAll();
        String[] beansKey = bw.getBeanAllKey();        
        
    	Object[] beanArray = new BudgetBean[beansWording.length];
    	BigDecimal amount = new BigDecimal(0);
    	for(int i = 0; i < beansWording.length; i++) {
			try {
				amount = (request.getParameter(beansKey[i]) != null) ? new BigDecimal(request.getParameter(beansKey[i])) : amount;
			}catch(NumberFormatException e) {
				amount = new BigDecimal(0);
			}
			
			if(i == 3) {				
				if(amount.doubleValue() > 0) {
					beansWording[i] = (lang == 0) ? bw.SURPLUSEN : bw.SURPLUSTC;
					parameters3.put("p3E4Title", ((lang == 0) ? bw.SURPLUSEN : bw.SURPLUSTC));
					parameters3.put("ResultIcon", "icon-report-surplus.jpg");
					parameters3.put("p3ResultBgSrc", 
						PdfProperties.getInstance().PATH + 
						"images/common/pdf/bg-img-blue.jpg"
					);
				}else {
					beansWording[i] = (lang == 0) ? bw.SHORTFALLEN : bw.SHORTFALLTC;
					
					parameters3.put("p3E4Title", ((lang == 0) ? bw.SHORTFALLEN : bw.SHORTFALLTC));
					parameters3.put("ResultIcon", "icon-report-shortfall.jpg");
					parameters3.put("p3ResultBgSrc", 
						PdfProperties.getInstance().PATH + 							
						"images/common/pdf/bg-img-red.jpg"
					);
				}
				beanArray[i] = new BudgetBean(beansWording[i], amount);
				
		        // Result in PDF Page 3
		    	parameters3.put("p3Result", beansWording[i] + ((lang == 0) ? bw.DOLLARPREFIXEN : bw.DOLLARPREFIXTC) + amount.toString());
				
		    	parameters3.put("", "");
			}else {
				beanArray[i] = new BudgetBean(beansWording[i], amount);
				parameters3.put("", "");
			}
    	}
    	
    	parameters3.put("p3E1Title", ((lang == 0) ? "Income" : "收入"));
    	parameters3.put("p3E2Title", ((lang == 0) ? "Savings & Investments" : "儲蓄及投資"));
    	parameters3.put("p3E3Title", ((lang == 0) ? "Expenses " : "支出"));
    	parameters3.put("p3E1", new BigDecimal(request.getParameter("beanData1")));
    	parameters3.put("p3E2", new BigDecimal(request.getParameter("beanData2")));
    	parameters3.put("p3E3", new BigDecimal(request.getParameter("beanData3")));
    	parameters3.put("p3E4", new BigDecimal(request.getParameter("beanData4")));    	
    	parameters3.put("DollarPrefix", ((lang == 0) ? bw.DOLLARPREFIXEN : bw.DOLLARPREFIXTC));
        
        // form value
    	String test = null;
    	Boolean isValid = true;
        while(it.hasNext()) {
			key = it.next();
			try {
				if(
				key.equals("p1Saving9Title") ||
				key.equals("p1Saving10Title") ||
				key.equals("p1Saving11Title") ||
				key.startsWith("t")
				) {
					value = parameterMap.get(key)[0];
					if(value.equals("")) {
						value = " -- ";
					}
					
					// validation checking for all frontend field 2013.11.15
					
					test = (String)value;
					if(test != null && test.length() > 25) {
						isValid = false;
						break;
					}
					// ended
					
				}else if(key.startsWith("s")) {
					if("0".equals(parameterMap.get(key)[0])) { // month
						value = (lang == 0) ? "Monthly" : "每月";
					}else if("1".equals(parameterMap.get(key)[0])) { // week
						value = (lang == 0) ? "Weekly" : "每周";
					}else if("2".equals(parameterMap.get(key)[0])) { // year
						value = (lang == 0) ? "Yearly" : "每年";
					}
					//value = parameterMap.get(key)[0];
				}else {
					if(parameterMap.get(key)[0].equals("0")) {
						value = 0.0;
					}else {
						value = new BigDecimal(parameterMap.get(key)[0]);
					}
				}
			}catch(NumberFormatException e) {
				value = 0;
			}
			if(!isValid) {
				throw new Exception("Input value is not valid");
			}
	        if( // merge p1 & m2
	        key.startsWith(PdfProperties.getInstance().P1PREFIX) ||
	        key.startsWith(PdfProperties.getInstance().P2PREFIX) ||
	        key.startsWith("t") ||
	        key.startsWith("s")
	        ) {
	        	if(key.contains("_") && (key.startsWith("t") || key.startsWith("s"))) {
        			String s = "";
        			if(key.startsWith("t")) {
        				s = " -- ";
        			}else {
        				s = (lang == 0) ? "Monthly" : "每月";
        			}
	        		if(request.getParameter(key + "_2") == null) {
	    	        	parameters1.put(key + "_2", s);
	    	        	parameters2.put(key + "_2", s);
	        		}
	        		if(request.getParameter(key + "_3") == null) {
	    	        	parameters1.put(key + "_3", s);
	    	        	parameters2.put(key + "_3", s);	        			
	        		}
	        	}else if(
	        			key.contains("_") && 
	        			(key.startsWith(PdfProperties.getInstance().P1PREFIX) || key.startsWith(PdfProperties.getInstance().P2PREFIX))
	        			) {
	        		if(request.getParameter(key + "_2") == null) {
	    	        	parameters1.put(key + "_2", 0.0);
	    	        	parameters2.put(key + "_2", 0.0);
	        		}
	        		if(request.getParameter(key + "_3") == null) {
	    	        	parameters1.put(key + "_3", 0.0);
	    	        	parameters2.put(key + "_3", 0.0);	        			
	        		}
	        	}
	        	parameters1.put(key, value);
	        	parameters2.put(key, value);
	        }else if(key.startsWith(PdfProperties.getInstance().P3PREFIX)) {
	        	parameters3.put(key, value);	        	
	        }
		}        
        
        // export PDF
        	JasperReport jasperReport1 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile1);
        	JasperReport jasperReport2 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile2);
        	JasperReport jasperReport3 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile3);
        	
        	jasperPrint1 = JasperFillManager.fillReport(jasperReport1, parameters1, new JREmptyDataSource());
        	jasperPrint2 = JasperFillManager.fillReport(jasperReport2, parameters2, new JREmptyDataSource());
        	jasperPrint3 = JasperFillManager.fillReport(jasperReport3, parameters3, new JRBeanArrayDataSource(beanArray));
        	
        	ArrayList<JasperPrint> jList = new ArrayList<JasperPrint>();
        	jList.add(jasperPrint1);
        	jList.add(jasperPrint2);
        	jList.add(jasperPrint3);
        	
        	FileBufferedOutputStream fbos = new FileBufferedOutputStream();  
        	JRPdfExporter exporter = new JRPdfExporter();  
        	exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, fbos);  
        	exporter.setParameter(JRExporterParameter.JASPER_PRINT_LIST, jList);  
            exporter.exportReport();  
            fbos.close();  
            if (fbos.size() > 0) {  
                response.setContentType(PdfProperties.getInstance().CONTENTTYPE);
                // specify the file name of PDF
                String fileLang = (lang == 0) ? "_eng_" : "_chi_";
                Format formatter = new SimpleDateFormat("dd-MM-yyyy");
                String date = formatter.format(new Date()); 
                String arg2 = PdfProperties.getInstance().BUDGETHEADERARG2;
                arg2 = arg2.replace(".pdf", fileLang + date + ".pdf");
                if("y".equals(print)) {
                	response.setContentType("application/pdf");
                }else {
                	response.setHeader(PdfProperties.getInstance().HEADERARG1, arg2);		
                }
                
                response.setContentLength(fbos.size());  
                ServletOutputStream ouputStream = response.getOutputStream();  
                fbos.writeData(ouputStream);
                fbos.dispose();
                ouputStream.flush();
                ouputStream.close();
            }  
        }
        catch (Exception e) {
        	// 2013.12.20
        	// no change in this batch, only debugging
        	Log.getCMLog().getLogger().error("Error encountered while trying to generate PDF file in PdfBudgetServlet : " + e);
    		RequestDispatcher view = request.getRequestDispatcher("/error500.html");
    		view.forward(request, response);
        }

	}
	
}