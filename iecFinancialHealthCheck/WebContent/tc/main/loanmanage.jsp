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
									<p>你擁有住宅物業嗎？</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input type="radio" name="building_radio" id="building_radio1" class="css-checkbox" />
												<label for="building_radio1" class="css-label radGroup3">
													<span>我有住宅物業而毋需按揭供款。</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input  type="radio" name="building_radio" id="building_radio2" class="css-checkbox" />
												<label for="building_radio2" class="css-label radGroup3">
													<span>我有住宅物業並須按揭供款。</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input type="radio" name="building_radio" id="building_radio3" class="css-checkbox" />
												<label for="building_radio3" class="css-label radGroup3">
													<span>我沒有住宅物業。</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
							
							<div class="qBox flag dum">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>你通常如何繳交信用卡欠款？</p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="1" type="radio" name="creditcard_radio" id="creditcard_radio1" class="css-checkbox" />
												<label for="creditcard_radio1" class="css-label radGroup3">
													<span>經常沒有能力償還最低還款額。</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="2" type="radio" name="creditcard_radio" id="creditcard_radio2" class="css-checkbox" />
												<label for="creditcard_radio2" class="css-label radGroup3">
													<span>只償還最低還款額。</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="3" type="radio" name="creditcard_radio" id="creditcard_radio3" class="css-checkbox" />
												<label for="creditcard_radio3" class="css-label radGroup3">
													<span>償還高於最低還款額 ，但未能繳清全部欠款。</span>
												</label>
											</div>
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="4" type="radio" name="creditcard_radio" id="creditcard_radio4" class="css-checkbox" />
												<label for="creditcard_radio4" class="css-label radGroup3">
													<span>在免息還款期內還清所有欠款 。</span>
												</label>
											</div>
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="5" type="radio" name="creditcard_radio" id="creditcard_radio5" class="css-checkbox" />
												<label for="creditcard_radio5" class="css-label radGroup3">
													<span>我沒有信用卡。</span>
												</label>
											</div>
										</div>
									</div>
								
								</div>
							</div>
							
							<div class="qBox forpadbottom flag dum">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>你現時有沒有其他借貸（不包括按揭貸款），例如私人貸款或其他無抵押債務？</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="1" type="radio" name="loanab_radio" id="loanab_radio1" class="css-checkbox" />
												<label for="loanab_radio1" class="css-label radGroup3">
													<span>有</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_loan();" value="2" type="radio" name="loanab_radio" id="loanab_radio2" class="css-checkbox" />
												<label for="loanab_radio2" class="css-label radGroup3">
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
 var xmlhttp3;
function change_loan() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
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
   		 xmlhttp3.open("post", "<%=request.getContextPath() %>/admin/iec_action_s3?creditcard="+creditcard+"&loan="+loan, true);
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
					