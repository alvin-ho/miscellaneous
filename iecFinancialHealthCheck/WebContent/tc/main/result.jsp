<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="tabs_Container">
	<div class="resPlan">
		<p>你的理財分析結果</p>
	</div>
	
	<div id="mmenuTitle">
		<!--<span id="sTitle" class="redBtn">收入與支出</span>-->
		<img src="../../images/tc/m_down.png" alt="" />
	</div>
	
	<div id="tabs">
		<div id="menu_title">
		<ul id="sectionTab">
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#income" class="redBtn" id="btn_s2">收入與支出</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#credit" class="greenBtn" id="btn_s3">借貸管理</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#financial" class="yellowBtn" id="btn_s4">財務目標</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#investment" class="redBtn" id="btn_s5">儲蓄及投資</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#saving" class="greenBtn" id="btn_s6">儲備應急錢</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#insurance" class="yellowBtn" id="btn_s7">保險規劃</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#retirement" class="redBtn" id="btn_s8">退休規劃</a></li>
			<li class = "pin pinchi" onclick="resTab(this);"><a href="javascript:void(0);" data-tname="#estate" class="greenBtn" id="btn_s9">遺產規劃</a></li>
		</ul>
		</div>
		<div id="income" class="tabCon">
			<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/income_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">收入與支出</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s2" src = "../../images/tc/badpig.png" alt = ""/>
							</div>
							<div id="s2" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class="content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s2" id="planBtnS2">付諸行動</a>
							</div>
						</div>
			</div>			
		</div>
		<div id="credit" class="tabCon">
			<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/credit_manage_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">借貸管理</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s3" src = "../../images/tc/goodpig.png" alt = ""/>
							</div>
							<div id="s3" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class = "content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s3" id="planBtnS3">付諸行動</a>
							</div>
						</div>
			</div>
		</div>
		<div id="financial" class="tabCon">
				<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/financial_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">財務目標</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s4" src = "../../images/tc/begoodpig.png" alt = ""/>
							</div>
							<div id="s4" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class = "content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s4" id="planBtnS4">付諸行動</a>
							</div>
						</div>
			</div>
		</div>
		<div id="investment" class="tabCon">
			<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/investment_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">儲蓄及投資</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s5" src = "../../images/tc/badpig.png" alt = ""/>
							</div>
							<div id="s5" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class="content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s5" id="planBtnS5">付諸行動</a>
							</div>
						</div>
			</div>
		</div>	
		<div id="saving" class="tabCon">
			<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/saving_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">儲備應急錢</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s6" src = "../../images/tc/goodpig.png" alt = ""/>
							</div>
							<div id="s6" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class = "content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s6" id="planBtnS6">付諸行動</a>
							</div>
						</div>
			</div>
		</div>
		<div id="insurance" class="tabCon">
				<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/insurance_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">保險規劃</p>
						</div>
						<div class = "resultContainer">	
							<div class = "moneypig">
								<img id="img_s7" src = "../../images/tc/begoodpig.png" alt = ""/>
							</div>
							<div id="s7" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class = "content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s7" id="planBtnS7">付諸行動</a>
							</div>
						</div>
			</div>
		</div>
		<div id="retirement" class="tabCon">
			<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/retire_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">退休規劃</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s8" src = "../../images/tc/badpig.png" alt = ""/>
							</div>
							<div id="s8" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class="content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s8" id="planBtnS8">付諸行動</a>
							</div>
						</div>
			</div>			
		</div>
		<div id="estate" class="tabCon">
			<div class = "innerresult">
						<div class="analysisTitle">
							<img src="../../images/tc/estate_i.png" alt="" class="titleIcon" />
							<p class = "incomeClass">遺產規劃</p>
						</div>
						<div class = "resultContainer">
							<div class = "moneypig">
								<img id="img_s9" src = "../../images/tc/goodpig.png" alt = ""/>
							</div>
							<div id="s9" class = "content">	
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
								<ul class = "content_point">
									<li>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的  
										開支或增加額外收入。</li>
									<li>如果想改善你的支出與收入比率，可使用我們的<span class="boldWord">削減開支計算機</span>和<span class="boldWord">個人收支計算機</span>制定預算了解自己
									的理財習慣，從而妥善管理支出及儲蓄。</li>
									<li>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</li>
								</ul>			
							</div>
							<div class="actionContainer">
								<a href="javascript:void(0);" class="actionBtn" data-target="plan_title_s9" id="planBtnS9">付諸行動</a>
							</div>
						</div>
			</div>
		</div>
		
	</div>
	<div class="indication">
		<div class="notice red_traffic_light">
			<span>值得注意</span>
			<p>
				你須要對某些理財範疇作出檢討或建立計劃和習慣
			</p>
		</div>
		<div class="better yellow_traffic_light">
			<span>可以更好</span>
			<p>
				你已有一些理財計劃和習慣，但仍有改善空間。
			</p>
		</div>
		<div class="perfect green_traffic_light">
			<span>在掌握中</span>
			<p>
				你已建立一些良好的理財計劃和習慣，請繼續努力！
			</p>
		</div>
	</div>
	
	<div id="actionPlanner">
		<div class="resPlan">
			<p>你的具體行動方案</p>
		</div>
		<div id="accordion">
			<div class="planTitle" id="plan_title_s2">
				<img src="../../images/tc/income_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">收支平衡</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s2" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s3">
				<img src="../../images/tc/credit_manage_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">處理債務</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div> 
			<div id="plan_s3" class="planContent">
				<h3>解決債務問題</h3>
				<ul class="ul_plan">
					<li><span>列出你所有債務</span></li>
					<li>
						<span>拆列還款先後的次序</span>
						<ul class="ul_plan ul02">
							<li><span>有抵押債務例如按揭，以免居住的物業被收回</span></li>
							<li><span>利率較高的其他債務</span></li>
						</ul>
					
					</li>
					<li><span>審視收支預算，削減或推遲非必要開支</span></li>
					<li><span>每月至少償還每筆貸款的最低還款額，以免影響你的信貸評分</span></li>
					<li><span>考慮合併你的貸款</span></li>
					<li><span>尋求專業協助及意見，例如坊間一些非牟利機構的理財輔導計劃</span></li>
				</ul>
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s4">
				<img src="../../images/tc/financial_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">訂立理財目標</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s4" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s5">
				<img src="../../images/tc/investment_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">儲蓄及投資</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s5" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s6">
				<img src="../../images/tc/saving_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">儲備應急錢</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s6" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s7">
				<img src="../../images/tc/insurance_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">保障自己及摯愛</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s7" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s8">
				<img src="../../images/tc/retire_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">計劃退休後的生活</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s8" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="" class="backTop_btn"></a>
			</div>
			
			<div class="planTitle" id="plan_title_s9">
				<img src="../../images/tc/estate_i.png" alt="" class="titleIcon" />
				<p class="actionTitle">遺產規劃</p>
				<img src="../../images/tc/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div id="plan_s9" class="planContent">
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
				<a href="javascript:void(0);" title="Top" class="backTop_btn"></a>
			</div>		
		</div>
	</div>
