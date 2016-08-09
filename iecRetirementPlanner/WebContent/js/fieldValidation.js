function updateRpObj(slideNo){
	switch(slideNo){
		case 1:
			rpObj["currentAge"] = parseFloat($("input[name='step1_0']").val());
			rpObj["retirementAge"] = parseFloat($("input[name='step1_1']").val());
			rpObj["mortality"] = parseFloat($("input[name='step1_2']").val());
			rpObj["nper1"] = rpObj["retirementAge"] - rpObj["currentAge"]; //From now to retirement
			rpObj["nper2"] = rpObj["mortality"] - rpObj["retirementAge"]; //From retirement to death
			
			//Step4 data display would be affected by nper1
			if($("input[name='checkBoxType_savingInvest']").is(":checked")){
				$("input[name='step4_3_0']").change();
			}
			updateRpObj(4);
			break;
		case 2:
			rpObj["monthlyExpensesPV"] = ($("input[name='radioType_retireExpense']:checked").val() == "0")?$("input[name='step2_0']").val().replace(/[,$%]/g,""): $(".resTotal_Need").text().replace(/[,$%]/g,"");
			rpObj["inflation"] = parseFloat( $("input[name='step2_2']").val().replace(/[,$%]/g,"") );
			rpObj["expRtnRate"] = parseFloat( $("input[name='step2_3']").val().replace(/[,$%]/g,"") );
			break;
		case 3:
			var schemeOpt = $("input[name='checkBoxType_retireSchemes']:checked");
			rpObj["retirementSchemes"] = "";
			for(var i = 0; i<schemeOpt.length; i++){
				rpObj["retirementSchemes"] += (rpObj["retirementSchemes"]==""?"":",")+schemeOpt[i].value;
			}
			
			if(rpObj["retirementSchemes"].indexOf("0")!=-1){
				//MPF
				rpObj["nature"] = $("input[name='personalType_retireSchemes']:checked").val()==0?"EE":"SEP";
				if($("input[name='step3_0_0']").val().replace(/[,$%]/g,"")!=0){
					rpObj["monthlyIncome"] = parseFloat($("input[name='step3_0_0']").val().replace(/[,$%]/g,""));
				}else if(parseFloat($("input[name='step3_0_6']").val().replace(/[,$%]/g,"")) == 0){
					rpObj["monthlyIncome"] = parseFloat($("input[name='step3_1_0']").val().replace(/[,$%]/g,""));
				}
				
				rpObj["annual_Bonus"] = parseFloat($("input[name='step3_0_1']").val().replace(/[,$%]/g,""));
				rpObj["income_Increase"] = parseFloat($("input[name='step3_0_2']").val().replace(/[,$%]/g,""));
				
				rpObj["MB_VC"] = parseFloat( $("input[name='step3_0_3']").val().replace(/[,$%]/g,"") );
				rpObj["employer_VC"] = parseFloat( $("input[name='step3_0_4']").val().replace(/[,$%]/g,"") );
				rpObj["monthly_SVC"] = parseFloat($("input[name='step3_0_5']").val().replace(/[,$%]/g,""));
				rpObj["existing_MPF_Balance"] = parseFloat($("input[name='step3_0_6']").val().replace(/[,$%]/g,""));
				rpObj["MPF_Inv_Return"] = parseFloat( $("input[name='step3_0_7']").val().replace(/[,$%]/g,"") );
				
			}
			
			if(rpObj["retirementSchemes"].indexOf("1")!=-1){
				//Other retirement schemes
				if($("input[name='step3_1_0']").val().replace(/[,$%]/g,"")!=0){
					rpObj["monthlySalary"] = parseFloat($("input[name='step3_1_0']").val().replace(/[,$%]/g,""));
				}else{
					rpObj["monthlySalary"] = parseFloat($("input[name='step3_0_0']").val().replace(/[,$%]/g,""));
				}
				rpObj["annualBonus"] = parseFloat($("input[name='step3_1_1']").val().replace(/[,$%]/g,""));
				
				rpObj["lumpSumPension"] = parseFloat($("input[name='step3_1_2']").val().replace(/[,$%]/g,""));
				rpObj["monthlyPension"] = parseFloat($("input[name='step3_1_3']").val().replace(/[,$%]/g,""));
			}
			break;
		case 4:
			if(!$("input[name='checkBoxType_savingInvest']").is(":checked")){
				//The user input the upper part
				rpObj["currentBalance"] = parseFloat($("input[name='step4_0']").val().replace(/[,$%]/g,""));
				rpObj["monthlyContribution"] = parseFloat($("input[name='step4_1']").val().replace(/[,$%]/g,""));
				rpObj["returnRate"] = parseFloat( $("input[name='step4_2']").val().replace(/[,$%]/g,"") );
				
				rpObj["totalSavingInvestment"] = getFv(rpObj["nper1"], rpObj["returnRate"]/100, rpObj["monthlyContribution"], rpObj["currentBalance"]);
			}else{
				rpObj["currentBalance"] = parseFloat($("#step4_3_res").text().replace(/[,$%]/g,""));
				rpObj["monthlyContribution"] = parseFloat($("#step4_4_res").text().replace(/[,$%]/g,""));
				rpObj["returnRate"] = parseFloat( $("#step4_5_res").text().replace(/[,$%]/g,"") );

			}

			//Default Rate to discount the shortfall = Expected investment return rate 
			rpObj["RateToDiscountTheShortfall"] = rpObj["returnRate"];
			
			break;
		case 5:
			rpObj["monthlyPostIncomePV"] = parseFloat($("input[name='step5_0']").val().replace(/[,$%]/g,""));
			rpObj["growthRateOfPostIncome"] = parseFloat( $("input[name='step5_1']").val().replace(/[,$%]/g,"") );
			break;
	}
}

