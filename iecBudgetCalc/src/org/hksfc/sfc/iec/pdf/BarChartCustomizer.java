/**
 *  Customizer to the Bar in PDF
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

import java.awt.Color;
import java.awt.GradientPaint;
import java.awt.Paint;

import net.sf.jasperreports.engine.JRChart;
import net.sf.jasperreports.engine.JRChartCustomizer;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.renderer.category.BarPainter;
import org.jfree.chart.renderer.category.BarRenderer;
import org.jfree.chart.renderer.category.StandardBarPainter;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.ui.RectangleInsets;

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
		CategoryPlot plot = (CategoryPlot)jfc.getCategoryPlot();
		plot.setRangeGridlinePaint(Color.GRAY);
		
		NumberAxis rangeAxis = (NumberAxis) plot.getRangeAxis();
		BarRenderer renderer = (BarRenderer) plot.getRenderer();
		DefaultCategoryDataset cd = (DefaultCategoryDataset) plot.getDataset();
		if(cd != null) {	        
			for (int row = 0; row < cd.getRowCount(); row++) {
				for (int col = 0; col < cd.getColumnCount(); col++) {
					String l_colKey = (String)cd.getColumnKey(col);
					double l_value  = cd.getValue(cd.getRowKey(row), l_colKey).doubleValue();
					if(l_value < 0) {
						cd.setValue(Math.abs(l_value), cd.getRowKey(row), l_colKey);
					}
					BarRenderer cRenderer = new CustomRenderer(l_value);
					cRenderer.setShadowVisible(false);
					plot.setRenderer(cRenderer);
				}
			}	        
		}
	}
	/**
	 * The private class CustomRenderer
	 */
	private class CustomRenderer extends BarRenderer {
		double i;
		
	    /**
	     * @param double l_value
	     */		
		public CustomRenderer(double l_value){
			this.i = l_value;
		}
		/**
		 * @return new Color()
		 * @param int row
		 * @param int column
		 */
		public Paint getItemPaint(final int row, final int column) {
			
			if(column == 3) {
				if(this.i > 0) {
					return new Color(0X006EB8);
				}else {
					return new Color(0XED1C24);					
				}
			}else {
				return new Color(0X51A6A2);
			}
			
		}
	}

}