<template>
  <div class="playMusic">
    <!-- <slot name="zz"></slot> -->
    <!-- <p>{{ currentTime }}</p> -->
    <div class="bg">
      <img :src="playDetail.al.picUrl" />
    </div>

    <div class="playTop">
      <i class="back iconfont icon-zuojiantou" @click="$emit('back')"></i>
      <div class="center">
        <div class="title">{{ playDetail.name }}</div>
        <span class="writer" v-for="(item, i) in playDetail.ar">{{ item.name }}</span>
      </div>
      <i class="share iconfont icon-fenxiang"></i>
    </div>
    <div class="playContent" v-show="!isLyric" @click="changeLyric">
      <img class="needle" :class="{ active: !paused }" src="../assets/img/needle-ab.png" alt="" />
      <img class="d" src="../assets/img/d.png" alt="" />
      <img class="playImg" :class="{ play_running: !paused, play_paused: paused }" :src="playDetail.al.picUrl" />
    </div>
    <div class="playLyric" v-show="isLyric" @click="changeLyric" ref="playLyric">
      <p :class="{
        active_lyric:
          store.state.currentTime + 600 > item.time &&
          item.time_1 - item.time > store.state.currentTime + 600 - item.time,
      }" v-for="(item, i) in store.state.lyric">
        {{ item.item }}
      </p>
    </div>
    <div class="playLFun" v-show="!isLyric">
      <i class="iconfont icon-kongxin like"></i>
      <i class="iconfont icon-xiazai download"></i>
      <i class="iconfont icon-danchuang_changge_ sing"></i>
      <i class="iconfont icon-xiaoxi comment"></i>
      <i class="iconfont icon-sangedian1 more"></i>
    </div>
    <div class="progress">
      <div class="nowTime">{{ changeTime(store.state.currentTime) }}</div>
      <div class="progress1">
        <div class="progress2"></div>
      </div>
      <div class="overTime">{{ changeTime(duration) }}</div>
    </div>
    <div class="playFooter">
      <i class="iconfont icon-xunhuan circulation"></i>
      <i class="iconfont icon-shangyishou left" @click="goPlay(-1)"></i>
      <i class="iconfont pause" :class="{
        'icon-bofang1': store.state.isPaused,
        'icon-zanting': !store.state.isPaused,
      }" @click="play"></i>
      <i class="iconfont icon-next right" @click="goPlay(1)"></i>
      <i class="iconfont icon-bofangliebiao list" @click="changSongSheet"></i>
    </div>
    <SongSheet :show="songSheetShow" @songSheetShow="getSongSheetShow"></SongSheet>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import SongSheet from "../components/SongSheet.vue";