function stepValidation(slideNo){
	var result = "";
	var fields = $(".step"+slideNo);
	switch(slideNo){
	    case 1:
	    	for(var i = 0; i <fields.length;i++){
	    		var fieldName = "step"+slideNo+"_"+i;
	    		if(parseFloat(fields[i].value) == 0){
	    			result += (result == ""?"":"\n") + getAlertMsg(fieldName, "empty"); //fieldValidationProperties[fieldName].alertTch;
	    		}else if(fieldValidation(fieldName,0)!=""){
	    			result += (result == ""?"":"\n") + fieldValidation(fieldName,0);
	    		}
	    		
	    	}
	    	result += (result == ""?"":"\n") + step1Validation("year0",0,true);
	    	result += (result == ""?"":"\n") + step1Validation("year1",0,true);
	        break;
	    case 2:
	    	if( ($("input[name='radioType_retireExpense']:checked").val() == null)
	    		|| ($("input[name='radioType_retireExpense']:checked").val() == "0" && $("input[name='step2_0']").val() == "0")
	    		|| ($("input[name='radioType_retireExpense']:checked").val() == "1" && $(".resTotal_Need").text() == "0")
	    	){
	    		result += (result == ""?"":"\n") + getAlertMsg("step2_0", "empty");//fieldValidationProperties["step2_0"].alertTch;
	    	}else if($("input[name='radioType_retireExpense']:checked").val() == "0" && fieldValidation("step2_0",0)!=""){
	    		result += (result == ""?"":"\n") + fieldValidation("step2_0",0);
	    	}else if($("input[name='radioType_retireExpense']:checked").val() == "1"){
	    		fields = $(".step2_1");
	    		for(var i = 0; i <fields.length;i++){
		    		var fieldName = fields[i].name;
		    		if(fieldValidation(fieldName,0)!=""){
		    			result += (result == ""?"":"\n") + fieldValidation(fieldName,0);
		    		}
		    	}
	    	}
	    	fields = $("input[name='step2_2'], input[name='step2_3']");
	    	for(var i = 0; i <fields.length;i++){
	    		var fieldName = fields[i].name;
	    		if(parseFloat(fields[i].value) == 0){
	    			result += (result == ""?"":"\n") + getAlertMsg(fieldName, "empty"); //fieldValidationProperties[fieldName].alertTch;
	    		}else if(fieldValidation(fieldName,0)!=""){
	    			result += (result == ""?"":"\n") + fieldValidation(fieldName,0);
	    		}
	    	}
	    	
	        break;
	    case 3:
	    	if($("input[name='checkBoxType_retireSchemes']:checked").val() == null){
	    		result = lang()=="en"?fieldValidationProperties["checkBoxType_retireSchemes"].alertEng:fieldValidationProperties["checkBoxType_retireSchemes"].alertTch;
	    	}else if($("input[name='checkBoxType_retireSchemes']:checked").val() == "0" || $("input[name='checkBoxType_retireSchemes']:checked").val() == "1"){
	    		if($("input[name='checkBoxType_retireSchemes']:checked").length == 1){
	    			fields = $(".step3_" + $("input[name='checkBoxType_retireSchemes']:checked").val());
	    		}else if($("input[name='checkBoxType_retireSchemes']:checked").length == 2){
	    			fields = $(".step3_0, .step3_1");
	    		}
	    		
	    		for(var i = 0; i <fields.length;i++){
		    		var fieldName = fields[i].name;
		    		if(parseFloat(fields[i].value) == 0 && fieldName == "step3_0_7"){
		    			result += (result == ""?"":"\n") + getAlertMsg(fieldName, "empty"); //fieldValidationProperties[fieldName].alertTch;
			    	}else if(fieldValidation(fieldName,0)!=""){
		    			result += (result == ""?"":"\n") + fieldValidation(fieldName,0);
		    		}
		    	}
	    		
	    		if( ( $("input[name='checkBoxType_retireSchemes']:checked").length == 1 && 
	    			 (($("input[name='checkBoxType_retireSchemes']:checked").val() == "0" && $("input[name='step3_0_0']").val() == "0" && $("input[name='step3_0_6']").val() == "0") || 
	    			  ($("input[name='checkBoxType_retireSchemes']:checked").val() == "1" && $("input[name='step3_1_0']").val() == "0")) )
	    			
	    			  ||($("input[name='checkBoxType_retireSchemes']:checked").length == 2 && 
	    				( ($("input[name='step3_0_0']").val() == "0" && $("input[name='step3_0_6']").val() == "0") || $("input[name='step3_1_0']").val() == "0")) ){
	    			
					var alertField = ($("input[name='checkBoxType_retireSchemes']:checked").length == 2 && $("input[name='step3_0_0']").val() == "0" 
	    								&& $("input[name='step3_0_6']").val() == "0" && $("input[name='step3_1_0']").val() != "0")?"step3_0_6":( ($("input[name='step3_0_0']").val() == "0" && $("input[name='step3_0_6']").val() == "0" && $("input[name='step3_1_0']").val() == "0")?"step3_0_0":"step3_1_0" );
    				
					
					result += (result == ""?"":"\n") + ( alertField == "step3_1_0"? (lang()=="en"?fieldValidationProperties[alertField].alertEng:fieldValidationProperties[alertField].alertTch) : getAlertMsg(alertField, "empty") ); //fieldValidationProperties[fieldName].alertTch;
	    		}
	    		
	    	}
	    	
	        break;
	    case 4:
	    	fields =  $("input[name='checkBoxType_savingInvest']").is(":checked")?$(".step4_3, .step4_4, .step4_5, .step4_c"):$(".step4_t");
	    	for(var i = 0; i <fields.length;i++){
	    		var fieldName = fields[i].id.indexOf("res")!=-1?fields[i].id:fields[i].name;
	    		/*if(fields[i].value == "0" && (fields[i].hasClass("step4_t") || fields[i].hasClass("step4_c")) ){
	    			result += (result == ""?"":"\n") + fieldValidationProperties[fieldName].alertTch;
	    		}else */
	    		if(fieldValidation(fieldName,0)!=""){
	    			result += (result == ""?"":"\n") + fieldValidation(fieldName,0);
	    		}
	    	}
	        break;
	    case 5:
	    	for(var i = 0; i <fields.length;i++){
	    		var fieldName = fields[i].name;
	    		/*if(fields[i].value == "0" && (fields[i].hasClass("step4_t") || fields[i].hasClass("step4_c")) ){
	    			result += (result == ""?"":"\n") + fieldValidationProperties[fieldName].alertTch;
	    		}else */
	    		if(fieldValidation(fieldName,0)!=""){
	    			result += (result == ""?"":"\n") + fieldValidation(fieldName,0);
	    		}
	    	}
	        break;
	    	
	}
	return result;
}

