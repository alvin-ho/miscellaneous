package org.hksfc.sfc.iec.pdf;

import java.util.Arrays;
import java.util.Collection;

public class BudgetBeanDataProvider {

	private static BudgetBean[] data = {
		new BudgetBean("Income", 20000),
		new BudgetBean("Saving & Investments", 15000),
		new BudgetBean("Expense", -15000),
		new BudgetBean("Deficit", 20000)
	};  

	public static Object[] getBeanArray() {
		return data;
	}

	public static Collection getBeanCollection() {
		return Arrays.asList(data);
	}

}