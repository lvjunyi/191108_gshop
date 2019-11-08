<template>
<section>
  <HeaderTop title="搜索"></HeaderTop>
  <div class="search">
    <el-input placeholder="请输入商家或美食"></el-input>
    <el-button type="primary">提交</el-button>
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
.search{
  padding-top:10px;
  display:flex;
  justify-content:space-around;
  .el-input{
    width:270px;
  }
}
</style>
