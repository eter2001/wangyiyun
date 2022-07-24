<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <Swiper :slidesPerView="3.3" :spaceBetween="30" class="musicList-bottom">
      <SwiperSlide
        class="musicItem"
        v-for="(item, i) in data.musicList"
        :key="i"
        @click="toListView(item.id)"
      >
        <img :src="item.picUrl" alt="" srcset="" />
        <div class="title">{{ item.name }}</div>
        <div class="count iconfont icon-24gl-play">
          {{ changeVal(item.playCount) }}
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive, toRef, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { gePlaylist } from "../api/index";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
export default {
  setup() {
    const data = reactive({ musicList: [] });
    const $router = useRouter();
    function changeVal(v) {
      let res = "";
      if (v > 100000000) {
        res = Math.floor(v / 100000000) + "亿";
      } else if (v > 10000) {
        res = Math.floor(v / 10000) + "万";
      }
      return res;
    }
    function toListView(id) {
      $router.push({ path: "/listview", query: { id: id } });
    }
    onMounted(async () => {
      let res = await gePlaylist();
      data.musicList = res.data.result;
      console.log('gedan',res.data.result);
    });
    //   console.log(data)
    return { data, changeVal, toListView };
  },
  components: { Swiper, SwiperSlide },
  mounted() {
    //   console.log(data)
  },
  inject: ["store"],
};
</script>
<style lang="less" scoped>
.musicList {
  padding: 0.2rem 0;
  .musicList-top {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 0.35rem;
      font-weight: 700;
    }
    .more {
      border: 0.02rem solid rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
      font-size: 0.2rem;
      padding: 0 0.2rem;
      line-height: 0.55rem;
    }
  }
  .musicList-bottom {
    padding: 0.2rem;
    padding-right: 0.6rem;
    .musicItem {
      position: relative;
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 0.1rem;
      }
      .title {
        font-size: 0.25rem;
        width: 2rem;
        height: 0.45rem;
        -webkit-line-break: 2;
      }
      .count {
        position: absolute;
        top: 0.1rem;
        right: -0rem;
        color: white;
        font-size: 00.2rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.3rem;
        padding: 0 0.2rem;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
      }
    }
  }
}
</style>