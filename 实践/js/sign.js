function submitHd() {
	var a1 = sign();
	return a1 
}


/* 读取数据 */
function getCookie(name) {
	//分割cookie存储的数据
	var arr = document.cookie.split(";");
	//for循环遍历
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i].trim().split("=");
		if (temp[0] === name) {
			return temp[1]
		}
	}
}
var uname = getCookie("uname")
var upass = getCookie("upass")
console.log(uname)
console.log(upass)

function sign() {
	var name = document.getElementById('name').value;
	console.log(name)
	
	var paw = document.getElementById('paw').value;
	
	console.log(paw)
	if (uname == name && upass == paw){
		return true;
	}else{
		return false
	}
}

