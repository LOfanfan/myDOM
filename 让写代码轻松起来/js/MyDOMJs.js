//编写addLoadEvent函数，等到页面加载完成之后再执行方法
function addLoadEvent(fuc) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = fuc;
	}else{
		window.onload = function() {
			oldonload();
			fuc();
		}
	}
}
addLoadEvent(countBodyChildren);
//编写insertAftert函数，将新元素插入到目标元素的后面
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode();
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
//编写getHTTPObject方法，兼容所有浏览器
function getHTTPObject() {
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
			catch (e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
			catch (e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP");}
			catch (e) {}
			return false;
		}
		return new XMLHttpRequest();
	}
}
//getNewContent方法，用到了addLoadEvent和getHTTPObject两个方法
function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET", "example.text",true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var text = document.createTextNode(request.responseText);
				para.appendChild(text);
				document.getElementById("new").appendChild(para);
			};
		} 
		request.send(null);
	}else {
			alert("sorry, your browser does't support XMLHTTPRequest");
		}
}
addLoadEvent(getNewContent);