<%@ page language="java" pageEncoding="UTF-8" %>
<%
	String[] sildeName = {	
							"個人資料", "你需要多少退休儲備?", "退休金計劃",
							"你的儲蓄及投資", "其他退休收入", "計算結果"
						};
%>
		<div class = "step_check">
			<div class = "prepage">
				<div class = "inner">

					<a href="javascript:void(0);" class="innerPrev arrowSet" id="bottomPrev">上一頁</a>
				</div>
			</div>
			<div class = "step_btn_outer">
				<div class = "step_btn">
					<div class = "point_container">
						<%
							for( int i = 0; i < sildeName.length; i++)
							{
								out.print("<div id='track"+i+"' class='rela"+ ( i== 0? "" : " wid" ) +""+( i == sildeName.length - 1? " outLastStep" : "" )+"'>");
								out.print("<div class='hoverele ele"+i+"'>"+sildeName[i]+"</div>");
								out.print("<input id='stepTrack"+i+"' type='radio' name='track"+i+"' value='track' class='trackstep track"+i+"' />");
								out.print("<label for='stepTrack"+i+"'></label>");
								out.print("</div>");
							}
						%>
					</div>
				</div>
			</div> 
			
			<div class = "nextpage">
				<div class = "inner">
					<a href="javascript:void(0);" class="innerNext arrowSet" id="bottomNext"><span>下一頁</span><span>結果</span></a>	
				</div>
			</div>
		</div>