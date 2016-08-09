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
 * <TR><TD>ASIEC-22</TD><TD>18/03/2014</TD><TD>Urban Air Design Limited</TD><TD>Amendment based on client requirement</TD></TR>
 * <TR><TD>ASIEC-29</TD><TD>09/04/2014</TD><TD>Urban Air Design Limited</TD><TD>Update the layout for Overview</TD></TR>
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
	private final String PPATH = "PATH";
	
	//Debt
	private final String DH = "DEBTHEADERARG";
	
	//Define Debt
	private final String D1 = "DEBTREPORTFILE1";
	private final String D2 = "DEBTREPORTFILE2";
	private final String D3 = "DEBTREPORTFILE3";
	private final String D4 = "DEBTREPORTFILE4";
	private final String D5 = "DEBTREPORTFILE5";
	private final String D6 = "DEBTREPORTFILE6";
	private final String D7 = "DEBTREPORTFILE7";
	private final String D71 = "DEBTREPORTFILE71";
	private final String D81 = "DEBTREPORTFILE81";
	private final String D91 = "DEBTREPORTFILE91";
	private final String D8 = "DEBTREPORTFILE8";
	private final String D9 = "DEBTREPORTFILE9";
	private final String D10 = "DEBTREPORTFILE10";
	private final String D11 = "DEBTREPORTFILE11";
	private final String D12 = "DEBTREPORTFILE12";
	private final String D13 = "DEBTREPORTFILE13";
	private final String D14 = "DEBTREPORTFILE14";
	
	private final String D1TC = "DEBTREPORTFILE1TC";
	private final String D2TC = "DEBTREPORTFILE2TC";
	private final String D3TC = "DEBTREPORTFILE3TC";
	private final String D4TC = "DEBTREPORTFILE4TC";
	private final String D5TC = "DEBTREPORTFILE5TC";
	private final String D6TC = "DEBTREPORTFILE6TC";
	private final String D7TC = "DEBTREPORTFILE7TC";
	private final String D71TC = "DEBTREPORTFILE71TC";
	private final String D81TC = "DEBTREPORTFILE81TC";
	private final String D91TC = "DEBTREPORTFILE91TC";
	private final String D8TC = "DEBTREPORTFILE8TC";
	private final String D9TC = "DEBTREPORTFILE9TC";
	private final String D10TC = "DEBTREPORTFILE10TC";
	private final String D11TC = "DEBTREPORTFILE11TC";
	private final String D12TC = "DEBTREPORTFILE12TC";
	private final String D13TC = "DEBTREPORTFILE13TC";
	private final String D14TC = "DEBTREPORTFILE14TC";
	
	// site info
	public String DOMAINPATH;
	public String APPPATH;
	
	// resource info
	public String PATH;
	
	//Debt header
	public String DEBTHEADERARG;
	
	//Set debt var
	public String DEBTREPORTFILE1;
	public String DEBTREPORTFILE2;
	public String DEBTREPORTFILE3;
	public String DEBTREPORTFILE4;
	public String DEBTREPORTFILE5;
	public String DEBTREPORTFILE6;
	public String DEBTREPORTFILE7;
	public String DEBTREPORTFILE71;
	public String DEBTREPORTFILE81;
	public String DEBTREPORTFILE91;
	public String DEBTREPORTFILE8;
	public String DEBTREPORTFILE9;
	public String DEBTREPORTFILE10;
	public String DEBTREPORTFILE11;
	public String DEBTREPORTFILE12;

	
	
	public String DEBTREPORTFILE1TC;
	public String DEBTREPORTFILE2TC;
	public String DEBTREPORTFILE3TC;
	public String DEBTREPORTFILE4TC;
	public String DEBTREPORTFILE5TC;
	public String DEBTREPORTFILE6TC;
	public String DEBTREPORTFILE7TC;
	public String DEBTREPORTFILE71TC;
	public String DEBTREPORTFILE81TC;
	public String DEBTREPORTFILE91TC;
	public String DEBTREPORTFILE8TC;
	public String DEBTREPORTFILE9TC;
	public String DEBTREPORTFILE10TC;
	public String DEBTREPORTFILE11TC;
	public String DEBTREPORTFILE12TC;

	
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
    		//Log.getCMLog().getLogger().error("Error encountered while trying to load Properties file in PdfProperties");
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
    	
    	PATH = properties.getProperty(PPATH);
    	
    	DEBTHEADERARG = properties.getProperty(DH);
    	
    	DEBTREPORTFILE1 = properties.getProperty(D1);
    	DEBTREPORTFILE2 = properties.getProperty(D2);
    	DEBTREPORTFILE3 = properties.getProperty(D3);
    	DEBTREPORTFILE4 = properties.getProperty(D4);
    	DEBTREPORTFILE5 = properties.getProperty(D5);
    	DEBTREPORTFILE6 = properties.getProperty(D6);
    	DEBTREPORTFILE7 = properties.getProperty(D7);
    	DEBTREPORTFILE71 = properties.getProperty(D71);
    	DEBTREPORTFILE81 = properties.getProperty(D81);
    	DEBTREPORTFILE91 = properties.getProperty(D91);
    	DEBTREPORTFILE8 = properties.getProperty(D8);
    	DEBTREPORTFILE9 = properties.getProperty(D9);
    	DEBTREPORTFILE10 = properties.getProperty(D10);
    	DEBTREPORTFILE11 = properties.getProperty(D11);
    	DEBTREPORTFILE12 = properties.getProperty(D12);

    	
    	DEBTREPORTFILE1TC = properties.getProperty(D1TC);
    	DEBTREPORTFILE2TC = properties.getProperty(D2TC);
    	DEBTREPORTFILE3TC = properties.getProperty(D3TC);
    	DEBTREPORTFILE4TC = properties.getProperty(D4TC);
    	DEBTREPORTFILE5TC = properties.getProperty(D5TC);
    	DEBTREPORTFILE6TC = properties.getProperty(D6TC);
    	DEBTREPORTFILE7TC = properties.getProperty(D7TC);
    	DEBTREPORTFILE71TC = properties.getProperty(D71TC);
    	DEBTREPORTFILE81TC = properties.getProperty(D81TC);
    	DEBTREPORTFILE91TC = properties.getProperty(D91TC);
    	DEBTREPORTFILE8TC = properties.getProperty(D8TC);
    	DEBTREPORTFILE9TC = properties.getProperty(D9TC);
    	DEBTREPORTFILE10TC = properties.getProperty(D10TC);
    	DEBTREPORTFILE11TC = properties.getProperty(D11TC);
    	DEBTREPORTFILE12TC = properties.getProperty(D12TC);
    }
    
}
