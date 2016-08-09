var fontFamily = 'Gotham Rounded A';

numberWithCommas = function(x){
	x = String(x).replace(',','');
	x = Number(x).toFixed(1);
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

isInt = function(n){
	return n % 1 === 0;
}

preCalulate = function(callback){
	callback = callback || function(){};
	nwd = {
		grossSalary: 0,
		extraIncome: 0,
		grossExpenses: 0,
		incomeTax: 0,
		liquidCash: 0,
		liquidSavings: 0,
		liquidCurrent: 0,
		liquidFixed: 0,
		liquidOther: 0,
		investmentProperties: 0,
		investmentMpf: 0,
		investmentInsurance: 0,
		investmentFunds: 0,
		investmentStocks: 0,
		investmentBonds: 0,
		investmentOther: 0,
		personalResidential: 0,
		personalJewellery: 0,
		personalCar: 0,
		personalUse: 0,
		liabilitiesMortgage: 0,
		liabilitiesQuestion1: 0,
		liabilitiesCarLoan: 0,
		liabilitiesQuestion2: 0,
		liabilitiesCredit: 0,
		liabilitiesOverdraft: 0,
		liabilitiesOtherLoan: 0,
		liabilitiesQuestion3: 0
	};  //Net Worth Data
	$('input').each(function(){
		//console.log(this.name, Number(this.value), numberWithCommas(Number(this.value)));
		if(typeof this.value === 'string'){
			nwd[this.name] = Number(this.value.replace(/,/g, ''));
		}else{
			nwd[this.name] = Number(this.value);
		}
	})
	monthlyExpense		=	(nwd.grossExpenses/12);
	liquidAssets		=	(nwd.liquidCash+nwd.liquidSavings+nwd.liquidCurrent+nwd.liquidFixed+nwd.liquidOther);
	liquidRatio			=	(liquidAssets/monthlyExpense) ? (liquidAssets/monthlyExpense).toFixed(2) : 0;

	monthlyLiabilities	=	(nwd.liabilitiesQuestion1+nwd.liabilitiesQuestion2+nwd.liabilitiesCredit+nwd.liabilitiesOverdraft+nwd.liabilitiesQuestion3);
	monthlyGrossIncome	=	((nwd.grossSalary+nwd.extraIncome)/12);
	debtServicingRatio	=	((monthlyLiabilities/monthlyGrossIncome)*100).toFixed(0);

	surplus				=	(nwd.grossSalary+nwd.extraIncome-nwd.grossExpenses-nwd.incomeTax);
	incomeAfterTax		=	(nwd.grossSalary+nwd.extraIncome-nwd.incomeTax);
	savingsRatio		=	(surplus/incomeAfterTax*100).toFixed(0);

	liquidRatio = isInt(liquidRatio) ? Number(liquidRatio).toFixed(0) : liquidRatio;
	debtServicingRatio = isInt(debtServicingRatio) ? Number(debtServicingRatio).toFixed(0) : debtServicingRatio;
	savingsRatio = isInt(savingsRatio) ? Number(savingsRatio).toFixed(0) : savingsRatio;

	totalAssets = (nwd.liquidCash+nwd.liquidSavings+nwd.liquidCurrent+nwd.liquidFixed+nwd.liquidOther+nwd.investmentProperties+nwd.investmentMpf+nwd.investmentInsurance+nwd.investmentFunds+nwd.investmentStocks+nwd.investmentBonds+nwd.investmentOther+nwd.personalResidential+nwd.personalJewellery+nwd.personalCar+nwd.personalUse);
	totalLiabilities = (nwd.liabilitiesMortgage+nwd.liabilitiesCarLoan+nwd.liabilitiesCredit+nwd.liabilitiesOverdraft+nwd.liabilitiesOtherLoan);
	totalNetWorth = (parseFloat(totalAssets)-parseFloat(totalLiabilities));

	liquidRatioMissing = false;
	debtServicingRatioMissing = false;
	savingsRatioMissing = false;

	if(isNaN(liquidRatio) || liquidRatio == 'Infinity' || liquidRatio == 0){
		liquidRatioMissing = true;
		liquidRatio = 0;
	}
	if(isNaN(debtServicingRatio) || debtServicingRatio == 'Infinity'){
		debtServicingRatioMissing = true;
		debtServicingRatio = 100;
	}
	if(isNaN(savingsRatio) || savingsRatio == 'Infinity'){
		savingsRatioMissing = true;
		savingsRatio = 0;
	}

	liquidRatioScore = 0;
	debtServicingRatioScore = 0;
	savingsRatioScore = 0;

	if(liquidRatio >= 6){
		liquidRatioScore = 5;
	}
	else if(liquidRatio >= 5){
		liquidRatioScore = 4;
	}
	else if(liquidRatio >= 3){
		liquidRatioScore = 3;
	}
	else if(liquidRatio >= 2){
		liquidRatioScore = 2;
	}
	else if(liquidRatio >= 1){
		liquidRatioScore = 1;
	}
	else{
		liquidRatioScore = 0;
	}

	if(debtServicingRatio < 5){
		debtServicingRatioScore = 5;
	}
	else if(debtServicingRatio < 10){
		debtServicingRatioScore = 4;
	}
	else if(debtServicingRatio < 20){
		debtServicingRatioScore = 3;
	}
	else if(debtServicingRatio < 30){
		debtServicingRatioScore = 2;
	}
	else if(debtServicingRatio < 40){
		debtServicingRatioScore = 1;
	}
	else{
		debtServicingRatioScore = 0;
	}

	if(savingsRatio >= 40){
		savingsRatioScore = 5;
	}
	else if(savingsRatio >= 30){
		savingsRatioScore = 4;
	}
	else if(savingsRatio >= 20){
		savingsRatioScore = 3;
	}
	else if(savingsRatio >= 10){
		savingsRatioScore = 2;
	}
	else if(savingsRatio >= 5){
		savingsRatioScore = 1;
	}
	else{
		savingsRatioScore = 0;
	}

	radarGraphURL = savingsRatioScore+'_'+liquidRatioScore+'_'+debtServicingRatioScore+'.jpg';
	var radarImage = new Image();
	radarImage.onload = function(){
		document.getElementById("radar").src = this.src;
		ableToExport = true;
		callback();
	}
	radarImage.onerror = function(){
		ableToExport = true;
		callback();
	}
	radarImage.src = '../images/radar/'+radarGraphURL;

}

ableToExport = false;
preGenerated = false;

$(document).ready(function(){
	if(!/(MSIE|Trident\/7.0)/gi.test(navigator.userAgent)){
		preGenerate(1);
		$('input').change(function(){
			preGenerate(1);
		})
		$(".slider").on("slidestop", function(event, ui) {
		    preGenerate(1);
		});
	}else{
		$('.icoPrint').attr('target', '_self');
		$('.icoPdf').attr('target', '_self');
	}
})

preGenerate = function(pageCount){
	preGenerated = true;
	//if(/safari/gi.test(navigator.userAgent)){
		pageCount = pageCount || 1;
		ableToExport = false;
		preCalulate(function(){
			renderCanvasCal();
			renderCanvasResult();
			pdf = new jsPDF('p', 'in', [10, 14.14]);
			pdf.addImage(document.getElementById('canvas-cal').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
			if(pageCount == 2){
				pdf.addPage();  //To result page
				pdf.addImage(document.getElementById('canvas-result').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
			}
			if(pageCount == 1){
				$('.icoPrint')[0].setAttribute('href', pdf.output('datauristring'));
				if(/safari/gi.test(navigator.userAgent) && !/chrome/gi.test(navigator.userAgent)){
					$('.icoPdf')[0].setAttribute('href', pdf.output('datauristring'));
				}
			}else if(pageCount == 2){
				$('.icoPrint')[1].setAttribute('href', pdf.output('datauristring'));
				if(/safari/gi.test(navigator.userAgent) && !/chrome/gi.test(navigator.userAgent)){
					$('.icoPdf')[1].setAttribute('href', pdf.output('datauristring'));
				}
			}
		});
	//}
}

exportPDF = function(pageCount){
	pageCount = pageCount || 1;
	ableToExport = false;
	preCalulate(function(){
		renderCanvasCal();
		renderCanvasResult();
		//pdf = new jsPDF('p', 'pt', [960, 1358]);
		pdf = new jsPDF('p', 'in', [10, 14.14]);
		//pdf = new jsPDF('p', 'pt', 'a4');
		pdf.addImage(document.getElementById('canvas-cal').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
		//pdf.addImage(document.getElementById('canvas-cal').toDataURL(), 'JPEG', 0, 0, 960, 1358);  //HKIEC Logo
		if(pageCount == 2){
			pdf.addPage();  //To result page
			pdf.addImage(document.getElementById('canvas-result').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
		}
		//pdf.addImage(document.getElementById('canvas-cal').toDataURL(), 'JPEG', 0, 0, 960, 1358);  //HKIEC Logo
		//pdf.output('datauri');
		if(navigator.userAgent.match(/(MSIE|Trident\/7.0)/gi)){
			if(confirm('Please download the pdf file and print the document.')){
				exportAndSaveToPDF(pageCount);
			}
		}else{
			if(!preGenerated){
				if(/safari/gi.test(navigator.userAgent) && !/chrome/gi.test(navigator.userAgent)){

				}else{
					pdf.output('dataurlnewwindow');
				}
			}
		}
	});
}

exportAndSaveToPDF = function(pageCount){
	pageCount = pageCount || 1;
	ableToExport = false;
	preCalulate(function(){
		renderCanvasCal();
		renderCanvasResult();
		//pdf = new jsPDF('p', 'pt', [960, 1358]);
		pdf = new jsPDF('p', 'in', [10, 14.14]);
		//pdf = new jsPDF('p', 'pt', 'a4');
		pdf.addImage(document.getElementById('canvas-cal').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
		//pdf.addImage(document.getElementById('canvas-cal').toDataURL(), 'JPEG', 0, 0, 960, 1358);  //HKIEC Logo
		if(pageCount == 2){
			pdf.addPage();  //To result page
			pdf.addImage(document.getElementById('canvas-result').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
		}
		//pdf.addImage(document.getElementById('canvas-cal').toDataURL(), 'JPEG', 0, 0, 960, 1358);  //HKIEC Logo
		//pdf.output('datauri');
		var datestamp = String((new Date()).getDate()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getFullYear());
		pdf.save('net_worth_calculator_eng_'+datestamp+'.pdf');
	});
}

renderCanvasCal = function(){
	var c = document.getElementById("canvas-cal");
	var ctx = c.getContext("2d");

	ctx.size = function(style){
		this.font = style;
	}
	ctx.fillColor = function(color){
		this.fillStyle = color;
		return this;
	}
	ctx.rect = function(x, y, w, h){
		this.fillRect(x, y, w, h);
		return this;
	}
	ctx.text = function(x, y, string, style, size, lineHeight){
		style = style || '12px';
		size = size || 0;
		lineHeight = lineHeight || 0;
		this.font = style + ' ' + fontFamily;
		this.fillText(string, x, y+size+((lineHeight-size)/2));
		return this;
	}

	ctx.fillColor("#ffffff").rect(0, 0, 960, 1358);
	//ctx.fillColor("#701C74").rect(0, 0, 960, 25);
	ctx.fillColor("#000000");
	ctx.text(25, 12+200, 'Knowing your net worth is important for assessing your financial situation and achieving your financial goals. This net worth calculator', '13px');
	ctx.text(25, 12+218, 'helps you work out if what you own outweighs what you owe and therefore helping you to check out how good you are at managing', '13px');
	ctx.text(25, 12+236, 'your wealth.', '13px');

	ctx.drawImage(document.getElementById("logo"), 25, 25);
	// ctx.fillColor("#E3E3E3").rect(0, 106, 960, 72);
	ctx.drawImage(document.getElementById("cal"), 300, 118);

	ctx.fillColor("#4b2384");
	baseX1 = 25;
	baseX2 = 316;
	baseX3 = 460;
	baseX4 = baseX1+470;
	baseX5 = baseX2+470;
	baseX6 = baseX3+470;

	ctx.text(370, 126, 'Net worth calculator', 'bold 21px', baseX1, 25);

	ctx.fillColor("#2cb7b4");
	ctx.text(baseX1, 282, 'Gross annual salary', '12px', 15, 18);
	ctx.text(baseX1, 343, 'Annual extra income from', '12px', 15, 18);
	ctx.text(baseX1, 361, 'savings and investment', '12px', 15, 18);
	ctx.text(baseX4, 282, 'Gross annual expenses', '12px', 15, 18);
	ctx.text(baseX4, 350, 'Income tax', '12px', 15, 18);

	ctx.fillColor("#000000");
	ctx.text(baseX2, 282, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.grossSalary)).width, 282, numberWithCommas(nwd.grossSalary), '12px', 15, 18);
	ctx.text(baseX2, 350, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.extraIncome)).width, 350, numberWithCommas(nwd.extraIncome), '12px', 15, 18);
	ctx.text(baseX5, 282, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.grossExpenses)).width, 282, numberWithCommas(nwd.grossExpenses), '12px', 15, 18);
	ctx.text(baseX5, 350, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.incomeTax)).width, 350, numberWithCommas(nwd.incomeTax), '12px', 15, 18);

	ctx.drawImage(document.getElementById("icon_assets"), baseX1, 421);
	ctx.drawImage(document.getElementById("icon_liab"), 505, 421);

	ctx.beginPath();ctx.moveTo(baseX1, 400);ctx.lineTo(940, 400);ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();
	ctx.beginPath();ctx.moveTo(baseX1, 1020+60);ctx.lineTo(940, 1020+60);ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();
	ctx.beginPath();ctx.moveTo(480, 400);ctx.lineTo(480, 1020+60);ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	ctx.fillColor("#4b2384");
	ctx.text(80, 420, 'Assets', '18px', 18, 47);
	ctx.fillColor("#A80002");
	ctx.text(560, 420, 'Liabilities', '18px', 18, 47);

	ctx.fillColor("#40b7ef");
	baseY = 486;
	ctx.text(25, 486, 'Liquid assets', '18px', 18, 24);
	ctx.fillColor("#000000");
	baseY = 486+32;
	br = 30;
	baseX1 = 28;
	baseX2 = 316;
	baseX3 = 460;
	baseX4 = baseX1+470;
	baseX5 = baseX2+470;
	baseX6 = baseX3+470;

	ctx.text(baseX1, baseY+br*0, 'Cash', '12px', 15, 18).text(baseX2, baseY+br*0, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidCash)).width, baseY+br*0, numberWithCommas(nwd.liquidCash), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*1, 'Savings account', '12px', 15, 18).text(baseX2, baseY+br*1, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidSavings)).width, baseY+br*1, numberWithCommas(nwd.liquidSavings), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*2, 'Current account', '12px', 15, 18).text(baseX2, baseY+br*2, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidCurrent)).width, baseY+br*2, numberWithCommas(nwd.liquidCurrent), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*3, 'Fixed deposit', '12px', 15, 18).text(baseX2, baseY+br*3, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidFixed)).width, baseY+br*3, numberWithCommas(nwd.liquidFixed), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*4, 'Other liquid assets', '12px', 15, 18).text(baseX2, baseY+br*4, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidOther)).width, baseY+br*4, numberWithCommas(nwd.liquidOther), '12px', 15, 18);

	ctx.fillColor("#8CAC3D");
	baseY = 618+60;
	ctx.text(baseX1, baseY, 'Investment assets', '18px', 18, 24);
	ctx.fillColor("#000000");
	baseY = baseY+32;
	br = 30;
	ctx.text(baseX1, baseY+br*0, 'Investment properties', '12px', 15, 18).text(baseX2, baseY+br*0, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentProperties)).width, baseY+br*0, numberWithCommas(nwd.investmentProperties), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*1, 'MPF / ORSO / Retirement fund', '12px', 15, 18).text(baseX2, baseY+br*1, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentMpf)).width, baseY+br*1, numberWithCommas(nwd.investmentMpf), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*2, 'Cash value of life insurance', '12px', 15, 18).text(baseX2, baseY+br*2, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentInsurance)).width, baseY+br*2, numberWithCommas(nwd.investmentInsurance), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*3, 'Funds', '12px', 15, 18).text(baseX2, baseY+br*3, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentFunds)).width, baseY+br*3, numberWithCommas(nwd.investmentFunds), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*4, 'Stocks', '12px', 15, 18).text(baseX2, baseY+br*4, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentStocks)).width, baseY+br*4, numberWithCommas(nwd.investmentStocks), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*5, 'Bonds', '12px', 15, 18).text(baseX2, baseY+br*5, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentBonds)).width, baseY+br*5, numberWithCommas(nwd.investmentBonds), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*6, 'Other investment assets', '12px', 15, 18).text(baseX2, baseY+br*6, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentOther)).width, baseY+br*6, numberWithCommas(nwd.investmentOther), '12px', 15, 18);

	ctx.fillColor("#ED943A");
	baseY = 866+60;
	ctx.text(baseX1, baseY, 'Personal assets', '18px', 18, 24);
	ctx.fillColor("#000000");
	baseY = baseY+32;
	br = 30;
	ctx.text(baseX1, baseY+br*0, 'Residential property', '12px', 15, 18).text(baseX2, baseY+br*0, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalResidential)).width, baseY+br*0, numberWithCommas(nwd.personalResidential), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*1, 'Jewellery, watches and other accessories', '12px', 15, 18).text(baseX2, baseY+br*1, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalJewellery)).width, baseY+br*1, numberWithCommas(nwd.personalJewellery), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*2, 'Car', '12px', 15, 18).text(baseX2, baseY+br*2, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalCar)).width, baseY+br*2, numberWithCommas(nwd.personalCar), '12px', 15, 18);
	ctx.text(baseX1, baseY+br*3, 'Other assets for personal use', '12px', 15, 18).text(baseX2, baseY+br*3, 'HKD', '12px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalUse)).width, baseY+br*3, numberWithCommas(nwd.personalUse), '12px', 15, 18);


/**************
 *  Liab Column
 */
	ctx.fillColor("#000000");
	baseX1 = 28;
	baseX2 = 316;
	baseX3 = 460;
	baseX4 = baseX1+470;
	baseX5 = baseX2+470;
	baseX6 = baseX3+470;
	baseY = 518;
	br = 30;

	ctx.text(baseX4, 518, 'Outstanding mortgage loan', '12px', 15, 18);

	ctx.text(baseX4+15, baseY+br*1, 'How much is your monthly repayment', '12px', 15, 18);
	ctx.text(baseX4+15, baseY+br*1+18, 'on this mortgage loan?', '12px', 15, 18);

	ctx.text(baseX4, baseY+br*2+18, 'Outstanding car loan', '12px', 15, 18);

	ctx.text(baseX4+15, baseY+br*3+18, 'How much is your monthly repayment', '12px', 15, 18);
	ctx.text(baseX4+15, baseY+br*3+18*2, 'on this car loan?', '12px', 15, 18);

	ctx.text(baseX4, baseY+br*4+18*2, 'Outstanding credit card', '12px', 15, 18);

	ctx.text(baseX4, baseY+br*5+18*2, 'Outstanding overdraft', '12px', 15, 18);

	ctx.text(baseX4, baseY+br*6+18*2, 'Other loan(s)', '12px', 15, 18);

	ctx.text(baseX4+15, baseY+br*7+18*2, 'How much is your monthly repayment', '12px', 15, 18);
	ctx.text(baseX4+15, baseY+br*7+18*3, 'on these loans?', '12px', 15, 18);

	ctx.text(baseX5, 518, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesMortgage)).width, 518, numberWithCommas(nwd.liabilitiesMortgage), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*1, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesQuestion1)).width, baseY+br*1, numberWithCommas(nwd.liabilitiesQuestion1), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*2+18, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesCarLoan)).width, baseY+br*2+18, numberWithCommas(nwd.liabilitiesCarLoan), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*3+18, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesQuestion2)).width, baseY+br*3+18, numberWithCommas(nwd.liabilitiesQuestion2), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*4+18*2, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesCredit)).width, baseY+br*4+18*2, numberWithCommas(nwd.liabilitiesCredit), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*5+18*2, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesOverdraft)).width, baseY+br*5+18*2, numberWithCommas(nwd.liabilitiesOverdraft), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*6+18*2, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesOtherLoan)).width, baseY+br*6+18*2, numberWithCommas(nwd.liabilitiesOtherLoan), '12px', 15, 18);
	ctx.text(baseX5, baseY+br*7+18*2, 'HKD', '12px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesQuestion3)).width, baseY+br*7+18*2, numberWithCommas(nwd.liabilitiesQuestion3), '12px', 15, 18);

	ctx.drawImage(document.getElementById("dot"), baseX4+2, baseY+br*1+8);
	ctx.drawImage(document.getElementById("dot"), baseX4+2, baseY+br*3+18+8);
	ctx.drawImage(document.getElementById("dot"), baseX4+2, baseY+br*7+18*2+8);

	ctx.drawImage(document.getElementById("icon_totalAssets"), 200, 1033+60);
	ctx.drawImage(document.getElementById("icon_totalLiab"), 658, 1033+60);
	ctx.drawImage(document.getElementById("bg_total"), -6, 1204);
	ctx.fillColor("#F9F9F9").rect(0, 1245, 960, 113);


	ctx.fillColor("#4b2384").text(96, 1152+30, 'Total assets:', '18px', 18, 28);
	ctx.fillColor("#4b2384").text(224, 1149+30, 'HKD '+numberWithCommas(totalAssets), '20px', 25, 28);


	ctx.fillColor("#A80002").text(546, 1152+30, 'Total liabilities:', '18px', 18, 28);
	ctx.fillColor("#A80002").text(695, 1149+30, 'HKD '+numberWithCommas(totalLiabilities), '20px', 25, 28);



	txt = 'Your total net worth: HKD '+numberWithCommas(totalNetWorth);
	if(totalNetWorth >= 0){
		ctx.fillColor('#4b2384').size('45px');
	}else{
		ctx.fillColor('#ff0000').size('45px');
	}
	ctx.text((650-ctx.measureText(txt).width)/2, 1270, txt, '35px', 45, 48);

	ctx.fillColor("#000000");
	var datestamp = String((new Date()).getDate()+'/'+((new Date()).getMonth()+1)+'/'+(new Date()).getFullYear());
	ctx.text(865, 50, datestamp);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

renderCanvasResult = function(){
	var c = document.getElementById("canvas-result");
	var ctx = c.getContext("2d");

	ctx.size = function(style){
		this.font = style;
	}
	ctx.fillColor = function(color){
		this.fillStyle = color;
		return this;
	}
	ctx.rect = function(x, y, w, h){
		this.fillRect(x, y, w, h);
		return this;
	};

	ctx.text = function(x, y, string, style, size, lineHeight){
		style = style || '12px';
		size = size || 0;
		lineHeight = lineHeight || 0;
		this.font = style + ' ' + fontFamily;
		this.fillText(string, x, y+size+((lineHeight-size)/2));
		return this;
	};

	ctx.fillColor("#ffffff").rect(0, 0, 960, 1358);

	ctx.drawImage(document.getElementById("logo"), 25, 25);
	ctx.fillColor("#2cb7b4").rect( 0, 126, 960, 36 );

	baseX1 = 25;
	baseX2 = 316;
	baseX3 = 460;
	baseX4 = baseX1+470;
	baseX5 = baseX2+470;
	baseX6 = baseX3+470;

	baseY = 590;

	ctx.fillColor("#4b2384");
	ctx.text(baseX1, 126, 'How good are you at managing your wealth?', '18px', 25, 25);

	ctx.fillColor("#000000");
	ctx.text( baseX1, 12+180, 'There are many indicators that help illustrate your wealth management status; some key elements are your emergency fund, debt');
	ctx.text( baseX1, 12+198, 'management and money management.');

	ctx.drawImage(document.getElementById("bg_radar"), 163, 254);
	ctx.drawImage(document.getElementById("radar"), 351, 254);

	ctx.drawImage( document.getElementById("bg_total"), -6, 1204 );
	ctx.fillColor("#F9F9F9").rect(0, 1245, 960, 113);

	ctx.beginPath();ctx.moveTo( baseX1, baseY );ctx.lineTo( 940, baseY );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	// fund
	ctx.drawImage( document.getElementById("fund"), baseX1, baseY + 15 );
	ctx.fillColor("#7bb815").text( baseX1 + 45, ( baseY + 15 - 8 ), 'Emergency fund', '21px', 25, 34);

	if( liquidRatioMissing ){
		ctx.font='18px';
		ctx.fillColor("#ff0000").text( ( baseX1 + 325 ), ( baseY + 19 ), 'Please input your income and expenses.', '18px', 18, 18);
	}else{
		ctx.font='18px';
		ctx.fillColor("#7bb815").text( ( 935 - ctx.measureText('Your liquidity ratio is').width - ctx.measureText(liquidRatio).width ), ( baseY + 13 ), 'Your liquidity ratio is', '18px', 25, 25);
		ctx.font='bold 25px';
		ctx.fillColor("#76B310").text( ( 935 - 28 - ctx.measureText( liquidRatio ).width ), ( baseY + 13 ), liquidRatio, '25px', 25, 25);
	}

	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 ), 'The liquidity ratio is calculated by dividing your liquid assets by monthly expense. This ratio can be interpreted as having sufficient funds reserved for', '12px', 13, 16);
	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 16 ), 'emergency use when unexpected event occurs. It is recommended that your emergency fund should cover between three to six months of your living ', '12px', 13, 16);
	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 32 ), 'expenses. If your liquidity ratio is below 3, it means that your emergency fund may not be adequate to meet your needs.  You should consider saving ', '12px', 13, 16);
	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 48 ), 'more; or accessing an emergency fund from other sources such as family members and debt facilities.', '12px', 13, 16);

	ctx.beginPath();ctx.moveTo( baseX1, ( baseY + 130 ) );ctx.lineTo( 940, ( baseY + 130 ) );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	baseY += 130;

	// debt
	ctx.drawImage(document.getElementById("debt"), baseX1, ( baseY + 15 ) );
	ctx.fillColor("#ED943A").text( baseX1 + 45, ( baseY + 15 - 8 ), 'Debt management', '21px', 25, 34);

	if( debtServicingRatioMissing ){
		ctx.font='18px';
		ctx.fillColor("#ff0000").text( ( baseX1 + 325 ), ( baseY + 19 ), 'Please input your income and expenses.', '18px', 18, 18);
	}else{
		ctx.font='18px';
		console.log( ctx.measureText('Your debt servicing ratio is').width - ctx.measureText(debtServicingRatio+'%').width );
		ctx.fillColor("#ED943A").text( ( 935 - ctx.measureText('Your debt servicing ratio is ').width - ctx.measureText(debtServicingRatio).width ), ( baseY + 13 ), 'Your debt servicing ratio is', '18px', 25, 25);
		ctx.font='bold 25px';
		ctx.fillColor("#EA8310").text( ( 935 - 28 - ctx.measureText(debtServicingRatio+'%').width ), ( baseY + 13 ), debtServicingRatio+'%', '25px', 25, 25);
	}

	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 ), 'Debt servicing ratio is the percentage of your gross monthly income that goes towards paying debts and is calculated by dividing your monthly ', '12px', 13, 16);
 	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 16 ), 'liabilities by your gross monthly income. It is essentially the ratio of your monthly debt obligations to your monthly income. Monthly debt obligations ', '12px', 13, 16);
 	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 32 ), 'include all monthly repayments of all debt obligations (eg mortgage loans and all other personal loans). The lower the debt servicing ratio you have, the ', '12px', 13, 16);
 	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 48 ), 'better your debt management status is.', '12px', 13, 16);

 	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 80 ), 'Debt can be a growing problem if not managed properly. Even if you just owe a little, always make payments on time to keep your debt under control.', '12px', 13, 16);
 	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 96 ), 'Additional interest and /or penalty charges can add up quickly if you get behind on repayments.', '12px', 13, 16);

 	ctx.fillColor("#000000").text( baseX1, ( baseY + 50 + 128 ), 'You can consider managing your debts with the following options:', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 152 ) );
	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 144 ), 'Consider reducing the total outstanding debt and interest you have to pay. The repayment period will be shortened and amount of total interest to', '12px', 13, 16);
	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 160 ), 'be paid will be smaller if your monthly payment amount is higher.', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 200 ) );
	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 192 ), 'Pay off your debt as much as you can each month, at least pay the minimum you owe on each loan as this will protect your credit score. If you can', '12px', 13, 16);
	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 208 ), 'afford paying more, pay the loan with the highest interest rate first.', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 248 ) );
	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 240 ), 'Consider consolidating your loans, lines of credit and credit card balances into a single loan with a set repayment schedule.', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 280 ) );
	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 272 ), 'Tell your lender that you’re experiencing financial difficulty. Sometimes, you may be able to extend the term of a loan or arrange to postpone', '12px', 13, 16);
 	ctx.fillColor("#000000").text( baseX1+15, ( baseY + 50 + 286 ), 'repayments for a temporary period.', '12px', 13, 16);

	ctx.beginPath();ctx.moveTo(baseX1, ( baseY + 50 + 318 ) );ctx.lineTo(940, ( baseY + 50 + 318 ) );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	baseY += 50 + 318;

	ctx.drawImage( document.getElementById("money"), baseX1, ( baseY + 15 ) );
	ctx.fillColor("#3fb6ed").text( baseX1 + 45, ( baseY + 15 - 8 ), 'Money management', '21px', 25, 34);
	if( savingsRatioMissing ){
		ctx.font='18px';
		ctx.fillColor("#ff0000").text( ( baseX1 + 325 ), ( baseY + 19 ), 'Please input your income and expenses.', '18px', 18, 18);
	}else{
		ctx.font='18px';
		ctx.fillColor("#3fb6ed").text( ( 935 - ctx.measureText('Your savings ratio is').width-ctx.measureText(savingsRatio+'%').width ), ( baseY + 13 ), 'Your savings ratio is', '18px', 25, 25);
		ctx.font='bold 25px';
		ctx.fillColor("#36B3F3").text( ( 935 - 28 - ctx.measureText(savingsRatio+'%').width ), ( baseY + 13 ), savingsRatio+'%', '25px', 25, 25);
	}

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 ), 'Savings ratio is the proportion of income which has been saved and is calculated by dividing your monthly surplus by your monthly income. ', '12px', 13, 16);
	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 16 ), 'The higher the savings ratio you have, the better your money management status is. Whatever your age or circumstances, it is good practice to', '12px', 13, 16);
	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 32 ), 'work out your goals and start saving as early as you can.', '12px', 13, 16);

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 64 ), 'Here are some tips helping you to save money and budget better:', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 88 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 80 ), 'Reduce non-essential expenses.', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 120 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 112 ), 'Shop around to compare prices at different retail outlets, online and offline.', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 152 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 144 ), 'Start a spending diary to keep track of your spending habits.', '12px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 184 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 176 ), 'Avoid impulse buys. Try to stick to the items on your shopping list.', '12px', 13, 16);

	ctx.fillColor("#000000");
	var datestamp = String((new Date()).getDate()+'/'+((new Date()).getMonth()+1)+'/'+(new Date()).getFullYear());
	ctx.text( 865, 50, datestamp );
}
