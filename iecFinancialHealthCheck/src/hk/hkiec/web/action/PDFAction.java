package hk.hkiec.web.action;

import hk.hkiec.dataobject.User;
import hk.hkiec.utils.IOUtils;
import hk.hkiec.utils.Log4jHelper;
import hk.hkiec.utils.SystemSettings;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;

import org.apache.struts2.ServletActionContext;


/**
 *  PDF generation logic processing
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-40</TD><TD>08/01/2015</TD><TD>Media Explorer Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
public class PDFAction{
	User userInfo;
	ServletContext context=ServletActionContext.getServletContext();
	HttpServletRequest request = ServletActionContext. getRequest();
	
	  public static  byte[] readInputStream(InputStream inputStream) throws IOException {  
          byte[] buffer = new byte[1024];  
          int len = 0;  
          ByteArrayOutputStream bos = new ByteArrayOutputStream();  
          while((len = inputStream.read(buffer)) != -1) {  
              bos.write(buffer, 0, len);  
          }  
            
          bos.close();  
          return bos.toByteArray();  
      } 
	
	  public String printResumeToPDF(){ 
		  String order = request.getParameter("pdfOrderString");
		  String language = request.getParameter("iecLanguage");
		  String isPrint = request.getParameter("isprint");
		  String[] orderArray = null;
		  if(order!=null && !"".equals(order)){
			  orderArray = order.split("\\|\\|");
		  }
		  String jrxmlPath = SystemSettings.JASPER_PATH;
	        try {
		        Date dt=new Date();
		        DateFormat df = null;
		        String nowTime="";
		        if("eng".equals(language)){
		        	df = new SimpleDateFormat("dd MMM yyyy", Locale.ENGLISH);
			        nowTime= df.format(dt);
		        }else if("tch".equals(language)){
		        	df = new SimpleDateFormat("yyyy年MM月dd日");
			        nowTime= df.format(dt);
		        }else{
		        	ServletActionContext.getResponse().sendRedirect("/tools/fhc/tc/main/error404.html");
		        }
		        df = new SimpleDateFormat("yyyyMMddHHmmss");
		        String fileName = df.format(dt);
	        	
	        List<User> resumeInfo =new ArrayList<User>();
	        
	        InputStream inStream2 = null;
	        if("eng".equals(language)){
	        	inStream2 = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/eng_header.html");
	        }else if("tch".equals(language)){
	        	inStream2 = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/header.html");
	        }else{
	        	ServletActionContext.getResponse().sendRedirect("/tools/fhc/tc/main/error404.html");
	        }
	        byte[] bytes2 = IOUtils.readInputStream(inStream2);
	        String htmlHeader = new String(bytes2, "UTF-8");
	        StringBuilder headerBuilder = new StringBuilder();
	        
	        if(orderArray!=null && orderArray.length > 0){
	        	for(int j = 0; j < orderArray.length; j++){
	        		if(j==orderArray.length-1){
	        			if(orderArray[j].indexOf("[R]") > -1){
	        				htmlHeader = htmlHeader.replace("<img src=\"::domain::/tools/fhc/images/tc/menu_border.jpg\" alt=\"IMG\" />", "&nbsp;");
		    				String temp = htmlHeader.replace("::icon1::", "redFill1.png");
		    				temp = temp.replace("::title1::", getTitle(orderArray, j, 2));
		    				headerBuilder.append(temp);
		    			}
		    			if(orderArray[j].indexOf("[Y]") > -1){
		    				htmlHeader = htmlHeader.replace("<img src=\"::domain::/tools/fhc/images/tc/menu_border.jpg\" alt=\"IMG\" />", "&nbsp;");
		    				String temp = htmlHeader.replace("::icon1::", "yellowFill1.png");
		    				temp = temp.replace("::title1::", getTitle(orderArray, j, 2));
		    				headerBuilder.append(temp);
		    			}
		    			if(orderArray[j].indexOf("[G]") > -1){
		    				htmlHeader = htmlHeader.replace("<img src=\"::domain::/tools/fhc/images/tc/menu_border.jpg\" alt=\"IMG\" />", "&nbsp;");
		    				String temp = htmlHeader.replace("::icon1::", "greenFill1.png");
		    				temp = temp.replace("::title1::", getTitle(orderArray, j, 2));
		    				headerBuilder.append(temp);
		    			}
	        		}else{
	        			if(orderArray[j].indexOf("[R]") > -1){
		    				String temp = htmlHeader.replace("::icon1::", "redFill1.png");
		    				temp = temp.replace("::title1::", getTitle(orderArray, j, 2));
		    				headerBuilder.append(temp);
		    			}
		    			if(orderArray[j].indexOf("[Y]") > -1){
		    				String temp = htmlHeader.replace("::icon1::", "yellowFill1.png");
		    				temp = temp.replace("::title1::", getTitle(orderArray, j, 2));
		    				headerBuilder.append(temp);
		    			}
		    			if(orderArray[j].indexOf("[G]") > -1){
		    				String temp = htmlHeader.replace("::icon1::", "greenFill1.png");
		    				temp = temp.replace("::title1::", getTitle(orderArray, j, 2));
		    				headerBuilder.append(temp);
		    			}
	        		}
	    		}
	        }	        
	        
	        InputStream inStream4 = null;
	        if("eng".equals(language)){
	        	inStream4 = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/eng_plan.html");
	        }else if("tch".equals(language)){
	        	inStream4 = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/plan.html");
	        }else{
	        	ServletActionContext.getResponse().sendRedirect("/tools/fhc/tc/main/error404.html");
	        }
	        byte[] byte4 = IOUtils.readInputStream(inStream4);
	        String htmlPlan = new String(byte4, "UTF-8");
	        
	        InputStream inStream3 = null;
	        if("eng".equals(language)){
	        	inStream3 = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/eng_content.html");
	        }else if("tch".equals(language)){
	        	inStream3 = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/content.html");
	        }else{
	        	ServletActionContext.getResponse().sendRedirect("/tools/fhc/tc/main/error404.html");
	        }
	        byte[] bytes3 = IOUtils.readInputStream(inStream3);
	        String htmlContent = new String(bytes3, "UTF-8");
	        List<String> listContents = new ArrayList<String>();
	        
	        if(orderArray!=null && orderArray.length > 0){
	        	for(int i = 0; i < orderArray.length; i++){
	        		String tempHtmlPlan = htmlPlan;
	        		if(orderArray[i].indexOf("s3") > -1 && "goodpig.png".equals(getTitle(orderArray, i, 0))){
	        			tempHtmlPlan = "";
	        		}else if(orderArray[i].indexOf("s4") > -1 && "goodpig.png".equals(getTitle(orderArray, i, 0))){
	        			tempHtmlPlan = "";
	        		}else if(orderArray[i].indexOf("s6") > -1 && "goodpig.png".equals(getTitle(orderArray, i, 0))){
	        			tempHtmlPlan = "";
	        		}else if(orderArray[i].indexOf("s7") > -1 && "goodpig.png".equals(getTitle(orderArray, i, 0))){
	        			tempHtmlPlan = "";
	        		}else if(orderArray[i].indexOf("s9") > -1 && "goodpig.png".equals(getTitle(orderArray, i, 0))){
	        			tempHtmlPlan = "";
	        		}else if("".equals(getTitle(orderArray, i, 3)) || "&nbsp;".equals(getTitle(orderArray, i, 3))){
	        			tempHtmlPlan = "";
	        		}
	        		htmlContent = htmlContent.replace("::header::", headerBuilder);
	        		htmlContent = htmlContent.replace("::domain::", SystemSettings.DOMAIN);
	        		htmlContent = htmlContent.replace("::pdfdate::", nowTime);	        		
	        		String temp = htmlContent.replace("::pigTil::", getTitle(orderArray, i, 2));
	        		temp = temp.replace("::actionplan::", tempHtmlPlan);
	        		temp = temp.replace("::sPic::", getPic(orderArray, i));	
	        		temp = temp.replace("::pigIcon::", getTitle(orderArray, i, 0));
	        		
	        		if("eng".equals(language)){
	        			temp = temp.replace("::mainContent::", getTitle(orderArray, i, 1).replace("<p>", "<p style=\"font-weight:400;line-height: 20px;font-family: Gotham Rounded Book; margin:15px 0;font-size: 13px;\">")
			        			.replace("<li>", "<li style=\"font-weight:400;line-height: 20px;font-family: Gotham Rounded Book; margin:5px 0;font-size: 13px;\">")
			        			.replaceAll("<a[^>]*>", " ").replaceAll("</a>", "")
			        			.replaceAll("<strong[^>]*>", " ").replaceAll("</strong>", " "));
			        	temp = temp.replace("::mainPlan::", getTitle(orderArray, i, 3).replace("<p>",  "<p style=\"font-weight:400;line-height: 20px;font-family: Gotham Rounded Book; margin:15px 0;font-size: 13px;\">")
			        			.replace("<li>", "<li style=\"font-weight:400;line-height: 20px;font-family: Gotham Rounded Book; margin:5px 0;font-size: 13px;\">"));
	        		}else if("tch".equals(language)){
	        			temp = temp.replace("::mainContent::", getTitle(orderArray, i, 1).replace("<p>", "<p style=\"font-weight:400;line-height: 20px;font-family: MYuen HK Medium; margin:15px 0;font-size: 13px;\">")
			        			.replace("<li>", "<li style=\"font-weight:400;line-height: 20px;font-family: MYuen HK Medium; margin:5px 0;font-size: 13px;\">")
			        			.replaceAll("<a[^>]*>", " ").replaceAll("</a>", "")
			        			.replaceAll("<strong[^>]*>", " ").replaceAll("</strong>", " "));
			        	temp = temp.replace("::mainPlan::", getTitle(orderArray, i, 3).replace("<p>",  "<p style=\"font-weight:400;line-height: 20px;font-family: MYuen HK Medium; margin:15px 0;font-size: 13px;\">")
			        			.replace("<li>", "<li style=\"font-weight:400;line-height: 20px;font-family: MYuen HK Medium; margin:5px 0;font-size: 13px;\">"));
	        		}
	        		 
	        		listContents.add(temp);
	        	}
	        }
	        
	        InputStream inStream = null;
	        if("eng".equals(language)){
	        	inStream = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/eng_gen_pdf.html");
	        }else if("tch".equals(language)){
	        	inStream = ServletActionContext.getServletContext().getResourceAsStream("/tc/template/gen_pdf.html");
	        }else{
	        	ServletActionContext.getResponse().sendRedirect("/tools/fhc/tc/main/error404.html");
	        }
	        byte[] bytes = IOUtils.readInputStream(inStream);
	        String htmlData = new String(bytes, "UTF-8");
	        if(listContents!=null && listContents.size() > 0){
	        	for(String c : listContents){	        		
	        		String tempC = htmlData.replace("::content::", c);
	        		tempC = tempC.replace("::domain::", SystemSettings.DOMAIN);
	        		User user=new User();
	    	        user.setName(tempC);
	    	        resumeInfo.add(user);
	        	}
	        }
	        
	 
	        Map<String, Object> parameters = new HashMap<String, Object>(); 
	        
	        String compilePath = SystemSettings.JASPER_PATH;
	        if(compilePath!=null && !"".equals(compilePath)){
	        	compilePath = compilePath.substring(0, compilePath.lastIndexOf("/"));
	        	Log4jHelper.log(PDFAction.class.getName(), "compilePath: "+compilePath);
	        }
	        parameters.put("SUBREPORT_DIR", compilePath);
	        
	        JRDataSource dataSource = new JRBeanCollectionDataSource(resumeInfo);
	       
	        
	        	JasperReport report = (JasperReport)JRLoader.loadObjectFromFile(jrxmlPath);
	            
	            JasperPrint jasperPrint = JasperFillManager.fillReport(report,parameters, dataSource);  
	         
	            HttpServletResponse response = ServletActionContext.getResponse();
	            if("wantprint".equals(isPrint)){
	            	OutputStream ouputStream = response.getOutputStream();
	            	response.setContentType("application/pdf");
	            	// 使用JRPdfExproter导出器导出pdf  
		            JRPdfExporter exporter = new JRPdfExporter();  
		            exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
		            exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(ouputStream));
		            exporter.exportReport();// 导出 
		            ouputStream.flush();
		            ouputStream.close();// 关闭流
		            Log4jHelper.log(PDFAction.class.getName(), "print pdf file success.");
	            }else{
		            OutputStream ouputStream = response.getOutputStream();  
		            // 设置相应参数，以附件形式保存PDF  
		            response.setContentType("application/pdf;charset=UTF-8");  
		            response.setCharacterEncoding("UTF-8");  
		            response.setHeader("Content-type", "application/pdf;charset=UTF-8");
		            response.setHeader("Content-Disposition", "attachment; filename=\""  
		                    + new String(fileName.getBytes(),"UTF-8" )
		                    + ".pdf\""); 
		            // 使用JRPdfExproter导出器导出pdf  
		            JRPdfExporter exporter = new JRPdfExporter();  
		            exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
		            exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(ouputStream));
		            exporter.exportReport();// 导出  
		            ouputStream.close();// 关闭流 
		            Log4jHelper.log(PDFAction.class.getName(), "download pdf file success.");
	            }	            
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
				Log4jHelper.log(PDFAction.class.getName(), e.toString());
			}
	        return null;  
	    }

	private String getTitle(String[] orderArray, int j, int index) {
		String key = orderArray[j].substring(1,3);
		String sessionSave = "";
		if(request.getSession().getAttribute(key) != null){
			sessionSave = (String)request.getSession().getAttribute(key);
		}
		String result = "";
		if(sessionSave!=null){
			String[] tempArray = sessionSave.split("\\|\\|");
			if(tempArray!=null && tempArray.length>0){
				result = tempArray[index];
			}
		}
		return result;
	}
	
	private String getPic(String[] orderArray, int j){
		String key = orderArray[j].substring(1,3);
		String result = "";
		if(key != null && !"".equals(key)){
			if("s2".equals(key)){
				result = "income_i.png";
			}else if("s3".equals(key)){
				result = "credit_manage_i.png";
			}else if("s4".equals(key)){
				result = "financial_i.png";
			}else if("s5".equals(key)){
				result = "investment_i.png";
			}else if("s6".equals(key)){
				result = "saving_i.png";
			}else if("s7".equals(key)){
				result = "insurance_i.png";
			}else if("s8".equals(key)){
				result = "retire_i.png";
			}else if("s9".equals(key)){
				result = "estate_i.png";
			}
		}
		return result;
	}


		public User getUserInfo() {
			return userInfo;
		}

		public void setUserInfo(User userInfo) {
			this.userInfo = userInfo;
		}  
	}
