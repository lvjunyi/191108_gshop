<template>
<div id="app">
  <div class="main">
    <router-view></router-view>
  </div>
  <div class="footer">
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'app',
  components:{
    FooterGuide
  }
}
</script>

<style lang="less" scoped>
#app{
  height:100vh;
  display:flex;
  flex-direction: column;

}
.main{
  flex:1;
  overflow:hidden;
}
.footer{
  border-top:1px solid gray;
}
</style>
