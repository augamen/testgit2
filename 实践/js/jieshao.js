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
/********************** 收起与展开 *****************************/
$(function() {
	$(".poster-btn").click(function() {
		if ($(this).text() == "展开更多") {
			$(this).text("收起");
			$(this).siblings(".poster-txt").removeClass("xg").css("height", "auto");
			$(this).addClass('current-menu').siblings().removeClass('current-menu');
		} else {
			$(this).text("展开更多");
			$(this).siblings(".poster-txt").addClass("xg").css("height", "10rem");
			$(this).removeClass('current-menu').siblings().addClass('current-menu');
		}
	});
})
