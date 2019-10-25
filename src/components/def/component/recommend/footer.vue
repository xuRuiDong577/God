<template>
    <div class="footer">
        <div class="footer-content">
        <div class="footer-btn">
            <div class="downloadapp footer-btn-style"><span>下载app</span></div>
            <div class="computer footer-btn-style"><span>电脑版</span></div>
        </div>
        <div class="company-info">
            <p>网易公司版权所有 © 1997-2019</p>
            <p>食品经营许可证：JY13301080111719</p>
        </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"Footer"
}
</script>

<style >
.footer{
    width: 100%;
    background-color: #414141; 
}
.footer-btn{
    display: flex;
    flex-direction: row;
    justify-content: center
}
.footer-btn-style{
    border: 1px solid #999;
    text-align: center;
    width: 2.29333rem;
    font-size: .32rem;
    color: #fff;
    height: .82667rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .6rem;
}
.footer-content{
    padding: .72rem .26667rem .37333rem;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.company-info{
    margin-top: 0.72rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
}
</style>