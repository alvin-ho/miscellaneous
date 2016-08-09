<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						<div class="mBanner">
							<img src="../../images/tc/mfinancial.png" alt="" />  <!--mobile banner -->
						</div>
						<div class = "tabletBanner">
							<img src="../../images/tc/s5bg.jpg" alt="bg" class = "incomepigbg"/>
						</div>

						<form class = "questionContainer" id = "financialgoalCon" action="#">
							<div class="qBox flag">
									<div class="qTitle">
										<div class="qTitleImg"></div>
										<p>你有沒有訂立未來（例如3年）的理財目標？</p>
									</div>
								
									<div class="qAnsContainer normalPadd deepColor">
									
										<div class="qAns">
											<div class="cbContainer marStatus">
												<div class="radioGroup resetMargin">
													<input type="radio" onclick="change_fiancialgoal();" value="y" name="fiancialgoal_radio" id="fiancialgoal_radio1" class="css-checkbox" />
													<label for="fiancialgoal_radio1" class="css-label radGroup3">
														<span class = "yes">有</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input type="radio" onclick="change_fiancialgoal();" value="n" name="fiancialgoal_radio" id="fiancialgoal_radio2" class="css-checkbox" />
													<label for="fiancialgoal_radio2" class="css-label radGroup3">
														<span class = "no">沒有</span>
													</label>
												</div>
												
											</div>
										</div>
									
									</div>
								</div>
								
								<div class="qBox forpadbottom dum flag">
									<div class="qTitle">
										<div class="qTitleImg"></div>
										<p>你有沒有具體計劃如何達成你的理財目標？<span class = "hints"> (你不須回答此問題)</span></p>
									</div>
								
									<div class="qAnsContainer normalPadd shallowColor">
									
										<div class="qAns">
											<div class="cbContainer marStatus">
												<div class="radioGroup resetMargin">
													<input type="radio" onclick="change_fiancialgoal();" value="y" name="howgoal_radio" id="howgoal_radio1" class="css-checkbox" />
													<label for="howgoal_radio1" class="css-label radGroup3">
														<span>有</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input type="radio" onclick="change_fiancialgoal();" value="n" name="howgoal_radio" id="howgoal_radio2" class="css-checkbox" />
													<label for="howgoal_radio2" class="css-label radGroup3">
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
 var xmlhttp4;
function change_fiancialgoal() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">載入中 ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp4=createXmlhttp();
   		 xmlhttp4.onreadystatechange = processFunc4;
   		 var fiancialgoal;
         var chkFiancialgoal = document.getElementsByName("fiancialgoal_radio");
         for(var i=0;i<chkFiancialgoal.length;i++){
            if(chkFiancialgoal[i].checked){
                fiancialgoal=chkFiancialgoal[i].value;
                break;
               }
         }
         var howgoal;
         var chkHowgoal = document.getElementsByName("howgoal_radio");
         for(var i=0;i<chkHowgoal.length;i++){
            if(chkHowgoal[i].checked){
                howgoal= chkHowgoal[i].value;
                break;
               }
         }
   		 xmlhttp4.open("post", "<%=request.getContextPath() %>/admin/iec_action_s4?fiancialgoal="+fiancialgoal+"&howgoal="+howgoal, true);
   		 xmlhttp4.send(null);
	} 
function processFunc4(){
    	if (xmlhttp4.readyState == 4)
      	  if (xmlhttp4.status == 200) {
        	    var text = xmlhttp4.responseText;
        	    showResult_<%=pageCount %>(text,"s4"); 
       	 }  
	}
	-->
</script>
						