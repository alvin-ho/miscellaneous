/**
 *  Servlet to handle form action and validation
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-21</TD><TD>02/01/2014</TD><TD>Urbanair Design Ltd</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */

package org.hksfc.sfc.iec.pdf;

import java.io.File;
import java.io.IOException;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.FileBufferedOutputStream;
import net.sf.jasperreports.engine.util.JRLoader;

import org.hksfc.sfc.iec.pdf.CutBackWording;
import org.hksfc.sfc.iec.pdf.PdfPropertiesCutback;

/**
 * Servlet implementation class PdfCutBackServlet
 */
public class PdfCutBackServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher view = request.getRequestDispatcher("/error404.html");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
		
		String decoded = PdfPropertiesCutback.getInstance().PATH;
		File jasperFile = new File(decoded, ((lang == 0) ? PdfPropertiesCutback.getInstance().CUTBACKREPORTFILE : PdfPropertiesCutback.getInstance().CUTBACKREPORTFILETC));
		JasperPrint jasperPrint = null;
		
		
		// set the CutBackBean for Pie Chart
		/*
		String data = request.getParameter("cutback_category_data");
		String[] datas = data.split(" , ");
		CutBackBean[] beanArray = new CutBackBean[datas.length];
		Double categoryAmount = 0.0;
		
		for(int i = 0; i < datas.length; i++) {
			String[] cutBackData = datas[i].split(" : ");
			
			String category = cutBackData[0];
			String amountStr = cutBackData[1];
			Number amount = new BigDecimal(amountStr);
			categoryAmount = categoryAmount + Double.parseDouble(amountStr);
			beanArray[i] = new CutBackBean(category, amount);
		}
		*/
		
		
		// language wording & infomation
		String data = request.getParameter("cutback_data");
		Map<String, Object> parameters = new HashMap<String, Object>();
        CutBackWording.getInstance(lang).putAll(parameters, data, lang);
        
        parameters.put("TOTALSAVE", (String)request.getParameter("total_save"));
        parameters.put("ANNUALINCOME", ((lang == 0) ? (String)request.getParameter("percent_income")+CutBackWording.getInstance(lang).ANNUALINCOMEEN : CutBackWording.getInstance(lang).ANNUALINCOMETC+(String)request.getParameter("percent_income")+"%"));
        //parameters.put("CATEGORYAMOUNT", categoryAmount);
        
        // export PDF	
        try {
        	JasperReport jasperReport = (JasperReport) JRLoader.loadObjectFromFile(jasperFile.getPath());

        	//jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JRBeanArrayDataSource(beanArray));
        	jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JREmptyDataSource());
        	
	        if (jasperPrint != null) {  
	            FileBufferedOutputStream fbos = new FileBufferedOutputStream();  
	            JRPdfExporter exporter = new JRPdfExporter();  
	            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, fbos);  
	            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);  
	            
	            exporter.exportReport();  
                fbos.close();  
                if (fbos.size() > 0) {  
                    response.setContentType(PdfPropertiesCutback.getInstance().CONTENTTYPE);
                    
                    // specify the file name of PDF
                    
                    String fileLang = (lang == 0) ? "_eng_" : "_chi_";
                    Format formatter = new SimpleDateFormat("dd-MM-yyyy");
                    String date = formatter.format(new Date()); 
                    String arg2 = PdfPropertiesCutback.getInstance().CUTBACKHEADERARG2;
                    arg2 = arg2.replace(".pdf", fileLang + date + ".pdf");
                    
                    if("y".equals(print)) {
                    	response.setContentType("application/pdf");
                    }else {
                    	response.setHeader(PdfPropertiesCutback.getInstance().HEADERARG1, arg2);
                    }
                    
                    
                    response.setContentLength(fbos.size());  
                    ServletOutputStream ouputStream = response.getOutputStream();  
                    fbos.writeData(ouputStream);  
                    fbos.dispose();  
                    ouputStream.flush();  
                    if (null != ouputStream) {  
                        ouputStream.close();  
                    }
                    Log.getCMLog().getLogger().info("Generate PDF file in PdfCutBackServlet successfully");
                }
              
	        }
        } catch (Exception e) {
        	Log.getCMLog().getLogger().error("Error encountered while trying to generate PDF file in PdfCutBackServlet : " + e);
    		RequestDispatcher view = request.getRequestDispatcher("/error500.html");
    		view.forward(request, response);
        }
	
		
	}

}
