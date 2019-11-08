<template>
<section>
  <HeaderTop title="订单列表"></HeaderTop>
  <img src="../../../public/images/order/person.jpg"/>
  <div >
    <i>登陆后查看外卖信息</i>
    <el-button type="primary">立即登录</el-button>
  </div>
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
section{
  img{
    display:block;
    width:300px;
    margin:auto;
    margin-top:130px;
  }
  div{
    width:50%;
    margin:auto;
    display:flex;
    flex-direction:column;
    i{
      text-align:center;
      padding-top:5px;
    }
    .el-button{
      width:100px;
      margin:10px auto;
    }
  }
}
</style>
