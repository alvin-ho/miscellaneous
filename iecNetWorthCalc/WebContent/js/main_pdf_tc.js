var fontFamily = 'MYuen HK Semibold';

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
		pdf = new jsPDF('p', 'in', [10, 14.14]);

		pdf.addImage(document.getElementById('canvas-cal').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);
		if(pageCount == 2){
			pdf.addPage();  //To result page
			pdf.addImage(document.getElementById('canvas-result').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);
		}
		if(navigator.userAgent.match(/(MSIE|Trident\/7.0)/gi)){
			if(confirm('請先下載再列印。')){
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
		pdf.addImage(document.getElementById('canvas-cal').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);
		//pdf.addImage(document.getElementById('canvas-cal').toDataURL(), 'JPEG', 0, 0, 960, 1358);
		if(pageCount == 2){
			pdf.addPage();  //To result page
			pdf.addImage(document.getElementById('canvas-result').toDataURL('image/jpeg', 1), 'JPEG', 0, 0);  //HKIEC Logo
		}
		//pdf.addImage(document.getElementById('canvas-cal').toDataURL(), 'JPEG', 0, 0, 960, 1358);
		//pdf.output('datauri');
		var datestamp = String((new Date()).getDate()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getFullYear());
		pdf.save('net_worth_calculator_chi_'+datestamp+'.pdf');
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
		style = style || '13px';
		size = size || 0;
		lineHeight = lineHeight || 0;
		this.font = style + ' ' + fontFamily;
		this.fillText(string, x, y+size+((lineHeight-size)/2));
		return this;
	}

	baseX1 = 25;
	baseX2 = 316;
	baseX3 = 440;
	baseX4 = baseX1+470;
	baseX5 = baseX2+470;
	baseX6 = baseX3+470;

	baseY = 112;

	ctx.fillColor("#ffffff").rect(0, 0, 960, 1358);

	// logo
	ctx.drawImage(document.getElementById("logo"), baseX1, 25);

	// title
	ctx.drawImage( document.getElementById("cal"), 340, baseY );
	ctx.fillColor("#4b2384").text( 420, ( baseY + 14 ), '資產淨值計算機', 'bold 25px', 25, 25 );

	baseY += 14;

	ctx.fillColor("#000000");
	ctx.text( baseX1, ( baseY + 70 ), '了解自己的資產淨值對評估你的財務狀況及達成理財目標十分重要。資產淨值計算機能助你計算你所擁有的資產是否多於你所虧欠的債務，', '14px');
	ctx.text( baseX1, ( baseY + 90 ), '助你檢視及有效地管理你的財富。', '14px');

	baseY += 90;

	ctx.fillColor("#2cb7b4");
	ctx.text( baseX1, ( baseY + 35 ), '全年總收入', '13px', 15, 18);
	ctx.text( baseX4, ( baseY + 35 ), '全年總開支', '13px', 15, 18);
	ctx.text( baseX1, ( baseY + 80 ), '儲蓄或投資的額外收入 (以年計)', '13px', 15, 18);
	ctx.text( baseX4, ( baseY + 80 ), '全年入息稅', '13px', 15, 18);

	ctx.fillColor("#000000");
	ctx.text(baseX2, ( baseY + 35 ), '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.grossSalary)).width, ( baseY + 35 ), numberWithCommas(nwd.grossSalary), '13px', 15, 18);
	ctx.text(baseX5, ( baseY + 35 ), '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.grossExpenses)).width, ( baseY + 35 ), numberWithCommas(nwd.grossExpenses), '13px', 15, 18);
	ctx.text(baseX2, ( baseY + 80 ), '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.extraIncome)).width, ( baseY + 80 ), numberWithCommas(nwd.extraIncome), '13px', 15, 18);
	ctx.text(baseX5, ( baseY + 80 ), '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.incomeTax)).width, ( baseY + 80 ), numberWithCommas(nwd.incomeTax), '13px', 15, 18);

	ctx.beginPath();ctx.moveTo( baseX1, ( baseY + 125 ) );ctx.lineTo(940, ( baseY + 125 ) );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();
	var vlineY = ( baseY + 125 );

	baseY += 125;

	ctx.drawImage( document.getElementById("icon_assets"), baseX1, ( baseY + 20 ) );
	ctx.fillColor("#4b2384").text( ( baseX1 + 65 ), ( baseY + 20 ), '資產', '18px', 18, 47);

	ctx.drawImage( document.getElementById("icon_liab"), ( baseX1 + 475 ), ( baseY + 20 ) );
	ctx.fillColor("#A80002").text( ( baseX1 + 475 + 60 ) , ( baseY + 20 ), '債務', '18px', 18, 47);

	ctx.fillColor("#40b7ef").text( baseX1, ( baseY + 85 ), '流動資產', '18px', 18, 24);

	baseY += 85;
	br = 30;

	ctx.fillColor("#000000");
	ctx.text(baseX1, baseY+br*1, '現金', '13px', 15, 18).text(baseX2, baseY+br*1, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidCash)).width, baseY+br*1, numberWithCommas(nwd.liquidCash), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*2, '存款戶口', '13px', 15, 18).text(baseX2, baseY+br*2, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidSavings)).width, baseY+br*2, numberWithCommas(nwd.liquidSavings), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*3, '支票戶口', '13px', 15, 18).text(baseX2, baseY+br*3, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidCurrent)).width, baseY+br*3, numberWithCommas(nwd.liquidCurrent), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*4, '定期存款', '13px', 15, 18).text(baseX2, baseY+br*4, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidFixed)).width, baseY+br*4, numberWithCommas(nwd.liquidFixed), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*5, '其他流動資產', '13px', 15, 18).text(baseX2, baseY+br*5, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.liquidOther)).width, baseY+br*5, numberWithCommas(nwd.liquidOther), '13px', 15, 18);

	/**************
	 *  Liab Column
	*/

	 ctx.text(baseX4, baseY+br*1, '按揭結欠', '13px', 15, 18);
	 ctx.text(baseX4+15,baseY+br*2, '你每月償還多少按揭供款?', '13px', 15, 18);
	 ctx.text(baseX4, baseY+br*3, '汽車按揭', '13px', 15, 18);
	 ctx.text(baseX4+15, baseY+br*4, '你每月償還多少汽車按揭供款?', '13px', 15, 18);
	 ctx.text(baseX4, baseY+br*5, '信用卡結欠', '13px', 15, 18);
	 ctx.text(baseX4, baseY+br*6, '私人透支結欠', '13px', 15, 18);
	 ctx.text(baseX4, baseY+br*7, '其他貸款', '13px', 15, 18);
	 ctx.text(baseX4+15, baseY+br*8, '你每月償還多少款額?', '13px', 15, 18);

	 ctx.text(baseX5, baseY+br*1, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesMortgage)).width, baseY+br*1, numberWithCommas(nwd.liabilitiesMortgage), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*2, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesQuestion1)).width, baseY+br*2, numberWithCommas(nwd.liabilitiesQuestion1), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*3, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesCarLoan)).width, baseY+br*3, numberWithCommas(nwd.liabilitiesCarLoan), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*4, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesQuestion2)).width, baseY+br*4, numberWithCommas(nwd.liabilitiesQuestion2), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*5, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesCredit)).width, baseY+br*5, numberWithCommas(nwd.liabilitiesCredit), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*6, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesOverdraft)).width, baseY+br*6, numberWithCommas(nwd.liabilitiesOverdraft), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*7, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesOtherLoan)).width, baseY+br*7, numberWithCommas(nwd.liabilitiesOtherLoan), '13px', 15, 18);
	 ctx.text(baseX5, baseY+br*8, '港元', '13px', 15, 18).text(baseX6-ctx.measureText(numberWithCommas(nwd.liabilitiesQuestion3)).width, baseY+br*8, numberWithCommas(nwd.liabilitiesQuestion3), '13px', 15, 18);

	 ctx.drawImage(document.getElementById("dot"), baseX4+2, baseY + br*2 + 8 );
	 ctx.drawImage(document.getElementById("dot"), baseX4+2, baseY + br*4 + 8 );
	 ctx.drawImage(document.getElementById("dot"), baseX4+2, baseY + br*8 + 8 );

	baseY += br*5;

	ctx.fillColor("#8CAC3D").text( baseX1, ( baseY + 45 ), '投資項目', '18px', 18, 24);

	baseY += 45;

	ctx.fillColor("#000000");
	ctx.text(baseX1, baseY+br*1, '投資物業', '13px', 15, 18).text(baseX2, baseY+br*1, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentProperties)).width, baseY+br*1, numberWithCommas(nwd.investmentProperties), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*2, '強積金/ 職業退休計劃/ 其他退休計劃', '13px', 15, 18).text(baseX2, baseY+br*2, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentMpf)).width, baseY+br*2, numberWithCommas(nwd.investmentMpf), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*3, '人壽保險現金價值', '13px', 15, 18).text(baseX2, baseY+br*3, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentInsurance)).width, baseY+br*3, numberWithCommas(nwd.investmentInsurance), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*4, '基金', '13px', 15, 18).text(baseX2, baseY+br*4, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentFunds)).width, baseY+br*4, numberWithCommas(nwd.investmentFunds), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*5, '股票', '13px', 15, 18).text(baseX2, baseY+br*5, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentStocks)).width, baseY+br*5, numberWithCommas(nwd.investmentStocks), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*6, '債券', '13px', 15, 18).text(baseX2, baseY+br*6, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentBonds)).width, baseY+br*6, numberWithCommas(nwd.investmentBonds), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*7, '其他投資項目', '13px', 15, 18).text(baseX2, baseY+br*7, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.investmentOther)).width, baseY+br*7, numberWithCommas(nwd.investmentOther), '13px', 15, 18);

	baseY += br*7;

	ctx.fillColor("#ED943A").text(baseX1, ( baseY + 45 ), '個人財產', '18px', 18, 24);

	baseY += 45;

	ctx.fillColor("#000000");
	ctx.text(baseX1, baseY+br*1, '自住物業', '13px', 15, 18).text(baseX2, baseY+br*1, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalResidential)).width, baseY+br*1, numberWithCommas(nwd.personalResidential), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*2, '珠寶首飾，名錶和其他飾物', '13px', 15, 18).text(baseX2, baseY+br*2, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalJewellery)).width, baseY+br*2, numberWithCommas(nwd.personalJewellery), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*3, '車', '13px', 15, 18).text(baseX2, baseY+br*3, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalCar)).width, baseY+br*3, numberWithCommas(nwd.personalCar), '13px', 15, 18);
	ctx.text(baseX1, baseY+br*4, '其他個人財產', '13px', 15, 18).text(baseX2, baseY+br*4, '港元', '13px', 15, 18).text(baseX3-ctx.measureText(numberWithCommas(nwd.personalUse)).width, baseY+br*4, numberWithCommas(nwd.personalUse), '13px', 15, 18);

	baseY += br*4;
	ctx.beginPath();ctx.moveTo( 480, vlineY );ctx.lineTo(480, baseY + 60 );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();
	ctx.beginPath();ctx.moveTo( baseX1, ( baseY + 60 ) );ctx.lineTo( 940, ( baseY + 60 ) );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	baseY += 60;

	ctx.drawImage(document.getElementById("icon_totalAssets"), 209, baseY + 30);
	ctx.drawImage(document.getElementById("icon_totalLiab"), 697, baseY + 30);

	baseY += 100;

	text = '所有資產: ' + '港元 '+numberWithCommas(totalAssets);
	ctx.fillColor("#4b2384").text( baseX1 + ( 480 - text.length*16 )/2, ( baseY + 20 ), '所有資產: ', '18px', 25, 28);
	ctx.fillColor("#4b2384").text( baseX1 + ( 480 - (numberWithCommas(totalAssets).length*16) )/2 + 8, ( baseY + 20 ), '港元 '+numberWithCommas(totalAssets), '25px', 25, 28);


	text = '所有債務: ' + '港元 '+numberWithCommas(totalLiabilities);
	ctx.fillColor("#A80002").text( 510 + ( 480 - text.length*16 )/2, ( baseY + 20 ), '所有債務: ', '18px', 25, 28);
	ctx.fillColor("#A80002").text( 510 + ( 480 - (numberWithCommas(totalLiabilities).length*16) )/2 + 8, ( baseY + 20 ), '港元 '+numberWithCommas(totalAssets), '25px', 25, 28);
	baseY += 24;

	ctx.drawImage(document.getElementById("bg_total"), -6, baseY + 30);
	ctx.fillColor("#F9F9F9").rect(0, 1240, 960, 113);

	baseY += 30;

	txt = '你的總資產淨值: 港元 '+numberWithCommas(totalNetWorth);

	if(totalNetWorth >= 0){
		ctx.fillColor('#4b2384').size('45px');
	}else{
		ctx.fillColor('#ff0000').size('45px');
	}

	ctx.text( ( 960 - txt.length*30 )/2, ( baseY + 60 ), txt, '45px', 45, 48);

	ctx.fillColor("#000000");
	var datestamp = String((new Date()).getDate()+'/'+((new Date()).getMonth()+1)+'/'+(new Date()).getFullYear());
	ctx.text(865, 50, datestamp);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

