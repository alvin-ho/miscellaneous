<%@ page language="java" pageEncoding="UTF-8" %>	<div class = "paddingForslideThree">
	<p class="intro">請選擇合適類別:</p>
	<div class="question questCheckBox schemesTypeMargin">
		<input type="checkbox" name="checkBoxType_retireSchemes" id="checkbox1" class="retireSlide-option step3" value="0" data-openTarget="#schemes_t0" />
		<label for="checkbox1" class="retireSlide-label radGroup2">
			<span>強制性公積金計劃(強積金)</span>
		</label>
		<span class="retireExpense_title">強制性公積金計劃(強積金)</span>
	</div>
	
	<div class="question questCheckBox schemesTypeMargin">
		<input type="checkbox" name="checkBoxType_retireSchemes" id="checkbox2" class="retireSlide-option step3" value="1" data-openTarget="#schemes_t1" />
		<label for="checkbox2" class="retireSlide-label radGroup2">
			<span>其他退休金計劃，例如職業退休計劃(ORSO)、公務員退休金計劃、補助/津貼學校公積金等</span>
		</label>
		<span class="retireExpense_title m_t_WordPosition">其他退休金計劃，例如職業退休計劃(ORSO)、公務員退休金計劃、補助/津貼學校公積金等</span>
	</div>
	
	<div class="question questCheckBox schemesTypeMargin">
		<input type="checkbox" name="checkBoxType_retireSchemes" id="checkbox3" class="retireSlide-option step3" value="2" />
		<label for="checkbox3" class="retireSlide-label radGroup2">
			<span>沒有退休金計劃</span>
		</label>
		<span class="retireExpense_title">沒有退休金計劃</span>
		<span class="remindMsg retireRemindMsg">你可直接按下一頁繼續。</span>
	</div>
	
	<span class="psWord" style="display:inline;text-decoration:underline;">註</span>
	<ol class="psWord">
		<li>若之前工作累積了強積金結餘，但現時已不再工作(例如成為全職家庭主婦或主夫)，請選「強積金」(只需填寫強積金結餘)。</li>
		<li>若你現在屬於職業退休計劃(ORSO)，但之前工作累積了強積金結餘，請同時選「強積金」(只需填寫強積金結餘)及「其他退休金計劃」。</li>
	</ol>
	
	</div>
	<div id="retirement_Plan">
		<div id="schemes_t0" class="schemesType disableCol">
			<div class="dimLayer" style="background-color:transparent;"></div>
			<p class="schemesTitle dimTxt">強積金</p>
			<img src="../../images/share/plus.png" class="ocIcon disableIcon" alt="open"/>
		</div>
		
		<div id="schemes_c0" class="schemesContent">
		
			<div class="sectionOne schemesContent_SBGC">
				<div class="sectionPadd">
					<div class="question questionWidth">
						<input type="radio" name="personalType_retireSchemes" id="radio3" class="retireSlide-option step3 step3_0" value="0"/>
						<label for="radio3" class="retireSlide-label radGroup3">
							<span>僱員</span>
						</label>
						<span class="retireExpense_title">僱員</span>
						<div class="showTips" data-targetTips="#tips05"></div>
					</div>
					
					<div class="question questionWidth">
						<input type="radio" name="personalType_retireSchemes" id="radio4" class="retireSlide-option step3"  value="1"/>
						<label for="radio4" class="retireSlide-label radGroup3">
							<span>自僱人士</span>
						</label>
						<span class="retireExpense_title">自僱人士</span>
						<div class="showTips" data-targetTips="#tips06"></div>
					</div>
				</div>
			</div>
			
			<div class="sectionTwo schemesContent_DBGC">
				<div class="sectionPadd">

					<div class="question sectionTitle">
						<p>有關入息</p>
						<div class="showTips" data-targetTips="#tips07"></div>
					</div>
						
					<div class="questContainer">
						<div class="question longQuestion">
							<p>月薪</p>
							<div class="showTips hideTips" data-targetTips="#tips08"></div>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn6"></div>
							<div class = "sliderContainer">
								<div id="sliderBar6" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn6"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount6" name="step3_0_0" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>年終花紅(如有)</p>
							<div class="showTips hideTips" data-targetTips="#tips09"></div>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn7"></div>
							<div class = "sliderContainer">
								<div id="sliderBar7" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn7"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount7" name="step3_0_1" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>預期每年加薪幅度</p>
							<div class="showTips expected_annual_ch" data-targetTips="#tips10"></div>
						</div>

						<div class = "sliderWidget short_Widget percent_Widget">					
							<div class="silderBtn minus" id="minusBtn8"></div>
							<div class = "sliderContainer">
								<div id="sliderBar8" class = "sliderBar sbPercentImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn8"></div>
						</div>
						
						<div class="mountContainer mountPercent">
							<input type="text" class="mount step3 step3_0 floats" id="mount8" name="step3_0_2" value="3.9%" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
				</div>
			</div>
			
			<div class="sectionThree schemesContent_SBGC">
				<div class="sectionPadd">
					<div class="question sectionTitle addArrow closeIcon" id = "eachMonth">
						<p>每月自願性供款</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
						<div class="showTips hideTips" data-targetTips="#tips11"></div>
					</div>
					<div class = "slideCon">	
					<div class="questContainer">
						<div class="question longQuestion">
							<p>你的每月自願性供款</p>
							<div class="showTips hideTips" data-targetTips="#tips12"></div>
						</div>

						<div class = "sliderWidget short_Widget percent_Widget">					
							<div class="silderBtn minus" id="minusBtn9"></div>
							<div class = "sliderContainer">
								<div id="sliderBar9" class = "sliderBar sbPercentImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn9"></div>
						</div>
						
						<div class="mountContainer mountPercent">
							<input type="text" class="mount step3 step3_0 floats" id="mount9" name="step3_0_3" value="0.0%" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>僱主每月自願性供款</p>
							<div class="showTips employer_voluntury_ch" data-targetTips="#tips13"></div>
						</div>

						<div class = "sliderWidget short_Widget percent_Widget">					
							<div class="silderBtn minus" id="minusBtn10"></div>
							<div class = "sliderContainer">
								<div id="sliderBar10" class = "sliderBar sbPercentImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn10"></div>
						</div>
						
						<div class="mountContainer mountPercent">
							<input type="text" class="mount step3 step3_0 floats" id="mount10" name="step3_0_4" value="0.0%" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>每月特別自願性供款</p>
							<div class="showTips monthly_special_ch" data-targetTips="#tips14"></div>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn11"></div>
							<div class = "sliderContainer">
								<div id="sliderBar11" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn11"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount11" name="step3_0_5" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					</div>
				</div>
			</div>
		
			<div class="sectionFour schemesContent_DBGC">
				<div class="sectionPadd">

					<div class="questContainer">
						<div class="question longQuestion">
							<p>你現有的強積金結餘</p>
							<div class="showTips existing_ch" data-targetTips="#tips15"></div>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn12"></div>
							<div class = "sliderContainer">
								<div id="sliderBar12" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn12"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount12" name="step3_0_6" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>預期強積金投資每年回報率</p>
							<div class="showTips m_s3_ShowTipsPos_tc expected_annual_mpf_tc" data-targetTips="#tips16"></div>
						</div>

						<div class = "sliderWidget short_Widget percent_Widget">					
							<div class="silderBtn minus" id="minusBtn13"></div>
							<div class = "sliderContainer">
								<div id="sliderBar13" class = "sliderBar sbPercentImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn13"></div>
						</div>
						
						<div class="mountContainer mountPercent">
							<input type="text" class="mount step3 step3_0 floats" id="mount13" name="step3_0_7" value="4.4%" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
						<a href="https://www.mpfa.org.hk/tch/mpf_system/index.jsp" target="_blank" title="你將從此連結離開投資者教育中心的網站。詳情請參閱本中心的超連結政策及免責聲明。對你透過此連結所到網絡的使用，本中心並不負責。">了解強積金計劃詳情</a>
					</div>
				
				</div>
			</div>
		
		</div>	
		
		
		<div id="schemes_t1" class="schemesType disableCol">
			<div class="dimLayer" style="background-color:transparent;"></div>
			<p class="schemesTitle dimTxt">其他退休金計劃，例如職業退休計劃(ORSO)、公務員退休金計劃、補助/津貼學校公積金等</p>
			<img src="../../images/share/plus.png" class="ocIcon disableIcon" alt="open"/>
		</div>
		
		<div id="schemes_c1" class="schemesContent">
			<div class="sectionOne schemesContent_SBGC">
				<div class="sectionPadd">

					<div class="questContainer">
						<div class="question longQuestion">
							<p>月薪</p>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn14"></div>
							<div class = "sliderContainer">
								<div id="sliderBar14" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn14"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_1 floats" id="mount14" name="step3_1_0" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>年終花紅(如有)</p>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn15"></div>
							<div class = "sliderContainer">
								<div id="sliderBar15" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn15"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_1 floats" id="mount15" name="step3_1_1" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p class="fieldMiddle">
								預期退休時可從退休金計劃所獲得的一筆過金額或退休酬金(註: 3、4 及5)
							</p>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn16"></div>
							<div class = "sliderContainer">
								<div id="sliderBar16" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn16"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_1 floats" id="mount16" name="step3_1_2" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>
								預期退休後獲得的每月退休金(如有) (註: 4)
							</p>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn17"></div>
							<div class = "sliderContainer">
								<div id="sliderBar17" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn17"></div>
						</div>
						
						<div class="mountContainer">
							<span>港元</span>
							<input type="text" class="mount step3 step3_1 floats" id = "mount17" name="step3_1_3" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
					</div>
					
				</div>
			</div>
			<div class="sectionTwo schemesContent_DBGC">
				<div class="sectionPadd">
					<span class="psWord" style="display:inline;text-decoration:underline;">註</span>
					<ol class="psWord" start="3" style="margin:0;">
						<li>
							職業退休計劃 (ORSO):
							<p>
								不同的職業退休計劃(ORSO)有不同的方法或基準計算及決定成員利益。
								你可向職業退休計劃供應商或僱主查詢如何計算預期退休時可從職業退休計劃所獲得的金額，
								然後填入有關數字。
								<a href="https://www.mpfa.org.hk/tch/orso/index.jsp" target="_blank" title="你將從此連結離開投資者教育中心的網站。詳情請參閱本中心的超連結政策及免責聲明。對你透過此連結所到網絡的使用，本中心並不負責。">了解職業退休計劃(ORSO)詳情</a>。
							</p>
						</li>
						<li>
							公務員退休金計劃:
							<p>
								建議使用
								<a href="https://www.csb.gov.hk/tc_chi/admin/retirement/185.html" target="_blank" title="你將從此連結離開投資者教育中心的網站。詳情請參閱本中心的超連結政策及免責聲明。對你透過此連結所到網絡的使用，本中心並不負責。">公務員事務局的退休金計算機</a>
								計算預期的一筆過退休酬金及每月退休金，然後填入有關數字。
								<a href="https://www.csb.gov.hk/tc_chi/admin/retirement/184.html" target="_blank" title="你將從此連結離開投資者教育中心的網站。詳情請參閱本中心的超連結政策及免責聲明。對你透過此連結所到網絡的使用，本中心並不負責。">了解公務員退休金計劃詳情</a>。
							</p>
						</li>
						<li>
							補助/津貼學校公積金:
							<p>
								供款人可獲得的利益數額，須視乎所作供款的數額、供款無間年資的長短，
								以及停止受僱為教師的理由而定。你可向公積金計劃供應商或僱主查詢如何計算預期退休時可從補助/津貼學校公積金所獲得的金額，
								然後填入有關數字。
								<a href="https://www.edb.gov.hk/tc/sch-admin/admin/about-sch-staff/provident-fund/background-information-of-provident-fund.html" target="_blank" title="你將從此連結離開投資者教育中心的網站。詳情請參閱本中心的超連結政策及免責聲明。對你透過此連結所到網絡的使用，本中心並不負責。">了解補助 / 津貼學校公積金詳情</a>。
							</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>