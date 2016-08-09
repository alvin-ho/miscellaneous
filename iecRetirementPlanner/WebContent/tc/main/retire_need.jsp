<%@ page language="java" pageEncoding="UTF-8" %>
	<p class="intro">
		你退休後希望享有哪種生活方式？你想享有與退休前大致相同的生活質素，
		還是願意接受較簡樸的生活？隨著年事漸長，醫療開支亦會相應增加。因此，你計算退休費用時，應預留醫療開支。
	</p>
	
	<div class="questContainer deepColor">
		<p class="question_Describe">預期退休生活每月開支(以今日值計算)</p>
		<div class="question">
			<input type="radio" name="radioType_retireExpense" id="radio" class="retireSlide-option step2 step2_opt" value="0" data-en_disTarget="#directMount,#Form_Expense" />
			<label for="radio" class="retireSlide-label radGroup1">
				<span>直接輸入總額</span>
			</label>
			<span class="retireExpense_title">直接輸入總額</span>
		</div>
		
		<div id="directMount" class="dimContainer questDim_Display">
			<div class="dimLayer"></div>
			<div class = "sliderWidget shortM_Widget sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn3"></div>
				<div class = "sliderContainer">
					<div id="sliderBar3" class = "sliderBar sbMoneyImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn3"></div>
			</div> 
				
			<div class="mountContainer mountWidth mountContain_T">
				<span>港元</span>
				<input type="text" class="mount step2 floats" id="mount3" name="step2_0" value="0" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
		</div>
		
		<div class="question questCheckBox">
			<input type="radio" name="radioType_retireExpense" id="radio1" class="retireSlide-option step2 step2_opt" value="1" data-en_disTarget="#Form_Expense,#directMount"/>
			<label for="radio1" class="retireSlide-label radGroup1">
				<span>按開支類別計算</span>
			</label>
			<span class="retireExpense_title">按開支類別計算</span>
		</div>
		<div class="Form_Expense" id="Form_Expense">
			<div class="dimLayer"></div>
			<div class="Form_TitleDesc">
				<p>類別</p>
				<p>港元</p>
			</div>
			<div id="foodDrink" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title">膳食</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_0" value="0" maxlength="10">
				</div>
			</div>
			<div id="transport" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">交通</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_1" value="0" maxlength="10">
				</div>
			</div>
			<div id="house" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title fieldMiddle">家居 (例如：租金/樓宇按揭供款(如有) 、管理費、水電煤、流動電話服務、上網、家務助理、寵物/獸醫、家居保養/裝修等)</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_2" value="0" maxlength="10">
				</div>
			</div>
			<div id="shopping" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">購物 (例如：衣履、日常用品等)</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_3" value="0" maxlength="10">
				</div>
			</div>
			<div id="beauty" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title">健康美容(例如：醫療服務、個人護理、藥物等)</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_4" value="0" maxlength="10">
				</div>
			</div>
			<div id="life" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">生活消閑(例如：嗜好、娛樂、旅遊等)</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_5" value="0" maxlength="10">
				</div>
			</div>
			<div id="insurance2" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title">保險</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_6" value="0" maxlength="10">
				</div>
			</div>
			<div id="other" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">其他 (例如：教育/學習、照顧/供養親人等)</p>
				<div class="mountContainer">
					<span>港元</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_7" value="0" maxlength="10">
				</div>
			</div>
			<div id="expenseRes" class="Form_Item calcRes">
				<p class="Form_Item_Title">總額</p>
				<div class="mountContainer">
					<span>港元</span>
					<span class="resTotal_Need">0</span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="questContainer shallowColor">
	
		<div class="question longQuestion">
			<p>預期通脹率(每年)</p>
			<div class="showTips expected_inflation_ch" data-targetTips="#tips03"></div>
		</div>

		<div class = "sliderWidget short_Widget">					
			<div class="silderBtn minus" id="minusBtn4"></div>
			<div class = "sliderContainer">
				<div id="sliderBar4" class = "sliderBar sbPercentImg"></div>
			</div>
			<div class="silderBtn add" id="addBtn4"></div>
		</div>
		
		<div class="mountContainer">
			<input type="text" class="mount step2 floats" id="mount4" name="step2_2" value="3.3%" maxlength="10"/>
		</div>
		<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
	</div>
	
	<div class="questContainer deepColor">
	
		<div class="question longQuestion">
			<p>預期退休後的投資每年回報率<br />(例如儲蓄戶口的利息收益及其他投資回報) </p>
			<div class="showTips m_s2_ShowTipsPos_tc expectedRate_tc" data-targetTips="#tips04"></div>
		</div>

		<div class = "sliderWidget short_Widget">					
			<div class="silderBtn minus" id="minusBtn5"></div>
			<div class = "sliderContainer">
				<div id="sliderBar5" class = "sliderBar sbPercentImg"></div>
			</div>
			<div class="silderBtn add" id="addBtn5"></div>
		</div>
		
		<div class="mountContainer">
			<input type="text" class="mount step2 floats" id="mount5" name="step2_3" value="5.5%" maxlength="10"/>
		</div>
		<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
	</div>