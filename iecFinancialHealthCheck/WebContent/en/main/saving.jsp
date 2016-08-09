<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						
						<div class="mBanner">
							<img src="../../images/tc/msaving.png" alt="" />  <!--mobile banner -->
						</div>
						<div class = "tabletBanner">
								<img src="../../images/tc/saving_01.jpg" alt="bg" class = "incomepigbg"/>
						</div>
						<form class = "questionContainer" id = "savingCon" action="#">
						<div class="qBox flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>Have you set aside some money for use in emergency?</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="y" type="radio" name="whethersaving_radio" id="whethersaving_radio1" class="css-checkbox" />
												<label for="whethersaving_radio1" class="css-label radGroup3">
													<span>Yes</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="n" type="radio" name="whethersaving_radio" id="whethersaving_radio2" class="css-checkbox" />
												<label for="whethersaving_radio2" class="css-label radGroup3">
													<span>No</span>
												</label>
											</div>
											
										</div>
									</div>
								
								</div>
						</div>
							
							<div class="qBox forpadbottom dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>If you were unable to work for six months due to sickness or injury, would you still be able to maintain your living and meet the obligations eg bills?</p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="1" type="radio" name="sickpayment_radio" id="sickpayment_radio1" class="css-checkbox" />
												<label for="sickpayment_radio1" class="css-label radGroup3">
													<span>Yes, I would still have income from other sources or savings.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="2" type="radio" name="sickpayment_radio" id="sickpayment_radio2" class="css-checkbox" />
												<label for="sickpayment_radio2" class="css-label radGroup3">
													<span>My expenses could be covered by my parents or family members.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="3" type="radio" name="sickpayment_radio" id="sickpayment_radio3" class="css-checkbox" />
												<label for="sickpayment_radio3" class="css-label radGroup3">
													<span>I would be in financial trouble if this happens.</span>
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
 var xmlhttp6;
function change_saving() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp6=createXmlhttp();
   		 xmlhttp6.onreadystatechange = processFunc6;
   		 var whethersaving;
         var chkWhethersaving = document.getElementsByName("whethersaving_radio");
         for(var i=0;i<chkWhethersaving.length;i++){
            if(chkWhethersaving[i].checked){
                whethersaving=chkWhethersaving[i].value;
                break;
               }
         }
         var sickpayment;
         var chkSickpayment = document.getElementsByName("sickpayment_radio");
         for(var i=0;i<chkSickpayment.length;i++){
            if(chkSickpayment[i].checked){
                sickpayment= chkSickpayment[i].value;
                break;
               }
         }
   		 xmlhttp6.open("post", "<%=request.getContextPath() %>/admin/iec_action_s6?paslan=eng&whethersaving="+whethersaving+"&sickpayment="+sickpayment, true);
   		 xmlhttp6.send(null);
	} 
function processFunc6(){
    	if (xmlhttp6.readyState == 4)
      	  if (xmlhttp6.status == 200) {
        	   var text = xmlhttp6.responseText;
        	    showResult_<%=pageCount %>(text,"s6");   
       	 }
	}
	-->
</script>
						