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
/* 新闻滚动 */
var arr=[];
$(function() {
	// 设置可以加载开关
	var canLoad = true;
	var page = 1; //请求的第一页数据
	// 定义获取笑话的数据方法
	function getJok() {
		canLoad = false;
		// 通过ajax获取数据
		$.ajax({
				url: `https://520mg.com/mi/list.php?page=${page}&channel_id=hot`,
				method: "GET",
			})
			.then(res => {
				console.log(res);
				res.result.forEach(item => {
					// item是遍历的数据,append是追加的
					$(".list").append(`<div class="item" onclick="showModal()"><p>${item.title}</p></div>`)
					
					arr.push(`${item.docid}`)
				})
				
				console.log(arr)
				page++;
				canLoad = true;
				$(".item").click(function(){
					var index = $(this).index();
					$.ajax({
						url:`https://520mg.com/mi/content.php?id=${arr[index-1]}`,
						method: "GET",
					})
					.then(res=>{
						$(".modal-body").html(`${res.content}`);
					})
					
				})
			})
			
			.catch(xhr => {
				canLoad = true;
				console.log("失败了:", xhr);
			})
	}
	// 执行方法
	getJok();
	// 点击.more 执行getJok加载更多
	// $(".more").click(getJok);

	// 实现自动加载?
	// 监听窗口的滚动,当list的最后一个item与浏览器顶部的距离小于一个屏幕的高,开始加载下一个
	$(".list").scroll(function() {
		var top = $("html,body").scrollTop(); //滚动的距离
		var dis = $(".list .item:last").offset().top; //最后一个item与浏览器的顶部距离(固定)
		// 如果item与浏览器顶部的距离-滚动的距离小于浏览器的高,开始加载下一个
		if (dis - top < window.innerHeight && canLoad) {
			getJok();
		}

	})
})

function showModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	// 添加显示类名
	modal.classList.add("show");
}

function hideModal() {
	// 选择modal
	var modal = document.querySelector(".modal");
	var modalBody = document.querySelector(".modal-body");
	// 清除显示类名
	modal.classList.remove("show");
	modalBody.innerHTML=""
	modal.style.display = 'none'

}



