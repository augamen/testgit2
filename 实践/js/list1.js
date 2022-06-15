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
/* *****************************图片懒加载***************************** */
window.addEventListener('scroll',lazy);
//默认执行一次
// lazy();

function lazy() {
	//获取每一个照片
	var imgs = document.querySelectorAll("img[data-src]");
	//遍历每一个img
	imgs.forEach(item => {
		//获取元素与浏览器可视化区域的边界
		var y = item.getBoundingClientRect().y
		if (y < window.innerHeight) {
			//设置图片的src为data-src
			item.src = item.getAttribute("data-src");
			//移除data-src属性
			item.removeAttribute("data-src");
		}
	})
}
