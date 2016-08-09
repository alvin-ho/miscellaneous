<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
					<div class = "successresult">
						<div class = "containResult">
								<div class = "result_pics">
									<p>你的理財分析結果</p>
									<div class = "moneypig">
										<img id="img_<%=pageCount %>" src = "../../images/en/goodpig_en.png" alt = ""/>
										<img src = "../../images/en/badpig_en.png" alt = "" style = "display:none;"/>
										<img src = "../../images/en/begoodpig_en.png" alt = "" style = "display:none;"/>
									</div>
								</div>
								<div id="result_<%=pageCount %>" class = "content">
									
								<p>它計算你的支出佔你收入的百份比。百份比結果越低表示你有更多盈餘可用作消費或儲蓄。</p>							
								<p>這個比率並沒有標準，在你人生的不同階段，這結果都可能不同。在檢視你的消費模式時，可以參考以下幾項要點:</p>
									<ul class = "aContent">
										<li>
											<span>與去年比較，這比率有否上升? 若果這結果持續上升，代表你的盈餘正在減少，如有需要請注意你的開支或增加額外收入。</span>
										</li>
										<li><span>如果想改善你的支出與收入比率，可使用我們的<span class="successWord">削減開支計算機</span>和<span class="successWord">個人收支計算機</span>制定預算了解自己
										的理財習慣，從而妥善管理支出及儲蓄。</span></li>
										<li><span>若你有盈餘，可考慮作儲蓄或投資用途，實現自己的財務目標。</span></li>
									</ul>
									
								</div>
						</div>
						
						<div class = "noresult">
								<!--<img src = "../../images/en/nextpage_button.png" alt = ""/>-->
								<p>請到下一頁</p>
							</div>
							
						</div>
						
						
						
						
