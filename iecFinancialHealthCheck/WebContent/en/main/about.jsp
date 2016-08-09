<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						<div class="mBanner">
								<img src="../../images/tc/mBanner.jpg" alt="About you" />
							</div>
							<div class = "tabletBanner">
								<img src="../../images/tc/bgOne.png" alt="bg" />	
							</div>

						<form class = "questionContainer" id = "aboutCon" action="#">
						<div class="qBox flag">
					
							
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>How old are you?</p>
							</div>
						
<!--							<div class="qAnsContainer timeLinePadd deepColor">-->
							<div class="qAnsContainer timeLinePadd shallowColor">
							
								<div class="qAns timeLine">
							
									<div class="radioGroup">
										<input value="1" type="radio" name="radiog" id="radio1" class="css-checkbox" />
										<label for="radio1" class="css-label radGroup1">
											<span>Under 18</span>
										</label>
										<div class="radioName">
											<span>Under 18</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="4" type="radio" name="radiog" id="radio2" class="css-checkbox" />
										<label for="radio2" class="css-label radGroup1">
											<span>18-29</span>
										</label>
										<div class="radioName">
											<span>18-29</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="3" type="radio" name="radiog" id="radio3" class="css-checkbox" />
										<label for="radio3" class="css-label radGroup1">
											<span>30-49</span>
										</label>
										<div class="radioName">
											<span>30-49</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="2" type="radio" name="radiog" id="radio4" class="css-checkbox" />
										<label for="radio4" class="css-label radGroup1">
											<span>50-64</span>
										</label>
										<div class="radioName">
											<span>50-64</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="1" type="radio" name="radiog" id="radio5" class="css-checkbox" />
										<label for="radio5" class="css-label radGroup1">
											<span>Over 64</span>
										</label>
										<div class="radioName">
											<span>Over 64</span>
										</div>
									</div>
								
								</div>
							
							</div>
						</div>
						
						<div class="qBox dum flag">
					
							
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>What about work, are you:</p>
							</div>
						
							<div class="qAnsContainer normalPadd shallowColor">
							
								<div class="qAns">
									<div class="leftCol mleftCol">
										<p class="boxWord mBottomSet">Working</p>
										
										<div class="cbContainer borderSet">
											<div class="jobType">
												<img src="../../images/tc/ft.png" alt="Full-time or self-employed" />
											</div>
											<div class="radioGroup">
												<input  value="4" type="radio" name="jobType_radio" id="jobType_radio1" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio1" class="css-label radGroup2 carLabel carLabel">
													<span>Full-time/ <br />self-employed</span>
												</label>
											</div>
										</div>
										
										<div class="cbContainer borderSet">
											<div class="jobType">
												<img src="../../images/tc/pt.png" alt="Part-time" />
											</div>
											<div class="radioGroup resetMargin">
												<input  value="3" type="radio" name="jobType_radio" id="jobType_radio4" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio4" class="css-label radGroup2 carLabel">
													<span>Part-time</span>
												</label>
											</div>
										</div>
									</div>
									
									<div class="rightCol mrightCol">
										<p class="boxWord mBottomSet">Not working</p>
									
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/student.png" alt="Student" />
											</div>
											<div class="radioGroup">
												<input  value="2" type="radio" name="jobType_radio" id="jobType_radio2" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio2" class="css-label radGroup2 carLabel">
													<span>Student</span>
												</label>
											</div>
										</div>
										
																		
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/wife.png" alt="Housewife/House husband" />
											</div>
											<div class="radioGroup">
												<input value="2" type="radio" name="jobType_radio" id="jobType_radio3" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio3" class="css-label radGroup2 carLabel"> 
													<span>Housewife / House husband</span>
												</label>
											</div>
										</div>
										
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/retire.png" alt="Retired" />
											</div>
											<div class="radioGroup resetMargin">
												<input value="1" type="radio" name="jobType_radio" id="jobType_radio5" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio5" class="css-label radGroup2 careerlabel">
													<span>Retired</span>
												</label>
											</div>
										</div>
										
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/wait.png" alt="Unemployed" />
											</div>
											<div class="radioGroup resetMargin">
												<input value="1" type="radio" name="jobType_radio" id="jobType_radio6" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio6" class="css-label radGroup2 carLabel">
													<span>Unemployed</span>
												</label>
											</div>
										</div>
										
									</div>
								</div>
							
							</div>
						</div>
						
						
						<div class="qBox dum flag">
							
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>Are you single or married?</p>
							</div>
						
							<div class="qAnsContainer normalPadd deepColor">
							
								<div class="qAns">
									<div class="cbContainer marStatus">
										<div class="radioGroup resetMargin">
											<input value="3" type="radio" name="maritalStatus_radio" id="maritalStatus_radio1" class="css-checkbox" />
											<label for="maritalStatus_radio1" class="css-label radGroup3">
												<span>Single</span>
											</label>
										</div>
										
										<div class="radioGroup resetMargin">
											<input value="2" type="radio" name="maritalStatus_radio" id="maritalStatus_radio2" class="css-checkbox" />
											<label for="maritalStatus_radio2" class="css-label radGroup3">
												<span>Married / cohabitation</span>
											</label>
										</div>
										
										<div class="radioGroup resetMargin">
											<input value="1" type="radio" name="maritalStatus_radio" id="maritalStatus_radio3" class="css-checkbox" />
											<label for="maritalStatus_radio3" class="css-label radGroup3">
												<span>Divorced / separated / widowhood / others</span>
											</label>
										</div>
									</div>
								</div>
							
							</div>
						</div>
						
						
						<div class="qBox dum flag">
							<!--<div class="qTitleImg qTitle_LongImg"></div>-->
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>Is there anyone who relies on your financial support eg children, parents or spouse?</p>
							</div>
						
							<div class="qAnsContainer normalPadd shallowColor">
							
								<div class="qAns">
									<div class="cbContainer marStatus">
										<div class="radioGroup resetMargin">
											<input onclick="Score();" value="1" type="radio" name="needHelp_radio" id="needHelp_radio1" class="css-checkbox" />
											<label for="needHelp_radio1" class="css-label radGroup4 needHelplabel">
												<span class = "yes">Yes</span>
											</label>
										</div>
										
										<div class="radioGroup resetMargin">
											<input onclick="Score();" value="2" type="radio" name="needHelp_radio" id="needHelp_radio2" class="css-checkbox" />
											<label for="needHelp_radio2" class="css-label radGroup4 needHelplabel">
												<span class = "no">No</span>
											</label>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</form>
