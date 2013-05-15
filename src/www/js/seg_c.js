var Util = new function() {this.Objects = new Array();}

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

Util.Objects["reader"] = new function() {
	this.init = function(e) {
		var reader = document.createElement("a");
	  //reader.href="?id=" + Util.getIJ("id", e);
		reader.href = "javascript:MIKROV_Find_Og_Afspil_Element('Weblaes');";
		reader.className = "reader";
		reader.innerHTML = "Læs op";
		e.appendChild(reader);
	}
}

window.onload = Util.initElements;

