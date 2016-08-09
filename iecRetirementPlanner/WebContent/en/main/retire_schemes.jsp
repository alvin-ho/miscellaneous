	<div class = "paddingForslideThree">
	<p class="intro">Please choose the appropriate categories:</p>
	<div class="question questCheckBox schemesTypeMargin">
		<input type="checkbox" name="checkBoxType_retireSchemes" id="checkbox1" class="retireSlide-option step3" value="0" data-openTarget="#schemes_t0" />
		<label for="checkbox1" class="retireSlide-label radGroup2">
			<span>Mandatory Provident Fund Schemes (MPF)</span>
		</label>
		<span class="retireExpense_title m_t_WordPosition">Mandatory Provident Fund Schemes (MPF)</span>
	</div>
	
	<div class="question questCheckBox schemesTypeMargin">
		<input type="checkbox" name="checkBoxType_retireSchemes" id="checkbox2" class="retireSlide-option step3" value="1" data-openTarget="#schemes_t1" />
		<label for="checkbox2" class="retireSlide-label radGroup2">
			<span>Other retirement schemes eg Occupational Retirement Schemes (ORSO), Civil Service Pension Schemes, Grant/Subsidized Schools Provident Fund etc)</span>
		</label>
		<span class="retireExpense_title m_t_WordPosition">Other retirement schemes eg Occupational Retirement Schemes (ORSO), Civil Service Pension Schemes, <span class="mleft_Title">Grant/Subsidized Schools Provident Fund etc)</span></span>
	</div>
	
	<div class="question questCheckBox schemesTypeMargin">
		<input type="checkbox" name="checkBoxType_retireSchemes" id="checkbox3" class="retireSlide-option step3" value="2" />
		<label for="checkbox3" class="retireSlide-label radGroup2">
			<span>No retirement scheme</span>
		</label>
		<span class="retireExpense_title">No retirement scheme</span>
		<span class="remindMsg retireRemindMsg">Click "Next" to proceed.</span>
	</div>
	
	<span class="psWord" style="margin-bottom:0;text-decoration:underline;">Notes</span>
	<ol class="psWord">
		<li>If you have accumulated MPF benefits in your previous jobs but have now left the workforce, for example, you have become a full-time housewife or house husband, please choose “MPF” (only need to input MPF balance).</span></li>
		<li>If you are currently under an ORSO scheme but you have accumulated some MPF benefits in your previous jobs, please choose both “MPF” (only need to input MPF balance) and “other retirement schemes”.</span></li>
	</ol>
	</div>
	
	<div id="retirement_Plan">
		<div id="schemes_t0" class="schemesType disableCol">
			<div class="dimLayer" style="background-color:transparent;"></div>
			<p class="schemesTitle dimTxt">MPF</p>
			<img src="../../images/share/plus.png" class="ocIcon disableIcon" alt="open"/>
		</div>
		
		<div id="schemes_c0" class="schemesContent ">
		
			<div class="sectionOne schemesContent_SBGC">
				<div class="sectionPadd">
					<div class="question questionWidth tabletQuestionWidth">
						<input type="radio" name="personalType_retireSchemes" id="radio3" class="retireSlide-option step3 step3_0" value="0"/>
						<label for="radio3" class="retireSlide-label radGroup3">
							<span>An employee</span>
						</label>
						<span class="retireExpense_title">An employee</span>
						<div class="showTips" data-targetTips="#tips05"></div>
					</div>
					
					<div class="question questionWidth mobileQuestionWidth">
						<input type="radio" name="personalType_retireSchemes" id="radio4" class="retireSlide-option step3"  value="1"/>
						<label for="radio4" class="retireSlide-label radGroup3">
							<span>A self-employed person</span>
						</label>
						<span class="retireExpense_title">A self-employed person</span>
						<div class="showTips m_s3_ShowTipsPos_en_02" data-targetTips="#tips06"></div>
					</div>
				</div>
			</div>
			
			<div class="sectionTwo schemesContent_DBGC">
				<div class="sectionPadd">

					<div class="question sectionTitle">
						<p>Relevant income</p>
						<div class="showTips" data-targetTips="#tips07"></div>
					</div>
						
					<div class="questContainer">
						<div class="question longQuestion">
							<p>Monthly salary</p>
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
							<span>HKD</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount6" name="step3_0_0" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>Annual bonus (if any)</p>
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
							<span>HKD</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount7" name="step3_0_1" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion fieldMiddle">
							<p>Expected annual<br />salary growth</p>
							<div class="showTips m_s3_ShowTipsPos_en expected_annual_en" data-targetTips="#tips10"></div>
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
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
				</div>
			</div>
			
			<div class="sectionThree schemesContent_SBGC">
				<div class="sectionPadd">

					<div class="question sectionTitle addArrow closeIcon" id = "eachMonth">
						<p>Monthly voluntary contribution</p>
						<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
						<div class="showTips hideTips" data-targetTips="#tips11"></div>
					</div>
					<div class = "slideCon">		
					<div class="questContainer">
						<div class="question longQuestion fieldMiddle">
							<p>Your voluntary monthly contribution</p>
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
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion fieldMiddle">
							<p>Employer’s voluntary<br />monthly contribution</p>
							<div class="showTips employer_voluntury_en" data-targetTips="#tips13"></div>
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
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>Monthly special<br />contribution</p>
							<div class="showTips monthly_special_en" data-targetTips="#tips14"></div>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn11"></div>
							<div class = "sliderContainer">
								<div id="sliderBar11" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn11"></div>
						</div>
						
						<div class="mountContainer">
							<span>HKD</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount11" name="step3_0_5" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
				    </div>
				</div>
			</div>
		
			<div class="sectionFour schemesContent_DBGC">
				<div class="sectionPadd">

					<div class="questContainer">
						<div class="question longQuestion fieldMiddle">
							<p>Your existing MPF<br />balance</p>
							<div class="showTips m_s3_ShowTipsPos_en_01 existing_en" data-targetTips="#tips15"></div>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn12"></div>
							<div class = "sliderContainer">
								<div id="sliderBar12" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn12"></div>
						</div>
						
						<div class="mountContainer">
							<span>HKD</span>
							<input type="text" class="mount step3 step3_0 floats" id="mount12" name="step3_0_6" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion fieldMiddle">
							<p>Expected annual MPF<br />investment return rate</p>
							<div class="showTips expected_annual_mpf_en" data-targetTips="#tips16"></div>
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
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
						<a href="https://www.mpfa.org.hk/eng/mpf_system/index.jsp" target="_blank" title="This link exits the IEC website. Please refer to our Hyperlink Policy and Liability Statement. The IEC assumes no liability or control for your use of this link.">Learn more about the MPF system</a>
					</div>
				
				</div>
			</div>
		
		</div>	
		
		
		<div id="schemes_t1" class="schemesType disableCol">
			<div class="dimLayer" style="background-color:transparent;"></div>
			<p class="schemesTitle dimTxt">Other retirement schemes eg Occupational Retirement Schemes (ORSO), Civil Service Pension Schemes, Grant/Subsidized Schools Provident Fund, etc</p>
			<img src="../../images/share/plus.png" class="ocIcon disableIcon" alt="open"/>
		</div>
		
		<div id="schemes_c1" class="schemesContent">
			<div class="sectionOne schemesContent_SBGC">
				<div class="sectionPadd">

					<div class="questContainer">
						<div class="question longQuestion">
							<p>Monthly salary</p>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn14"></div>
							<div class = "sliderContainer">
								<div id="sliderBar14" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn14"></div>
						</div>
						
						<div class="mountContainer">
							<span>HKD</span>
							<input type="text" class="mount step3 step3_1 floats" id="mount14" name="step3_1_0" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p>Annual bonus (if any)</p>
						</div>

						<div class = "sliderWidget short_Widget">					
							<div class="silderBtn minus" id="minusBtn15"></div>
							<div class = "sliderContainer">
								<div id="sliderBar15" class = "sliderBar sbMoneyImg"></div>
							</div>
							<div class="silderBtn add" id="addBtn15"></div>
						</div>
						
						<div class="mountContainer">
							<span>HKD</span>
							<input type="text" class="mount step3 step3_1 floats" id="mount15" name="step3_1_1" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion">
							<p class="fieldMiddle">
								Expected retirement benefits or lump sum pension gratuity at retirement age <br/>(Notes 3, 4 and 5)
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
							<span>HKD</span>
							<input type="text" class="mount step3 step3_1 floats" id="mount16" name="step3_1_2" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
					<div class="questContainer">
						<div class="question longQuestion fieldMiddle">
							<p>
								Expected monthly pension received after retirement (if any) (Note 4)
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
							<span>HKD</span>
							<input type="text" class="mount step3 step3_1 floats" id = "mount17" name="step3_1_3" value="0" maxlength="10"/>
						</div>
						<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
					</div>
					
				</div>
			</div>
			<div class="sectionTwo schemesContent_DBGC">
				<div class="sectionPadd">
					<span class="psWord" style="display:inline; text-decoration:underline;">Notes</span>
					<ol class="psWord" start="3" style="margin:0;">
						<li>
							ORSO:
							<p>
								Different ORSO schemes have different methodologies to calculate/determine the retirement benefits of
