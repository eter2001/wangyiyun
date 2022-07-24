<template>
  <div class="songInfo">
    <van-action-sheet
      v-model:show="show"
      duration="0.2"
      @click-overlay="notShow"
      @close="notShow"
      :style="style"
    >
      <div class="top">
        <img :src="item.al.picUrl" alt="" />
        <div class="title">
          <div class="caption">歌曲：{{ item.name }}</div>
          <div class="creator">
            <span v-for="(item2, j) in item.ar" :key="j">{{ item2.name }}</span>
          </div>
        </div>
      </div>
      <div class="content">
        <ListChild
          v-for="(item, i) in icons"
          :key="i"
          :data="{
            className: item.className,
            title: item.title,
            showIconFont: false,
            isColor: true,
          }"
        ></ListChild>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { getMusicComment } from "../api/index.js";
import ListChild from "./PopUp/ListChild.vue";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
export default {
  props: {
    show: Boolean,
    item: Object,
  },
  components: { ListChild },
  setup(props, { emit }) {
    let store = useStore();
    let musicCommentCount = ref(0);
    let creator=ref('')
    let icons = reactive([
      { className: "icon-bofangxiayishou", title: "下一首播放" },
      { className: "icon-hezi101", title: "收藏到歌单" },
      { className: "icon-xiazai", title: "下载" },
      { className: "icon-xiaoxi", title: `评论` },
      { className: "icon-fenxiang", title: "分享" },
      { className: "icon-geshou", title: "歌手" },
      { className: "icon-chuangzuozheguanli", title: "创作者" },
      { className: "icon-zhuanji", title: "专辑" },
      { className: "icon-sylogo2", title: "云贝推歌" },
      { className: "icon-bofang", title: "相关视频" },
      { className: "icon-puzi", title: "更多乐谱：" },
      { className: "icon-cailing", title: "设为铃声" },
      { className: "icon-gouwuche", title: "单曲购买" },
      { className: "icon-lipinka", title: "音乐礼品卡" },
      { className: "icon-shanchu", title: "删除" },
      { className: "icon-jinzhi", title: "屏蔽歌曲或歌手" },
    ]);
    let style = reactive({
      "border-radius":
        "var(--van-popup-round-border-radius) var(--van-popup-round-border-radius) 0 0 ",
      width: "7.5rem",
      height: "8.5rem",
      padding: "0.3rem",
    });
    let notShow = () => {
      console.log("close");
      emit("songInfoShow", false);
    };
    //创作者名字
    let song = () => {
        for (var i of props.item.ar) {
          creator.value += i.name;
        }
        icons[5].title = `歌手：${creator.value}`;
      };
    let  getComments = async ()=>{
        let res = await getMusicComment(props.item.id);
        musicCommentCount.value = res.data.comments.length;
        icons[3].title = `评论(${musicCommentCount.value})`;
    }
    onBeforeMount( () => {
    //  getComments()
    // song()
      
    });

    return { notShow, style, store, icons };
  },
};
</script>
<style lang="less" scoped>
.songInfo {
  .top {
    display: flex;
    border-bottom: 0.03rem solid rgb(253, 253, 253);
    padding-bottom: 0.3rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 0.1rem;
      margin-right: 0.2rem;
    }
    .title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .caption {
        font-size: 00.3rem;
      }
      .creator {
        font-size: 00.25rem;
        color: #888;
      }
    }
  }
  .content {
    height: 6.5rem;
    overflow-y: auto;
  }
  .content::-webkit-scrollbar {
    display: none;
  }
}
</style>