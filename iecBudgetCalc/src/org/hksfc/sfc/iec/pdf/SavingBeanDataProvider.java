package org.hksfc.sfc.iec.pdf;

import java.util.Arrays;
import java.util.Collection;

public class SavingBeanDataProvider
{

	private static SavingBean[] data =
	{
		new SavingBean("1", "1", "1", 0, 0, 0),
		new SavingBean("2", "2", "2", 100, 100, 200),
		new SavingBean("3", "3", "3", 100, 200, 300),
		new SavingBean("4", "4", "4", 100, 300, 400)
	};  

	public static Object[] getBeanArray()
	{
		return data;
	}

	public static Collection getBeanCollection()
	{
		return Arrays.asList(data);
	}


}