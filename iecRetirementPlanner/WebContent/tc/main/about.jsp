<%@ page language="java" pageEncoding="UTF-8" %>
	<div class="questContainer deepColor">
		<div class="question">
			<p>你現時的年齡</p>
		</div>
		<div class = "sliderWidget">					
			<div class="silderBtn minus" id="minusBtn0"></div>
			<div class = "sliderContainer">
				<div id="sliderBar0" class = "sliderBar"></div>
			</div>
			<div class="silderBtn add" id="addBtn0"></div>
		</div>
		
		<div class="mountContainer">
			<input type="text" class="mount step1 integer" id="mount0" name="step1_0" value="0" maxlength="3" />
		</div>
		<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
	</div>

	<div class="questContainer shallowColor">
	
		<div class="question">
			<p>預期退休年齡</p>
			<div class="showTips" data-targetTips="#tips01"></div>
		</div>
		
		<div class = "sliderWidget">					
			<div class="silderBtn minus" id="minusBtn1"></div>
			<div class = "sliderContainer">
				<div id="sliderBar1" class = "sliderBar"></div>
			</div>
			<div class="silderBtn add" id="addBtn1"></div>
		</div>
		
		<div class="mountContainer">
			<input type="text" class="mount step1 integer" id="mount1" name="step1_1" value="0" maxlength="3" />
		</div>
		<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
	</div>
	
	<div class="questContainer deepColor">
	
		<div class="question">
			<p>預期壽命</p>
			<div class="showTips" data-targetTips="#tips02"></div>
		</div>

		<div class = "sliderWidget">					
			<div class="silderBtn minus" id="minusBtn2"></div>
			<div class = "sliderContainer">
				<div id="sliderBar2" class = "sliderBar"></div>
			</div>
			<div class="silderBtn add" id ="addBtn2"></div>
		</div>
		
		<div class="mountContainer">
			<input type="text" class="mount step1 integer" id="mount2" name="step1_2" value="0" maxlength="3" />
		</div>
		<p class="remindMsg slideTxT">你可直接輸入較大的數值。</p>
	</div>
	
	
	

	<div class="calculate">

		<div class="calcLeft">
			<div class="animate_GIF">
				<img src="../../images/share/step1_ppl.png" alt="" />
			</div>
			<div class="animate_describe">
				<p class="describe_word">從現在到退休<br />
					<span class="describe_year" id="describe_year0"> __ </span>
					<span class="describe_year">年</span>
				</p>
			</div>
		</div>
		<div class="calcRight">
			<div class="animate_GIF">
				<img src="../../images/share/step1_ppl_wif_dog.png" alt="" />
			</div>
			<div class="animate_describe">
				<p class="describe_word">退休生活年期<br />
					<span class="describe_year" id="describe_year1"> __ </span>
					<span class="describe_year">年</span>
				</p>
			</div>
		</div>
	
	</div>