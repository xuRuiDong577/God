<template>
  <div>
    <div class="family-life-title">
      <div>北欧原木</div>
      <div>经典北欧风，打造原木家</div>
    </div>

    <ul class="family-life-item">
      <li
        class="family-life-item-pro"
        v-for="(item,index) in europWoodsList"
        :key="index"
        @click="prodetails(index)"
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
  name: "europWoods",

  data() {
    return {
      europWoodsList: [],
      prodetailsinfo: []
    };
  },
  methods: {
    prodetails(index) {
      sessionStorage.setItem("foo", JSON.stringify(this.europWoodsList[index]));
      this.$router.push({
        path: "/commodityDetails",
        query: { id: this.europWoodsList[index].id }
      });
    }
  },
  mounted() {
    axios.get("./data/familylife.json").then(response => {
      this.europWoodsList = response.data.data.Europewood;
    });
  }
};
</script>

<style>
.family-life-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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