<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page import="hk.hkiec.utils.SystemSettings" %>
<div id = "resultContent">
	<div class="re_header">
		<div class="re_money_l re_money">
			<span class="lb1">港元 <label class="lb2" id="reserved">6,000,000</label></span>
			<p>預期退休時可累積的金額</p>
		</div>
		<div class="re_money_r re_money">
			<span class="lb1">港元 <label class="lb2" id="required">8,800,000</label></span>
			<p>預期退休所需的金額</p>
		</div>
	</div>

	<div class="re_main">
		<div class="re1_planContainer">
		
			<div class="re_top pigPad">
				<div class="img_pig"><img src="../../images/share/result_shortfall_pig.png" alt="" /></div>
				<div class="re_top_budget1 re_top_budget1_tch">
					<p>你預期的累積金額不足以</p>
					<p>應付退休所需</p>
					<span class="re_highlight_big">尚欠港元</span><span class="re_big_text" id="shortfall">2,800,000</span>
				</div>
				<div class="re_top_budget2">
					<div class = "re_top_budget2_tc">相等如你現時年薪<label>(註)</label><br /><span class="re_big_text" id="times">3.0</span><span class="re_big_text">倍</span></div>
					<div class="budget2_r"></div>
				</div>
			</div>
		
			<div class="re_middle">
				<div class="middle_header_line middle_header_line_tc">
					<p>付諸行動</p>
				</div>
				<div class="re_more_box">
					<div class = "tableTabs">
						<div class="re_more_box1 mobileRe_mores">
							<div class="more_box_img1"><img src="../../images/share/result_advice_icon_1.png" alt="" /></div>
							<div class="more_box_text">增加退休儲蓄或投資</div>
							<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel1">了解更多</a>
						</div>
						<div class="re_more_box2 mobileRe_mores">
							<div class="more_box_img2"><img src="../../images/share/result_advice_icon_2.png" alt="" /></div>
							<div class="more_box_text">檢討投資策略及<br />改善投資回報</div>
							<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel2">了解更多</a>
						</div>
						<div class="re_more_box1 mobileRe_mores">
							<div class="more_box_img3"><img src="../../images/share/result_action_icon_3.png" alt="" /></div>
							<div class="more_box_text">增加收入</div>
							<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel3">了解更多</a>
						</div>
						<div class="re_more_box2 mobileRe_mores">
							<div class="more_box_img4"><img src="../../images/share/result_action_icon_4.png" alt="" /></div>
							<div class="more_box_text">控制退休後<br class="breakLine">的開支</div>
							<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel4">了解更多</a>
						</div>
						<div class="re_more_box1 mobileRe_mores">
							<div class="more_box_img5"><img src="../../images/share/result_action_icon_5.png" alt="" /></div>
							<div class="more_box_text">考慮延遲退休</div>
							<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel5">了解更多</a>
						</div>
					</div>
					<div id = "mobileSlider" class = "sliderOfActionPlan">
						
					</div>
					<div class="moreboxLabel" >
						<div id = "boxLabel1" class="boxContainer">
							<div class="re_action_trangle1 re_action_trangle">
								<img src="../../images/share/result_action_trangle.png" alt="" />
							</div>
							<div class="re_more_box_content1 re_more_box_content">
								<ul>
									<li>
										計算你需要額外每月儲蓄或投資多少以填補退休預算差額:
										<div class="re_more_title">
											<p>你額外需要的<br class="breakLine">退休儲蓄/投資金額</p>
											<p>每月<span class="re_highlight_small">港元</span> <span class="re_big_text" id="additional">4,700</span>  X <span id="nper">25</span>&#32;年</p>
											<p>預期每年回報率<input type="text" class="mount postEdit floats" id="RateToDiscountTheShortfall" name="res_rate" value="5.50%"></p>
										</div>
									</li>
									<li>
										盡早開始增加退休儲蓄或投資: 你愈早開始儲蓄或投資，就愈早享有複息效應，讓時間來增加儲蓄或投資的價值。
									</li>
									<li>
										節省支出，增加儲蓄或投資:
										<ul>
											<li>
												減少非必要的消費: 記錄每日的開支，如果你把花費的一分一毫記錄下來，你會清楚知道錢到底花在什麼地方，並會更加留意自己的消費習慣。
											</li>
											<li>
												比較不同門市和網上商店的價格，你或會找到類似但價錢較為化算的貨品或服務。
											</li>
											<li>
												避免一時衝動購物：使用信用卡購物前，先想想累積卡數的後果。如果你不能妥善控制自己使用信用卡，嘗試把信用卡留在家中。
											</li>
											<li>
												訂立規條：例如為生日或節慶禮物訂立價格上限，或考慮親手製作禮物。
											</li>
										</ul>
									</li>
									<li>考慮預留一筆資金作應急錢用途。</li>
									<li>
										未雨綢繆，力求在退休之前還清所有債務，包括按揭貸款、個人貸款和信用卡債務。
									</li>
								</ul>
								<div class="re_content1_link">瀏覽 <a href="https://www.thechinfamily.hk/web/tc/pre-retiree/" target="_blank">www.thechinfamily.hk </a>了解更多有關籌劃退休的資料
								</div>
							</div>
						</div>
						<div id = "boxLabel2" class="boxContainer">
							<div class="re_action_trangle2 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
							<div class = "re_more_box_content2 re_more_box_content">
								<ul>
									<li>
										你的投資策略將直接影響你退休時可獲得的金額。
									</li>
									<li>			每個強積金計劃都為成員提供不同的基金選擇。不同基金有不同程度的風險和潛在回報，一般而言，基金潛在回報愈高，風險亦愈高。小心選擇合適自己風險回報要求的基金組合。請瀏覽<a href="https://www.mpfa.org.hk/tch/mpf_education/index.jsp" target="_blank">積金局網頁</a>了解更多有關強積金投資的資料。
									</li>
									<li>
									考慮你的投資期(即距離退休還有多長時間及退休生活年期)、投資目標、經驗及風險承受能力。
									</li>
								</ul>
								<div class="re_content1_link">瀏覽 <a href="https://www.thechinfamily.hk/web/tc/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a>了解更多有關籌劃退休的資料
								</div>
							</div>
						</div>
						<div id = "boxLabel3" class="boxContainer">
							<div class="re_action_trangle3 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
							<div class = "re_more_box_content3 re_more_box_content">
							<ul>
								<li>想想如何增加收入，從而可以有更多資金用作退休儲蓄或投資之用。例如可以考慮工餘時間兼職或做特約工作(如僱主允許的話)。長線而言，可以考慮透過教育進修及專業培訓以增加收入。
								</li>
							</ul>
							<div class="re_content1_link">瀏覽 <a href="https://www.thechinfamily.hk/web/tc/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a>了解更多有關籌劃退休的資料
							</div>
							</div>
						</div>
						<div id = "boxLabel4" class="boxContainer">
							<div class="re_action_trangle4 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
							<div class = "re_more_box_content4 re_more_box_content">
								<ul>
									<li>以上的預期退休所需金額是按你輸入的預計退休後每月開支計算。如果你面對一個較大的退休預算差額，你可以重新考慮你的退休生活方式，看看有沒有一些開支可以減省。
									</li>
									<li>較簡樸的生活方式可以減低退休所需的金額，例如假若你計劃退休後每年去兩次旅遊，可考慮改為一次。另外，你可以減少外出用膳，多些在家享受入廚樂，亦有助減低退休後膳食方面的支出。
									</li>
									<li>
									飲食健康和經常運動，保持身體健康，可以有助減低醫療開支。
									</li>
								</ul>
								<div class="re_content1_link">瀏覽 <a href="https://www.thechinfamily.hk/web/tc/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a>了解更多有關籌劃退休的資料
								</div>
							</div>
						</div>
						<div id = "boxLabel5" class="boxContainer">
							<div class="re_action_trangle5 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
							<div class = "re_more_box_content5 re_more_box_content">
								<ul>
									<li>如果你面對一個較大的退休預算差額，你可以考慮延遲退休繼續工作的可行性。這可以減低退休所需金額，亦讓你有更多時間累積工作收入。
									</li>
								</ul>
								<div class="re_content1_link">瀏覽 <a href="https://www.thechinfamily.hk/web/tc/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a>了解更多有關籌劃退休的資料
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

	</div>
