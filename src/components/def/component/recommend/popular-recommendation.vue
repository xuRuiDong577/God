<template>
    <div class="popular-recom">
        <div class="popular-recom-title">
            <div>人气推荐</div>
            <div>更多<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="popular-recom-top">
            <div class="popular-recom-top-img">
            </div>
            <div class="popular-recom-top-des">
                <div class="popular-recom-top-des-quan"><span>满400减60券</span></div>
                <div class="popular-recom-top-des-title">网易智造蒸汽沐足盆</div>
                <div class="popular-recom-top-des-intro">明星爆款，秋冬泡脚，暖遍全身</div>
                <div class="popular-recom-top-txt"><span>¥449</span></div>
            </div>
        </div>
        <div class="popular-recom-bottom">
            <div class="popular-recom-bottom-part1">
                <div class="popular-recom-bottom-part1-img">
                    <img src="https://yanxuan-item.nosdn.127.net/c27abf14fa51f922122d9c81d7e68bd8.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="popular-recom-bottom-part1-des"><span>20寸 纯PC "铝框"<i>¥295</i></span></div>
                <div class="popular-recom-bottom-part1-tag">
                    <div>特价</div>
                </div>
            </div>
            <div class="popular-recom-bottom-part2">
                 <div class="popular-recom-bottom-part1-img">
                     <img src="https://yanxuan-item.nosdn.127.net/ef68b8e6c017ec145e14c10804337f91.png?imageView&quality=65&thumbnail=330x330" alt="">
                 </div>
                <div class="popular-recom-bottom-part1-des"><span>冻干卤肉饭200克<i>¥14.9</i></span></div>
                <div class="popular-recom-bottom-part1-tag">
                    <div>新品尝鲜</div>
                    <div>新品</div>
                </div>
            </div>
            <div class="popular-recom-bottom-part3">
                 <div class="popular-recom-bottom-part1-img">
                     <img src="https://yanxuan-item.nosdn.127.net/86989f8cb0ece3d5ebf903b988abae79.png?imageView&quality=65&thumbnail=330x330" alt="">
                 </div>
                <div class="popular-recom-bottom-part1-des"><span>95%白鹅绒保暖羽绒被<i>¥1149</i></span></div>
                <div class="popular-recom-bottom-part1-tag">
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
export default{
    name:"popularRecom"
};
</script>

<style >
.popular-recom{
    margin-top: 10px;
    background: #fff;
    padding: .4rem;
}
.popular-recom-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0.4rem;

}
.popular-recom-title div{
    font-size: .4rem;
}
.popular-recom-top-img{
    width: 3.73333rem;
    height: 3.73333rem;
    background: url(https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=280x280);
    background-size: 100% 100%;
    margin-right: .4rem;
}
.popular-recom-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #FEF0DF;
}
.popular-recom-top-des{
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 0.8rem;
}
.popular-recom-top-des-quan{
    background-image: url(//yanxuan.nosdn.127.net/ed89ab4f5ad97ad23257f635a9c2fdbb.png),url(//yanxuan.nosdn.127.net/344655c651a5cf17b7d6096b69be7aba.png),url(//yanxuan.nosdn.127.net/6dcff693a2be08725c1313c7e2390840.png);
    background-repeat: no-repeat,no-repeat,repeat-x;
    background-size: auto 100%,auto 100%,100% 100%;
    background-position: left center,right center,center center;
    padding: 0 .17333rem;
    width: 2.2rem;
    line-height: .4rem;
    height: .4rem;
    overflow: hidden;
    border: none;
    border-radius: .05333rem;
}
.popular-recom-top-txt{
    color: red;
}
.popular-recom-top-des-title{
    margin-top: 0.2rem;
}
.popular-recom-top-des-intro{
    margin-bottom: 0.2rem;
    font-size: .32rem;
    color: #7F7F7F;
}
.popular-recom-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}
.popular-recom-bottom-part1,.popular-recom-bottom-part2,.popular-recom-bottom-part3{
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 33%;
    height: auto;
}
.popular-recom-bottom-part1-img{
    width: 100%;
    height: 60%;
}
.popular-recom-bottom-part1-img img{
     width: 100%;
    height: 100%;
}
.popular-recom-bottom-part1-des{
    font-size: .32rem;
}
.popular-recom-bottom-part1-des span i{
    color: red;
}
.popular-recom-bottom-part1-tag{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.popular-recom-bottom-part1-tag div{
    color: red;
    border-radius: .18667rem;
    border: 1px solid #CE2424;
    margin-right: 0.2rem;
}
</style>