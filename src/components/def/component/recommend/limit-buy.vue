<template>
  <div class="limit-buy">
    <div class="limit-buy-title">
      <div class="limit-buy-title-count">
          <div class="limit-buy-title-txt">限时购</div>
          <div class="limit-buy-title-countdown">
                <span class="hours">{{countDownList[0]}}</span>
                <span>:</span>
                <span class="minutes">{{countDownList[1]}}</span>
                <span>:</span>
                <span class="second">{{countDownList[2]}}</span>
      </div>
      </div>
      
      <!-- <div>{{countDownList}}</div> -->
      <div class="limit-buy-title-txt">
        更多
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="limit-buy-content">
      <div class="limit-buy-content-item">
        <div class="limit-buy-content-item-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/df3b083f7c42a6453fec121db61d0297.png?imageView&thumbnail=216x216&quality=75"
            alt
          />
        </div>
        <div class="limit-buy-content-item-price">
          <span>¥78.8</span>
          <span>¥88</span>
        </div>
      </div>
      <div class="limit-buy-content-item">
        <div class="limit-buy-content-item-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/06f4d2430f7d423dc9f363ebbdeb473b.png?imageView&thumbnail=216x216&quality=75"
            alt
          />
        </div>
        <div class="limit-buy-content-item-price">
          <span>¥151</span>
          <span>¥229</span>
        </div>
      </div>
      <div class="limit-buy-content-item">
        <div class="limit-buy-content-item-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/3a4e30b9bf6a634ea648ce95eba727df.png?imageView&thumbnail=216x216&quality=75"
            alt
          />
        </div>
        <div class="limit-buy-content-item-price">
          <span>¥125</span>
          <span>¥139</span>
        </div>
      </div>
      <div class="limit-buy-content-item">
        <div class="limit-buy-content-item-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/547a6f1ffcb45baaa97c3c5795267332.png?imageView&thumbnail=216x216&quality=75"
            alt
          />
        </div>
        <div class="limit-buy-content-item-price">
          <span>¥29.9</span>
          <span>¥39</span>
        </div>
      </div>
      <div class="limit-buy-content-item">
        <div class="limit-buy-content-item-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/04e5b73feb4bb32507df064925c462d5.png?imageView&thumbnail=216x216&quality=75"
            alt
          />
        </div>
        <div class="limit-buy-content-item-price">
          <span>¥159</span>
          <span>¥199</span>
        </div>
      </div>
      <div class="limit-buy-content-item">
        <div class="limit-buy-content-item-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/278b43ecbf81e5456f7fc5bdd29b4ce9.png?imageView&thumbnail=216x216&quality=75"
            alt
          />
        </div>
        <div class="limit-buy-content-item-price">
          <span>¥241</span>
          <span>¥439</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "limitBuy",
  data() {
    return {
      countDownList: [],
      actEndTime: "2019-10-18 20:50:00"
    };
  },
  created() {
    this.countDown();
  },
  methods: {
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown() {
      var interval = setInterval(() => {
        let newTime = new Date().getTime();
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null;
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000;
        //   let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            // day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          obj = {
            // day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          clearInterval(interval);
        }
        this.countDownList =[obj.hou,obj.min,obj.sec]
        //   obj.hou + "时" + obj.min + "分" + obj.sec + "秒";
      }, 1000);
    }
  }
};
</script>

<style>
.limit-buy {
  margin-top: 10px;
  background: #fff;
  padding: 0.4rem;
}
.limit-buy-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4rem;
}

.limit-buy-title-count{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.limit-buy-title-txt{
    font-size: .4rem;

}
.limit-buy-title-countdown {
  margin: -0.08rem 0 0 0.16rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.hours,
.minutes,
.second {
  display: inline-block;
  font-size: 0.32rem;
  line-height: 0.48rem;
  width: 0.48rem;
  height: 0.48rem;
  text-align: center;
  background-color: #333;
  border-radius: 0.05333rem;
  color: #fff;
  margin: 0 0.13333rem;
  font-family: PingFangSC-Medium;
}

.limit-buy-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
}
.limit-buy-content-item {
  width: 33.33%;
}
.limit-buy-content-item img {
  width: 100%;
}
.limit-buy-content-item-price span:nth-child(1) {
  color: red;
  padding-left: 0.26667rem;
}
.limit-buy-content-item-price span:nth-child(2) {
  padding-left: 0.26667rem;
  color: #7f7f7f;
  font-size: 0.32rem;
  color: #7f7f7f;
  text-decoration: line-through;
}
</style>