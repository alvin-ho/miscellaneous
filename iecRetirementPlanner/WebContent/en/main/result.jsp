<%@ page language="java" pageEncoding="UTF-8" %>
	<%@ page import="hk.hkiec.utils.SystemSettings" %>
		<div id="resultContent">
			<div class="re_header">
				<div class="re_money_l re_money mobile_money_l tablet_money_l">
					<span class="lb1">HKD <label class="lb2" id="reserved">6,000,000</label></span>
					<p>Expected reserve accumulated when you retire</p>
				</div>
				<div class="re_money_r re_money mobile_money_r tablet_money_r">
					<span class="lb1">HKD <label class="lb2" id="required">8,800,000</label></span>
					<p>Expected amount required when you retire</p>
				</div>
			</div>

			<div class="re_main">
				<div class="re1_planContainer">

					<div class="re_top pigPad_en">
						<div class="img_pig"><img src="../../images/share/result_shortfall_pig.png" alt="" /></div>
						<div class="re_top_budget1">
							<p>The expected reserve cannot cover</p>
							<p>the expected required amount,</p>
							<span class="re_highlight_big">you still need HKD</span><span class="re_big_text" id="shortfall">2,800,000</span>
						</div>
						<div class="re_top_budget2">
							<div>Equivalent to your current annual income
								<label> (Note)</label>
								<br /><span class="re_big_text" id="times">3.0</span><span class="re_big_text"> times</span></div>
							<div class="budget2_r"></div>
						</div>
					</div>

					<div class="re_middle">
						<div class="middle_header_line tabletMiddle_header_line">
							<p>Your action plan</p>
						</div>
						<div class="re_more_box">
							<div class="tableTabs">
								<div class="re_more_box1 mobileRe_mores">
									<div class="more_box_img1"><img src="../../images/share/result_advice_icon_1.png" alt="" /></div>
									<div class="more_box_text">Save more for retirement</div>
									<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel1">More Information</a>
								</div>
								<div class="re_more_box2 mobileRe_mores">
									<div class="more_box_img2"><img src="../../images/share/result_advice_icon_2.png" alt="" /></div>
									<div class="more_box_text">Review investment strategy and improve investment outcome</div>
									<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel2">More Information</a>
								</div>
								<div class="re_more_box1 mobileRe_mores">
									<div class="more_box_img3"><img src="../../images/share/result_action_icon_3.png" alt="" /></div>
									<div class="more_box_text">Generate income</div>
									<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel3">More Information</a>
								</div>
								<div class="re_more_box2 mobileRe_mores">
									<div class="more_box_img4"><img src="../../images/share/result_action_icon_4.png" alt="" /></div>
									<div class="more_box_text">Manage expenses during retirement</div>
									<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel4">More Information</a>
								</div>
								<div class="re_more_box1 mobileRe_mores">
									<div class="more_box_img5"><img src="../../images/share/result_action_icon_5.png" alt="" /></div>
									<div class="more_box_text">Review target retirement age</div>
									<a href="javascript:void(0);" class="more_box_details" data-tOpen="#boxLabel5">More Information</a>
								</div>
							</div>
							<div id="mobileSlider" class="sliderOfActionPlan">

							</div>

							<div class="moreboxLabel">
								<div id="boxLabel1" class="boxContainer">
									<div class="re_action_trangle1 re_action_trangle">
										<img src="../../images/share/result_action_trangle.png" alt="" />
									</div>
									<div class="re_more_box_content1 re_more_box_content">
										<ul>
											<li>
												Calculate how much you need to save or invest each month to close the gap:
												<div class="re_more_title">
													<p>
														<p>Additional amount to save/invest for retirement</p>
													</p>
													<p><span class="re_highlight_small">HKD</span> <span class="re_big_text" id="additional">4,700</span> per month
														<br class="breakPo" /> X <span id="nper">25</span>&#32; years</p>
													<p>Expected rate of return (p.a.)
														<input type="text" class="mount postEdit floats" id="RateToDiscountTheShortfall" name="res_rate" value="5.50%">
													</p>
												</div>
											</li>
											<li>
												Start your saving or investment plan as soon as possible. Saving early can really pay off due to the power of compound interest. The sooner you start saving, the sooner you start benefitting from the power of compound interest – which puts time to work on your savings.
											</li>
											<li>
												Spend less and save/invest more:
												<ul>
													<li>
														Cut back on non-essential items: start a spending diary or use our expenses tracker mobile apps if you keep a record of every dollar you spend, you’ll know exactly where your money is going, and be more conscious of your spending habits.
													</li>
													<li>
														Shop around to compare prices at different retail outlets, online and offline, you may find the same item or service for a lower price.
													</li>
													<li>
														Avoid impulse buy: think of the consequence of increasing debts before you use credit cards to pay for goods. If you have trouble avoiding purchase temptation, try leaving your credit cards at home.
													</li>
													<li>
														Set some rules for shopping: for example, set a limit for birthday and festive presents or consider some homemade gifts.
													</li>
												</ul>
											</li>
											<li>Consider to set aside some money for use in emergencies.</li>
											<li>
												Plan ahead and make paying of all existing debts – including mortgage, personal loan and credit card debts – a priority before you retire.
											</li>
										</ul>
										<div class="re_content1_link">Visit <a href="https://www.thechinfamily.hk/web/en/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a> for more information about retirement planning
										</div>
									</div>
								</div>
								<div id="boxLabel2" class="boxContainer">
									<div class="re_action_trangle2 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
									<div class="re_more_box_content2 re_more_box_content">
										<ul>
											<li>
												The investment decisions you make for your retirement will have a direct impact on your overall savings outcome.
											</li>
											<li> For the MPF system, each scheme has different constituent funds for you to choose from. Different funds have different risk and return profiles. In general, the higher the potential return, the higher the potential risk. Carefully select the investment portfolio that can match with your risk and return profile. Visit <a href="https://www.mpfa.org.hk/eng/mpf_education/index.jsp" target="_blank">MPF Education</a> to learn more about MPF investments.
											</li>
											<li>
												Consider your investment horizon (ie the number of years before and after retirement), investment objectives and experience and assess your risk tolerance level.
											</li>
										</ul>
										<div class="re_content1_link">Visit <a href="https://www.thechinfamily.hk/web/en/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a> for more information about retirement planning
										</div>
									</div>
								</div>
								<div id="boxLabel3" class="boxContainer">
									<div class="re_action_trangle3 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
									<div class="re_more_box_content3 re_more_box_content">
										<ul>
											<li>Seek ways to generate more income for your retirement savings or investments. For example, you can consider taking part-time or freelance jobs if this is accepted by your employer. For longer term, you can consider increasing your income via education and professional training.
											</li>
										</ul>
										<div class="re_content1_link">Visit <a href="https://www.thechinfamily.hk/web/en/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a> for more information about retirement planning
										</div>
									</div>
								</div>
								<div id="boxLabel4" class="boxContainer">
									<div class="re_action_trangle4 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
									<div class="re_more_box_content4 re_more_box_content">
										<ul>
											<li>The expected amount you need for retirement is calculated based on the monthly retirement expenses you input. So, if you are facing a big gap for your retirement budget, you may reconsider your retirement lifestyle to see if you can spend less during retirement.
											</li>
											<li>Leading a simpler lifestyle may help to reduce the amount you need for retirement. For example, if you plan to have two annual trips during your retirement, you may cut it to one. Also, reducing eating out and preparing more meals at home can help save more money.
											</li>
											<li>
												Eat healthy and exercise regularly can keep you healthy and thus help to save medical costs.
											</li>
										</ul>
										<div class="re_content1_link">Visit <a href="https://www.thechinfamily.hk/web/en/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a> for more information about retirement planning
										</div>
									</div>
								</div>
								<div id="boxLabel5" class="boxContainer">
									<div class="re_action_trangle5 re_action_trangle"><img src="../../images/share/result_action_trangle.png" alt="" /></div>
									<div class="re_more_box_content5 re_more_box_content">
										<ul>
											<li>If you are facing a big gap for your retirement budget, one possible option is to review the feasibility of delaying your target retirement age and continue working. This will reduce the total amount you need for retirement and allow you to have more time to accumulate employment earnings.
											</li>
										</ul>
										<div class="re_content1_link">Visit <a href="https://www.thechinfamily.hk/web/en/pre-retiree/index.html" target="_blank">www.thechinfamily.hk </a> for more information about retirement planning
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>

		<div id="noResult" class="resultHide">

			<div class="re1_header">
				<div class="re1_money_l re_money mobile_re1_money_l">
					<span class="lb1">HKD <label class="lb2" id="reserved1">9,000,000</label></span>
					<p>Expected reserve accumulated when you retire</p>
				</div>
				<div class="re1_money_r re_money mobile_re1_money_r">
					<span class="lb1">HKD <label class="lb2" id="required1">8,800,000</label></span>
					<p>Expected amount required when you retire</p>
				</div>
			</div>

			<div class="re_main">

				<div class="re1_planContainer">
					<div class="goodPlan">
						<div class="pigImage">
							<div class="moneypigImage">
								<img src="../../images/share/pigImage.png" alt="" />
							</div>
							<div class="planword">
								<p>Your expected reserve can meet with your retirement needs.</p>
								<p>Keep up your good planning!!</p>
							</div>
						</div>
					</div>

					<div class="re1_action">
						<div class="re1_actiontitle re1_actiontitle_en">
							<span style="display:block;padding-top:4px;">Your action plan</span>
						</div>
						<div class="re1_actioncontent">
							<ul class="re1_list">
								<li>Review your retirement budget from time to time to make sure it still works.</li>
								<li>Regularly review your retirement schemes and investment plans to ensure they meet your needs when situations change.</li>
								<li>Consider ways to generate regular income after retirement by putting your assets to work.</li>
								<li>Review your insurance coverage as medical expenses can be a significant cost as one gets older.</li>
								<li>Consider estate planning and wills to make clear how you wish to be cared for medically and financially in your final days.</li>
							</ul>
							<span class="re1_link">Visit <a href="https://www.thechinfamily.hk/web/en/pre-retiree/" target="_blank" class = "re_content1_link">www.thechinfamily.hk</a> for more information about retirement planning.</span>
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
						<p class="actionTitle">About you</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s1" class="planContent">
						<table class="userValue">
							<tbody>
								<tr>
									<td class="res_leftRow">Your current age</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit integer" id="currentAge" name="step1_0" maxlength="3" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected retirement age</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit integer" id="retirementAge" name="step1_1" maxlength="3" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Life expectancy</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit integer" id="mortality" name="step1_2" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">From now to retirement</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="resEditType">years</span>
											<input type="text" class="mount postEdit ansColor readonly" id="nper1" name="res_nper1" readonly/>
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Retirement life</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="resEditType">years</span>
											<input type="text" class="mount postEdit ansColor readonly" id="nper2" name="res_nper2" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="planTitle" id="plan_title_s2">
						<p class="actionTitle">How much do you need for retirement</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s2" class="planContent">
						<table class="userValue">
							<tbody>
								<tr>
									<td class="res_leftRow">Expected monthly expenses during retirement</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthlyExpensesPV" name="step2_0" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected inflation rate</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="inflation" name="step2_2" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected rate of return during retirement</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="expRtnRate" name="step2_3" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected total expenses during retirement
									</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="ansColor">HKD</span>
											<input type="text" class="mount postEdit ansColor readonly" id="discountedTotalExpenses" name="res_dtexp" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="planTitle" id="plan_title_s3">
						<p class="actionTitle">MPF</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s3" class="planContent">
						<table class="userValue">
							<tbody>
								<tr>
									<td colspan="2" class="employType"></td>
								</tr>
								<tr>
									<td class="res_leftRow">Monthly salary</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthlyIncome" name="step3_0_0" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Annual bonus</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="annual_Bonus" name="step3_0_1" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected annual salary growth</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="income_Increase" name="step3_0_2" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Your voluntary monthly contribution</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="MB_VC" name="step3_0_3" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Employer’s voluntary monthly contribution</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="employer_VC" name="step3_0_4" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Monthly special contribution</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthly_SVC" name="step3_0_5" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Your existing MPF balance</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="existing_MPF_Balance" name="step3_0_6" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected annual MPF investment return rate</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="MPF_Inv_Return" name="step3_0_7" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected MPF accrued benefits at retirement age</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="ansColor">HKD</span>
											<input type="text" class="mount postEdit ansColor readonly" id="MPFAccruedBenefit" name="res_mpf" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="planTitle" id="plan_title_s4">
						<p class="actionTitle">Other retirement schemes eg Occupational Retirement Schemes (ORSO), Civil Service Pension Schemes, Grant/Subsidized Schools Provident Fund, etc</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s4" class="planContent">
						<table class="userValue">
							<tbody>
								<tr>
									<td class="res_leftRow">Monthly salary</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthlySalary" name="step3_1_0" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Annual bonus (if any)</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="annualBonus" name="step3_1_1" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected retirement benefits or lump sum pension gratuity at retirement age</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="lumpSumPension" name="step3_1_2" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected monthly pension received after retirement (if any)</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthlyPension" name="step3_1_3" maxlength="10" />
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
											<span>HKD</span>
											<input type="text" class="mount" />
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div> -->

					<div class="planTitle" id="plan_title_s6">
						<p class="actionTitle">Your savings and investments</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s6" class="planContent">
						<table class="userValue">
							<tbody>
								<tr>
									<td class="res_leftRow">Current balance of all savings and investments</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="currentBalance" name="step4_0" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Monthly savings and investments</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthlyContribution" name="step4_1" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected rate of return</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="returnRate" name="step4_2" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected accumulated savings and investment at retirement age</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span class="ansColor">HKD</span>
											<input type="text" class="mount postEdit ansColor readonly" id="totalSavingInvestment" name="res_ttSaving" readonly/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="planTitle" id="plan_title_s7">
						<p class="actionTitle">Other retirement income</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open" />
					</div>
					<div id="plan_s7" class="planContent">
						<table class="userValue">
							<tbody>
								<tr>
									<td class="res_leftRow">Monthly income from other sources during retirement</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<span>HKD</span>
											<input type="text" class="mount postEdit floats" id="monthlyPostIncomePV" name="step5_0" maxlength="10" />
										</div>
									</td>
								</tr>

								<tr>
									<td class="res_leftRow">Expected annual growth rate of these incomes during retirement</td>
									<td class="res_rightRow">
										<div class="resMountWidth">
											<input type="text" class="mount postEdit floats" id="growthRateOfPostIncome" name="step5_1" maxlength="10" />
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
			<div class="planPageBtn" id="edit" style="margin-right: 20px;">
				<img src="../../images/share/edit.png" alt="" />
				<p>Edit</p>
				<p>Amend the values
					<br/>that you have input</p>
			</div>
			<div class="planPageBtn" id="print">
				<a href="javascript:resultPrint();">
					<img src="../../images/share/print.png" alt="" />
					<p>Print</p>
				</a>
			</div>
			<div class="planPageBtn" id="download">
				<a href="javascript:pdfClick();">
					<img src="../../images/share/pdf.png" alt="" />
					<p>Save as PDF</p>
				</a>
			</div>
			<div class="planPageBtn" id="reset">
				<img src="../../images/share/re.png" alt="" />
				<p>Reset</p>
			</div>
			<div class="planPageBtn" id="backToTop">
				<img src="../../images/share/backtop.png" alt="" />
				<p>Top</p>
			</div>
		</div>

		<div class="ratingCon">
			<div class="rating">

				<div id="feedback">
					<a href="javascript:void(0);" onclick="feedBack();" id="mail_suggest">
						<img src="../../images/en/rate_mail_icon_en.png" alt="Tell us what you think" />
					</a>
				</div>

				<div id="u_rate">
					<p>
						How satisfied are you with this Retirement Planner?
						<span>(1 is the lowest, 5 is the highest)</span>
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
			<p>Note : The presentation of the expected shortfall at retirement age and the current annual income is for illustration purpose only. The value of the annual income does not take into account the effect of income growth.
			</p>
		</div>