function fieldValidation(fieldName,fieldIndex){
	var result = "";
	if(fieldValidationProperties[fieldName].valiType!=""){
		var valiTypes = fieldValidationProperties[fieldName].valiType.split(",");
		for(var i = 0; i < valiTypes.length; i++){
			var functionName = validationType[valiTypes[i]];
			var subRes = eval(functionName+"(\""+fieldName+"\","+fieldIndex+");");
			if(subRes!=""){
				result += (result == ""?"":"\n") + subRes;
			}//validationType[parseInt(valiTypes[i])]+
		}
	}
	return result;
}

function checkEmpty(fieldName,fieldIndex){
	if($("input[name='"+ fieldName +"']")[fieldIndex].value==""){
		$("input[name='"+ fieldName +"']")[fieldIndex].value = fieldValidationProperties[fieldName].defaultVal;
		var number = $("input[name='"+ fieldName +"']")[fieldIndex].id.replace("mount","");
		$("#sliderBar"+number).slider("option", "value", fieldValidationProperties[fieldName].defaultVal );
	}
	return "";
}

function checkRange(fieldName,fieldIndex){
	var res = "";
	var val = $("input[name='"+ fieldName +"']")[fieldIndex].value.replace(/[,$%]/g,"");
	if(val!=0 && (val < fieldValidationProperties[fieldName].min || val > fieldValidationProperties[fieldName].max) ){
		res = getAlertMsg(fieldName, "outOfRange");
		//"「"+fieldValidationProperties[fieldName].name+"」不能少於"+fieldValidationProperties[fieldName].min+"及不能大於"+fieldValidationProperties[fieldName].max+"。";
	}
	return res;
}

