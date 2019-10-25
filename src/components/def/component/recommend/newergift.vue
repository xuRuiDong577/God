<template>
  <div class="moduleTitle">
    <div>
      <span class="txt">--新人专享礼--</span>
    </div>
    <div class="content">
      <div class="content-left" onclick="window.open('https://m.you.163.com/gift/newWapUserGift','_self')">
        <p>新人专享礼包</p>
        <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
      </div>
      <div class="content-right"  >
        <div class="content-right-top" onclick="window.open('https://m.you.163.com/saleCenter/index','_self')">
          <div>福利社</div>
          <div>今日特价</div>
          <img
            src="https://yanxuan-item.nosdn.127.net/fcac9df3f0cc28e91b3daaf703a3ab7c.png?imageView&thumbnail=200x200&quality=75"
            alt
          />
        </div>
        <div class="content-right-bottom" onclick="window.open('https://m.you.163.com/pin/item/list','_self')">
          <div>新人拼团</div>
          <div>1元起包邮</div>
          <img
            src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
    name:"NewerGift"
}
</script>

<style >
.moduleTitle{
  margin-top: 10px;
  text-align: center;
  background: #fff;
  height: 7rem;
  line-height: 1.2rem;
  font-size: .42667rem;
}
.content-left{
    display: block;
    width: 50%;
    
    background: #F9E9CF;
    border-radius: .05333rem;
    margin-right: .05333rem;
    color: #333;
}
.content{
  display: flex;
  flex-direction: row;
  padding: .4rem;
  background: #fff;
}
.content-right{
  width: 50%;
}
.content-right-top,.content-right-bottom{
     width:100%;
      position: relative;
      height: 103px;
      background: #FBE2D3;
      margin: 0 .05333rem .05333rem 0;
      
}
.content-right-bottom{
  background: #FFECC2;
}

.content-right-top div:nth-child(1),.content-right-bottom div:nth-child(1){
  height: 18px;
  font-size: 0.4rem;
  position: relative;
  left: -30px
}
.content-right-top div:nth-child(2),.content-right-bottom div:nth-child(2){
  color: #7F7F7F;
  height: 18px;
   position: relative;
  left: -30px

}
.content-right-top img,.content-right-bottom img{
    width: 2.66667rem;
    height: 2.66667rem;
    position: absolute;
    right: 0;
    top: 0
}
.content-left p{
  padding:.4rem 0 0 .4rem;
}
.content-left img{
    width: 3.44rem;
    height: 3.42667rem
}
</style>
