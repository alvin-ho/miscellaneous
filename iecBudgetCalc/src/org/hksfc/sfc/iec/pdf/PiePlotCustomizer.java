/**
 *  Customizer to the Pie in PDF
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-6</TD><TD>09/10/2013</TD><TD>PacificLink iMedia Ltd</TD><TD>Amendment based on client requirement</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PiePlot;
import org.jfree.chart.title.LegendTitle;


import net.sf.jasperreports.engine.JRChart;
import net.sf.jasperreports.engine.JRChartCustomizer;
/**
 * The class PiePlotCustomizer
 */
public class PiePlotCustomizer implements JRChartCustomizer {

	/**
	 * @param jfc
	 * @param jrc
	 */
	@Override
	public void customize(JFreeChart jfc, JRChart jrc) {
		jfc.setBorderVisible(false);
		PiePlot plot = (PiePlot)jfc.getPlot();
		plot.setLabelLinksVisible(false);
		plot.setSimpleLabels(true);
		plot.setIgnoreZeroValues(false);
		LegendTitle legend = jfc.getLegend();
		legend.setVisible(true);
	}

}
