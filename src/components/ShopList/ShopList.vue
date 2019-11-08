<template>
<section>
    <div>
      <img src="../../../public/images/msite/htl.png"/>
      <span>
        <h5>胡同里京味烤肉</h5>
        <h6>¥<i>89.0</i>起</h6>
      </span>
      <span>
        江浦
      </span>
    </div>
    <div>
      <img src="../../../public/images/msite/ss.png"/>
      <span>
        <h5>舌尚自助</h5>
        <h6>¥<i>60.0</i>起</h6>
      </span>
      <span>
        江宁
      </span>
    </div>
    <div>
      <img src="../../../public/images/msite/nlsg.png"/>
      <span>
        <h5>奶酪时光</h5>
        <h6>¥<i>53.0</i>起</h6>
      </span>
      <span>
        江宁
      </span>
    </div>
    <div>
      <img src="../../../public/images/msite/wq.png"/>
      <span>
        <h5>五区</h5>
        <h6>¥<i>70.0</i>起</h6>
      </span>
      <span>
        玄武
      </span>
    </div>
</section>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  div{
    padding-top:10px;
    padding-left:8px;
    display:flex;
    img{
      width:130px;
    }
    span{
      padding-left:20px;
      padding-top:18px;
      i{
        color:red;
        font-size:26px;
      }
    }
    span:first-of-type{
      width:40%;
    }
  }
</style>
