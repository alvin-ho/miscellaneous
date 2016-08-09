<%@ page language="java" pageEncoding="UTF-8" %>
	<div class="dimContainer" id="s4_dimContainer">
		<div class="dimLayer"></div>
		<div class="questContainer deepColor">
			<div class="question fieldMiddle">
				<p>現時儲蓄及投資結餘</p>
				<div class="showTips current_balance_ch" data-targetTips="#tips17"></div>
			</div>

			<div class = "sliderWidget shortM_Widget sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn18"></div>
				<div class = "sliderContainer">
					<div id="sliderBar18" class = "sliderBar sbMoneyImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn18"></div>
			</div>
							
			<div class="mountContainer mountWidth mountContain_T">
				<span>港元</span>
				<input type="text" class="mount step4 step4_t floats" id="mount18" name="step4_0" value="0" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
		</div>
		
		<div class="questContainer shallowColor">
			<div class="question">
				<p>每月儲蓄及投資</p>
				<div class="showTips" data-targetTips="#tips18"></div>
			</div>

			<div class = "sliderWidget shortM_Widget sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn19"></div>
				<div class = "sliderContainer">
					<div id="sliderBar19" class = "sliderBar sbMoneyImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn19"></div>
			</div>
							
			<div class="mountContainer mountWidth mountContain_T">
				<span>港元</span>
				<input type="text" class="mount step4 step4_t floats" id="mount19" name="step4_1" value="0" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
		</div>
		
		<div class="questContainer deepColor">
			<div class="question">
				<p>預期每年回報率</p>
				<div class="showTips" data-targetTips="#tips19"></div>
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
			<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
		</div>
	</div>		
					
	<div class="question questCheckBox">
		<input type="checkbox" name="checkBoxType_savingInvest" id="checkbox4" class="retireSlide-option step4" data-en_disTarget="#Form_SavInvest,#s4_dimContainer" />
		<label for="checkbox4" class="retireSlide-label radGroup4">
			<span>我想按類別計算每月儲蓄/投資</span>
		</label>
		<span class="retireExpense_title m_t_WordPosition">我想按類別計算每月儲蓄/投資</span>
	</div>
	
	
	<div class="Form_SavInvest" id="Form_SavInvest">
		<div class="dimLayer"></div>
		<div class="Form_TitleDesc">
			<p class="colW1">類別</p>
			<p class="colW2">現時結餘</p>
			<p class="colW3">每月供款</p>
			<p class="colW4">預期每年回報率(%)</p>
		</div>
		
		<div id="bankSav" class="Form_Item Form_Item_Shallow_BGC">
			<div class="addArrow openIcon">
				<p class="Form_Item_Title">銀行存款</p>
				<img src="../../images/share/minus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">	
				<div class="mountContainer colW2">
					<p class = "mobileTab">現時結餘</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount31" name="step4_3_0" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">每月供款</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_4 floats" id ="itemMount37" name="step4_4_0" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">預期每年回報率(%)</p>
					<input type="text" class="itemMount step4 step4_5 floats specialHandle" id="itemMount43" name="step4_5_0" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_0" name="step4_6_0" value="0">
			</div>	
		</div>
		
		<div id="stock" class="Form_Item Form_Item_Deep_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">股票</p>
				<img src="../../images/share/plus.png" class="ocIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">現時結餘</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount32" name="step4_3_1" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">每月供款</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount38" name="step4_4_1" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">預期每年回報率(%)</p>
					<input type="text" class="itemMount step4 step4_5 floats specialHandle" id="itemMount44" name="step4_5_1" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_1" name="step4_6_1" value="0">
			</div>
		</div>
		
		<div id="fund" class="Form_Item Form_Item_Shallow_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">基金 (不包括強積金)</p>
				<img src="../../images/share/plus.png" class="ocIcon openIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">現時結餘</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount33" name="step4_3_2" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">每月供款</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount39" name="step4_4_2" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">預期每年回報率(%)</p>
					<input type="text" class="itemMount step4 step4_5 floats specialHandle" id="itemMount45" name="step4_5_2" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_2" name="step4_6_2" value="0">
			</div>
		</div>
		
		<div id="bond" class="Form_Item Form_Item_Deep_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">債券</p>
				<img src="../../images/share/plus.png" class="ocIcon openIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">現時結餘</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount34" name="step4_3_3" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">每月供款</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount40" name="step4_4_3" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">預期每年回報率(%)</p>
					<input type="text" class="itemMount step4 step4_5 floats mobileMargin" id="itemMount46" name="step4_5_3" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_3" name="step4_6_3" value="0">
			</div>
		</div>
		
		<div id="insurance" class="Form_Item Form_Item_Shallow_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title fieldMiddle">帶有儲蓄或<br class = "mobileDisappear"/>投資成份的保險</p>
				<img src="../../images/share/plus.png" class="ocIcon openIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">現時結餘</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount35" name="step4_3_4" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">每月供款</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount41" name="step4_4_4" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">預期每年回報率(%)</p>
					<input type="text" class="itemMount step4 step4_5 floats mobileMargin" id="itemMount47" name="step4_5_4" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_4" name="step4_6_4" value="0">
			</div>
		</div>
		
		<div id="others" class="Form_Item Form_Item_Deep_BGC">
			<div class="addArrow closeIcon">
				<p class="Form_Item_Title">其他</p>
				<img src="../../images/share/plus.png" class="ocIcon openIcon" alt="open"/>
			</div>
			<div class = "slideCon">
				<div class="mountContainer colW2">
					<p class = "mobileTab">現時結餘</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_3 floats" id="itemMount36" name="step4_3_5" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mobileTab">每月供款</p>
					<span>港元</span>
					<input type="text" class="itemMount step4 step4_4 floats" id="itemMount42" name="step4_4_5" value="0"  maxlength="10">
				</div>
				
				<div class="mountContainer">
					<p class = "mobileTab">預期每年回報率(%)</p>
					<input type="text" class="itemMount step4 step4_5 floats mobileMargin" id="itemMount48" name="step4_5_5" value="0.0%"  maxlength="10">
				</div>
				<input type="hidden" class="step4_6" id="step4_6_5" name="step4_6_5" value="0">
			</div>
		</div>
		
		<div class="Form_Item calcRes">
				<p class="Form_Item_Title">總額</p>
				<!--<br class = "breakPo"/>-->
				<div class="mountContainer colW2">
					<p class = "mResTitle">現時結餘總額</p>
					<span>港元</span>
					<span class="resNow step4_c" id="step4_3_res">0</span>
				</div>
				
				<div class="mountContainer colW3">
					<p class = "mResTitle">每月供款總額</p>
					<span>港元</span>
					<span class="resMonth step4_c" id="step4_4_res">0</span>
				</div>
				
				<div class="mountContainer colW4">
					<p class = "mResTitle">整體每年回報率(%)</p>
					<span class="returnYear step4_c" id="step4_5_res">0.0%</span>
					<span class = "entire_response">(整體每年回報率)</span>
				</div>
				<input type="hidden" id="step4_6_res" name="step4_6_res">
			
		</div>
	</div>