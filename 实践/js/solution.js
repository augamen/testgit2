/* **************************navigation************************* */
$(function(){
	$(document).scroll(function() {
		var top = $("html,body").scrollTop();
		var righ = $(".nav").css("right")
		console.log(righ)
		if (top >= 100) {
			$(".navbar").css("display", "block");
		} else {
			$(".navbar").css("display", "none");
		}
	})
})


var nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
	var top = document.documentElement.scrollTop;
	if (top >= 100) {
		nav.style.right = 0
	} else {
		nav.style.right = '-608px';
	}
})
/* ************************楼层***************************** */
$(function() {
	// 单击nav li,让页面滚动到对应下标的位置
	// 用数组来缓存每个楼层的位置
	var arr = [];
	// 遍历所有的楼层
	$(".fl").each(function(i, item) {
		// 把每个楼层到顶部的距离 存到arr数组里面
		arr.push($(item).offset().top);
	})
	// console.log(arr);
	// 单击nav li 求出下标索引,让页面滚动到对应索引的位置
	$(".nav1 li").click(function() {
		// 单击元素所在的索引
		var index = $(this).index();
		// animate 动画 scrollTop滚动垂直距离 -44减去nav的高
		// 600 动画时间为0.6秒
		$("body,html").animate({
			scrollTop: arr[index] - 44
		}, 600);
	})
	// 监听页面滚动
	$(document).scroll(function() {
		// 拿到滚动的而距离
		var top = $("html,body").scrollTop();
		if (top >= 100) {
			$(".nav1").fadeIn(1000)
		} else {
			$(".nav1").fadeOut(1000)
		}
		// 默认第null层
		var index = null; //当前进入中心横线是第几个楼层
		// 对arr进行倒序遍历
		for (var i = arr.length - 1; i >= 0; i--) {
			// 如果滚动距离大于arr[i]数值(当前楼层滚动到最顶)
			// index值就是当前i
			// break是为了结束循环
			// -$(window).innerHeight()/2 减去窗口高度的一半
			// 过中心线,判断当前楼层已经过中心页面了
			if (top >= arr[i] - $(window).innerHeight() / 2) {
				index = i; //i是从大到到小,当前是第i层
				break; //跳出循环
			}
		}
		// 有active移除active
		$(".nav1 .active").removeClass("active");
		// 没有active,对第index个添加active
		$(".nav1 li").eq(index).addClass("active");
		console.log(index);
	})
})