<script type="text/javascript">
<!--
function Score() {
   		 var radiog=0;
		 var jobType=0;
		 var maritalStatus=0;
		 var needHelp=0;
		 var sum=0;
         var chkRadiog = document.getElementsByName("radiog");
         for(var i=0;i<chkRadiog.length;i++){
            if(chkRadiog[i].checked){
                radiog=Number(chkRadiog[i].value);
                break;
               }
         }
         var chkJobType = document.getElementsByName("jobType_radio");
         for(var i=0;i<chkJobType.length;i++){
            if(chkJobType[i].checked){
                jobType= Number(chkJobType[i].value);
                break;
               }
         }
         var chkMaritalStatus = document.getElementsByName("maritalStatus_radio");
         for(var i=0;i<chkMaritalStatus.length;i++){
            if(chkMaritalStatus[i].checked){
                maritalStatus= Number(chkMaritalStatus[i].value);
                break;
               }
         }
          var chkNeedHelp = document.getElementsByName("needHelp_radio");
         for(var i=0;i<chkNeedHelp.length;i++){
            if(chkNeedHelp[i].checked){
                needHelp= Number(chkNeedHelp[i].value);
                break;
               }
         }
         sum=radiog+jobType+maritalStatus+needHelp;
         return sum;
	}
	
	function jobClick(){
		var result = "";
		var chkJobType = document.getElementsByName("jobType_radio");
        for(var i=0;i<chkJobType.length;i++){
           if(chkJobType[i].checked){
               var jobType= chkJobType[i].value;
               var jobId = chkJobType[i].id;
               result = jobType+"_"+jobId;
               break;
              }
        }
        return result;
	} 
	-->
</script>	