renderCanvasResult = function(){
	var c = document.getElementById("canvas-result");
	var ctx = c.getContext("2d");

	// savingsRatioMissing = liquidRatioMissing = debtServicingRatioMissing = false;
	// savingsRatio = liquidRatio = debtServicingRatio = '99.99';

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

	ctx.drawImage(document.getElementById("logo"), 25, 25);
	ctx.fillColor("#2cb7b4").rect( 0, 126, 960, 36 );

	baseX1 = 25;
	baseX2 = 316;
	baseX3 = 460;
	baseX4 = baseX1+470;
	baseX5 = baseX2+470;
	baseX6 = baseX3+470;

	baseY = 126;

	ctx.fillColor("#4b2384").text(baseX1, baseY, '你能妥善地管理你的財富嗎？', 'bold 18px', 25, 25);

	ctx.fillColor("#000000");
	ctx.text(baseX1, baseY+66, '坊間有不同的指標可助你了解你的財富管理概況；當中主要指標包括應急錢、債務管理及理財。');

	baseY += 66;

	ctx.drawImage(document.getElementById("bg_radar"), 168, baseY+24 );
	ctx.drawImage(document.getElementById("radar"), 356, baseY+24 );

	ctx.drawImage(document.getElementById("bg_total"), -6, 1204);
	ctx.fillColor("#F9F9F9").rect(0, 1245, 960, 113);

	ctx.beginPath();ctx.moveTo( baseX1, baseY + 364 );ctx.lineTo( 940, baseY + 364 );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	baseY += 364;

	ctx.drawImage(document.getElementById("fund"), baseX1, baseY + 15);
	ctx.fillColor("#7bb815").text(baseX1+45, baseY+15-4, '應急錢', '21px', 25, 34);

	if((liquidRatioMissing)){
		ctx.font='18px';
		ctx.fillColor("#ff0000").text(( baseX1 + 325 ), ( baseY + 20 ), '請輸入你的收入和支出。', '18px', 18, 18);
	}else{
		ctx.font='18px';

		var len = '你的流動性比率是 '.length*17 + liquidRatio.length*14;
		ctx.fillColor("#7bb815").text( 925 - len, ( baseY + 25 ), '你的流動性比率是', '18px', 18, 18);
		ctx.font='bold 25px';
		ctx.fillColor("#76B310").text( ( 925 - liquidRatio.length*14 ), ( baseY + 19 ), liquidRatio, '25px', 25, 25);
	}

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 ), '流動性比率是由你的流動資產除以每月平均開支來計算的。此比率可以看作當有緊急事故發生時，你是否有足夠應急錢以應付所需。建議你的應急錢可應付三', '13px', 13, 16);
	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 16 ), '至六個月生活費用。如果你的流動性比率低於3，則代表你的應急錢可能不足以應付所需。你應該考慮儲蓄更多；或者從其他途徑籌集足夠資金例如，尋求家', '13px', 13, 16);
	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 32), '人的幫助或貸款。', '13px', 13, 16);

	ctx.beginPath();ctx.moveTo( baseX1, ( baseY + 115 ) );ctx.lineTo( 940, ( baseY + 115 ) );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	baseY += 115;

	//debt
	ctx.drawImage(document.getElementById("debt"), baseX1, baseY+15);
	ctx.fillColor("#ED943A").text(baseX1+45, baseY+15-4, '債務管理', '21px', 25, 34);

	if((debtServicingRatioMissing)){
		ctx.font='18px';
		ctx.fillColor("#ff0000").text(( baseX1 + 325 ), ( baseY + 20 ), '請輸入你的收入和支出。', '18px', 18, 18);
	}else{
		ctx.font='18px';
		var len = '供款與入息比率是 '.length*17 + ( debtServicingRatio + '%' ).length*14;
		ctx.fillColor("#ED943A").text( 925-len, ( baseY + 25 ), '供款與入息比率是', '18px', 18, 18);
		ctx.font='bold 25px';
		ctx.fillColor("#EA8310").text( ( 925 - ( debtServicingRatio + '%' ).length*14 ) - 1, ( baseY + 19 ), debtServicingRatio+'%', '25px', 25, 25);
	}

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 ), '供款與入息比率是每月總收入中用來支付債務的百份比，計算方法是由每月的收入除以每月的債務。這個比率亦是你每月總收入中對債務所作出的承擔，每月', '13px', 13, 16);
	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 16 ), '應償還的債務包括你所有的債務還款金額 (例如按揭貸款和所有其他私人貸款)。該供款與入息比率越低時，代表你的債務管理狀況越佳。', '13px', 13, 16);

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 48 ), '若不妥善管理，債務問題將日益擴大。即使欠款微不足道，你亦必須堅持準時還款，避免債務失控。如果你拖欠還款，利息或罰款均會迅速累積。', '13px', 13, 16);

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 80 ), '你可考慮以下建議管理債務：', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 104 ));
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 96 ), '盡量減少總債務結欠和所支付的利息。因為當每月還款額越高，還款期便越短而且所需支付的還款利息總額也越少。', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 136 ));
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 128 ), '每月盡量償還欠款，至少償還每筆貸款的最低還款額，以保護你的信貸評分。如果你有能力增加還款額，你應首先償還利率最高的貸款。', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 168 ));
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 160 ), '考慮合併你的貸款、信用限額及信用卡結餘，變成一筆有固定還款時間表的貸款。', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 200 ));
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 192 ), '告知貸款機構你出現了財政困難。在很多情況下，貸款機構會願意研究你的情況並與你共同解決問題，例如延長貸款期或安排暫時延遲還款。', '13px', 13, 16);

	ctx.beginPath();ctx.moveTo( baseX1, ( baseY + 50 + 224 ) );ctx.lineTo( 940, ( baseY + 50 + 224 ) );ctx.lineWidth=0.5;ctx.strokeStyle='#CCCCCC';ctx.stroke();

	baseY += 50 + 224;

	//money
	ctx.drawImage(document.getElementById("money"), baseX1, ( baseY + 15 ) );
	ctx.fillColor("#3fb6ed").text(baseX1+45, ( baseY + 15 - 4 ), '理財', '21px', 25, 34);
	if((savingsRatioMissing)){
		ctx.font='18px';
		ctx.fillColor("#ff0000").text(( baseX1 + 325 ), ( baseY + 20 ), '請輸入你的收入和支出。', '18px', 18, 18);
	}else{
		ctx.font='18px';
		var len = '你的儲蓄比率是 '.length*17 + ( savingsRatio + '%' ).length*14;
		ctx.fillColor("#3fb6ed").text( 925-len , ( baseY + 25 ), '你的儲蓄比率是', '18px', 18, 18);
		ctx.font='bold 25px';
		ctx.fillColor("#36B3F3").text( ( 925 - ( savingsRatio + '%' ).length*14 ) - 1, ( baseY + 19 ), savingsRatio+'%', '25px', 25, 25);
	}

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 ), '儲蓄比率是你每月總收入中會用作儲蓄的百份比，計算方法是你每月盈餘除以每月收入。越高的儲蓄比率代表你的理財管理狀況越佳。', '13px', 13, 16);

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 32 ), '雖然財務目標會隨人生的不同階段而轉變，但無論你的年紀或環境如何，你都應訂立目標，及早開始儲蓄。', '13px', 13, 16);

	ctx.fillColor("#000000").text(baseX1, ( baseY + 50 + 64 ), '以下貼士有助你節省金錢和妥善制定預算：', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 104 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 96 ), '減少非必要的消費', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 136 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 128 ), '比較不同門市和網上商店的價格', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 168 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 160 ), '記錄每日開支，留意自己的消費習慣', '13px', 13, 16);

	ctx.drawImage(document.getElementById("dot2"), ( baseX1 + 3 ), ( baseY + 50 + 200 ) );
	ctx.fillColor("#000000").text(baseX1+15, ( baseY + 50 + 192 ), '避免一時衝動購物，只購買清單上的貨品', '13px', 13, 16);

	ctx.fillColor("#000000");
	var datestamp = String((new Date()).getDate()+'/'+((new Date()).getMonth()+1)+'/'+(new Date()).getFullYear());
	ctx.text(865, 50, datestamp);
}
