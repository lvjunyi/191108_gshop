<template>
<header>
  <slot name="icon"></slot>
  <span class="address">{{title}}</span>
  <slot name="user"></slot>
</header>
</template>

<script>
export default {
  props:{
    title:String,
  }
}
</script>

<style lang="less" scoped>
header{
  height:6vh;
  width:100%;
  background-color:green;
  color:white;
  display:flex;
  span{
    padding-top:10px;
  }
  i{
    font-size:25px;
    padding-top:10px;
  }
  .address{
    font-size:20px;
    width:70%;
    height:100%;
    text-align:center;
    margin:auto;
  }
  a{
    color:white; 
  }
}
</style>
