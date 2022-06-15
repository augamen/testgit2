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



/* ********************购物车************************ */
$(function() {
	// 计算总价,总数,用一个方法来定义(被执行很多次)
	function getTotal() {
		// 所有选中sel对应 sub小计值相加就是总价
		// 找到所有的sub
		var subs = $(".sel:checked").parents("tr").find(".sub");


		var allprice = 0; //默认值0
		// 遍历subs 累加总加
		subs.each(function(index, item) {
			// 累加每个小计的值 $(item)把当前遍历的元素转为jq对象text()获取文本*1转换为数值
			allprice += $(item).text() * 1;
		})
		// 设置 totalPrice文本为 allprie总价
		$(".totalPrice").text(allprice);
		// 所有选择的sel,对应的input type值为text 值相加就是总数量
		var inputs = $(".sel:checked").parents("tr").find("input:text");
		// 默认数量为0
		var allCount = 0;
		// 遍历每一个input
		inputs.each(function(i, item) {
			// 获取每个input的值 累加到allCount里面
			allCount += $(item).val() * 1;
		})
		$(".totalCount").text(allCount);
	}
	getTotal(); //默认求一次
	// 全选第一步,单击all 让两个sel的checked与all保持一致
	$("#all").change(function() {
		var val = $("#all").prop("checked"); //获取all的checked值 ;props获取节点额属性值,设置节点的属性值
		$(".sel").prop("checked", val); //让.sel与all的checked保持一致
		//勾选变化颜色
		$(this).parents("tr").siblings().toggleClass("show")
		getTotal();
	})
	// 全选第二步,sel单击,查看sel所有的sel的长度与被选中的sel的长度一致,让all选中,
	$(".sel").change(function() {
		// 选中的长度
		var len1 = $(".sel:checked").length;
		if ($(".sel").length === len1) {
			$("#all").prop("checked", true)
		} else {
			$("#all").prop("checked", false)
		}
		//勾选变化颜色
		$(this).parents("tr").toggleClass("show")

		getTotal(); //默认求一次
	})

	// 执行删除,当前删除按钮所在的行删除 remove()
	$(".del").click(function() {
		$(this).parents("tr").remove();
		getTotal();
	})

	// 单击+ 让按钮前面的input +1
	// 单击- 让按钮后面的input -1
	$(".steper .add").click(function() {
		// 获取到input  .prev() 查找当前节点的上一个节点
		var input = $(this).prev();
		// 让input值等于自身的值加+1   *1为了转换为整数
		if (input.val() < 999) {
			input.val(input.val() * 1 + 1)
		} else {
			alert('没有货了,亲')
		}
		// 获取价格 .parents父辈,parent()父亲
		var price = $(this).parents("tr").find(".price").text() * 1;
		// 获取小计
		var sub = $(this).parents("tr").find(".sub");
		// 设置小计的文本为 价格x数量
		sub.text(price * input.val())
		getTotal();

	})

	// 单击- 让按钮后面的input -1
	$(".steper .minus").click(function() {
		// 获取到input  .prev() 查找当前节点的下一个节点
		var input = $(this).next();
		// 让input值等于自身的值加+1   *1为了转换为整数
		
		if (input.val() > 0) {
			input.val(input.val() * 1 - 1)
		} else {
			alert('再减没有了,亲')
		}
		// 获取价格 .parents父辈,parent()父亲
		var price = $(this).parents("tr").find(".price").text() * 1;
		// 获取小计
		var sub = $(this).parents("tr").find(".sub");
		// 设置小计的文本为 价格x数量
		sub.text(price * input.val())
		getTotal();
	})
})
