<template>
<section>
  <HeaderTop :title="'昌平北区齐家福北京华联'">
    <i slot="icon" class="iconfont icon-fangdajing"></i>
    <span slot="user">
      <a href="javascript:;">登陆</a>|
      <a href="javascript:;">注册</a>
    </span>
  </HeaderTop>
  <nav>
    <div>
      <span>
        <img src="../../../public/images/msite/lvyou.jpg"  width="100%" />
        <i>旅游</i>
      </span>
      <span>
        <img src="../../../public/images/msite/meishi.jpg"  width="100%" />
        <i>美食</i>
      </span>
      <span>
        <img src="../../../public/images/msite/mendian.jpg"  width="100%" />
        <i>门店</i>
      </span>
      <span>
        <img src="../../../public/images/msite/shangjia.jpg"  width="100%" />
        <i>商家</i>
      </span>
      </div>
    <div>
      <span>
        <img src="../../../public/images/msite/waimai.jpg"  width="100%" />
        <i>外卖</i>
      </span>
      <span>
        <img src="../../../public/images/msite/zhuce.jpg"  width="100%" />
        <i>注册人</i>
      </span>
      <span>
        <img src="../../../public/images/msite/zhusu.jpg"  width="100%" />
        <i>住宿</i>
      </span>
      <span>
        <img src="../../../public/images/msite/zizhi.jpg"  width="100%" />
        <i>资质</i>
      </span>
    </div>
    <div>
      <span>
        <img src="../../../public/images/msite/lvyou.jpg"  width="100%" />
        <i>旅游</i>
      </span>
      <span>
        <img src="../../../public/images/msite/meishi.jpg"  width="100%" />
        <i>美食</i>
      </span>
      <span>
        <img src="../../../public/images/msite/mendian.jpg"  width="100%" />
        <i>门店</i>
      </span>
      <span>
        <img src="../../../public/images/msite/shangjia.jpg"  width="100%" />
        <i>商家</i>
      </span>
    </div>
  </nav>
  <div class="msite_shop_list">
    <span>
      <i class="iconfont icon-liebiao"></i>
      <a>附近商家</a>
    </span>
    <ShopList></ShopList>
  </div>
</section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import ShopList from "../../components/ShopList/ShopList.vue"

export default {
  components:{
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="less" scoped>
section{
  display:flex;
  flex-direction:column;
}
nav{
  div{
    display:flex;
    justify-content:space-around;
    span{
      width:15%;
      img{
        width:100%;
        height:50px;
      }
      i{
        display:block;
        width:100%;
        text-align:center       
      }
    }
  }
}

.msite_shop_list{
  margin-top:10px;
  border-top:1px solid gray;

}
</style>
