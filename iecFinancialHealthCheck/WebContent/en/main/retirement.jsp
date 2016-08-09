<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
				<div class="mBanner">
					<img src="../../images/tc/mRetire.jpg" alt="" />  <!--mobile banner -->
				</div>
				<div class = "tabletBanner">
					<img src="../../images/tc/retirment.png" alt="bg" class = "incomepigbg"/>
				</div>
						<form class = "questionContainer" id = "retirementCon" action="#">
							<div class="qBox flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>When do you think you will retire?</p>
								</div>
							
								<div class="qAnsContainer timeLinePadd deepColor">
								
									<div class="qAns timeLine">
								
										<div class="radioGroup">
											<input value="5" onclick="change_retirement();" type="radio" name="radiot" id="re_radio1" class="css-checkbox" />
											<label for="re_radio1" class="css-label radGroup2 widthPaddthirdty">
												<span>In less than 5 years</span>
											</label>
											<div class="radioName">
												<span>In less than 5 years</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="10" onclick="change_retirement();" type="radio" name="radiot" id="re_radio2" class="css-checkbox" />
											<label for="re_radio2" class="css-label radGroup2 widthPaddsix">
												<span>In 5 to 10 years</span>
											</label>
											<div class="radioName">
												<span>In 5 to 10 years</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="25" onclick="change_retirement();" type="radio" name="radiot" id="re_radio3" class="css-checkbox" />
											<label for="re_radio3" class="css-label radGroup2 widthPaddsix">
												<span>In 11 to 25 years</span>
											</label>
											<div class="radioName">
												<span>In 11 to 25 years</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="26" onclick="change_retirement();" type="radio" name="radiot" id="re_radio4" class="css-checkbox" />
											<label for="re_radio4" class="css-label radGroup2 widthPaddsix">
												<span>In more than 25 years</span>
											</label>
											<div class="radioName">
												<span>In more than 25 years</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="0" onclick="change_retirement();" type="radio" name="radiot" id="re_radio5" class="css-checkbox" />
											<label for="re_radio5" class="css-label radGroup2 widthPaddthirdty">
												<span>I don't need to plan for my retirement</span>
											</label>
											<div class="radioName">
												<span>I don't need to plan for my retirement</span>
											</div>
										</div>
									
									</div>
								
								</div>
							</div>
								
								<div class="qBox forpadbottom dum flag">
									<div class="qTitle">
										<div class="qTitleImg"></div>
										<p>Have you thought about how much money will you have when you retire?<span class = "hints"> (You are not required to answer this question)</span></p>
									</div>
								
									<div class="qAnsContainer normalPadd shallowColor">
									
										<div class="qAns">
											<div class="cbContainer marStatus">
												<div class="radioGroup resetMargin">
													<input value="1" onclick="change_retirement();" type="radio" name="retiremoney_radio" id="retiremoney_radio1" class="css-checkbox" />
													<label for="retiremoney_radio1" class="css-label radGroup3">
														<span>No, I have not made any plan yet.</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="2" onclick="change_retirement();" type="radio" name="retiremoney_radio" id="retiremoney_radio2" class="css-checkbox" />
													<label for="retiremoney_radio2" class="css-label radGroup3">
														<span>I am not sure. I have made some plans and started to save, but I do not know how much I will have when I retire.</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="3" onclick="change_retirement();" type="radio" name="retiremoney_radio" id="retiremoney_radio3" class="css-checkbox" />
													<label for="retiremoney_radio3" class="css-label radGroup3">
														<span>I have made some plans and I think I can manage it.</span>
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
 var xmlhttp8;
function change_retirement() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp8=createXmlhttp();
   		 xmlhttp8.onreadystatechange = processFunc8;
   		 var radiot=0;
		 var retiremoney=0;
         var chkRadiot = document.getElementsByName("radiot");
         for(var i=0;i<chkRadiot.length;i++){
            if(chkRadiot[i].checked){
                radiot=chkRadiot[i].value;
                break;
               }
         }
         var chkRetiremoney = document.getElementsByName("retiremoney_radio");
         for(var i=0;i<chkRetiremoney.length;i++){
            if(chkRetiremoney[i].checked){
                retiremoney= chkRetiremoney[i].value;
                break;
               }
         }
   		 xmlhttp8.open("post", "<%=request.getContextPath() %>/admin/iec_action_s8?paslan=eng&radiot="+radiot+"&retiremoney="+retiremoney, true);
   		 xmlhttp8.send(null);
	} 
function processFunc8(){
    	if (xmlhttp8.readyState == 4)
      	  if (xmlhttp8.status == 200) {
        	   var text = xmlhttp8.responseText;
        	   showResult_<%=pageCount %>(text,"s8"); 
       	 }
	}
	-->
</script>
					