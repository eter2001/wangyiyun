<template>
  <div class="topNav">
    <div class="topLeft" @click="showPopup">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup
      v-model:show="show"
      position="left"
      :style="{ width: '80%', height: '100%' }"
    >
      <PopUp></PopUp>
    </van-popup>
    <div class="topCenter">
      <span
        class="navBtn"
        :class="{ active: i == current }"
        v-for="(item, i) in topCenter"
        :key="i"
        @click="router.push(item.path)"
        >{{ item.title }}</span
      >
    </div>
    <div class="topRight" @click="toSearch">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import PopUp from "../components/PopUp";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    current: Number,
  },
  setup() {
    const router = useRouter();
    const show = ref(false);

    let topCenter = reactive([
      {
        title: "我的",
        active: "active",
        path: "/me",
      },
      {
        title: "发现",
        active: "active",
        path: "/",
      },
      {
        title: "云村",
        active: "active",
        path: "/cloudVillage",
      },
      {
        title: "视频",
        active: "active",
        path: "/video",
      },
    ]);
    const showPopup = () => {
      show.value = true;
    };
    let toSearch = () => {
      router.push({ path: "/search" });
    };
    return { toSearch, showPopup, router, topCenter, show };
  },
  components: { PopUp },
};
</script>

<style scoped lang="less">
.topNav {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
  .topCenter {
    width: 5rem;
    display: flex;
    justify-content: space-between;
    .active {
      font-weight: 900;
    }
  }
}
</style>
