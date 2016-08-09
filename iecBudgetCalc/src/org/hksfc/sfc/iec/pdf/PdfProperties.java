/**
 *  TO access properties file and
 *  store access info as array and
 *  singleton design pattern
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-6</TD><TD>09/10/2013</TD><TD>PacificLink iMedia Ltd</TD><TD>Amendment based on client requirement</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.io.IOException;
import java.util.Properties;
/**
 * The class PdfProperties
 */
public class PdfProperties {

	private static PdfProperties instance;
	private static Properties properties;
	private final String CONFIGFILE = "config.properties";
	
	// property name
	private final String DPATH = "DOMAINPATH";
	private final String APATH = "APPPATH";
	private final String PPATH = "PATH";
	private final String RPATH = "RESPATH";
	
	private final String B1 = "BUDGETREPORTFILE1";
	private final String B2 = "BUDGETREPORTFILE2";
	private final String B3 = "BUDGETREPORTFILE3";
	private final String B4 = "BUDGETHEADERARG2";
	
	private final String B5 = "BUDGETREPORTFILE1TC";
	private final String B6 = "BUDGETREPORTFILE2TC";
	private final String B7 = "BUDGETREPORTFILE3TC";
	
	private final String S1 = "SAVINGHEADERARG2";
	private final String S2 = "SAVINGREPORTFILE1";
	private final String S3 = "SAVINGREPORTFILE2";
	private final String S4 = "SAVINGREPORTFILE3";
	private final String S5 = "SAVINGREPORTFILETC1";
	private final String S6 = "SAVINGREPORTFILETC2";
	private final String S7 = "SAVINGREPORTFILETC3";
	
	// site info
	public String DOMAINPATH;
	public String APPPATH;
	
	// resource info
	public String PATH;
	public String RESPATH;
	
	// budget
	public String BUDGETREPORTFILE1;
	public String BUDGETREPORTFILE2;
	public String BUDGETREPORTFILE3;
	public String BUDGETHEADERARG2;

	public String BUDGETREPORTFILE1TC;
	public String BUDGETREPORTFILE2TC;
	public String BUDGETREPORTFILE3TC;
	
	public final String P1PREFIX = "p1";
	public final String P2PREFIX = "p2";
	public final String P3PREFIX = "p3";
	public final Number DEFAULTVALUE = 0;	
	
	// saving
	//public String SAVINGREPORTFILE;
	//public String SAVINGREPORTFILETC;
	public String SAVINGHEADERARG2;
	public String SAVINGREPORTFILE1;
	public String SAVINGREPORTFILE2;
	public String SAVINGREPORTFILE3;
	public String SAVINGREPORTFILETC1;
	public String SAVINGREPORTFILETC2;
	public String SAVINGREPORTFILETC3;
	
	public final String[] URLPATTERN = {"/pdfMonth.do", "/pdfFinal.do", "/pdfLong.do"};
	public final String[] PREFIX = {"month_", "final_", "long_"};
	public final String DATA = "data";
	public final String INFO = "info";
	public final String[] DELIMITER = {"&", ",", "]"};
	public final String[] INFODELIMITER = {"], ", "\", \"", "[\""};
	
	// common	
	public final String CONTENTTYPE = "application/pdf";
	public final String HEADERARG1 = "Content-Disposition";
	
	/**
	 * PdfProperties() private
	 */
	private PdfProperties() {
		properties = new Properties();
		try {
			properties.load(Thread.currentThread().getContextClassLoader().getResourceAsStream(CONFIGFILE));
			setProperties(properties);
		} catch (IOException e) {
    		Log.getCMLog().getLogger().error("Error encountered while trying to load Properties file in PdfProperties");
		}
	}
    /**
     * @return instance of PdfProperties()
     */
    public static PdfProperties getInstance() {
    	
    	if(instance == null) {
    		synchronized(PdfProperties.class) {
    			instance = new PdfProperties();
    		}
    	}
    	return instance;
    }	
	/**
	 * @param properties
	 */
    private void setProperties(Properties properties) {
    	
    	DOMAINPATH = properties.getProperty(DPATH);
    	APPPATH = properties.getProperty(APATH);
    	PATH = properties.getProperty(PPATH);
    	RESPATH = properties.getProperty(RPATH);
    	
    	BUDGETREPORTFILE1 = properties.getProperty(B1);
    	BUDGETREPORTFILE2 = properties.getProperty(B2);
    	BUDGETREPORTFILE3 = properties.getProperty(B3);
    	BUDGETHEADERARG2 = properties.getProperty(B4);
    	
    	BUDGETREPORTFILE1TC = properties.getProperty(B5); 
    	BUDGETREPORTFILE2TC = properties.getProperty(B6);
    	BUDGETREPORTFILE3TC = properties.getProperty(B7);
    	
    	SAVINGHEADERARG2 = properties.getProperty(S1);
    	SAVINGREPORTFILE1 = properties.getProperty(S2);
    	SAVINGREPORTFILE2 = properties.getProperty(S3);
    	SAVINGREPORTFILE3 = properties.getProperty(S4);
    	SAVINGREPORTFILETC1 = properties.getProperty(S5);
    	SAVINGREPORTFILETC2 = properties.getProperty(S6);
    	SAVINGREPORTFILETC3 = properties.getProperty(S7);
    	
    }
    
}
