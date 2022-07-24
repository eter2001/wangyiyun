<template>
  <div class="musicZone">
    <p class="caption">音乐专区</p>
    <div class="content">
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
    </div>
    <div class="moreZone" @click="moreInfo">
      <p class="p1"></p>
      <p class="p2">展开更多专区<i class="iconfont icon-xiajiantou"></i></p>
    </div>
    <div class="content" v-show="isMore">
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
      <MSub></MSub>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import MSub from "./MSub.vue";
export default {
  setup() {
    let isMore = ref(false);
    let moreInfo = () => {
      isMore.value = true;
      $(".moreZone").remove();
    };
    return { isMore, moreInfo };
  },
  components: {
    MSub,
  },
};
</script>
<style lang="less" scoped>
.musicZone {
  padding: 0.2rem;
  padding-bottom: 1.2rem;
  position: relative;
  .content {
    margin-top: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height: 5.6rem;
    overflow: hidden;
  }
  .moreZone {
    // position: absolute;
    // bottom: 1.2rem;
    text-align: center;
    height: 1.1rem;
    width: 7.1rem;

    .p1 {
      height: 0.4rem;
      width: 101%;
      background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
    }
    .p2 {
      background-color: white;
      height: 0.7rem;
      width: 101%;
    }
  }
}
</style>