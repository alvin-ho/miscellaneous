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
 * <TR><TD>ASIEC-21</TD><TD>02/01/2014</TD><TD>Urbanair Design Ltd</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.io.IOException;
import java.util.Properties;
/**
 * The class PdfProperties
 */
public class PdfPropertiesCutback {

	private static PdfPropertiesCutback instance;
	private static Properties properties;
	private final String CONFIGFILE = "cutback.config.properties";
	
	// property name
	private final String DPATH = "DOMAINPATH";
	private final String APATH = "APPPATH";
	private final String PPATH = "PATH";
	private final String RPATH = "RESPATH";

	//CutBack
	private final String C1 = "CUTBACKREPORTFILE";
	private final String C2 = "CUTBACKHEADERARG2";
	private final String C3 = "CUTBACKREPORTFILETC";
	
	// site info
	public String DOMAINPATH;
	public String APPPATH;
	
	// resource info
	public String PATH;
	public String RESPATH;

	// cutback
	public String CUTBACKREPORTFILE;
	public String CUTBACKHEADERARG2;
	public String CUTBACKREPORTFILETC;
	
	// common	
	public final String CONTENTTYPE = "application/pdf";
	public final String HEADERARG1 = "Content-Disposition";
	
	/**
	 * PdfProperties() private
	 */
	private PdfPropertiesCutback() {
		properties = new Properties();
		try {
			properties.load(Thread.currentThread().getContextClassLoader().getResourceAsStream(CONFIGFILE));
			setProperties(properties);
		} catch (IOException e) {
    		Log.getCMLog().getLogger().error("Error encountered while trying to load Properties file in PdfPropertiesCutback");
		}
	}
    /**
     * @return instance of PdfProperties()
     */
    public static PdfPropertiesCutback getInstance() {
    	
    	if(instance == null) {
    		synchronized(PdfPropertiesCutback.class) {
    			instance = new PdfPropertiesCutback();
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

		CUTBACKREPORTFILE = properties.getProperty(C1);
    	CUTBACKHEADERARG2 = properties.getProperty(C2);
    	CUTBACKREPORTFILETC = properties.getProperty(C3);
    	
    }
    
}
