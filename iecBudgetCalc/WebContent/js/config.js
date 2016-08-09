var root_path = "https://www.thechinfamily.hk/web";

var FB_LINK = {
	'budget_en' : 'https://www.thechinfamily.hk/tools/en/budget.html',
	'budget_tc' : 'https://www.thechinfamily.hk/tools/tc/budget.html',
	'saving_en' : 'https://www.thechinfamily.hk/tools/en/saving.html',
	'saving_tc' : 'https://www.thechinfamily.hk/tools/tc/saving.html',
	'fb' : 'https://www.facebook.com/sharer/sharer.php'
};

var EXTERNAL_LINK = {
	'en' : 'http://www.thechinfamily.hk/web/en/tools-and-resources/calculators/reference.html',
	'tc' : 'http://www.thechinfamily.hk/web/tc/tools-and-resources/calculators/reference.html'
};

var EXTERNAL_LINK_SAVING = {
'en' :
	[
	 'http://www.thechinfamily.hk/web/en/life-events/life-stages/make-smart-choices-for-a-new-home.html',
	 'http://www.thechinfamily.hk/web/en/life-events/life-stages/getting-married.html',
	 'http://www.thechinfamily.hk/web/en/life-events/popular-events/buying-a-car.html',
	 'http://www.thechinfamily.hk/web/en/parent/self-learning/thinking-of-having-children.html',
	 'http://www.thechinfamily.hk/web/en/managing-your-money/savings.html',
	 'http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/financial-planning-primer.html',
	 'http://www.thechinfamily.hk/web/en/managing-your-money/financial-planning/getting-started.html'
	 ]
, 
'tc' :
	[
	 'http://www.thechinfamily.hk/web/tc/life-events/life-stages/make-smart-choices-for-a-new-home.html',
	 'http://www.thechinfamily.hk/web/tc/life-events/life-stages/getting-married.html',
	 'http://www.thechinfamily.hk/web/tc/life-events/popular-events/buying-a-car.html',
	 'http://www.thechinfamily.hk/web/tc/parent/self-learning/thinking-of-having-children.html',
	 'http://www.thechinfamily.hk/web/tc/managing-your-money/savings.html',
	 'http://www.thechinfamily.hk/web/tc/managing-your-money/financial-planning/financial-planning-primer.html',
	 'http://www.thechinfamily.hk/web/tc/managing-your-money/financial-planning/getting-started.html'
	 ]
};

var GLOBAL_iecShareLink_PATH_PREFIX = '/mailto';

//GLOBAL_MAILTO_SETTING: {URL match : [Subject,Mail body]} //Empty for using default setting
var GLOBAL_MAILTO_SETTING = {
	'/tools/en/saving.html' : 
		['Savings Goal Calculator',
		 'Do you have a savings goal in mind? Use our calculator to work out how much you need to save or how long it will take to reach your target savings.'
		],
	'/tools/tc/saving.html' : 
		['投資者教育中心儲蓄目標計算機',
		 '你有儲蓄目標嗎? 儲蓄目標計算機可助你計算須定時地儲蓄多少，或計算要達到你指定儲蓄目標的所需時間。'
		],
		'/tools/en/budget.html' : 
		['Budget Planner',
		 'Use our budget planner to keep track of your finance. You can save your budget planner results on your computer, print out and do it later, or you can set up a budget by downloading our budgeting spreadsheet into your computer.'
		],
		'/tools/tc/budget.html' : 
		['投資者教育中心個人收支計算機',
		 '個人收支計算機助你記錄所有資金出入，你可將預算結果儲存在你的電腦內、列印並於稍後再進行規劃，或將預算數據表下載到你的電腦，然後制定你的個人收支預算。'
		]
};