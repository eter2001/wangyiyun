<template>
  <div class="list">
    <div class="title">
      <p
        :class="{ active: i == activeN ? true : false }"
        v-for="(item, i) in lists"
        :key="i"
      >
        {{ item.title }}
      </p>
    </div>
    <Swiper
      class="swipers"
      :slides-per-view="1.05"
      :space-between="10"
      @slideChange="onSlideChange"
    >
      <SwiperSlide class="swiperItem">
        <div
          class="content"
          v-for="(item, i) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="i"
        >
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="danger">热</van-tag>
        </div>
        <div class="moreList" @click="moreInfo">
          展开更多热搜<i class="iconfont icon-xiajiantou"></i>
        </div>
        <div
          class="content"
          v-for="(item, i) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="i"
        >
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="success">新</van-tag>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiperItem">
        <div class="content_2" v-for="(item, i) in [1, 1, 1, 1, 1]" :key="i">
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="danger">热</van-tag>
          <p class="hotNum">2222热度</p>
        </div>
        <div class="moreList" @click="moreInfo">
          展开更多热搜<i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="content_2" v-for="(item, i) in [1, 1, 1, 1, 1]" :key="i">
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="danger">热</van-tag>
          <p class="hotNum">2222热度</p>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiperItem"
        ><div
          class="content"
          v-for="(item, i) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="i"
        >
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="danger">热</van-tag>
        </div>
        <div class="moreList" @click="moreInfo">
          展开更多热搜<i class="iconfont icon-xiajiantou"></i>
        </div>
        <div
          class="content"
          v-for="(item, i) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="i"
        >
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="success">新</van-tag>
        </div></SwiperSlide
      >
      <SwiperSlide class="swiperItem"
        ><div
          class="content"
          v-for="(item, i) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="i"
        >
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="danger">热</van-tag>
        </div>
        <div class="moreList" @click="moreInfo">
          展开更多热搜<i class="iconfont icon-xiajiantou"></i>
        </div>
        <div
          class="content"
          v-for="(item, i) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="i"
        >
          <p class="num">{{ i + 1 }}</p>
          <p class="titles">古茶子</p>
          <van-tag type="success">新</van-tag>
        </div></SwiperSlide
      >
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/vue";
import { reactive, ref, onMounted } from "vue";
export default {
  setup() {
    let lists = reactive([
      { title: "热搜榜" },
      { title: "话题榜" },
      { title: "视频榜" },
      { title: "博客榜" },
    ]);
    let activeN = ref(0);
    let swiperSlide = useSwiperSlide();
    const onSlideChange = (swiper) => {
      //   console.log(swiper.activeIndex);
      activeN.value = swiper.activeIndex;
    };
    let moreInfo = () => {
      $(".swipers").css({ height: "6.8rem" });
      $(".moreList").remove();
    };

    return { onSlideChange, moreInfo, lists, activeN };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="less" scoped>
.list {
  padding: 0.2rem;
  .title {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 00.1rem;
    color: rgba(0, 0, 0, 0.3);
  }
  .active {
    color: #000;
  }
  .swipers {
    font-size: 0.27rem;
    height: 4rem;
    padding: 0.1rem;
    .swiperItem {
      box-shadow: 0rem 0rem 0.1rem #eee;
      border-radius: 0.1rem;
      //   border: 1px solid;
      padding: 0.3rem;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .content,
      .content_2 {
        width: 50%;
        display: flex;
        align-items: center;
        position: relative;
        margin: 0.125rem 0;
        .num {
          margin-right: 0.3rem;
        }
        .titles {
          // width: 1rem;
          margin-right: 0.1rem;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .titles_2 {
        }
        .van-tag--danger {
          color: red;
          background-color: rgba(255, 0, 0, 0.1);
        }
        .van-tag--success {
          color: green;
          background-color: rgba(0, 255, 0, 0.1);
        }
      }
      .content_2 {
        width: 100%;
        .hotNum {
          position: absolute;
          right: 0;
          color: #666;
          font-size: 0.25rem;
        }
      }
      .moreList {
        text-align: center;
        width: 100%;
        color: #666;
      }
    }
  }
}
</style>