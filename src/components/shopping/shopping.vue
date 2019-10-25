<template>
  <!-- 添加购物车页面 -->
  <div class="top-bar">
    <div class="shopping-cartHd">
      <span class="shopping-logo" @click="sddd()">购物车</span>
      <span class="shopping-txt">领劵</span>
    </div>
    <div class="shopping-ko"></div>
    <div class="shopping-content">
      <ul class="shopping-servicePolicy">
        <li class="shopping-item">
          <span class="iconfont icon-icon32208"></span>30天无忧退货
        </li>
        <li class="shopping-item">
          <span class="iconfont icon-icon32208"></span>48小时快速退款
        </li>
        <li class="shopping-item">
          <span class="iconfont icon-icon32208"></span>满88元免邮费
        </li>
      </ul>
    </div>
    <div class="shopping-defaultPag" v-if="list.length<1">
      <div class="shopping-container"></div>
      <div class="shopping-noCart-btn">
        <button
          class="shopping-button"
          @click="shoppingD()"
          v-if="this.$store.state.loginstatus==false"
        >登录</button>
      </div>
    </div>

    <div>
      <div class="shoop-cartGood" v-for="(item,index) in list" :key="index">
        <div class="shoop-checkbox">
          <span
            class="iconfont icon-duihao"
            :class="{'shoop-checkbox-active':item.itemIndex}"
            @click="isChecked(index)"
          ></span>
        </div>
        <div class="shoop-cnt">
          <div class="shoop-cnt-img">
            <img :src="item.img" alt />
          </div>
          <div class="shoop-cnt-content">
            <div class="shoop-cnt-title">
              <p>
                <span>购物周特惠</span>
                {{item.title}}
              </p>
            </div>
            <div class="shoop-cnt-prc">
              <span>{{item.prc}}</span>
              <div class="shoop-selnum">
                <div @click="delJ(index)">-</div>
                <div>{{item.count}}</div>
                <div @click="addJ(index)">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoop-data-reactid" v-if="list.length>0">
      <div class="shoop-checkbox-tex">
        <span
          class="iconfont icon-duihao"
          @click="allChoice"
          :class="{'shoop-checkbox-active':this.$store.state.allChoice}"
        ></span>
        <p v-if="list.length>0">已选（{{$store.getters.getCount}}）</p>
      </div>
      <div class="shoop-checkbox-tex-1">
        <button>下单</button>
        <p v-if="list.length>0">合计：￥{{$store.getters.getPrc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping",
  data() {
    return {
      list: []
    };
  },
  methods: {
    shoppingD() {
      this.$router.push({ path: "/my" });
    },
    addJ(index) {
      this.$store.commit("addJ", index);
    },
    delJ(index) {
      this.$store.commit("delJ", index);
    },
    isChecked(index) {
      this.$store.commit("isChecked", index);
    },
    allChoice() {
      this.$store.commit("allChoice");
    }
  },

  mounted() {
    this.list = this.$store.state.car;
  }
};
</script>
<style>
body {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.top-bar {
  width: 100%;
  height: 100%;
  position: relative;
}
.shopping-ko {
  width: 100%;
  height: 50px;
  background-color: #333;
}
.shopping-cartHd {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  position: fixed;
  top: 0px;
  background-color: rgb(238, 238, 238);
  border-bottom: 1px solid  rgb(0, 0, 0, 0.1);
}
.shopping-logo {
  font-size: 18px;
  color: #333;
}
.shopping-txt {
  color: #b4282d;
  font-size: 15px;
}
.shopping-content {
  width: 100%;
  height: 35px;
  background-color: rgb(238, 238, 238);
}
.shopping-servicePolicy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.shopping-item {
  color: #666;
}
.shopping-item span {
  font-size: 12px;
  color: rgb(0, 0, 0, 0.2);
}

.shopping-defaultPag {
  width: 100%;
  height: 222px;
  position: fixed;
  top: 35%;
  display: flex;
  flex-direction: column;
}
.shopping-container {
  width: 100%;
  height: 70%;
  background: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png")
    no-repeat 50%;
  background-size: contain;
}
.shopping-noCart-btn {
  width: 100%;
  height: 30%;
}
.shopping-button {
  width: 70%;
  height: 90%;
  display: block;
  margin: 0px auto;
  border: none;
  background-color: #b4282d;
  color: #ffffff;
  font-size: 16px;
}
.shoop-cartGood {
  width: 100%;
  height: 100px;
  margin: 15px 0px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 8px 8px;
}
.shoop-checkbox {
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.shoop-cnt {
  width: 80%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
}
.shoop-cnt-img {
  width: 25%;
  height: 100%;
}
.shoop-cnt-img img {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.shoop-cnt-content {
  width: 75%;
  height: 100%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
}
.shoop-cnt-title {
  width: 100%;
  height: 60%;
}
.shoop-cnt-title p span {
  color: #f48f18;
}
.shoop-cnt-prc {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.shoop-selnum {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.shoop-selnum div {
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
}
.shoop-data-reactid {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
.shoop-checkbox-tex {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.shoop-checkbox-tex-1 {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.shoop-checkbox-tex-1 p {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shoop-checkbox-tex-1 button {
  width: 60%;
  height: 100%;
  background-color: #b4282d;
  border: none;
  color: #ffffff;
  font-size: 16px;
}

.shoop-checkbox-active {
  color: #b4282d;
}
</style>
