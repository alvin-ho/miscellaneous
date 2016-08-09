<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String[] sildeName = {	
							"個人資料", "收入與支出", "借貸管理",
							"財務目標", "儲蓄及投資", "儲備應急錢",
							"保險規劃", "退休計劃", "遺產規劃",	
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
								out.print("<div id='track"+i+"' class='rela"+ ( i== 0? "" : " wid" ) +"'>");
								out.print("<div class='hoverele ele"+i+"'>"+sildeName[i]+"</div>");
								out.print("<input id='stepTrack"+i+"' type='radio' name='track"+i+"' value='track' class='trackstep track"+i+"' />");
								out.print("<label for='stepTrack"+i+"'></label>");
								out.print("</div>");
							}
						%>
						<!--
						<div id="track0" class = "rela">
						
							<div class = "hoverele ele0">個人資料</div>
							<input type="radio" name="track0" value="track" class = "trackstep track0"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track1" class = "rela wid"> 
							<div class = "hoverele ele1">收入與支出</div>
							<input type="radio" name="track1" value="track" class = "trackstep track1"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track2" class = "rela wid">
							<div class = "hoverele ele2">借貸管理</div>
							<input type="radio" name="track2" value="track" class = "trackstep track2"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track3" class = "rela wid">
							<div class = "hoverele ele3">財務目標</div>
							<input type="radio" name="track3" value="track" class = "trackstep track3"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track4" class = "rela wid">
							<div class = "hoverele ele4">投資策劃</div>
							<input type="radio" name="track4" value="track" class = "trackstep track4"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track5" class = "rela wid">
							<div class = "hoverele ele5">儲備應急錢</div>
							<input type="radio" name="track5" value="track" class = "trackstep track5"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track6" class = "rela wid">
							<div class = "hoverele ele6">保險規劃</div>
							<input type="radio" name="track6" value="track" class = "trackstep track6"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track7" class = "rela wid">
							<div class = "hoverele ele7">退休計劃</div>
							<input type="radio" name="track7" value="track" class = "trackstep track7"><label for="checkboxImageBased2"></label>
						</div>
						<div id="track8" class = "rela wid">
							<div class = "hoverele ele8">遺產規劃</div>
							<input type="radio" name="track8" value="track" class = "trackstep track8"><label for="checkboxImageBased2"></label>
						</div>
						-->
					</div>
				</div>
			</div> 
			
			<div class = "nextpage">
				<div class = "inner">
					<a href="javascript:void(0);" class="innerNext arrowSet" id="bottomNext"><span>下一頁</span><span>結果</span></a>	
				</div>
			</div>
		</div>