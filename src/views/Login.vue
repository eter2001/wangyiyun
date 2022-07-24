<template>
  <div class="container-login">

    <div class="login-box">
      <i class="iconfont icon-cuowuguanbiquxiao close" @click="close"></i>
      <div class="login-form validate-form">
        <span class="login-form-title p-b-26 iconfont icon-wangyiyun"></span>

        <div class="login-input-wrap validate-input">
          <input class="login-input" type="text" name="account" required placeholder="用户名" v-model="username" />
        </div>
        <div class="login-input-wrap validate-input">
          <i class="eye iconfont icon-yanjing_xianshi_o"></i>
          <input class="login-input" type="password" name="pass" id="pwdInput" required placeholder="密 码"
            v-model="pwd" />
        </div>
        <button class="login-form-btn" @click="userLogin">登录</button>
        <div class="text-center">
          <span class="txt1">还没账号?</span>
          <a class="txt2" href="#">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { phoneLogin } from "../api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Toast } from 'vant'
export default {
  setup() {
    let username = ref();
    let pwd = ref();
    let router = useRouter();
    let store = useStore();

    let userLogin = async () => {
      if(!(username.value&&pwd.value)){
        Toast.fail('失败')
        return ;
      }
      let res = await phoneLogin(username.value, pwd.value);
      console.log(res);
      if (res.data.code == 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({ isLogin: true, account: res.data.account })
        );
        localStorage.setItem('cookie', JSON.stringify(res.data.cookie))
        store.setUser([true, res.data.account]);
        router.push("/me");
      } else {
        console.log("login fail");
        Toast.fail('账号或密码错误')
      }
    };
    let close=()=>{
      router.go(-1)
    }
    return { username, pwd, close,userLogin };
  },
};
</script>

<style lang="less" scoped>
input {
  outline: none;
  border: none;
}

button,
input {
  overflow: visible;
}

button {
  outline: none !important;
  border: none;
  background: transparent;
}

.text-center {
  text-align: center !important;
  padding: 1rem;

  .txt1 {
    font-size: 0.2rem;
  }

  .txt2 {
    font-size: 0.2rem;
  }
}

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login {
  width: 7.5rem;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100vw;
  height: 100vh;
  background: orangered;
  margin: 0 auto;
  overflow: hidden;
  padding: 2rem 1rem;
  .close{
      position: absolute;
      top:0.7rem;
      right:0.7rem;
      font-size: 0.4rem;
      color: #fff;
  }
}

.login-form {
  width: 100%;
}

.login-form-title {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: white;
  line-height: 1.2;
  text-align: center;
}

.validate-input {
  position: relative;
}

.login-input-wrap {
  width: 100%;
  position: relative;
  border-bottom: 0.05rem solid white;
  height: 1rem;
  margin: 0.5rem auto;

  .eye {
    color: white;
    font-size: 00.5rem;
    position: absolute;
    right: 0;
    bottom: 0.3rem;
  }
}

.login-input {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.3rem;
  color: white;
  width: 100%;
  height: 0.8rem;
  background: transparent;
  padding: 0 5px;
}

.input-focus {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.input-focus::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2.5px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  background: #6a7dfe;
  background: -webkit-linear-gradient(left, #21d4fd, #b721ff);
  background: -o-linear-gradient(left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(left, #21d4fd, #b721ff);
  background: linear-gradient(left, #21d4fd, #b721ff);
}

.input-focus::after {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: white;
  line-height: 1.2;
  content: attr(placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 16px;
  left: 0px;
  padding-left: 5px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-input:focus~.input-focus::before,
.login-input:valid~.input-focus::before {
  width: 100%;
}

.login-input:focus~.input-focus::after,
.login-input:valid~.input-focus::after {
  top: -10px;
}

.btn-show-pass {
  font-size: 15px;
  color: white;
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  right: 0;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.container-login-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 13px;
}

.wrap-login-form-btn {
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 25px;
  overflow: hidden;
  margin: 0 auto;
}

.login-form-bgbtn {
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  background: #a64bf4;
  background: -webkit-linear-gradient(right,
      #21d4fd,
      #b721ff,
      #21d4fd,
      #b721ff);
  background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
  background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
  background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
  top: 0;
  left: -100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn {
  font-family: Poppins-Medium;
  font-size: 0.4rem;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 0.05rem solid #fff;
  border-radius: 1rem;
  margin-top: 2rem;
}

.wrap-login-form-btn:hover .login-form-bgbtn {
  left: 0px;
}

.txt1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  color: white;
  line-height: 1.5;
}

.txt2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  color: #333333;
  line-height: 1.5;
}

.p-b-26 {
  padding-bottom: 26px;
}

.p-b-48 {
  padding-bottom: 48px;
}

.p-t-115 {
  padding-top: 115px;
}
</style>