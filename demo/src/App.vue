<template>
  <div id="app">
    <router-view/>
    <div class="menu">
      <div class="menu_box">
        <ul>
          <router-link :to="{path:'/'}">
            <li class="active">
              <a href="javascript:;">
                <span class="home"></span>
                <p>首页</p>
              </a>
            </li>
          </router-link>
          <router-link :to="{path:'class'}">
            <li>
              <a href="javascript:;">
                <span class="fenlei"></span>
                <p>分类</p>
              </a>
            </li>
          </router-link>
          <router-link :to="{path:'shopCar'}">
            <li>
              <a href="javascript:;">
                <span class="shopCar"></span>
                <p>购物车</p>
              </a>
            </li>
          </router-link>
          <router-link :to="{path:'myself'}">
            <li>
              <a href="javascript:;">
                <span class="myself"></span>
                <p>我的</p>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted:function()
  {
    var aLi = document.querySelectorAll('.menu_box li')
    for (var i = 0 ; i < aLi.length; i++)
    {
      aLi[i].onclick = function ()
      {
        for(var i = 0; i < aLi.length; i++)
        {
          aLi[i].className = aLi[i].className.replace('active','')
        }

        this.className = 'active'
      }
    }

    
  }
}
</script>

<style scoped lang="less">
#app 
{
  width: 100%;
  max-width:750px;  /*根据设计稿 640px  750px*/
  min-width:320px;
  margin:0 auto;
  background: #eee;
  height:100%;
  padding-bottom: 50px;
}

// 底部菜单
.menu
{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  z-index:999;
  background: #fff;

  & .menu_box 
  {
    width:100%;
    height:50px;
    max-width:750px;
    min-width:320px;
    margin:0 auto;
    box-shadow:0 -2px 7px 0px rgba(0,0,0,.1);
    over-flow:hidden;
    box-sizing: border-box;

    & li
    {
      width:25%;
      text-align: center;
      float:left;
      height: 50px;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      tap-highlight-color:rgba(0,0,0,0);

      &.active a p 
      {
        color:red;
      }

      &.active a span.home
      {
        background: url(./assets/首页.png) no-repeat;
        background-size:100%;
      }
      &.active a span.fenlei
      {
        background:url(./assets/分类.png) no-repeat 2px;
        background-size:100%;
      }
      &.active a span.shopCar
      {
        background:url(./assets/购物车.png) no-repeat -2px;
        background-size:100%;
      }
      &.active a span.myself
      {
        background:url(./assets/我 的.png) no-repeat -2px;
        background-size:100%;
      }
      & a 
      {
        display: block;
        height: 100%;
        width: 100%;
        padding-top: 5px;
        box-sizing: border-box;

        & span 
        {
          display: block;
          width: 25px;
          height: 25px;
          margin:0 auto;
          background: blue;
        }
        & span.home
        {
          background: url(./assets/首页1.png) no-repeat;
          background-size:100%;
        }
        & span.fenlei
        {
          background:url(./assets/分类1.png) no-repeat 2px;
          background-size:100%;
        }
        & span.shopCar
        {
          background:url(./assets/购物车1.png) no-repeat -2px;
          background-size:100%;
        }
        & span.myself
        {
          background:url(./assets/我 的1.png) no-repeat -2px;
          background-size:100%;
        }
        & p 
        {
          color:#444;
          font-size:12px;
        }
      }
    }
  }
}
</style>
