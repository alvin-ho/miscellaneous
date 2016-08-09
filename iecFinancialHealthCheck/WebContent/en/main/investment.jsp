<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						<div class="mBanner">
							<img src="../../images/tc/minvestment.png" alt="" />  <!--mobile banner -->
						</div>
					<div class = "tabletBanner">
						<img src="../../images/tc/investment.png" alt="bg" class = "incomepigbg"/>
					</div>
						<form class = "questionContainer" id = "investmentCon" action="#">
						<div class="qBox flag">
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>Which statement below best describes your savings habit?</p>
							</div>
						    
							<div class = "qAnsContainer normalPadd deepColor">
								<!--<div class="qAns marginPad">
									<div id="dragTree">
										<div onmouseout="change_investment();" id="dragCoin" class="aui-widget-content"></div>
									</div>
									<ul id="dropTree">
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice1" class="triggerradio cdro1"></div>	
											<input   onclick="change_investment();" value="1" type="radio" name="dragcoin"  id="dragcoins_radio1" class="css-checkbox"/>
											<label for="dragcoins_radio1" class="css-label radGroup3 padtoleft none_bg" >
												<span class = "firstspan">I do not save.</span>	
											</label>
										</div>
										</li>
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice2" class="triggerradio cdro2"></div>
											<input onclick="change_investment();" value="2" type="radio" name="dragcoin"  id="dragcoins_radio2" class="css-checkbox"/>
											<label for="dragcoins_radio2" class="css-label radGroup3 padtoleft none_bg">
												<span class = "secondspan">I save occasionally when there is a surplus.</span>
											</label>
										</div>
										</li>
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice3" class="triggerradio cdro3"></div>
											<input onclick="change_investment();" value="3" type="radio" name="dragcoin"  id="dragcoins_radio3" class="css-checkbox"/>
											<label for="dragcoins_radio3" class="css-label radGroup3 padtoleft none_bg">
												<span class = "thirdspan">I save every month but not a fixed amount.</span>
											</label>
										</div>
										</li>
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice4" class="triggerradio cdro4"></div>	
											<input onclick="change_investment();" value="4" type="radio" name="dragcoin" id="dragcoins_radio4" class="css-checkbox"/>
											<label for="dragcoins_radio4" class="css-label radGroup3 padtoleft none_bg">
												<span class = "fourthspan">I reserve some money for saving every month before I spend or invest.</span>
											</label>
										</div>
										</li>
									</ul>	
			
								</div>-->
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input   onclick="change_investment();" value="1" type="radio" name="dragcoin"  id="dragcoins_radio1" class="css-checkbox"/>
												<label for="dragcoins_radio1" class="css-label radGroup3 none_bg" >
													<span>I do not save.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="2" type="radio" name="dragcoin"  id="dragcoins_radio2" class="css-checkbox"/>
												<label for="dragcoins_radio2" class="css-label radGroup3 padtoleft none_bg">
													<span>I save occasionally when there is a surplus.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="3" type="radio" name="dragcoin"  id="dragcoins_radio3" class="css-checkbox"/>
												<label for="dragcoins_radio3" class="css-label radGroup3 padtoleft none_bg">
													<span>I save every month but not a fixed amount.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="4" type="radio" name="dragcoin" id="dragcoins_radio4" class="css-checkbox"/>
												<label for="dragcoins_radio4" class="css-label radGroup3 padtoleft none_bg">
													<span>I reserve some money for saving every month before I spend or invest.</span>
												</label>
											</div>
										</div>
									</div>
							</div>
							
							
							
						</div>
							
							<div class="qBox dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>How long is your investment experience, excluding MPF/ORSO?</p>
								</div>
							
								<div class="qAnsContainer timeLinePadd shallowColor">
							
								<div class="qAns timeLine">
							
									<div class="radioGroup">
										<input onclick="change_investment();" value="0" type="radio" name="radiottq" id="ex_radio1" class="css-checkbox" />
										<label for="ex_radio1" class="css-label radGroup2">
											<span class = "no">Nil</span>
										</label>
										<div class="radioName radionameone">
											<span class = "no">Nil</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="5" type="radio" name="radiottq" id="ex_radio2" class="css-checkbox" />
										<label for="ex_radio2" class="css-label radGroup2">
											<span>Less than 5 years</span>
										</label>
										<div class="radioName">
											<span>Less than 5 years</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="10" type="radio" name="radiottq" id="ex_radio3" class="css-checkbox" />
										<label for="ex_radio3" class="css-label radGroup2">
											<span>5 to 10 years</span>
										</label>
										<div class="radioName">
											<span>5 to 10 years</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="20" type="radio" name="radiottq" id="ex_radio4" class="css-checkbox" />
										<label for="ex_radio4" class="css-label radGroup2">
											<span>11 to 20 years</span>
										</label>
										<div class="radioName radionamefourth">
											<span>11 to 20 years</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="21" type="radio" name="radiottq" id="ex_radio5" class="css-checkbox" />
										<label for="ex_radio5" class="css-label radGroup2">
											<span>Over 20 years</span>
										</label>
										<div class="radioName">
											<span>Over 20 years</span>
										</div>
									</div>
								
								</div>
							
							</div>
							</div>
							
							<div class="qBox paddbottom dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>Which of the following statements would best describe you as an investor?<span class = "hints"> (You are not required to answer this question)</span></p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="1" type="radio" name="investdescribe_radio" id="investdescribe_radio1" class="css-checkbox" />
												<label for="investdescribe_radio1" class="css-label radGroup3">
													<span>I know nothing at all about the investments I have made.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="2" type="radio" name="investdescribe_radio" id="investdescribe_radio2" class="css-checkbox" />
												<label for="investdescribe_radio2" class="css-label radGroup3">
													<span>I do not quite understand investment terminology nor am I familiar with my investment options.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="3" type="radio" name="investdescribe_radio" id="investdescribe_radio3" class="css-checkbox" />
												<label for="investdescribe_radio3" class="css-label radGroup3">
													<span>I generally understand investment principles and how to choose investment products.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="4" type="radio" name="investdescribe_radio" id="investdescribe_radio4" class="css-checkbox" />
												<label for="investdescribe_radio4" class="css-label radGroup3">
													<span>I am a proficient investor and am able to explain concepts.</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
						</form>
					
							<%@ include file = "successresult.jsp" %>
							
