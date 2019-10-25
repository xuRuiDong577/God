<template>
  <div class="my-name">
    <div class="thing-title">
      <div class="thing-my" @click="loginChange()">
        <span class="iconfont icon-zhuye"></span>
      </div>
      <div class="my-long">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt
        />
      </div>
      <div class="thing-s">
        <span class="iconfont icon-sousuo"></span>

        <span class="iconfont icon-gouwuche" @click="loginmyGou()"></span>
      </div>
    </div>

    <div class="login-logoWrap">
      <div class="login-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="login-buttom-a">
        <div class="my-nameforslide">
          <div class="my-nameforslide-input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="my-name-pass">
            <input type="text" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="my-name-d">
            <button @click="login">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginChange() {
      this.$router.push({ path: "/mian/hello" });
    },
    loginmyGou() {
      this.$router.push({ path: "/mian/shopping" });
    },
    login() {
      if (
        this.$store.state.userInfo.username == this.username &&
        this.$store.state.userInfo.password == this.password
      ) {
        this.$router.push({ path: "/mian/Personal" });
        this.$store.state.loginstatus = true;
      } else {
        alert("账号密码输入有误！");
      }
    }
  }
};
</script>
<style>
body {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.login-img {
  width: 130px;
  height: 100px;
  margin: 20px auto;
}
.login-img img {
  width: 120px;
  height: 45px;
}
.login-logoWrap {
  width: 100%;
  height: 80%;
  position: fixed;
  top: 10%;
}
.login-buttom-a {
  width: 100%;
  height: 60%;
}
.my-nameforslide {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.my-nameforslide-input {
  width: 100%;
  height: 50px;
  padding: 0px 10px;
}
.my-name-pass {
  width: 100%;
  height: 50px;
  padding: 0px 10px;
}
.my-name-d {
  width: 100%;
  height: 50px;
  margin-top: 30px;
  padding: 0px 15px;
}
.my-nameforslide-input input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #bdbdbd;
}
.my-name-pass input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #bdbdbd;
}
.my-name-d button {
  width: 100%;
  height: 100%;
  border: none;
  background: #dd1a21;
  color: #ffffff;
  font-size: 16px;
}
.my-name {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
</style>