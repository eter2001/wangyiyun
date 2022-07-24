<template>
  <Swiper
    :pagination="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
  >
    <!-- @swiper="onSwiper"
    @slideChange="onSlideChange" -->
    <Swiper-slide v-for="(item, i) in swiperData" :key="i">
      <img :src="item.pic" alt="" srcset="" />
    </Swiper-slide>
    <div class="pagination"></div>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import { ref, toRefs, reactive, onMounted } from "vue";
import axios from "axios";
import { getBanner } from "../api/index";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let swiperData = ref();
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = () => {
    //   console.log("slide change");
    // };
    onMounted(async () => {
      swiperData.value = (await getBanner(1)).data.banners
    });

    // swiperData.value = getBanner(1);
    return {
      // onSwiper,
      // onSlideChange,
      swiperData,
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
<style lang="less" scoped>
.swiper {
  width: 7.1rem;
  height: 3rem;
  border-radius: 0.1rem;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
  :deep(.swiper-pagination-bullet-active) {
    background-color: orangered;
  }
}
</style>