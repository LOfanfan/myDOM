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

function displayAbbreviations() {
	
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	//取得缩略词
	var abbreviations = document.getElementsByTagName("abbr");
	//判断是否存在这个元素，没有的话退出来
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	//遍历缩略词
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.length < 1) return false;
		var definition = current_abbr.getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建自定义列表
		var dlist = document.createElement("dt");
	for (key in defs) {
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dl");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把他们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//将标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}
document.getElementsByClassName()
function displayCitations() {
	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotesgth; i++) {
		if (!quotes[i].getAttribute("cite")) continue;
		var url = quotes[i].getAttribute("cite");
	}
}
//DOM方法，鼠标悬停在某个表格行的上方时，把该行文本加黑加粗
			function highlightRows() {
				if (!document.getElementsByTagName) return false;
				var table = document.getElementsByTagName("table")[0];
				var rows = document.getElementsByTagName("tr");
				for (var i = 0; i < rows.length; i++) {
					rows[i].onmouseover = function() {
						this.style.fontWeight = "bold";
					};
					rows[i].onmouseout = function() {
						this.style.fontWeight = "normal";
					};
				}
			}
//为元素添加class，封装为一个函数
function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClass = element.className;
		newClass += " ";
		newClass += value;
		element.className = newClass;
	}
}
//表格斑马线效果的实现
function stripeTable() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for (var i = 0; i < tables.length; i++) {
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
				rows[j].style.backgroundColor = "#ffc";
			} else{
				odd = true;
			}
		}
	}
}
