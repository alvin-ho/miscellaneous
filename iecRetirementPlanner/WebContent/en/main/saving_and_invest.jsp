
	<div class="dimContainer" id="s4_dimContainer">
		<div class="dimLayer"></div>
		<div class="questContainer deepColor">
			<div class="question fieldMiddle">
				<p>Current balance of all<br />savings and investments</p>
				<div class="showTips current_balance_en" data-targetTips="#tips17"></div>
			</div>

			<div class = "sliderWidget shortM_Widget sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn18"></div>
				<div class = "sliderContainer">
					<div id="sliderBar18" class = "sliderBar sbMoneyImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn18"></div>
			</div>
							
			<div class="mountContainer mountWidth mountContain_T">
				<span>HKD</span>
				<input type="text" class="mount step4 step4_t floats" id="mount18" name="step4_0" value="0" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
		</div>
		
		<div class="questContainer shallowColor">
			<div class="question fieldMiddle">
				<p>Monthly savings and<br />investments</p>
				<div class="showTips m_s4_ShowTipsPos_en monthly_savings_en" data-targetTips="#tips18"></div>
			</div>

			<div class = "sliderWidget shortM_Widget sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn19"></div>
				<div class = "sliderContainer">
					<div id="sliderBar19" class = "sliderBar sbMoneyImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn19"></div>
			</div>
							
			<div class="mountContainer mountWidth mountContain_T">
				<span>HKD</span>
				<input type="text" class="mount step4 step4_t floats" id="mount19" name="step4_1" value="0" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
		</div>
		
		<div class="questContainer deepColor">
			<div class="question fieldMiddle">
				<p>Expected rate of return (p.a.)</p>
				<div class="showTips expected_return_en" data-targetTips="#tips19"></div>
			</div>

			<div class = "sliderWidget short_Widget shortP_Widget sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn20"></div>
				<div class = "sliderContainer">
					<div id="sliderBar20" class = "sliderBar sbPercentImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn20"></div>
			</div>
							
			<div class="mountContainer mountPercent mountContain_T">
				<input type="text" class="mount step4 step4_t floats" id="mount20" name="step4_2" value="5.5%" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
		</div>
	</div>		
					
	<div class="question questCheckBox">
		<input type="checkbox" name="checkBoxType_savingInvest" id="checkbox4" class="retireSlide-option step4" data-en_disTarget="#Form_SavInvest,#s4_dimContainer" />
		<label for="checkbox4" class="retireSlide-label radGroup4">
			<span>I would like to calculate the savings/investments by categories</span>
		</label>
		<span class="retireExpense_title m_t_WordPosition">I would like to calculate the savings/investments by categories</span>
	</div>
	
	
	<div class="Form_SavInvest" id="Form_SavInvest">
		<div class="dimLayer"></div>
		<div class="Form_TitleDesc">
			<p class="colW1">Categories</p>
			<p class="colW2">Current balance</p>
			<p class="colW3">Monthly <br/>contribution</p>
			<p class="colW4">Expected rate of return % p.a.</p>
		</div>
		
		<div id="bankSav" class="Form_Item Form_Item_Shallow_BGC">
			<div class="addArrow openIcon">
				<p class="Form_Item_Title">Bank deposit</p>
				<img src="../../images/share/minus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">Current balance</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount31" name="step4_3_0" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">Monthly contribution</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_4 floats" id ="itemMount37" name="step4_4_0" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">Expected rate of return % p.a.</p>
					<input type="text" class="itemMount step4 step4_5 floats" id="itemMount43" name="step4_5_0" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_0" name="step4_6_0" value="0">
			</div>
		</div>
		
		<div id="stock" class="Form_Item Form_Item_Deep_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">Equities</p>
				<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">Current balance</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount32" name="step4_3_1" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">Monthly contribution</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount38" name="step4_4_1" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">Expected rate of return % p.a.</p>
					<input type="text" class="itemMount step4 step4_5 floats" id="itemMount44" name="step4_5_1" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_1" name="step4_6_1" value="0">
			</div>
		</div>
		
		<div id="fund" class="Form_Item Form_Item_Shallow_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">Funds (exclude MPF)</p>
				<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">Current balance</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount33" name="step4_3_2" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">Monthly contribution</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount39" name="step4_4_2" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">Expected rate of return % p.a.</p>
					<input type="text" class="itemMount step4 step4_5 floats" id="itemMount45" name="step4_5_2" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_2" name="step4_6_2" value="0">
			</div>
		</div>
		
		<div id="bond" class="Form_Item Form_Item_Deep_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">Bonds</p>
				<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">Current balance</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount34" name="step4_3_3" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">Monthly contribution</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount40" name="step4_4_3" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">Expected rate of return % p.a.</p>
					<input type="text" class="itemMount step4 step4_5 floats" id="itemMount46" name="step4_5_3" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_3" name="step4_6_3" value="0">
			</div>
		</div>
		
		<div id="insurance" class="Form_Item Form_Item_Shallow_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title fieldMiddle">Insurance products <br /> with saving or <br />investment element</p>
				<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">Current balance</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount35" name="step4_3_4" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">Monthly contribution</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount41" name="step4_4_4" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">Expected rate of return % p.a.</p>
					<input type="text" class="itemMount step4 step4_5 floats" id="itemMount47" name="step4_5_4" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_4" name="step4_6_4" value="0">
			</div>
		</div>
		
		<div id="others" class="Form_Item Form_Item_Deep_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">Others</p>
				<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">Current balance</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount36" name="step4_3_5" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">Monthly contribution</p>
					<span>HKD</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount42" name="step4_4_5" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">Expected rate of return % p.a.</p>
					<input type="text" class="itemMount step4 step4_5 floats" id="itemMount48" name="step4_5_5" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_5" name="step4_6_5" value="0">
			</div>
		</div>
		
		<div class="Form_Item calcRes">
			<p class="Form_Item_Title txtVA">Total</p>
			<!--<br class = "breakPo"/>-->
			<div class="mountContainer colW2 txtVA">
				<p class = "mResTitle">Total current balance:</p>
				<span>HKD</span>
				<span class="resNow step4_c" id="step4_3_res">0</span>
			</div>
			
			<div class="mountContainer colW3 txtVA colW3_en">
				<p class = "mResTitle">Total monthly contribution:</p>
				<span>HKD</span>
				<span class="resMonth step4_c" id="step4_4_res">0</span>
			</div>
			
			<div class="mountContainer annualReturnWords mAnnualReturnWords_en">
				<p class = "mResTitle">Annual return of the portfolio:</p>
				<span class="returnYear step4_c" id="step4_5_res">0.0%</span>
				<span class = "annualReturnWord">(Annual return of the portfolio)</span>
			</div>
			<input type="hidden" id="step4_6_res" name="step4_6_res">
		</div>
	</div>