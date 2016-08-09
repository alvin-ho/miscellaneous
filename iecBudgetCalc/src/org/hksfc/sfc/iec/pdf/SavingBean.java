/**
 *  SavingBean to assign bar chart data
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

import java.io.Serializable;

/**
 * The bean class SavingBean
 */
public class SavingBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private String category0;
	private Number amount0;
	private String category1;
	private Number amount1;
	private String category2;
	private Number amount2;

	/**
	 * @param ca
	 * @param am
	 */
	public SavingBean(String c0, String c1, String c2, Number a0, Number a1, Number a2) {
		this.category0 = c0;
		this.amount0 = a0;
		this.category1 = c1;
		this.amount1 = a1;
		this.category2 = c2;
		this.amount2 = a2;
	}
	/**
	 * @return category;
	 */
	public String getCategory0() {
		return category0;
	}

	/**
	 * @param category
	 */
	public void setCategory0(String category0) {
		this.category0 = category0;
	}
	
	/**
	 * @return category;
	 */
	public String getCategory1() {
		return category1;
	}

	/**
	 * @param category
	 */
	public void setCategory1(String category1) {
		this.category1 = category1;
	}
	
	/**
	 * @return amount
	 */
	public Number getAmount0() {
		return amount0;
	}

	/**
	 * @param amount
	 */
	public void setAmount0(Number amount0) {
		this.amount0 = amount0;
	}
	
	/**
	 * @return amount
	 */
	public Number getAmount1() {
		return amount1;
	}

	/**
	 * @param amount
	 */
	public void setAmount1(Number amount1) {
		this.amount1 = amount1;
	}

	/**
	 * @return category;
	 */
	public String getCategory2() {
		return category2;
	}

	/**
	 * @param category
	 */
	public void setCategory2(String category2) {
		this.category2 = category2;
	}

	/**
	 * @return amount
	 */
	public Number getAmount2() {
		return amount2;
	}

	/**
	 * @param amount
	 */
	public void setAmount2(Number amount2) {
		this.amount2 = amount2;
	}
	
}
