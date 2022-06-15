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
		img.src = "img/logo2.png"
		nav_a.style.right = 0
		for (let j = 0; j < fontCor.length; j++) {
			fontCor[j].style.color = '#333333'
		}
	} else {
		navigation.style.backgroundColor = ""
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

/* **************************banner*获取元素************************* */
var swiper = document.querySelector('.swiper')
var swiperItem = document.querySelectorAll('.swiper-item')
var dots = document.querySelector('.dot')
var spans = document.querySelectorAll('span')
var prePic = document.getElementById('prePic')
var nextPic = document.getElementById('nextPic')
swiperItem = Array.from(swiperItem);
spans = Array.from(spans);
var index = 0;

/* **************************自动播放************************* */
function play() {
	index++
	if (index >= 4) {
		index = 0
	}
	showItem();
	showdot()
}
//定时器实现不断切换
var id = setInterval(play, 3500)

/* **************************鼠标移入移出************************* */
//鼠标移出开始轮播
swiper.onmouseout = function() {
	id = setInterval(play, 3500)
}

//鼠标移入开始轮播
swiper.onmouseover = function() {
	clearInterval(id)
}

/* **************************实现swiper-item的切换************************* */
function showItem() {
	//清除show
	//document.querySelector('.swiper .show').classList.remove('show');
	for (var i = 0; i < swiperItem.length; i++) {
		swiperItem[i].classList.remove('show')
	}
	//添加show
	swiperItem[index].classList.add('show')
}
/* **************************对应圆点指示************************* */
function showdot() {
	//清除on
	for (var i = 0; i < spans.length; i++) {
		spans[i].classList.remove('on')
	}
	//添加on
	spans[index].classList.add('on')
}
/* **************************点击圆点(事件代理实现)************************* */
dots.addEventListener('click', function() {
	//获取下标
	// console.log(event.target);
	var ind = Array.from(spans).indexOf(event.target);
	if (ind != -1) {
		index = ind;
		showItem();
		showdot();
	}
})


/* **************************advan_icon鼠标移入移出效果************************* */
var advan_icon = document.querySelector('.advan_icon')
var aMouse = document.querySelectorAll('.advan_icon>a');
var imgs = document.querySelectorAll('.advan_icon>a>img');
var len = aMouse.length;

for (var i = 0; i < len; i++) {
	aMouse[i].addEventListener('mouseover', function() {
		// this指向被调用者
		var img = this.querySelector('img')
		img.style.bottom = 20 + 'px';
	})

}

for (var i = 0; i < len; i++) {
	aMouse[i].addEventListener('mouseout', function() {
		// this指向被调用者
		var img = this.querySelector('img')
		img.style.bottom = 0;
	})

}

/* **************************滚动监听************************* */
var backInDown = document.querySelector('.content>p:nth-of-type(1)')
var fadeInUp = document.querySelector('.content>h1:nth-of-type(1)')
var backInUp = document.querySelector('.content>div:nth-of-type(1)')
var middles_box = document.querySelector('.middles_box')
var services_box = document.querySelector('.services_box')
window.addEventListener('scroll', function() {
	var modal = document.querySelector(".modal");
	var top = document.documentElement.scrollTop;
	console.log(top)
	if (top >= 120) {

		backInDown.classList.add('animate__backInDown')
		fadeInUp.classList.add('animate__fadeInUp')
		backInUp.classList.add('animate__backInUp')
		showModal()


	}
	if (top >= 800) {
		middles_box.style.top = '-100' + 'px'
		middles_box.style.opacity = 1
	}
	if (top >= 2300) {
		services_box.classList.add('animate__backInUp')
	}
})


window.addEventListener('scroll', del)

function del() {
	var modal = document.querySelector(".modal");
	var top = document.documentElement.scrollTop;
	console.log(top)
	if (top >= 120) {

		backInDown.classList.add('animate__backInDown')
		fadeInUp.classList.add('animate__fadeInUp')
		backInUp.classList.add('animate__backInUp')
		showModal()
	}
}


function hideModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	// 移除显示类名
	modal.classList.remove("show");
}
/* ****************middles_box*************** */
var li = document.querySelectorAll('.middles_box li')
var liLen = li.length;
for (var i = 0; i < liLen; i++) {
	li[i].addEventListener('mouseover', function() {
		// this指向被调用者
		var div = this.querySelector('.Div')
		div.style.top = 0;
	})

}
for (var i = 0; i < liLen; i++) {
	li[i].addEventListener('mouseout', function() {
		// this指向被调用者
		var div = this.querySelector('.Div')
		div.style.top = 900 + 'px';
	})

}

function showModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	// 添加显示类名
	modal.classList.add("show");
}

function hideModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	var modal = document.querySelector(".modal");
	// 清除显示类名
	modal.classList.remove("show");
	modal.style.display = 'none'

}
/* **************用户弹窗输入********************* */
function send() {
	var date = new Date().toLocaleDateString();
	var msg = document.getElementById("msg")
	//获取msgBox
	var msgBox = document.querySelector('.modal-body')
	//⭐ 创建新的item 
	var item = document.createElement("div")
	item.className = "item"
	//⭐ 拼接字符串HTML
	var str =
		`
	<p><span>我:</span> ${date}</p>
	<div style=" font-size: 12px;margin-top:10px;">
		${msg.value}
	</div>
	<hr />
	<p><span style="margin-left:-10px;">客服小丽:</span> ${date}</p>
	<div>
		<p style="font-size: 12px;margin-top:10px">如果有需要了解得地方请拨打手机号：15641489329</p>
	</div>
	`
	//设置item的html内容
	item.innerHTML = str;
	//msgBox插入item
	// msgBox.appendChild(item)
	//插入到前面
	msgBox.insertBefore(item, msgBox.firstElementChild)
	//清空用户名、留言内容
	msg.value = '';
}


// /* 读取数据 */
// function getCookie(name) {
// 	//分割cookie存储的数据
// 	var arr = document.cookie.split(";");
// 	//for循环遍历
// 	for (var i = 0; i < arr.length; i++) {
// 		var temp = arr[i].trim().split("=");
// 		if (temp[0] === name) {
// 			return temp[1]
// 		}
// 	}
// }
// var uname = getCookie("uname")
// var ptext = document.querySelector('.pUname');
// ptext.innerHTML=`欢迎用户: <span style="color: #0066FF">${uname}</span>`
$(function() {
	$(".logout").click(logOut)

	function logOut() {
		$.ajax({
				url: "https://520mg.com/member/index_login2.php",
				method: "POST",
				data: {
					dopost: "exit"
				}, //退出和登录一个接口传递参数不一样
				dataType: "json", //返回的数据格式是json
				xhrFields: {
					withCredentials: true, //把本地127.0.0.1的cookie发送给520mg.com
				}
			})
			.then(res => {
				alert(res.msg);
				location.href='Sign.html'
			})
	}
	// 获取用户信息
	function getUserInfo() {
		$.ajax({
				url: "https://520mg.com/member/ajax_login2.php", //请求地址
				method: "GET", //请求的方法
				dataType: "json", //数据返回的类型
				xhrFields: { //把本地cookie发送520mg.com
					withCredentials: true
				}
			})
			.then(res => {
				if (res) { //如果响应数据由
					// 拼装信息
					var str = res.M_UserName + " 积分: " + res.M_Scores + " 级别:" + res.M_Honor;
					// 显示info
					// $(".info").show(); //显示信息
					// // 隐藏header
					// $(".header").hide();
					// // 设置userinfo内容
					$(".userInfo").text(str);

				}
			})
			.catch(err => {
				console.log("网络请求失败")
			})

	}
	getUserInfo();
})
