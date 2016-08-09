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
								<p>以下哪一項最適合形容你的儲蓄習慣？</p>
							</div>
						    
							<div class = "qAnsContainer normalPadd deepColor">
								<!--<div class="qAns marginPad">dragTreePadd
									<div id="dragTree">
										<div onmouseout="change_investment();" id="dragCoin" class="aui-widget-content"></div>
									</div>
									<ul id="dropTree">
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice1" class="triggerradio cdro1"></div>	
											<input   onclick="change_investment();" value="1" type="radio" name="dragcoin"  id="dragcoins_radio1" class="css-checkbox"/>
											<label for="dragcoins_radio1" class="css-label radGroup3 padtoleft none_bg" >
												<span class = "firstspan">我沒有儲蓄習慣</span>	
											</label>
										</div>
										</li>
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice2" class="triggerradio cdro2"></div>
											<input onclick="change_investment();" value="2" type="radio" name="dragcoin"  id="dragcoins_radio2" class="css-checkbox"/>
											<label for="dragcoins_radio2" class="css-label radGroup3 padtoleft none_bg">
												<span class = "secondspan">偶然有剩餘金錢時，我就會儲蓄</span>
											</label>
										</div>
										</li>
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice3" class="triggerradio cdro3"></div>
											<input onclick="change_investment();" value="3" type="radio" name="dragcoin"  id="dragcoins_radio3" class="css-checkbox"/>
											<label for="dragcoins_radio3" class="css-label radGroup3 padtoleft none_bg">
												<span class = "thirdspan">我會每月儲蓄，金額則不一定</span>
											</label>
										</div>
										</li>
										<li>
										<div class = "dragTreeRadioGroup">
											<div id="choice4" class="triggerradio cdro4"></div>	
											<input onclick="change_investment();" value="4" type="radio" name="dragcoin" id="dragcoins_radio4" class="css-checkbox"/>
											<label for="dragcoins_radio4" class="css-label radGroup3 padtoleft none_bg">
												<span class = "fourthspan">在消費或投資前，我每月都會預留一筆錢儲蓄</span>
											</label>
										</div>
										</li>
									</ul>	
			
								</div>-->
								
								<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="1" type="radio" name="dragcoin"  id="dragcoins_radio1" class="css-checkbox"/>
												<label for="dragcoins_radio1" class="css-label radGroup3 none_bg">
													<span>我沒有儲蓄習慣</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="2" type="radio" name="dragcoin"  id="dragcoins_radio2" class="css-checkbox"/>
												<label for="dragcoins_radio2" class="css-label radGroup3 none_bg">
													<span>偶然有剩餘金錢時，我就會儲蓄</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="3" type="radio" name="dragcoin"  id="dragcoins_radio3" class="css-checkbox"/>
												<label for="dragcoins_radio3" class="css-label radGroup3 none_bg">
													<span>我會每月儲蓄，金額則不一定</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="4" type="radio" name="dragcoin" id="dragcoins_radio4" class="css-checkbox"/>
												<label for="dragcoins_radio4" class="css-label radGroup3 none_bg">
													<span>在消費或投資前，我每月都會預留一筆錢儲蓄</span>
												</label>
											</div>
										</div>
									</div>
							</div>
	
						</div>
							
							<div class="qBox dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>除了強積金或職業退休計劃投資，你有多少投資經驗？</p>
								</div>
							
								<div class="qAnsContainer timeLinePadd shallowColor">
							
								<div class="qAns timeLine">
							
									<div class="radioGroup">
										<input onclick="change_investment();" value="0" type="radio" name="radiottq" id="ex_radio1" class="css-checkbox" />
										<label for="ex_radio1" class="css-label radGroup2">
											<span class = "no">沒有</span>
										</label>
										<div class="radioName radionameone">
											<span class = "no">沒有</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="5" type="radio" name="radiottq" id="ex_radio2" class="css-checkbox" />
										<label for="ex_radio2" class="css-label radGroup2">
											<span>少過5年</span>
										</label>
										<div class="radioName">
											<span>少過5年</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="10" type="radio" name="radiottq" id="ex_radio3" class="css-checkbox" />
										<label for="ex_radio3" class="css-label radGroup2">
											<span>5至10年</span>
										</label>
										<div class="radioName">
											<span>5至10年</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="20" type="radio" name="radiottq" id="ex_radio4" class="css-checkbox" />
										<label for="ex_radio4" class="css-label radGroup2">
											<span>11至20年</span>
										</label>
										<div class="radioName radionamefourth">
											<span>11至20年</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input onclick="change_investment();" value="21" type="radio" name="radiottq" id="ex_radio5" class="css-checkbox" />
										<label for="ex_radio5" class="css-label radGroup2">
											<span>20年以上</span>
										</label>
										<div class="radioName">
											<span>20年以上</span>
										</div>
									</div>
								
								</div>
							
							</div>
							</div>
							
							<div class="qBox paddbottom dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>以下哪一項對投資者的描述最適合你？<span class = "hints"> (你不須回答此問題)</span></p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="1" type="radio" name="investdescribe_radio" id="investdescribe_radio1" class="css-checkbox" />
												<label for="investdescribe_radio1" class="css-label radGroup3">
													<span>我對我所有的投資完全不瞭解</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="2" type="radio" name="investdescribe_radio" id="investdescribe_radio2" class="css-checkbox" />
												<label for="investdescribe_radio2" class="css-label radGroup3">
													<span>我對投資方面的術語認識有限，亦不太熟悉我的投資選擇</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="3" type="radio" name="investdescribe_radio" id="investdescribe_radio3" class="css-checkbox" />
												<label for="investdescribe_radio3" class="css-label radGroup3">
													<span>我大致明白各項投資的基本原理及如何選擇投資產品</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_investment();" value="4" type="radio" name="investdescribe_radio" id="investdescribe_radio4" class="css-checkbox" />
												<label for="investdescribe_radio4" class="css-label radGroup3">
													<span>我精通各項投資，亦有能力向別人解釋相關概念</span>
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
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
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
   		 xmlhttp5.open("post", "<%=request.getContextPath() %>/admin/iec_action_s5?dragcoin="+dragcoin+"&radiottq="+radiottq+"&investdescribe="+investdescribe, true);
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
						
						
			