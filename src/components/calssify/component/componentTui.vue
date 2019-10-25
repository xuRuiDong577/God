<template>
  <div class="classify-picture-content">
    <div class="classify-loop">
      <div class="swiper-container classify" dir="rtl">
        <div class="swiper-wrapper">
          <div class="swiper-slide classify-img">
            <img
              src="https://yanxuan.nosdn.127.net/df7c077943144befb0b5ee41d9e90c0e.jpg?imageView&quality=75&thumbnail=0x196"
              alt
            />
          </div>
          <div class="swiper-slide classify-img">
            <img
              src="https://yanxuan.nosdn.127.net/ffce97686aa936c1dc1440a163eeb088.png?imageView&quality=75&thumbnail=0x196"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="classify-cateList">
      <ul class="classify-cateList-ul">
        <li class="classify-cateLiat-title" v-for="(item,index) in recommendList" :key="index" @click='classifyDetails(index)'>
          <img :src="item.imgUrl" alt />
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import axios from "axios";
export default {
  name: "Tui",
  data() {
    return {
      recommendList: []
    };
  },
  methods: {
    classifyDetails(index){
      this.$router.push({path:'/classifyDetails',query:{id:index}})
    }
  },
  mounted() {
    new Swiper(".classify", {
      loop: true,
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    axios.get("./data/recommend.json").then(response => {
      this.recommendList = response.data.data.recommend;
        // for(let i=0;i<this.recommendList.length;i++){
        //   let num =this.recommendList[i].id
        // }
    });
  }
};
</script>
