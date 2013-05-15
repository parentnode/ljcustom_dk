// runs when DOM is ready
$(document).ready(function() {
	Util.unSelectify(document.getElementById("menuWrap"));
});

var Util = new Object();

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