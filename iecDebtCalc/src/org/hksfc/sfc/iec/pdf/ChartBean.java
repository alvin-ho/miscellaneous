/**
 *  TO generate bar chart data
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-22</TD><TD>18/03/2014</TD><TD>Urban Air Design Limited</TD><TD>Amendment based on client requirement</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.io.Serializable;


/**
 * The bean class 
 */
public class ChartBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private String category;
	private Number amount;
	private String series;
	
	/**
	 * @param ca
	 * @param am
	 * @param se
	 */
	public ChartBean(String ca, Number am, String se) {
		this.category = ca;
		this.amount = am;
		this.series = se;
	}

	/**
	 * @return category;
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * @param category
	 */
	public void setCategory(String category) {
		this.category = category;
	}

	/**
	 * @param amount
	 */
	public void setAmount(Number amount) {
		this.amount = amount;
	}
	
	/**
	 * @return amount
	 */
	public Number getAmount() {
		return amount;
	}

	/**
	 * @param series
	 */
	public void setSeries(String series) {
		this.series = series;
	}
	
	/**
	 * @return series
	 */
	public String getSeries() {
		return series;
	}
}