function checkDigit(fieldName){
	//The string can only contain digit, floating point
	//validate(document.getElementById(fieldId));
	return "";
}


function checkDecimal(fieldName,fieldIndex){
	//Check if the input matched the expected decimal place
	var res = 0 ;
	var resStr = "";
	if(fieldValidationProperties[fieldName].decimalPlace == null){
		res = $("input[name='"+ fieldName +"']")[fieldIndex].value.replace(/[,$%]/g,"").split(".")[0];
		resStr = res.toString();
	}else{
		var val = $("input[name='"+ fieldName +"']")[fieldIndex].value == "."?"0":$("input[name='"+ fieldName +"']")[fieldIndex].value.replace(/[,$%]/g,"");
		var place = Math.pow(10, fieldValidationProperties[fieldName].decimalPlace);
		res = Math.round( parseFloat(val)*place )/place;
		//add zeros after rounding
		resStr = addZeros(res.toString(), fieldValidationProperties[fieldName].decimalPlace);
	}
	
	$("input[name='"+ fieldName +"']")[fieldIndex].value = getNumberWithUnit(resStr,fieldValidationProperties[fieldName].unit);
	return "";
}

function checkChecked(fieldName,fieldIndex){
	var res = "";
	if($("input[name='"+fieldName+"']:checked").val() == null){
		res = lang()=="en"?fieldValidationProperties[fieldName].alertEng:fieldValidationProperties[fieldName].alertTch;
	}
	return res;
}


