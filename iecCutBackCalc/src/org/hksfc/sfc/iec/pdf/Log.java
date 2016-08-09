/**
 *  To help logging daily log sheet using log4j
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
import org.apache.log4j.Logger;
/**
 * The class CMLog
 */ 
public final class Log {

	private static Log cmLogInstance;
	private static Logger logger;
	
    private Log() {
    	logger = Logger.getLogger(Log.class);
    }
    /**
     * @return cmLog
     */
    public static Log getCMLog() {

    	if(cmLogInstance == null) {
    		synchronized(Log.class) {
    			if(cmLogInstance == null) {
    				cmLogInstance = new Log();
    			}
    		}
    	}
    	return cmLogInstance;
    }
    /**
     * 
     * @return logger
     */
    public Logger getLogger() {
    	return logger;
    }
}
