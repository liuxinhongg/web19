var $ = {
	ajax: function(options) {
		//处理url
		var url = options.url;
		if (url === undefined) {
			throw new Error("ajax必须写url");
			return;
		}
		//处理type
		var type = options.type || "get"; //请求类型，默认是
		var datatype = options.datatype || "string"; //返回的数据类型，默认是string
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
					if ((typeof options.success) === "function") {
						var response = "";
						if (datatype === "string") {
							response = xhr.responseText;
						} else if (datatype === "json") {
							response = JSON.parse(xhr.responseText);
						}
						options.success(response); //回调函数
					}
				}
			}
		}
		xhr.open(type, url, true);
		xhr.send(null);
	}
}
