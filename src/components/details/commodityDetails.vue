<template>
  <!-- 购物详情页面 -->
  <div>
    <div class="thing-title">
      <div class="thing-my">
        <span class="iconfont icon-zhuye" @click="detailsZhu()"></span>
      </div>
      <div class="my-long">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt
        />
      </div>
      <div class="thing-s">
        <span class="iconfont icon-sousuo" @click="detailsSou()"></span>

        <span class="iconfont icon-gouwuche" @click="detailsGou()"></span>
        <div class="mian-bottom-cont thing-number">{{$store.getters.getCount}}</div>
      </div>
    </div>
    <div class="details-ko"></div>

    <div class="details-lun">
      <div class="swiper-container commodityDetails">
        <div class="swiper-wrapper swiper-new">
          <div class="swiper-slide">
            <img :src="info.imgUrl" alt />
          </div>
          <!-- <div class="swiper-slide">
            <img :src="info.imgUrl1" alt />
          </div>
          <div class="swiper-slide">
            <img :src="info.imgUrl2" alt />
          </div>-->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="details-conten">
      <p class="details-conten-p">{{info.price}}</p>
      <p class="details-conten-p1">新品 ></p>

      <p class="details-conten-p2">{{info.title}}</p>

      <p class="details-conten-p3">{{info.des}}</p>
    </div>

    <div class="details-shoppingReward" @click="detChange()">
      <div class="details-fanli">
        <p class="details-shoppingReward-p">
          购物返 : 新用户最高返
          <span>¥3.69回馈金 + 36积分</span>
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="details-info">
        <div class="details-info-line">
          <p class="details-shoppingReward-span">请选择规格数量</p>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="details-info-line">
          <p class="details-shoppingReward-span">配送：请选择配送地址</p>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="details-info-line">
          <p class="details-shoppingReward-span">
            服务：
            <span>支持30天无忧退换货</span>
            <span>48小时快速退款</span>
          </p>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <div class="details-content">
        <div class="details-des">
          <div>商品参数</div>
          <div class="details-tt">
            <div>使用季节</div>
            <div>冬季、秋季</div>
          </div>
          <div class="details-tt">
            <div>尺码</div>
            <div>38、39、40、41、42、43、44</div>
          </div>
          <div class="details-tt">
            <div>帮面材质</div>
            <div>真皮、纺织面料</div>
          </div>
          <div class="details-tt">
            <div>售后服务</div>
            <div>我们承诺按鞋品三包准则进行售后退换货等服务。</div>
          </div>
        </div>
      </div>

      <div class="class-img">
        <p>
          <img src="https://yanxuan-item.nosdn.127.net/e2e10066692355e0e151532e293c6d44.jpg" />
        </p>
        <p>
          <img src="https://yanxuan-item.nosdn.127.net/ca660842e3eca77c52f4067bb3b75e7d.jpg" />
        </p>
        <p>
          <img src="https://yanxuan-item.nosdn.127.net/0b34930ce38f04fc4ebc0a43fe411810.jpg" />
        </p>
        <p>
          <img src="https://yanxuan-item.nosdn.127.net/f137ce2b593b2a098f11f461206c3574.jpg" />
        </p>
        <p>
          <img src="https://yanxuan-item.nosdn.127.net/4b06bb4f58e52199b22abf04d50f01e3.jpg" />
        </p>
      </div>
      <div class="class-img">
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/6f85746163b46efe7ba1609ffc712d2d.jpg"
            _src="https://yanxuan-item.nosdn.127.net/6f85746163b46efe7ba1609ffc712d2d.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/9aafdc949e2a216abb06f0265df8d97b.jpg"
            _src="https://yanxuan-item.nosdn.127.net/9aafdc949e2a216abb06f0265df8d97b.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/24c0aa9dd396bea4f2d4bab4e88acfb5.jpg"
            _src="https://yanxuan-item.nosdn.127.net/24c0aa9dd396bea4f2d4bab4e88acfb5.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/eff4502ea5ba278ba32613894b8f5683.jpg"
            _src="https://yanxuan-item.nosdn.127.net/eff4502ea5ba278ba32613894b8f5683.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/78b2510fbbae2dce94b15b9b3b2dc778.jpg"
            _src="https://yanxuan-item.nosdn.127.net/78b2510fbbae2dce94b15b9b3b2dc778.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/7c83a18c63a212887880b5fe934c35b6.gif"
            _src="https://yanxuan-item.nosdn.127.net/7c83a18c63a212887880b5fe934c35b6.gif"
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/43b3f46599efa6eec2d02bf8c7dea2d8.jpg"
            _src="https://yanxuan-item.nosdn.127.net/43b3f46599efa6eec2d02bf8c7dea2d8.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/4c1f2688d47e40bdbc092d225c9c896e.jpg"
            _src="https://yanxuan-item.nosdn.127.net/4c1f2688d47e40bdbc092d225c9c896e.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/ab85cb6bc74ce2228b92e8fa78636d9e.jpg"
            _src="https://yanxuan-item.nosdn.127.net/ab85cb6bc74ce2228b92e8fa78636d9e.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/648070c37a3de161fe9c39ccc655aa08.jpg"
            _src="https://yanxuan-item.nosdn.127.net/648070c37a3de161fe9c39ccc655aa08.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/b4ac240720084b72e028d193dee35bf3.jpg"
            _src="https://yanxuan-item.nosdn.127.net/b4ac240720084b72e028d193dee35bf3.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/cdbde252a31a09f2b07c2293cf2f4308.jpg"
            _src="https://yanxuan-item.nosdn.127.net/cdbde252a31a09f2b07c2293cf2f4308.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/4ffa118e3ce8e8b48d2eebcbc4c7c302.jpg"
            _src="https://yanxuan-item.nosdn.127.net/4ffa118e3ce8e8b48d2eebcbc4c7c302.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/46c0ed0138660c4dac5acd3362be09cf.jpg"
            _src="https://yanxuan-item.nosdn.127.net/46c0ed0138660c4dac5acd3362be09cf.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/218e86c5b20e8328df123b31eb90a200.jpg"
            _src="https://yanxuan-item.nosdn.127.net/218e86c5b20e8328df123b31eb90a200.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/e49e165786de17974b3e7ad3c8949498.jpg"
            _src="https://yanxuan-item.nosdn.127.net/e49e165786de17974b3e7ad3c8949498.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/e7493c1e02b2ec5b2a44adaa49790920.jpg"
            _src="https://yanxuan-item.nosdn.127.net/e7493c1e02b2ec5b2a44adaa49790920.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/6deadec8715028d76be06fa0c7a52156.jpg"
            _src="https://yanxuan-item.nosdn.127.net/6deadec8715028d76be06fa0c7a52156.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/018e7c8173d162bb18b36aad8824ebca.jpg"
            _src="https://yanxuan-item.nosdn.127.net/018e7c8173d162bb18b36aad8824ebca.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/79d43b22502784ced02446108ee3344a.jpg"
            _src="https://yanxuan-item.nosdn.127.net/79d43b22502784ced02446108ee3344a.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/77ffc42afc38c16471089decb18c58c0.jpg"
            _src="https://yanxuan-item.nosdn.127.net/77ffc42afc38c16471089decb18c58c0.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/7985f4ceef8af866adce217ef2a4516d.jpg"
            _src="https://yanxuan-item.nosdn.127.net/7985f4ceef8af866adce217ef2a4516d.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/bd7259cae5afb3c66bb73113a8362505.jpg"
            _src="https://yanxuan-item.nosdn.127.net/bd7259cae5afb3c66bb73113a8362505.jpg"
            style
          />
        </p>
        <p>
          <img
            src="https://yanxuan-item.nosdn.127.net/1cbdc3ecfb3979ecc00160a75fbb59bb.jpg"
            _src="https://yanxuan-item.nosdn.127.net/1cbdc3ecfb3979ecc00160a75fbb59bb.jpg"
            style
          />
        </p>
      </div>
      <div class="whiteheight"></div>
    </div>
    <div class="details-huadong" :class="{'huadongActive':pageIndex}">
      <div class="details-x123" :class="{'details-huadong deftailsActive':pageIndex}">
        <div class="details-x123-title">
          <div class="details-x123-title-div1"></div>
          <div class="details-x123-title-div2">
            <p class="details-x123-title-p">购物返现?</p>
            <p class="details-x123-title-p1" @click="detailsP()">
              <i class="el-icon-close"></i>
            </p>
          </div>
        </div>

        <div class="details-x123-title-div3">
          <p>1. 回馈金是严选用以回馈用户的代币</p>
          <p>2. 回馈金可与现金1:1抵扣使用</p>
          <p>3. 回馈金使用无门槛，可叠加</p>
          <p>4. 购物即可返还回馈金，用户等级越高，返还比例越高</p>
          <p>5. 本月获取的回馈金，统一在次月25日23:59:59失效，请尽快使用</p>
        </div>

        <div class="details-inner-x123">
          <div class="details-inner-x124">
            <span class="iconfont icon-erji"></span>
          </div>
          <div class="details-inner-x125">
            <button>立即购买</button>
          </div>
          <div class="details-inner-x126">
            <button @click="addCar()">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "commodityDetails",
  data() {
    return {
      pageIndex: false,
      // img:"",
      // price:"",
      // des:"",
      // title:"",
      info: {}
    };
  },
  methods: {
    detChange() {
      this.pageIndex = true;
    },
    detailsSou() {
      this.$router.push({ path: "/seek" });
    },
    detailsP() {
      this.pageIndex = false;
    },
    detailsZhu() {
      this.$router.push({ path: "/mian/hello" });
    },
    detailsShou() {
      this.$router.push({ path: "/seek" });
    },
    detailsGou() {
      this.$router.push({ path: "/mian/shopping" });
    },
    addCar() {
      let goods = {
        img: this.info.imgUrl,
        title: this.info.title,
        prc: this.info.price,
        id: this.info.id,
        count: 1,
        plag: true,
        itemIndex: true
      };
      this.$store.commit("addCar", goods);
    }
  },
  mounted() {
    //  JSON.stringify(sessionStorage.setItem('foo',this.$route.query.id))
    this.info = JSON.parse(sessionStorage.getItem("foo"));
    // console.log(this.$route.query.id)
    //   this.info = this.$route.query.id
    new Swiper(".swiper-container", {
      mousewheel: true,
      loop: false,
      // 轮播图启动器
      // autoplay: {
      //   delay: 2000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: true
      // },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style >
.details-ko {
  width: 100%;
  height: 50px;
}
.details-lun {
  width: 100%;
  height: 350px;
}
.commodityDetails {
  width: 100%;
  height: 100%;
}
.swiper-new {
  width: 100%;
  height: 100%;
}
.swiper-new div {
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-new div img {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}
.details-conten {
  width: 100%;
  height: 130px;
  padding: 5px 0px 0px 15px;
  border: 1px solid #ffffff;
}
.details-conten-p {
  font-size: 27px;
  font-weight: bold;
  color: #b4282d;
}
.details-conten-p1 {
  width: 45px;
  text-align: center;
  border: #b4282d 1px solid;
  margin: 3px 5px;
  color: #b4282d;
}
.details-conten-p2 {
  font-size: 16px;
  padding: 5px 0px;
}
.details-conten-p3 {
  color: #7f7f7f;
}
.details-shoppingReward {
  width: 100%;
  height: 250px;
  background-color: #f4f4f4;
  padding: 10px 0px;
}
.details-fanli {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
}
.details-info {
  margin-top: 10px;
}
.details-info-line {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
}
.details-info-line i {
  margin-right: 10px;
}
.details-shoppingReward-p {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0px 15px;
  color: #666666;
  position: relative;
}
.details-shoppingReward-span {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0px 15px;
  color: #666666;
  position: relative;
  background-color: #ffffff;
}
.details-shoppingReward-span span {
  color: #b4282d;
  position: relative;
  padding-left: 5px;
  margin-right: 20px;
}
.details-shoppingReward-span span::after {
  content: "";
  position: absolute;
  width: 0.10667rem;
  height: 0.10667rem;
  background: #b4282d;
  border-radius: 100%;
  left: 0;
  top: 0.13333rem;
}
.details-huadong {
  width: 100%;
  height: 1500px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
  position: fixed;
  bottom: -1500px;
}
.huadongActive {
  position: fixed;
  bottom: 0px;
}

.details-huadong .deftailsActive {
  position: fixed;
  transition: all 0.5s;
  bottom: 0px;
}
.details-x123 {
  width: 100%;
  height: 400px;
  position: fixed;
  bottom: -1500px;
  background-color: #ffffff;
  z-index: 999;
  transition: all 0.5s;
}
.details-x123 p {
  font-size: 20px;
}
.details-x123-title {
  width: 100%;
  height: 50px;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.details-x123-title-p {
  font-size: 18px;
  color: #333;
}
.details-x123-title-p1 {
  padding-right: 10px;
}
.details-x123-title-div1 {
  width: 40%;
  height: 100%;
}

.details-x123-title-div2 {
  width: 60%;
  height: 100%;
}
.details-x123-title-div2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.details-x123-title-div3 p {
  font-size: 14px;
  color: #333;
}
.details-inner-x123 {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  z-index: 99;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}
.details-inner-x124 {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.details-inner-x124 span {
  font-size: 25px;
  color: #c7c7c7;
}
.details-inner-x125 {
  width: 40%;
  height: 100%;
}
.details-inner-x125 button {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: #fff;
  border: none;
  color: #333;
  border: 1px solid rgb(0, 0, 0, 0.05);
  outline: none;
}
.details-inner-x126 {
  width: 40%;
  height: 100%;
}
.details-inner-x126 button {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: red;
  border: none;
  color: #ffffff;
}
/* .el-icon-arrow-right {
  position: absolute;
  right: 0;
  top: 40%;
} */
.details-tt {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: dashed 1px #999;
}
.details-tt div:nth-child(1) {
  margin-right: 20px;
  width: 20%;
}
.details-tt div {
  font-size: 0.32rem;
  margin-top: 10px;
}
.whiteheight {
  height: 60px;
}
.details-content {
  background: #fff;
  padding: 0 15px;
}
.class-img p img {
  width: 100%;
  display: block;
}
</style>