	<%@ page language="java" pageEncoding="UTF-8" %>
	<div id="opening">	
		<h2>免責聲明</h2>
		<p>
			以下的退休計劃計算機建基於若干假設，包括用戶輸入的假設資料。計算機不會考慮個別人士的需要或情況。
			由於採用了不同的假設，此計算機的估算結果或會與其他類似計算機的有所不同。此計算機估算 的結果僅作參考用途，
			不能視作或替代專業投資意見。估算結果不代表或保證用戶在退休時實際獲取的金額。投資者教育中心不會對計算結果的任何人為或機件錯誤、
			遺漏或可靠性負上法律責任，亦不會對根據計算機提供的資料而作出的任何決定或採取的任何行動所導致的後果承擔任何法律責任。 
		</p>
		<div class="confirmBtn" >
			<a href="javascript:$.fancybox.close();" class="planBtn">繼續</a>
		</div>	
	</div>
	
	<div id="mpf_Rules01" style="display:none;">
		<p>
			根據強制性公積金計劃條例, 強積金計劃成員要到65歲才可提取強積金累算權益。
		</p>
		<div class="confirmBtn">
			<a href="javascript:$.fancybox.close();" class="planBtn">繼續</a>
		</div>	
	</div>
	
	<div id="retire_require" style="display:none;">
		<p>
			由於預期退休後的收入(包括公務員每月退休金, 如有)大於預期退休總開支, 所以「預期退休時所需的金額」為負數。
		</p>
		<div class="confirmBtn">
			<a href="javascript:$.fancybox.close();" class="planBtn">繼續</a>
		</div>	
	</div>
	
	<!--<div id="loadLay" class="hide" style="display:none;">
		<div class = "loadingMa"></div>
		<div id="loadLayerCon">
			<img src="../../images/share/loading.gif" alt="loading.." style="height:20px; width:20px;" />
			<span>內容正在加載, 請稍等...</span>
		</div>
	</div>-->
	
	<div id="useExplain">
		<h1 class="u_guide_title">「退休計劃計算機」簡介</h1>
		<p>
			「退休計劃計算機」包括「個人資料」、「你需要多少退休儲備」、「退休金計劃」、「你的儲蓄及投資」及「其他退休收入」5個環節。
		</p>
		<p>
			你只需輸入有關資料，「退休計劃計算機」將提供一份分析報告及行動方案，助你改善你的退休計劃。 
		</p>
		<ul>
			<li>請在每一環節輸入有關資料，然後按「下一頁」按鈕繼續。你亦可按「上一頁」隨時回到之前的頁面更改已輸入的資料。</li>
			<li>完成5個環節後，請按「結果」按鈕查看你的分析報告及行動方案建議。</li>
			<li>
				你可按 <img src="../../images/share/pdf.png" alt="PDF 按鈕" class="btnExplain" /> 以PDF格式查看並儲存你的報告，
				亦可按 <img src="../../images/share/print.png" alt="列印 按鈕" class="btnExplain" /> 列印整個報告。
			</li>
			<li>你輸入的個人資料及答案只會用作一次性分析之用，投資者教育中心並不會儲存你的資料及報告。</li>
			<li>
				你於「退休計劃計算機」所提供的資料或會涉及敏感的個人資料。你應參考下列措施，以保障你的資料免受未獲授權或遭意外的查閱﹑處理﹑刪除﹑喪失或使用：
				<ul class="secondUL">
					<li>避免使用公眾地方（如圖書館或網吧）的電腦;</li>
					<li>儲存你所下載的檔案至安全位置，以免第三者查閱;</li>
					<li>當使用退休計劃計算機時，不要讓電腦處於無人看管狀態;</li>
					<li>完成使用後，請謹記立即妥善登出或關閉所有瀏覽器;</li>
					<li>為你的電腦安裝信譽良好的防毒或保安軟件。</li>
				</ul>
			</li>
		</ul>
		<h1 class="p_sub_title">假設及計算方法</h1>
		<p style="text-decordation:underline;">預設值</p>
		<p>以下各項設有預設值，用戶可自行更改數值:</p>
		<ul>
			<li>預期通脹率(每年)</li>
			<li>預期退休後投資的每年回報率</li>
			<li>預期每年加薪幅度</li>
			<li>預期強積金投資的每年回報率</li>
			<li>預期個人儲蓄及投資的每年回報率</li>
		</ul>
		
		<p>估算強積金權益</p>
		<ul>
			<li>強制性供款的款額按現時的法定最低及最高有關入息水平（即分別為每月$7,100及$30,000）計算。該兩個水平均會按照過去十年的年率化綜合消費物價指數計算所得的通脹率每四年自動調整一次；</li>
			<li>年終花紅（如有）將包括在最後一個月的有關入息內；</li>
			<li>自願性供款（如有）按每月有關入息的某個百分比的形式計算。自願性供款不設供款上限，而且供款將全數歸屬於供款人；</li>
			<li>特別自願性供款（如有）按定額供款的形式計算；</li>
			<li>強制性供款、自願性供款及特別自願性供款均為按月支付，並將持續供款至退休年齡為止；</li>
			<li>由用戶輸入的「現有強積金結餘」，將全數歸屬於該用戶；</li>
			<li>用戶在估算期間內，沒有以強積金抵銷長期服務金／遣散費；沒有被拖欠供款；沒有間斷受僱；以及沒有提早提取強積金累算權益。</li>
		</ul>
		
		<p style="text-decordation:underline;">其他退休金計劃的預期權益</p>
		<ul>
			<li>
				不同的退休金計劃(例如職業退休計劃、公務員退休金計劃、補助/津貼學校公積金等)有不同的方法或基準計算及決定成員利益。
				因此，本計算機不會計算這些退休金計劃的預計權益。
				用戶可向退休金計劃供應商或僱主查詢如何計算預期退休時獲得的金額，然後填入有關數字。
			</li>
		</ul>
		
		<p style="text-decordation:underline;">你的儲蓄及投資</p>
		<ul>
			<li>假設每月儲蓄及投資(如有)將持續進行至退休年齡為止。</li>
		</ul>
		
		<p style="text-decordation:underline;">計算結果</p>
		<ul>
			<li>「預期退休時可累積的金額」等於預期強積金權益/職業退休計劃權益/公務員退休金計劃所獲得的一筆過金額或補助/津貼學校公積金權益，加上你的儲蓄及投資預期累積金額的總和。</li>
			<li>「預期退休時所需的金額」等於預期退休總開支，減去預期退休後獲得的每月退休金及預期退休後的其他收入。若「預期退休總開支」少於「預期退休後獲得的每月退休金」及「預期退休後的其他收入」之總和， 「預期退休時所需的金額」將為負數。請留意「預期退休總開支」並不包括遺產及殮葬費用。</li>
			<li>退休時所欠金額與現時年薪計算的圖例僅供參考，此年薪數值並沒有包括年薪的增幅。</li>
		</ul>
		<div class="confirmBtn">
			<a href="javascript:$.fancybox.close();" class="planBtn">繼續</a>
		</div>	
	</div>
	
