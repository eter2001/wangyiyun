<template>
  <div class="songSheet">
    <van-action-sheet
      v-model:show="show"
      duration="0.2"
      @click-overlay="notShow"
      @close="notShow"
      :style="style"
    >
      <div class="top">
        <div class="title">当前播放({{store.state.playlist.length}})</div>
        <div class="func">
          <div class="l">
            <i class="iconfont icon-xunhuan"></i>
            <p>顺序播放</p>
          </div>
          <div class="r">
            <i class="iconfont icon-xiazai"></i>
            <i class="iconfont icon-Add"></i>
            <i class="iconfont icon-shanchu"></i>
          </div>
        </div>
      </div>
      <div class="content">
        <p
          v-for="(item, i) in store.state.playlist"
          :key="i"
          
          :class="{'active':store.state.playCurrentIndex==i?true:false}"
        >

          <p class="songName" @click="play(i)">{{item.name}}</p>
          <p class="creator" @click="play(i)">-{{item.ar[0].name}}</p>
          <i class="iconfont icon-cuowuguanbiquxiao" @click="deleteSong(i)"></i>
        </p>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: ["show"],
  setup(props, { emit }) {
    let store = useStore();
    let style = reactive({
      "border-radius":
        "var(--van-popup-round-border-radius) var(--van-popup-round-border-radius)",
      margin: " 0.2rem",
      width: "7.1rem",
      height: "8.5rem",
      padding: "0.2rem",
    });
    let notShow = () => {
      console.log("close");
      emit("songSheetShow", false);
    };
    let play = (i) => {
      store.setPlayIndex(i);
      store.setPlayPaused(false);
    };
    let deleteSong = (i) => {
      store.deleteSong(i, 1);
      console.log(i);
    };
    console.log("store", store.state);
    return { notShow, play, deleteSong, style, store };
  },
};
</script>
<style lang="less" scoped>
.songSheet {
  .top {
    margin-bottom: 00.2rem;

    .title {
      font-size: 0.4;
      margin-bottom: 0.2rem;
      font-weight: bold;
    }
    .func {
      color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .l {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        i {
          font-size: 0.35rem;
        }
        p {
        }
      }
      .r {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 2rem;
        i {
          font-size: 0.35rem;
        }
      }
    }
  }
  .content {
    // overflow: hidden;
    height: 6.8rem;
    overflow-y: auto;
    p {
      height: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      position: relative;
      //   width: 93%;

      .songName {
        font-size: 0.25rem;
      }
      .creator {
        font-size: 0.2rem;
        // color: rgba(0, 0, 0, 0.5);
        opacity: 0.5;
      }
      i {
        font-size: 0.4rem;
        position: absolute;
        right: 0;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .active {
      color: red;
    }
  }
  .content::-webkit-scrollbar {
    display: none;
  }
}
</style>