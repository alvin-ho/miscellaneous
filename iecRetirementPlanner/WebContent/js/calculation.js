function getFinalResult(){
	rpObj["nper1"] = rpObj["retirementAge"] - rpObj["currentAge"]; //From now to retirement
	rpObj["nper2"] = rpObj["mortality"] - rpObj["retirementAge"]; //From retirement to death
	rpObj["totalSavingInvestment"] = getFv(rpObj["nper1"], rpObj["returnRate"]/100, rpObj["monthlyContribution"], rpObj["currentBalance"]);
	
	rpObj["discountedTotalExpenses"] = getDiscountedTotalExp(rpObj["nper1"], rpObj["inflation"]/100, rpObj["monthlyExpensesPV"] , rpObj["expRtnRate"]/100, rpObj["nper2"]);
	
	if(rpObj["retirementSchemes"].indexOf("0")!=-1){
		//MPF
		rpObj["contribution_Rate"] = getContributionRate(rpObj["nature"]);
		rpObj["contribution_Amount"] = getContributionAmount(rpObj["nature"], rpObj["monthlyIncome"], rpObj["MB_VC"]/100, rpObj["employer_VC"]/100, rpObj["monthly_SVC"]);

		var MPFData = getMPFData();
		var ageRange = MPFData["age"];
		var index = 0;
		for(var i=0; i<ageRange.length; i++){
			if(ageRange[i]==rpObj["retirementAge"]){
				index = i;
			}
		}
		rpObj["MPFAccruedBenefit"] = MPFData["MPF_Accumulation"][index];
		
	}
	
	if(rpObj["retirementSchemes"].indexOf("1")!=-1){
		//Other retirement schemes
		rpObj["annualIncome"] = rpObj["monthlySalary"]*12+rpObj["annualBonus"];
		rpObj["discountedTotalGovMonthlyPension"] = getPv(rpObj["nper2"], rpObj["monthlyPension"], rpObj["inflation"]/100);
	}
	
	rpObj["discountedTotalOtherPostRetirementIncome"] = getTotalDiscountedPostRetireIncomeAtRetireAge(rpObj["nper1"], rpObj["inflation"]/100, rpObj["monthlyPostIncomePV"] , rpObj["growthRateOfPostIncome"]/100, rpObj["nper2"]);
	
	rpObj["totalAccumulatedReserve"] = rpObj["MPFAccruedBenefit"] + rpObj["lumpSumPension"] + rpObj["totalSavingInvestment"];
	
	rpObj["totalAmountRequired"] = rpObj["discountedTotalExpenses"] - rpObj["discountedTotalGovMonthlyPension"] - rpObj["discountedTotalOtherPostRetirementIncome"];
	rpObj["isShortfall"] = (Math.round(rpObj["totalAmountRequired"]) == Math.round(rpObj["totalAccumulatedReserve"]))?0:((rpObj["totalAmountRequired"] > rpObj["totalAccumulatedReserve"])?1:2);
	rpObj["shortfall"] = Math.abs(rpObj["totalAccumulatedReserve"] - rpObj["totalAmountRequired"]);
	rpObj["additionalMonthlySaving"] = getPmt(rpObj["nper1"], rpObj["RateToDiscountTheShortfall"]/100, rpObj["shortfall"], 0);
	rpObj["totalAnnualIncome"] = (rpObj["monthlyIncome"]*12+rpObj["annual_Bonus"])+(rpObj["monthlySalary"]*12+rpObj["annualBonus"]);
	rpObj["timesOfAnnualFromShortFall"] = rpObj["shortfall"]/rpObj["totalAnnualIncome"];
		
}

/*
 * The formula of pv (assume that fv = 0, type = 0)
 * pv = (pmt(1+rate*type)*([(1+rate)^nper -1]/rate)) / (1+rate)^nper
 */
function getPv(nper, pmt, rate){
	rate /= 12;
	nper *= 12;
	
	var a = Math.pow((1+rate),nper);
	return (pmt*((a-1)/rate))/a;
	
}

/*
 * The formula of fv (assume that type = 0)
 * fv = Pv*(1+rate)^nper +pmt(1+rate*type)*([(1+rate)^nper -1]/rate)
 */
