<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>

						<div class="mBanner">
							<img src="../../images/tc/mincomepig.png" alt="" />  <!--mobile banner -->
						</div>
	
						<div class = "tabletBanner">
							<img src="../../images/tc/incomebig0.png" alt="bg" class = "incomepigbg"/>
						</div>
					
						<form class = "questionContainer" id = "income_and_expenseCon" action="#">
						<div class="longqBox underpig flag">
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>你每年的收入，包括薪金、佣金、獎金及津貼等大約有多少？</p>
							</div>
								<div class="qAnsContainer normalPadd deepColor">
									<div class = "sliderWidgetContainer">
									<div class = "sliderWidget">
										<div class="silderBtn minus" id="minusBtn0" onclick="change();" onmouseout="change();"></div>
										<div class = "sliderContainer"><div id="sliderBar0" onclick="change();" onmouseout="change();" class = "sliderBar"></div></div>
										<div class="silderBtn add" id = "addBtn0" onclick="change();" onmouseout="change();"></div>
										
										<div class = "informa">
												<!--<div class = "minValue">$0</div>
												<div class = "maxValue">$600,000</div>-->
												<p class = "maxMessage maxMessage0"><span>請在欄位內輸入較大的數值。</span></p>
												
										</div>
									</div>
									
									<div class = "inputBox">
											<span class="slideWord">港元</span>
										<input onchange="change();" onblur="change();" type="text" name="mount0" id="mount0" class = "mount" value = ""/>
									</div>
									</div><br />	
								</div>
						</div>
						
						<div class="longqBox flag">
								
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>你有沒有其他收入來源，例如家人提供的財政資助、利息、投資等收入？（請按每年計算）</p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="sliderAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change();" type="radio" name="loan_radio" id="loan_radio1" class="css-checkbox" />
												<label for="loan_radio1" class="css-label radGroup3">
													<span class = "yes">有</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change();" type="radio" name="loan_radio" id="loan_radio2" class="css-checkbox" />
												<label for="loan_radio2" class="css-label radGroup3">
													<span class = "no">沒有</span>
												</label>
											</div>
											<div class = "silderContainer">
												<div class = "sliderWidget">
													<div class="silderBtn minus" id="minusBtn1" onclick="change();" onmouseout="change();"></div>
													<div class = "sliderContainer"><div id="sliderBar1" onclick="change();" onmouseout="change();" class = "sliderBar"></div></div>
													<div class="silderBtn add" id = "addBtn1" onclick="change();" onmouseout="change();"></div>
												
												<div class = "informa">
													<!--<div class = "minValue">$1</div>
													<div class = "maxValue">$600,000</div>-->
													<p class = "maxMessage maxMessage1">
														<span>請在欄位內輸入較大的數值。</span>
														<span>Please input value more than 0.</span>
													</p>
													
												</div>
										
												</div>
												
												<div class = "inputBox">
													<span class="slideWord">港元</span>
													<input onchange="change();" onblur="change();" type="text" name="mount1" id="mount1" class = "mount" value = ""/>
												</div>	
												
												<br />	
											</div>
									
										</div>
									</div>
								
									
								</div>	
						</div>
						
						<div class="longqBox forpad flag dum">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>請估計一下你每年的總開支大約是多少（包括強積金或職業退休計劃供款、投資及保費）？</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
									<div class="sliderAns">
										<div class="cbContaineradv marStatus">
											<div class = "sliderWidgetContainer">
											<div class = "sliderWidget sliderWidget2">
												<div class="silderBtn minus" id="minusBtn2" onclick="change();" onmouseout="change();"></div>
												<div class = "sliderContainer"><div id="sliderBar2" onclick="change();" onmouseout="change();" class = "sliderBar"></div></div>
												<div class="silderBtn add" id = "addBtn2" onclick="change();" onmouseout="change();"></div>
											
											
											<div class = "informa">
												<!--<div class = "minValue">$0</div>
												<div class = "maxValue">$600,000</div>-->
												<p class = "maxMessage maxMessage2"><span>請在欄位內輸入較大的數值。</span></p>													
											</div>
											</div>
											<div class = "inputBox">
												<span class="slideWord">港元</span>
												<input onchange="change();" onblur="change();" type="text" name="mount2" id="mount2" class = "mount" value = ""/>
											</div><br />	
											</div>
											
											
										</div><br />
									</div>
								</div>
						</div>
					</form>					
							<%@ include file = "successresult.jsp" %>		
						
<script type="text/javascript">
<!--
 var xmlhttp2;
 	var mount0;
  	var mount1;
    var mount2;
function change() {
	setTimeout(function(){
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp2=createXmlhttp();
   		 xmlhttp2.onreadystatechange = processFunc2;
   		 mount0=document.getElementById("mount0");
   		 mount1=0;
   		 if(document.getElementById("loan_radio1").checked){
   		 	mount1=document.getElementById("mount1").value;
   		 }
   		 mount2=document.getElementById("mount2");
   		 xmlhttp2.open("post", "<%=request.getContextPath() %>/admin/iec_action_s2?mount0="+mount0.value+"&mount1="+mount1+"&mount2="+mount2.value, true);
   		 xmlhttp2.send(null);
	},300);
} 
function processFunc2(){
    	if (xmlhttp2.readyState == 4)
      	  if (xmlhttp2.status == 200) {
        	  	var text = xmlhttp2.responseText;
        	    showResult_<%=pageCount %>(text,"s2");   
       	 }  
	}
-->
</script>	
				