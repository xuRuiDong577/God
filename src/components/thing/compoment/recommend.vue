<template>
  <div>
    <div class="thing-flexbox" v-for="(item,index) in nameR" :key="index">
      <div class="thing-flexbox-content">
        <div class="thing-flexbox-content-div">
          <div class="thing-flexbox-title">
            <div class="thing-flexbox-ming">
              <img :src="item.tou" alt />
              <p class="thing-flexbox-zhi">{{item.name}}</p>
            </div>
            <p class="thing-flexbox-p1">{{item.title}}</p>
            <p class="thing-flexbox-p2">限时7.1折</p>
            <p class="thing-flexbox-p3">
              <span class="iconfont icon-guankan"></span>
              {{item.rnshuo}}
            </p>
          </div>
          <div class="thing-flexbox-img">
            <img :src="item.imgUrl" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "recommend",
  data() {
    return {
      nameR: []
    };
  },
  mounted() {
    axios.get("./data/faxian.json").then(response => {
      this.nameR = response.data.data.recommend;
    });
  }
};
</script>