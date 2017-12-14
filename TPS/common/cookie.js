/*
	写入cookie
*/
function setCookie(name, value, expires, path, domain) {
	var sCookie = name + '=' + encodeURIComponent(value);


	if(expires) {
		var oDate = new Date();

		oDate.setDate(oDate.getDate() + expires);

		sCookie += ';expires=' + oDate;
	}


	if(path) {
		sCookie += ';path=' + path;
	}

	if(domain) {
		sCookie += ';domain=' + domain;
	}

	document.cookie = sCookie;
}

/*
	读取cookie
*/
function getCookie(name) {
	var sCookie = document.cookie;

	var aCookie = sCookie.split('; ');

	for(var i = 0; i < aCookie.length; i++) {
		var aTemp = aCookie[i].split('=');
		if(aTemp[0] === name) {
			return decodeURIComponent(aTemp[1]);
		}
	}
}