<!--Mail Share-->
	<div id="eMailShare" class="tips">	
		<h2 class="eMail_Title">退休計劃計算機</h2>
		<p class="eMail_Content">
			你需要多少退休儲備?立刻使用投資者教育中心的退休計劃計算機制定退休預算，可獲一份免費分析報告及具體行動方案。
		</p>
	</div>
	
<!--FeedBack-->
	<div id="user_feedBack" class="tips">	
		<h2 class="feedback_to">info@thechinfamily.hk</h2>
		<p class="feedback_subject">Feedback on Retirement Planner</p>
	</div>
	
<!--Slide 1-->
	<div id="tips01" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期退休年齡</h2>-->
		<p class="tips_Content">
			每個人的目標退休年齡都有所不同。設定目標退休年齡可讓你知道還有多少時間來累積財富。愈早退休，你便需要更多資金以應付開支。
		</p>
	</div>
	
	<div id="tips02" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期壽命</h2>-->
		<p class="tips_Content">在2013年，男性出生時平均預期壽命是81年，女性則是87年。</p>
	</div>
	
<!--Slide 2-->
	<div id="tips03" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期通脹率</h2>-->
		<p class="tips_Content">綜合消費物價指數的按年變動百分率在過去5年(2010年至2014年)及10年(2005年至2014年)分別是4.1%及3.0%。</p>
	</div>
	
	<div id="tips04" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期退休後的投資每年回報率<br />(例如儲蓄戶口的利息收益及其他投資回報) </h2>-->
		<p class="tips_Content">截止2014 年12 月，盈富基金過去10 年的年度化回報率為5.2%。請留意過往的表現並非未來投資表現的可靠指標。</p>
	</div>
	
