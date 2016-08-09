<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						<div class="mBanner">
							<img src="../../images/tc/minsurance.png" alt="" />  <!--mobile banner -->
						</div>
						<div class = "tabletBanner">
							<img src="../../images/tc/insurance.png" alt="bg" class = "incomepigbg"/>
						</div>
						<form class = "questionContainer" id = "insuranceCon" action="#">
							<div class="qBox flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>你有沒有購買保險以保障你擁有的財產（例如住宅物業、車）、你個人或你的健康？</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns flag">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="1" type="radio" name="insuranceenough_radio" id="insuranceenough_radio1" class="css-checkbox" />
												<label for="insuranceenough_radio1" class="css-label radGroup3">
													<span>我已有足夠的保障</span>
												</label>
											</div>
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="2" type="radio" name="insuranceenough_radio" id="insuranceenough_radio2" class="css-checkbox" />
												<label for="insuranceenough_radio2" class="css-label radGroup3">
													<span>我有買保險，但不清楚保額是否足夠</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="3" type="radio" name="insuranceenough_radio" id="insuranceenough_radio3" class="css-checkbox" />
												<label for="insuranceenough_radio3" class="css-label radGroup3">
													<span>我沒有買保險</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="4" type="radio" name="insuranceenough_radio" id="insuranceenough_radio4" class="css-checkbox" />
												<label for="insuranceenough_radio4" class="css-label radGroup3">
													<span>我不需要買保險</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
							
							<div class="qBox dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>你有沒有為經濟上需要你支持的家人考慮過他們的保險需要及保障額？<span class = "hints"> (你不須回答此問題)</span></p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input type="radio" name="protectinsurance_radio" id="protectinsurance_radio1" class="css-checkbox" />
												<label for="protectinsurance_radio1" class="css-label radGroup3">
													<span>有</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input type="radio" name="protectinsurance_radio" id="protectinsurance_radio2" class="css-checkbox" />
												<label for="protectinsurance_radio2" class="css-label radGroup3">
													<span>沒有</span>
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
 var xmlhttp7;
function change_insurance() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp7=createXmlhttp();
   		 xmlhttp7.onreadystatechange = processFunc7;
   		 var insuranceenough=0;
         var chkInsuranceenough = document.getElementsByName("insuranceenough_radio");
         for(var i=0;i<chkInsuranceenough.length;i++){
            if(chkInsuranceenough[i].checked){
                insuranceenough=chkInsuranceenough[i].value;
                break;
               }
         }
         var score=Score();
   		 xmlhttp7.open("post", "<%=request.getContextPath() %>/admin/iec_action_s7?insuranceenough="+insuranceenough+"&score="+score, true);
   		 xmlhttp7.send(null);
	} 
function processFunc7(){
    	if (xmlhttp7.readyState == 4)
      	  if (xmlhttp7.status == 200) {
        	    var text = xmlhttp7.responseText;
        	    showResult_<%=pageCount %>(text,"s7"); 
       	 }
	}
	-->
</script>

