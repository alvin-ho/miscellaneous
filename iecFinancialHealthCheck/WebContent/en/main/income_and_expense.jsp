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
								<p>How much is your gross annual income, including salary, commission, bonus and allowance?</p>
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
												<p class = "maxMessage maxMessage0"><span>Larger values can be inputted in the text box.</span></p>
												
											</div>
										</div>
										
										<div class = "inputBox">
											<span class="slideWord">HKD</span>
											<input type="text" name="mount0" id="mount0" class = "mount" value = ""/>
										</div>
									</div><br />	
								</div>
						</div>
						
						<div class="longqBox flag">
								
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>Do you have income from other sources, like financial support from family, bank interest, profit from investment? (please provide an annual figure)</p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="sliderAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change();" type="radio" name="loan_radio" id="loan_radio1" class="css-checkbox" />
												<label for="loan_radio1" class="css-label radGroup3">
													<span class = "yes">Yes</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change();" type="radio" name="loan_radio" id="loan_radio2" class="css-checkbox" />
												<label for="loan_radio2" class="css-label radGroup3">
													<span class = "no">No</span>
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
														<span>Larger values can be inputted in the text box.</span>
													</p>
													
												</div>
												</div>
												<div class = "inputBox">
													<span class="slideWord">HKD</span>
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
									<p>How much is your annual expense, plus annual contributions to MPF/ORSO, investments and insurance premium? Please give your best estimate.</p>
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
													<p class = "maxMessage maxMessage2"><span>Larger values can be inputted in the text box.</span></p>
													
												</div>
											
											</div>		
											<div class = "inputBox">
											<span class="slideWord">HKD</span>
											<input onchange="change();" onblur="change();" type="text" name="mount2" id="mount2" class = "mount" value = ""/>
											</div></br>
										</div>
										
										<br />	
									</div>
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
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp2=createXmlhttp();
   		 xmlhttp2.onreadystatechange = processFunc2;
   		 mount0=document.getElementById("mount0");
   		 mount1=0;
   		 if(document.getElementById("loan_radio1").checked){
   		 	mount1=document.getElementById("mount1").value;
   		 }
   		 mount2=document.getElementById("mount2");
   		 xmlhttp2.open("post", "<%=request.getContextPath() %>/admin/iec_action_s2?paslan=eng&mount0="+mount0.value+"&mount1="+mount1+"&mount2="+mount2.value, true);
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
				