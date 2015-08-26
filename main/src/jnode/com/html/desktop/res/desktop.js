// add jquery support for this , the following codes are 
// for time displaying 
$(function(){
	var e = $('.inner');
	e.append('<span class="now"></span>');
	var r = $('.now');
	var nw = function nw(){
		r.empty().append(new Date($.now()));
	}
	nw();
	setInterval(function(){
		nw();
	},1000);

});