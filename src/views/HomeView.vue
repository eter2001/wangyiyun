<template>
  <div class="home">
    <TopNav :current=1></TopNav>
    <SwiperCon></SwiperCon>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import SwiperCon from "@/components/SwiperCon.vue";
import IconList from "@/components/IconList.vue";
import MusicList from "@/components/MusicList.vue";
import { toRefs, reactive } from "vue";

// Import Swiper styles
// import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    TopNav,
    SwiperCon,
    IconList,
    MusicList
  },
  setup() {
    
  },
};
</script>

<style lang="less" scoped>
.home{
  z-index: -1;
  padding-bottom: 1rem;
}
</style>
