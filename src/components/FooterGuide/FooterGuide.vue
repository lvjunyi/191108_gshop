<template>
<div class="footer_guide">
  <a href="javascript:;" class="guide_item" :class="{'on':'/msite'==$route.path}"
      @click="goTo('/msite')">
    <span class="item_icon">
      <i class="iconfont icon-icon-test"></i>
    </span>
    <span>外卖</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{'on':'/search'==$route.path}"
    @click="goTo('/search')">
    <span class="item_icon">
      <i class="iconfont icon-sousuo"></i>
    </span>
    <span>搜索</span>
  </a>   
  <a href="javascript:;" class="guide_item" :class="{'on':'/order'==$route.path}"
    @click="goTo('/order')">
    <span class="item_icon">
      <i class="iconfont icon-6"></i>
    </span>
    <span>订单</span>
  </a> 
  <a href="javascript:;" class="guide_item" :class="{'on':'/profile'==$route.path}"
    @click="goTo('/profile')">
    <span class="item_icon">
      <i class="iconfont icon-wode"></i>
    </span>
    <span>我的</span>
  </a> 
</div>
</template>

<script>
export default {
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less" scoped>
.footer_guide{
  height:60px;
  width:100%;
  display:flex;
  a{
    flex:1;
    display:flex;
    flex-direction: column;
    text-align:center;
    span{
      padding-top:2px;
      .iconfont{
        font-size:30px;
        flex:2
      }

    }
  }
}
.on{
  color:green;
}

</style>
