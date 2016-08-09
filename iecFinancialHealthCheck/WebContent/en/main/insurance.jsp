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
									<p>Do you have insurance cover to protect what you own (eg your home, your car), yourself or your health?</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns flag">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="1" type="radio" name="insuranceenough_radio" id="insuranceenough_radio1" class="css-checkbox" />
												<label for="insuranceenough_radio1" class="css-label radGroup3">
													<span>Yes, I have the cover I want.</span>
												</label>
											</div>
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="2" type="radio" name="insuranceenough_radio" id="insuranceenough_radio2" class="css-checkbox" />
												<label for="insuranceenough_radio2" class="css-label radGroup3">
													<span>Yes, I have some cover but I am not sure if it will be enough.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="3" type="radio" name="insuranceenough_radio" id="insuranceenough_radio3" class="css-checkbox" />
												<label for="insuranceenough_radio3" class="css-label radGroup3">
													<span>No, I do not have any insurance.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_insurance();" value="4" type="radio" name="insuranceenough_radio" id="insuranceenough_radio4" class="css-checkbox" />
												<label for="insuranceenough_radio4" class="css-label radGroup3">
													<span>No, I do not want insurance.</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
							
							<div class="qBox dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>Have you considered the insurance needs and cover of your dependant?<span class = "hints"> (You are not required to answer this question)</span></p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input type="radio" name="protectinsurance_radio" id="protectinsurance_radio1" class="css-checkbox" />
												<label for="protectinsurance_radio1" class="css-label radGroup3">
													<span>Yes</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input type="radio" name="protectinsurance_radio" id="protectinsurance_radio2" class="css-checkbox" />
												<label for="protectinsurance_radio2" class="css-label radGroup3">
													<span>No</span>
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
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
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
   		 xmlhttp7.open("post", "<%=request.getContextPath() %>/admin/iec_action_s7?paslan=eng&insuranceenough="+insuranceenough+"&score="+score, true);
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

