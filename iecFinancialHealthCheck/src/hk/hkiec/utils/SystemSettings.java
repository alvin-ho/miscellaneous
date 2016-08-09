package hk.hkiec.utils;

import java.util.ResourceBundle;

/**
 *  Configuration file to initialize class
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-40</TD><TD>08/01/2015</TD><TD>Media Explorer Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
public class SystemSettings {

	public static String DOMAIN;
	public static String JASPER_PATH;
	public static String PDN;
	public static String PSI;
	public static String OG_DOMAIN;
	
	static{
		String baseName = "system";
		ResourceBundle rb = ResourceBundle.getBundle(baseName);
		DOMAIN = rb.getString("domain");
		JASPER_PATH = rb.getString("jasperpath");
		PDN = rb.getString("pdn");
		PSI = rb.getString("psi");
		OG_DOMAIN = rb.getString("ogdomain");
	}
}
