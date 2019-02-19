<template>
  <section class="container">
    <headers />
    <div class="content-box">
      <div class="c-left-box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="../assets/imgs/banner1.jpg"
                alt=""
              >
            </div>
            <div class="swiper-slide"><img
                src="../assets/imgs/banner2.jpg"
                alt=""
              ></div>
            <div class="swiper-slide"><img
                src="../assets/imgs/banner3.jpg"
                alt=""
              ></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>

        <list />
      </div>
      <div class="c-right-box">
        <div class="c-search-box">
          <a-input-search
            placeholder="input search text"
            @search="onSearch"
            enterButton
          />
          <a-list
            size="large"
            bordered
            :dataSource="data"
          >
            <a-list-item
              slot="renderItem"
              slot-scope="item, index"
            >{{item}}</a-list-item>
            <div slot="header">热门搜索</div>
            <div slot="footer">更多内容</div>
          </a-list>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Headers from "~/components/Headers.vue";
import list from "~/components/List.vue";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

export default {
  components: {
    Headers,
    list
  },
  data() {
    return {
      data
    };
  },
  mounted: function() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true
    });
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
  flex-direction: column;
  background: $gray1;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.content-box {
  width: 1200px;
  margin: 10px auto 0;
  .c-left-box,
  .c-right-box {
    float: left;
    text-align: left;
    background: white;
    padding: 10px;
    border-radius: 8px;
  }
  .c-left-box {
    width: 790px;
  }
  .c-right-box {
    margin-left: 10px;
    width: 400px;
  }
}
.swiper-container {
  img {
    width: 100%;
    height: 200px;
  }
}
.c-search-box {
  padding: 10px;
  text-align: left;
  .ant-list {
    margin-top: 10px;
  }
  .ant-list-item {
    cursor: pointer;
  }
}
</style>
