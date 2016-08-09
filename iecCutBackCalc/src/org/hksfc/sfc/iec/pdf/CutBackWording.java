/**
 *  Conclude all wording and parameter name 
 *  in one singleton pattern
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights
reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-21</TD><TD>02/01/2014</TD><TD>Urbanair Design Ltd</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
package org.hksfc.sfc.iec.pdf;

import java.text.DecimalFormat;
import java.util.Map;

/**
 * The singleton class CutBackWording
 */
public class CutBackWording {

	private static CutBackWording instance;
	private final int LENGTH = 61;
	public final String ANNUALINCOMEEN = "% of your annual income";
	public final String ANNUALINCOMETC = "相當於你的年薪";
	private final String[] KEY = new String[LENGTH];
	private final String[] VALUE = new String[LENGTH];
	
	public CutBackWording() { }
	/**
	 * @param lang
	 */
	public CutBackWording(int lang) {
		setParameter(lang);
	}
    /**
     * @return instance of CutBackWording(int lang)
     * @param lang, language of the page
     */
    public static CutBackWording getInstance(int lang) {
    	if(instance == null) {
    		synchronized(CutBackWording.class) {
    			instance = new CutBackWording(lang);
    		}
    	}
    	return instance;
    }	
	/**
	 * @param lang
	 */
    private void setParameter(int lang) {     

    	KEY[0] = "CATE1";
    	KEY[1] = "ITEM1";
        KEY[2] = "SAVEAMOUNT1";
        KEY[3] = "ITEM1ICON";
        KEY[4] = "CATE2";
    	KEY[5] = "ITEM2";
        KEY[6] = "SAVEAMOUNT2";
        KEY[7] = "ITEM2ICON";
        KEY[8] = "CATE3";
    	KEY[9] = "ITEM3";
        KEY[10] = "SAVEAMOUNT3";
        KEY[11] = "ITEM3ICON";
        KEY[12] = "CATE4";
    	KEY[13] = "ITEM4";
        KEY[14] = "SAVEAMOUNT4";
        KEY[15] = "ITEM4ICON";
        KEY[16] = "CATE5";
    	KEY[17] = "ITEM5";
        KEY[18] = "SAVEAMOUNT5";
        KEY[19] = "ITEM5ICON";
        KEY[20] = "CATE6";
    	KEY[21] = "ITEM6";
        KEY[22] = "SAVEAMOUNT6";
        KEY[23] = "ITEM6ICON";
        KEY[24] = "CATE7";
    	KEY[25] = "ITEM7";
        KEY[26] = "SAVEAMOUNT7";
        KEY[27] = "ITEM7ICON";
        KEY[28] = "CATE8";
    	KEY[29] = "ITEM8";
        KEY[30] = "SAVEAMOUNT8";
        KEY[31] = "ITEM8ICON";
        KEY[32] = "CATE9";
    	KEY[33] = "ITEM9";
        KEY[34] = "SAVEAMOUNT9";
        KEY[35] = "ITEM9ICON";
        KEY[36] = "CATE10";
    	KEY[37] = "ITEM10";
        KEY[38] = "SAVEAMOUNT10";
        KEY[39] = "ITEM10ICON";
        KEY[40] = "CATE11";
    	KEY[41] = "ITEM11";
        KEY[42] = "SAVEAMOUNT11";
        KEY[43] = "ITEM11ICON";
        KEY[44] = "CATE12";
    	KEY[45] = "ITEM12";
        KEY[46] = "SAVEAMOUNT12";
        KEY[47] = "ITEM12ICON";
        KEY[48] = "CATE13";
    	KEY[49] = "ITEM13";
        KEY[50] = "SAVEAMOUNT13";
        KEY[51] = "ITEM13ICON";
        KEY[52] = "CATE14";
    	KEY[53] = "ITEM14";
        KEY[54] = "SAVEAMOUNT14";
        KEY[55] = "ITEM14ICON";
        KEY[56] = "CATE15";
    	KEY[57] = "ITEM15";
        KEY[58] = "SAVEAMOUNT15";
        KEY[59] = "ITEM15ICON";
        KEY[60] = "PATH";
    	
        for (int i=0; i<LENGTH;i++) {
        	VALUE[i] = "";
        	
        	if (i==LENGTH-1) {
        		VALUE[i] = PdfPropertiesCutback.getInstance().PATH;
        	}
        }
    	
    	
    }
    /**
     * @param parameters, prepare parameters list for generate pdf
     * @param info, load the cutback_data parameter split with " , "
     * @param lang, language of the page
     */
    public void putAll(Map<String, Object> parameters, String info, int lang) {
    	//setParameter(lang);
    	
    	String data = info;
    	String dollar_sign = ((lang == 0) ? "HKD " : "港元 ");
		String[] datas = data.split(" , ");
		String[] paraList = new String[LENGTH];
		int paraIndex = 0;
		int itemCount = datas.length;
		
		if (itemCount > 15) {
			itemCount = 15;
		}

		for(int i = 0; i < itemCount; i++) {
			String[] cutBackData = datas[i].split(" : ");
			String cutBackItem = cutBackData[0];
			String category = cutBackData[3];
			Double amount = new Double(cutBackData[1]);
			String cateIcon = cutBackData[4];
			String amountStr = "";
			DecimalFormat formatter = new DecimalFormat("###,###,###.0");
			amountStr=formatter.format(amount).toString();
			
			paraList[paraIndex] = category;
			paraIndex++;
			paraList[paraIndex] = cutBackItem;
			paraIndex++;
			paraList[paraIndex] = dollar_sign+amountStr;
			paraIndex++;
			paraList[paraIndex] = cateIcon;
			paraIndex++;

		}
		
    	
    	for(int i = 0; i < LENGTH-1; i++) {
    		parameters.put(KEY[i], paraList[i]);
    	}
    	parameters.put(KEY[LENGTH-1], PdfPropertiesCutback.getInstance().PATH);
    }
    
}
