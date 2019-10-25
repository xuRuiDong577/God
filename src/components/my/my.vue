<template>
<!-- 登录页面 -->
  <div>
    <div class="thing-title">
      <div class="thing-my" @click="myChange()">
        <span class="iconfont icon-zhuye"></span>
      </div>
      <div class="my-long">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt
        />
      </div>
      <div class="thing-s">
        <span class="iconfont icon-sousuo" @click="myShou()"></span>

        <span class="iconfont icon-gouwuche" @click="myGou()"> 
              
        </span>
        <div class="my-bottom-cont">{{$store.getters.getCount}}</div>
      </div>
    </div>

    <div class="my-logoWrap">
      <div class="my-yanlogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="my-buttom">
        <button class="my-buttom-s" @click="myLogin()">手机号快捷登录</button>
        <button class="my-buttom-y" @click="myLogin()">邮箱账号登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my",
  methods: {
    myChange() {
      this.$router.push({ path: "/mian/hello" });
    },
    myGou() {
      this.$router.push({ path: "/mian/shopping" });
    },
    myLogin() {
      this.$router.push({ path: "/login" });
    },
    myShou(){
      this.$router.push({path:"/seek"})
    }
  }
};
</script>
<style >
.my-long {
  width: 74px;
  height: 24px;
  margin-left: 25px;
}
.my-long img {
  width: 100%;
  height: 100%;
}
.my-logoWrap {
  width: 100%;
  height: 400px;
  position: fixed;
  top: 10%;
}
.my-yanlogo {
  width: 40%;
  height: 15%;
  margin: 100px auto;
}
.my-yanlogo img {
  width: 100%;
  height: 100%;
}
.my-buttom {
  width: 100%;
  height: 150px;
}
.my-buttom-s {
  display: block;
  width: 80%;
  height: 30%;
  margin: 10px auto;
  border: none;
  background-color: #dd1a21;
  color: #ffffff;
  font-size: 14px;
  position: relative;
}
.my-buttom-y {
  display: block;
  width: 80%;
  height: 30%;
  margin: 0px auto;
  border: none;
  border: 1px solid #dd1a21;
  color: #dd1a21;
  font-size: 14px;
  background-color: #ffffff;
}
.my-bottom-cont{
  position: absolute;
  top: 5px;
  right: 0px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  text-align: center; 
  line-height: 15px;
  color: #ffffff;
  background-color: #dd1a21;


}
</style>
