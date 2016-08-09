<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						<div class="mBanner">
							<img src="../../images/tc/mestateplanning.png" alt="" />  <!--mobile banner -->
						</div>
						<div class = "tabletBanner">
								<img src="../../images/tc/estateplanning.png" alt="bg" class = "incomepigbg"/>
						</div>
					
						<form class = "questionContainer" id = "estateplanningCon" action="#">
							<div class="qBox flag">
									<div class="qTitle">
										<div class="qTitleImg"></div>
										<p>Have you made a will?</p>
									</div>
								
									<div class="qAnsContainer normalPadd deepColor">
									
										<div class="qAns">
											<div class="cbContainer marStatus">
												<div class="radioGroup resetMargin">
													<input value="1" onclick="change_planning();" type="radio" name="inheritance_radio" id="inheritance_radio1" class="css-checkbox" />
													<label for="inheritance_radio1" class="css-label radGroup3">
														<span>Yes</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="2" onclick="change_planning();" type="radio" name="inheritance_radio" id="inheritance_radio2" class="css-checkbox" />
													<label for="inheritance_radio2" class="css-label radGroup3">
														<span>No, I have not made one yet.</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="3" onclick="change_planning();" type="radio" name="inheritance_radio" id="inheritance_radio3" class="css-checkbox" />
													<label for="inheritance_radio3" class="css-label radGroup3">
														<span>No, I do not need/will not make a will.</span>
													</label>
												</div>
												
											</div>
										</div>
									
									</div>
							</div>
								
								<div class="qBox dum flag padd">
									<div class="qTitle">
										<div class="qTitleImg"></div>
										<p>Do you keep all your important documents (eg will, statements, tax, insurance policies and birth certificate) in one place?</p>
									</div>
								
									<div class="qAnsContainer normalPadd shallowColor">
									
										<div class="qAns">
											<div class="cbContainer marStatus">
												<div class="radioGroup resetMargin">
													<input value="1" onclick="change_planning();" type="radio" name="inheritancedoc_radio" id="inheritancedoc_radio1" class="css-checkbox" />
													<label for="inheritancedoc_radio1" class="css-label radGroup3">
														<span>Yes, I keep them all together.</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="2" onclick="change_planning();" type="radio" name="inheritancedoc_radio" id="inheritancedoc_radio2" class="css-checkbox" />
													<label for="inheritancedoc_radio2" class="css-label radGroup3">
														<span>No, they are not organised and scattered about the place.</span>
													</label>
												</div>
												
												<div class="radioGroup resetMargin">
													<input value="3" onclick="change_planning();" type="radio" name="inheritancedoc_radio" id="inheritancedoc_radio3" class="css-checkbox" />
													<label for="inheritancedoc_radio3" class="css-label radGroup3">
														<span>No, and I am not sure if I have kept all my documents.</span>
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
 var xmlhttp9;
function change_planning() {
		var contentdiv=getId("result_<%=pageCount %>");
      	 contentdiv.innerHTML="<p style=\"text-align:left;padding:80px 0 0 90px;\">Loading Content ...</p>";
      	 getId("img_<%=pageCount %>").style.display = "none";
      	 
   	     xmlhttp9=createXmlhttp();
   		 xmlhttp9.onreadystatechange = processFunc9;
   		 var inheritancedoc=0;
		 var inheritance=0;
         var chkInheritance = document.getElementsByName("inheritance_radio");
         for(var i=0;i<chkInheritance.length;i++){
            if(chkInheritance[i].checked){
                inheritance=chkInheritance[i].value;
                break;
               }
         }
         var chkInheritancedoc = document.getElementsByName("inheritancedoc_radio");
         for(var i=0;i<chkInheritancedoc.length;i++){
            if(chkInheritancedoc[i].checked){
                inheritancedoc= chkInheritancedoc[i].value;
                break;
               }
         }
   		 xmlhttp9.open("post", "<%=request.getContextPath() %>/admin/iec_action_s9?paslan=eng&inheritance="+inheritance+"&inheritancedoc="+inheritancedoc, true);
   		 xmlhttp9.send(null);
	} 
function processFunc9(){
    	if (xmlhttp9.readyState == 4)
      	  if (xmlhttp9.status == 200) {
        	    var text = xmlhttp9.responseText;
        	    showResult_<%=pageCount %>(text,"s9");
       	 }
	}
-->
</script>

						
			