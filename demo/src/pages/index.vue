<template>
	<div id="indexPage">
		<!-- 顶部搜索 -->
		<header class="jd_search">
			<div class="jd_search_box">
				<a href="javascript:;" class="jd_logo"></a>
				<form class="search_box">
					<span class="search_logo"></span>
					<input type="search" name="" class="search" placeholder="come on guys">
				</form>
				<a href="javascript:;" class="jd_login">登录</a>
			</div>
		</header>
		<!-- 轮播图 -->
		<div class="jd_banner clearfix">
			<ul class="clearfix">
				<li><a href="javescript:;"><img src="../assets/l8.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l1.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l2.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l3.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l4.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l5.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l6.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l7.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l8.jpg" alt=""></a></li>
				<li><a href="javescript:;"><img src="../assets/l1.jpg" alt=""></a></li>
			</ul>
			<ul>
				<li class="active"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<!-- 导航栏 -->
		<nav class="jd_nav clearfix">
			<ul class="clearfix">
				<li v-for="item in navs">
					<a href="javascript:;">
						<img :src="item.imgSrc" alt="">
						<p>{{item.text}}</p>
					</a>
				</li>
			</ul>
		</nav>
		<!-- 产品区域 -->
		<div class="jd_product">
			<!-- 京东秒杀 -->
			<div class="kill_box">
				<div class="kill_title clearfix">
					<span>京东秒杀</span>
					<span>18点场</span>
					<span class="kill_time">0</span>
					<span class="kill_time">0</span>
					<span class="kill_time">:</span>
					<span class="kill_time">0</span>
					<span class="kill_time">0</span>
					<span class="kill_time">:</span>
					<span class="kill_time">0</span>
					<span class="kill_time">0</span>
					<a href="javascript">11-11爆款秒杀></a>
				</div>
				<div class="kill_content clearfix">
					<ul class="clearfix">
						<li v-for="item in kills"><a href="#"><img :src="item.imgSrc" alt=""></a></li>
					</ul>
				</div>
			</div>

			<!-- 推荐 -->
			<div class="recommend_box">
				<div class="recommend_title">
					<div class="line"></div>
					<div class="text">为您推荐</div>
				</div>
				<div class="recommend_content">
					<ul class="clearfix">
						<li v-for="item in recommendList">
							<a href=""><img :src="item.imgSrc" alt=""></a>
							<p class="content">{{item.content}}</p>
							<p class="price">{{item.price | filterPrice}}</p>
							<div class="desc">
								<span>好评率 {{item.good | comment}}</span>
								<a href="javascript">看相似</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	filters:{
		filterPrice:function(value)
		{
			var arr = value.toString().split(".")
			if(arr[1].length != 2)
			{	
				arr[0] = "￥" + arr[0]
				arr[1] = arr[1] + '0'
				return arr.join(".")
			}
		},
		comment:function(value)
		{
			return value + "%" 
		}
	},
	data:function(){
		return {
			recommendList:[{
				imgSrc:require("../assets/t1.jpg"),
				content:"新鲜的东西总要好好的去使用",
				price:15.9,
				good:99
			},
			{
				imgSrc:require("../assets/t1.jpg"),
				content:"新鲜的东西总要好好的去使用",
				price:15.9,
				good:99
			},{
				imgSrc:require("../assets/t1.jpg"),
				content:"新鲜的东西总要好好的去使用",
				price:15.9,
				good:99
			},{
				imgSrc:require("../assets/t1.jpg"),
				content:"新鲜的东西总要好好的去使用",
				price:15.9,
				good:99
			},{
				imgSrc:require("../assets/t1.jpg"),
				content:"新鲜的东西总要好好的去使用",
				price:15.9,
				good:99
			},{
				imgSrc:require("../assets/t1.jpg"),
				content:"新鲜的东西总要好好的去使用",
				price:15.9,
				good:99
			}],
			navs:[{
				imgSrc:require("../assets/n1.png"),
				text:"京东超市"
			},{
				imgSrc:require("../assets/n2.png"),
				text:"全球购"
			},{
				imgSrc:require("../assets/n3.png"),
				text:"京东服饰"
			},{
				imgSrc:require("../assets/n4.png"),
				text:"京东生贤"
			},{
				imgSrc:require("../assets/n5.png"),
				text:"京东到家"
			},{
				imgSrc:require("../assets/n6.png"),
				text:"充值缴费"
			},{
				imgSrc:require("../assets/n7.png"),
				text:"领京豆"
			},{
				imgSrc:require("../assets/n8.png"),
				text:"领券"
			},{
				imgSrc:require("../assets/n9.png"),
				text:"赚钱"
			},{
				imgSrc:require("../assets/n10.png"),
				text:"物流查询"
			}],
			kills:[{
				imgSrc:require("../assets/m1.jpg")
			},{
				imgSrc:require("../assets/m2.jpg")
			},{
				imgSrc:require("../assets/m3.jpg")
			},{
				imgSrc:require("../assets/m4.jpg")
			}]
		}
	},
	mounted:function(){
		//搜索透明度
		var oSearchBox = document.querySelector(".jd_search_box")
		var oBanner = document.querySelector(".jd_banner")
		var opacity = 0
		window.onscroll = function ()
		{		
			var scrollTop = document.body.scrollTop
			// console.log("scrollTop : " + scrollTop)
			// console.log("oBanner.offsetHeight : " + oBanner.offsetHeight)
			if ( scrollTop > oBanner.offsetHeight )
			{
				opacity = 0.85
			}
			else
			{
				opacity = 0.85 * ( scrollTop / oBanner.offsetHeight )
			}
			oSearchBox.style.background = "rgba(216,80,92,"+ opacity +")"
		}

		//倒计时 //15小时
		var oTimeBox = document.querySelector(".kill_box .kill_title")
		var aSpan = oTimeBox.querySelectorAll(".kill_time")
		var time = 60*60*15  //15小时    一小时：3600秒
		var timer = setInterval(killTime,1000)

		function killTime(){
			time--   //执行执行减少1
			var H = Math.floor(time / 3600) 
			var M = Math.floor(time % 3600 / 60)
			var S = time%60

			aSpan[0].innerHTML = Math.floor( H / 10 )
			aSpan[1].innerHTML = H % 10
			aSpan[3].innerHTML = Math.floor( M / 10 )
			aSpan[4].innerHTML = M % 10
			aSpan[6].innerHTML = Math.floor( S / 10 )
			aSpan[7].innerHTML = S % 10

			if(time <= 0)
			{
				clearInterval(timer)
			}
		}
		killTime()

		

		//轮播
		var nowIndex = 1
		var timer
		var oUl = oBanner.getElementsByTagName("ul")[0]
		var aBtn = oBanner.getElementsByTagName("ul")[1].getElementsByTagName('li')
		var iWidth = oUl.getElementsByTagName('li')[0].offsetWidth

		// 动态修改banner高度
		this.$nextTick(() => {
			setTimeout(() => {
				oBanner.style.height =oUl.offsetHeight + 'px'
				// console.log(oUl.offsetHeight)
			}, 10)

		});

		function getStyle(obj,name)
		{
			return getComputedStyle(obj,null)[name]
		}
		function startMove(obj,json,callback)
		{
			clearInterval(obj.timer)
			obj.timer = setInterval(function(){

				for ( var attr in json )
				{
					var current = 0 
					current = parseInt( getStyle( obj,attr ) )


					var speed = ( json[attr] - current ) / 10
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

					if(json[attr] == current )
					{
						clearInterval(obj.timer)

						if(callback)
						{
							callback()
						}
					}
					else
					{
						obj.style[attr] = current + speed +'px'
					}
				}
			},30)
		}
		// startMove(oUl,{left:-2*iWidth})
		function startBtn(nowIndex)
		{
			for(var i = 0 ; i<aBtn.length;i++)
			{
				aBtn[i].className = aBtn[i].className.replace('active','')
			}
			if(nowIndex == oUl.children.length - 1)
			{
				// oUl.style.left = -iWidth + 'px'
				nowIndex = 1
			}
			else if(nowIndex == 0)
			{
				nowIndex = 8
			}
			aBtn[nowIndex-1].className = 'active'
		}

		
		timer = setInterval(bannerStart,5000)
		function bannerStart(){
					if(nowIndex == oUl.children.length - 1)
					{
						oUl.style.left = -iWidth + 'px'
						nowIndex = 1
					}
					else if (nowIndex == 0)
					{
						oUl.style.left = -8*iWidth + 'px'
						nowIndex = 8
					}
					nowIndex ++
					startMove(oUl,{left:-nowIndex*iWidth})
					startBtn(nowIndex)
					
				}

		// 移动端触摸点对象集合
		// e.changedTouches 触摸点发生改变时保存得信息得集合 三个事件都会保存
		// e.targetTouches  目标所有触摸点得信息集合  其中没有记录touchend
		// e.touches        页面所有触摸点得信息集合  其中没有记录touchend
		// 坐标
		// clientX/Y 可视区坐标
		// pageX/Y   页面区坐标
		// screenX/Y  基于当前屏幕触摸点得坐标
		// 滑动
		var startX = 0
		var distanceX
		var isMove = false
		oUl.addEventListener('touchstart',function(e){
			clearInterval(timer);
			// 记录当前得位置
			startX = e.touches[0].clientX

		})
		oUl.addEventListener('touchmove',function(e){
			var moveX = e.touches[0].clientX
			distanceX = moveX - startX 
			// 当> 0 右滑动   <0 左滑动
			// 基于当前位置进化滑动得距离等于 当前位置得坐标 + 鼠标记录得偏移值
			var currentX = -nowIndex * iWidth + distanceX
			oUl.style.left = currentX + 'px'
			isMove = true
		})
		oUl.addEventListener('touchend',function(){
			// 滑动事件结束判断滑动距离是否大于三分之一切换图片 不够就定位回去
			if(isMove)
			{
				if(Math.abs(distanceX) < iWidth / 3)
				{
					// 吸附回去
					startMove( oUl,{left:-nowIndex*iWidth} )
				}
				else
				{
					// 距离够了判断方向左边还是右边
					if(distanceX > 0)
					{	
						nowIndex --
						// 向右滑动切换上一张
					}
					else
					{
						nowIndex ++
						// 向左滑动切换下一张
					}
					startMove( oUl,{left:-nowIndex*iWidth} )
					if(nowIndex == 0)
					{
						nowIndex = 8
						oUl.style.left = -nowIndex * iWidth
					}
					else if (nowIndex == 9)
					{
						nowIndex = 1
						oUl.style.left = -nowIndex * iWidth
					}

					startBtn(nowIndex)
					startX = 0
					distanceX = 0
					isMove = false

					timer = setInterval(bannerStart,5000)
				}
			}
			
		})



	}//mounted out

}
</script>
<style  scoped lang="less">

