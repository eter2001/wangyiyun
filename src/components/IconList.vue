<template>
  <Swiper
    ref="{swiperRef}"
    :slidesPerView="4.5"
    :spaceBetween="30"
    class="iconList"
  >
    <SwiperSlide
      class="iconItem"
      v-for="(item, i) in iconData"
      :key="i"
      @click="clickWho(i)"
    >
      <div>
        <i :class="['iconfont', item.iconClass]"></i>
      </div>
      <span>{{ item.title }}</span>
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive, toRef } from "vue";
// import { Pagination } from "swiper";
import "swiper/css";
export default {
  setup() {
    const iconData = reactive([
      { iconClass: "icon-rili", title: "每日推荐" },
      { iconClass: "icon-luyinjishouyinjidiantai", title: "私人FM" },
      { iconClass: "icon-gedan", title: "歌单" },
      { iconClass: "icon-paihangbang", title: "排行榜" },
      { iconClass: "icon-zhibohuifang", title: "直播" },
    ]);
    function clickWho(i) {
      console.log(i);
    }
    return { iconData, clickWho };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="less" scoped>
.iconList {
  padding: 0.4rem 0.2rem;
  .iconItem {
    // text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 1rem;
      height: 1rem;
      background-color: red;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: white;
        font-size: 0.5rem;
      }
    }
    span {margin-top: 0.1rem;
      text-align: center;
      width: 1rem;
      font-size: 0.3rem;
      width: 1.3rem;text-align: center;
    }
  }
}
</style>