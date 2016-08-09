<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%pageCount += 1; %>
						<div class="mBanner">
								<img src="../../images/tc/mBanner.jpg" alt="個人資料" />
							</div>
							<div class = "tabletBanner">
								<img src="../../images/tc/bgOne.png" alt="bg" />	
							</div>

						<form class = "questionContainer" id = "aboutCon" action="#">
						<div class="qBox flag">
					
							
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>你的年齡是？</p>
							</div>
						
							<div class="qAnsContainer timeLinePadd deepColor">
							
								<div class="qAns timeLine">
							
									<div class="radioGroup">
										<input value="1" type="radio" name="radiog" id="radio1" class="css-checkbox" />
										<label for="radio1" class="css-label radGroup1">
											<span>18歲以下</span>
										</label>
										<div class="radioName">
											<span>18歲以下</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="4" type="radio" name="radiog" id="radio2" class="css-checkbox" />
										<label for="radio2" class="css-label radGroup1">
											<span>18-29歲</span>
										</label>
										<div class="radioName">
											<span>18-29歲</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="3" type="radio" name="radiog" id="radio3" class="css-checkbox" />
										<label for="radio3" class="css-label radGroup1">
											<span>30-49歲</span>
										</label>
										<div class="radioName">
											<span>30-49歲</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="2" type="radio" name="radiog" id="radio4" class="css-checkbox" />
										<label for="radio4" class="css-label radGroup1">
											<span>50-64歲</span>
										</label>
										<div class="radioName">
											<span>50-64歲</span>
										</div>
									</div>
									
									<div class="radioGroup">
										<input value="1" type="radio" name="radiog" id="radio5" class="css-checkbox" />
										<label for="radio5" class="css-label radGroup1">
											<span>64歲以上</span>
										</label>
										<div class="radioName">
											<span>64歲以上</span>
										</div>
									</div>
								
								</div>
							
							</div>
						</div>
						
						<div class="qBox dum flag">
					
							
							<div class="qTitle">
								<div class="qTitleImg"></div>
								<p>你的職業是？</p>
							</div>
						
							<div class="qAnsContainer normalPadd shallowColor">
							
								<div class="qAns">
									<div class="leftCol">
										<p class="boxWord mBottomSet">有工作</p>
										
										<div class="cbContainer borderSet">
											<div class="jobType">
												<img src="../../images/tc/ft.png" alt="全職工作/自僱" />
											</div>
											<div class="radioGroup">
												<input  value="4" type="radio" name="jobType_radio" id="jobType_radio1" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio1" class="css-label radGroup2 carLabel">
													<span>全職工作/自僱</span>
												</label>
											</div>
										</div>
										
										<div class="cbContainer borderSet">
											<div class="jobType">
												<img src="../../images/tc/pt.png" alt="兼職工作" />
											</div>
											<div class="radioGroup resetMargin">
												<input  value="3" type="radio" name="jobType_radio" id="jobType_radio4" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio4" class="css-label radGroup2 carLabel">
													<span>兼職工作</span>
												</label>
											</div>
										</div>
									</div>
									
									<div class="rightCol">
										<p class="boxWord mBottomSet">沒有工作</p>
									
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/student.png" alt="學生" />
											</div>
											<div class="radioGroup">
												<input  value="2" type="radio" name="jobType_radio" id="jobType_radio2" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio2" class="css-label radGroup2 carLabel">
													<span>學生</span>
												</label>
											</div>
										</div>
										
																		
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/wife.png" alt="家庭主婦/主夫" />
											</div>
											<div class="radioGroup">
												<input value="2" type="radio" name="jobType_radio" id="jobType_radio3" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio3" class="css-label radGroup2 carLabel">
													<span>家庭主婦/主夫</span>
												</label>
											</div>
										</div>
										
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/retire.png" alt="退休人士" />
											</div>
											<div class="radioGroup resetMargin">
												<input value="1" type="radio" name="jobType_radio" id="jobType_radio5" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio5" class="css-label radGroup2 careerlabel">
													<span>退休人士</span>
												</label>
											</div>
										</div>
										
										<div class="cbContainer">
											<div class="jobType">
												<img src="../../images/tc/wait.png" alt="待業人士" />
											</div>
											<div class="radioGroup resetMargin">
												<input value="1" type="radio" name="jobType_radio" id="jobType_radio6" onclick="jobClick();" class="css-checkbox" />
												<label for="jobType_radio6" class="css-label radGroup2 carLabel">
													<span>待業人士</span>
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
								<p>你的婚姻狀況是？</p>
							</div>
						
							<div class="qAnsContainer normalPadd deepColor">
							
								<div class="qAns">
									<div class="cbContainer marStatus">
										<div class="radioGroup resetMargin">
											<input value="3" type="radio" name="maritalStatus_radio" id="maritalStatus_radio1" class="css-checkbox" />
											<label for="maritalStatus_radio1" class="css-label radGroup3">
												<span>單身</span>
											</label>
										</div>
										
										<div class="radioGroup resetMargin">
											<input value="2" type="radio" name="maritalStatus_radio" id="maritalStatus_radio2" class="css-checkbox" />
											<label for="maritalStatus_radio2" class="css-label radGroup3">
												<span>巳婚/同居</span>
											</label>
										</div>
										
										<div class="radioGroup resetMargin">
											<input value="1" type="radio" name="maritalStatus_radio" id="maritalStatus_radio3" class="css-checkbox" />
											<label for="maritalStatus_radio3" class="css-label radGroup3">
												<span>離婚/分居/喪偶/其他</span>
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
								<p>你有沒有任何子女、父母或配偶需要你提供經濟上的協助？</p>
							</div>
						
							<div class="qAnsContainer normalPadd shallowColor">
							
								<div class="qAns">
									<div class="cbContainer marStatus">
										<div class="radioGroup resetMargin">
											<input onclick="Score();" value="1" type="radio" name="needHelp_radio" id="needHelp_radio1" class="css-checkbox" />
											<label for="needHelp_radio1" class="css-label radGroup4 needHelplabel">
												<span class ="yes">有</span>
											</label>
										</div>
										
										<div class="radioGroup resetMargin">
											<input onclick="Score();" value="2" type="radio" name="needHelp_radio" id="needHelp_radio2" class="css-checkbox" />
											<label for="needHelp_radio2" class="css-label radGroup4 needHelplabel">
												<span class="no">沒有</span>
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