/* *************************************************表单验证***************************************************** */

function submitHd() {
	var a1 = validate();
	var a2 = checkuname();
	var a3 = checkutel();
	var a4 = checkpw1();
	// var uname = document.getElementById("uname").value;
	// var upass = document.getElementById("pw1").value;
	// // 调用setCookie()设置uname与upass的cookie
	// setCookie("uname", uname, 30);
	// setCookie("upass", upass, 30);
	return a1 && a2 && a3 && a4
}
/* 重复密码判断 */
function validate() {
	var pw1 = document.getElementById("pw1").value; /* 给pw1和pw2定义一个var，通过id获得属性值*/
	var pw2 = document.getElementById("pw2").value;
	if (pw1 == pw2) { /* 通过if/else来判断两个数据是否一样，一样显示为true；否则为false*/
		document.getElementById("tishi").innerHTML = "<font color='green'>两次密码相同</font>";
		return true;
	} else {
		document.getElementById("tishi").innerHTML = "<font color='red'>两次密码不相同</font>";
		return false;
	}
}
/* 用户名校验 */
function checkuname() {
	var name = document.getElementById("uname");

	console.log(name.value)
	var nameError = document.getElementById("nameError");
	var nameregExp = /[\u4e00-\u9fa5]/;
	var nameregExpOK = nameregExp.test(name.value)

	if (nameregExpOK) {
		nameError.innerHTML = "<font color='green' size='2'>姓名正确！</font>"
		return true;
	}
	if (!nameregExpOK) {
		//名字报错
		nameError.innerHTML = "<font color='red' size='2'>姓名有误！</font>"
		return false;
		//聚焦清空模块
		document.getElementById("uname").onfocus = function() {
			name.value = ""
			//清空报错p标签
			nameError.innerText = ""
		}
	}
}
/* 电话校验 */
function checkutel() {
	var tel = document.getElementById("utel");
	console.log(tel.value)
	var telError = document.getElementById("telError");
	var telregExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var telregExpOK = telregExp.test(tel.value)
	if (telregExpOK) {
		telError.innerHTML = "<font color='green' size='2'>手机号正确！</font>"
		return true;
	}
	if (!telregExpOK) {
		//电话号报错
		telError.innerHTML = "<font color='red' size='2'>手机号格式错误！</font>"
		return false;
		//聚焦清空模块
		document.getElementById("utel").onfocus = function() {
			tel.value = ""
			//清空报错p标签
			telError.innerText = ""
		}
	}
}
// document.getElementById('utel').onblur = function() {

// }
/* 密码校验 */
function checkpw1() {
	var pw1 = document.getElementById("pw1");
	var pw1Error = document.getElementById("psw1Error");
	var pw1regExp = /^(?=.*[a-zA-Z])(?=.*\d).{1,9}$/;
	var pw1regExpOK = pw1regExp.test(pw1.value)
	if (pw1regExpOK) {
		pw1Error.innerHTML = "<font color='green' size='2'>密码正确！</font>"
		return true;
	}
	if (!pw1regExpOK) {
		//电话号报错
		pw1Error.innerHTML = "<font color='red' size='2'>密码不符合格式</font>"
		return false;
		//聚焦清空模块
		document.getElementById("pw1").onfocus = function() {
			pw1.value = ""
			//清空报错p标签
			pw1Error.innerText = ""
		}
	}
}
/* *******************************数据存储******************************* */
// function setCookie(name, value, day = 0, path = '/') {
// 	var str = name + "=" + value + ";";
// 	//获取当前时间
// 	var d = new Date();
// 	//设置过期时间
// 	d.setDate(d.getDate() + day);
// 	str += "expires" + "=" + d + ";";
// 	//设置存储位置
// 	str += "path" + "=" + path + ";";
// 	document.cookie = str;
// }
$(function() {
	// 01 单击login 执行ajax请求登录
	$(".login").click(function() {
		if(!submitHd()){return};
		// if(submitHd()==true){
			// 获取用户名和密码的值
			var uname = $(".uname").val();
			var upass = $(".upass").val();
			// var upass1 = $(".upass1").val(); 
			// 发起ajax请求
			$.ajax({
					url: "https://520mg.com/member/reg_new2.php",
					method: "POST",
					data: { // 发给服务器验证的数据
						userid: uname,
						userpwd: upass,
						email: '1140324315@qq.com',
					},
					dataType: "json", //返回的数据格式是json
					xhrFields: {
						withCredentials: true, //把本地127.0.0.1的cookie发送给520mg.com
					}
				})
				.then(res => {
					// 弹出服务器返回的信息
					alert(res.msg);
					if (res.status == 1) { //如果status为1登录成功
						// 跳转到首页
						location.href = "index.html"
					}
				})
				.catch(xhr => console.log("网络请求失败"))
		 
		
		

	})
	// 02 ajax通过,登录成功跳转到首页
	// zeng8,zeng9,zeng10-----zeng200
	// zmm123
})
