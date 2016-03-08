var html = ["<div id='bt'></div>", "<div id='bt-bot-cap'></div>", "<div id='bt-bot-cap2'></div>", "<div id='bt-bot-cap3'></div>", "<div id='bt-top-cap'></div>", "<div id='bt-top-cap2'></div>", "<div id='bt-top-cap3'></div>", "<div id='tb'></div>", "<div id='tb-top-cap'></div>", "<div id='tb-top-cap2'></div>", "<div id='tb-top-cap3'></div>", "<div id='tb-bot-cap'></div>", "<div id='tb-bot-cap2'></div>", "<div id='tb-bot-cap3'></div>", "<div id='fore-topcap'></div>", "<div id='fore-topcap2'></div>", "<div id='fore-botcap'></div>", "<div id='fore'></div>", "<div id='back'></div>", "<div id='back-cap'></div>", "<div id='back-cap2'></div>"]

$("document").ready(function(){

	$.each(html, function(i,v){
		$("#html .text").append(document.createTextNode(v))
		$("#html .text").append("<br>")
	})

})
