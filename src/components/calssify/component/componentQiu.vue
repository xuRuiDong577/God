<template>
  <div class="classify-picture-content">
    <div class="classify-loop">
      <div class="swiper-container classify" dir="rtl">
        <div class="swiper-wrapper">
          <div class="swiper-slide classify-img">
            <img
              src="https://yanxuan.nosdn.127.net/0f5a62f05863f3671ad9c8cc6fa83d1f.jpg?imageView&thumbnail=0x196"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="classify-cateList">
      <ul class="classify-cateList-ul">
        <li class="classify-cateLiat-title" v-for="(item,index) in seasonList" :key="index">
          <img :src="item.imgUrl" alt />
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Qiu",
  data() {
    return {
      seasonList: []
    };
  },
  mounted() {
    axios.get("./data/recommend.json").then(response => {
      this.seasonList = response.data.data.season;
    });
  }
};
</script>

<style >
.classify-picture-content {
  width: 75%;
  padding: 30px 10px 10px 10px;
}
.classify-title-li {
  width: 100%;
}
.classify-active {
  color: #ab2b2b;
  border-left: 3px solid #ab2b2b;
}
.classify {
  width: 100%;
  height: 100%;
}
.classify-loop {
  width: 100%;
  height: 100px;
  position: relative;
}
.classify-img img {
  width: 100%;
  height: 100%;
}
.classify-cateList {
  width: 100%;
  height: 500px;
  padding: 10px 0px;
}
.classify-cateList-ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.classify-cateLiat-title {
  font-size: 12px;
  width: 30%;
  height: 120px;
  flex-shrink: 0;
  text-align: center;
  margin-top: 10px;
}
.classify-cateLiat-title img {
  width: 100%;
  height: 100x;
}
</style>