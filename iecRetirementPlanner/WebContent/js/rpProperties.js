﻿var fieldValidationProperties = {
		"step1_0" : {valiType:"0,1,2", name:"你現時的年齡", engName:"Your current age",defaultVal:0, slide_min:18, slide_max:110, step:1, min:18, max:110, decimalPlace:null, unit:""},
		"step1_1" : {valiType:"0,1,2", name:"預期退休年齡", engName:"Expected retirement age", defaultVal:0, slide_min:18, slide_max:110, step:1, min:18, max:110, decimalPlace:null, unit:""},
		"step1_2" : {valiType:"0,1,2", name:"預期壽命", engName:"Life expectancy", defaultVal:0, slide_min:18, slide_max:110, step:1, min:18, max:110, decimalPlace:null, unit:""},
		"describe_year0" : {valiType:"", name:"從現在到退休", engName:"From now to retirement", defaultVal:null, min:null, max:null, alertEng:"\"Your expected retirement age\" cannot be smaller than \"Your current age\".", alertTch:"「你所預期的退休年齡」不能少於「你現時的年齡」"},
		"describe_year1" : {valiType:"", name:"退休生活年期", engName:"Retirement life", defaultVal:null, min:null, max:null, alertEng:"\"Your life expectancy\" cannot be smaller than \"Your expected retirement age\".", alertTch:"「你所預期的壽命」不能少於「你所預期的退休年齡」"},
		
		"radioType_retireExpense" : {valiType:"", defaultVal:0, min:null, max:null},
		"step2_0" : {valiType:"0,1,2,3", name:"預期退休生活每月開支", engName:"Expected monthly expenses during retirement", defaultVal:0, slide_min:0, slide_max:200000, step:1000, min:1, max:9999999, decimalPlace:0, unit:"$"},
		"step2_1_0" : {valiType:"0,1,2,3", name:"膳食 開支類別", engName:"Food and drinks", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_1" : {valiType:"0,1,2,3", name:"交通 開支類別", engName:"Transport", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_2" : {valiType:"0,1,2,3", name:"家居 開支類別", engName:"Household", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_3" : {valiType:"0,1,2,3", name:"購物 開支類別", engName:"Shopping", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_4" : {valiType:"0,1,2,3", name:"健康美容 開支類別", engName:"Health and beauty", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_5" : {valiType:"0,1,2,3", name:"生活消閑 開支類別", engName:"Leisure/lifestyle", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_6" : {valiType:"0,1,2,3", name:"保險 開支類別", engName:"Insurance", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step2_1_7" : {valiType:"0,1,2,3", name:"其他 開支類別", engName:"Others", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"resTotal_Need" : {valiType:"0,1,2,3", name:"預期退休生活每月開支", engName:"Expected monthly expenses during retirement", defaultVal:0, slide_min:0, slide_max:9999999, step:1000, min:1, max:9999999, decimalPlace:0, unit:"$"},
		"step2_2" : {valiType:"0,1,2,3", name:"預期通脹率", engName:"Expected inflation rate", defaultVal:3.0, slide_min:0, slide_max:20.0, step:0.1, min:0.01, max:30, decimalPlace:1, unit:"%"},
		"step2_3" : {valiType:"0,1,2,3", name:"預期退休後的投資每年回報率", engName:"Expected rate of return during retirement", defaultVal:5.2, slide_min:0, slide_max:20, step:0.1, min:0.01, max:30, decimalPlace:1, unit:"%"},
		
		"checkBoxType_retireSchemes" : {valiType:"", defaultVal:null, min:null, max:null, alertEng:"Please select appropriate retirement scheme categories", alertTch:"請選擇合適退休金類別"},
		"personalType_retireSchemes" : {valiType:"4", defaultVal:0, min:null, max:null, alertEng:"Please select \"employee” or “self-employed person\"", alertTch:"請選擇「僱員」還是「自僱人士」"},
		"step3_0_0" : {valiType:"0,1,2,3", name:"月薪", engName:"Monthly salary", defaultVal:0, slide_min:0, slide_max:200000, step:1000, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step3_0_1" : {valiType:"0,1,2,3", name:"年終花紅", engName:"Annual bonus", defaultVal:0, slide_min:0, slide_max:500000, step:1000, min:0, max:9999999, decimalPlace:0, unit:"$" },
		"step3_0_2" : {valiType:"0,1,2,3", name:"預期每年加薪幅度", engName:"Expected annual salary growth", defaultVal:3.9, slide_min:0, slide_max:20, step:0.1, min:0, max:30, decimalPlace:1, unit:"%"},
		"step3_0_3" : {valiType:"0,1,2,3", name:"你的每月自願性供款", engName:"Your voluntary monthly contribution", defaultVal:0, slide_min:0, slide_max:20, step:0.1, min:0, max:999, decimalPlace:1, unit:"%" },
		"step3_0_4" : {valiType:"0,1,2,3", name:"僱主每月自願性供款", engName:"Employer’s voluntary monthly contribution", defaultVal:0, slide_min:0, slide_max:20, step:0.1, min:0, max:999, decimalPlace:1, unit:"%" },
		"step3_0_5" : {valiType:"0,1,2,3", name:"每月特別自願性供款", engName:"Monthly special contribution", defaultVal:0, slide_min:0, slide_max:100000, step:1000, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step3_0_6" : {valiType:"0,1,2,3", name:"你現有的強積金結餘", engName:"Your existing MPF balance", defaultVal:0, slide_min:0, slide_max:3000000, step:5000, min:0, max:9999999, decimalPlace:0, unit:"$" },
		"step3_0_7" : {valiType:"0,1,2,3", name:"預期強積金投資每年回報率", engName:"Expected annual MPF investment return rate", defaultVal:4.0, slide_min:0, slide_max:20, step:0.1, min:0.01, max:30, decimalPlace:1, unit:"%"},
		"step3_1_0" : {valiType:"0,1,2,3", name:"月薪", engName:"Monthly salary", defaultVal:0, slide_min:0, slide_max:200000, step:1000, min:0, max:999999, decimalPlace:0, unit:"$" ,alertEng:"Please enter Monthly salary under other retirement schemes", alertTch:"請在其他退休計劃一欄輸入「月薪」"},
		"step3_1_1" : {valiType:"0,1,2,3", name:"年終花紅", engName:"Annual bonus", defaultVal:0, slide_min:0, slide_max:500000, step:1000, min:0, max:9999999, decimalPlace:0, unit:"$" },
		"step3_1_2" : {valiType:"0,1,2,3", name:"預期退休時獲得的一筆過退休酬金", engName:"Expected lump-sum pension gratuity received at retirement", defaultVal:0, slide_min:0, slide_max:10000000, step:50000, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step3_1_3" : {valiType:"0,1,2,3", name:"預期退休後獲得的每月退休金", engName:"Expected monthly pension received after retirement ", defaultVal:0, slide_min:0, slide_max:200000, step:5000, min:0, max:999999, decimalPlace:0, unit:"$" },
		
		"step4_0" : {valiType:"0,1,2,3", name:"現時儲蓄及投資結餘", engName:"Current balance of all savings and investments", defaultVal:0, slide_min:0, slide_max:2000000, step:10000, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_1" : {valiType:"0,1,2,3", name:"每月儲蓄及投資", engName:"Monthly savings and investments", defaultVal:0, slide_min:0, slide_max:100000, step:1000, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_2" : {valiType:"0,1,2,3", name:"預期每年回報率", engName:"Expected rate of return", defaultVal:5.2, slide_min:0, slide_max:20, step:0.1, min:0, max:30, decimalPlace:1, unit:"%" },
		"checkBoxType_savingInvest" : {valiType:"", defaultVal:null, min:null, max:null },
		"step4_3_0" : {valiType:"0,1,2,3", name:"銀行存款現時結餘", engName:"Current balance of Bank deposit", defaultVal:0, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_3_1" : {valiType:"0,1,2,3", name:"股票現時結餘", engName:"Current balance of Equities", defaultVal:0, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_3_2" : {valiType:"0,1,2,3", name:"基金 (不包括強積金)現時結餘", engName:"Current balance of Funds (exclude MPF)", defaultVal:0, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_3_3" : {valiType:"0,1,2,3", name:"債券現時結餘", engName:"Current balance of Bonds", defaultVal:0, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_3_4" : {valiType:"0,1,2,3", name:"帶有儲蓄或投資成份的保險現時結餘", engName:"Current balance of Insurance products with saving or investment element", defaultVal:0, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_3_5" : {valiType:"0,1,2,3", name:"其他現時結餘", engName:"Current balance of Others", defaultVal:0, min:0, max:99999999, decimalPlace:0, unit:"$" },
		"step4_3_res" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:0, unit:"$" },
		"step4_4_0" : {valiType:"0,1,2,3", name:"銀行存款每月儲蓄/投資", engName:"Monthly contribution of Bank deposit", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_4_1" : {valiType:"0,1,2,3", name:"股票每月儲蓄/投資", engName:"Monthly contribution of Equities", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_4_2" : {valiType:"0,1,2,3", name:"基金 (不包括強積金)每月儲蓄/投資", engName:"Monthly contribution of Funds (exclude MPF)", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_4_3" : {valiType:"0,1,2,3", name:"債券每月儲蓄/投資", engName:"Monthly contribution of Bonds", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_4_4" : {valiType:"0,1,2,3", name:"帶有儲蓄或投資成份的保險每月儲蓄/投資", engName:"Monthly contribution of Insurance products with saving or investment element", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_4_5" : {valiType:"0,1,2,3", name:"其他每月儲蓄/投資", engName:"Monthly contribution of Others", defaultVal:0, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step4_4_res" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:0, unit:"$" },
		"step4_5_0" : {valiType:"0,1,2,3", name:"銀行存款預期每年回報率", engName:"Expected rate of return of Bank deposit", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"step4_5_1" : {valiType:"0,1,2,3", name:"股票預期每年回報率", engName:"Expected rate of return of Equities", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"step4_5_2" : {valiType:"0,1,2,3", name:"基金 (不包括強積金)預期每年回報率", engName:"Expected rate of return of Funds (exclude MPF)", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"step4_5_3" : {valiType:"0,1,2,3", name:"債券預期每年回報率", engName:"Expected rate of return of Bonds", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"step4_5_4" : {valiType:"0,1,2,3", name:"帶有儲蓄或投資成份的保險預期每年回報率", engName:"Expected rate of return of Insurance products with saving or investment element", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"step4_5_5" : {valiType:"0,1,2,3", name:"其他預期每年回報率", engName:"Expected rate of return of Others", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"step4_5_res" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:1, unit:"%" },
		
		"step5_0" : {valiType:"0,1,2,3", name:"預期退休後從其他方面獲得的每月收入", engName:"Monthly income from other sources during retirement", defaultVal:0, slide_min:0, slide_max:100000, step:1000, min:0, max:999999, decimalPlace:0, unit:"$" },
		"step5_1" : {valiType:"0,1,2,3", name:"預期退休後這些收入的每年增長率", engName:"Expected annual growth rate of these incomes during retirement", defaultVal:0, slide_min:0, slide_max:20, step:0.1, min:0, max:30, decimalPlace:1, unit:"%" },
		
		"res_rate" : {valiType:"0,1,2,3", name:"預期每年回報率", engName:"Expected rate of return", defaultVal:0, min:0, max:30, decimalPlace:1, unit:"%" },
		"res_nper1" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:null, unit:"" },
		"res_nper2" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:null, unit:"" },
		"res_dtexp" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:0, unit:"$" },
		"res_mpf" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:0, unit:"$" },
		"res_ttSaving" : {valiType:"", defaultVal:0, min:0, max:null, decimalPlace:0, unit:"$" }
};

var alertMsgs = {
		"empty_tc" : "請輸入「::FIELDNAME::」",
		"empty_en" : "Please enter \"::FIELDNAME::\"",
		"outOfRange_tc_age" : "請在「::FIELDNAME::」輸入::MIN::至::MAX::的整數。",
		"outOfRange_en_age" : "Please input an integer from ::MIN:: to ::MAX:: for \"::FIELDNAME::\".",
		"outOfRange_tc_dollar" : "輸入的數值「::FIELDNAME::」超出計算範圍。請輸入一個不超過::PLACE::位數的數值。",
		"outOfRange_en_dollar" : "The input value「::FIELDNAME::」is out of calculation range, please input a value with maximum ::PLACE:: digits.",
		"outOfRange_tc_percent" : "「::FIELDNAME::」不能高於::MAX::%。",
		"outOfRange_en_percent" : "\"::FIELDNAME::\" cannot be higher than ::MAX::%"
};

var validationType = [
                  	"checkEmpty",
                  	"checkRange",
                  	"checkDigit",
                  	"checkDecimal",
                  	"checkChecked"
                  	//"adjustValueWithUnit"
                  ];