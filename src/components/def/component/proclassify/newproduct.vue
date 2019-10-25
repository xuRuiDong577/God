<template>
  <div>
    <el-backtop >
        <div><i class="el-icon-top"></i>
    </div>
    </el-backtop>
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
        <span class="iconfont icon-gouwuche" @click="myGou()"></span>
      </div>
    </div>
      <div class="swiper-container-new">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/ebb1e0ac946fad6d85440458055c46d4.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0bc825235817ef5ac1e2e1374f2f19b5.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f379ac94483e1b0552754b48af1849ee.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/6a5507a9ca8c46b8073f22b2aa32f5ff.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/c1cbc3f3191d8d4a1d20053105f983cc.jpg" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <europWoods></europWoods>
      <!-- <el-backtop target=".new-product" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import europWoods from "../familyLife/europwoods.vue";
export default {
  name: "newProduct",
  components: {
    europWoods,
  },
  methods: {
    myChange() {
      this.$router.push({ path: "/mian/hello" });
    },
    myGou() {
      this.$router.push({ path: "/mian/shopping" });
    },
    myShou() {
      this.$router.push({ path: "/seek" });
    }
  },
  mounted() {
    new Swiper(".swiper-container-new", {
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style>
.my-long {
  width: 74px;
  height: 24px;
  margin-left: 25px;
}
.my-long img {
  width: 100%;
  height: 100%;
}
.swiper-container-new{
    margin-top: 50px;
    overflow: hidden;
    position: relative;
}
</style>