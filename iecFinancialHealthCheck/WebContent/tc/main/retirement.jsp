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
									<p>你預計你將會何時退休？</p>
								</div>
							
								<div class="qAnsContainer timeLinePadd deepColor">
								
									<div class="qAns timeLine">
								
										<div class="radioGroup">
											<input value="5" onclick="change_retirement();" type="radio" name="radiot" id="re_radio1" class="css-checkbox" />
											<label for="re_radio1" class="css-label radGroup2 widthPaddthirdty">
												<span>5年內</span>
											</label>
											<div class="radioName">
												<span>5年內</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="10" onclick="change_retirement();" type="radio" name="radiot" id="re_radio2" class="css-checkbox" />
											<label for="re_radio2" class="css-label radGroup2 widthPaddsix">
												<span>5至10年內</span>
											</label>
											<div class="radioName">
												<span>5至10年內</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="25" onclick="change_retirement();" type="radio" name="radiot" id="re_radio3" class="css-checkbox" />
											<label for="re_radio3" class="css-label radGroup2 widthPaddsix">
												<span>11至25年內</span>
											</label>
											<div class="radioName">
												<span>11至25年內</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="26" onclick="change_retirement();" type="radio" name="radiot" id="re_radio4" class="css-checkbox" />
											<label for="re_radio4" class="css-label radGroup2 widthPaddsix">
												<span>25年以後</span>
											</label>
											<div class="radioName">
												<span>25年以後</span>
											</div>
										</div>
										
										<div class="radioGroup">
											<input value="0" onclick="change_retirement();" type="radio" name="radiot" id="re_radio5" class="css-checkbox" />
											<label for="re_radio5" class="css-label radGroup2 widthPaddthirdty">
												<span>我不用計劃退休</span>
											</label>
											<div class="radioName">
												<span>我不用計劃退休</span>
											</div>
										</div>
									
									</div>
								
								</div>
							</div>
								
								<div class="qBox forpadbottom dum flag">
									<div class="qTitle">
										<div class="qTitleImg"></div>
										<p>你有沒有想過你退休時會有多少錢？<span class = "hints"> (你不須回答此問題)</span></p>
									</div>
								
									<div class="qAnsContainer normalPadd shallowColor">
									
										<div class="qAns">
											<div class="cbContainer marStatus">
												<div class="radioGroup resetMargin">
													<input value="1" onclick="change_retirement();" type="radio" name="retiremoney_radio" id="retiremoney_radio1" class="css-checkbox" />
													<label for="retiremoney_radio1" class="css-label radGroup3">
														<span>沒有，我未有任何計劃</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="2" onclick="change_retirement();" type="radio" name="retiremoney_radio" id="retiremoney_radio2" class="css-checkbox" />
													<label for="retiremoney_radio2" class="css-label radGroup3">
														<span>不肯定，我有開始計劃及儲蓄，但不清楚我退休時會有多少錢</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="3" onclick="change_retirement();" type="radio" name="retiremoney_radio" id="retiremoney_radio3" class="css-checkbox" />
													<label for="retiremoney_radio3" class="css-label radGroup3">
														<span>我已經計劃好，而且認為可以實現</span>
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
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
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
   		 xmlhttp8.open("post", "<%=request.getContextPath() %>/admin/iec_action_s8?radiot="+radiot+"&retiremoney="+retiremoney, true);
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
					