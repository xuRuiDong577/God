<template>
<!-- 首页顶部导航条 -->
  <div class="hello">
    <div class="topfix">
    <div class="top-bar">
      <TopTitle></TopTitle>
      <div class="top-title">
        <div class="toptitlecate">
           <div class="topCate">
              <div
                class="title"
                v-for="(item,index) in list"
                :key="index"
                @click="change(index)"
                :class="{active:pageIndex==index}"
                v-show="barActive">{{item}}</div>
        </div>
         <div class="cateTag" v-show="active">
          <p>全部频道</p>
             <div v-for="(item,index) in list" :key="index" class="allCate">{{item}}
          </div>
        </div>
        
       <div class="icon">
            <i class="el-icon-arrow-down" :class="{activeIcon:active}" @click="showMoreCate"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="mask" v-show="active"></div>
    <component :is="com" ></component>
  </div>
</template>
<script>
import recommend from "./component/recommend/recommend.vue";
import familyLife from "./component/familyLife/familylife.vue";
import TopTitle from "../top-title.vue";

export default {
  name: "Hello",
  data() {
    return {
      active: false,
      barActive: true,
      pageIndex: 0,
      list: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ],
      com: recommend
    };
  },
  components: {
    recommend,
    familyLife,
    TopTitle,
  },
  methods: {
    showMoreCate() {
      if (this.active == false) {
        this.active = true;
        this.barActive = false;
      } else {
        this.active = false;
        this.barActive = true;
      }
    },
    change(index) {
      this.pageIndex = index;
      if (index == 0) {
        this.com = recommend;
      } else if (index == 1) {
        this.com = familyLife;
      }
    }
  },
};
</script>
<style name="default">
.toptitlecate{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: fixed;
  background: #fff;
}
.activeIcon {
  transform: rotate(180deg);
  transition: transform 0.5s;
}
.top-bar {
  position: relative;
  z-index: 2;
}
.topfix{
  position: fixed!important;
  z-index: 999;
}
.topCate {
  display: flex;
  flex-direction: row;
  width: 80%;
  overflow: hidden;
  overflow-x: scroll;
}
.top-title {
  width: 100%;
  position: relative;
  padding-top: 1.1rem;
  background: #fff;
}

.title {
  height: 100%;
  line-height: 0.8rem;
  flex-shrink: 0;
  font-size: 0.37333rem;
  display: flex;
  align-items: center;
  padding: 0 0.21333rem;
}
.active {
  border-bottom: 1px solid red;
}
.el-icon-arrow-down {
  margin-top: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.4rem;
  transition: transform 0.5s;
}
.cateTag{
  position: fixed;
  overflow: hidden;
  background: #fff;
  padding-top: 5.3rem;

}
.allCate {
  width: 2rem;
  height: 0.74667rem;
  line-height: 0.74667rem;
  text-align: center;
  float: left;
  margin-bottom: 0.53333rem;
  margin-left: 0.4rem;
  background: #fafafa;
  border: 1px solid #ccc;
  border-radius: 0.05333rem;
  margin-top: 0.32rem;
}
.mask {
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>