$(document).ready(function() {
	$('a.btn_test').click(function() {
		calTab1();
	});
});

function calTab1() {	
	var sum = $('input#long_txt_g1').val();//saving goal
	var p = $('input#long_txt_g2').val();//amount you have already
	var pmt = $('input#long_txt_g0').val();//regular savings amount
	var $savePeriod = $('select#tab3_saveperiod option:selected');//rsa drop down
	var savePeriod = $savePeriod.val();////rsa drop down
	var n = 1;
	if(savePeriod === '0') { // week
		n = 52;
	}else if(savePeriod === '1') { // month 
		n = 12;
	}else if(savePeriod === '2') { // year
		n = 1;
	}
	var r = $('input#long_txt_g3').val();//expected rate of return	
	r = r / 100;
	
	var t;
	var y;
	var m;
	
	var __t;
	var __y;
	var __m;
	
	// assign without compound interest value
	__t = ( sum - p ) / pmt;
	if(n === 12) {
		
		if(__t >= 12) {
			__y = Math.floor( __t / 12 );
			__m = __t - ( __y * 12 );
		}else {
			__y = 0;
			__m = __t;
		}
	
	}else if(n === 1) {
		
		__y = __t;
		__m = 0;
	
	}else if(n === 52) {
		
		if(__t >= 52) {
			__y = Math.floor( __t / 52 );
		}else {
			__y = 0;
		}

		if(__t >= 4) {
			__m = Math.round( __t * 12 / 52 ) - ( __y * 12 );
		}else {
			__m = 0;
		}

	}
	
	if(r > 0) { // assign with compound interest value
		t = (Math.log(sum / pmt * (r / n) + 1) - Math.log(p / pmt * (r / n) + 1)) / (n * Math.log(1 + r / n)) * n;
		if(n === 12) { // month
			if(t >= 12) {
				y = Math.floor( t / 12 );
				m = Math.ceil( t - ( y * 12 ) );
			}else {
				y = 0;
				m = Math.ceil( t );
			}
			
		}else if(n === 1) { // year
			
			y = Math.round( t );
			m = Math.round( ( t - Math.floor( t ) ) * 12 );
		
		}else if(n === 52) { // week
		
			if(t >= 52) {
				y = Math.floor( t / 52 );
			}else {
				y = 0;
			}
			if(t >= 4) {
				m = Math.round( t * 12 / 52 ) - ( y * 12 );
			}else {
				m = 0;
			}
			
		}
	}else { // assign without compound interest value to with compound interest
		t = __t;
		y = __y;
		m = __m;	
	}

	// t = with compound interest
	// __t = without compound interest
	// t or __t + saving period
	// __t - t = EARILER
	
	//console.log(t);
	//console.log(y);
	//console.log(m);
	//console.log(__t);
	//console.log(__y);
	//console.log(__m);
		
	
	var result = parseFloat( p );
	var __result = parseFloat( p );
	var data1 = [];
	var data2 = [];
	var data3 = [];
	
	// for loop here
	// with compound interest
	for(var i = 1; i <= t; i++) {
		if(r === 0) { // when r < 0
			result += parseFloat( pmt );
		}else { // when r > 0 and the formula is able to calculate
			result = p * Math.pow( 1 + parseFloat( r / n ), i ) + pmt * ( ( Math.pow( 1 + parseFloat( r / n), i ) - 1 ) / (r / n) );				
			
		}
		data1[i - 1] = parseFloat(result);
		
	}
	// without compound interest	
	for(var i = 1; i <= __t; i++) {	
		__result += parseFloat( pmt );
		data2[i - 1] = parseFloat(__result);
	}
	
	while((data1[data1.length - 1]).toFixed(1) < sum) {
		result = p * Math.pow( 1 + parseFloat( r / n ), t ) + pmt * ( ( Math.pow( 1 + parseFloat( r / n), t ) - 1 ) / (r / n) );
		data1[data1.length] = result;
	}
	
	while((data2[data2.length - 1]).toFixed(1) < sum) {
		__result += parseFloat( pmt );
		data2[data2.length] = parseFloat( __result );		
	}
	
	console.log(data1);
	console.log(data2);
	console.log(data1.length);
	console.log(data2.length);
	
}