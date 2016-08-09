/**
 *  BudgetBean to assign bar chart data
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
 * The bean class BudgetBean
 */
public class BudgetBean implements Serializable {

	private static final long serialVersionUID = 1L;
	private String category;
	private Number amount;
	
	/**
	 * @param ca
	 * @param am
	 */
	public BudgetBean(String ca, Number am) {
		this.category = ca;
		this.amount = am;
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
	 * @return amount
	 */
	public Number getAmount() {
		return amount;
	}

	/**
	 * @param amount
	 */
	public void setAmount(Number amount) {
		this.amount = amount;
	}

}
