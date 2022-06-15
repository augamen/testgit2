/* **************************navigation************************* */
var navigation = document.querySelector('.navigation');
var img = document.querySelector('.navigation img:nth-of-type(1)');
var nav_a = document.querySelector('.nav_a');
var imgClick = document.querySelector('.navigation img:nth-of-type(2)');
var fontCor = document.querySelectorAll('.nav_a a')
var i = 0;
// window.addEventListener('scroll', function() {
// 	var top = document.documentElement.scrollTop;
// 	if (top >= 100) {
// 		navigation.style.backgroundColor = "#FFFFFF"
// 		img.src = "img/logo2.png"
// 		nav_a.style.right = 0
// 		for (let j = 0; j < fontCor.length; j++) {
// 			fontCor[j].style.color = '#333333'
// 		}
// 	} else {
// 		navigation.style.backgroundColor = ""
// 		img.src = "img/logo.png"
// 		nav_a.style.right = '-764px';
// 		for (let j = 0; j < fontCor.length; j++) {
// 			fontCor[j].style.color = '#FFFFFF'
// 		}
// 	}
// })
imgClick.addEventListener('click', function() {
	i++;
	if (i % 2 == 0) {
		nav_a.style.right = 0
	} else {
		nav_a.style.right = '-764px';
	}
})
/* ******************选项卡*********************** */
var tabs = document.querySelector('.tabs')
var tabTitle = document.querySelectorAll('.tab-title')
var tabContent = document.querySelectorAll('.tab-content')
//事件代理
tabs.addEventListener('click', function(event) {
	//查看是否包含，classList.contains包含，返回true或者flase
	if (event.target.classList.contains('tab-title')) {
		//索引下标
		//[...tabTitle]转化数组
		var index = [...tabTitle].indexOf(event.target);
		//tabs下包含show的移除show
		tabs.querySelector('.show').classList.remove('show');
		tabContent[index].classList.add('show')
		//tabs下包含active的移除active
		tabs.querySelector('.active').classList.remove('active');
		tabTitle[index].classList.add('active')
	}

})
/* **************************************** */
var li = document.querySelectorAll('.tab-content>ul>li')
console.log(li)
var liLen = li.length;
for (var i = 0; i < liLen; i++) {
	li[i].addEventListener('mouseover', function() {
		// this指向被调用者
		var div = this.querySelector('.Div')
		var span = div.querySelector('span')
		var p = div.querySelector('p')
		div.style.backgroundColor = 'rgba(0,0,0,.3)'
		span.style.display = 'block'
		p.style.display = 'block'
		span.classList.add('animate__fadeInDown')
		p.classList.add('animate__fadeInUp')
		span.style.marginTop = 90 + 'px'
		p.style.marginTop = 20 + 'px'
	})

}
for (var i = 0; i < liLen; i++) {
	li[i].addEventListener('mouseout', function() {
		// this指向被调用者
		var div = this.querySelector('.Div')
		var span = div.querySelector('span')
		var p = div.querySelector('p')
		div.style.backgroundColor = 'rgba(0,0,0,0)'
		span.style.display = 'none'
		p.style.display = 'none'
		span.style.marginTop = 0 + 'px'
		p.style.marginTop = 0 + 'px'

	})

}
