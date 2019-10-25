<template>
    <div class="personfile">
        <div class="user-title">
            <div class="user-img">
                <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png">
                <div class="user-des">
                    <p class="user-name">用户名</p>
                    <span>普通用户</span>
                </div>
            </div>
        </div>

        <div class="myassets">
          <h2 class="myassets-title">我的资产</h2>
          <div class="myassets-content">
            <div class="myassets-content-count">
              <p>¥0</p>
              <p>回馈金</p>
            </div>
            <div class="myassets-content-count">
               <p>¥0</p>
              <p>红包</p>
            </div>
            <div class="myassets-content-count">
               <p>¥0</p>
              <p>优惠券</p>
            </div>
            <div class="myassets-content-count">
               <p>¥0</p>
              <p>津贴</p>
            </div>
            <div class="myassets-content-count">
               <p>¥0</p>
              <p>礼品卡</p>
            </div>
          </div>
        </div>

        <div class="options">
          <ul class="options-list">
            <li class="options-list-item">
              <i class="el-icon-s-order"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-date"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-date"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-chat-dot-square"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-message"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-turn-off"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-postcard"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-time"></i>
              <p>我的订单</p>
            </li>
            <li class="options-list-item">
              <i class="el-icon-switch-button"></i>
              <p>我的订单</p>
            </li>
          </ul>
        </div>

        <div class="exitLogin">
          <p @click='exitLogin'>退出登录</p>
        </div>

        <div class="empty">

        </div>
    </div>
</template>

<script>
export default {
    name:'Personal',
     data() {
    return {
      mianIndex: 0
    };
  },
  methods: {
  exitLogin(){
    this.$store.state.loginstatus=false;
    this.$router.push({path:'/mian/my'})
}
    },
  }
</script>


<style >
.user-title{
    background-image: url(//yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png);
    background-size: 100%;
    height: 3.6rem;
}
.user-img{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: .85333rem 0;
  margin-left: .4rem;
  align-items: center;
}
.user-img img{
  border-radius: 50%;
      width: 1.89333rem;
    height: 1.89333rem;
}
.user-des{
  margin-left: .4rem;
  color: #fff;
}
.user-des p{
  font-size: .48rem;

}
.user-des span{
  font-size: .48rem;

}
.myassets{
background: #fff;
}
.myassets-title{
  margin-left: .4rem;
    border-bottom: .01333rem solid #D9D9D9;
    text-align: left;
    line-height: 1.38667rem;
    font-size: .37333rem;
    font-weight:normal
}
.myassets-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.myassets-content-count{
  padding: .42667rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myassets-content-count p:nth-child(1){
  margin-bottom: .05333rem;
    font-size: .42667rem;
    line-height: .64rem;
    font-weight: 700;
}
.myassets-content-count p:nth-child(2){
    font-size: .32rem;
    line-height: .48rem;
}
.options{
  margin-top: 10px;
  background:#fff;
}
.options-list-item i{
  font-size: 35px;
  color:rgb(140,140,140)
}

.options-list{
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.options-list-item{
  width: 33.33%;
  border-right: 1px solid rgba(0,0,0,.1);
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: .6rem 0;
    text-align: center;

}
.personfile{
  background: #eee;
}
.exitLogin{
  height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    border: 1px solid #fff;
    background-color: #fff;
    color: #333;
    margin-top: 15px;
}
.exitLogin p{
  font-size: .37333rem;
}
.empty{
  height: 50px;
}
</style>
