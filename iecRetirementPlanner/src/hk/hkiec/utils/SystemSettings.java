package hk.hkiec.utils;

import java.util.ResourceBundle;

/**
 *  Configuration file to initialize class
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-39</TD><TD>06/03/2015</TD><TD>Media Explorer Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
public class SystemSettings {

	public static String URL_DOMAIN;
	public static String FILE_ROOT;
	public static String GA_AC;
	
	static{
		String baseName = "system";
		ResourceBundle rb = ResourceBundle.getBundle(baseName);
		URL_DOMAIN = rb.getString("URL_DOMAIN");
		FILE_ROOT = rb.getString("FILE_ROOT");
		GA_AC = rb.getString("GA_AC");
	}
}
