<template>
<section>
  <HeaderTop title="我的"></HeaderTop>
  <router-link class="landInfo" to="/login">
    <i class="iconfont icon-wo1"></i>
    <span>
      <div>
        <a>登录</a>|<a>注册</a>
      </div>
      <div>
        <i class="iconfont icon-shouji"></i>
        <i>暂无绑定手机号</i>
      </div>
    </span>
  </router-link>
  <div class="surplus">
    <span>
      <i><em>0.00</em>元</i>
      <i>我的余额</i>
    </span>
    <span>
      <i><em>0</em>个</i>
      <i>我的优惠</i>
    </span>
    <span>
      <i><em>0</em>分</i>
      <i>我的积分</i>
    </span>
  </div>
  <ul>
    <li>
      <i class="iconfont icon-wodedingdan"></i>
      <span>我的订单</span>
    </li>
    <li>
      <i class="iconfont icon-jifen"></i>
      <span>积分商城</span>
    </li>
    <li>
      <i class="iconfont icon-huiyuanqiaguanli"></i>
      <span>会员外卖卡</span>
    </li>
    <li>
      <i class="iconfont icon-fuwuzhongxin"></i>
      <span>服务中心</span>
    </li>
  </ul>
</section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  components:{
    HeaderTop
  }
}
</script>

<style lang="less" scoped>
.landInfo{
  border-top:1px solid #FFF;
  height:80px;
  width:100%;
  display:flex;
  background-color:green;
  .icon-wo1{
    font-size:50px;
    color:gray;
    margin-top:15px;
    margin-left:10px;
  }
  span{
    display:flex;
    height:50px;
    margin-top:18px;
    margin-left:30px;
    flex-direction:column;
    color:#FFF;
    div{
      flex:1;
      a{
        color:#fff;
        font-size:17px;
      }
      i{
        padding-top:3px;
        font-size:13px;
      }
    }
  }
}

.surplus{
  display:flex;
  border-bottom:1px solid gray;
  span{
    flex:1;
    text-align:center;
    display:flex;
    flex-direction:column;
    border-right:1px solid gray;
    padding:23px;
    em{
      font-size:30px;
      font-weight:bold;
    }
  }
  span:last-child{
    border-right:none;
  }
}
.surplus{
  span:nth-child(1){
    em{
      color:orange;
    }
  }
  span:nth-child(2){
    em{
      color:red;
    }
  }
  span:nth-child(3){
    em{
      color:green;
    }
  }
}

ul{
  li{
    height:40px;
    line-height:40px;
    border-bottom:1px solid gray;
    padding-left:10px;
    font-size:15px;
    span{
      margin-left:7px;
    }
    .icon-wodedingdan{
      color:green;
    }
    .icon-jifen{
      color:red;
    }
    .icon-huiyuanqiaguanli{
      color:yellow;
    }
    .icon-fuwuzhongxin{
      color:green;
    }
  }
}
</style>
