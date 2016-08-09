<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
							<div class="mBanner">
								<img src="../../images/tc/loanbanner.png" alt="" />  <!--mobile banner -->
							</div>
							<div class = "tabletBanner">
								<img src="../../images/tc/loangraphic.png" alt="bg" />
							</div>
						<form class = "questionContainer" id = "loanmanageCon" action="#">
							<div class="qBox flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>What about your home?</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input type="radio" name="building_radio" id="building_radio1" class="css-checkbox" />
												<label for="building_radio1" class="css-label radGroup3">
													<span>I own my home without a mortgage.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input  type="radio" name="building_radio" id="building_radio2" class="css-checkbox" />
												<label for="building_radio2" class="css-label radGroup3">
													<span>I have a mortgage.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input type="radio" name="building_radio" id="building_radio3" class="css-checkbox" />
												<label for="building_radio3" class="css-label radGroup3">
													<span>I don't own my home.</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
							
							<div class="qBox flag dum">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>How do you repay your credit card bill in general?</p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="1" type="radio" name="creditcard_radio" id="creditcard_radio1" class="css-checkbox" />
												<label for="creditcard_radio1" class="css-label radGroup3">
													<span>Often unable to pay minimum payment.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="2" type="radio" name="creditcard_radio" id="creditcard_radio2" class="css-checkbox" />
												<label for="creditcard_radio2" class="css-label radGroup3">
													<span>Pay minimum payment only.</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="3" type="radio" name="creditcard_radio" id="creditcard_radio3" class="css-checkbox" />
												<label for="creditcard_radio3" class="css-label radGroup3">
													<span>Pay more than the minimum payment but not the full bill.</span>
												</label>
											</div>
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="4" type="radio" name="creditcard_radio" id="creditcard_radio4" class="css-checkbox" />
												<label for="creditcard_radio4" class="css-label radGroup3">
													<span>Pay the balance on time before interest incurs.</span>
												</label>
											</div>
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="5" type="radio" name="creditcard_radio" id="creditcard_radio5" class="css-checkbox" />
												<label for="creditcard_radio5" class="css-label radGroup3">
													<span>I don't have credit card.</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
							
							<div class="qBox forpadbottom flag dum">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>Currently, do you have any other debts (excluding mortgage) eg personal loans and other unsecured debts?</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="1" type="radio" name="loanab_radio" id="loanab_radio1" class="css-checkbox" />
												<label for="loanab_radio1" class="css-label radGroup3">
													<span>Yes</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="2" type="radio" name="loanab_radio" id="loanab_radio2" class="css-checkbox" />
												<label for="loanab_radio2" class="css-label radGroup3">
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
 var xmlhttp3;
function change_loan() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp3=createXmlhttp();
   		 xmlhttp3.onreadystatechange = processFunc3;
   		 var creditcard = 0;
         var chkCard = document.getElementsByName("creditcard_radio");
         for(var i=0;i<chkCard.length;i++){
            if(chkCard[i].checked){
                creditcard=chkCard[i].value;
                break;
               }
         }
         var loan = 0;
         var chkLoan = document.getElementsByName("loanab_radio");
         for(var i=0;i<chkLoan.length;i++){
            if(chkLoan[i].checked){
                loan= chkLoan[i].value;
                break;
               }
         }
   		 xmlhttp3.open("post", "<%=request.getContextPath() %>/admin/iec_action_s3?paslan=eng&creditcard="+creditcard+"&loan="+loan, true);
   		 xmlhttp3.send(null);
	} 
function processFunc3(){
    	if (xmlhttp3.readyState == 4)
      	  if (xmlhttp3.status == 200) {
        	   var text = xmlhttp3.responseText;
        	    showResult_<%=pageCount %>(text,"s3");     
       	 }
	}
	-->
</script>
					