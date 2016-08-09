var rpObj = {
		//Step1 About you
		"currentAge":0,
		"retirementAge":0,
		"mortality":0,
		"nper1":0, 
		"nper2":0,
		
		//Step2 Expenses
		"monthlyExpensesPV":0,
		"inflation":3.3,
		"expRtnRate":5.5,
		//"monthlyExpensesFV":0,
		"discountedTotalExpenses":0,
		
		//Step3 MPF
		"retirementSchemes":"",
		"nature":"EE",
		"monthlyIncome":0,
		"annual_Bonus":0,
		"income_Increase":3.9,
		"contribution_Rate":0.1,
		"MB_VC":0,
		"employer_VC":0,
		"monthly_SVC":0,
		"existing_MPF_Balance":0,
		"MPF_Inv_Return":4.4,
		"contribution_Amount":0,
		"MPFAccruedBenefit":0,
		
		//Constants
		"Min_RI":7100,
		"Min_Factor":0.126,
		"Min_Next":2016,
		"Min_Interval":4,
		"Max_RI":30000,
		"Max_Factor":0.126,
		"Max_Next":2016,
		"Max_Interval":4,
		
		//Step3 Other retirement schemes
		"monthlySalary":0,
		"annualBonus":0,
		"annualIncome":0,
		"lumpSumPension":0,
		"monthlyPension":0,
		"discountedTotalGovMonthlyPension":0,
		
		//Step4 Savings and investments
		"currentBalance":0,
		"monthlyContribution":0,
		"returnRate":0,
		"totalSavingInvestment":0,
		
		//Step5 Other Income
		"monthlyPostIncomePV":0,
		"growthRateOfPostIncome":0,
		"discountedTotalOtherPostRetirementIncome":0,
		
		//Result
		"totalAccumulatedReserve":0,
		"totalAmountRequired":0,
		"isShortfall":0,
		"shortfall":0,
		"RateToDiscountTheShortfall":5.5,
		"additionalMonthlySaving":0,
		"totalAnnualIncome":0,
		"timesOfAnnualFromShortFall":0
		
};

