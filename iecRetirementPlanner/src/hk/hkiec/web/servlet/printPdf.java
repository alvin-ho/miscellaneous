package hk.hkiec.web.servlet;

import hk.hkiec.utils.Log4jHelper;
import hk.hkiec.utils.SystemSettings;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.export.ExporterInputItem;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleExporterInputItem;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;

/**
 *  Print Pdf Servlet
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-39</TD><TD>06/03/2015</TD><TD>Media Explorer Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
public class printPdf extends HttpServlet {

	public printPdf() {
		super();
	}

	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//Only POST requests will trigger the function of printing PDF, others will be redirected to the index page
		response.sendRedirect(SystemSettings.URL_DOMAIN + "tc/main/index.jsp");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			String cmd = request.getParameter("cmd");
			Map<String,String[]> paramMap = request.getParameterMap();
			if("print".equals(cmd)){
				
				//Server Side Validation
				String validateResult = validation(paramMap);
				if(validateResult == ""){
					String lang = paramMap.get("cmd_lang")[0];
					//Load different jasper template depends on the shortfall type and the input of salary (Default No ShortFall)
					List<String> fileNames = new ArrayList<String>();
					if(paramMap.get("isShortfall")[0].equals("0")){
						//Balance
						fileNames.add("balancefall.jasper");
					}else if(paramMap.get("isShortfall")[0].equals("1")){
						//Short Fall
						if(paramMap.get("timesOfAnnualFromShortFall")[0].equals("")){
							//No salary input
							fileNames.add("shortfall_noAmount.jasper");
						}else{
							fileNames.add("shortfall.jasper");
						}
						fileNames.add("shortfall_detail.jasper");
					}else{
						fileNames.add("no_shortfall.jasper");
					}
					
					if(paramMap.get("timesOfAnnualFromShortFall")[0].equals("") || !paramMap.get("isShortfall")[0].equals("1")){
						fileNames.add("calRes_noRemark.jasper");
					}else{
						fileNames.add("calRes.jasper");
					}
					
					HashMap parameters = new HashMap(); 
					for(String key : paramMap.keySet()){
						if(!key.contains("cmd_")){
							parameters.put(key, paramMap.get(key)[0]);
							
						}
					}
					
					if( "1".equals(paramMap.get("cmd_isprint")[0]) ){
						response.setContentType("application/pdf");
					}else{
						response.setContentType("application/pdf;charset=UTF-8");  
			            response.setCharacterEncoding("UTF-8");  
			            response.setHeader("Content-type", "application/pdf;charset=UTF-8");
			            response.setHeader("Content-Disposition", "attachment; filename=\""  
			                    + new String(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()).getBytes(),"UTF-8" )
			                    + ".pdf\""); 
					}
					
					List<ExporterInputItem> inputItems = new ArrayList<ExporterInputItem>();
					for(int i=0; i<fileNames.size(); i++){
						String pathName = SystemSettings.FILE_ROOT+lang+"_"+fileNames.get(i);
						JasperPrint print = JasperFillManager.fillReport(pathName,parameters,new JREmptyDataSource());
						inputItems.add(new SimpleExporterInputItem(print));
					}
					JRPdfExporter exporter = new net.sf.jasperreports.engine.export.JRPdfExporter();
					OutputStream ouputStream = response.getOutputStream();
					exporter.setExporterInput(new SimpleExporterInput(inputItems));
					exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(ouputStream));
					exporter.exportReport();
					Log4jHelper.log(printPdf.class.getName(), "pdf generated successfully.");
				}else{
					//Redirect to index page if there are still invalid value(s)
					Log4jHelper.log(printPdf.class.getName(), "Invalid value : " + validateResult);
					response.sendRedirect(SystemSettings.URL_DOMAIN + "tc/main/index.jsp");
				}
			}else if("check".equals(cmd)){
				//Form Validation
				String result = validation(paramMap);
				PrintWriter printWriter = response.getWriter();
				printWriter.write(result + " ");
				printWriter.flush();
			}
			
			
		} catch (JRException e) {
			e.printStackTrace();
			Log4jHelper.log(printPdf.class.getName(), e.toString());
		}
	}

	public void init() throws ServletException {
		// Put your code here
	}
	
	public String validation(Map<String,String[]> paramMap){
		Boolean validateResult = true;
		String invalidStr = "";
		for(String key : paramMap.keySet()){
			String param = paramMap.get(key)[0];
			//param name validation
			if(key.contains("cmd_") || key.contains("step") || key.contains("res_")
					|| "cmd".equals(key) || "employType".equals(key) || "isShortfall".equals(key)
					|| "reserved".equals(key) || "required".equals(key) || "shortfall".equals(key) 
					|| "timesOfAnnualFromShortFall".equals(key) || "additionalMonthlySaving".equals(key) || "rateToDiscountTheShortfall".equals(key)){
				
				//param value validation
				if( ("cmd_lang".equals(key) && !"tc".equals(param) && !"en".equals(param) )
					|| ("cmd_isprint".equals(key) && !"0".equals(param) && !"1".equals(param))
					|| ("isShortfall".equals(key) && !"0".equals(param) && !"1".equals(param) && !"2".equals(param))
					|| ("employType".equals(key) && !"EE".equals(param) && !"SEP".equals(param))
					|| (("step3_0_0".equals(key) || "step3_0_1".equals(key) 
							|| "step3_0_5".equals(key) || "step3_0_6".equals(key) || "res_mpf".equals(key) 
							|| "step3_1_0".equals(key) || "step3_1_1".equals(key) || "step3_1_2".equals(key) || "step3_1_3".equals(key))
						&& !param.replaceAll("[-,]", "").matches("\\d+") && !"N/A".equals(param)) //PriceOrNull
					
					|| ( ("shortfall".equals(key) || "additionalMonthlySaving".equals(key))
						&&  !param.replaceAll("[-,]", "").matches("\\d+") && !"".equals(param))//PriceOrEmpty
					
					|| ( ("reserved".equals(key) || "required".equals(key) 
							|| "step2_0".equals(key) || "res_dtexp".equals(key)
							|| "step4_0".equals(key) || "step4_1".equals(key) || "res_ttSaving".equals(key) || "step5_0".equals(key)) 
						&& !param.replaceAll("[-,]", "").matches("\\d+") ) //Price
						
					|| ("timesOfAnnualFromShortFall".equals(key) && !param.replaceAll("[.,]", "").matches("\\d+") && !"".equals(param)) //Int/FloatOrEmpty
					
					|| ( ("step1_0".equals(key) || "step1_1".equals(key) || "step1_2".equals(key) || "res_nper1".equals(key) || "res_nper2".equals(key) )
						&& !param.matches("\\d+")) //Int
						
					|| ( ("step3_0_2".equals(key)  || "step3_0_3".equals(key)   || "step3_0_4".equals(key) || "step3_0_7".equals(key)) 
					&& !param.replaceAll("[.%]", "").matches("\\d+") && !"N/A".equals(param)) //PercentageOrNull
					
					|| ("rateToDiscountTheShortfall".equals(key) && !param.replaceAll("[.%]", "").matches("\\d+") && !"".equals(param)) //PercentageOrEmpty
					
					|| ( ("step2_2".equals(key) || "step2_3".equals(key) || "step4_2".equals(key) || "step5_1".equals(key)) 
						&& !param.replaceAll("[.%]", "").matches("\\d+")) //Percentage
				){
					validateResult = false; 
					invalidStr+= key + " : " + param + " ";
				}
			}else{
				validateResult = false;
				invalidStr+= key + " : " + param + " ";
			}
		}
		return validateResult?"":invalidStr;
	}

}
