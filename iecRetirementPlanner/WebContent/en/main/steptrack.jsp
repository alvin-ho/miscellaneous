<%
	String[] sildeName = {	
							"About you", "How much do you need for retirement?", "Retirement schemes",
							"Your savings and investments", "Other retirement income", "Result"
						};
%>
		<div class = "step_check">
			<div class = "prepage">
				<div class = "inner">

					<a href="javascript:void(0);" class="innerPrev arrowSet" id="bottomPrev">Previous</a>
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
					<a href="javascript:void(0);" class="innerNext arrowSet" id="bottomNext"><span>Next</span><span>Result</span></a>	
				</div>
			</div>
		</div>