$(function(){
	/*Step 1*/
	
	$('.step1').change(function(){
		var result = fieldValidation(this.name,0);
		if(this.name.indexOf("_0")!=-1){
			result += (result == ""?"":"\n") + step1Validation("year0",0,false);
		}else if(this.name.indexOf("_1")!=-1){
			result += (result == ""?"":"\n") + step1Validation("year0",0,false);
			result += (result == ""?"":"\n") + step1Validation("year1",0,false);
		}else if(this.name.indexOf("_2")!=-1){
			result += (result == ""?"":"\n") + step1Validation("year1",0,false);
		}
		
		if(result!= ""){
			alert(result);
		}
	});
	/*END Step 1*/
	
	/*Step 2*/
	$('.step2').change(function(){
		var result = fieldValidation(this.name,0);
		if($(this).hasClass("step2_1")!=-1){
			var total = 0;
			var subCate = $('.step2_1');
			for(var i = 0 ; i < subCate.length ; i++){
				total += parseInt(subCate[i].value.replace(/[,]/g,""));
			}
			$('.resTotal_Need').text(getNumberWithUnit(total.toString(),"$"));
		}
		if(result!= ""){
			alert(result);
		}
	});
	/*END Step 2*/
	
	/*Step 3*/
	$('.step3').change(function(){
		var result = fieldValidation(this.name,0);
		if(result!= ""){
			alert(result);
		}
	});
	/*END Step 3*/
	
	/*Step 4*/
	$('.step4').change(function(){
		var result = fieldValidation(this.name,0);
		if(this.name.split("_").length > 2){
			var total = 0;
			if(result== ""){
				//Update the total Current balance / Monthly contribution
				var res = 0;
				var unit = "$";
				//if(this.name.split("_")[1] == 3 || this.name.split("_")[1] == 4){
				for(var i = 3 ; i < 5 ; i++){
					var className = "step4_"+i;
					var subCate = $('.'+className);
					total = 0;
					for(var j = 0 ; j < subCate.length ; j++){
						total += parseFloat(subCate[j].value.replace(/[,]/g,""));
					}
					var place = Math.pow(10, fieldValidationProperties[className+"_res"].decimalPlace);
					res = Math.round( parseFloat(total)*place )/place;
					
					$("#"+className+"_res").text(getNumberWithUnit(res.toString(),unit));
				}
				
				//Calculate the sub total saving/investment (sub FV) and sum the total saving/investment (total FV) and save into rpObj
				subCate = $('.step4_6');
				total = 0;
				for(var i = 0 ; i < subCate.length ; i++){
					var pv = parseFloat($("input[name='step4_3_"+subCate[i].name.split("_")[2]+"']").val().replace(/[,$%]/g,""));
					var pmt = parseFloat($("input[name='step4_4_"+subCate[i].name.split("_")[2]+"']").val().replace(/[,$%]/g,""));
					var rate = $("input[name='step4_5_"+subCate[i].name.split("_")[2]+"']").val().replace(/[,$%]/g,"")/100;
					
					subCate[i].value = getFv(rpObj["nper1"], rate, pmt, pv);
					
					total += parseFloat(subCate[i].value);
				}
				$("#step4_6_res").text(total);
				
				rpObj["totalSavingInvestment"] = total;
				
				//Calculate the weighted average expected return rate
				pv = parseFloat($("#step4_3_res").text().replace(/[,$%]/g,""));
				pmt =  parseFloat($("#step4_4_res").text().replace(/[,$%]/g,""));
				//console.log("pv : "+pv+", pmt : "+pmt+", fv : "+total+", rate : "+getRate(rpObj["nper1"] , pmt, pv, total)*12);
				var place = Math.pow(10, fieldValidationProperties["step4_2"].decimalPlace);
				res = Math.round( parseFloat(getRate(rpObj["nper1"] , pmt, pv, total)*12)*place )/place;
				
				$("#step4_5_res").text( getDisplayVal(res,"step4_5_res") );
				$("input[name='step4_2']").val($("#step4_5_res").text());
			}else{
				rpObj["totalSavingInvestment"] = 0;
				$("#step4_3_res").text( getDefaultDisplayVal("step4_3_res") );
				$("#step4_4_res").text( getDefaultDisplayVal("step4_4_res") );
				$("#step4_5_res").text( getDefaultDisplayVal("step4_5_res") );
				$("#step4_6_"+this.name.split("_")[2]).val(0);
				$("#step4_6_res").text(0);
			}
			
		}
		if(result!= ""){
			alert(result);
		}
	});
	/*END Step 4*/
	
	/*Step 5*/
	$('.step5').change(function(){
		var result = fieldValidation(this.name,0);
		
		if(result!= ""){
			alert(result);
		}
	});
	/*END Step 5*/
	
	/*Post Edit in result page*/
	$('.postEdit').change(function(){
		var index = this.name == "res_rate"?0:1;
		var result = "";
		if(fieldValidationProperties[this.name].min>0 &&  this.value == "0"){
			result = getAlertMsg(this.name, "empty");
		}else{
			result = fieldValidation(this.name,index);
			if(this.name.indexOf("step1_0")!=-1 || this.name.indexOf("step1_1")!=-1){
				result += (result == ""?"":"\n") + step1Validation("year0",1,true);
			}
			if(this.name.indexOf("step1_1")!=-1 || this.name.indexOf("step1_2")!=-1){
				result += (result == ""?"":"\n") + step1Validation("year1",1,true);
			}
		}
		
		if(result!= ""){
			alert(result);
			var resStr = addZeros(rpObj[this.id].toString(), fieldValidationProperties[this.name].decimalPlace);
			$(this).val( getNumberWithUnit(resStr,fieldValidationProperties[this.name].unit) );
		}else{
			//Change the value of the field of rpObj and re-calculate the result
			rpObj[this.id] = parseFloat($(this).val().replace(/[,$%]/g,""));
			if(this.id == "returnRate"){
				rpObj["RateToDiscountTheShortfall"] = rpObj[this.id];
			}else if(this.id == "RateToDiscountTheShortfall"){
				rpObj["returnRate"] = rpObj[this.id];
			}

			getFinalResult();
			displayResult();
			postEdit();
			sudoSlider.adjust();

			if(this.id == "retirementAge"){
				MpfAlert("step1_1,totalAmountRequired",1);
			}else{
				MpfAlert("totalAmountRequired",0);
			}
		}
		
	});
	/*END Post Edit in result page*/
});


