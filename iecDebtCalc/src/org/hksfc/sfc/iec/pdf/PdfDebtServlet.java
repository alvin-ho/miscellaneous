/**
 *  PdfDebtServlet to assign servlet
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-22</TD><TD>02/01/2014</TD><TD>Urban Air Design Limited</TD><TD>First version</TD></TR>
 * <TR><TD>ASIEC-29</TD><TD>09/04/2014</TD><TD>Urban Air Design Limited</TD><TD>Update the layout for Overview</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanArrayDataSource;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.FileBufferedOutputStream;
import net.sf.jasperreports.engine.util.JRLoader;
/**
 * Servlet implementation class for Servlet: PdfDebtServlet
 *
 */
 public class PdfDebtServlet extends HttpServlet {
		private static final long serialVersionUID = 1L;

		ChartBean[] chartArray1;
		ChartBean[] chartArray2;
		ChartBean[] chartArray3;
		
		ChartBean[] chartArray10;
		ChartBean[] chartArray11;
		ChartBean[] chartArray12;
		
		DebtBean[] listArray1;
		DebtBean[] listArray2;
		DebtBean[] listArray3;
		
		
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
			try {
				request.setCharacterEncoding("UTF-8");
				response.setCharacterEncoding("UTF-8");
	
				//1. Get All Required Variables
				String language = stripXSS(String.valueOf(request.getParameter("lang")));
				String print = stripXSS(String.valueOf(request.getParameter("print")));
				
				//Get Current Tab
				String current_tab = stripXSS(String.valueOf(request.getParameter("current_tab")));
				
				// 0 for ENG & 1 for CHI
				int lang = 0; 
				if(language.equalsIgnoreCase("0")) {
					lang = 0;
				}else {
					lang = 1;
				}
				
				//2 Load all jasperFile
				String decoded = PdfProperties.getInstance().PATH;
				
				//File jasperFile = new File(decoded, ((lang == 0) ? PdfProperties.getInstance().DEBTREPORTFILE : PdfProperties.getInstance().DEBTREPORTFILETC));
				
				//Jasper file to get
		        String jasperFile1 = null;
		        String jasperFile2 = null;
		        String jasperFile3 = null;
		        String jasperFile4 = null;
		        String jasperFile5 = null;
		        String jasperFile6 = null;
		        String jasperFile7 = null;
		        String jasperFile71 = null;
		        String jasperFile81 = null;
		        String jasperFile91 = null;
		        String jasperFile8 = null;
		        String jasperFile9 = null;
		        String jasperFile10 = null;
		        String jasperFile11 = null;
		        String jasperFile12 = null;
	
		        if(lang == 0) {
		        	jasperFile1 = decoded + PdfProperties.getInstance().DEBTREPORTFILE1;
		        	jasperFile2 = decoded + PdfProperties.getInstance().DEBTREPORTFILE2;
		        	jasperFile3 = decoded + PdfProperties.getInstance().DEBTREPORTFILE3;
		        	jasperFile4 = decoded + PdfProperties.getInstance().DEBTREPORTFILE4;
		        	jasperFile5 = decoded + PdfProperties.getInstance().DEBTREPORTFILE5;
		        	jasperFile6 = decoded + PdfProperties.getInstance().DEBTREPORTFILE6;
		        	jasperFile7 = decoded + PdfProperties.getInstance().DEBTREPORTFILE7;
		        	jasperFile71 = decoded + PdfProperties.getInstance().DEBTREPORTFILE71;
		        	jasperFile81 = decoded + PdfProperties.getInstance().DEBTREPORTFILE81;
		        	jasperFile91 = decoded + PdfProperties.getInstance().DEBTREPORTFILE91;
		        	jasperFile8 = decoded + PdfProperties.getInstance().DEBTREPORTFILE8;
		        	jasperFile9 = decoded + PdfProperties.getInstance().DEBTREPORTFILE9;
		        	jasperFile10 = decoded + PdfProperties.getInstance().DEBTREPORTFILE10;
		        	jasperFile11 = decoded + PdfProperties.getInstance().DEBTREPORTFILE11;
		        	jasperFile12 = decoded + PdfProperties.getInstance().DEBTREPORTFILE12;
		        }else {
		        	jasperFile1 = decoded + PdfProperties.getInstance().DEBTREPORTFILE1TC;
		        	jasperFile2 = decoded + PdfProperties.getInstance().DEBTREPORTFILE2TC;
		        	jasperFile3 = decoded + PdfProperties.getInstance().DEBTREPORTFILE3TC;
		        	jasperFile4 = decoded + PdfProperties.getInstance().DEBTREPORTFILE4TC;
		        	jasperFile5 = decoded + PdfProperties.getInstance().DEBTREPORTFILE5TC;
		        	jasperFile6 = decoded + PdfProperties.getInstance().DEBTREPORTFILE6TC;
		        	jasperFile7 = decoded + PdfProperties.getInstance().DEBTREPORTFILE7TC;
		        	jasperFile71 = decoded + PdfProperties.getInstance().DEBTREPORTFILE71TC;
		        	jasperFile81 = decoded + PdfProperties.getInstance().DEBTREPORTFILE81TC;
		        	jasperFile91 = decoded + PdfProperties.getInstance().DEBTREPORTFILE91TC;
		        	jasperFile8 = decoded + PdfProperties.getInstance().DEBTREPORTFILE8TC;
		        	jasperFile9 = decoded + PdfProperties.getInstance().DEBTREPORTFILE9TC;
		        	jasperFile10 = decoded + PdfProperties.getInstance().DEBTREPORTFILE10TC;
		        	jasperFile11 = decoded + PdfProperties.getInstance().DEBTREPORTFILE11TC;
		        	jasperFile12 = decoded + PdfProperties.getInstance().DEBTREPORTFILE12TC;
		        }
				
				//JasperPrint Var
				JasperPrint jasperPrint = null;
				JasperPrint jasperPrint2 = null;
				JasperPrint jasperPrint3 = null;
				JasperPrint jasperPrint4 = null;
				JasperPrint jasperPrint5 = null;
				JasperPrint jasperPrint6 = null;
				JasperPrint jasperPrint7 = null;
				JasperPrint jasperPrint71 = null;
				JasperPrint jasperPrint81 = null;
				JasperPrint jasperPrint91 = null;
				JasperPrint jasperPrint8 = null;
				JasperPrint jasperPrint9 = null;
				JasperPrint jasperPrint10 = null;
				JasperPrint jasperPrint11 = null;
				JasperPrint jasperPrint12 = null;
				//String path=Thread.currentThread().getContextClassLoader().getResource("").getPath();
				
				//3. Parameters
				Map<String, Object> parameters = new HashMap<String, Object>();
				Map<String, Object> parameters2 = new HashMap<String, Object>();
				
				Map<String, Object> parameters3 = new HashMap<String, Object>();
				Map<String, Object> parameters4 = new HashMap<String, Object>();
				
				Map<String, Object> parameters5 = new HashMap<String, Object>();
				Map<String, Object> parameters6 = new HashMap<String, Object>();
				
				Map<String, Object> parameters7 = new HashMap<String, Object>();
				
				
				//Get other value
				String dsr = stripXSS(request.getParameter("save_dsr"));
			
				/**Overview and Listing**/
				//cc debt overview
				String cc_sum_data = stripXSS(request.getParameter("cc_sum_data"));
				GenOverview(parameters,cc_sum_data,"CC",request,response,lang);
				
				//cc loan listing
				String listing = stripXSS(request.getParameter("cc_list_data"));
				listArray1 = GenListData(listing,request,response,lang);
				
				//pl debt overview
				String hpl_sum_data = stripXSS(request.getParameter("hpl_sum_data"));
				GenOverview(parameters3,hpl_sum_data,"PL",request,response,lang);
				
				//pl loan listing
				String pllisting = stripXSS(request.getParameter("hpl_list_data"));
				listArray2 = GenListData(pllisting,request,response,lang);
				
				//ol debt overview
				String ol_sum_data = stripXSS(request.getParameter("ol_sum_data"));
				GenOverview(parameters5,ol_sum_data,"OL",request,response,lang);
				
				//ol loan listing
				String ollisting = stripXSS(request.getParameter("ol_list_data"));
				listArray3 = GenListData(ollisting,request,response,lang);
				
			
				/** 4. Get Data**/
				if(current_tab.equals("0")){
					
					//cc for Bar Chart 
					String data = stripXSS(request.getParameter("cc_data"));
					chartArray1 = GenChartData(data,lang,current_tab,request, response);
					
					//other Chart sort by debt amount
					String data_by_debt = stripXSS(request.getParameter("cc_data_by_debt"));
					chartArray10 = GenChartData(data_by_debt,lang,current_tab,request, response);
					
					//other Chart sort by APR
					String data_by_apr = stripXSS(request.getParameter("cc_data_by_rate"));
					chartArray11 = GenAPRChartData(data_by_apr,lang,request, response);
					
					//other Chart sort by Period
					String data_by_period = stripXSS(request.getParameter("cc_data_by_period"));
					chartArray12 = GenPeriodChartData(data_by_period,lang,request, response);
					
					
					GenOther(parameters,parameters2,dsr,decoded,lang);
				}else if(current_tab.equals("1")){
					
					//pl for Bar Chart 
					String data2 = stripXSS(request.getParameter("hpl_data"));
					chartArray2 = GenChartData(data2,lang,current_tab,request, response);
					
					GenOther(parameters3,parameters4,dsr,decoded,lang);
				}else if(current_tab.equals("2")){
	
					//pl for Bar Chart 
					String data3 = stripXSS(request.getParameter("ol_data"));
					chartArray3 = GenChartData(data3,lang,current_tab,request, response);
					
					GenOther(parameters5,parameters6,dsr,decoded,lang);
				}else if(current_tab.equals("3")){
					String view_sum_data = stripXSS(request.getParameter("view_sum_data"));
					GenAllOverview(parameters7,view_sum_data,"ALL",request, response);
					GenOverview(parameters7,cc_sum_data,"CC",request,response,lang);
					
					
					//get CCDSR
					String save_cc_dsr = stripXSS(request.getParameter("save_cc_dsr"));
					//get PLDSR
					String save_pl_dsr = stripXSS(request.getParameter("save_pl_dsr"));
					//get OLDSR
					String save_ol_dsr = stripXSS(request.getParameter("save_ol_dsr"));
					
					
					//other
					parameters7.put("PATH", decoded);
					parameters7.put("CCDSR", save_cc_dsr);
					
					//all page2	
					parameters3.put("PATH", decoded);
					parameters3.put("PLDSR", save_pl_dsr);
					
					//all page3
					parameters5.put("PATH", decoded);
					parameters5.put("OLDSR", save_ol_dsr);
				}
		        
				// export PDF
	        
	        	//load path
	        	//JasperReport jasperReport = (JasperReport) JRLoader.loadObjectFromFile(jasperFile.getPath());
	        	ArrayList<JasperPrint> jList = new ArrayList<JasperPrint>();
	        	
	        	if(current_tab.equals("0")){
	        		//cc
		        	JasperReport jasperReport1 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile1);
		        	JasperReport jasperReport2 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile2);
		        	
		        	JasperReport jasperReport10 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile10);
		        	JasperReport jasperReport11 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile11);
		        	JasperReport jasperReport12 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile12);
		        	
		        	jasperPrint = JasperFillManager.fillReport(jasperReport1, parameters, new JRBeanArrayDataSource(listArray1));
		        	jasperPrint2 = JasperFillManager.fillReport(jasperReport2, parameters2, new JRBeanArrayDataSource(chartArray1));
		        	
		        	jasperPrint10 = JasperFillManager.fillReport(jasperReport10, parameters2, new JRBeanArrayDataSource(chartArray10));
		        	jasperPrint11 = JasperFillManager.fillReport(jasperReport11, parameters2, new JRBeanArrayDataSource(chartArray11));
		        	jasperPrint12 = JasperFillManager.fillReport(jasperReport12, parameters2, new JRBeanArrayDataSource(chartArray12));
		        	
		        	//jList
		        	jList.add(jasperPrint);
		        	jList.add(jasperPrint2);
		        	jList.add(jasperPrint10);
		        	jList.add(jasperPrint11);
		        	jList.add(jasperPrint12);
		        	
	        	}else if (current_tab.equals("1")){
	        		
	        		JasperReport jasperReport3 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile3);
	        		JasperReport jasperReport4 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile4);
	        		jasperPrint3 = JasperFillManager.fillReport(jasperReport3, parameters3, new JRBeanArrayDataSource(listArray2));
	        		jasperPrint4 = JasperFillManager.fillReport(jasperReport4, parameters4, new JRBeanArrayDataSource(chartArray2));
	        		
	        		//jList
	        		jList.add(jasperPrint3);
	        		jList.add(jasperPrint4);
	        	}else if (current_tab.equals("2")){
	        		
	        		JasperReport jasperReport5 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile5);
	        		JasperReport jasperReport6 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile6);
	        		jasperPrint5 = JasperFillManager.fillReport(jasperReport5, parameters5, new JRBeanArrayDataSource(listArray3));
	        		jasperPrint6 = JasperFillManager.fillReport(jasperReport6, parameters6, new JRBeanArrayDataSource(chartArray3));
	        		
	        		//jList
	        		jList.add(jasperPrint5);
	        		jList.add(jasperPrint6);
	        	}else if (current_tab.equals("3")){
	        		
	        		JasperReport jasperReport7 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile7);
	        		JasperReport jasperReport71 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile71);
	        		JasperReport jasperReport81 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile81);
	        		JasperReport jasperReport91 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile91);
	        		//same theme
	        		JasperReport jasperReport8 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile8);
	        		JasperReport jasperReport9 = (JasperReport) JRLoader.loadObjectFromFile(jasperFile9);
	        		
	        		jasperPrint7 = JasperFillManager.fillReport(jasperReport7, parameters7, new JRBeanArrayDataSource(listArray1));
	        		jasperPrint71 = JasperFillManager.fillReport(jasperReport71, parameters7, new JRBeanArrayDataSource(listArray1));
	        		jasperPrint81 = JasperFillManager.fillReport(jasperReport81, parameters7, new JRBeanArrayDataSource(listArray1));
	        		jasperPrint91 = JasperFillManager.fillReport(jasperReport91, parameters7, new JRBeanArrayDataSource(listArray1));
	        		
	        		jasperPrint8 = JasperFillManager.fillReport(jasperReport8, parameters3, new JRBeanArrayDataSource(listArray2));
	        		jasperPrint9 = JasperFillManager.fillReport(jasperReport9, parameters5, new JRBeanArrayDataSource(listArray3));
	        		
	        		//jList
	        		jList.add(jasperPrint7);
	        		jList.add(jasperPrint71);
	        		jList.add(jasperPrint8);
	        		jList.add(jasperPrint81);
	        		jList.add(jasperPrint9);
	        		jList.add(jasperPrint91);
	        	}
	        	
	        	//jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JREmptyDataSource());
	        	
		        if (jasperPrint != null || jasperPrint3 != null || jasperPrint5 != null || jasperPrint7 != null) {
		            FileBufferedOutputStream fbos = new FileBufferedOutputStream();  
		            JRPdfExporter exporter = new JRPdfExporter();  
		            exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, fbos);  
		            exporter.setParameter(JRExporterParameter.JASPER_PRINT_LIST, jList);  //
		            
		            exporter.exportReport();  
	                fbos.close();  
	                if (fbos.size() > 0) {
	                    response.setContentType(PdfProperties.getInstance().CONTENTTYPE);
	                    
	                    // specify the file name of PDF
	                    
	                    String fileLang = (lang == 0) ? "_eng_" : "_chi_";
	                    Format formatter = new SimpleDateFormat("dd-MM-yyyy");
	                    String date = formatter.format(new Date()); 
	                    String arg2 = PdfProperties.getInstance().DEBTHEADERARG;
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
	                    Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet successfully");
	                }
	              
		        }
	        } catch (Exception e) {
	        	Log.getCMLog().getLogger().error("Error encountered while trying to generate PDF file in PdfSavingServlet.", e);
	    		RequestDispatcher view = request.getRequestDispatcher("/error500.html");
	    		view.forward(request, response);
	        }
	        
		}
		
		
		//5. Function
		/*Generate Chart Data*/
		/**
	     * @param data
	     * @param lang
	     * @param current_tab
	     * @param request
	     * @param response
	     * @return chartArray;
		 * @throws IOException 
		 * @throws ServletException 
	     */	
		public ChartBean[] GenChartData(String data,int lang, String current_tab,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String[] datas = data.split(" , ");
			ChartBean[] chartArray = new ChartBean[(datas.length*2)];
			int j;
			int k;
			String series ="";
			String series2 = "";
			
			for(int i = 0; i < datas.length; i++) {
				String[] CCData = datas[i].split(" / ");
				
				String category = CCData[0]; //string
				String amountStr = CCData[5]; //num
				String amountStr2 = CCData[2]; //num
				
				if(current_tab.equals("0")){
					series = (lang == 0) ? DebtWording.LABELPRINCIPALEN : DebtWording.LABELPRINCIPALTC;
				}else{
					series = (lang == 0) ? DebtWording.LABELPLEN : DebtWording.LABELPLTC;
				}
				
				if(current_tab.equals("2")){
					series2 = (lang == 0) ? DebtWording.LABELINTERESTEN : DebtWording.LABELINTERESTTC;
				}else{
					series2 = (lang == 0) ? DebtWording.LABELCOSTEN : DebtWording.LABELCOSTTC;
				}
				
				//check length
				int length = category.length();
				if(length>30){
					Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenChartData.");
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenChartData.");
				}else if(isNumeric(amountStr)==false){
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to value is not numeric.");
				}else if (isNumeric(amountStr2)==false){
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to value is not numeric.");
				}
				
				
				Number amount = new BigDecimal(amountStr);
				Number amount2 = new BigDecimal(amountStr2);
				
				
				if(i==0){
					j=0;
					k=1;
				}else{
					j=i*2;
					k=j+1;
				}
				
				chartArray[j] = new ChartBean(category, amount,series);
				chartArray[k] = new ChartBean(category, amount2,series2);
			}
			return chartArray;
		}
		
		/*Generate Chart Data*/
		/**
	     * @param data
	     * @param lang
	     * @param request
	     * @param response
	     * @return chartArray;
		 * @throws IOException 
		 * @throws ServletException 
	     */
		public ChartBean[] GenAPRChartData(String data,int lang,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String[] datas = data.split(" , ");
			ChartBean[] chartArray = new ChartBean[(datas.length)];
			
			for(int i = 0; i < datas.length; i++) {
				String[] CCData = datas[i].split(" / ");
				
				String category = CCData[0];
				String amountStr = CCData[6];

				
				String series = (lang == 0) ? DebtWording.LABELAPREN : DebtWording.LABELAPRTC;

				
				//check length
				int length = category.length();
				if(length>30){
					Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenAPRChartData.");
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenAPRChartData.");
				}else if(isNumeric(amountStr)==false){
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to value is not numeric.");
				}

				
				Number amount = new BigDecimal(amountStr);
				
				
				chartArray[i] = new ChartBean(category, amount,series);
			}
			return chartArray;
		}
		
		/*Generate Chart Data*/
		/**
	     * @param data
	     * @param lang
	     * @param request
	     * @param response
	     * @return chartArray;
		 * @throws IOException 
		 * @throws ServletException 
	     */
		public ChartBean[] GenPeriodChartData(String data,int lang,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String[] datas = data.split(" , ");
			ChartBean[] chartArray = new ChartBean[(datas.length)];
			
			for(int i = 0; i < datas.length; i++) {
				String[] CCData = datas[i].split(" / ");
				
				String category = CCData[0];
				String amountStr = CCData[4];

				
				String series = (lang == 0) ? DebtWording.LABELPERIODEN : DebtWording.LABELPERIODTC;

				//check length
				int length = category.length();
				if(length>30){
					Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenPeriodChartData.");
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenPeriodChartData.");
				}else if(isNumeric(amountStr)==false){
					throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to value is not numeric.");
				}
				
				Number amount = new BigDecimal(amountStr);
				
				
				chartArray[i] = new ChartBean(category, amount,series);
			}
			return chartArray;
		}
		
		/*Generate List Data*/
		/**
	     * @param data
	     * @param request
	     * @param response
	     * @param lang
	     * @return beanArray;
		 * @throws IOException 
		 * @throws ServletException 
	     */
		public DebtBean[] GenListData(String data,HttpServletRequest request, HttpServletResponse response, Integer lang) throws ServletException, IOException{
			//check length
			int length = data.length();
			if(length>2000){
				Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenListData.");
				throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenListData.");
			}
			
			String[] listing_datas = data.split(" , ");
			
			DebtBean[] beanArray = new DebtBean[(listing_datas.length)];
			for(int i = 0; i < listing_datas.length; i++) {
				String[] Data = listing_datas[i].split(" / ");
				
				String name = Data[0];
				String totalpay = Data[1];
				String totalcost = Data[2];
				String repay = Data[3];
				String period = Data[4]; 
				String principal = Data[5];
				String rate = Data[6]; 
				
				/*Checking Start*/
				/*
				int length_name = name.length();
				if(length_name>30){
					ErrorPage(request,response);
				}
				
				if(isNumeric(ConvertDollar(totalpay,lang))==false){
					ErrorPage(request,response);
				}
				if(isNumeric(ConvertDollar(totalcost,lang))==false){
					ErrorPage(request,response);
				}
				if(isNumeric(ConvertDollar(repay,lang))==false){
					ErrorPage(request,response);
				}
				if(isNumeric(ConvertMonth(period,lang))==false){
					ErrorPage(request,response);
				}
				if(isNumeric(ConvertDollar(principal,lang))==false){
					ErrorPage(request,response);
				}
				if(isNumeric(ConvertPrecent(rate))==false){
					ErrorPage(request,response);
				}
				*/
				/*Checking End*/
				
				beanArray[i] = new DebtBean(name, totalpay,totalcost,repay, period, principal, rate);
			}
			return beanArray;
		}
		
		/*Generate Overview*/
		/**
	     * @param parameters
	     * @param data
	     * @param name
	     * @param request
	     * @param response
	     * @param lang
		 * @throws IOException 
		 * @throws ServletException 
	     */
		public void GenOverview(Map<String, Object> parameters, String data, String name,HttpServletRequest request, HttpServletResponse response, Integer lang ) throws ServletException, IOException {
			//checking length
			int length = data.length();
			if(length>1000){
				Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenOverview.");
				throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenOverview.");
			}
			
			
			String[] cc_sum_datas = data.split(" , ");
			for(int i = 0; i < cc_sum_datas.length; i++) {
				String[] get_cc_sum_Data = cc_sum_datas[i].split(" / ");
				
				String num = get_cc_sum_Data[0];
				String principal = get_cc_sum_Data[1];
				String tdebt = get_cc_sum_Data[2];
				String tcost = get_cc_sum_Data[3];
				String period = get_cc_sum_Data[4];
				
				parameters.put(name+"SUMNUM", num);
				parameters.put(name+"SUMPRI", principal);
				parameters.put(name+"SUMDEBT", tdebt);
				parameters.put(name+"SUMCOST", tcost);
				parameters.put(name+"SUMPERIOD", period);
			}
			
		}
		/**
	     * @param parameters1
	     * @param parameters2
	     * @param dsr
	     * @param decoded
	     * @param lang
	     */
		public void GenOther(Map<String, Object> parameters1, Map<String, Object> parameters2,String dsr, String decoded, Integer lang) {
			
			parameters1.put("DSR", dsr);
			parameters1.put("PATH", decoded);
			
			parameters2.put("PATH", decoded);
			
			String label = (lang == 0) ? DebtWording.XAISLABELEN : DebtWording.XAISLABELTC;
			parameters2.put("XAISLABELEN", label);
		}
		
		/*Generate All Overview*/
		/**
	     * @param parameters
	     * @param data
	     * @param name
	     * @param request
	     * @param response
		 * @throws IOException 
		 * @throws ServletException 
	     */
		public void GenAllOverview(Map<String, Object> parameters, String data, String name,HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
			//checking length
			int length = data.length();
			if(length>1000){
				Log.getCMLog().getLogger().info("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenAllOverview.");
				throw new RuntimeException("Generate PDF file in PdfDebtServlet unsuccessfully due to name's length exceed: GenAllOverview.");
			}
			
			String[] cc_sum_datas = data.split(" , ");
			for(int i = 0; i < cc_sum_datas.length; i++) {
				String[] get_cc_sum_Data = cc_sum_datas[i].split(" / ");
				
				String totaldebt = get_cc_sum_Data[0];
				String totalcost = get_cc_sum_Data[1];
				String maxperiod = get_cc_sum_Data[2];
				String totaldsr = get_cc_sum_Data[3];
				
				parameters.put(name+"DEBT", totaldebt);
				parameters.put(name+"COST", totalcost);
				parameters.put(name+"PERIOD", maxperiod);
				parameters.put(name+"DSR", totaldsr);
			}
			
		}
		
		/**
	     * @param request
	     * @param response
		 * @throws IOException 
		 * @throws ServletException 
	     */
		/*public void ErrorPage(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
    		RequestDispatcher view = request.getRequestDispatcher("/error500.html");
    		view.forward(request, response);
		}*/
		
		/**
	     * @param value
	     * @return Boolean;
	     */
		public Boolean isNumeric (String value){
		    try{
		        new java.math.BigDecimal(value);
		        	return true;
		        }catch(NumberFormatException ex) {
		        	Log.getCMLog().getLogger().warn("Generate PDF file in PdfDebtServlet unsuccessfully due to value is not numeric.", ex);
		        	return false;
		        }
		}
		
		private static Pattern[] patterns = new Pattern[]{
	        // Script fragments
	        Pattern.compile("<script>(.*?)</script>", Pattern.CASE_INSENSITIVE),
	        // src='...'
	        Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
	        Pattern.compile("src[\r\n]*=[\r\n]*\\\"(.*?)\\\"", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
	        // lonely script tags
	        Pattern.compile("</script>", Pattern.CASE_INSENSITIVE),
	        Pattern.compile("<script(.*?)>", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
	        // eval(...)
	        Pattern.compile("eval\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
	        // expression(...)
	        Pattern.compile("expression\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
	        // javascript:...
	        Pattern.compile("javascript:", Pattern.CASE_INSENSITIVE),
	        // vbscript:...
	        Pattern.compile("vbscript:", Pattern.CASE_INSENSITIVE),
	        // onload(...)=...
	        Pattern.compile("onload(.*?)=", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL)
	    };
	    
		/**
	     * @param value
	     * @return String;
	     */
	    private String stripXSS(String value) {
	        if (value != null) {
	 
	            // Avoid null characters
	            value = value.replaceAll("\0", "");
	 
	            // Remove all sections that match a pattern
	            for (Pattern scriptPattern : patterns){
	                value = scriptPattern.matcher(value).replaceAll("");
	            }
	        }
	        return value;
	    }
	    
	    /**
	     * @param value
	     * @param lang
	     * @return String;
	     */
	    public String ConvertDollar (String value, Integer lang){
	    	String dollar_name = (lang == 0) ? DebtWording.HKDOLLAREN : DebtWording.HKDOLLARTC;
	    	String check_dollar = value.replace(dollar_name, "");

			check_dollar = check_dollar.replace(",", "");
			return check_dollar;
	    }
	    
	    /**
	     * @param value
	     * @return String;
	     */
	    public String ConvertPrecent (String value){
			String check_precent= value.replace("%", "");
			
			return check_precent;
	    }
	    
	    /**
	     * @param value
	     * @param lang
	     * @return String;
	     */
	    public String ConvertMonth (String value, Integer lang){
	    	String month_name = (lang == 0) ? DebtWording.MonthEN : DebtWording.MonthTC;
			String check_month = value.replace(month_name, "");
	    	
			return check_month;
	    }
	    

}
