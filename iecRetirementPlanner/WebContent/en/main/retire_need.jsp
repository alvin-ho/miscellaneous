
	<p class="intro">
		What sort of lifestyle do you expect to lead during retirement? Do you want to
live more or less the same as before, or are you willing to lead a simpler lifestyle?
Also, as people age, an increasing amount of medical care will be required.
Therefore, it’s important that you include medical expenses as part of your
retirement planning.
	</p>
	
	<div class="questContainer deepColor">
		<p class="question_Describe">Expected monthly expenses during retirement (today’s value)</p>
		<div class="question m_expenses fieldMiddle">
			<input type="radio" name="radioType_retireExpense" id="radio" class="retireSlide-option step2 step2_opt" value="0" data-en_disTarget="#directMount,#Form_Expense" />
			<label for="radio" class="retireSlide-label radGroup1">
				<span>Input the total monthly expenses</span>
			</label>
			<span class="retireExpense_title m_t_WordPosition">Input the total monthly expenses</span>
		</div>
		
		<div id="directMount" class="dimContainer questDim_Display ">
			<div class="dimLayer"></div>
			<div class = "sliderWidget shortM_Widget m_expenses sliderWidget_T">					
				<div class="silderBtn minus" id="minusBtn3"></div>
				<div class = "sliderContainer">
					<div id="sliderBar3" class = "sliderBar sbMoneyImg"></div>
				</div>
				<div class="silderBtn add" id="addBtn3"></div>
			</div> 
				
			<div class="mountContainer mountWidth mountContain_T">
				<span>HKD</span>
				<input type="text" class="mount step2 floats" id="mount3" name="step2_0" value="0" maxlength="10"/>
			</div>
			<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
		</div>
		
		<div class="question questCheckBox">
			<input type="radio" name="radioType_retireExpense" id="radio1" class="retireSlide-option step2 step2_opt" value="1" data-en_disTarget="#Form_Expense,#directMount"/>
			<label for="radio1" class="retireSlide-label radGroup1">
				<span>Calculate the monthly expenses by categories</span>
			</label>
			<span class="retireExpense_title m_t_WordPosition">Calculate the monthly expenses by categories</span>
		</div>
		<div class="Form_Expense" id="Form_Expense">
			<div class="dimLayer"></div>
			<div class="Form_TitleDesc">
				<p>Items</p>
				<p>HKD</p>
			</div>
			<div id="foodDrink" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title">Food and drinks</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_0" value="0" maxlength="10">
				</div>
			</div>
			<div id="transport" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">Transport</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_1" value="0" maxlength="10">
				</div>
			</div>
			<div id="house" class="Form_Item Form_Item_Shallow_BGC">
			<p class="Form_Item_Title fieldMiddle">Household (eg rent/mortgage(if any), management fee, utilities,
			mobile phone, internet, helper, pet, veterinary fee and
			household maintenance expenses such as property
			maintenance, home refurbishment etc.)</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_2" value="0" maxlength="10">
				</div>
			</div>
			<div id="shopping" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">Shopping (eg clothing, footwear, household goods etc.)</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_3" value="0" maxlength="10">
				</div>
			</div>
			<div id="beauty" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title">Health and beauty (eg medical services, personal health care
and prescriptions/medicine etc.)</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_4" value="0" maxlength="10">
				</div>
			</div>
			<div id="life" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">Leisure/lifestyle (eg hobbies, entertainment, holidays etc.)</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_5" value="0" maxlength="10">
				</div>
			</div>
			<div id="insurance2" class="Form_Item Form_Item_Shallow_BGC">
				<p class="Form_Item_Title">Insurance</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_6" value="0" maxlength="10">
				</div>
			</div>
			<div id="other" class="Form_Item Form_Item_Deep_BGC">
				<p class="Form_Item_Title">Others (eg education and learning, support for
parents/relatives etc.)</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<input type="text" class="itemMount step2 step2_1 floats categoryOne" name="step2_1_7" value="0" maxlength="10">
				</div>
			</div>
			<div id="expenseRes" class="Form_Item calcRes">
				<p class="Form_Item_Title">Total</p>
				<div class="mountContainer mountContainer_en">
					<span>HKD</span>
					<span class="resTotal_Need">0</span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="questContainer shallowColor">
	
		<div class="question longQuestion fieldMiddle">
			<p>Expected inflation rate (p.a.)</p>
			<div class="showTips expected_inflation_en" data-targetTips="#tips03"></div>
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
		<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
	</div>
	
	<div class="questContainer deepColor">
	
		<div class="question longQuestion fieldMiddle">
		<p>Expected rate of return during<br />retirement eg interests or returns <br class = "mobileHide"/>from other investments (p.a.)</p>
			<div class="showTips m_s2_ShowTipsPos_en expectedRate_en" data-targetTips="#tips04"></div>
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
		<p class="remindMsg slideTxT">Larger values can be inputted in the text box directly.</p>
	</div>