scheme members. You can check with your ORSO service provider or employer for assistance in
calculating the expected retirement benefits and then input the relevant amount. 
								<a href="https://www.mpfa.org.hk/eng/orso/index.jsp" target="_blank" title="This link exits the IEC website. Please refer to our Hyperlink Policy and Liability Statement. The IEC assumes no liability or control for your use of this link.">Learn more about
ORSO schemes</a>.
							</p>
						</li>
						<li>
							Civil service pension schemes:
							<p>
								You can use the <a href="https://www.csb.gov.hk/english/admin/retirement/185.html" target="_blank" title="This link exits the IEC website. Please refer to our Hyperlink Policy and Liability Statement. The IEC assumes no liability or control for your use of this link.">pension calculator of the Civil Service Bureau</a> 
								to calculate the expected lump sum
pension gratuity and monthly pension, and then input the relevant amount. 
								<a href="https://www.csb.gov.hk/english/admin/retirement/184.html" target="_blank" title="This link exits the IEC website. Please refer to our Hyperlink Policy and Liability Statement. The IEC assumes no liability or control for your use of this link.">Learn more about Civil Service Pension Schemes</a>.
							</p>
						</li>
						<li>
							Grant/Subsidized Schools Provident Fund:
							<p>
								The amount of benefits a contributor can obtain varies depending on the contributor's contributions
made, length of continuous contributory service and the reason for his/her cessation of employment as
a teacher. You can check with the provident fund provider or employer for assistance in calculating the
expected retirement benefits and then input the relevant amount. 
<a href="https://www.edb.gov.hk/en/sch-admin/admin/about-sch-staff/provident-fund/background-information-of-provident-fund.html" target="_blank" title="This link exits the IEC website. Please refer to our Hyperlink Policy and Liability Statement. The IEC assumes no liability or control for your use of this link.">Learn more about Grant/Subsidized Schools Provident Fund</a>.
							</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>