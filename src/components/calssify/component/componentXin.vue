<template>
    <div class="classify-picture-content">
      <div class="classify-loop">
        <div class="swiper-container classify" dir="rtl">
          <div class="swiper-wrapper">
            <div class="swiper-slide classify-img">
              <img
                src="https://yanxuan.nosdn.127.net/dec6ff5ae8bae410809598950ba1f5b4.jpg?imageView&thumbnail=0x196"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      <div class="classify-cateList">
        <ul class="classify-cateList-ul">
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/6cd083d74e171dd6cc06a15305aaf4bd.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
          居家生活
          </li>
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/cdaa57d7d62eed9fed04dd6c2690eb0a.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
            服饰鞋包
          </li>
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/19a7439d8fb83a5e17141c83273370f0.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
           个护清洁
          </li>
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/edbb370b02a3cd1004423952d8b538fa.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
           运动旅行
          </li>
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/3c7c8c9701418c65443aafcc0cc8e504.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
            母婴亲子
          </li>
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/575977783cdaf86f36c41df05bd9885b.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
            数码家电
          </li>
          <li class="classify-cateLiat-title">
            <img
              src="https://yanxuan-item.nosdn.127.net/5547afe757f41b1bfcc6b06935dd8588.png?imageView&quality=85&thumbnail=144x144"
              alt
            />
            周边特色
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "Xin",
};
</script>

<style >

.classify-picture-content {
  width: 75%;
  padding: 30px 10px 10px 10px;
}
.classify-title-li {
  width: 100%;
}
.classify-active {
  color: #ab2b2b;
  border-left: 3px solid #ab2b2b;
}
.classify {
  width: 100%;
  height: 100%;
}
.classify-loop {
  width: 100%;
  height: 100px;
  position: relative;
}
.classify-img img {
  width: 100%;
  height: 100%;
}
.classify-cateList {
  width: 100%;
  height: 500px;
  padding: 10px 0px;
}
.classify-cateList-ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.classify-cateLiat-title {
  font-size: 12px;
  width: 30%;
  height: 120px;
  flex-shrink: 0;
  text-align: center;
  margin-top: 10px;
}
.classify-cateLiat-title img {
  width: 100%;
  height: 100x;
}
</style>