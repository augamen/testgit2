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
/* **********content********* */
var li = document.querySelectorAll('.content li')
var liLen = li.length;
for (var i = 0; i < liLen; i++) {
	li[i].addEventListener('mouseover', function() {
		// this指向被调用者
		var div = this.querySelector('.Div')
		var ul = div.querySelector('ul')
		div.style.top = 244+'px';
		div.style.backgroundColor='#22a808'
		div.style.opacity=1
		ul.style.display='block'
	})

}
for (var i = 0; i < liLen; i++) {
	li[i].addEventListener('mouseout', function() {
		// this指向被调用者
		var div = this.querySelector('.Div')
		var ul = div.querySelector('ul')
		div.style.top = 500 + 'px';
		div.style.backgroundColor='rgba(0,0,0,0.3)'
		
		ul.style.display='none'
		
	})

}