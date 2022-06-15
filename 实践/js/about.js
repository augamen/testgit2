/* **************************navigation************************* */
var navigation = document.querySelector('.navigation');
var img = document.querySelector('.navigation img:nth-of-type(1)');
var nav_a = document.querySelector('.nav_a');
var imgClick = document.querySelector('.navigation img:nth-of-type(2)');
var fontCor = document.querySelectorAll('.nav_a a')
var i = 0;
window.addEventListener('scroll', function() {
	var top = document.documentElement.scrollTop;
	if (top >= 100) {
		navigation.style.backgroundColor = "#FFFFFF"
		navigation.style.boxShadow = '0 1px 5px #FFFFFF'
		img.src = "img/logo2.png"
		nav_a.style.right = 0
		for (let j = 0; j < fontCor.length; j++) {
			fontCor[j].style.color = '#333333'
		}
	} else {
		navigation.style.backgroundColor = ""
		navigation.style.boxShadow = ''
		img.src = "img/logo.png"
		nav_a.style.right = '-764px';
		for (let j = 0; j < fontCor.length; j++) {
			fontCor[j].style.color = '#FFFFFF'
		}
	}
})
imgClick.addEventListener('click', function() {
	i++;
	if (i % 2 == 0) {
		nav_a.style.right = 0
	} else {
		nav_a.style.right = '-764px';
	}
})
/* ******************************弹窗****************************** */

function showModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	// 添加显示类名
	modal.classList.add("show");
}

function hideModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	// 清除显示类名
	modal.classList.remove("show");
}

/* ******************************表单验证****************************** */
document.getElementById('uemail').onblur = function() {
	var email = document.getElementById("uemail");
	console.log(email.value)
	var emailError = document.getElementById("emailError");
	var emailregExp=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var emailregExpOK=emailregExp.test(email.value)
	//邮箱格式正确
	if(emailregExpOK){
		emailError.innerHTML="<font color='green' size='2'>邮箱正确！</font>"
	}
	if (!emailregExpOK){
	//邮箱格式报错
	    emailError.innerHTML="<font color='red' size='2'>邮箱格式错误！</font>"
	    //聚焦清空模块
	    document.getElementById("uemail").onfocus=function(){
	        email.value=""
	        //清空报错p标签
	        emailError.innerText=""
	    }
	}
}

document.getElementById('utel').onblur = function() {
	var tel = document.getElementById("utel");
	console.log(tel.value)
	var telError = document.getElementById("telError");
	var telregExp=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var telregExpOK=telregExp.test(tel.value)
	if(telregExpOK){
		telError.innerHTML="<font color='green' size='2'>手机号正确！</font>"
	}
	if (!telregExpOK){
	//电话号报错
	    telError.innerHTML="<font color='red' size='2'>手机号格式错误！</font>"
	    //聚焦清空模块
	    document.getElementById("utel").onfocus=function(){
	        tel.value=""
	        //清空报错p标签
	        telError.innerText=""
	    }
	}
}

document.getElementById('uname').onblur = function() {
	var name = document.getElementById("uname");
	
	console.log(name.value)
	var nameError = document.getElementById("nameError");
	var nameregExp=/[\u4e00-\u9fa5]/;
	var nameregExpOK=nameregExp.test(name.value)
	
	if(nameregExpOK){
		nameError.innerHTML="<font color='green' size='2'>姓名正确！</font>"
	}
	if (!nameregExpOK){
	//名字报错
	    nameError.innerHTML="<font color='red' size='2'>姓名有误！</font>"
	    //聚焦清空模块
	    document.getElementById("uname").onfocus=function(){
	        name.value=""
	        //清空报错p标签
	        nameError.innerText=""
	    }
	}
}

function change() {
	    var code = document.getElementById("yz");
	    // 验证码的组成（构造一个数组）
	    var moreCode = new Array(
				'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
				'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
				'u', 'v', 'w', 'x', 'y', 'z',
				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
				'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
				'U', 'V', 'W', 'X', 'Y', 'Z'
		);
	    codes = '';// 重新初始化验证码
	    for (var i = 0; i < 6; i++) {
	        // 随机获取一个数组
	        var a = parseInt(Math.random() * moreCode.length);
	        codes += moreCode[a];
	    }
	    // 验证码添加到标签中
	    document.getElementById("yz").innerText= codes;
}