</div>


<div id="bottomBtn">
	<div class="planPageBtn" id="back">
		<img src="../../images/tc/back.png" alt="" />
		<p>編輯</p>
	</div>
	<div class="planPageBtn" id="print">
		<img src="../../images/tc/print.png" alt="" onclick="javascript:resultPrint();" style="cursor: pointer;" />
		<p>列印</p>
	</div>
	<div class="planPageBtn" id="download">
		<img src="../../images/tc/pdf.png" alt="" onclick="javascript:pdfClick();" style="cursor: pointer;" />
		<p>下載PDF</p>
	</div>
	<div class="planPageBtn" id="reset">
		<img src="../../images/tc/re.png" alt="" />
		<p>重設</p>
	</div>
	<div class="planPageBtn" id="backToTop">
		<img src="../../images/tc/backtop.png" alt="" />
		<p>回首頁</p>
	</div>
</div>

		<div class="ratingCon">
			<div class="rating">
			
				<div id="feedback">
					<a href="javascript:void(0);" onclick="feedBack();" id="mail_suggest">
						<img src="../../images/tc/rate_mail_icon.png" alt="提出意見" />
					</a>
				</div>
				
				<div id="u_rate">
					<p>
						你滿意這個個人理財分析嗎?
						<span>(1分為最低，5分為最高)</span>
					</p>
					
					<div class="rateIcon_Group">
                        <input type="radio" name="radiog_dark" id="rateIcon_1" class="rateIcon-option"/>
                        <label for="rateIcon_1" class="rateIcon-label radGroupLast">
                            <span>1</span>
                        </label>
						<p>1</p>
					</div>
					
					<div class="rateIcon_Group">
                        <input type="radio" name="radiog_dark" id="rateIcon_2" class="rateIcon-option"/>
                        <label for="rateIcon_2" class="rateIcon-label radGroupLast">
                            <span>2</span>
                        </label>
						<p>2</p>
					</div>
					
					<div class="rateIcon_Group">
                        <input type="radio" name="radiog_dark" id="rateIcon_3" class="rateIcon-option"/>
                        <label for="rateIcon_3" class="rateIcon-label radGroupLast">
                            <span>3</span>
                        </label>
						<p>3</p>
					</div>
					
					<div class="rateIcon_Group">
                        <input type="radio" name="radiog_dark" id="rateIcon_4" class="rateIcon-option"/>
                        <label for="rateIcon_4" class="rateIcon-label radGroupLast">
                            <span>4</span>
                        </label>
						<p>4</p>
					</div>
					
					<div class="rateIcon_Group">
                        <input type="radio" name="radiog_dark" id="rateIcon_5" class="rateIcon-option"/>
                        <label for="rateIcon_5" class="rateIcon-label radGroupLast">
                            <span>5</span>
                        </label>
						<p>5</p>
					</div>
					
				</div>
				 
			</div>
		</div>
		
		<!--<div class="calcIEC">
			<a href="http://www.thechinfamily.hk/web/iec/tc/tools-and-resources/tools/index.html" class="mCalBtn" title="理財計算機"></a>
		</div>-->
		
<form target="_blank" name="form1" action="<%=request.getContextPath() %>/admin/Print" method="post">
		<input type="hidden" name="pdfOrderString" id="pdfOrderString"/>
		<input type="hidden" name="iecLanguage" id="iecLanguage"/>
		<input type="hidden" name="isprint" id="isprint"/>
	</form>

<script type="text/javascript">
function pdfClick(){
	//
	document.getElementById("pdfOrderString").value = pdfOrder;
	document.getElementById("iecLanguage").value = 'tch';
	document.getElementById("isprint").value = '';
	document.form1.action ="<%=request.getContextPath() %>/admin/PDF";
	form1.submit();
}

function resultPrint(){
	//
	document.getElementById("pdfOrderString").value = pdfOrder;
	document.getElementById("iecLanguage").value = 'tch';
	document.getElementById("isprint").value = 'wantprint';
	document.form1.action ="<%=request.getContextPath() %>/admin/PDF";
	form1.submit();
}
</script>