function adjustValueWithUnit(fieldName,fieldIndex){
	var val = getNumberWithUnit($("input[name='"+ fieldName +"']")[fieldIndex].value.toString(), fieldValidationProperties[fieldName].unit);
	$("input[name='"+ fieldName +"']")[fieldIndex].value = val;
}


function getNumberWithUnit(x,unit) {
	x = x.toString().replace(/[,$%]/g,"");
	var res = x;
	if(unit == "$" || unit == ""){
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		res = parts.join(".");
	}else if(unit == "%"){
		res = x + "%";
	}
	
	return res;
}

function addZeros(resStr, decimalPlace){
	//add zeros after rounding
	if(decimalPlace > 0 ){
		if(resStr.indexOf('.')==-1){
			resStr += '.';
		}
		while (resStr.length <= resStr.indexOf('.') + decimalPlace){
			resStr += '0';
		}
	}
	return resStr;
}

function getDefaultDisplayVal(fieldName){
	var res = fieldValidationProperties[fieldName].defaultVal;
	var place = Math.pow(10, fieldValidationProperties[fieldName].decimalPlace);
	res = Math.round( parseFloat(res)*place )/place;
	resStr = addZeros(res.toString(), fieldValidationProperties[fieldName].decimalPlace);
	
	return getNumberWithUnit(resStr,fieldValidationProperties[fieldName].unit);
}

//Add zeros and unit
function getDisplayVal(res,fieldName){
	var resStr = addZeros(res.toString(), fieldValidationProperties[fieldName].decimalPlace);
	return getNumberWithUnit(resStr,fieldValidationProperties[fieldName].unit);
}

function getAlertMsg(fieldName, type){
	type += "_"+lang();
	
	if(type.indexOf("outOfRange")!=-1){
		type += fieldValidationProperties[fieldName].unit == ""?"_age":(fieldValidationProperties[fieldName].unit == "$"?"_dollar":"_percent");
	}
	var alertMsg = alertMsgs[type];
	if(type.indexOf("dollar")!=-1){
		var maxLength = fieldValidationProperties[fieldName].max.toString().length;
		alertMsg = alertMsg.replace("::PLACE::",maxLength);
	}else if(type.indexOf("percent")!=-1){
		alertMsg = alertMsg.replace("::MAX::",fieldValidationProperties[fieldName].max);
	}else if(type.indexOf("age")!=-1){
		alertMsg = alertMsg.replace("::MIN::",fieldValidationProperties[fieldName].min);
		alertMsg = alertMsg.replace("::MAX::",fieldValidationProperties[fieldName].max);
	}
	
	return alertMsg.replace("::FIELDNAME::",lang()=="en"?fieldValidationProperties[fieldName].engName:fieldValidationProperties[fieldName].name);
}

