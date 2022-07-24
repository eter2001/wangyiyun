<template>
  <div class="nav">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="back" @click="router.go(-1)">
      <i class="iconfont icon-zuojiantou"></i>
      <span class="title">歌单</span>
    </div>
    <div class="right">
      <div class="search iconfont icon-sousuo"></div>
      <div class="set iconfont icon-sangedian"></div>
    </div>
  </div>
  <div class="content">
    <div class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="" srcset="" @click="showPop" />
      <div class="count iconfont icon-24gl-play">
        {{ changeVal(playlist.playCount) }}
      </div>
    </div>
    <div class="contentRight">
      <h3>{{ playlist.name }}</h3>
      <div class="writer">
        <img :src="playlist.creator.avatarUrl" alt="" class="header" />
        <span>{{ playlist.creator.nickname }}</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <div class="description" @click="showPop">{{ playlist.description }}</div>
      <i class="r_more iconfont icon-youjiantou"></i>
    </div>
  </div>
  <div class="iconList">
    <!-- <div v-for="(item, i) in iconListData" :key="i">
      <p class="iconfont" :class="item.iconClass"></p>
      <span>{{ item.title }}</span>
    </div> -->
    <div>
      <p class="iconfont icon-xiaoxi"></p>
      <span>{{ props.playlist.commentCount || 0 }}</span>
    </div>
    <div>
      <p class="iconfont icon-fenxiang"></p>
      <span>{{ props.playlist.shareCount || 0 }}</span>
    </div>
    <div>
      <p class="iconfont icon-iconfontzhizuobiaozhun023146"></p>
      <span>下载</span>
    </div>
    <div>
      <p class="iconfont icon-duoxuan"></p>
      <span>多选 </span>
    </div>
  </div>
  <van-popup v-model:show="show">
    <div class="pContent">
      <img class="img1" :src="playlist.coverImgUrl" alt="" />
      <div class="content" @click="closed">
        <i class="iconfont icon-cuowuguanbiquxiao"></i>
        <img class="img2" :src="playlist.coverImgUrl" alt="" />
        <div class="title">{{ playlist.name }}</div>
        <div class="bottomContent">
          <div class="type">
            标签：
            <div v-for="(item, i) in playlist.tags">{{ item }}</div>
          </div>
          <div class="character">
            <p v-show="playlist.description ? false : true">暂无内容</p>
            <p v-for="(item, i) in playlist.description.split('\n')" :key="i">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div class="bButton" @click="saveImg">保存封面</div>
    </div>
  </van-popup>
</template>
<script>
import {
  toRefs,
  defineProps,
  reactive,
  ref,
  onMounted,
  onBeforeMount,
} from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  props: {
    playlist: Object,
  },
  setup(props) {
    const router = useRouter();
    console.log("cccccccc", props.playlist);
    let show = ref(false);
    //打开
    let showPop = () => {
      show.value = true;
    };
    //关闭
    let closed = () => {
      show.value = false;
    };
    let saveImg = () => {
      Toast("save img");
    };
    function changeVal(v) {
      let res = "";
      if (v > 100000000) {
        res = Math.floor(v / 100000000) + "亿";
      } else if (v > 10000) {
        res = Math.floor(v / 10000) + "万";
      }
      return res;
    }

    return { changeVal, showPop, saveImg, closed, show, router, props };
  },
};
</script>
<style lang="less" scoped>
.nav {
  color: white;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 7.5rem;
    filter: blur(140px);
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1.4rem;
    i {
      font-size: 00.5rem;
    }
    .title {
      font-size: 0.3rem;
      font-weight: 600;
    }
  }
  .right {
    width: 1.6rem;
    // height: 0.8rem;
    display: flex;
    justify-content: space-between;
    .search {
      font-size: 0.45rem;
    }
    .set {
      font-size: 0.45rem;
    }
  }
}
.content {
  padding: 0.3rem;
  width: 7.5rem;
  //   height: 5rem;
  //   background-color: red;
  display: flex;
  justify-content: space-between;
  .contentLeft {
    width: 2.75rem;
    height: 2.75rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.1rem;
    }
    .count {
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.2rem;
      text-align: center;
    }
  }
  .contentRight {
    width: 3.75rem;
    height: 2.75rem;
    position: relative;
    h3 {
      font-size: 00.3rem;
      color: white;
    }
    .writer {
      display: flex;
      align-items: center;
      padding: 00.4rem 0;
      img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
      }
      span {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.2rem;
        margin-left: 00.2rem;
      }

      i {
        //     position: absolute;
        //     bottom: 0.15rem;
        //     right: 0.05rem;
        font-size: 00.3rem;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .description {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.2rem;
      width: 3.5rem;
      text-overflow: ellipsis;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .r_more {
      position: absolute;
      bottom: 0.15rem;
      right: 0.05rem;
      color: rgba(255, 255, 255, 0.5);
      font-size: 00.3rem;
    }
  }
}
.iconList {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  div {
    width: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-wrap: wrap;
    flex-direction: column;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.4rem;
  }
  span {
    margin-top: 0.05rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.2rem;
  }
}
.pContent {
  width: 101vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  .img1 {
    height: 100%;
    width: 100%;
    filter: blur(140px);
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    i {
      position: absolute;
      right: 0.3rem;
      font-size: 0.5rem;
    }
    .img2 {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.2rem;
      margin-top: 1.1rem;
    }
    .title {
      margin: 0.4rem;
    }
    .bottomContent {
      width: 100%;
      .type {
        display: flex;
        align-items: center;
        font-size: 0.25rem;

        div {
          padding: 00.1rem 0.2rem;
          background-color: rgba(255, 255, 255, 0.2);
          margin-right: 0.1rem;
          font-size: 0.2rem;
          border-radius: 1rem;
        }
      }
      .character {
        height: 4rem;
        overflow-y: auto;
        p {
          font-size: 0.22rem;
          margin-top: 0.02rem;
          letter-spacing: 0.02rem;
        }
      }
    }
  }
  .bButton {
    position: absolute;
    bottom: 00.5rem;
    border: 0.01rem solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    padding: 0.1rem 0.3rem;
    font-size: 0.25rem;
    line-height: 0.5rem;
  }
}
</style>