/*顶部搜索*/
.jd_search
{
	position: fixed;
	top: 0;
	left:0;
	width: 100%;
	z-index: 999;
}
.jd_search_box 
{
	width: 100%;
	max-width: 750px;
	min-width:320px;
	height: 40px;
	background: rgba(216,80,92,0);
	margin:0 auto;
	position: relative;
}
.jd_search_box a
{
	position: absolute;
	top:0;
	display: block;
}
.jd_search_box .jd_logo
{
	width: 50px;
	height: 40px;
	left:0;
	background: url(../assets/京东.png) 5px top no-repeat;
	background-size:40px;
}
.jd_search_box .jd_login
{
	width: 60px;
	height: 40px;
	line-height: 40px;
	color:white;
	right:0;
	text-align: center;
}
.jd_search_box .search_box
{
	width: 100%;
	padding-left:50px;
	padding-right:60px;
	box-sizing: border-box;
	position: relative;
}
.jd_search_box .search_box .search
{
	width: 100%;
	height: 30px;
	border-radius:15px;
	margin-top:5px;
	padding-left:40px;
	padding-right:10px;
	box-sizing: border-box;
	font-size:14px;
}
.jd_search_box .search_box .search_logo
{
	position: absolute;
	top: 0px;
	left:60px;
	display: block;
	width: 40px;
	height: 40px;
	background: url(../assets/搜索.png) left center no-repeat;
	background-size: 50%;
}

