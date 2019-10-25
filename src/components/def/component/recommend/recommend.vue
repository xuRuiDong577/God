<template>
  <div class="box">
    <el-backtop :bottom='60'>
        <div><i class="el-icon-top"></i>
    </div>
    </el-backtop>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" onclick="window.open('https://act.you.163.com/act/pub/e5HnCYEAtWap.html','_self')" >
          <img
            src="https://yanxuan.nosdn.127.net/fd2127406a76022040bffc829195e9c3.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/e9a804738635922f6627ce218acf227a.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/16517786a67b10567928032c8b945ede.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/da7f90556c2327334ee40999517f3f07.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/17a628d08e525251de5aa289112282e8.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="service-policy">
      <ul class="g-grow">
        <li>
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
          <span>网易自营品牌</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt />
          <span>30天无忧退货</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt />
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>

    <div class="kingdongmodule">
      <div class="pro-classify">
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          <div>新品首发</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt />
          <div>居家生活</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" alt />
          <div>服饰鞋包</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" alt />
          <div>美食酒水</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt />
          <div>个护清洁</div>
        </div>
      </div>
      <div class="pro-classify">
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt />
          <div>母音亲子</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt />
          <div>运动旅行</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt />
          <div>数码家电</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt />
          <div>全球特色</div>
        </div>
        <div class="pro-classify-item" @click="newproduct">
          <img src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" alt />
          <div>好货抄底</div>
        </div>
      </div>

      <NewerGift></NewerGift>
      <brandProvide></brandProvide>
      <hotSauce></hotSauce>
      <popularRecom></popularRecom>
      <limitBuy></limitBuy>
      <popularRecom></popularRecom>
      <limitBuy></limitBuy>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import popularRecom from "./popular-recommendation.vue";
import limitBuy from "./limit-buy.vue";
import Footer from "./footer.vue";
import NewerGift from "./newergift.vue";
import brandProvide from "./brandprovide.vue";
import hotSauce from "./hotsauce.vue";

export default {
  name: "hello",
  components: {
    popularRecom,
    limitBuy,
    Footer,
    NewerGift,
    brandProvide,
    hotSauce
  },
  mounted() {
    new Swiper(".swiper-container", {
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
  },
  methods: {
    newproduct() {
      this.$router.push({ path: "/newproduct" });
    }
  }
};
</script>

<style>
.box {
  padding-top: 80px;
}
.swiper-container {
  height: 4.93333rem;
  position: relative;
}
.swiper-slide {
  width: 360px;
}
.swiper-slide img {
  width: 100%;
}
.service-policy {
  height: 0.96rem;
  margin-top: 0.2rem;
}
.g-grow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
}
.g-grow li {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.g-grow img {
  width: 0.42667rem;
  height: 0.42667rem;
}
.pro-classify {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 0.42667rem;
  background: #fff;
}
.pro-classify-item img {
  width: 1.46667rem;
  height: 1.46667rem;
}
.kingdongmodule {
  background: rgb(238, 238, 238);
  margin-bottom: 50px;
}
</style>