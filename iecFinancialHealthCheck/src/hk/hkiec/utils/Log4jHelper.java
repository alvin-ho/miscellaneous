package hk.hkiec.utils;

import org.apache.log4j.Logger;

/**
 *  Log4j control class
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-40</TD><TD>08/01/2015</TD><TD>Media Explorer Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
public class Log4jHelper {

	public static void log(String tag, Object info){
		Logger logger = Logger.getLogger(tag);
		logger.info(info);
	}
}