/*轮播*/
.jd_banner
{	
	width: 100%;
	position: relative;
	overflow: hidden;

	& ul:first-child
	{
		width: 1000%;
		position: absolute;
		top: 0;
		left:-100%;

		& li 
		{
			width: 10%;
			float: left;

			& a
			{
				width: 100%;
				display: block;

				& img
				{
					width: 100%;
					display: block;
				}
			}
		}
	}

	& ul:last-child
	{
		position: absolute;
		left:50%;
		bottom:8px;
		width: 118px;
		margin-left:-59px;

		& li 
		{
			width: 6px;
			height: 6px;
			background: rgba(0,0,0,.5);
			border-radius: 50%;
			float: left;
			margin-left:10px;

			&:first-child
			{
				margin-left:0;
			}

			&.active
			{
				background: #f3f3f3;
			}
		}
	}
}

// 导航

.jd_nav 
{
	width: 100%;
	background: #fff;
	border-bottom:1px solid #ccc;

	& ul
	{
		width: 100%;

		& li
		{
			width: 20%;
			float: left;
			box-sizing: border-box;
			padding:10px 0;
			-webkit-tap-highlight-color:rgba(0,0,0,0);
			tap-highlight-color:rgba(0,0,0,0);

			& a
			{
				display: block;
				width: 100%;

				& img
				{
					width: 34px;
					height: 34px;
					display: block;
					margin:0 auto;
					box-shadow: -1px -1px 8px 2px rgba(0,0,0,.3);
					border-radius:50%;
				}
				& p
				{
					text-align: center;
					color:#333;
					font-size:12px;
					margin-top: 5px;
				}
			}
		}
	}
}

