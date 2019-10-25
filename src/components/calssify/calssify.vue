<template>
  <!-- 分类导航栏 -->
  <div>
    <div class="classify-input">
      <div class="classify-input-content" @click="classifSshou()">搜索商品，共23411款好物</div>
    </div>
    <div class="classify-content">
      <div class="classify-content-title">
        <ul class="classify-content-title-ul">
          <li
            class="classify-title-li"
            @click="change('0','Tui')"
            :class="{'classify-active':pageIndex==0}"
          >推荐专区</li>
          <li
            class="classify-title-li"
            @click="change('1','Qiu')"
            :class="{'classify-active':pageIndex==1}"
          >秋冬好物</li>
          <li
            class="classify-title-li"
            @click="change('2','Bao')"
            :class="{'classify-active':pageIndex==2}"
          >爆品专区</li>
          <li
            class="classify-title-li"
            @click="change('3','Xin')"
            :class="{'classify-active':pageIndex==3}"
          >新平专区</li>
          <li
            class="classify-title-li"
            @click="change('4','Tui')"
            :class="{'classify-active':pageIndex==4}"
          >居家生活</li>
          <li
            class="classify-title-li"
            @click="change('5','Qiu')"
            :class="{'classify-active':pageIndex==5}"
          >个人清洁</li>
          <li
            class="classify-title-li"
            @click="change('6','Bao')"
            :class="{'classify-active':pageIndex==6}"
          >母婴亲子</li>
          <li
            class="classify-title-li"
            @click="change('7','Xin')"
            :class="{'classify-active':pageIndex==7}"
          >运动旅行</li>
          <li
            class="classify-title-li"
            @click="change(8)"
            :class="{'classify-active':pageIndex==8}"
          >数码家电</li>
          <li
            class="classify-title-li"
            @click="change(9)"
            :class="{'classify-active':pageIndex==9}"
          >全球特色</li>
        </ul>
      </div>
      <component :is="classify"></component>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import Tui from "./component/componentTui.vue";
import Qiu from "./component/componentQiu.vue";
import Bao from "./component/componentBao.vue";
import Xin from "./component/componentXin.vue";

export default {
  name: "calssify",
  data() {
    return {
      pageIndex: 0,
      classify: Tui
    };
  },
  methods: {
    change(index, item) {
      this.pageIndex = index;
      this.classify = item;
    },
    classifSshou() {
      this.$router.push({ path: "/seek" });
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
  },
  components: {
    Tui,
    Qiu,
    Bao,
    Xin
  }
};
</script>

<style>
.classify-input {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  background-color: #ffffff;
  z-index: 999;
}
.classify-input-content {
  width: 90%;
  height: 30px;
  background-color: #ededed;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #666;
}
.classify-content {
  width: 100%;
  height: 100px;
  border-top: 1px solid #ededed;
  display: flex;
  flex-direction: row;
}
.classify-content-title {
  width: 25%;
  height: 560px;
  border-right: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  margin-top: 10%;
}
.classify-content-title-ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.classify-content-title-ul li {
  font-size: 14px;
  text-align: center;
  width: 96%;
}
</style>


<style >
.classify-picture-content {
  width: 75%;
  height: 750px;
  padding: 30px 10px 10px 10px;
  overflow: auto;
  margin-left: 25%;
  margin-top: 10%;
}
.classify-title-li {
  width: 100%;
  
  border-left: 3px solid rgb(245, 245, 245);
}
.classify-active {
  color: #ab2b2b;
  border-color: #ab2b2b;
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
  overflow-y: auto;
}
.classify-cateLiat-title {
  font-size: 12px;
  width: 30%;
  /* height: 120px; */
  flex-shrink: 0;
  text-align: center;
  margin-top: 10px;
}
.classify-cateLiat-title img {
  width: 100%;
  height: 100x;
}
</style>