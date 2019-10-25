<template>
    <div class="moduleprovide">
          <div class="provideTitle">
            <div>品牌制造商直供</div>
            <div class="provideTitle-more">
              更多
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="provide-info">
            <div class="moduleprovide-foreign">
               
              <div class="provide-info-name">海外制造商</div>
              <div class="provide-info-txt">9.9元起</div>
               <div class="moduleprovide-foreign-img">
                    <img src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                </div>
            </div>
             <div class="moduleprovide-ck">
              <div class="provide-info-name">ck制造商</div>
              <div class="provide-info-txt">9.9元起</div>
               <div class="moduleprovide-ck-img">
                    <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                </div>
            </div>
             <div class="moduleprovide-new">
              <div class="provide-info-name">海外制造商</div>
              <div class="provide-info-txt">9.9元起</div>
               <div class="moduleprovide-new-img">
                    <img src="https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                </div>
            </div>
             <div class="moduleprovide-pan">
              <div class="provide-info-name">海外制造商</div>
              <div class="provide-info-txt">9.9元起</div>
               <div class="moduleprovide-pan-img">
                    <img src="https://yanxuan.nosdn.127.net/2696f71b5212cfabab8c90af7d06a927.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name:"brandProvide"
}

</script>
<style>
.moduleprovide{
  margin-top: 40px;
  background: #fff;
  padding-bottom: 10px;
  
}
.provideTitle{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0.4rem;

}
.provideTitle div{
  font-size: .4rem
}

.moduleprovide-foreign{
  text-align: center;
    width: 49%;
    height: 50%;
    background-size: cover;
    margin: 0 .05333rem .05333rem 0;
    background-color: rgb(249,252,252)
}
.moduleprovide-foreign img,.moduleprovide-ck img,.moduleprovide-new img ,.moduleprovide-pan img{
    width: 100%;
}
.moduleprovide-ck{
    text-align: center;
    width: 49%;
    height: 50%;
    background-size: cover;
    margin: 0 .05333rem .05333rem 0;
    background-color: rgb(249,252,252)

}
.moduleprovide-new{
    text-align: center;
     width: 49%;
     height: 50%;
    background-size: cover;
    margin: 0 .05333rem .05333rem 0;
    background-color: rgb(249,252,252)

}
.moduleprovide-pan{
    text-align: center;
    width: 49%;
    height: 50%;
    background-size: cover;
    margin: 0 .05333rem .05333rem 0;
    background-color: rgb(249,252,252)

}
.provide-info{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding:.4rem;
  width: 100%;
  height: 100%;
}
.provide-info-txt{
      color: #7F7F7F;
    font-size: .32rem;
}
.provide-info-name{
  padding-top: .30667rem;
      font-size: .37333rem;
}
</style>