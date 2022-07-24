<template>
  <div class="playController" v-show="store.state.playlist[0].id != 132402226">
    <div class="left" @click="isShow = !isShow">
      <img
        :src="store.state.playlist[store.state.playCurrentIndex].al.picUrl"
        alt=""
      />
      <div class="content">
        <div class="title">
          {{ store.state.playlist[store.state.playCurrentIndex].name }}
        </div>
        <div class="tips">横滑可以切换上下首噢</div>
      </div>
    </div>
    <div class="right">
      <i
        class="play iconfont"
        :class="{
          'icon-bobofang-copy': store.state.isPaused,
          'icon-zanzanting-copy': !store.state.isPaused,
        }"
        @click="play"
      ></i>
      <i class="list iconfont icon-bofangliebiao" @click="changSongSheet"></i>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${
        store.state.playlist[store.state.playCurrentIndex].id
      }.mp3`"
      @canplay="canplay"
      @ended="ended"
    ></audio>
    <PlayMusic
      :paused="store.state.isPaused"
      :duration="duration"
      @back="isShow = !isShow"
      v-show="isShow"
      :playDetail="store.state.playlist[store.state.playCurrentIndex]"
    >
    </PlayMusic>
    <SongSheet
      :show="songSheetShow"
      @songSheetShow="getSongSheetShow"
    ></SongSheet>
  </div>
</template>
<script>
import PlayMusic from "../components/PlayMusic.vue";
import SongSheet from "../components/SongSheet.vue";
import { useStore } from "vuex";
import { ref, onMounted, watch, provide, reactive, onUpdated } from "vue";
import { getLyric } from "../api/index";
export default {
  setup() {
    let songSheetShow = ref(false);
    let isShow = ref(false);
    let store = useStore();
    let audio = ref("");
    let timer;
    let currentTime = ref(0);
    let paused = ref();
    let lyric = reactive([]);
    let isActive = ref(true);
    let duration = ref(0);
    let changSongSheet = () => {
      // songSheetShow.value=!songSheetShow.value
      songSheetShow.value = true;
      console.log("songSheetShow.value", songSheetShow.value);
    };
    let getSongSheetShow = (msg) => {
      console.log("msg", msg);
      songSheetShow.value = msg;
    };
    function play() {
      duration.value = audio.value.duration * 1000;
      console.log("audio.value.paused", audio.value.paused);
      clearInterval(timer);
      if (audio.value.paused) {
        // isActive.value = false;
        audio.value.play();
        timer = setInterval(() => {
          // currentTime.value = audio.value.currentTime;
          // console.log("currentTime",audio.value.currentTime);
          // store.setCurrentTime(currentTime.value);
          store.setCurrentTime(audio.value.currentTime);
        }, 1000);
      } else {
        // isActive.value = true;
        audio.value.pause();
        // clearInterval(timer);
      }
      console.log("audio", audio.value.paused);
      // paused.value = audio.value.paused;
      store.setPlayPaused(audio.value.paused);
    }
    let canplay = async () => {
      console.log("canplay");
      play();
      lyric = await getLyric(
        store.state.playlist[store.state.playCurrentIndex].id
      );

      console.log(' lyric',lyric.data.lrc.lyric)
      // store.setLyric(lyric.data.lrc.lyric.split('\n'))
      let lyric2 = lyric.data.lrc.lyric.split("\n");
      let m,
        s,
        ms,
        item,
        time,
        lyric3 = [];
      for (let i of lyric2) {
        //分割歌词
        time = i.slice(i.indexOf("[") + 1);
        item = i.slice(i.indexOf("]") + 1, i.lenght);
        m = parseInt(time.slice(0, 2));
        s = parseInt(time.slice(3, 5));
        ms = parseInt(time.slice(6, time.lenght));
        //  console.log(i.slice( i.indexOf('[')+1,i.indexOf(']')))
        // console.log(m,s,ms,(m*60+s)*1000+ms,item)
        lyric3.push({
          m: m,
          s: s,
          ms: ms,
          time: (m * 60 + s) * 1000 + ms,
          item: item,
        });
      }
      lyric2 = [];
      let time_1;
      for (let i = lyric3.length - 2; i >= 0; i--) {
        if (i == lyric3.length - 2) {
          time_1 = duration.value;
        } else {
          time_1 = lyric3[i + 1].time;
        }
        lyric3[i]["time_1"] = time_1;
      }
      console.log("lyric3", lyric3);
      store.setLyric(lyric3);
    };
    let ended = () => {
      console.log("本首播放over");
      // isActive.value = false;
      // audio.value.pause();
      // clearInterval(timer);
      goPlay(1);
    };
    let goPlay = (i) => {
      // console.log(i);
      // console.log(store.state.playlist);
      i += store.state.playCurrentIndex;
      store.setPlayIndex(i);
      store.setPlayPaused(false);
    };
    onMounted(() => {
      console.log("audio", audio.value.paused);
      // play()
    });
    watch(store.state, (newVal, oldVal) => {
      // isActive.value = store.state.pause;
      // audio.value.play();
    });
    provide("play", play);
    // console.log('wwwwwwwww',store.state)
    return {
      store,
      audio,
      isShow,
      play,
      songSheetShow,
      isActive,
      // currentTime,
      paused,
      duration,
      songSheetShow,
      canplay,
      ended,
      changSongSheet,
      getSongSheetShow,
    };
  },
  components: {
    PlayMusic,
    SongSheet,
  },
};
</script>
<style lang="less" scoped>
.playController {
  z-index: 1;
  position: fixed;
  border-top: 0.01rem solid #eee;
  bottom: 0;
  background-color: white;
  width: 7.5rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .left {
    display: flex;
    img {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      margin-right: 0.1rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      .title {
        width: 5rem;
        font-size: 00.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tips {
        font-size: 00.2rem;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1.2rem;
    .play {
      font-size: 00.5rem;
    }
    .list {
      font-size: 00.5rem;
    }
  }
}
</style>