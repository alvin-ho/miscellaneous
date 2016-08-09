/**
 *  Conclude all wording and parameter name 
 *  in one singleton pattern
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-22</TD><TD>09/10/2013</TD><TD>Urban Air Design Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Map;

/**
 * The singleton class SavingWording
 */
public class DebtWording {

	private static DebtWording instance;
	private final int LENGTH = 20;
	private final String[] KEY = new String[LENGTH];
	private final String[] VALUE = new String[LENGTH];
	
	public final static String LABELPRINCIPALEN = "Debt amount";
	public final static String LABELPRINCIPALTC = "貸款金額";
	
	public final static String LABELPLEN = "Loan amount";
	public final static String LABELPLTC = "貸款金額";
	
	public final static String LABELCOSTEN = "Cost of borrowing";
	public final static String LABELCOSTTC = "借貸成本";
	
	public final static String LABELINTERESTEN = "Interest";
	public final static String LABELINTERESTTC = "利息";
	
	public final static String XAISLABELEN = "Amount(HKD in thousand)";
	public final static String XAISLABELTC = "金額(千港元)";
	
	public final static String LABELAPREN = "APR";
	public final static String LABELAPRTC = "實際年利率";
	
	public final static String LABELPERIODEN = "Repayment period";
	public final static String LABELPERIODTC = "還款期";
	
	public final static String HKDOLLAREN = "HKD ";
	public final static String HKDOLLARTC = "港元  ";
	
	public final static String MonthEN = " months";
	public final static String MonthTC = " 個月";
	
	public DebtWording() { }
	/**
	 * @param lang
	 */
	public DebtWording(int lang) {
		setParameter(lang);
	}
    /**
     * @return instance of DebtWording(int lang)
     * @param lang
     */
    public static DebtWording getInstance(int lang) {
    	
    	if(instance == null) {
    		synchronized(DebtWording.class) {
    			instance = new DebtWording(lang);
    		}
    	}
    	return instance;
    }	
	/**
	 * @param lang
	 */
    private void setParameter(int lang) {     

    	for(int i = 0; i < LENGTH; i++) {
    		KEY[i] = "LIST"+i;
    		VALUE[i] = "";
    	}

    }
    
    
}
