<template>
  <div class="top-top-top">
    <div class="top">
      <div class="top-logo"></div>
      <div class="top-search" @click="topSeek()">
        <i class="el-icon-search"></i>
        <span>搜索商品，共23414款好物</span>
      </div>
      <div class="top-button">
        <button class="login" @click="topDong()" v-if="this.$store.state.loginstatus==false">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopTitle",
  data() {
    return {
      topMessage: true
    };
  },
  methods: {
    topDong() {
      this.$router.push({ path: "/my" });
    },
    topSeek() {
      this.$router.push({ path: "/seek" });
    },
    handleScroll() {
      if (document.documentElement.scrollTop < 200) {
        this.topMessage = true;
      } else {
        this.topMessage = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  }
};
</script>

<style name="toptitle">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 12px;
}
.top-top-top {
  width: 100%;
}
.top {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.21rem 0;
  z-index: 2;
  background: #fff;
  width: 100%;
  position: fixed;
}
.top-logo {
  background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
    no-repeat;
  background-size: cover;
  background-position: center;
  width: 2rem;
  height: 0.53333rem;
}
.top-search {
  background-color: #ededed;
  text-align: center;
  width: 5.8rem;
  height: 0.74667rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.37333rem;
  border-radius: 0.10667rem;
}
.top-search i {
  font-size: 15px;
  margin-right: 5px;
}
.login {
  width: 0.98667rem;
  height: 0.53333rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #b4282d;
  border: 1px solid #b4282d;
  border-radius: 0.10667rem;
  margin-left: 0.21333rem;
  font-size: 0.32rem;
}
.top-top {
  width: 100%;
  height: 60px;
  border: 1px solid red;
}
</style>