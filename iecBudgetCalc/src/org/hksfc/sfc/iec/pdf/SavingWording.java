/**
 *  Conclude all wording and parameter name 
 *  in one singleton pattern
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-6</TD><TD>09/10/2013</TD><TD>PacificLink iMedia Ltd</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.util.Map;

/**
 * The singleton class SavingWording
 */
public class SavingWording {

	private static SavingWording instance;
	private final int LENGTH = 17;
	private final String[] KEY = new String[LENGTH];
	private final String[] VALUE = new String[LENGTH];
	
	private SavingWording() { }
	/**
	 * @param lang
	 */
	private SavingWording(int lang) {
		setParameter(lang);
	}
    /**
     * @return instance of SavingWording(int lang)
     */
    public static SavingWording getInstance(int lang) {
    	
    	if(instance == null) {
    		synchronized(BudgetWording.class) {
    			instance = new SavingWording(lang);
    		}
    	}
    	return instance;
    }	
	/**
	 * @param lang
	 */
    private void setParameter(int lang) {     

    	KEY[0] = "InfoTitle1";
    	KEY[2] = "InfoTitle2";
        KEY[4] = "InfoTitle3";
    	KEY[6] = "InfoTitle4";
    	KEY[8] = "InfoTitle5";
        KEY[10] = "InfoTitle6";
        KEY[12] = "InfoTitle7";
        KEY[14] = "";
    	KEY[1] = "Info1";
    	KEY[3] = "Info2";
        KEY[5] = "Info3";
    	KEY[7] = "Info4";
    	KEY[9] = "Info5";
        KEY[11] = "Info6";
        KEY[13] = "Info7";
        KEY[15] = "TimeItem";
    	KEY[16] = "PATH";
        
    	VALUE[0] = "";
    	VALUE[1] = "";
    	VALUE[2] = "";
    	VALUE[3] = "";
    	VALUE[4] = "";
    	VALUE[5] = "";
    	VALUE[6] = "";
    	VALUE[7] = "";
    	VALUE[8] = "";
    	VALUE[9] = "";
    	VALUE[10] = "";
    	VALUE[11] = "";
    	VALUE[12] = "";
    	VALUE[13] = "";    	
    	VALUE[14] = "";
    	VALUE[15] = "";
        VALUE[16] = PdfProperties.getInstance().PATH;    	
    }
    /**
     * @param info
     * @return info3
     */
    private String[] setInfo(String info) {
    	String[] info1 = info.split(PdfProperties.getInstance().INFODELIMITER[0]);
    	String[] info2 = null;
    	String[] info3 = new String[info1.length * 2];
    	int info3Index = 0;
    	
    	for(int i = 0; i < info1.length; i++) {
    		info2 = info1[i].split(PdfProperties.getInstance().INFODELIMITER[1]);
    		for(int j = 0; j < info2.length; j++) {
    			if(info2[j].startsWith(PdfProperties.getInstance().INFODELIMITER[2])) { // value
    				info2[j] = info2[j].substring(2);
    			}else {
    				info2[j] = info2[j].substring(0, info2[j].length() - 1);
    			}
    			info3[info3Index] = info2[j];
    			info3Index++;
    		}
    	}
    	return info3;
    }
    /**
     * @param parameters
     * @param info
     */
    public void putAll(Map<String, Object> parameters, String info) {
    	String[] infoAll = setInfo(info);
    	for(int i = 0; i < LENGTH; i++) {
    		if(i != LENGTH - 1) {
				VALUE[i] = infoAll[i];
				parameters.put(KEY[i], VALUE[i]);
    		}else {
    			parameters.put(KEY[i], VALUE[i]);
    		}
    	}
    	
    }
}
