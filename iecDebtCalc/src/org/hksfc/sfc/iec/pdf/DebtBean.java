/**
 *  DebtBean to assign bar chart data
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-22</TD><TD>02/01/2014</TD><TD>Urban Air Design Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */

package org.hksfc.sfc.iec.pdf;

import java.io.Serializable;


/**
 * The bean class DebtBean
 */
public class DebtBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private String name;
	private String totalpay;
	private String totalcost;
	private String repay;
	private String period;
	private String principal;
	private String rate;
	
	/**
	 * @param ca
	 * @param am
	 */
	public DebtBean(String ca, String tp, String tc, String re, String pe, String pr , String ra ) {
		this.name = ca;
		this.totalpay = tp;
		this.totalcost = tc;
		this.repay = re;
		this.period = pe;
		this.principal = pr;
		this.rate = ra;
	}

	/**
	 * @return name;
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return totalpay
	 */
	public String getTotalpay() {
		return totalpay;
	}

	/**
	 * @param totalpay
	 */
	public void setTotalpay(String totalpay) {
		this.totalpay = totalpay;
	}

	public String getTotalcost() {
		return totalcost;
	}

	/**
	 * @param name
	 */
	public void setTotalcost(String totalcost) {
		this.totalcost = totalcost;
	}
	
	public String getRepay() {
		return repay;
	}
	public void setRepay(String repay){
		this.repay = repay;
	}
	
	public String getPeriod() {
		return period;
	}
	public void setPeriod(String period){
		this.period = period;
	}
	
	public String getPrincipal() {
		return principal;
	}
	public void setPrincipal(String principal){
		this.principal = principal;
	}
	
	public String getRate() {
		return rate;
	}
	public void setRate(String rate){
		this.rate = rate;
	}
	
}
