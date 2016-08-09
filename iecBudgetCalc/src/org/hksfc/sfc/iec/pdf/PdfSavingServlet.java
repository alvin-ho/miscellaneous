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


import java.io.File;  
import java.io.PrintWriter;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;  
import java.util.Iterator;
import java.util.Map;
import java.io.IOException;
import java.math.BigDecimal;
 

import net.sf.jasperreports.engine.JRExporterParameter;  
import net.sf.jasperreports.engine.JasperFillManager;  
import net.sf.jasperreports.engine.JasperPrint;  
import net.sf.jasperreports.engine.JasperReport;  
import net.sf.jasperreports.engine.data.JRBeanArrayDataSource;
import net.sf.jasperreports.engine.export.JRPdfExporter;  
import net.sf.jasperreports.engine.util.FileBufferedOutputStream;  
import net.sf.jasperreports.engine.util.JRLoader;

import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;  
import javax.servlet.ServletOutputStream;  

import org.hksfc.sfc.iec.pdf.PdfProperties;

/**
 * The servlet class PdfSavingServlet
 */
public class PdfSavingServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	/**
	 * @param request
	 * @param response
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
	 */	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
    	//PrintWriter out = response.getWriter();
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		// all required variables
		String language = (String)request.getParameter("lang");
		String print = (String)request.getParameter("print");
		
		int lang = 0; // 0 for ENG & 1 for CHI
		if(language.equalsIgnoreCase("0")) {
			lang = 0;
		}else {
			lang = 1;
		}
		int tabIndex = 0;
        String pattern = request.getServletPath();
        String path = PdfProperties.getInstance().PATH;
        File jasperFile = null;
        JasperPrint jasperPrint = null;
        
        // get PREFIX by URLPATTERN
		for(int i = 0; i < PdfProperties.getInstance().URLPATTERN.length; i++) {
			if(pattern.equals(PdfProperties.getInstance().URLPATTERN[i])) {
				tabIndex = i;
				break;
			}
		}
		switch(tabIndex) {
			case 0 : 
				jasperFile = new File(path, ((lang == 0) ? PdfProperties.getInstance().SAVINGREPORTFILE1 : PdfProperties.getInstance().SAVINGREPORTFILETC1));
				break;
			case 1 :
				jasperFile = new File(path, ((lang == 0) ? PdfProperties.getInstance().SAVINGREPORTFILE2 : PdfProperties.getInstance().SAVINGREPORTFILETC2));				
				break;
			case 2 :
				jasperFile = new File(path, ((lang == 0) ? PdfProperties.getInstance().SAVINGREPORTFILE3 : PdfProperties.getInstance().SAVINGREPORTFILETC3));
				break;
			default : break;
		}
		
		String data1 = null;
		String data2 = null;
		String ticksValue = null;
		String[] data1All = null;
		String[] data2All = null;
		String[] ticksValueAll = null;
		int count = 0;
		
		Map<String, Object> parameters = new HashMap<String, Object>();
		Map<String, String[]> parameterMap = request.getParameterMap(); // handle form value
		Iterator<String> it = parameterMap.keySet().iterator();
		String key = null;
		Object value = null;
		while(it.hasNext()) {
			key = it.next();
			value = parameterMap.get(key)[0];
			if("withCData".equals(key)) {
				data1 = (String)value;
				data1All = data1.split(",");
			}else if("withoutCData".equals(key)) {
				data2 = (String)value;
				data2All = data2.split(",");
			}else if("ticksValue".equals(key)) {
				ticksValue = (String)value;
				ticksValueAll = ticksValue.split(",");
			}else {
				
				parameters.put(key, value);
			}
		}
		parameters.put("res_path", PdfProperties.getInstance().RESPATH);
		// set the SavingBean
		
		if(data1All.length > data2All.length) {
			count = data1All.length;
		}else {
			count = data2All.length;
		}
		SavingBean[] beanArray = new SavingBean[count];
		for(int i = 0; i < count; i++) {
			String category = ticksValueAll[i];
			BigDecimal amount0 = null;
			BigDecimal amount1 = null;
			BigDecimal amount2 = null;
			
			if(request.getParameter("savingGoal") != null) {
				amount0 = new BigDecimal(request.getParameter("savingGoal"));
			}
			
			if(i > data1All.length - 1 && i <= data2All.length - 1) {
				amount1 = null;
				amount2 = new BigDecimal(data2All[i]);	
			}else if(i > data2All.length - 1 && i <= data1All.length - 1) {
				amount1 = new BigDecimal(data1All[i]);
				amount2 = null;
			}else {
				amount1 = new BigDecimal(data1All[i]);
				amount2 = new BigDecimal(data2All[i]);				
			}
			beanArray[i] = new SavingBean(category, category, category, amount0, amount1, amount2);
		}
        // export PDF

        try {
        	JasperReport jasperReport = (JasperReport) JRLoader.loadObjectFromFile(jasperFile.getPath());

        	jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JRBeanArrayDataSource(beanArray));
        	//jasperPrint = JasperFillManager.fillReport(jasperReport, parameters);
        	if (jasperPrint != null) {  
	            FileBufferedOutputStream fbos = new FileBufferedOutputStream();  
	            JRPdfExporter exporter = new JRPdfExporter();  
	            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, fbos);  
	            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);  
	            
	            exporter.exportReport();  
                fbos.close();  
                if (fbos.size() > 0) {  
                    response.setContentType(PdfProperties.getInstance().CONTENTTYPE);
                    
                    // specify the file name of PDF
                    
                    String fileLang = (lang == 0) ? "_eng_" : "_chi_";
                    Format formatter = new SimpleDateFormat("dd-MM-yyyy");
                    String date = formatter.format(new Date()); 
                    String arg2 = PdfProperties.getInstance().SAVINGHEADERARG2;
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
                    if (null != ouputStream) {  
                        ouputStream.close();  
                    }  	                        
                }
              
	        }
        }catch (Exception e) {
        	Log.getCMLog().getLogger().error("Error encountered while trying to generate PDF file in PdfSavingServlet : " + e);
    		RequestDispatcher view = request.getRequestDispatcher("/error500.html");
    		view.forward(request, response);
        }


	}
	
}