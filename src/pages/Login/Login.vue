<template>
  <div class="login">
    <i class="el-icon-arrow-left jtou" @click="$router.back()"></i>
    <header>
      <h1>硅谷外卖</h1>
      <div>
        <a href="javascript:;" class="active">短信登录</a>
        <a href="javascript:;">密码登陆</a>
      </div>
    </header>
    <section>
      <div class="login-content">
        <div class="dxlogin on">
          <div class="phone">
            <el-input placeholder="手机号" v-model="phoneNum" clearable></el-input>
            <el-button>获取验证码</el-button>
          </div>
          <div class="code">
             <el-input placeholder="验证码" v-model="code" clearable></el-input>
          </div>
        </div>
        <div class="mmlogin">
          <div class="phone">
            <el-input placeholder="用户名" v-model="username" clearable></el-input>
            <el-button>获取验证码</el-button>
          </div>
          <div class="code">
             <el-input placeholder="密码" v-model="password" clearable></el-input>
          </div>
        </div>
      </div>
      <p>
        温馨提示：未注册硅谷外卖的账号的手机号，登陆时将自动注册，<em>《用户服务协议》</em>
      </p>
      <el-button type="success" class="tijiao">提交</el-button>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      phoneNum:"",
      code:"",
      username:"",
      password:"",
    }
  }
}
</script>

<style lang="less" scoped>
.jtou{
  display:block;
  width:50px;
  height:50px;
  font-size:25px;
  position:absolute;
  top:-60px;
  text-align:center;
  line-height:50px;
  left:-25px;
}
.login{
  width:80%;
  margin:auto;
  margin-top:80px;
  position:relative;
}
header{
  h1{
     font-size:40px;
     font-weight:bold;
     color:green;
     text-align:center;   
  }
  div{
    padding-top:30px;
    padding-bottom:5px;
    display:flex;
    justify-content:space-around;
    width:70%;
    margin:auto;
    a{
      padding-top:3px;
      padding-bottom:3px;
    }
    .active{
      border-bottom:2px solid green;
      color:green;
    }
  }
}
.login-content{
  .dxlogin,.mmlogin{
    display:none;
  }
  .on{
    display:block;
  }
  .phone{
    margin-top:5px;
    display:flex;
    .el-button{
      border-left:none;
    }
  }
  .code{
    margin-top:15px;
  }
}


p{
  padding-top:16px;
  padding-bottom:10px;
  font-size:15px;
  color:gray;
  em{
    color:green;
    font-weight:bold;
  }
}
.tijiao{
  width:100%;
  margin-top:30px;
}

</style>
