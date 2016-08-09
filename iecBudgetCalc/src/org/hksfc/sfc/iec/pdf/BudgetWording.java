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
 * The singleton class BudgetWording
 */
public class BudgetWording {
	
	private static BudgetWording instance;
	
	public final int P1LENGTH = 91;
	public final int P2LENGTH = 67;
	public final int P3LENGTH = 25;
	public final int BEANLENGTH = 4;
	public final String PATH = "PATH";
	public final String SURPLUSEN = "Surplus";
	public final String SURPLUSTC = "盈餘";	
	public final String SHORTFALLEN = "Shortfall";
	public final String SHORTFALLTC = "差額";
	public final String DOLLARPREFIXEN = " HKD ";
	public final String DOLLARPREFIXTC = " 港元  ";
	
	private final String ERRORMESSAGE = "";
	
	public String[] p1All = new String[P1LENGTH];
	public String[] p1AllKey = new String[P1LENGTH];
	
	public String[] p2All = new String[P2LENGTH];
	public String[] p2AllKey = new String[P2LENGTH];
	
	public String[] p3All = new String[P3LENGTH];
	public String[] p3AllKey = new String[P3LENGTH];
	
	public String[] beanAll = new String[BEANLENGTH];
	public String[] beanAllKey = new String[BEANLENGTH];
	
	private BudgetWording() { }
	/**
	 * @param lang
	 */
	public BudgetWording(int lang) {
		
		setP1AllKey(p1AllKey);
		setP1All(p1All, lang);
		
		setP2AllKey(p2AllKey);
		setP2All(p2All, lang);
		
		setP3AllKey(p3AllKey);
		setP3All(p3All, lang);
		
		setBeanAllKey(beanAllKey);
		setBeanAll(beanAll, lang);
	}
    /**
     * @param lang
     * @return instance of BudgetWording(int lang)
     */
    public static BudgetWording getInstance(int lang) {
    	
    	if(instance == null) {
    		synchronized(BudgetWording.class) {
    			instance = new BudgetWording(lang);
    		}
    	}
    	return instance;
    }
    /**
     * @param parameters
     */
    public void putP1All(Map<String, Object> parameters) {
    	for(int i = 0; i < p1All.length; i++) {
			parameters.put(p1AllKey[i], p1All[i]);
    	}
    	parameters.put(PATH, PdfProperties.getInstance().PATH);
    	
    }
    /**
     * @param parameters
     */
    public void putP2All(Map<String, Object> parameters) {
    	for(int i = 0; i < p2All.length; i++) {
    		parameters.put(p2AllKey[i], p2All[i]);
    	}
    	parameters.put(PATH, PdfProperties.getInstance().PATH);
    }
    /**
     * @param parameters
     */
    public void putP3All(Map<String, Object> parameters) {
    	for(int i = 0; i < p3All.length; i++) {
    		parameters.put(p3AllKey[i], p3All[i]);
    	}
    	parameters.put(PATH, PdfProperties.getInstance().PATH);
    }
    /**
     * @param p1AllKey
     */
    public void setP1AllKey(String[] p1AllKey) { }
    /**
     * @param p1All
     * @param lang
     */
    public void setP1All(String[] p1All, int lang) { }

    /**
     * @param p2AllKey
     */
    public void setP2AllKey(String[] p2AllKey) { }
    /**
     * @param p2All
     * @param lang
     */
    public void setP2All(String[] p2All, int lang) { }
    /**
     * @param p3AllKey
     */
    public void setP3AllKey(String[] p3AllKey) { }
    /**
     * @param p3All
     * @param lang
     */
    public void setP3All(String[] p3All, int lang) { }
    /**
     * @param beanAllKey
     */
    public void setBeanAllKey(String[] beanAllKey) {
    	beanAllKey[0] = "beanData1";
    	beanAllKey[1] = "beanData2";
    	beanAllKey[2] = "beanData3";
    	beanAllKey[3] = "beanData4";
    }
    /**
     * @return beanAllKey
     */
    public String[] getBeanAllKey() {
    	return this.beanAllKey;
    }
    /**
     * @param beanAll
     * @param lang
     */
    public void setBeanAll(String[] beanAll, int lang) {
    	beanAll[0] = (lang < 1) ? "Income" : "收入";
    	beanAll[1] = (lang < 1) ? "Savings & Investments" : "儲蓄及投資";
    	beanAll[2] = (lang < 1) ? "Expense" : "支出";
    	beanAll[3] = (lang < 1) ? "" : "";
    }
    /**
     * @return beanAll
     */
    public String[] getBeanAll() {
    	return this.beanAll;
    }
}