function getFv(nper, rate, pmt, pv){
	nper *= 12;
	if(rate>0){
		rate /= 12;
		var a = Math.pow((1+rate),nper);
		return pv*a+pmt*((a-1)/rate);
	}else{
		return pv+(pmt*nper);
	}
	
}

/*
 * The formula of pmt (assume that type = 0)
 * pmt = (fv - pv*(1+rate)^nper)/([(1+rate)^nper -1]/rate)
 */
function getPmt(nper, rate, fv, pv){
	nper *= 12;
	if(rate>0){
		rate /= 12;
		var a = Math.pow((1+rate),nper);
		return rate*(fv-pv*a)/(a-1);
	}else{
		return (fv-pv)/nper;
	}
	
}


function getRate(nper, pmt, pv, fv){
	//first guess
	var testTimes = 1;
	var guess = 0.01;
	var result = getFv(nper, guess*12, pmt, pv);
	//console.log("guess : " + guess + ", result : "+result + (Math.abs((result/fv)-1)>0.00001));
	var prevRes = 0;
	var prevGuess = 0;
	while(Math.abs((result/fv)-1)>0.00001 && testTimes < 10000 && guess > 4.16666666666667E-005 && guess < 0.025 ){ //&& testTimes < 5000
		prevRes = result;
		prevGuess = guess;
		if((result/fv)>1){
			guess -= 2.49583333333333E-006;
		}else{
			guess += 2.49583333333333E-006;
		}
		result = getFv(nper, guess*12, pmt, pv);
		//console.log(testTimes+" percent : "+((result/fv)-1)+", guess : " + guess + ", result : "+result + (Math.abs((result/fv)-1)>0.00001));
		if( ((prevRes/fv)-1<0 && (result/fv)-1>0) || ((prevRes/fv)-1>0 && (result/fv)-1<0) ){
			break;
		}
		
		testTimes++;
	}
	
	if(testTimes == 10000){
		return "n/a";
	}else{
		//console.log("result : "+guess*100);
		return guess*100;
	}
}

/*
 * Discounted total retirement expenses at retirement age 
 */
function getDiscountedTotalExp(nper1, inflatRate, pv , expRtnRate, nper2){
	return getDiscountedTotal(nper1, inflatRate, pv , expRtnRate, nper2, "exp");
}

/*
 * Total discounted post retirement income at retirement age
 */
function getTotalDiscountedPostRetireIncomeAtRetireAge(nper1, inflatRate, pv , expRtnRate, nper2){
	return getDiscountedTotal(nper1, inflatRate, pv , expRtnRate, nper2, "inc");
}


/*
 * nper1 = (from now to retirement, in years)
 * nper2 =(from retirement to death, in years)
 * inflatRate = Expected inflation rate
 * pv = Expected monthly expense/income during retirement (present value)
 * fv = Expected monthly expense at retirement start (future value)
 * expRtnRate = Expected investment return rate (post retirement)
 * k = (investment return - inflation rate)/12 
 * Discounted total = fv*((1-Math.pow((1+k),(-n2)))/k)
 */
function getDiscountedTotal(nper1, inflatRate, pv , expRtnRate, nper2, type){
	var fv = getFv(nper1, inflatRate, 0, pv);
	nper2 *= 12;
	if(expRtnRate == inflatRate){
		return fv*nper2;
	}else{
		var diff = type=="exp"?(expRtnRate - inflatRate):(inflatRate - expRtnRate);
		var k = diff/12;
		return fv*((1-Math.pow((1+k),(-nper2)))/k); //=fv*((1-(1+k)^(-nper2))/k)
	}
}


function getContributionRate(eeOrSep){
	return eeOrSep == "EE"?10:5;
}

function getContributionAmount(eeOrSep, monlyIn, mb_vc, e_vc, monly_svc){
	var a = 0;
	var min_ri = 7100;
	var max_ri = 30000;
	var conRate = eeOrSep = "EE"?0.1:0.05;
	if(monlyIn < min_ri){
		a = eeOrSep == "EE"?(monlyIn*conRate/2):0;
	}else{
		a = Math.min(monlyIn,max_ri)*conRate;
	}
	
	return a + monlyIn*(mb_vc+e_vc)+monly_svc;
	
}