import {
  ref,
  inject,
  useSlots,
  watch,
  onMounted,
  getCurrentInstance,
  watchEffect,
} from "vue";
import { useStore } from "vuex";
export default {
  props: {
    playDetail: {
      type: Object,
    },
    paused: Boolean,
    duration: Number,
  },
  components: { SongSheet },
  setup(props) {
    let songSheetShow = ref(false);
    const store = useStore();
    const router = useRouter();
    const play = inject("play");
    let isLyric = ref(false);
    let playLyric = ref(null);
    let timer = ref();
    const { proxy } = getCurrentInstance();
    let changeLyric = () => {
      isLyric.value = !isLyric.value;
      // console.log(isLyric.value);
    };
    let getSongSheetShow = (msg) => {
      // console.log("msg", msg);
      songSheetShow.value = msg;
    };
    let changSongSheet = () => {
      // songSheetShow.value=!songSheetShow.value
      songSheetShow.value = true;
      // console.log("songSheetShow.value", songSheetShow.value);
    };
    let goPlay = (i) => {
      // console.log(i);
      // console.log(store.state.playlist);

      if (store.state.playCurrentIndex + i < 0) {
        i = 0;
      } else if (
        store.state.playCurrentIndex + i >
        store.state.playlist.length
      ) {
        i = store.state.playlist.length - 1;
      } else {
        i = store.state.playCurrentIndex + i;
      }

      store.setPlayIndex(i);
      store.setPlayPaused(false);
    };
    let changeTime = (v) => {
      let ss = Math.floor(v / 1000);
      let m = Math.floor(ss / 60);
      let s = ss % 60;
      if (s < 10) {
        s = "0" + String(s);
      } else {
        s = String(s);
      }
      if (m < 10) {
        m = "0" + String(m);
      } else {
        m = String(m);
      }
      return `${m}:${s}`;
    };
    // watchEffect(() => {
    watch(()=>store.state.currentTime, (newVal, oldVal) => {
      let p = $(".active_lyric");
      let playLyric=$(".playLyric")
      // $(".playLyric").scrollTop = [p][0].offsetTop + $(".playLyric").clientHeight * 0.5;
      // console.log([proxy.$refs.playLyric])
      // console.log(newVal,oldVal)
      playLyric[0].scrollTop &&
        (playLyric[0].scrollTop =
          p[0].offsetTop-200 );
      
      $(".progress2").css({
        width: (store.state.currentTime / props.duration) * 100 + "%",
      });
    });

    return {
      router,
      play,
      isLyric,
      getSongSheetShow,
      songSheetShow, changSongSheet,
      changeLyric,
      store,
      goPlay,
      changeTime,
    };
  },
};
</script>
<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  .bg {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #7e7672;

    img {
      width: 100%;
      height: 100%;
      filter: blur(140px);
    }
  }

  .playTop {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 7.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0.3rem;

    .back {
      color: white;
      font-size: 00.5rem;
    }

    .center {
      padding: 00.1rem 0;
      width: 5.5rem;

      .title {
        font-size: 00.3rem;
        color: white;
      }

      .writer {
        color: #eee;
        font-size: 00.2rem;
      }
    }

    .share {
      color: white;
      font-size: 00.4rem;
    }
  }

  .playContent {
    position: absolute;
    top: 1rem;
    left: 0;
    width: 7.5rem;
    height: 66%;

    .needle {
      width: 2.5rem;
      height: 3.7rem;
      position: absolute;
      top: 0;
      left: 46%;
      z-index: 1;
      transform-origin: 00.4rem 00.4rem;
      transform: rotate(-25deg);
      transition: all 1s;
    }

    .active {
      transform: rotate(0deg);
    }

    .d {
      width: 5.5rem;
      height: 5.5rem;
      position: absolute;
      top: 2rem;
      left: calc(50% - 2.75rem);
    }

    .playImg {
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 50%;
      position: absolute;
      top: 3rem;
      left: calc(50% - 1.7rem);
      //   transiton-timing-function: liner ;
      //   transform: rotate(-25deg);
      animation: 99999999s playImg infinite;
      //   animation-play-state:paused;//running
    }

    .play_running {
      animation-play-state: running;
    }

    .play_paused {
      animation-play-state: paused;
    }

    @keyframes playImg {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(3600000000deg);
      }
    }
  }

  .playLyric {
    position: absolute;
    top: 2rem;
    left: 0;
    width: 7.5rem;
    height: 66%;
    color: white;
    overflow: auto;
    text-align: center;
    padding: 55% 0;

    .active_lyric {
      color: red;
    }

    // padding: 50% 0;
    p {
      font-size: 0.3rem;
      padding: 0.1rem;
    }
  }

  .playLFun {
    position: absolute;
    left: 0;
    bottom: 1.5rem;
    width: 7.5rem;
    padding: 0.5rem 1.3rem;
    display: flex;
    justify-content: space-between;

    .like,
    .download,
    .sing,
    .comment,
    .more {
      font-size: 0.4rem;
      color: #eee;
    }
  }

  .progress {
    width: 7.1rem;
    height: 0.5rem;
    position: absolute;
    bottom: 1.3rem;
    left: 0.2rem;
    // background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nowTime {
      width: 1rem;
      text-align: center;
      color: white;
    }

    .progress1 {
      background-color: #eee;
      width: 5rem;
      height: 00.05rem;

      .progress2 {
        width: 100%;
        height: 100%;
        background-color: red;
      }
    }

    .overTime {
      width: 01rem;
      text-align: center;
      color: white;
    }
  }

  .playFooter {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0.4rem 1.3rem;
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .circulation,
    .left,
    .pause,
    .right,
    .list {
      font-size: 0.4rem;
      color: #eee;
    }

    .pause {
      font-size: 0.8rem;
    }
  }
}
</style>