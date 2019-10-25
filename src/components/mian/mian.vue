<template>
  <div>
    <!-- 底部分类条 -->
    <router-view></router-view>
    <div class="mian-bottom">
      <!-- <router-link to="/mian/hello"> -->
      <div
        class="mian-bottom-title"
        @click="def(0)"
        :class="{'mianActive':mianIndex=='/mian/hello'}"
      >
        <span
          class="iconfont icon-zhuye span"
          :class="{'mianActive span':mianIndex=='/mian/hello'}"
        ></span>首页
      </div>
      <!-- </router-link> -->
      <!-- <router-link to="/mian/calssify"> -->
      <div
        class="mian-bottom-title"
        @click="classify(1)"
        :class="{'mianActive':mianIndex=='/mian/calssify'}"
      >
        <span
          class="iconfont icon-cat-normal span"
          :class="{'mianActive span':mianIndex=='/mian/calssify'}"
        ></span>
        分类
      </div>
      <!-- </router-link> -->
      <!-- <router-link to="/mian/thing"> -->
      <div
        class="mian-bottom-title"
        @click="seek(2)"
        :class="{'mianActive':mianIndex=='/mian/thing'}"
      >
        <span
          class="iconfont icon-tupian span"
          :class="{'mianActive span':mianIndex=='/mian/thing'}"
        ></span>
        实物
      </div>
      <!-- </router-link> -->
      <!-- <router-link to="/mian/shopping"> -->
      <div
        class="mian-bottom-title"
        @click="shopping(3)"
        :class="{'mianActive':mianIndex=='/mian/shopping'}"
      >
        <span
          class="iconfont icon-gouwuche-copy span"
          :class="{'mianActive span':mianIndex=='/mian/shopping'}"
        ></span>
        购物车
        <div class="mian-bottom-cont">{{$store.getters.getCount}}</div>
      </div>
      <!-- </router-link> -->
      <!-- <router-link to="/my"> -->
      <div
        class="mian-bottom-title"
        @click="changeStatus(4)"
        :class="{'mianActive':mianIndex=='/mian/Personal'}"
      >
        <span class="iconfont icon-wo span" :class="{'mianActive':mianIndex=='/mian/Personal'}"></span>
        个人
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      mianIndex: this.$route.path
    };
  },
  updated() {
    this.mianIndex = this.$route.path;
  },
  methods: {
    def(index) {
      this.mianIndex = index;
      this.$router.push({ path: "/mian/hello" });
    },
    classify(index) {
      this.mianIndex = index;
      this.$router.push({ path: "/mian/calssify" });
    },
    seek(index) {
      this.mianIndex = index;
      this.$router.push({ path: "/mian/thing" });
    },

    shopping(index) {
      this.mianIndex = index;
      this.$router.push({ path: "/mian/shopping" });
      // if(this.$store.state.loginstatus==true){

      // }
    },
    changeStatus(index) {
      if (this.$store.state.loginstatus == true) {
        this.mianIndex = index;
        this.$router.push({ path: "/mian/Personal" });
      } else {
        this.$router.push({ path: "/my" });
        this.mianIndex = index;
      }
    }
  }
};
</script>
<style scoped>
.mian-bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  background-color: #ffffff;
  align-items: center;
  z-index: 99;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
.mian-bottom-title {
  display: flex;
  flex-direction: column;
  height: 80%;
  font-size: 15px;
  color: #666;
  position: relative;
}
.mian-bottom-title span {
  text-align: center;
  color: #666;
  font-size: 20px;
}
.mianActive {
  color: #b4282d;
}
.mianActive span {
  color: #b4282d;
}
.mian-bottom-cont {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px solid red;
  border-radius: 50%;
  text-align: center;
  line-height: 15px;
  color: #ffffff;
  background-color: #b4282d;
}
</style>
