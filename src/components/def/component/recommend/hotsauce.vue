<template>
      <div class="hotSale">
          <div class="provideTitle">
            <div>类目热销榜</div>
          </div>
          <div class="hot-content">
            <div class="content-title">
              <div class="content-title-left">
                <p>热销榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
              <div class="content-title-right">
                <p>好评榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-list">
                <p>服饰鞋包榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/17c3596d257753108d1d471b8ea4d385.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
               <div class="content-item-list">
                <p>居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
               <div class="content-item-list">
                <p>美食酒水榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
               <div class="content-item-list">
                <p>个护清洁榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
              <div class="content-item-list">
                <p>数码家电榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/ea9af61f4504871f72c4b9ef38ca4799.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
              <div class="content-item-list">
                <p>运动旅行榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
              <div class="content-item-list">
                <p>母婴亲子榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/eddaeb4852b8a4732102eab839641c95.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
              <div class="content-item-list">
                <p>全球特色榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
        </div>
</template>
<script>

export default {
    name:"hotSauce"
}
</script>
<style >

.hotSale{
  background: #fff;
  margin-top: 10px;
}
.content-title-left,.content-title-right{
     width: 50%;
     height: 100%;
     display: flex;
     flex-direction: row;
    background: #F9F3E4;
    position: relative;
    margin: 0 .13333rem .13333rem 0;
}

.content-title-left img,.content-title-right img{
    width: 60%;

    position: absolute;
    top: 0;
    right: 0;
}
.content-title-left p,.content-title-right p{
  padding-top: .88rem;
}
.content-title{
  display: flex;
  flex-direction: row;
  padding: 0 .26667rem 0  0.4rem;
  width: 100%;
  height: 2.7rem;

}
.content-item-list{
    display: block;
    width: 23.56%;
    height: 2.4rem;
    background: #F5F5F5;
    border-radius: .05333rem;
    margin: .13333rem .13333rem .13333rem 0;
    text-align: center;
}
.content-item-list img{
    width: 100%;
    height: 90%;;
}
.content-item{
  display: flex;
  flex-direction: row;
  padding: 0 .26667rem 0  0.4rem;
  flex-wrap: wrap;
  width: 100%;
}
</style>