// runs when DOM is ready
$(document).ready(function() {
//	Util.unSelectify(document.getElementById("menuWrap"));
});


var Util = new function() {this.Objects = new Array();}

// Compiles mailto link based on name and domain
Util.otliam = function(name, domain){
	document.write('<a onclick="Util.otliamNoise(\''+name+'\', \''+domain+'\')" style="cursor:pointer;">'+name+"<span>@</span>"+domain+'</a>');
}
Util.otliamNoise = function(name, domain){
	location.href = "mailto:"+name+"@"+domain+"?subject=Mail fra web&body=Husk at skrive telefonnummer. Svartid på email kan forventes.";
}

Util.Menu = new Object();

Util.Menu.toggle = function(element) {
	$("#"+element).slideToggle(150);
}

Util.unSelectify = function(element) {
	if(Util.explorer()) {
		element.onselectstart = function() {return false;}
	}
	else {
		element.onmousedown = function() {return false;}
	}
}

// Browser definition utilities
Util.explorer = function(version, scope) {
	if(document.all) {
		var current_version = navigator.userAgent.match(/(MSIE )(\d+.\d)/i)[2];
		if(typeof(scope) != "undefined" && !eval(current_version + scope + version)){
			return false;
		}
		else if(typeof(version) != "undefined" && current_version != version) {
			return false;
		}
		else {
			return current_version;
		}
	}
	else {
		return false;
	}
}
// 522 -> 3+
Util.safari = function(version, scope) {
	if(navigator.userAgent.indexOf("Safari") >= 0) {
		var current_version = navigator.userAgent.match(/(Safari\/)(\d+)(.\d)/i)[2];
		if(typeof(scope) != "undefined" && !eval(current_version + scope + version)){
			return false;
		}
		else if(typeof(scope) == "undefined" && typeof(version) != "undefined" && current_version != version) {
			return false;
		}
		else {
			return current_version;
		}
	}
	else {
		return false;
	}
}
Util.firefox = function() {
	if(navigator.userAgent.indexOf("Firefox") >= 0) {
		var current_version = navigator.userAgent.match(/(Firefox\/)(\d+.\d)(.\d.\d)/i)[2];
		if(typeof(scope) != "undefined" && !eval(current_version + scope + version)){
			return false;
		}
		else if(typeof(version) != "undefined" && current_version != version) {
			return false;
		}
		else {
			return current_version;
		}
	}
	else {
		return false;
	}
}

Util.initElements = function() {
	window.scrollTo(0, 0);
	var i, e, elements, ij_value;
	elements = Util.getElementsByClass("i\:([a-zA-Z])+");
	for(i = 0; e = elements[i]; i++) {
		while(ij_value = Util.getIJ("i", e)) {
			e.className = e.className.replace("i:"+ij_value, "");
			if(ij_value && typeof(Util.Objects[ij_value]) == "object") {
				Util.Objects[ij_value].init(e);
			}
		}
	}
}
Util.getElementsByClass = function(classname) {
	var e, i, elements, regexp, return_array = new Array();
	elements = document.getElementsByTagName("*");
	regexp = new RegExp("(^|\\s)" + classname + "(\\s|$|\:)");
	for(i = 0; e = elements[i]; i++) {
		if(regexp.test(e.className)) {
			return_array[return_array.length] = e;
		}
	}
	return return_array;
}
Util.getIJ = function(id, e) {
	var regexp = new RegExp(id + ":[?=\\w/\\#~:.?+=?&%@!\\-]*");
	if(e.className.match(regexp)) {
		return e.className.match(regexp)[0].replace(id + ":", "");
	}
	return false;
}
// trim whitespace and crlf
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "");
}

Util.Objects["logo"] = new function() {
	this.init = function(e) {
		
		var logo = e.parentNode.removeChild(e);
		
		document.getElementById("pageWrap").appendChild(logo);
	}
}

window.onload = Util.initElements;