// 产品区
// 秒杀
.jd_product 
{
	width: 100%;
	margin-top: 10px;
	
	border-radius:10px;
	// box-shadow: 0 0 2px rgba(0,0,0,0.5);
	.kill_box
	{
		width: 100%;
		background-color: white;

		& .kill_title
		{
			height: 40px;
			width: 100%;
			line-height: 40px;
			border-bottom:1px solid #ccc;

			& span {
				float: left;
				margin-left: 5px;
				font-size: 12px;
			}
			& span:first-child
			{
				color:red;
				font-weight: 600;
			}
			& span.kill_time
			{
				width:10px;
				height: 20px;
				border:1px solid #eee;
				color:black;
				margin-left: 3px;
				line-height: 20px;
				text-align: center;
				margin-top: 8px;
			}
			& span.kill_time:nth-child(5)
			{
				border:none;

			}
			& span.kill_time:nth-child(8)
			{
				border:none;

			}

			& a {
				float: right;
				color:red;
				margin-right: 10px;
				font-size: 12px;
			}
		}
		& .kill_content
		{
			width: 100%;

			& ul
			{
				widows: 100%;

				& li
				{
					width: 50%;
					float: left;


					& img
					{
						width: 100%;
					}
				}
			}
		}
	}
	.recommend_box {
		margin-top: 10px;
		position: relative;

		& .line {
			width: 100%;
			height: 1px;
			background: #ccc;
			position: absolute;
			margin-top: 20px;
		}

		& .text
		{
			position: absolute;
			top:10px;
			left:50%;
			width: 80px;
			background: #eee;
			text-align: center;
			margin-left: -40px;
		}
		& .recommend_title
		{
			height: 40px;
		}

		& .recommend_content
		{
			width: 100%;

			& ul{
				width: 100%;

				& li 
				{
					width: 49%;
					float: left;
					background: white;
					padding-bottom: 5px;
					margin-top:8px;
					box-shadow: 0 0 2px 1px rgba(0,0,0,.1);

					&:nth-child(1)
					{
						margin-top:0;
					}

					&:nth-child(2)
					{
						margin-top:0;
					}

					&:nth-child(2n)
					{
						margin-left: 2%;
					}

					& a
					{
						display: blcok;
						width: 100%;

						& img
						{
							display: block;
							width: 100%;
						}
					}
					& p 
					{
						padding:2px 10px;

					}
					& p.price
					{
						color:red;
						font-size:16px;
						font-weight: 600;
					}
					& .desc
					{
						width: 100%;

						& span {
							float: left;
							font-size: 12px;
							margin-left: 10px;
						}

						& a
						{
							float: right;
							display: inline-block;
							width: 60px;
							text-align: center;
							border:1px solid #ccc;
							color:#333;
							margin-right: 10px;
						}
					}
					
				}
			}
		}
	}
}
</style>