function getMPFData(){
	var age = [rpObj["currentAge"]],
	month = [0],
	inflation_Factor = [1],
	month_Income = [rpObj["monthlyIncome"]],
	min_RI = [rpObj["Min_RI"]], 
	max_RI = [rpObj["Max_RI"]],
	new_Contribution_Inflation = [rpObj["contribution_Amount"]],
	MPF_Accumulation = [rpObj["existing_MPF_Balance"]],
	bonus_Value = [rpObj["annual_Bonus"]/(1+(rpObj["income_Increase"]/100))],
	no_Bonus_Income = [rpObj["monthlyIncome"]];
	var i=1;
	while(age[i-1]<rpObj["retirementAge"]){
		age[i] = rpObj["currentAge"]+(month[i-1]+1)/12;
		month[i] = i;
		
		inflation_Factor[i] = (month[i]>12 && month[i]%12==1)?inflation_Factor[i-1]*(1+(rpObj["inflation"]/100)):inflation_Factor[i-1];
		
		bonus_Value[i] = (month[i-1]%12==0)?(1+ (rpObj["income_Increase"]/100) )*bonus_Value[i-1]:bonus_Value[i-1];
		no_Bonus_Income[i] = (age[i]<=rpObj["retirementAge"])?( (month[i]>12 && month[i]%12==1)?(no_Bonus_Income[i-1]*(1+(rpObj["income_Increase"]/100))):no_Bonus_Income[i-1]) : 0;
		month_Income[i] = (age[i]<=rpObj["retirementAge"])?( (month[i]%12==0)?(bonus_Value[i]+no_Bonus_Income[i]):no_Bonus_Income[i] ):0;
		
		min_RI[i] = (month[i]<=(rpObj["Min_Next"]-new Date().getFullYear())*12)?min_RI[i-1]:rpObj["Min_RI"]*Math.pow( (1+rpObj["Min_Factor"]),(Math.floor((month[i-1]-(rpObj["Min_Next"]-new Date().getFullYear())*12)/(rpObj["Min_Interval"]*12))+1));
		max_RI[i] = (month[i]<=(rpObj["Max_Next"]-new Date().getFullYear())*12)?max_RI[i-1]:rpObj["Max_RI"]*Math.pow( (1+rpObj["Max_Factor"]),(Math.floor((month[i-1]-(rpObj["Max_Next"]-new Date().getFullYear())*12)/(rpObj["Max_Interval"]*12))+1));
	
		new_Contribution_Inflation[i] = age[i]<=rpObj["retirementAge"]? ( (rpObj["nature"]=="EE"? ( (month_Income[i]<min_RI[i])? month_Income[i]*(rpObj["contribution_Rate"]/100)/2 : Math.min(month_Income[i],max_RI[i])*(rpObj["contribution_Rate"]/100) ) : ( (month_Income[i]<min_RI[i])? 0 : (Math.min(month_Income[i],max_RI[i])*(rpObj["contribution_Rate"]/100))) ) +month_Income[i]*((rpObj["MB_VC"]/100)+(rpObj["employer_VC"]/100))+(rpObj["monthly_SVC"]) ) :  0;
		MPF_Accumulation[i] = (age[i]<=rpObj["retirementAge"])?(MPF_Accumulation[i-1]*(1+( (rpObj["MPF_Inv_Return"]/100)/12 ))+new_Contribution_Inflation[i]):0;
		i++;
	}
	return {"age":age,
	        "month":month,
	        "inflation_Factor":inflation_Factor,
	        "month_Income":month_Income,
	        "min_RI":min_RI,
	        "max_RI":max_RI,
	        "new_Contribution_Inflation":new_Contribution_Inflation,
	        "MPF_Accumulation":MPF_Accumulation,
	        "bonus_Value":bonus_Value,
	        "no_Bonus_Income":no_Bonus_Income};
}

function getProjectedMPFAccruedBenefits(){
	
}
	