function step1Validation(checkField,fieldIndex,stepValidate){
	var alertMsg = "";
	if(checkField == "year0"){
		if( $("input[name='step1_1']")[fieldIndex].value>0 && $("input[name='step1_0']")[fieldIndex].value>0 && parseInt($("input[name='step1_1']")[fieldIndex].value)>parseInt($("input[name='step1_0']")[fieldIndex].value)){
			$('#describe_year0').text(parseInt($("input[name='step1_1']")[fieldIndex].value)-parseInt($("input[name='step1_0']")[fieldIndex].value));
			if(fieldIndex == 0){
				$(".calcLeft > .animate_GIF > img").attr("src",$(".calcLeft > .animate_GIF > img").attr("src").replace("png","gif"));
			}
		}else if( ($("input[name='step1_1']")[fieldIndex].value>0 && $("input[name='step1_0']")[fieldIndex].value>0 && parseInt($("input[name='step1_1']")[fieldIndex].value)<=parseInt($("input[name='step1_0']")[fieldIndex].value))
				|| ($("input[name='step1_1']")[fieldIndex].value == 0 || $("input[name='step1_0']")[fieldIndex].value == 0)){
			$('#describe_year0').text("__");
			if(fieldIndex == 0){
				$(".calcLeft > .animate_GIF > img").attr("src",$(".calcLeft > .animate_GIF > img").attr("src").replace("gif","png"));
			}
			if(stepValidate && $("input[name='step1_1']")[fieldIndex].value>0 && $("input[name='step1_0']")[fieldIndex].value>0 && parseInt($("input[name='step1_1']")[fieldIndex].value)<=parseInt($("input[name='step1_0']")[fieldIndex].value)){
				alertMsg = lang()=="en"?fieldValidationProperties["describe_year0"].alertEng:fieldValidationProperties["describe_year0"].alertTch; //"「你所預期的退休年齡」不能少於「你現時的年齡」。";
			}
		}
	}else{
		if( $("input[name='step1_2']")[fieldIndex].value>0 && $("input[name='step1_1']")[fieldIndex].value>0 && parseInt($("input[name='step1_2']")[fieldIndex].value)>parseInt($("input[name='step1_1']")[fieldIndex].value)){
			$('#describe_year1').text(parseInt($("input[name='step1_2']")[fieldIndex].value)-parseInt($("input[name='step1_1']")[fieldIndex].value));
			if(fieldIndex == 0){
				$(".calcRight > .animate_GIF > img").attr("src",$(".calcRight > .animate_GIF > img").attr("src").replace("png","gif"));
			}
		}else if( ($("input[name='step1_2']")[fieldIndex].value>0 && $("input[name='step1_1']")[fieldIndex].value>0 && parseInt($("input[name='step1_2']")[fieldIndex].value)<=parseInt($("input[name='step1_1']")[fieldIndex].value)) 
				|| ($("input[name='step1_2']")[fieldIndex].value == 0 || $("input[name='step1_1']")[fieldIndex].value == 0)){
			$('#describe_year1').text("__");
			if(fieldIndex == 0){
				$(".calcRight > .animate_GIF > img").attr("src",$(".calcRight > .animate_GIF > img").attr("src").replace("gif","png"));
			}
			if(stepValidate && $("input[name='step1_2']")[fieldIndex].value>0 && $("input[name='step1_1']")[fieldIndex].value>0 && parseInt($("input[name='step1_2']")[fieldIndex].value)<=parseInt($("input[name='step1_1']")[fieldIndex].value)){ 
				alertMsg = lang()=="en"?fieldValidationProperties["describe_year1"].alertEng:fieldValidationProperties["describe_year1"].alertTch; //"「你所預期的壽命」不能少於「你所預期的退休年齡」。";
			}
		}
	}
	return alertMsg;
}

function MpfAlert(fieldName,fieldIndex){
	var alertCase = 0; //0:No Alert; 1:(MPF + retirementAge<60); 2:(Expected retirement expenses < 0); 3:Both
	if( ( fieldName.indexOf("step1_1")!=-1 && $("input[name='checkBoxType_retireSchemes']:checked").val() == "0" && parseInt($("input[name='step1_1']")[fieldIndex].value) < 65 )
	 || ( fieldName.indexOf("checkBoxType_retireSchemes")!=-1 && $("input[name='checkBoxType_retireSchemes']:checked").val() == "0" && rpObj["retirementAge"] < 65 ) ){
		alertCase = 1 ;
	}

	if(fieldName.indexOf("totalAmountRequired")!=-1 && rpObj["totalAmountRequired"] < 0){
		alertCase = alertCase==1?3:2;
	}

	filedValid_AlertCase(alertCase);
}

