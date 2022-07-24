<template>
  <div class="nav">
    <div class="back" @click="router.go(-1)">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="right">
      <input
        type="text"
        v-model="searchKeyWord"
        :placeholder="placeholder"
        @keydown.enter="saveKeyWord"
        @click="clickInput"
      />
    </div>
  </div>
  <div class="history" v-show="isShowHistory && searchSongs.length == 0">
    <div class="historyLeft">历史</div>
    <Swiper class="historyCenter" :slidesPerView="3" :spaceBetween="10">
      <SwiperSlide
        class="keyWordItem"
        v-for="(item, i) in keyWordList"
        :key="i"
        @click="chooseKeyWord"
      >
        {{ item }}
      </SwiperSlide>
    </Swiper>
    <div class="historyRight iconfont icon-shanchu" @click="clearHistory"></div>
  </div>
  <div class="searchList" v-show="searchSongs.length > 0">
    <div class="list" v-for="(item, i) in searchSongs" :key="i">
      <div class="title" @click="play(i)">
        <div class="name">{{ item.name }}</div>
        <span v-for="(item2,j) in item.ar">{{ item2.name }} </span>
      </div>
      <i class="set iconfont icon-sangedian"></i>
      <i class="video iconfont icon-bofang"></i>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import { ref, onBeforeMount, reactive } from "vue";
import { searchMusic } from "../../api/index";
import {useStore} from 'vuex'
export default {
  setup() {
    const router = useRouter();
    const store = useStore()
    let keyWordList = ref([]);
    let placeholder = ref("石伟");
    let searchKeyWord = ref("");
    let isShowHistory = ref(false);
    let searchSongs = ref([]);
    let clickInput = () => {
      searchSongs.value = [];
    };
    let saveKeyWord = async () => {
      isShowHistory.value = true;
      if (searchKeyWord.value.length == 0) {
        searchKeyWord.value = placeholder.value;
      }
      keyWordList.value.unshift(searchKeyWord.value);
      if (keyWordList.value.length > 10) {
        keyWordList.value.pop();
      }
      keyWordList.value = [...new Set(keyWordList.value)];
      localStorage.setItem("keyWordList", JSON.stringify(keyWordList.value));
      let res = await searchMusic(searchKeyWord.value);
      console.log('resss',res.data.result.songs);
      searchSongs.value = res.data.result.songs;
      // console.log(searchSongs.value);
    };
    let clearHistory = () => {
      localStorage.clear();
      keyWordList.value = [];
      isShowHistory.value = false;
    };
    let chooseKeyWord = async (event) => {
      searchKeyWord.value = event.target.innerText;
      let res = await searchMusic(searchKeyWord.value);
      searchSongs.value = res.data.result.songs;
      // console.log(searchSongs.value);
    };
    let play = (i) => {
      store.setUpdateMusic(searchSongs.value[i])
      console.log(searchSongs.value[i]);
    };
    onBeforeMount(() => {
      keyWordList.value = JSON.parse(localStorage.getItem("keyWordList")) || [];
      if (keyWordList.value.length > 0) {
        isShowHistory.value = true;
      }
      searchSongs.value = [];
    });
    return {
      router,
      saveKeyWord,
      clickInput,
      keyWordList,
      searchKeyWord,
      placeholder,
      isShowHistory,
      searchSongs,
      clearHistory,
      chooseKeyWord,
      play,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="less" scoped>
.nav {
  color: black;
  padding: 0.2rem;
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  .back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1.4rem;
    i {
      font-size: 00.5rem;
    }
  }
  .right {
    width: 10rem;
    input {
      width: 100%;
      border: 0;
      outline: none;
      height: 00.6rem;
      border-bottom: 0.03rem solid #666;
      font-size: 00.3rem;
    }
  }
}
.history {
  width: 7.5rem;
  padding: 00.2rem;
  display: flex;
  justify-content: space-between;
  .historyLeft {
    width: 10%;
    font-weight: bolder;
  }
  .historyCenter {
    width: 74%;
    .keyWordItem {
      background-color: #eee;
      border-radius: 0.4rem;
      color: #666;
      text-align: center;
      height: 0.5rem;
      line-height: 0.5rem;
    }
  }
  .historyRight {
    // width: 10%;
    color: #666;
    font-size: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.searchList {
  background-color: white;
  width: 7.5rem;

  padding: 0rem 0.1rem 1rem 0.3rem;
  overflow-x: auto;
  height: calc(100vh - 1rem);
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
</style>