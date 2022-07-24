<template>
  <div class="playlist">
    <div class="playlist_top">
      <div class="l">
        <i @click="allPlay" class="iconfont icon-bofang1"></i>
        <p>播放全部</p>
        <span>(共{{ playlist.tracks.length }}首)</span>
      </div>
      <div class="r">
        <i class="iconfont icon-jiahao"></i>
        <div>收藏({{ changeVal(playlist.subscribedCount) }})</div>
      </div>
    </div>
    <div class="playlist_content">
      <div class="list" v-for="(item, i) in playlist.tracks" :key="i">
        <i class="serial">{{ i + 1 }}</i>
        <div class="title" @click="play(i, item)">
          <div class="name">{{ item.name }}</div>
          <span v-for="(item2,j) in item.ar">{{ item2.name }} </span>
        </div>
        <i class="set iconfont icon-sangedian" @click="changSongInfo(item)"></i>
        <i class="video iconfont icon-bofang"></i>
      </div>
    </div>
    <SongInfo :show="songInfoShow" @songInfoShow="getSongInfoShow" :item="playlistItem"></SongInfo>
  </div>
</template>
<script>
import { toRefs, onMounted, inject,ref } from "vue";
import { useStore } from "vuex";
import SongInfo from './SongInfo.vue'
export default {
  // props: {
  //   playlist: {
  //     type: Object,
  //   },
  // },
  props: ["playlist"],components:{SongInfo},
  setup(props) {
    let store = useStore();
    let songInfoShow = ref(false);
    let playlistItem=ref()
    function changeVal(v) {
      if (v > 100000000) {
        return Math.floor(v / 100000000) + "亿";
      } else if (v > 10000) {
        return Math.floor(v / 10000) + "万";
      } else {
        return v;
      }
    }
    function play(i, item) {
      store.setPlayIndex(i);
      store.setPlayPaused(false);
      // console.log("item", item);
      store.setUpdateMusic(item);
    }
    let allPlay = () => {
      store.setPlayList(props.playlist.tracks);
      store.setPlayIndex(0);
    };
    let changSongInfo=(item)=>{
        songInfoShow.value=true;
        playlistItem.value=item
        console.log('item',item)
    };
    let getSongInfoShow=(msg)=>{
      console.log("msg", msg);
      songInfoShow.value = msg;
    }
    return { changeVal,songInfoShow, playlistItem,play,getSongInfoShow, allPlay,changSongInfo };
  },
};
</script>
<style lang="less" scoped>
.playlist {
  //   padding: 00.2rem;
  //   background-color: white;
  width: 7.5rem;
  .playlist_top {
    // height: 2rem;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0.3rem;
    border-radius: 0.3rem 0.3rem 0 0;
    .l {
      display: flex;
      width: 3.5rem;
      align-items: center;
      //   padding: 0 0.1rem;
      i {
        font-size: 00.4rem;
      }
      p {
        font-size: 0.3rem;
        margin-left: 0.25rem;
      }
      span {
        color: rgb(146, 139, 139);
        font-size: 0.2rem;
      }
    }
    .r {
      padding: 0.2rem;
      border-radius: 2rem;
      background-color: red;
      //   text-align: center;
      display: flex;
      align-items: center;
      i {
        color: white;
        font-size: 0.3rem;
      }
      div {
        font-size: 0.2rem;
        color: white;
      }
    }
  }
  .playlist_content {
    background-color: white;

    padding: 0.3rem 0.1rem 1rem 0.3rem;
    .list {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0;
      .serial {
        width: 00.5rem;
        color: rgb(146, 139, 139);
      }
      .title {
        width: 5.6rem;
        // .name {
        // }
        span {
          color: rgb(146, 139, 139);
          font-size: 00.2rem;
        }
      }
      .set {
        width: 00.5rem;
        color: rgb(146, 139, 139);
        font-size: 00.3rem;
      }
      .video {
        font-size: 00.3rem;
        position: absolute;
        right: 1rem;
        color: rgb(146, 139, 139);
      }
    }
  }
}
</style>