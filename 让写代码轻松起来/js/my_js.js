//getElementsByClassName方法只在某些比较新的浏览器才支持
//让其他浏览器也支持这一方法，写一个函数（这个方法不适用于含有多个class类名）
function getElementsByClassName(node, classname){
	if (node.getElementsByClassName) {
		//使用现有的方法
		return node.getElementsByClassName(classname);
	} else{
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].className.indexOf(classname) != -1) {
				results[results.length] = elems[i];
			}
		}
		return rusults;
	}
}

