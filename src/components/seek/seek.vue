<template>
<!-- 搜索页面 -->
  <div>
    <div class="seek-row">
      <div class="seek-ipt">
        <div class="seek-ipt-content">
          <input type="text" placeholder="热卖 按摩电器" v-model="message" @keyup.enter="ele" />
        </div>
        <span class="seek-span" @click="seekGo()">取消</span>
      </div>
    </div>
    <div class="seek-searchSuggestions" v-if="myItem.length<1">
      <div class="seek-name">
        <p class="seek-name-h3">热门搜索</p>
        <div class="seek-name-a">
          <a href="#" class="highlight">回馈金卡买11得33</a>
          <a href="#">保温杯 限时7折</a>
          <a href="#">百年传世珐琅锅</a>
        </div>

        <div class="seek-name-a">
          <a href="#" class="highlight">冻干卤肉饭</a>
          <a href="#">网红 流沙咸蛋黄酱</a>
          <a href="#">拖鞋</a>
        </div>

        <div class="seek-name-a">
          <a href="#">即溶咖啡 直降54</a>
          <a href="#">睡衣</a>
          <a href="#">女鞋</a>
          <a href="#">耳机</a>
          <a href="#">羽绒服</a>
        </div>

        <div class="seek-name-a">
          <a href="#">猫粮</a>
        </div>
      </div>
    </div>
    <div class="seek-seek" v-for="(item,index) in myItem" :key="index" @click="myClick(index)">
      <div class="seek-seek-content">
        <div class="seek-seek-content-img">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="seek-seek-content-title-content">
          <div class="seek-seek-title-1">{{item.title}}</div>
          <div class="seek-seek-prc-1">{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "seek",
  data() {
    return {
      mySeeklist: null,
      message: "",
      timer: null,
      myItem: [],
      seekPro: {}
    };
  },
  methods: {
    seekGo() {
      this.$router.go(-1);
    },
    ele() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.myItem = this.mySeeklist.filter(item => {
          if (this.message != "") {
            if (item.title.includes(this.message)) {
              return item;
            }
          }
        });
      }, 500);
    },
    myClick(index) {
      this.seekPro = JSON.stringify(this.myItem[index]);
      sessionStorage.setItem("foo", this.seekPro);
      this.$router.push({
        path: "/commodityDetails", query:{id:this.myItem[index].id}
       
      });
    }
  },
  // watch: {
  //   message(newValue) {
  //     if (this.timer) {
  //       clearTimeout(this.timer);
  //     }
  //     this.timer = setTimeout(() => {
  //       this.myItem = this.mySeeklist.filter(item => {
  //         if (newValue != "") {
  //           if (item.title.includes(newValue)) {
  //             return item;
  //           }
  //         }
  //       });
  //     }, 1000);
  //   }
  // },
  mounted() {
    axios.get("./data/seek.json").then(response => {
      this.mySeeklist = response.data.data.recommend;
    });
  }
};
</script>
<style>
.seek-row {
  width: 100%;
  height: 45px;
  padding: 0px 10px;
}
.seek-ipt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.seek-ipt-content {
  width: 83%;
  height: 100%;
  line-height: 45px;
}
.seek-span {
  width: 15%;
  height: 100%;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
}
.seek-ipt-content input {
  width: 100%;
  height: 80%;
  outline: none;
  border: none;
  background-color: #eee;
  font-size: 16px;
}
.seek-searchSuggestions {
  width: 100%;
  height: 300px;
  padding: 10px 15px;
}
.seek-name {
  width: 100%;
  height: 100%;
}
.seek-name-h3 {
  font-size: 16px;
  margin: 10px 0px;
}
.seek-name-a {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.seek-name-a a {
  display: block;
  border: 1px solid #999;
  padding: 5px;
  margin-right: 10px;
  color: #333;
}
.seek-name-a .highlight {
  border-color: #b4282d;
  color: #b4282d;
}
.seek-seek {
  width: 100%;
  height: 80px;
  padding: 0px 20px;
  background-color: #ffffff;
  margin: 10px 0px;
}
.seek-seek-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.seek-seek-content-img {
  width: 27%;
  height: 100%;
}
.seek-seek-content-img img {
  width: 100%;
  height: 100%;
}
.seek-seek-content-title-content {
  width: 73%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
.seek-seek-title-1 {
  width: 100%;
  height: 50%;
  line-height: 40px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.seek-seek-prc-1 {
  width: 100%;
  height: 50%;
  line-height: 40px;
  font-size: 20px;
  color: #b4282d;
}
</style>