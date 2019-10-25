<template>
  <div class="family-life">
     <el-backtop :bottom='60'>
        <div><i class="el-icon-top"></i>
    </div>
    </el-backtop>
    <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/79b2dbf762217e6e532f335bda4c85b3.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/aa4aaccd3b61b9dfb5da47398e2fae88.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/4cbd0b34c2b4f2c877610e232a402c7f.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/4e282190c63257bd1faaec14387f8cdf.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5a71bd98d1f9f36eee9b37bd32507b83.png?imageView&quality=75&thumbnail=750x0" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/79b2dbf762217e6e532f335bda4c85b3.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
            </div>
        <div class="swiper-pagination"></div>
    </div>
    
    <div class="family-life-title">
      <div>秋冬好物</div>
      <div>秋冬好物</div>
    </div>

   <ul class="family-life-item">
     <li class="family-life-item-pro" v-for='(item,index) in wintergoodsList' :key='index'>
       <div class="family-life-item-pro-all">
         <div class="family-life-item-pro-img">
           <img :src="item.imgUrl" alt="">
         </div>
         <div class="family-life-item-pro-des"><span>{{item.des}}</span></div>
         <div class="family-life-item-pro-intro"><p>{{item.title}}</p></div>
         <div class="family-life-item-pro-price"><span>{{item.price}}</span></div>
       </div>
     </li>
   </ul>
   <europWoods></europWoods>
  </div>
  
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import europWoods from "./europwoods.vue"
export default {
  name: "familyLife",
  data(){
    return {
      wintergoodsList:[]
    }
  },
  components:{
    europWoods,
  },
   mounted(){
     new Swiper('.swiper-container', {
      loop : true,
      autoplay:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    axios.get("./data/familylife.json").then(response => {
      this.wintergoodsList = response.data.data.wintergoods;
    });
  }
};
</script>

<style>
  .family-life{
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .family-life-title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .family-life-title div:nth-child(1){
    font-size: .42667rem;
  }
  .family-life-title div:nth-child(2){
    margin-top: .21333rem;
    color: #999;
    font-size: .32rem;
  }
  .family-life-item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
  }
  .family-life-item-pro{
    width: 49%;
    padding: 0rem 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
  }
  .family-life-item-pro-all{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
  .family-life-item-pro-img img{
    height: 100%;
    width: 100%;
  }
  .family-life-item-pro-des{
    background: #F1ECE2;
    font-size: .32rem;
    color: #9F8A60;
    width: 100%;
  }
  .family-life-item-pro-des span{
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis;
  }
  .family-life-item-pro-intro p{
    margin-top: .21333rem;
    line-height: .53333rem;
    font-size: .37333rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .family-life-item-pro-price{
    line-height: .64rem;
    color: #b4282d;
  }
  .family-life-item-pro-price span{
    font-size: .42667rem;
    }
</style>