function postEdit(){
	var postEditFields = $(".postEdit");
	for(var i = 0; i < postEditFields.length; i++){
		var place = Math.pow(10, fieldValidationProperties[postEditFields[i].name].decimalPlace);
		res = Math.round( rpObj[postEditFields[i].id]*place )/place;
		$(postEditFields[i]).val( getDisplayVal(res,postEditFields[i].name) );
		if($(postEditFields[i]).val().length > 16){
			$(postEditFields[i]).attr("style","width:"+ (140+7*( $(postEditFields[i]).val().length-16 )) +"px;");
		}else{
			$(postEditFields[i]).attr("style","");
		}
	}
	
	$(".employType").text( rpObj["nature"] == "EE"? (lang() == "en"?"An employee":"僱員"):(lang() == "en"?"A self-employed person":"自僱人士") );
	
	//Remove mpf or/and other retirement scheme part(s) if the user did not choose before
	if(rpObj["retirementSchemes"].indexOf("0")==-1){
		//remove mpf part
		$("#plan_s3").find("input").val("N/A");
		$("#plan_title_s3, #plan_s3").hide();
	}
	
	if(rpObj["retirementSchemes"].indexOf("1")==-1){
		//remove mpf part
		$("#plan_s4").find("input").val("N/A");
		$("#plan_title_s4, #plan_s4").hide();
	}
}

function displayResult(){
	$("input[name='employType']").val( rpObj["nature"] );
	$("input[name='isShortfall']").val( rpObj["isShortfall"] );
	if(rpObj["isShortfall"]==1){
		//Shortfall
		$("#noResult").hide();
		$("#resultContent").show();
		$("#reserved").text( getNumberWithUnit(Math.round(rpObj["totalAccumulatedReserve"]),"$") );
		$("input[name='reserved']").val( $("#reserved").text() );
		
		$("#required").text( getNumberWithUnit(Math.round(rpObj["totalAmountRequired"]),"$") );
		$("input[name='required']").val( $("#required").text() );
		
		$("#shortfall").text( getNumberWithUnit(Math.round(rpObj["shortfall"]),"$") );
		$("input[name='shortfall']").val( $("#shortfall").text() );
		
		if(rpObj["totalAnnualIncome"] == 0){
			$(".re_top_budget2").hide();
			//$(".re_top").css("padding","50px 0 40px 185px");

			$(".re_top").addClass('pigPad');
			$(".re_remark").hide();
		}else{
			$("#times").text( getNumberWithUnit( (Math.round(rpObj["timesOfAnnualFromShortFall"]*10)/10) , "" ) );
			$("input[name='timesOfAnnualFromShortFall']").val( $("#times").text() );
			$(".re_remark").show();
		}
		$("#additional").text(  getNumberWithUnit(Math.round(rpObj["additionalMonthlySaving"]),"$") );
		$("input[name='additionalMonthlySaving']").val( $("#additional").text() );
		
		$("#nper").text( rpObj["nper1"] );
		
		$("#RateToDiscountTheShortfall").val( getDisplayVal(rpObj["RateToDiscountTheShortfall"],"res_rate") );
		$("input[name='rateToDiscountTheShortfall']").val( $("#RateToDiscountTheShortfall").val() );
	}else{
		//No Shortfall
		if(rpObj["isShortfall"]==0){
			
			$(".re1_header").css("background","url('../../images/"+lang()+"/balance_"+ lang() +".png') no-repeat");
			//$(".re1_money_l, .re1_money_r").css("top","243px");
			$(".re1_money_l").addClass("balance_Left_T");
			$(".re1_money_r").addClass("balance_Right_T");
			
			$(".re1_money_l").removeClass('no_shortfall_Left_T');
			$(".re1_money_r").removeClass('no_shortfall_Right_T');
		
		}else{
			
			$(".re1_header").css("background","url('../../images/"+lang()+"/no_shortfall_"+ lang() +".png') no-repeat");
			//$(".re1_money_l").css("top","295px");
			//$(".re1_money_r").css("top","203px");
			$(".re1_money_l").addClass('no_shortfall_Left_T');
			$(".re1_money_r").addClass('no_shortfall_Right_T');
			
			$(".re1_money_l").removeClass('balance_Left_T');
			$(".re1_money_r").removeClass('balance_Right_T');
			
		}

		$("#resultContent").hide();
		$(".re_remark").hide();
		$("#noResult").show();
		$("#reserved1").text( getNumberWithUnit(Math.round(rpObj["totalAccumulatedReserve"]),"$") );
		$("input[name='reserved']").val( $("#reserved1").text() );
		
		$("#required1").text( getNumberWithUnit(Math.round(rpObj["totalAmountRequired"]),"$") );
		$("input[name='required']").val( $("#required1").text() );
	}
	$(".re1_header, .re_header").css("background-size","contain");
}