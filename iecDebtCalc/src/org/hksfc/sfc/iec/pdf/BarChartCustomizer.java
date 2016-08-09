/**
 *  Customizer to the Bar in PDF
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-22</TD><TD>09/10/2013</TD><TD>Urban Air Design Limited</TD><TD>Amendment based on client requirement</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.awt.Color;

import net.sf.jasperreports.engine.JRChart;
import net.sf.jasperreports.engine.JRChartCustomizer;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.AxisLocation;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.renderer.category.BarRenderer;


/**
 * The class BarChartCustomizer
 */
public class BarChartCustomizer implements JRChartCustomizer {

    /**
     * @param jfc
     * @param jrc
     */	
	@Override
	public void customize(JFreeChart jfc, JRChart jrc) {
		CategoryPlot plot = jfc.getCategoryPlot();
		plot.setRangeGridlinePaint(Color.WHITE);
		
		BarRenderer br = (BarRenderer) plot.getRenderer();
		br.setMaximumBarWidth(.35); // set maximum width to 35% of chart


		plot.setRangeAxisLocation(AxisLocation.BOTTOM_OR_LEFT);

		
	}

}