</div>

	<div id = "noResult" class="resultHide">
		
		<div class="re1_header">
			<div class="re1_money_l re_money">
				<span class="lb1">港元 <label class="lb2" id="reserved1">9,000,000</label></span>
				<p>預期退休時可累積的金額</p>
			</div>
			<div class="re1_money_r re_money">
				<span class="lb1">港元 <label class="lb2" id="required1">8,800,000</label></span>
				<p>預期退休所需的金額</p>
			</div>
		</div>

		<div class="re_main">

			<div class = "re1_planContainer">
				<div class = "goodPlan">
					<div class = "pigImage">
						<div class = "moneypigImage">
							<img src = "../../images/share/pigImage.png" alt = "" />
						</div>
						<div class = "planword">
							<p>你預期的累積金額可以應付退休所需。</p>
							<p><br />請繼續保持良好的計劃!</p>
						</div>
					</div>
				</div>
			
			<div class = "re1_action">
				<div class = "re1_actiontitle">
					<span>付諸行動</span>
				</div>
				<div class = "re1_actioncontent">
					<ul class = "re1_list">
						<li>不時檢討你的收支預算和財務計劃，確保退休預算仍然有效。</li>
						<li>定期檢討退休金計劃及投資計劃，確保投資策略符合你最新情況。</li>
						<li>考慮適當地運用資產，讓退休後可以產生定期收入。</li>
						<li>檢討你的保險計劃，看看保障是否足夠，特別注意醫療支出會隨年紀增加。</li>
						<li>考慮透過遺產規劃及擬備遺囑，交代日後失去決策能力時，希望作出的醫療及財政安排等事項。</li>
					</ul>
					<span class = "re1_link">瀏覽 <a href="https://www.thechinfamily.hk/web/tc/pre-retiree/index.html" target="_blank" class = "re_content1_link">www.thechinfamily.hk</a> 了解更多有關籌劃退休的資料</span>
				</div>
			</div>
			</div>

		</div>
	</div>
	<form method="post" action="<%=SystemSettings.URL_DOMAIN %>printPdf" name="form1" target="_blank">
		<input type="hidden" id="cmd" name="cmd">
		<input type="hidden" id="cmd_lang" name="cmd_lang">
		<input type="hidden" id="cmd_isprint" name="cmd_isprint">
		<input type="hidden" name="employType">
		<input type="hidden" name="reserved">
		<input type="hidden" name="required">
		<input type="hidden" name="isShortfall">
		<input type="hidden" name="shortfall">
		<input type="hidden" name="timesOfAnnualFromShortFall">
		<input type="hidden" name="additionalMonthlySaving">
		<input type="hidden" name="rateToDiscountTheShortfall">
		<div class="accordion">
				<div class="accordionForm">
					<div class="planTitle" id="plan_title_s1">
						<p class="actionTitle">個人資料</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
					</div>
					<div id="plan_s1" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td class="res_leftRow">你現時的年齡</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit integer" id="currentAge" name="step1_0" maxlength="3"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休年齡</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit integer" id="retirementAge" name="step1_1" maxlength="3"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期壽命</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit integer" id="mortality" name="step1_2" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">從現在到退休</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="resEditType">年</span>
											<input type="text" class="mount postEdit ansColor readonly" id="nper1" name="res_nper1" readonly/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">退休生活年期</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="resEditType">年</span>
											<input type="text" class="mount postEdit ansColor readonly" id="nper2" name="res_nper2" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div class="planTitle" id="plan_title_s2">
						<p class="actionTitle">你需要多少退休儲蓄</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
					</div>
					<div id="plan_s2" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td class="res_leftRow">預期退休生活每月開支</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthlyExpensesPV" name="step2_0" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期通脹率</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="inflation" name="step2_2" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休後的投資回報率</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="expRtnRate" name="step2_3" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休總開支</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="ansColor">港元</span>
											<input type="text" class="mount postEdit ansColor readonly" id="discountedTotalExpenses" name="res_dtexp" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div class="planTitle" id="plan_title_s3">
						<p class="actionTitle">強積金</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
					</div>
					<div id="plan_s3" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td colspan="2" class="employType"></td>
								</tr>
								<tr>
									<td class="res_leftRow">有關入息</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthlyIncome" name="step3_0_0" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">年終花紅</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="annual_Bonus" name="step3_0_1" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期每年加薪幅度</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="income_Increase" name="step3_0_2" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">僱員每月自願性供款</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="MB_VC" name="step3_0_3" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">僱主每月自願性供款</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="employer_VC" name="step3_0_4" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">每月特別自願性供款</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthly_SVC" name="step3_0_5" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">你現有的強積金結餘</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="existing_MPF_Balance" name="step3_0_6" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期強積金投資的每年回報率</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="MPF_Inv_Return" name="step3_0_7" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休時強積金累算權益</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="ansColor">港元</span>
											<input type="text" class="mount postEdit ansColor readonly" id="MPFAccruedBenefit" name="res_mpf" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div class="planTitle" id="plan_title_s4">
						<p class="actionTitle">其他退休金計劃，例如職業退休計劃(ORSO)、公務員退休金計劃、補助/津貼學校公積金等</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
					</div>
					<div id="plan_s4" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td class="res_leftRow">月薪</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthlySalary" name="step3_1_0" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">年中花紅(如有)</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="annualBonus" name="step3_1_1" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休時可從退休金計劃 所獲得的一筆過金額或退休酬金</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="lumpSumPension" name="step3_1_2" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休後獲得的每月退休金(如有)</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthlyPension" name="step3_1_3" maxlength="10"/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<!-- <div class="planTitle" id="plan_title_s5">
						<p class="actionTitle">沒有退休金計劃</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
					</div>
					<div id="plan_s5" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td class="res_leftRow">每月收入</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount" />
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div> -->
					
					<div class="planTitle" id="plan_title_s6">
						<p class="actionTitle">你的儲蓄及投資</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s6" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td class="res_leftRow">現時儲蓄及投資結存</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="currentBalance" name="step4_0" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">每月儲蓄及投資</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthlyContribution" name="step4_1" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期每年回報率</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="returnRate" name="step4_2" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休時可獲得金額</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="ansColor">港元</span>
											<input type="text" class="mount postEdit ansColor readonly" id="totalSavingInvestment" name="res_ttSaving" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div class="planTitle" id="plan_title_s7">
						<p class="actionTitle">其他退休收入</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
					</div>
					<div id="plan_s7" class="planContent">
						<table class="userValue" >
							<tbody>
								<tr>
									<td class="res_leftRow">預期退休後從其他方面獲得的每月收入</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>港元</span>
											<input type="text" class="mount postEdit floats" id="monthlyPostIncomePV" name="step5_0" maxlength="10"/>
										</div>
									</td>
								</tr>
								
								<tr>
									<td class="res_leftRow">預期退休後這些收入每年增長率</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="growthRateOfPostIncome" name="step5_1" maxlength="10"/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
	</form>
	<div id="bottomBtn">
		<div class="planPageBtn" id="edit">
			<img src="../../images/share/edit.png" alt="" />
			<p>修改</p>
			<p>修改你之前<br>輸入的數值</p>
		</div>
		<div class="planPageBtn" id="print">
			<a href="javascript:resultPrint();">
				<img src="../../images/share/print.png" alt="" />
				<p>列印</p>
			</a>
		</div>
		<div class="planPageBtn" id="download">
			<a href="javascript:pdfClick();">
				<img src="../../images/share/pdf.png" alt="" />
				<p>下載PDF</p>
			</a>
		</div>
		<div class="planPageBtn" id="reset">
			<img src="../../images/share/re.png" alt="" />
			<p>重設</p>
		</div>
		<div class="planPageBtn" id="backToTop">
			<img src="../../images/share/backtop.png" alt="" />
			<p>回頁首</p>
		</div>
	</div>

	<div class="ratingCon">
		<div class="rating">
			
			<div id="feedback">
				<a href="javascript:void(0);" onclick="feedBack();" id="mail_suggest">
					<img src="../../images/share/rate_mail_icon.png" alt="提出意見" />
				</a>
			</div>
				
			<div id="u_rate">
				<p>
					你滿意這個退休計劃計算機嗎?
					<span>(1分為最低，5分為最高)</span>
				</p>
					
				<div class="rateIcon_Group">
                       <input type="radio" name="radiog_dark" id="rateIcon_1" class="rateIcon-option" />
                       <label for="rateIcon_1" class="rateIcon-label radGroupLast">
                           <span>1</span>
                       </label>
					<p>1</p>
				</div>
					
				<div class="rateIcon_Group">
                       <input type="radio" name="radiog_dark" id="rateIcon_2" class="rateIcon-option" />
                       <label for="rateIcon_2" class="rateIcon-label radGroupLast">
                           <span>2</span>
                       </label>
					<p>2</p>
				</div>
					
				<div class="rateIcon_Group">
                    <input type="radio" name="radiog_dark" id="rateIcon_3" class="rateIcon-option" />
                    <label for="rateIcon_3" class="rateIcon-label radGroupLast">
						<span>3</span>
                    </label>
						<p>3</p>
				</div>
					
				<div class="rateIcon_Group">
                    <input type="radio" name="radiog_dark" id="rateIcon_4" class="rateIcon-option" />
                    <label for="rateIcon_4" class="rateIcon-label radGroupLast">
                        <span>4</span>
                    </label>
					<p>4</p>
				</div>
					
				<div class="rateIcon_Group">
                    <input type="radio" name="radiog_dark" id="rateIcon_5" class="rateIcon-option" />
                    <label for="rateIcon_5" class="rateIcon-label radGroupLast">
                        <span>5</span>
                    </label>
					<p>5</p>
				</div>
			</div>
				
		</div>
	</div>
	
	<div class="re_remark">
		<p>註：退休時所欠金額與現時年薪計算的圖例僅供參考，此年薪數值並沒有包括年薪的增幅。</p>
	</div>
	


	
