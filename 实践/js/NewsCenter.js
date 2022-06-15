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
/* *********************************************** */
//让ul的margin-top为-44px(向上滚动)
setInterval(play, 2500)
var ul = document.querySelector('.scroll ul')

function play() {
	var dis = 0;
	//每次移动44px动画
	var id = setInterval(function() {
		//记录高度
		dis -= 1;
		//使每次移动1px
		ul.style.marginTop = parseInt(ul.style.marginTop) - 1 + 'px'
		//控制高度，清除这次移动
		if (dis <= -75) {
			//将第一个子元素插入到最后面
			ul.appendChild(ul.firstElementChild);
			ul.style.marginTop = '0px'
			clearInterval(id)
		}
	}, 16)

}
