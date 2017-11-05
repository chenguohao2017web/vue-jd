<template>
	<div class="jd_category">
		<!-- 顶部搜索 -->
		<div class="jd_topBar">
			<router-link class="back_icon" :to="{path:'/'}" @click.native="doSomething"></router-link>
			<form action="#" >
				<input type="text" placeholder="肥牛">
			</form>
			<a href="#" class="menu_icon"></a>
		</div>
		<!-- 内容区 -->
		<div class="jd_main">
			<!-- 左侧分类 -->
			<div class="gory_left">
				<ul>
					<li v-for="item in cateList" :class="{active:item.isActive}">
						<a href="javascript:;">{{item.name}}</a>
					</li>
				</ul>
			</div>
			<!-- 右侧内容 -->
			<div class="content_right">
				<div class="content">
					<a href="javascript:;">
						<img src="../assets/l1.jpg" alt="">
					</a>
					<div class="contBox">
						<div class="goryBox" v-for="item in goryBoxList">
							<h4>热门分类</h4>
							<ul>
								<li>
									<a href="javascript">
										<img :src="item.imgSrc" alt="">
										<p>{{item.content}}</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
	data:function(){
		return {
			goryBoxList:[{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},{
				imgSrc:require('../assets/l1.jpg'),
				content:"休闲"
			},],
			cateList:[{
				name:"热门推荐",
				isActive:false
			},{
				name:"潮流女装",
				isActive:true
			},{
				name:"品牌男装",
				isActive:false
			},{
				name:"内衣配饰",
				isActive:false
			},{
				name:"家用电器",
				isActive:false
			},{
				name:"电脑办公",
				isActive:false
			},{
				name:"手机数码",
				isActive:false
			},{
				name:"母婴频道",
				isActive:false
			},{
				name:"图书",
				isActive:false
			},{
				name:"家具家纺",
				isActive:false
			},{
				name:"家具建材",
				isActive:false
			},{
				name:"手机数码",
				isActive:false
			},{
				name:"母婴频道",
				isActive:false
			},{
				name:"图书",
				isActive:false
			},{
				name:"家具家纺",
				isActive:false
			},{
				name:"家具建材",
				isActive:false
			}]
		}
	},
	methods:{
		doSomething:function()
		{
			var aLi = document.querySelectorAll('.menu_box li')
			aLi[1].className = aLi[1].className.replace('active','')
			aLi[0].className = 'active'
		},
		changeIndex:function(index)
		{
			var arr = this.cateList
			for(var i =0 ; i < arr.length;i++)
			{
				arr[i].isActive = false
			}
			arr[index].isActive = true
		}
	},
	mounted:function ()
	{	
		// 滚动插件
		var oGoryWrap = document.querySelector('.gory_left')
		var oContentWrap = document.querySelector('.content_right')
		new Bscroll(oGoryWrap,{click:true})
		new Bscroll(oContentWrap,{click:true})
		var _this = this
		// 菜单高亮控制
		var aLi = oGoryWrap.querySelectorAll('li')
		for(var i = 0 ; i < aLi.length ;i ++)
		{
			aLi[i].index = i
			aLi[i].onclick = function()
			{
				// console.log(this.index)
				_this.changeIndex(this.index)
			}
		}
	}
}
</script>
<style lang="less" scoped>
.jd_category
{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #eee;

}
.jd_topBar 
{
	width: 100%;
	height: 50px;
	position: absolute;
	border-bottom:1px solid #ccc;
	z-index: 999;
	background: #eee;

	& .back_icon
	{
		width: 50px;
		height: 50px;
		position: absolute;
		top:0;
		left: 0;
		background: url("../assets/返回 (4).png") no-repeat center center;
		background-size:60%;
	}
	& .menu_icon
	{
		width: 50px;
		height: 50px;
		position: absolute;
		top:0;
		right: 0;
		background: url("../assets/菜单.png") no-repeat center center;
		background-size:60%;
	}
	& form 
	{
		width: 100%;
		height: 50px;
		padding: 0 50px;
		box-sizing: border-box;

		& input 
		{
			width: 100%;
			height: 30px;
			margin-top:10px;
			padding: 0 10px;
			box-sizing: border-box;
		}
	}
}
.jd_main
{
	padding:50px 0;
	box-sizing: border-box;
	width: 100%;
	height: 100%;

	& .gory_left
	{
		width: 90px;
		height: 100%;
		float: left;

		& ul
		{
			width: 100%;

			& li
			{
				width: 100%;
				height: 50px;
				line-height: 50px;
				box-sizing: border-box;
				border-right:1px solid #ccc;
				border-bottom:1px solid #ccc;
				text-align: center;
				background: #eee;
				& a {
					color:#333;
					display: block;
				}
			}
			& li.active
			{
				border-right:1px solid transparent;
				background: white;

				& a {
					color:red;
				}
			}
		}
	}
	& .content_right 
	{
		overflow: hidden;
		height: 100%;
		background: white;

		& .content
		{
			width: 100%;
			padding:10px;
			box-sizing: border-box;

			& a
			{
				display: block;

				& img
				{
					width: 100%;
				}
			}

			& .contBox 
			{
				width: 100%;
				height: 100%;

				& .goryBox
				{
					width: 100%;

					& h4
					{
						margin : 5px 0 ;
					}
					& ul
					{
						width: 100%;

						& li
						{
							width: 33.3%;

							& a
							{
								display: block;

								& p
								{
									color:#333;
									font-size: 12px;
									text-align: center;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>