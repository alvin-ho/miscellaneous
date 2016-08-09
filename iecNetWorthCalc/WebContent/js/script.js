var w = 310,
	h = 310;

var colorscale = d3.scale.category10();


//Data


//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 0,
  ExtraWidthX: 550,
  rotate: 60
}

//Call function to draw the Radar chart
//Will expect that data is in %'s

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

		var svg = d3.select('#body')
			.selectAll('svg')
			.append('svg')
			.attr("width", w+300)
			.attr("height", h)