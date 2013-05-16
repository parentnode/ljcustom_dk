//document.write('<script type="text/javascript" src="http://m.wires.dk/js/identifier.js"></script>');

var applewebkit = navigator.userAgent.toLowerCase().match(/applewebkit\/(\d\d\d)/);
var iphone = navigator.userAgent.toLowerCase().match(/iphone/);
var nokia = navigator.userAgent.toLowerCase().match(/nokia/);
var ie = navigator.userAgent.toLowerCase().match(/msie/);
var android = navigator.userAgent.toLowerCase().match(/android/);

if(iphone) {
	document.write('<script type="text/javascript" src="/js/jquery.js"></script>');
	document.write('<style type="text/css">@import url(/css/seg_e.css);</style>');
	document.write('<style type="text/css">@import url(/css/seg_d.css);</style>');
	document.write('<script type="text/javascript" src="/js/seg_d.js"></script>');
}
else {
	document.write('<script type="text/javascript" src="/js/jquery.js"></script>');
	document.write('<style type="text/css">@import url(/css/seg_e.css);</style>');
	document.write('<script type="text/javascript" src="/js/seg_e.js"></script>');
}