<script type="text/javascript">
<!--
 var xmlhttp5;
function change_investment() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp5=createXmlhttp();
   		 xmlhttp5.onreadystatechange = processFunc5;
   		 var dragcoin=0;
		 var radiottq=0;
		 var investdescribe=0;
         var chkDragcoin = document.getElementsByName("dragcoin");
         for(var i=0;i<chkDragcoin.length;i++){
            if(chkDragcoin[i].checked){
                dragcoin=chkDragcoin[i].value;
                break;
               }
         }
         var chkRadiottq = document.getElementsByName("radiottq");
         for(var i=0;i<chkRadiottq.length;i++){
            if(chkRadiottq[i].checked){
                radiottq= chkRadiottq[i].value;
                break;
               }
         }
         var chkInvestdescribe = document.getElementsByName("investdescribe_radio");
         for(var i=0;i<chkInvestdescribe.length;i++){
            if(chkInvestdescribe[i].checked){
                investdescribe= chkInvestdescribe[i].value;
                break;
               }
         }
   		 xmlhttp5.open("post", "<%=request.getContextPath() %>/admin/iec_action_s5?paslan=eng&dragcoin="+dragcoin+"&radiottq="+radiottq+"&investdescribe="+investdescribe, true);
   		 xmlhttp5.send(null);
	} 
function processFunc5(){
    	if (xmlhttp5.readyState == 4)
      	  if (xmlhttp5.status == 200) {
        	    var text = xmlhttp5.responseText;
        	    showResult_<%=pageCount %>(text,"s5");  
       	 }
	}
	-->
</script>
						
						
			