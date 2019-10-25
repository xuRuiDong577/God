<template>
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
        <span class="iconfont icon-gouwuche" @click="myGou()"></span>
        <div class="mian-bottom-cont thing-number">{{$store.getters.getCount}}</div>
      </div>
    </div>
    <div class="family-life-title">
      <div>北欧原木</div>
      <div>经典北欧风，打造原木家</div>
    </div>

    <ul class="family-life-item">
      <li
        class="family-life-item-pro"
        v-for="(item,index) in classifyDetailsList"
        :key="index"
        @click="commodityDetails(index)"
      >
        <div class="family-life-item-pro-all">
          <div class="family-life-item-pro-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="family-life-item-pro-des">
            <span>{{item.des}}</span>
          </div>
          <div class="family-life-item-pro-intro">
            <p>{{item.title}}</p>
          </div>
          <div class="family-life-item-pro-price">
            <span>{{item.price}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "classifyDetails",
  data() {
    return {
      recommendList: [],
      classifyDetailsList: [],
      classifypro: {}
    };
  },
  mounted() {
    axios.get("./data/recommend.json").then(response => {
      this.recommendList = response.data.data.recommend;
      for (
        let i = 0;
        i < this.recommendList[this.$route.query.id].starpro.length;
        i++
      ) {
        this.classifyDetailsList.push(
          this.recommendList[this.$route.query.id].starpro[i]
        );
      }
    });
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
    },
    commodityDetails(index) {
      this.classifypro = JSON.stringify(this.classifyDetailsList[index]);
      sessionStorage.setItem("foo", this.classifypro);
      this.$router.push({
        path: "/commodityDetails",
        query: { id: this.classifyDetailsList[index].id }
      });
    }
  }
};
</script>


<style >
.family-life-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.family-life-title div:nth-child(1) {
  font-size: 0.42667rem;
}
.family-life-title div:nth-child(2) {
  margin-top: 0.21333rem;
  color: #999;
  font-size: 0.32rem;
}
.family-life-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
}
.family-life-item-pro {
  width: 49%;
  padding: 0rem 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
}
.family-life-item-pro-all {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}
.family-life-item-pro-img img {
  height: 100%;
  width: 100%;
}
.family-life-item-pro-des {
  background: #f1ece2;
  font-size: 0.32rem;
  color: #9f8a60;
  width: 100%;
}
.family-life-item-pro-des span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.family-life-item-pro-intro p {
  margin-top: 0.21333rem;
  line-height: 0.53333rem;
  font-size: 0.37333rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #333;
}
.family-life-item-pro-price {
  line-height: 0.64rem;
  color: #b4282d;
}
.family-life-item-pro-price span {
  font-size: 0.42667rem;
}
</style>