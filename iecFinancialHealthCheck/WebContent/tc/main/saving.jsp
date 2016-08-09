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
									<p>你有沒有預備一筆應急錢？</p>
								</div>
							
								<div class="qAnsContainer normalPadd deepColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="y" type="radio" name="whethersaving_radio" id="whethersaving_radio1" class="css-checkbox" />
												<label for="whethersaving_radio1" class="css-label radGroup3">
													<span>有</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="n" type="radio" name="whethersaving_radio" id="whethersaving_radio2" class="css-checkbox" />
												<label for="whethersaving_radio2" class="css-label radGroup3">
													<span>沒有</span>
												</label>
											</div>
											
										</div>
									</div>
								
								</div>
						</div>
							
							<div class="qBox forpadbottom dum flag">
								<div class="qTitle">
									<div class="qTitleImg"></div>
									<p>如果你突然因病或受傷而未能工作六個月，你還有能力應付生活上的開支嗎，例如繳付賬單？</p>
								</div>
							
								<div class="qAnsContainer normalPadd shallowColor">
								
									<div class="qAns">
										<div class="cbContainer marStatus">
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="1" type="radio" name="sickpayment_radio" id="sickpayment_radio1" class="css-checkbox" />
												<label for="sickpayment_radio1" class="css-label radGroup3">
													<span>有能力應付，我有儲蓄或其他收入來源</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="2" type="radio" name="sickpayment_radio" id="sickpayment_radio2" class="css-checkbox" />
												<label for="sickpayment_radio2" class="css-label radGroup3">
													<span>我的開支將由家人或父母負擔</span>
												</label>
											</div>
											
											<div class="radioGroup resetMargin">
												<input onclick="change_saving();" value="3" type="radio" name="sickpayment_radio" id="sickpayment_radio3" class="css-checkbox" />
												<label for="sickpayment_radio3" class="css-label radGroup3">
													<span>我可能會陷入財政困難</span>
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
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
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
   		 xmlhttp6.open("post", "<%=request.getContextPath() %>/admin/iec_action_s6?whethersaving="+whethersaving+"&sickpayment="+sickpayment, true);
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
						