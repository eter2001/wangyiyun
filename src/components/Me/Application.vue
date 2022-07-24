<template>
  <div class="application">
    <div class="funs">
      <div class="fun" v-for="(item,i) in funData" :key="i">
        <i :class="['iconfont',item.className]"></i>
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="addFuns">+ 音乐应用</div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    let funData = reactive([
      { className: "icon-bofang2", title: "最近播放" },
      { className: "icon-yinleyule", title: "本地/下载" },
      { className: "icon-ypurchased", title: "已购" },
      { className: "icon-shoucang", title: "收藏和赞" }
    ]);
    return {funData}
  },
};
</script>
<style lang="less" scoped>
.application {
  width: 7.1rem;
  margin: 0rem auto;
  margin-bottom: 00.2rem;
  padding: 0.5rem 0.2rem 0rem 0.2rem;
  background-color: white;
  border-radius: 0.2rem;

  .funs {
    display: flex;
    justify-content: space-between;
    .fun {
        width: 1.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      i {
        color: red;
        font-size: 0.7rem;
      }
      p {
        margin-top: 0.1rem;
        font-size: 0.25rem;
        // text-align: center;
      }
    }
  }
  .addFuns {
    padding: 0.3rem;
    text-align: center;
    color: #666;
  }
}
</style>