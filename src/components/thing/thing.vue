<template>
<!-- 实物主页面 -->
  <div class="thing">
    <div class="thing-title">
      <div class="thing-my">
        <span class="iconfont icon-zhuye" @click="thingChange()"></span>
      </div>
      <div class="thing-logo">
        <p class="thing-logo-p">发现</p>
        <p class="thing-logo-p1">甄选家</p>
      </div>
      <div class="thing-s">
        <span class="iconfont icon-sousuo" @click="thingShou()"></span>

        <span class="iconfont icon-gouwuche" @click="thingGuo()"></span>
        <div class="mian-bottom-cont thing-number">{{$store.getters.getCount}}</div>
      </div>
    </div>
    <div class="thing-ko"></div>
    <div class="thing-scroll">
      <ul class="thing-scroll-ul">
        <li
          class="thing-scroll-li"
          v-for="(item,index) in thingList"
          :key="index"
          @click="thingChang(index)"
          :class="{'thing-active':thingIndex==index}"
        >{{item}}</li>
      </ul>
    </div>
    <component :is="com"></component>
  </div>
</template>

<script>
import recommend from "./compoment/recommend.vue";
import goodThing from "./compoment/goodThing.vue";
import price from "./compoment/price.vue";
import choose from "./compoment/choose.vue";
import winelist from "./compoment/winelist.vue";
export default {
  name: "thing",
  data() {
    return {
      thingList: [
        "推荐",
        "好物大赏",
        "好物内部价",
        "选购指南",
        "晒单",
        "回购榜",
        "达人"
      ],
      thingIndex: 0,
      dongtai: [
        "recommend",
        "goodThing",
        "price",
        "choose",
        "winelist",
        "goodThing",
        "price",
        "choose"
      ],
      com: recommend
    };
  },
  methods: {
    thingChang(index) {
      this.com = this.dongtai[index];
      this.thingIndex = index;
    },
    thingChange() {
      this.$router.push({ path: "/mian/hello" });
    },
    thingGuo() {
      this.$router.push({ path: "/mian/shopping" });
    },
    thingShou() {
      this.$router.push({ path: "/seek" });
    }
  },
  components: {
    recommend,
    goodThing,
    price,
    choose,
    winelist
  }
};
</script>
<style >
.thing {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250);
  position: relative;
}
.thing-title {
  width: 100%;
  height: 50px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  background-color: rgb(250, 250, 250);
  z-index: 99999;
}
.thing-my {
  margin-left: 10px;
}
.thing-my span {
  font-size: 20px;
  font-weight: bold;
  color: #7f7f7f;
}
.thing-s {
  display: flex;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
  width: 60px;
  justify-content: space-between;
}
.thing-s span {
  font-size: 20px;
  font-weight: bold;
  color: #7f7f7f;
}
.thing-ko {
  width: 100%;
  height: 100px;
}
.thing-logo {
  display: flex;
  flex-direction: row;
}
.thing-logo-p {
  font-size: 20px;
  font-weight: bold;
  color: #b4282d;
  height: 25px;
  padding-right: 10px;
  line-height: 25px;
}
.thing-logo-p1 {
  height: 25px;
  line-height: 25px;
  margin-right: -20px;
  font-size: 16px;
  color: #7f7f7f;
}
.thing-scroll {
  width: 100%;
  height: 43px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: 5px 0px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50px;
  z-index: 9999;
  background-color: rgb(250, 250, 250);
}
.thing-scroll-ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  align-items: center;
  text-align: center;
}
.thing-scroll-li {
  width: 80px;
  height: 40px;
  line-height: 40px;
  flex-shrink: 0;
  font-size: 16px;
  margin: 0px 20px 0px 0px;
}
.thing-active {
  border-bottom: #b4282d 3px solid;
  color: #b4282d;
}

.thing-flexbox {
  width: 100%;
  margin: 10px 0px;
}
.thing-flexbox-content {
  width: 100%;
  height: 160px;
  background-color: #ffffff;
  padding: 10px;
}
.thing-flexbox-content-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.thing-flexbox-title {
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.thing-flexbox-img {
  width: 37%;
  height: 100%;
}
.thing-flexbox-img img {
  width: 100%;
  height: 100%;
}
.thing-flexbox-ming {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
}
.thing-flexbox-ming img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px 15px;
}
.thing-flexbox-zhi {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}
.thing-flexbox-p1 {
  font-size: 18px;
  padding-left: 13px;
}
.thing-flexbox-p2 {
  width: 100%;
  padding: 5px 13px;
  color: #7f7f7f;
}
.thing-flexbox-p3 {
  width: 100%;
  padding-left: 13px;
  color: #7f7f7f;
}
.thing-number {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 5px;
  text-align: center;
  line-height: 15px;
  background-color: #b4282d;
  border-radius: 50%;
  color: #ffffff;
}
</style>