<script type="text/javascript">
<!--
  function getId(id){
  	return document.getElementById(id);
  }
  
  var pdfOrder = "";
  
  function showResult_<%=pageCount %>(text,id){
 	 var str=new Array();
  	 if(text!=null||text!=""){
  		 printResult[<%=pageCount %>]=text;
        str=text.split("||");
        var content_point=str[1].replace("class='a'","class='content_point'")
      getId(id).innerHTML=content_point;
      getId("img_"+id).src="../../images/en/"+str[0];
      getId("plan_"+id).innerHTML=str[3]+"<a href='javascript:void(0);' title='' class='backTop_btn' onclick='backTop();'></a>";
     // var sBtn=getId("btn_"+id);
     var itmp = "";
     if($("#btn_"+id).attr("class") != null){
     	itmp = $("#btn_"+id).attr("class").split(" ")[1];
     }
  //   alert(itmp);
  	 var isAction = false;
  	 var isS3 = false; var isS4 = false; var isS6 = false; var isS7 = false; var isS9 = false;
  	 var itag = jobClick();
     if(str[0]=="goodpig_en.png"){
       //$("#btn_"+id).removeClass().addClass("greenBtn");
       if(str[1].indexOf("No retirement plan") > -1){
       		$("#btn_"+id).attr("class",itmp);
       		isAction = true;
       }else{
       		$("#btn_"+id).attr("class","greenBtn "+itmp);
       		isAction = false;
       }
	       if(id=='s3'){
	       		isS3 = true;
	       }
	       if(id=='s4'){
	       		isS4 = true;
	       }
	       if(id=='s6'){
	       		isS6 = true;
	       }
	       if(id=='s7'){
	       		isS7 = true;
	       }
	       if(id=='s9'){
	       		isS9 = true;
	       }
      }
      if(str[0]=="begoodpig_en.png"){
        //$("#btn_"+id).removeClass().addClass("yellowBtn"); 
        if(str[1].indexOf("No retirement plan") > -1){
        	$("#btn_"+id).attr("class",itmp);
        	isAction = true;
        }else{
        	$("#btn_"+id).attr("class","yellowBtn "+itmp);
        	isAction = false;
        }
	       if(id=='s3'){
	       		isS3 = false;
	       }
	       if(id=='s4'){
	       		isS4 = false;
	       }
	       if(id=='s6'){
	       		isS6 = false;
	       }
	       if(id=='s7'){
	       		isS7 = false;
	       }
	       if(id=='s9'){
	       		isS9 = false;
	       }
      }
      if(str[0]=="badpig_en.png"){
         //$("#btn_"+id).removeClass().addClass("redBtn");
         if(str[1].indexOf("No retirement plan") > -1){
         	$("#btn_"+id).attr("class",itmp);
         	isAction = true;
         }else{
         	$("#btn_"+id).attr("class","redBtn "+itmp);
         	isAction = false;
         }
	       if(id=='s3'){
	     		isS3 = false;
	       }
	       if(id=='s4'){
	       		isS4 = false;
	       }
	       if(id=='s6'){
	       		isS6 = false;
	       }
	       if(id=='s7'){
	       		isS7 = false;
	       }
	       if(id=='s9'){
	       		isS9 = false;
	       }
      }
      if(itag == '1_jobType_radio5' || str[1].indexOf("No retirement plan") > -1){
      	$("#btn_s8").attr("class",itmp);
        isAction = true;
      }else{
      	isAction = false;
      }

      
      var redArray = new Array();
      var yellArray = new Array();
      var greenArray = new Array();
      var lastArray = new Array();
      //var indexR = 0;
      //var indexY = 0;
      //var indexG = 0;
      
      var ulHtmlCode = $("#sectionTab").html();
   //   alert(ulHtmlCode);
      var ulHtmlArray = ulHtmlCode.split("</li>");
   //   alert(ulHtmlArray.length);
      for(var i = 0; i < ulHtmlArray.length-1; i++){
   //   	alert(ulHtmlArray[i]);
   			var controlIndex = 0;
   			if(ulHtmlArray[i].indexOf("#income") > 0){
   				controlIndex = 0;
   			}else if(ulHtmlArray[i].indexOf("#credit") > 0){
   				controlIndex = 1;
   			}else if(ulHtmlArray[i].indexOf("#financial") > 0){
   				controlIndex = 2;
   			}else if(ulHtmlArray[i].indexOf("#investment") > 0){
   				controlIndex = 3;
   			}else if(ulHtmlArray[i].indexOf("#saving") > 0){
   				controlIndex = 4;
   			}else if(ulHtmlArray[i].indexOf("#insurance") > 0){
   				controlIndex = 5;
   			}else if(ulHtmlArray[i].indexOf("#retirement") > 0){
   				controlIndex = 6;
   			}else if(ulHtmlArray[i].indexOf("#estate") > 0){
   				controlIndex = 7;
   			}
   			
   			if(ulHtmlArray[i].indexOf("redBtn") > 0){
   				redArray[controlIndex] = ulHtmlArray[i];
   				//indexR++;
   			}else if(ulHtmlArray[i].indexOf("yellowBtn") > 0){
   				yellArray[controlIndex] = ulHtmlArray[i];
   				//indexY++;
   			}else if(ulHtmlArray[i].indexOf("greenBtn") > 0){
   				greenArray[controlIndex] = ulHtmlArray[i];
   				//indexG++;
   			}else{
   				lastArray[controlIndex] = ulHtmlArray[i];
   			}
      }
  //    alert(redArray.length + " " + greenArray.length + " " + yellArray.length);
  		var resultUlHtml = "";
  		var tempOrder = "";
  		for(var i = 0; i  < redArray.length; i++){
  			if(redArray[i]!=null){
  				var temp = redArray[i].substring(redArray[i].indexOf("_s"),redArray[i].indexOf("_s")+3);
  				tempOrder += temp+"[R]||";
  				if(redArray[i].indexOf("btn_s8")>-1){
  					var t = redArray[i].replace("style=\"display: none;\"", "");
  					resultUlHtml += t+"</li>";
  				}else{
  					resultUlHtml += redArray[i]+"</li>";
  				}
  			}
  		}
  		for(var i = 0; i  < yellArray.length; i++){
  			if(yellArray[i]!=null){
  				var temp = yellArray[i].substring(yellArray[i].indexOf("_s"),yellArray[i].indexOf("_s")+3);
  				tempOrder += temp+"[Y]||";
  				if(yellArray[i].indexOf("btn_s8")>-1){
  					var t = yellArray[i].replace("style=\"display: none;\"", "");
  					resultUlHtml += t+"</li>";
  				}else{
  					resultUlHtml += yellArray[i]+"</li>";
  				}
  			}
  		}
  		for(var i = 0; i  < greenArray.length; i++){
  			if(greenArray[i]!=null){
  				var temp = greenArray[i].substring(greenArray[i].indexOf("_s"),greenArray[i].indexOf("_s")+3);
  				tempOrder += temp+"[G]||";
  				if(greenArray[i].indexOf("btn_s8")>-1){
  					var t = greenArray[i].replace("style=\"display: none;\"", "");
  					resultUlHtml += t+"</li>";
  				}else{
  					resultUlHtml += greenArray[i]+"</li>";
  				}
  			}
  		}
  		for(var i = 0; i < lastArray.length; i++){
  			if(lastArray[i]!=null){
  				//alert('last');
  				var temp = lastArray[i].replace("onclick=\"resTab(this);\"", "onclick=\"resTab(this);\" style=\"display: none;\"");
  				resultUlHtml += temp+"</li>";
  			}
  		}
  		pdfOrder = tempOrder;
  //		alert(resultUlHtml);
  		/*var tempArray = resultUlHtml.split("</li>");
  //		alert(tempArray[0]);
  //		alert(tempArray.length);
  		resultUlHtml = "";
  		for(var i = 0; i < tempArray.length-1; i++){
  	//		alert(tempArray[i].replace("pin","pin tabActive"));
  			var temp = "";
  			if(i == 0){
  				temp = tempArray[i].replace("pin","pin tabActive");
  			}else{
  				temp = tempArray[i];
  			}
  			//var temp = tempArray[i].replace("pin","pin tabActive");
  			resultUlHtml +=temp+"</li>"
  		}*/
  //		alert(resultUlHtml);
  		resultUlHtml = resultUlHtml.replace(/javascript:void\(0\)/g, "::JV::");
  		resultUlHtml = resultUlHtml.replace(/script/g, "");
  		resultUlHtml = resultUlHtml.replace(/::JV::/g, "javascript:void(0)");
  		$("#sectionTab").html(resultUlHtml);
  		
  		$("#sectionTab > li").removeClass('tabActive').eq(0).addClass('tabActive');
  		var fIndex = $("#sectionTab > li > a").attr("data-tname");
		$("#tabs "+fIndex).show().siblings().hide();
		$("#tabs #menu_title").show();
  		
  		if(id == "s8" || itag == '1_jobType_radio5'){
  			if(isAction){
  				document.getElementById('plan_title_s8').style.display='none';
	  		}else{
	  			document.getElementById('plan_title_s8').style.display='block';
	  		}
  		}
  		
  		if(id == "s3"){
  			if(isS3){
	  			document.getElementById('plan_title_s3').style.display='none';
	  			document.getElementById('planBtnS3').style.display='none';
	  		}else{
	  			document.getElementById('plan_title_s3').style.display='block';
	  			document.getElementById('planBtnS3').style.display='block';
	  		}
  		}
  		
  		if(id == "s4"){
  			if(isS4){
	  			document.getElementById('plan_title_s4').style.display='none';
	  			document.getElementById('planBtnS4').style.display='none';
	  		}else{
	  			document.getElementById('plan_title_s4').style.display='block';
	  			document.getElementById('planBtnS4').style.display='block';
	  		}
  		}
  		
  		if(id == "s6"){
  			if(isS6){
	  			document.getElementById('plan_title_s6').style.display='none';
	  			document.getElementById('planBtnS6').style.display='none';
	  		}else{
	  			document.getElementById('plan_title_s6').style.display='block';
	  			document.getElementById('planBtnS6').style.display='block';
	  		}
  		}
  		
  		if(id == "s7"){
  			if(isS7){
	  			document.getElementById('plan_title_s7').style.display='none';
	  			document.getElementById('planBtnS7').style.display='none';
	  		}else{
	  			document.getElementById('plan_title_s7').style.display='block';
	  			document.getElementById('planBtnS7').style.display='block';
	  		}
  		}
  		
  		if(id == "s9"){
  			if(isS9){
	  			document.getElementById('plan_title_s9').style.display='none';
	  			document.getElementById('planBtnS9').style.display='none';
	  		}else{
	  			document.getElementById('plan_title_s9').style.display='block';
	  			document.getElementById('planBtnS9').style.display='block';
	  		}
  		}
      
     
      var contentdiv=getId("result_<%=pageCount %>");
      contentdiv.innerHTML=str[1];
      getId("img_<%=pageCount %>").style.display = "block";
      getId("img_<%=pageCount %>").src="../../images/en/"+str[0];
  	}
  }
-->
  </script>					