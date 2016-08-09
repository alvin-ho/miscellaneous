package hk.hkiec.web.action;

import java.io.IOException;
import java.text.NumberFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

/**
 *  Each step logic
 *
 * <br>(C) The Securities And Futures Commission of Hong Kong. All rights reserved.
 * <br>Revision History: <br>
 * <TABLE BORDER=1>
 * <TR><TH>ASR</TH><TH>Date</TH><TH>Name</TH><TH>Changes</TH></TR>
 * <TR><TD>ASIEC-40</TD><TD>08/01/2015</TD><TD>Media Explorer Limited</TD><TD>First version</TD></TR>
 * </TABLE>
 *
 */
public class IecAction {
	HttpServletRequest request = ServletActionContext. getRequest();
	HttpSession session = request.getSession();
	HttpServletResponse response = ServletActionContext.getResponse();

	public String s2(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S2
		String m0=request.getParameter("mount0");
		String m1=request.getParameter("mount1");
		String m2=request.getParameter("mount2");
		String lan = request.getParameter("paslan");
		String img_s2="";
 		String str="";
 		String plan="";
		if(m0==null||m0==""||"".equals(m0)||m1==null||m1==""||"".equals(m1)||m2==null||m2==""||"".equals(m2)){
			if("eng".equals(lan)){
				img_s2="error.jpg";
				str+="Please fill in the number above zero!";
			}else{
				img_s2="error.jpg";
				str+="请填写零以上的数！";
			}
		}
		else{
			int mount0=Integer.parseInt(m0.replace(",",""));
			int mount1=Integer.parseInt(m1.replace(",",""));
     		int mount2=Integer.parseInt(m2.replace(",",""));
     		if("eng".equals(lan)){
     			if(mount0+mount1==0){
    				img_s2="badpig_en.png";
    				str+="<p>Review or develop a budget so you can manage or reduce your spending until you find another source of steady income.</p>";
    				str+="<p><span>You can use our <a target='_blank' href='https://www.thechinfamily.hk/tools/en/budget.html'>budget planner</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to manage your expenses.</span></p>";
    				plan+="<ul class='firstUL'><li>Review or set up a budget.</li>";
    				plan+="<li>Look for income sources.</li></ul>";
    			}else{
    				double scale=(double)mount2/(mount0+mount1);
    				 NumberFormat nf = NumberFormat.getPercentInstance();
    		         nf.setMaximumFractionDigits(2); //设置小数点保留几位
    				String mount=nf.format(scale);
    				if(scale>1){
    					img_s2="badpig_en.png";
    					str+="<p>This is your expense-to-income ratio "+mount+"</p>";
    					str+="<p>This expense-to-income ratio measures the proportion of your spending over your income. Your result is larger than 100%. It means that you are currently spending more than you earn.</p>";
    					str+="<p><span>Review your spending to prioritise your needs and wants.</span></p>";
    					str+="<p><span>You can also use our <a target='_blank' href='https://www.thechinfamily.hk/tools/cutback/en/cutback.html'>Cut-back calculator</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to look for non-essential expenses you can cut to save money.</span></p>";
    					plan+="<ul class='firstUL'><li>Make a list of and separate essential and non-essential expense items</li>";
    					plan+="<li>Prioritise your “needs” and “wants” and look for any unnecessary expenses you can cut back</li>";
    					plan+="<li>Review your spending habit </li>";
    					plan+="<li>Look for additional income sources</li></ul>";
    				}else if(scale==1){
    					img_s2="begoodpig_en.png";
    					str+="<p>This is your expense-to-income ratio "+mount+"</p>";
    					str+="<p>This expense-to-income ratio measures the proportion of your spending over your income. Your result is 100%. It means that you cannot save money every month.</p>";
    					str+="<p><span>Review your spending to prioritise your needs and wants.</span></p>";
    					str+="<p><span>You can also use our <a target='_blank' href='https://www.thechinfamily.hk/tools/cutback/en/cutback.html'>Cut-back calculator</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to look for non-essential expenses you can cut to save money.</span></p>";
    					plan+="<ul class='firstUL'><li>Make a list of and essential and non-essential expense items</li>";
    					plan+="<li>Prioritise your “needs” and “wants” and look for any unnecessary expenses you can cut back</li>";
    					plan+="<li>Review your spending habit </li>";
    					plan+="<li>Look for additional income sources</li></ul>";
    				}else if(scale<1){
    					img_s2="goodpig_en.png";
    					str+="<p>This is your expense-to-income ratio "+mount+"</p>";
    					str+="<p>This expense-to-income ratio measures the proportion of your spending over your income. The lower the ratio, the greater the surplus you have for your spending or savings.</p>";
    					str+="<p>There is no standard level of expense-to-income ratio and it may change across different life stages, but you could consider the following when reviewing your spending:</p>";
    					str+="<ul class='aContent'><li><span>Is this ratio higher than that of the previous year? If it is getting higher which means you are having less surplus, you should pay more attention on your spending or explore other income sources if necessary.</span></li>";
    					str+="<li><span>If you want to improve your expense-to-income ratio, you could consider using our <a target='_blank' href='https://www.thechinfamily.hk/tools/cutback/en/cutback.html'>Cut-back calculator</a> and <a target='_blank' href='http://www.thechinfamily.hk/tools/en/budget.html'>Budget planner</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to understand your money habits and manage your spending and savings.</span></li>";
    					str+="<li><span>When you have some surplus, you could develop savings plans to help achieve your financial goals.</span></li></ul>";
    					plan+="<ul class='firstUL'><li>Review and record your expense-to-income ratio regularly.</li>";
    					plan+="<li>Aim for a better expense-to-income ratio.</li>";
    					plan+="<li>Watch out for your expenses or look for additional income to achieve your goals.</li></ul>";
    				}else{
    					img_s2="error.jpg";
    					str+="Please fill in the number above zero!";
    				}
    			}
     		}else{
     			if(mount0+mount1==0){
    				img_s2="badpig.png";
    				str+="<p>重新檢視或制定預算，讓你在找到另一個穩定收入的來源前可管理或節省開支。</p>";
    				str+="<p><span>你可使用<a target='_blank' href='https://www.thechinfamily.hk/tools/tc/budget.html'>個人收支計算機</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong>妥善管理你的開支。</span></p>";
    				plan+="<ul class='firstUL'><li>重新檢視或制定預算</li>";
    				plan+="<li>尋找收入來源</li></ul>";
    			}else{
    				double scale=(double)mount2/(mount0+mount1);
    				 NumberFormat nf = NumberFormat.getPercentInstance();
    		         nf.setMaximumFractionDigits(2); //设置小数点保留几位
    				String mount=nf.format(scale);
    				if(scale>1){
    					img_s2="badpig.png";
    					str+="<p>你的支出與收入比率是  "+mount+"</p>";
    					str+="<p>此比率計算你的支出佔你收入的百份比。你的結果超過了100%，這表示你的支出比收入更多。</p>";
    					str+="<p><span>請檢視你的消費模式，並按輕重緩急，衡量你的開支「需要」及「意願」。</span></p>";
    					str+="<p><span>你可使用<a target='_blank' href='https://www.thechinfamily.hk/tools/cutback/tc/cutback.html'>削減開支計算機</a>來找出可以削減的非必要花費，以節省開支累積財富。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong></p>";
    					plan+="<ul class='firstUL'><li>列出消費清單，將必需品和非必需品分開</li>";
    					plan+="<li>編排你「需要」和「想要」的東西，從而縮減非必要的開支</li>";
    					plan+="<li>審視你的消費模式</li>";
    					plan+="<li>尋找收入來源</li></ul>";
    				}else if(scale==1){
    					img_s2="begoodpig.png";
    					str+="<p>你的支出與收入比率是  "+mount+"</p>";
    					str+="<p>此比率計算你的支出佔你收入的百份比。你的結果等於100%，這表示你的支出與收入均等。</p>";
    					str+="<p><span>請檢視你的消費模式，並按輕重緩急，衡量你的開支「需要」及「意願」。你可使用我們的削減開支計算機來找出可以削減的非必要花費，以節省開支累積財富</span></p>";
    					str+="<p><span>你可使用<a target='_blank' href='https://www.thechinfamily.hk/tools/cutback/tc/cutback.html'>削減開支計算機</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong>來找出可以削減的非必要花費，以節省開支累積財富。</span></p>";
    					plan+="<ul class='firstUL'><li>列出消費清單，將必需品和非必需品分開</li>";
    					plan+="<li>編排你「需要」和「想要」的東西，從而縮減非必要的開支</li>";
    					plan+="<li>審視你的消費模式</li>";
    					plan+="<li>尋找額外收入來源</li></ul>";
    				}else if(scale<1){
    					img_s2="goodpig.png";
    					str+="<p>你的支出與收入比率是  "+mount+"</p>";
    					str+="<p>此比率計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>";
    					str+="<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視消費模式時，你可以參考以下要點：</p>";
    					str+="<ul class='aContent'><li><span>與去年比較，這比率有否上升? 若這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的開支或增加額外收入。</span></li>";
    					str+="<li><span>如果想改善你的支出與收入比率，可使用我們的<a target='_blank' href='https://www.thechinfamily.hk/tools/cutback/tc/cutback.html'>削減開支計算機</a>和<a target='_blank' href='http://www.thechinfamily.hk/tools/tc/budget.html'>個人收支計算機</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong>制定預算了解自己的理財習慣，從而妥善管理開支及儲蓄。</span></li>";
    					str+="<li><span>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</span></li></ul>";
    					plan+="<ul class='firstUL'><li>定期審視及紀錄你的支出與收入比率</li>";
    					plan+="<li>訂立一個更佳的支出與收入比率目標</li>";
    					plan+="<li>注意開支或增加額外收入以達成你的目標</li></ul>";
    				}else{
    					img_s2="error.jpg";
    					str+="请填写零以上的数！";
    				}
    			}
     		}
		}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					request.getSession().setAttribute("s2", img_s2+"||"+str+"||Income and expenses"+"||"+plan);
				    response.getWriter().write(img_s2+"||"+str+"||Income and expenses"+"||"+plan);
				}else{
					request.getSession().setAttribute("s2", img_s2+"||"+str+"||收入與支出"+"||"+plan);
				    response.getWriter().write(img_s2+"||"+str+"||收入與支出"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}


	public String s3(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S3
			int creditcard=Integer.parseInt(request.getParameter("creditcard"));
			int loan=Integer.parseInt(request.getParameter("loan"));
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s3=null;
			if("eng".equals(lan)){
				if(creditcard==1||creditcard==2||creditcard==3){
					img_s3="badpig_en.png";
					str+="<p>Debt can be a growing problem if not managed properly. Taking swift action to address the problem is the key.</p>";
					str+="<p>Your personal credit rating may be affected which consequently may make it difficult for you to borrow money from financial institutions in future.</p>";
					str+="<p>Make a priority to pay your bills in full and on time to avoid interest charges.</p>";
					str+="<p><span>You could use our <a target='_blank' href='https://www.thechinfamily.hk/tools/debt/en/debt.html'>Debt calculator</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to help manage your debts effectively. </span></p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/debts-and-borrowing/having-difficulty-repaying-debt.html'>Learn more about how to manage debts effectively</a> and <a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/debts-and-borrowing/managing-debts-effectively.html'>take steps to tackle difficulty in repaying debts.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/banking-and-credit/managing-debt/index.html)</strong></p>";
					plan+="<ul class='firstUL'><li>Make a list of all your debts.</li>";
					plan+="<li>Prioritise debt repayment:";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>Secured debts such as mortgage to avoid your home being repossessed</span></li>";
					plan+="<li><span>Other loans which charge higher interest</span></li>";
					plan+="</ul></li>";
					plan+="<li>Review your budget, cut back or delay non-essential expenses.</li>";
					plan+="<li>Pay at least the minimum payment of each credit card to avoid affecting your credit score.</li>";
					plan+="<li>Tell your lender that you are experiencing financial difficulty. Seek professional assistance such as some financial counselling programmes provided by non-profit organisations.</li>";
					plan+="<li>Consider consolidating your loans.</li></ul>";
				}else if(creditcard==4||creditcard==5){
					if(loan==1){
						img_s3="begoodpig_en.png";
						str+="<p>Whatever the amount of money you owe, managing your debts effectively is important. Even if you just owe a little, always make payments on time to keep your debts under control. </p>";
						str+="<p><span>You could use our <a target='_blank' href='https://www.thechinfamily.hk/tools/debt/en/debt.html'>Debt calculator</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to manage your debts effectively. </span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/debts-and-borrowing/having-difficulty-repaying-debt.html'>Learn more about how to manage debts effectively</a> and <a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/debts-and-borrowing/managing-debts-effectively.html'>take steps to tackle difficulty in repaying debts.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/banking-and-credit/managing-debt/index.html)</strong></p>";
						plan+="<ul class='firstUL'><li>Make a list of all your debts.</li>";
						plan+="<li>Prioritise debt repayment:";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>Secured debts such as mortgage to avoid your home being repossessed</span></li>";
						plan+="<li><span>Other loans which charge higher interest</span></li>";
						plan+="</ul></li>";
						plan+="<li>Make payments on time, use calendar function of smart phone to remind you of the repayment dates.</li></ul>";
					}else if(loan==2){
						img_s3="goodpig_en.png";
						str+="<p>You have taken good steps to manage your debts and money. Keep it up!</p>";
						str+="<p><span>You seem to have a good credit score and <a target='_blank' href='http://www.thechinfamily.hk/web/en/banking-and-credit/managing-debt/credit-reports.html'>learn more about the credit reports</a>.<strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/banking-and-credit/managing-debt/index.html)</strong></span></p>";
						str+="<p><span>If you would take out a mortgage or other loans, remember to avoid the temptation of taking out that mortgage or loans with repayments larger than what you can comfortably meet.</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/debts-and-borrowing/having-difficulty-repaying-debt.html'>Learn more about how to manage debts effectively.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/banking-and-credit/managing-debt/index.html)</strong></p>";
						plan+="Please refer to the above proposal";
					}else{
						img_s3="error.jpg";
						str+="Please fill out the all the options!";
					}
				}else{
					img_s3="error.jpg";
					str+="Please fill out the all the options!";
				}
			}else{
				if(creditcard==1||creditcard==2||creditcard==3){
					img_s3="badpig.png";
					str+="<p>若不妥善管理，債務問題將日益擴大。你應迅速處理才是解決問題的關鍵。</p>";
					str+="<p>你的信貸評分可能會被影響，從而導致你將來向貸款機構申請貸款時會有困難。</p>";
					str+="<p>請先儘早清還欠款以避免繳交銀行的利息費用。</p>";
					str+="<p><span>你可以使用<a target='_blank'href='https://www.thechinfamily.hk/tools/debt/tc/debt.html'>債務計算機</a>來協助管理債務。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong></p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/managing-debts-effectively.html'>了解更多關於如何妥善管理債務</a>和<a target='_blank' href='http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/having-difficulty-repaying-debt.html'>解決償還債務時遇到的問題</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/index.html)</strong></p>";
					plan+="<ul class='firstUL'><li>列出你所有的債務</li>";
					plan+="<li>排列還款先後次序：";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>有抵押債務例如按揭，以免居住的物業被收回</span></li>";
					plan+="<li><span>利率較高的其他債務</span></li>";
					plan+="</ul></li>";
					plan+="<li>審視收支預算，削減或推遲非必要開支</li>";
					plan+="<li>每月至少償還每張信用卡的最低還款額，以免影響你的信貸評分</li>";
					plan+="<li>告知貸款機構你出現了財政困難，尋求專業協助及意見，例如一些非牟利機構的理財輔導計劃</li>";
					plan+="<li>考慮合併你的貸款</li></ul>";
				}else if(creditcard==4||creditcard==5){
					if(loan==1){
						img_s3="begoodpig.png";
						str+="<p>不管你負債多少，都必須妥善管理。即使欠款微不足道，你也必須堅持準時還款，避免債務失控。</p>";
						str+="<p><span>你可以使用<a target='_blank' href='https://www.thechinfamily.hk/tools/debt/tc/debt.html'>債務計算機</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong>來協助管理債務。</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/managing-debts-effectively.html'>了解更多關於如何妥善管理債務</a>和<a target='_blank' href='http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/having-difficulty-repaying-debt.html'>解決償還債務時遇到的問題</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/index.html)</strong></p>";
						plan+="<ul class='firstUL'><li>列出你所有的債務</li>";
						plan+="<li>排列還款先後次序：";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>有抵押債務例如按揭，以免居住的物業被收回</span></li>";
						plan+="<li><span>利率較高的其他債務</span></li>";
						plan+="</ul></li>";
						plan+="<li>堅持準時還款，以智能電話的月曆功能設立還款到期日提示</li></ul>";
					}else if(loan==2){
						img_s3="goodpig.png";
						str+="<p>你於管理債務和金錢上已做得很好，加油！</p>";
						str+="<p><span>你應該已有良好的信貸評分，<a target='_blank' href='http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/credit-reports.html'>你可了解有關信貸報告的運作</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/index.html)</strong></p>";
						str+="<p><span>如你將打算置業或申請其他貸款，緊記必須量力而為，避免使還款額超過你的負擔能力。</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/managing-debts-effectively.html'>了解更多關於妥善管理債務</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/banking-and-credit/managing-debt/index.html)</strong></p>";
						plan+="請參考以上建議";
					}else{
						img_s3="error.jpg";
						str+="请填写完所有选项！";
					}
				}else{
					img_s3="error.jpg";
					str+="请填写完所有选项！";
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					if("goodpig_en.png".equals(img_s3)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s3", img_s3+"||"+str+"||Credit management"+"||"+plan);
					response.getWriter().write(img_s3+"||"+str+"||Credit management"+"||"+plan);
				}else{
					if("goodpig.png".equals(img_s3)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s3", img_s3+"||"+str+"||借貸管理"+"||"+plan);
					response.getWriter().write(img_s3+"||"+str+"||借貸管理"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	public String s4(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S4
			String fiancialgoal=request.getParameter("fiancialgoal");
			String howgoal=request.getParameter("howgoal");
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s4=null;
			if("eng".equals(lan)){
				if(fiancialgoal=="n"||"n".equals(fiancialgoal)){
					img_s4="badpig_en.png";
					str+="<p>Setting your financial goals can help you review your budget, determine your investment time frame and work out a strategy to decide on the appropriate investments.</p>";
					str+="<p>Based on a thorough understanding of your financial situation, you may be able to identify short-, medium- and long-term financial goals.</p>";
					//str+="<p>請早還清欠款避免繳交銀行的利息費用。</p>";
					str+="<p><span>Try out our <a target='_blank' href='http://www.thechinfamily.hk/tools/en/saving.html'>Savings Goals Calculator</a> and <a target='_blank' href='http://www.thechinfamily.hk/tools/en/budget.html'>Budget Planner</a> to take actions now.</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong></p>";
					plan+="<ul class='firstUL'><li>Set your financial goal and timeframe, here are some examples:";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>Short-term: costs for travelling or further education</span></li>";
					plan+="<li><span>Long-term: wedding expenses or down payment for buying a home</span></li>";
					plan+="</ul></li>";
					plan+="<li>Make reference to money-saving tips and act on them:";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>Set spending limits and rules such as sticking to the items on your shopping list</span></li>";
					plan+="<li><span>Develop habits to shop around to compare prices</span></li>";
					plan+="<li><span>Use note book or mobile app to record expenses every day</span></li>";
					plan+="<li><span>Set up a dedicated bank account without ATM card for your savings</span></li>";
					plan+="<li><span>Use only cash for spending if you have difficulties in repaying debts</span></li>";
					plan+="</ul></li></ul>";
				}else if(fiancialgoal=="y"||"y".equals(fiancialgoal)){
					if(howgoal=="n"||"n".equals(howgoal)){
						img_s4="begoodpig_en.png";
						str+="<p>You have taken a good step to develop your financial goals, but it is important to start planning how much you need to achieve these goals. </p>";
						str+="<p>Try out our <a target='_blank' href='http://www.thechinfamily.hk/tools/en/saving.html'>Savings Goals Calculator</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> now to find out:</p>";
						str+="<ul class='a'><li><span>How much you will need to save regularly to reach goal in time;</span></li>";
						str+="<li><span>How much you  will have if put aside a fixed amount of money regularly; </span></li>";
						str+="<li><span>How long it will take to reach your savings goal.</span></li></ul>";
						plan+="<ul class='firstUL'><li>Plan how to achieve your financial goals, include how to increase income and reduce spending</li>";
						plan+="<li>Make reference to money-saving tips and act on them:</li>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>Set spending limits and rules such as sticking to the items on your shopping list</span></li>";
						plan+="<li><span>Develop habits to shop around to compare prices</span></li>";
						plan+="<li><span>Use note book or mobile app to record expenses every day</span></li>";
						plan+="<li><span>Set up a dedicated bank account without ATM card for your savings</span></li>";
						plan+="<li><span>Use note book or mobile app to record expenses every day</span></li>";
//						plan+="<li><span>建立格價習慣</span></li>";
						plan+="<li><span>Use only cash for spending if you have difficulties in repaying debts</span></li>";
						plan+="</ul>";
						plan+="<li>Seek additional income sources such as part-time job or investments</li></ul>";
					}else if(howgoal=="y"||"y".equals(howgoal)){
						img_s4="goodpig_en.png";
						str+="<p>Congratulations on making plans to achieve your financial goals.</p>";
						str+="<p>You can use our <a target='_blank' href='http://www.thechinfamily.hk/tools/en/saving.html'>Savings goal calculator</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong> to find out: </p>";
						str+="<ul class='a'><li><span>How much you will need to save regularly to reach goal in time;</span></li>";
						str+="<li><span>How much you  will have if put aside a fixed amount of money regularly; </span></li>";
						str+="<li><span>How long it will take to reach your savings goal.</span></li></ul>";
						plan+="Please refer to the above proposal";
					}else{
						img_s4="error.jpg";
						str+="Please fill out the all the options!";
					}

				}else{
					img_s4="error.jpg";
					str+="Please fill out the all the options!";
				}
			}else{
				if(fiancialgoal=="n"||"n".equals(fiancialgoal)){
					img_s4="badpig.png";
					str+="<p>訂立你的財務目標將有助你檢視個人收支預算，並釐定投資時間表及適當的投資策略。</p>";
					str+="<p>當你對個人財務狀況有了透徹的了解，你便可嘗試訂立短、中、長期的財務目標。</p>";
					str+="<p>請早還清欠款避免繳交銀行的利息費用。</p>";
					str+="<p><span>請使用<a target='_blank' href='http://www.thechinfamily.hk/tools/tc/saving.html'>儲蓄目標計算機</a>和<a target='_blank' href='http://www.thechinfamily.hk/tools/tc/budget.html'>個人收支計算機</a>去開始訂立目標。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong></p>";
					plan+="<ul class='firstUL'><li>訂立你的財務目標及具體時限，以下是一些例子：";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>短期 – 旅遊費用、進修學費等</span></li>";
					plan+="<li><span>長期 – 結婚開支、買樓首期等</span></li>";
					plan+="</ul></li>";
					plan+="<li>參考省錢秘訣，並積極實行：";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>設定消費限額及訂立規條（例如只購買購物清單上的貨品）</span></li>";
					plan+="<li><span>貨比三家，建立格價習慣</span></li>";
					plan+="<li><span>用筆記簿或智能手機App紀錄每日開支</span></li>";
					plan+="<li><span>開設一個指定用來儲蓄而沒有提款卡的銀行戶口</span></li>";
					plan+="<li><span>如你還債有困難，你或只用現金消費</span></li>";
					plan+="</ul></li></ul>";
				}else if(fiancialgoal=="y"||"y".equals(fiancialgoal)){
					if(howgoal=="n"||"n".equals(howgoal)){
						img_s4="begoodpig.png";
						str+="<p>很好，你已經訂立了你的財務目標，而這個財務目標所費多少也是相當重要。</p>";
						str+="<p>請使用<a target='_blank' href='http://www.thechinfamily.hk/tools/tc/saving.html'>儲蓄目標計算機</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong>，這可助你計算：</p>";
						str+="<ul class='a'><li><span>你需要定期儲蓄多少才能夠實現目標；</span></li>";
						str+="<li><span>如果你定期定額儲蓄，最終可儲蓄多少；</span></li>";
						str+="<li><span>你需要多少時間才可達到你的儲蓄目標。</span></li></ul>";
						plan+="<ul class='firstUL'><li>立即計劃如何實現你的財務目標，包括如何開源及節流</li>";
						plan+="<li>參考省錢秘訣，並積極實行：</li>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>設定消費限額及訂立規條（例如只購買購物清單上的貨品）</span></li>";
						plan+="<li><span>貨比三家，建立格價習慣</span></li>";
						plan+="<li><span>用筆記簿或智能手機App紀錄每日開支</span></li>";
						plan+="<li><span>開設一個指定用來儲蓄而沒有提款卡的銀行戶口</span></li>";
//						plan+="<li><span>用筆記簿或智能手機App紀錄每日開支</span></li>";
//						plan+="<li><span>建立格價習慣</span></li>";
						plan+="<li><span>如你還債有困難，你或只用現金消費</span></li>";
						plan+="</ul>";
						plan+="<li>尋找增加額外收入的方式，例如：兼職、投資</li></ul>";
					}else if(howgoal=="y"||"y".equals(howgoal)){
						img_s4="goodpig.png";
						str+="<p>恭喜你！你已有計劃逐步達成你的財務目標。</p>";
						str+="<p>你可使用<a target='_blank' href='http://www.thechinfamily.hk/tools/tc/saving.html'>儲蓄目標計算機</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/calculators)</strong>，這可助你計算：</p>";
						str+="<ul class='a'><li><span>你需要定期儲蓄多少才能夠實現目標；</span></li>";
						str+="<li><span>如果你定期定額儲蓄，最終可儲蓄多少；</span></li>";
						str+="<li><span>你需要多少時間才可達到你的儲蓄目標。</span></li></ul>";
						plan+="請參考以上建議";
					}else{
						img_s4="error.jpg";
						str+="请填写完所有选项！";
					}

				}else{
					img_s4="error.jpg";
					str+="请填写完所有选项！";
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					if("goodpig_en.png".equals(img_s4)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s4", img_s4+"||"+str+"||Financial goals"+"||"+plan);
				    response.getWriter().write(img_s4+"||"+str+"||Financial goals"+"||"+plan);
				}else{
					if("goodpig.png".equals(img_s4)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s4", img_s4+"||"+str+"||財務目標"+"||"+plan);
				    response.getWriter().write(img_s4+"||"+str+"||財務目標"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String s5(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S5
			int dragcoin=Integer.parseInt(request.getParameter("dragcoin"));
			int radiottq=Integer.parseInt(request.getParameter("radiottq"));
			int investdescribe=Integer.parseInt(request.getParameter("investdescribe"));
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s5="error.jpg";
			if("eng".equals(lan)){
				if(radiottq>0){
					if(dragcoin==1){
						img_s5="badpig_en.png";
						str+="<p>Make sure you save before you consider to invest. </p>";
						str+="<p>Depending on your financial goals, you should decide how much you would need to make any investments.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html'>Read more to know how to plan your investments.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html)</strong></span></p>";
						plan+="<ul class='firstUL'><li>Save before you invest. Set aside investment money from essential expenses and emergency fund.</li>";
						plan+="<li>Plan and manage your investment portfolio. You can consider these steps:</li>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>Know your investment objectives and risk appetite;</span></li>";
						plan+="<li><span>Understand the products you want to invest;</span></li>";
						plan+="<li><span>Manage risk by diversifying your investment portfolio;</span></li>";
						plan+="<li><span>Review performance of your investment portfolio regularly;</span></li>";
						plan+="<li><span>Adjust your investment portfolio according your resources, needs and market conditions.</span></li>";
						plan+="</ul></ul>";
					}else if(dragcoin==2||dragcoin==3||dragcoin==4){
						if(investdescribe==1||investdescribe==2){
							img_s5="badpig_en.png";
							str+="<p>Each type of investment has its own potential and drawbacks. You must understand the nature and risk of any investment offered to you.</p>";
							str+="<p>Get the facts before you invest.</p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html'>Read more to know how to plan your investments.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html)</strong></span></p>";
							plan+="<ul class='firstUL'><li>Understand the products before you invest. Seek professional advice if necessary or search for information on your own.</li>";
							plan+="<li>Follow these steps to plan and manage your investment portfolio:</li>";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>Know your investment objectives and risk appetite;</span></li>";
							plan+="<li><span>Understand the products you want to invest;</span></li>";
							plan+="<li><span>Manage risk by diversifying your investment portfolio;</span></li>";
							plan+="<li><span>Review performance of your investment  portfolio regularly;</span></li>";
							plan+="<li><span>Adjust your investment portfolio according your resources, needs and market conditions.</span></li>";
							plan+="</ul></ul>";
						}else if(investdescribe==3||investdescribe==4){
							img_s5="goodpig_en.png";
							str+="<p>Well done on your planning! You have a good understanding on your investments.</p>";
							str+="<p>What you need to do is review your investment plan regularly, and whenever there are significant changes in your own circumstances or in market conditions.</p>";
							str+="<p><span>Investing is a long-term commitment and you cannot totally avoid risks. The easiest way for you to manage risk is to diversify. You could consider the dollar cost averaging strategy to help minimise your investment risk. </span></p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html'>Read more to know how to plan your investments.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html)</strong></span></p>";
							plan+="<ul class='firstUL'><li>Set up a schedule to review your investment portfolio regularly, such as semi-annually or annually.</li>";
							plan+="<li>Switch your investment products or change investment capital as necessary.</li>";
							plan+="<li>Understand the features and risks of the products you want to invest before seeking additional investment opportunities.</li></ul>";
						}else{
							img_s5="error.jpg";
							str+="Please fill out the all the options!";
						}
					}else{
						img_s5="error.jpg";
						str+="Please fill out the all the options!";
					}
				}else{
					img_s5="begoodpig_en.png";
					str+="<p>Investment could be an option for you to grow your savings so that you could achieve your financial goals. </p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html'>Read more to know how to plan your investments.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/building-an-investment-portfolio.html)</strong></span></p>";
					plan+="<ul class='firstUL'><li>Save before you invest. Set aside investment money from essential expenses and emergency fund</li>";
					plan+="<li>Plan and manage your investment portfolio. You can consider these steps:</li>";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>Know your investment objectives and risk appetite;</span></li>";
					plan+="<li><span>Understand the products you want to invest;</span></li>";
					plan+="<li><span>Manage risk by diversifying your investment portfolio;</span></li>";
					plan+="<li><span>Review performance of your investment portfolio regularly;</span></li>";
					plan+="<li><span>You may need to adjust your investment portfolio when there are significant changes in your own circumstances or in market conditions.</span></li>";
					plan+="</ul></ul>";
				}
			}else{
				if(radiottq>0){
					if(dragcoin==1){
						img_s5="badpig.png";
						str+="<p>投資前， 請先儲蓄。</p>";
						str+="<p>視乎你的財務目標，你應考慮以多少資金用作投資。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/financial-planning/building-an-investment-portfolio.html'>了解更多關於籌劃投資組合</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/investment/investment-planning/portfolio-planning.html)</strong></p>";
						plan+="<ul class='firstUL'><li>進行投資前，最理想是先養成儲蓄習慣，預留一筆獨立於必要開支及應急錢的資金才考慮投資</li>";
						plan+="<li>建立和管理你的投資組合，請考慮以下關鍵步驟：</li>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>了解自己的投資目標及風險承受能力</span></li>";
						plan+="<li><span>了解你想投資的產品</span></li>";
						plan+="<li><span>分散投資風險</span></li>";
						plan+="<li><span>定期檢討投資組合的表現</span></li>";
						plan+="<li><span>因應資源、個人需要和環境變化調整你的投資組合</span></li>";
						plan+="</ul></ul>";
					}else if(dragcoin==2||dragcoin==3||dragcoin==4){
						if(investdescribe==1||investdescribe==2){
							img_s5="badpig.png";
							str+="<p>不同的投資產品各有不同的投資潛力和缺點。你需緊記掌握每項投資產品/工具的性質和風險。</p>";
							str+="<p>緊記先求知，再投資。</p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/financial-planning/building-an-investment-portfolio.html'>了解更多關於籌劃投資組合</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/investment/investment-planning/portfolio-planning.html)</strong></p>";
							plan+="<ul class='firstUL'><li>進行投資前，你必須認識你有興趣買的投資產品，如需要，可以請教專業人士或自行搜集有關資料</li>";
							plan+="<li>跟隨以下步驟建立和管理你的投資組合：</li>";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>了解自己的投資目標及風險承受能力</span></li>";
							plan+="<li><span>了解你想投資的產品</span></li>";
							plan+="<li><span>分散投資風險</span></li>";
							plan+="<li><span>定期檢討投資組合的表現</span></li>";
							plan+="<li><span>因應資源、個人需要和環境變化調整你的投資組合</span></li>";
							plan+="</ul></ul>";
						}else if(investdescribe==3||investdescribe==4){
							img_s5="goodpig.png";
							str+="<p>非常好！你對投資籌劃有充份的瞭解。</p>";
							str+="<p>你現在需要定期檢視你的投資計劃，特別是當你自身的環境或市況出現重大改變的時候。</p>";
							str+="<p><span>投資是一個長遠的過程並需持續不斷經營。完全迴避風險是不可能的，管理風險最簡單的方法是分散投資。除此之外，你還可考慮以平均成本效益法去緩和短期市場波動的影響。</span></p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/financial-planning/building-an-investment-portfolio.html'>了解更多關於籌劃投資組合</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/investment/investment-planning/portfolio-planning.html)</strong></p>";
							plan+="<ul class='firstUL'><li>可訂出時間表，每半年或一年定期檢視你的投資組合的表現</li>";
							plan+="<li>需要時作出投資產品或資金的調動</li>";
							plan+="<li>尋求更多的投資機會前，必先完全了解投資項目或產品的性質及風險</li></ul>";
						}else{
							img_s5="error.jpg";
							str+="请填写完所有选项！";
						}
					}else{
						img_s5="error.jpg";
						str+="请填写完所有选项！";
					}
				}else{
					img_s5="begoodpig.png";
					str+="<p>你可考慮投資為財富增值，從而使你達到你的財務目標。</p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/financial-planning/building-an-investment-portfolio.html'>了解更多關於籌劃投資組合</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/investment/investment-planning/portfolio-planning.html)</strong></p>";
					plan+="<ul class='firstUL'><li>進行投資前，最理想是先養成儲蓄習慣，預留一筆獨立於必要開支及應急錢的資金才考慮投資</li>";
					plan+="<li>建立和管理你的投資組合，請考慮以下關鍵步驟：</li>";
					plan+="<ul class='ul_plan'>";
					plan+="<li><span>了解自己的投資目標及風險承受能力</span></li>";
					plan+="<li><span>了解你想投資的產品</span></li>";
					plan+="<li><span>分散投資風險</span></li>";
					plan+="<li><span>定期檢討投資組合的表現</span></li>";
					plan+="<li><span>在你自身的環境或市況出現重大改變時，你或須調整你的投資組合</span></li>";
					plan+="</ul></ul>";
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					request.getSession().setAttribute("s5", img_s5+"||"+str+"||Saving and Investing"+"||"+plan);
				    response.getWriter().write(img_s5+"||"+str+"||Saving and Investing"+"||"+plan);
				}else{
					request.getSession().setAttribute("s5", img_s5+"||"+str+"||儲蓄及投資"+"||"+plan);
				    response.getWriter().write(img_s5+"||"+str+"||儲蓄及投資"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	public String s6(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S6
			String whethersaving=request.getParameter("whethersaving");
			String sickpayment=request.getParameter("sickpayment");
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s6=null;
			if("eng".equals(lan)){
				if(whethersaving=="n"||"n".equals(whethersaving)){
					if(sickpayment=="3"||"3".equals(sickpayment)){
						img_s6="badpig_en.png";
						str+="<p>Emergency fund is essential for everyone.</p>";
						str+="<p>It is important that you consider putting some of your money aside as an emergency fund to meet unexpected financial needs without having to go into debts.</p>";
						str+="<p>It is wise to save an emergency fund of about three to six months of living expenses to deal with any unexpected events.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/savings.html'>Learn more on how to save for the future.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/savings.html)</strong></span></p>";
						plan+="<ul class='firstUL'><li>Get started to save for an emergency fund.</li>";
						plan+="<li>Calculate the amount of expenses that you need to pay for your family and your own.</li>";
						plan+="<li>Set up a saving target for emergency fund as 3 to 6 times of this amount. </li>";
						plan+="<li>Consider to put your emergency fund in safe investments such as a bank savings account or term deposit to earn interest.</li></ul>";
					}else if(sickpayment=="1"||"1".equals(sickpayment)||sickpayment=="2"||"2".equals(sickpayment)){
						img_s6="begoodpig_en.png";
						str+="<p>You should consider setting aside an emergency fund to meet unexpected financial needs without having to go into debts.</p>";
						str+="<p>In general, it is recommended your emergency fund could cover at least three to six months of living expenses.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/savings.html'>Learn more on how to save for the future.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/savings.html)</strong></span></p>";
						plan+="<ul class='firstUL'><li>Get started to save for an emergency fund.</li>";
						plan+="<li>Calculate the amount of expenses that you need to pay for your family and your own.</li>";
						plan+="<li>Set up a saving target for emergency fund as 3 to 6 times of this amount. </li>";
						plan+="<li>Consider to put your emergency fund in safe investments such as a bank savings account or term deposit to earn interest.</li></ul>";
					}else{
						img_s6="error.jpg";
						str+="Please fill out the all the options!";
					}
				}else if(whethersaving=="y"||"y".equals(whethersaving)){
					if(sickpayment=="3"||"3".equals(sickpayment)){
						img_s6="begoodpig_en.png";
						str+="<p>You should consider setting aside an emergency fund to meet unexpected financial needs without having to go into debts.</p>";
						str+="<p>In general, it is recommended your emergency fund could cover at least three to six months of living expenses.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/savings.html'>Learn more on how to save for the future.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/savings.html)</strong></span></p>";
						plan+="<ul class='firstUL'><li>Calculate the amount of expenses that you need to pay for your family and your own.</li>";
						plan+="<li>Set up a saving target for emergency fund as 3 to 6 times of this amount.</li>";
						plan+="<li>Consider to put your emergency fund in safe investments such as a bank savings account or term deposit to earn interest.</li></ul>";
					}else if(sickpayment=="1"||"1".equals(sickpayment)||sickpayment=="2"||"2".equals(sickpayment)){
						img_s6="goodpig_en.png";
						str+="<p>It is good that you have prepared an emergency fund to meet unexpected financial needs.</p>";
						str+="<p>In general, you should consider putting your emergency fund in safe and liquid instruments that earn interest, such as bank savings. This will give you better peace of mind that capital will be available when you need it.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/savings.html'>Learn more on how to save for the future.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/savings.html)</strong></span></p>";
						plan+="Please refer to the above proposal";
					}else{
						img_s6="error.jpg";
						str+="Please fill out the all the options!";
					}
				}else{
					img_s6="error.jpg";
					str+="Please fill out the all the options!";
				}
			}else{
				if(whethersaving=="n"||"n".equals(whethersaving)){
					if(sickpayment=="3"||"3".equals(sickpayment)){
						img_s6="badpig.png";
						str+="<p>儲備應急錢對每個人來說都是必需的。</p>";
						str+="<p>預留一筆資金作為應急錢，以應付不期而至的財務問題而毋須舉債是非常重要的。</p>";
						str+="<p>你最好預留相等於至少三至六個月家庭和個人開支的儲備，以防萬一。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html'>了解更多關於儲蓄為未來</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html)</strong></p>";
						plan+="<ul class='firstUL'><li>立即開始儲備應急錢</li>";
						plan+="<li>計算你需要負擔的每月家庭和個人開支的金額</li>";
						plan+="<li>設立你的應急錢儲蓄目標為此金額的3至6倍</li>";
						plan+="<li>考慮將應急錢投入穩妥的理財產品，如銀行儲蓄戶口或定期存款以增加收入來源</li></ul>";
					}else if(sickpayment=="1"||"1".equals(sickpayment)||sickpayment=="2"||"2".equals(sickpayment)){
						img_s6="begoodpig.png";
						str+="<p>你需考慮預留一筆資金作為應急錢，在毋須舉債之下以應付不期而至的財務問題。</p>";
						str+="<p>一般來說，你應預留相等於至少三至六個月家庭和個人開支的儲備，以防萬一。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html'>了解更多關於儲蓄為未來</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html)</strong></p>";
						plan+="<ul class='firstUL'><li>立即開始儲備應急錢</li>";
						plan+="<li>計算你需要負擔的每月家庭和個人開支的金額</li>";
						plan+="<li>設立你的應急錢儲蓄目標為此金額的3至6倍</li>";
						plan+="<li>考慮將應急錢投入穩妥的理財產品，如銀行儲蓄戶口或定期存款以增加收入來源</li></ul>";
					}else{
						img_s6="error.jpg";
						str+="请填写完所有选项！";
					}
				}else if(whethersaving=="y"||"y".equals(whethersaving)){
					if(sickpayment=="3"||"3".equals(sickpayment)){
						img_s6="begoodpig.png";
						str+="<p>你需考慮預留更多資金作為應急錢，在毋須舉債之下以應付不期而至的財務問題。</p>";
						str+="<p>一般來說，你應預留相等於至少三至六個月家庭和個人開支的儲備，以防萬一。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html'>了解更多關於儲蓄為未來</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html)</strong></p>";
						plan+="<ul class='firstUL'><li>計算你需要負擔的每月家庭和個人開支的金額</li>";
						plan+="<li>設立你的應急錢儲蓄目標為此金額的3至6倍</li>";
						plan+="<li>考慮將應急錢投入穩妥的理財產品，如銀行儲蓄戶口或定期存款以增加收入來源</li></ul>";
					}else if(sickpayment=="1"||"1".equals(sickpayment)||sickpayment=="2"||"2".equals(sickpayment)){
						img_s6="goodpig.png";
						str+="<p>非常好！你已預留一筆資金作為應急錢以備不時之需。</p>";
						str+="<p>一般來說，你可考慮將應急錢放於安全的地方或一些流動性較高的金融工具，例如銀行存款。這樣在有需要時便可隨時動用。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html'>了解更多關於儲蓄為未來</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html)</strong></p>";
						plan+="請參考以上建議";
					}else{
						img_s6="error.jpg";
						str+="请填写完所有选项！";
					}
				}else{
					img_s6="error.jpg";
					str+="请填写完所有选项！";
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					if("goodpig_en.png".equals(img_s6)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s6", img_s6+"||"+str+"||Saving for emergency"+"||"+plan);
				    response.getWriter().write(img_s6+"||"+str+"||Saving for emergency"+"||"+plan);
				}else{
					if("goodpig.png".equals(img_s6)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s6", img_s6+"||"+str+"||儲備應急錢"+"||"+plan);
				    response.getWriter().write(img_s6+"||"+str+"||儲備應急錢"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String s7(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S7
			int insuranceenough=Integer.parseInt(request.getParameter("insuranceenough"));
			int score=Integer.parseInt(request.getParameter("score"));
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s7=null;
			if("eng".equals(lan)){
				if(insuranceenough==1){
					img_s7="goodpig_en.png";
					str+="<p>It is good that you are clear about what you need for insurance cover.</p>";
					str+="<p>However you should also note that choosing the right insurance is also important.</p>";
					str+="<p>You may need to reassess your risk coverage when there is a change in financial status, eg getting married, having a child, buying a new flat, etc.</p>";
					str+="<p><span>If you have any person replying on your financial support, you should also consider their insurance needs and coverage. Any unforeseen incidents such as unexpected medical expenses may affect your expenses.</span></p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/applying-for-insurance.html'>Learn how to make an informed decision.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/insurance/basics/applying-for-insurance.html)</strong></span></p>";
					plan+="Please refer to the above proposal";
				}else{
				if(score>=4&&score<=7){
					if(insuranceenough==3||insuranceenough==4){
						img_s7="badpig_en.png";
						str+="<p>Insurance provides financial protection and coverage against unforeseen incidents and other risks in life.</p>";
						str+="<p>You should consider including insurance as part of your financial plan to protect yourself, your family and your assets. </p>";
						str+="<p><span>If you have any person replying on your financial support, you should also consider their insurance needs and coverage. Any unforeseen incidents such as unexpected medical expenses may affect your expenses.</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/insurance-basics.html'>Learn more on what to consider about your insurance needs.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/insurance-basics.html)</strong></span></p>";

						plan+="<ul class='firstUL'><li>Decide your insurance needs according to your own circumstances, such as:";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>To protect your family after you pass away or become unable to work;</span></li>";
						plan+="<li><span>To pay the medical expenses from insurance coverage when you become sick;</span></li>";
						plan+="<li><span>To protect your home, car or other assets in the event of theft  or disasters.</span></li>";
						plan+="</ul></li>";
						plan+="<li>Compare prices among different insurance companies on the insurance product you want to buy.</li>";
						plan+="<li>Understand policy terms, exclusions and fees before buying.</li>";
						plan+="<li>Consider whether you can afford the premium and whether the coverage is sufficient according to your own circumstances.</li></ul>";
					}else if(insuranceenough==2){
							img_s7="begoodpig_en.png";
							str+="<p>Insurance provides financial protection and coverage against unforeseen incidents and other risks in life.</p>";
							str+="<p>How much insurance you need will depend on your circumstances.</p>";
							str+="<p>You should assess your needs and ensure that you have sufficient insurance cover.</p>";
							str+="<p><span>If you have any person replying on your financial support, you should also consider their insurance needs and coverage. Any unforeseen incidents such as unexpected medical expenses may affect your expenses.</span></p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/insurance-basics.html'>Learn more on what to consider about your insurance needs</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/insurance-basics.html)</strong></span></p>";
							plan+="<ul class='firstUL'><li>Review your insurance needs according to your own circumstances so that you can decide whether your insurance coverage is sufficient, such as:";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>To protect your family after you pass away or become unable to work;</span></li>";
							plan+="<li><span>To pay the medical expenses from insurance coverage when you become sick;</span></li>";
							plan+="<li><span>To protect your home, car or other assets in the event of theft or disasters.</span></li>";
							plan+="</ul></li>";
							plan+="<li>Understand policy terms, exclusions and fees before buying.</li>";
							plan+="<li>Seek professional advice on whether you need to increase or reduce your insurance coverage.</li></ul>";
						}
					}else if(score>=8&&score<=13){
						if(insuranceenough==2||insuranceenough==3||insuranceenough==4){
							img_s7="begoodpig_en.png";
							str+="<p>Insurance provides financial protection and coverage against unforeseen incidents and other risks in life.</p>";
							str+="<p>How much insurance you need will depend on your circumstances.</p>";
							str+="<p>You should assess your needs and ensure that you have sufficient insurance cover.</p>";
							str+="<p><span>If you have any person replying on your financial support, you should also consider their insurance needs and coverage. Any unforeseen incidents such as unexpected medical expenses may affect your expenses.</span></p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/insurance-basics.html'>Learn more on what to consider about your insurance needs.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/financial-products/insurance/basics/insurance-basics.html)</strong></span></p>";
							plan+="<ul class='firstUL'><li>Decide your insurance needs according to your own circumstances, such as:";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>To protect your family after you pass away or become unable to work;</span></li>";
							plan+="<li><span>To pay the medical expenses from insurance coverage when you become sick;</span></li>";
							plan+="<li><span>To protect your home, car or other assets in the event of theft  or disasters.</span></li>";
							plan+="</ul></li>";
							plan+="<li>Compare prices among different insurance companies on the insurance product you want to buy.</li>";
							plan+="<li>Understand policy terms, exclusions and fees before buying.</li>";
							plan+="<li>Consider whether you can afford the premium and whether the coverage is sufficient according to your own circumstances.</li></ul>";
						}
					}
				}
			}else{
				if(insuranceenough==1){
					img_s7="goodpig.png";
					str+="<p>非常好！你對你所需的保險保障已有充足了解，</p>";
					str+="<p>但你仍須留意選擇適合自己的保險，這亦是非常重要的。</p>";
					str+="<p>當你的人生階段轉變，例如結婚、生兒育女或置業 等，你可能需要再次檢視自己的財務狀況。</p>";
					str+="<p><span>如果你有經濟上需要你支持的家人，你也應考慮是否需要為他們提供保險保障，生活中的突發事故例如突如其來的醫療開支也可能影響你的支出。</span></p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/applying-for-insurance.html'>了解更多關於申請投保</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/applying-for-insurance.html)</strong></p>";
					plan+="請參考以上建議";
				}else{
				if(score>=4&&score<=7){
					if(insuranceenough==3||insuranceenough==4){
						img_s7="badpig.png";
						str+="<p>購買保險能夠為生活中的突發或緊急事故提供一些財務保障。</p>";
						str+="<p>你的財務計劃應該包括保險，從而為自己、家人或其他資產提供保障。</p>";
						str+="<p><span>如果你有經濟上需要你支持的家人，你也應考慮是否需要為他們提供保險保障，生活中的突發事故例如突如其來的醫療開支也可能影響你的支出。</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/insurance-basics.html'>了解更多關於保險基本知識</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/insurance-basics.html)</strong></p>";

						plan+="<ul class='firstUL'><li>根據你的個人狀況，確定你需要投保的原因，例如：";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>在你身故或失去賺錢能力後為家人提供保障</span></li>";
						plan+="<li><span>在你罹患疾病時，以保險賠償支付醫療費用</span></li>";
						plan+="<li><span>在遇到盜竊或災害時，為你的住所、坐駕或其他資產提供保障</span></li>";
						plan+="</ul></li>";
						plan+="<li>向不同保險公司格價，比較你決定購買的保險產品</li>";
						plan+="<li>購買保險前，清楚了解保單的條款、除外責任及費用等</li>";
						plan+="<li>根據你的個人狀況，考慮是否能負擔保單費用，以及保障額是否足夠</li></ul>";
					}else if(insuranceenough==2){
							img_s7="begoodpig.png";
							str+="<p>購買保險能夠為生活中的突發或緊急事故提供一些財務保障。</p>";
							str+="<p>你需要的保障額將取決於你的個人情況。</p>";
							str+="<p>你須先了解自身所需，然後確定你的保額是否足夠。</p>";
							str+="<p><span>如果你有經濟上需要你支持的家人，你也應考慮是否需要為他們提供保險保障，生活中的突發事故例如突如其來的醫療開支也可能影響你的支出。</span></p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/insurance-basics.html'>了解更多關於保險基本知識</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/insurance-basics.html)</strong></p>";
							plan+="<ul class='firstUL'><li>根據你的個人狀況，重新檢視你需要投保的原因，以確定你的保障額是否足夠，例如：";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>在你身故或失去賺錢能力後為家人提供保障</span></li>";
							plan+="<li><span>在你罹患疾病時，以保險賠償支付醫療費用</span></li>";
							plan+="<li><span>在遇到盜竊或災害時，為你的住所、坐駕或其他資產提供保障</span></li>";
							plan+="</ul></li>";
							plan+="<li>購買保險前，清楚了解保單的條款、除外責任及費用等</li>";
							plan+="<li>你可向專業人士了解你是否需要增加或減少保障額</li></ul>";
						}
					}else if(score>=8&&score<=13){
						if(insuranceenough==2||insuranceenough==3||insuranceenough==4){
							img_s7="begoodpig.png";
							str+="<p>購買保險能夠為生活中的突發或緊急事故提供一些財務保障。</p>";
							str+="<p>你需要的保障額將取決於你的個人情況。</p>";
							str+="<p>你須先了解自身所需，然後確定你的保額是否足夠。</p>";
							str+="<p><span>如果你有經濟上需要你支持的家人，你也應考慮是否需要為他們提供保險保障，生活中的突發事故例如突如其來的醫療開支也可能影響你的支出。</span></p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/insurance-basics.html'>了解更多關於保險基本知識</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/financial-products/insurance/basics/insurance-basics.html)</strong></p>";
							plan+="<ul class='firstUL'><li>根據你的個人狀況，確定你需要投保的原因，例如：";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>在你身故或失去賺錢能力後為家人提供保障</span></li>";
							plan+="<li><span>在你罹患疾病時，以保險賠償支付醫療費用</span></li>";
							plan+="<li><span>在遇到盜竊或災害時，為你的住所、坐駕或其他資產提供保障</span></li>";
							plan+="</ul></li>";
							plan+="<li>向不同保險公司格價，比較你決定購買的保險產品</li>";
							plan+="<li>購買保險前，清楚了解保單的條款、除外責任及費用等</li>";
							plan+="<li>根據你的個人狀況，考慮是否能負擔保單費用，以及保障額是否足夠</li></ul>";
						}
					}
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					if("goodpig_en.png".equals(img_s7)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s7", img_s7+"||"+str+"||Insurance planning"+"||"+plan);
				    response.getWriter().write(img_s7+"||"+str+"||Insurance planning"+"||"+plan);
				}else{
					if("goodpig.png".equals(img_s7)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s7", img_s7+"||"+str+"||保險規劃"+"||"+plan);
				    response.getWriter().write(img_s7+"||"+str+"||保險規劃"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	public String s8(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S8
			int radiot=Integer.parseInt(request.getParameter("radiot"));
			int retiremoney=Integer.parseInt(request.getParameter("retiremoney"));
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s8=null;
			if("eng".equals(lan)){
				if(radiot>0){
					if(retiremoney==1){
						img_s8="badpig_en.png";
						str+="<p>With the increase in life expectancy and higher cost of living, you should be aware of the importance of the retirement planning.</p>";
						str+="<p>It is always good to start planning for your retirement and building your retirement fund including MPF investment as early as possible. By starting earlier, you'll have a longer time horizon to grow your savings before you retire.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/pre-retiree/your-retirement-plan.html'>Check out if you are ready for your golden years.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/pre-retiree/your-retirement-plan.html)</strong></p>";
						plan+="<ul class='firstUL'><li>Get started to plan your retirement.</li>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>Decide when  you would like to stop working.</span></li>";
						plan+="<li><span>Estimate how much you will need for retirement according to the lifestyle you expect to lead during retirement.</span></li>";
						plan+="<li><span>Make a detailed estimate and forecast of the money you can accumulate up to retirement.</span></li>";
						plan+="</ul>";
						plan+="<li>Review your financial plan to close the shortfall of required retirement savings.</li>";
						plan+="<li>Set investment strategy.</li>";
						plan+="<li>Monitor the performance of your investment portfolio regularly and make adjustment as necessary.</li></ul>";
					}
					if(retiremoney==3){
						img_s8="goodpig_en.png";
						str+="<p>Keep up the good job!</p>";
						str+="<p>Once you’ve made your retirement plan and started saving and investing for your retirement schemes, it is a good habit to review your portfolio, including your MPF investment, once every six months or once a year, or whenever you enter into a new life stage to see if it still meets your retirement goals and your appetite for risk.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/pre-retiree/how-to-manage-your-mpf.html'>Learn more on how to keep track of your retirement schemes.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/pre-retiree/how-to-manage-your-mpf.html)</strong></p><p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/savings.html'>Saving early to let your money grow.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/savings.html)</strong></p>";
						plan+="<ul class='firstUL'><li>Set up a schedule to review your financial plan regularly, such as semi-annually or annually.</li>";
						plan+="<li>Adjust your investment portfolio as necessary.</li></ul>";
					}
					if(radiot>=5&&radiot<=10){
						if(retiremoney==2){
							img_s8="badpig_en.png";
							str+="<p>With the increase in life expectancy and higher cost of living, you should be aware of the importance of the retirement planning.</p>";
							str+="<p>It is always good to start planning for your retirement and building your retirement fund including MPF investment as early as possible. By starting earlier, you'll have a longer time horizon to grow your savings before you retire.</p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/pre-retiree/your-retirement-plan.html'>Check out if you are ready for your golden years.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/pre-retiree/your-retirement-plan.html)</strong></p>";
							plan+="<ul class='firstUL'><li>Get started to plan your retirement.</li>";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>Decide when  you would like to stop working.</span></li>";
							plan+="<li><span>Estimate how much you will need for retirement according to the lifestyle you expect to lead during retirement.</span></li>";
							plan+="<li><span>Make a detailed estimate and forecast of the money you can accumulate up to retirement.</span></li>";
							plan+="</ul>";
							plan+="<li>Review your financial plan to close the shortfall of required retirement savings.</li>";
							plan+="<li>Set investment strategy.</li>";
							plan+="<li>Monitor the performance of your investment portfolio regularly and make adjustment as necessary.</li></ul>";
						}
					}else if(radiot>10){
						if(retiremoney==2){
							img_s8="begoodpig_en.png";
							str+="<p>It is encouraging that you have made some plans for your retirement. The next step is to estimate how much money you'll need every month(or year) to support the lifestyle you have in mind for retirement.</p>";
							str+="<p>Standard of living is one of the important factors when planning for your retirement. Depending on the standard of lifestyle you expect to lead during retirement, you would need different budgets accordingly.</p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/pre-retiree/your-retirement-plan.html'>Learn more on how to get started.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/pre-retiree/your-retirement-plan.html)</strong></p><p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/savings.html'>Saving early to let your money grow.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/savings.html)</strong></p>";
							plan+="<ul class='firstUL'><li>Estimate how much you will need for retirement saving according to your expected lifestyle after retirement.</li>";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>Decide when you would like to stop working.</span></li>";
							plan+="<li><span>Estimate how much you will need for retirement according to the lifestyle you expect to lead during retirement.</span></li>";
							plan+="<li><span>Make a detailed estimate and forecast of the money you can accumulate up to retirement.</span></li>";
							plan+="</ul>";
							plan+="<li>Review your financial plan to close the shortfall of required retirement savings.</li>";
							plan+="<li>Set investment strategy.</li>";
							plan+="<li>Monitor the performance of your investment portfolio regularly and make adjustment as necessary.</li></ul>";
						}
					}
					if(retiremoney==0){
						img_s8="badpig_en.png";
						str+="Please fill in retirement!";
					}
				}else{
					img_s8="badpig_en.png";
					str+="No retirement plan!";
				}
			}else{
				if(radiot>0){
					if(retiremoney==1){
						img_s8="badpig.png";
						str+="<p>隨著預期壽命愈來愈長和生活開支的增加，你須知道制定退休計劃的重要性。</p>";
						str+="<p>請儘早開始策劃退休和儲蓄退休基金（包括強積金投資）。愈早開始計劃，你便有愈長時間在退休前儲蓄資金。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/pre-retiree/your-retirement-plan.html'>了解更多關於如何為你的黃金歲月作好準備</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/retirement/are-you-ready-for-your-golden-years.html)</strong></p>";
						plan+="<ul class='firstUL'><li>立即開始計劃退休</li>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>決定你希望停止工作的時間</span></li>";
						plan+="<li><span>根據你期望的退休生活方式，估算你需要多少退休積蓄</span></li>";
						plan+="<li><span>詳細估算和預測你到退休時能累積的資產總值</span></li>";
						plan+="</ul>";
						plan+="<li>檢討財務計劃，填補短缺的退休積蓄</li>";
						plan+="<li>制定投資策略</li>";
						plan+="<li>定期監察投資組合的表現，於有需要時進行調整</li></ul>";
					}
					if(retiremoney==3){
						img_s8="goodpig.png";
						str+="<p>非常好！</p>";
						str+="<p>當你訂下退休和投資計劃後，你須定期檢視你的投資組合，即每半年或每年，或每當你人生階段有轉變時，檢視一次強積金基金選擇或投資組合，以了解有關的選擇或組合是否仍然能夠配合你的退休目標和風險承受能力。</p>";
						str+="<p><span><a target='_blank' href='http://www.hkiec.hk/web/tc/retirement/keeping-track-of-your-retirement-schemes.html'>了解更多如何查察你的退休計劃</a>及<a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html'>儲蓄為未來</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html)</strong></p>";
						plan+="<ul class='firstUL'><li>設定時間表，每半年或每年檢討你的財務計劃</li>";
						plan+="<li>有需要時調整你的投資組合</li></ul>";
					}
					if(radiot>=5&&radiot<=10){
						if(retiremoney==2){
							img_s8="badpig.png";
							str+="<p>隨著預期壽命愈來愈長和生活開支的增加，你須知道開始制定退休計劃的重要性。</p>";
							str+="<p>請盡早開始策劃退休和儲蓄退休基金（包括強積金投資）。愈早開始計劃，你便有愈長時間在退休前儲蓄資金。</p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/pre-retiree/your-retirement-plan.html'>了解更多關於如何為你的黃金歲月作好準備</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/retirement/are-you-ready-for-your-golden-years.html)</strong></p>";
							plan+="<ul class='firstUL'><li>立即開始計劃退休</li>";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>決定你希望停止工作的時間</span></li>";
							plan+="<li><span>根據你期望的退休生活方式，估算你需要多少退休積蓄</span></li>";
							plan+="<li><span>詳細估算和預測你到退休時能累積的資產總值</span></li>";
							plan+="</ul>";
							plan+="<li>檢討財務計劃，填補短缺的退休積蓄</li>";
							plan+="<li>制定投資策略</li>";
							plan+="<li>定期監察投資組合的表現，於有需要時進行調整</li></ul>";
						}
					}else if(radiot>10){
						if(retiremoney==2){
							img_s8="begoodpig.png";
							str+="<p>你已開始策劃退休，令人鼓舞！下一步就是按照你心目中的退休生活方式，估計每月（或每年）所需的開出。</p>";
							str+="<p>生活質素是退休策劃中其中一個重要因素。視乎你退休後想要的生活方式，你應制定相應的開支預算。</p>";
							str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/pre-retiree/your-retirement-plan.html'>了解更多如何開始制定退休計劃</a>及<a target='_blank' href='http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html'>儲蓄為未來</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/retirement/getting-started.html)</strong></p>";
							plan+="<ul class='firstUL'><li>根據你期望的退休生活方式，估算你需要多少退休積蓄</li>";
							plan+="<ul class='ul_plan'>";
							plan+="<li><span>決定你希望停止工作的時間</span></li>";
							plan+="<li><span>根據你期望的退休生活方式，估算你需要多少退休積蓄</span></li>";
							plan+="<li><span>詳細估算和預測你到退休時能累積的資產總值</span></li>";
							plan+="</ul>";
							plan+="<li>檢討財務計劃，填補短缺的退休積蓄</li>";
							plan+="<li>制定投資策略</li>";
							plan+="<li>定期監察投資組合的表現，於有需要時進行調整</li></ul>";
						}
					}
					if(retiremoney==0){
						img_s8="badpig.png";
						str+="请填写退休时间！";
					}
				}else{
					img_s8="badpig.png";
					str+="无退休计划！";
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					request.getSession().setAttribute("s8", img_s8+"||"+str+"||Retirement planning"+"||"+plan);
				    response.getWriter().write(img_s8+"||"+str+"||Retirement planning"+"||"+plan);
				}else{
					request.getSession().setAttribute("s8", img_s8+"||"+str+"||退休計劃"+"||"+plan);
				    response.getWriter().write(img_s8+"||"+str+"||退休計劃"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	public String s9(){
		try {
		response.setContentType("text/plain;charset=UTF-8");
		//S9
			int inheritance=Integer.parseInt(request.getParameter("inheritance"));
			int inheritancedoc=Integer.parseInt(request.getParameter("inheritancedoc"));
			String lan = request.getParameter("paslan");
			String str="";
			String plan="";
			String img_s9=null;
			if("eng".equals(lan)){
				if(inheritance==1){
					if(inheritancedoc==1){
						img_s9="goodpig_en.png";
						str+="<p>It is good that you are well prepared.</p>";
						str+="<p>An estate plan includes documents (such as wills and funeral plans) that explain how you will be cared for, medically and financially.</p>";
						str+="<p><span>You can review your plan or seek professional advice if you missed any items.</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html'>Learn more on illness and death.</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html)</strong></span></p>";
						plan+="Please refer to the above proposal";
					}else if(inheritancedoc==2||inheritancedoc==3){
						img_s9="begoodpig_en.png";
						str+="<p>As important as it is to make your estate planning documents is where to keep these legal documents.</p>";
						str+="<p>Your important paperwork should be put in one place for the ease of keeping track of all your assets. It is also worth considering advices from other professionals eg lawyers and estate planner.</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html'>Learn more about housekeeping of legal documents.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html)</strong></p><p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/financial-planning/seeking-professional-advice.html'> Learn more about seeking professional advice.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/financial-planning/seeking-professional-advice.html)</strong></p>";
						plan+="<p>1.Housekeep your important legal documents and keep them in one place, documents include:</p>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>Your will</span></li>";
						plan+="<li><span>Birth certificate</span></li>";
						plan+="<li><span>Marriage certificate</span></li>";
						plan+="<li><span>Insurance policies</span></li>";
						plan+="<li><span>Bank account details including PINs and passwords</span></li>";
						plan+="<li><span>MPF/ORSO scheme account details</span></li>";
						plan+="<li><span>Trust agreement</span></li>";
						plan+="</ul>";
						plan+="<p>2.Consider these housekeeping locations:</p>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>A fire proof safe at home</span></li>";
						plan+="<li><span>Safe deposit box at a bank</span></li>";
						plan+="<li><span>Your lawyer to keep a set of copies for you</span></li>";
						plan+="</ul>";
					}else {
						img_s9="error.jpg";
						str+="Please fill out the all the options!";
					}
				}else if(inheritance==2){
					img_s9="begoodpig_en.png";
					str+="<p>You should decide who inherits your assets in the event of your death to help avoid any potential inheritance disputes by making a will.</p>";
					str+="<p>It is also a good habit to keep all your important paperwork in one place for the ease of keeping track of all your assets.</p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html'>Learn more about housekeeping of legal documents.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html)</strong></p>";
					plan+="<ul class='firstUL'><li>Make a will now.</li>";
					plan+="<li>Housekeep your important legal documents and keep them in one place, documents include:</li>";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>Your will</span></li>";
					plan+="<li><span>Birth certificate</span></li>";
					plan+="<li><span>Marriage certificate</span></li>";
					plan+="<li><span>Insurance policies</span></li>";
					plan+="<li><span>Bank account details including PINs and passwords</span></li>";
					plan+="<li><span>MPF/ORSO scheme account details</span></li>";
					plan+="<li><span>Trust agreement</span></li>";
					plan+="</ul>";
					plan+="<li>Consider these housekeeping locations:";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>A fire proof safe at home</span></li>";
					plan+="<li><span>Safe deposit box at a bank</span></li>";
					plan+="<li><span>Your lawyer to keep a set of copies for you</span></li>";
					plan+="</ul></li></ul>";
				}else if(inheritance==3){
					img_s9="badpig_en.png";
					str+="<p>Death is an inevitable part of life which we all face ultimately. To help ease the distress your family suffers in the event of your death, you should decide what will happen to your assets when you pass away and avoid any potential inheritance disputes by making a will.</p>";
					str+="<p>Please keep all your important paperwork in one place otherwise it is difficult to keep track of all your assets. It is also worth considering advices from other professionals eg lawyers and estate planner.</p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html'>Learn more to tackle illness and death</a>.</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/life-events/life-stages/make-a-will.html)</strong></p><p><span><a target='_blank' href='http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/seeking-professional-advice.html'> Learn more about seeking professional advice.</a></span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/seeking-professional-advice.html)</strong></p>";
					plan+="<ul class='firstUL'><li>Make a will now.</li>";
					plan+="<li>Housekeep your important legal documents and keep them in one place, documents include:</li>";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>Your will</span></li>";
					plan+="<li><span>Birth certificate</span></li>";
					plan+="<li><span>Marriage certificate</span></li>";
					plan+="<li><span>Insurance policies</span></li>";
					plan+="<li><span>Bank account details including PINs and passwords</span></li>";
					plan+="<li><span>MPF/ORSO scheme account details</span></li>";
					plan+="<li><span>Trust agreement</span></li>";
					plan+="</ul>";
					plan+="<li>Consider these housekeeping locations:";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>A fire proof safe at home</span></li>";
					plan+="<li><span>Safe deposit box at a bank</span></li>";
					plan+="<li><span>Your lawyer to keep a set of copies for you</span></li>";
					plan+="</ul></li></ul>";
				}else {
					img_s9="error.jpg";
					str+="Please fill out the all the options!";
				}
			}else{
				if(inheritance==1){
					if(inheritancedoc==1){
						img_s9="goodpig.png";
						str+="<p>很高興你就遺產規劃做好凖備。</p>";
						str+="<p>透過遺產規劃，可擬備文件(如遺囑和殯葬安排)交代你日後希望作出的醫療和財政安排及你離世後的資產分配等事項。</p>";
						str+="<p><span>如果你發現遺漏了任何事項，你可以再檢視你的遺產規劃或尋求專業意見。</span></p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html'>了解更多關於處理疾病及死亡的財務事項</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html)</strong></p>";
						plan+="請參考以上建議";
					}else if(inheritancedoc==2||inheritancedoc==3){
						img_s9="begoodpig.png";
						str+="<p>雖然訂立遺產規劃十分重要，但保存這些法律文件的地方亦不可忽視。</p>";
						str+="<p>這些法律文件應保存在同一地方，否則難以查察你所有的資產。你亦不妨向專業人士，例如律師或財務顧問尋求意見。</p>";
						str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html'>了解更多關於法律文件的保管</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html)</strong>及<a target='_blank' href='http://www.thechinfamily.hk/web/tc/financial-planning/seeking-professional-advice.html'>關於尋求專業意見</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/financial-planning/seeking-professional-advice.html)</strong>。</span></p>";
						plan+="<p>1.整理重要法律文件，存放於同一地方，包括：</p>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>遺囑</span></li>";
						plan+="<li><span>出生證明書</span></li>";
						plan+="<li><span>結婚證明書</span></li>";
						plan+="<li><span>保單</span></li>";
						plan+="<li><span>銀行賬戶資料（包括個人身份確認碼及密碼）</span></li>";
						plan+="<li><span>強積金／職業退休計劃賬戶資料</span></li>";
						plan+="<li><span>信託協議</span></li>";
						plan+="</ul>";
						plan+="<p>2.存放的地方可考慮：</p>";
						plan+="<ul class='ul_plan'>";
						plan+="<li><span>設置於家中的防火保險箱</span></li>";
						plan+="<li><span>銀行保險箱</span></li>";
						plan+="<li><span>委託律師代你保存副本</span></li>";
						plan+="</ul>";
					}else {
						img_s9="error.jpg";
						str+="请填写完所有选项！";
					}
				}else if(inheritance==2){
					img_s9="begoodpig.png";
					str+="<p>你應訂立遺囑，指定受益人在你身故後能夠獲得你的財產，以免產生任何爭產糾紛。</p>";
					str+="<p>有關法律文件應保存在同一地方，方便日後查察你所有的資產。</p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html'>了解更多關於法律文件的保管</a>。</span><br><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html)</strong></p>";
					plan+="<ul class='firstUL'><li>預備訂立遺囑</li>";
					plan+="<li>整理重要法律文件，存放於同一地方，包括：</li>";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>遺囑</span></li>";
					plan+="<li><span>出生證明書</span></li>";
					plan+="<li><span>結婚證明書</span></li>";
					plan+="<li><span>保單</span></li>";
					plan+="<li><span>銀行賬戶資料（包括個人身份確認碼及密碼）</span></li>";
					plan+="<li><span>強積金／職業退休計劃賬戶資料</span></li>";
					plan+="<li><span>信託協議</span></li>";
					plan+="</ul>";
					plan+="<li>存放的地方可考慮：";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>設置於家中的防火保險箱</span></li>";
					plan+="<li><span>銀行保險箱</span></li>";
					plan+="<li><span>委託律師代你保存副本</span></li>";
					plan+="</ul></li></ul>";
				}else if(inheritance==3){
					img_s9="badpig.png";
					str+="<p>死亡是人生的必經階段，無法逃避。為減輕家人因你不幸身故所帶來的傷痛，你應在生前訂立遺囑，決定你身故後的財產分配方式，以免產生任何爭產糾紛。</p>";
					str+="<p>請保存所有這些法律文件在同一地方，否則難以查察你所有的資產。你亦不妨向專業人士，例如律師或財務顧問尋求意見。</p>";
					str+="<p><span><a target='_blank' href='http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html'>了解更多關於處理疾病及死亡的財務事項</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-a-will.html)</strong>及<a target='_blank' href='http://www.thechinfamily.hk/web/tc/financial-planning/seeking-professional-advice.html'>關於尋求專業意見</a><strong style=\"display:none;\">(http://www.thechinfamily.hk/web/tc/financial-planning/seeking-professional-advice.html)</strong>。</span></p>";
					plan+="<ul class='firstUL'><li>預備訂立遺囑</li>";
					plan+="<li>整理重要法律文件，存放於同一地方，包括：</li>";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>遺囑</span></li>";
					plan+="<li><span>出生證明書</span></li>";
					plan+="<li><span>結婚證明書</span></li>";
					plan+="<li><span>保單</span></li>";
					plan+="<li><span>銀行賬戶資料（包括個人身份確認碼及密碼）</span></li>";
					plan+="<li><span>強積金／職業退休計劃賬戶資料</span></li>";
					plan+="<li><span>信託協議</span></li>";
					plan+="</ul>";
					plan+="<li>存放的地方可考慮：";
					plan+="<ul class='ul_plan ul02'>";
					plan+="<li><span>設置於家中的防火保險箱</span></li>";
					plan+="<li><span>銀行保險箱</span></li>";
					plan+="<li><span>委託律師代你保存副本</span></li>";
					plan+="</ul></li></ul>";
				}else {
					img_s9="error.jpg";
					str+="请填写完所有选项！";
				}
			}
			try {
				if("".equals(plan)){
					plan = "&nbsp;";
				}
				if("eng".equals(lan)){
					if("goodpig_en.png".equals(img_s9)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s9", img_s9+"||"+str+"||Estate planning"+"||"+plan);
				    response.getWriter().write(img_s9+"||"+str+"||Estate planning"+"||"+plan);
				}else{
					if("goodpig.png".equals(img_s9)){
						plan = "&nbsp;";
					}
					request.getSession().setAttribute("s9", img_s9+"||"+str+"||遺產規劃"+"||"+plan);
				    response.getWriter().write(img_s9+"||"+str+"||遺產規劃"+"||"+plan);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}

		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