<!--Slide 3-->
	<div id="tips05" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">僱員</h2>-->
		<p class="tips_Content">若你是僱員，你和僱主均須按法定的最高及最低有關入息水平，各自就你的有關入息作出5%的強積金強制性供款。</p>
	</div>
	
	<div id="tips06" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">自僱人士</h2>-->
		<p class="tips_Content">若你是自僱人士，你須按法定的最低及最高有關入息水平，就你的有關入息作出5%的強積金強制性供款。自僱人士是指並非以僱員身分賺取收入，其有關收入是來自生產或買賣貨品，或是來自提供服務或從事提供服務的業務人士。</p>
	</div>
	
	<div id="tips07" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">有關入息</h2>-->
		<p class="tips_Content">僱員的有關入息指由或須由僱主支付予僱員，並以金錢形式表示的任何工資、薪金、假期津貼、費用、佣金、花紅、獎金、合約酬金、賞錢或津貼。自僱人士方面，有多種方法確定有關入息，詳情請參閱積金局網站有關供款的網頁。</p>
	</div>
	
	<div id="tips08" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">月薪</h2>-->
		<p class="tips_Content"></p>
	</div>
	
	<div id="tips09" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">年中花紅(如有)</h2>-->
		<p class="tips_Content"></p>
	</div>
	
	<div id="tips10" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期每年加薪幅度</h2>-->
		<p class="tips_Content">2004年第4季至2013年第4季的就業人士名義平均薪金指數的按年變動百分率是3.9%。</p>
	</div>
	
	<div id="tips11" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">每月自願性供款</h2>-->
		<p class="tips_Content"></p>
	</div>
	
	<div id="tips12" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">僱員每月自願性供款</h2>-->
		<p class="tips_Content"></p>
	</div>
	
	<div id="tips13" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">僱主每月自願性供款</h2>-->
		<p class="tips_Content">僱主在5%強制性供款以外作出的供款，就是自願性供款。</p>
	</div>
	
	<div id="tips14" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">每月特別自願性供款</h2>-->
		<p class="tips_Content">每月特別自願性供款是在強制性及自願性供款以外，每月以定額形式向你的強積金帳戶作出的額外供款。特別自願性供款由有關僱員不經僱主而直接向受託人支付。特別自願性供款的支付及其累算權益的提取均與僱傭無關，亦無須遵守保存規定。</p>
	</div>
	
	<div id="tips15" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">你現有的強積金結餘</h2>-->
		<p class="tips_Content">可查閱你的周年權益報表，緊記包括你所有的強積金戶口。</p>
	</div>
	
	<div id="tips16" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期強積金投資的每年回報率</h2>-->
		<p class="tips_Content">強積金制度自2000 年開始實施直至2014 年12 月31 日，年率化內部回報率是4.0%。請留意過往的表現並非未來投資表現的可靠指標。</p>
	</div>
	
<!--Slide 4-->
	<div id="tips17" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">現時儲蓄及投資結餘</h2>-->
		<p class="tips_Content">請包括所有退休金計劃(例如強積金、職業退休計劃等)<span class="strongWord">以外</span>的退休儲蓄及投資。</p>
	</div>
	
	<div id="tips18" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">每月儲蓄及投資</h2>-->
		<p class="tips_Content">例如月供基金或股票等</p>
	</div>
	
	<div id="tips19" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期每年回報率</h2>-->
		<p class="tips_Content">截止2014 年12 月，盈富基金過去10 年的年度化回報率為5.2% 。請留意過往的表現並非未來投資表現的可靠指標。</p>
	</div>
	
<!--Slide 5-->
	<div id="tips20" class="tips">	
		<span class="tips_arrow"></span>
		<!--<h2 class="tips_Title">預期退休後這些收入每年增長率</h2>-->
		<p class="tips_Content">綜合消費物價指數的按年變動百分率在過去5年(2009年至2013年)及10年(2004年至2013年)分別是3.3%及2.5%。2004年第4季至2013年第4季的就業人士名義平均薪金指數的按年變動百分率是3.9%。</p>
	</div>

<!--Slide 6-->
	<div id="winAlert00" style="display:none;">重設將會清空所有輸入的值，確定要重設嗎？</div>