<template>
  <div class="musicService">
    <p class="title">音乐服务</p>

    <ListChild :data="{'className':'icon-tianmaohuopiaotongxing','title':'云村音乐'}"> </ListChild>
    <ListChild :data="{'className':'icon-gouwuche','title':'商城'}"> </ListChild>
    <ListChild :data="{'className':'icon-Heart-Beat','title':'Beat交易平台'}"> </ListChild>
    <ListChild :data="{'className':'icon-airudiantubiaohuizhi-zhuanqu_youxi','title':'游戏专区'}"> </ListChild>
    <ListChild :data="{'className':'icon-cailing','title':'口袋彩铃'}"> </ListChild>
  </div>
</template>
<script>
import ListChild from "../PopUp/ListChild.vue";
export default {
  setup() {},
  components: { ListChild },
};
</script>
<style lang="less" scoped>
.musicService {
  margin-top: 0.3rem;
  border-radius: 0.2rem;
  background-color: white;

  .title {
    padding: 0.3rem 0.2rem;
  }
  .g {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
  }
  .g:active {
    background-color: #f2f3f5;
  }
  .msg,
  .cloudBei,
  .framer {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    i {
      display: flex;
      //   width: 1.8rem;
      //   justify-content: space-between;
      font-size: 00.4rem;
      p {
        font-size: 00.3rem;
        padding-left: 0.2rem;
      }
    }
    .r {
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //   width: 3rem;
      p {
        font-size: 00.3rem;
      }
      i {
        font-size: 0.4rem;
        width: 0.3rem;
      }
    }
  }
  .msg {
    .r {
      p {
        background-color: red;
        border-radius: 50%;
        color: white;
        font-size: 0.2rem;
        padding: 0.03rem;
      }
    }
  }
  .cloudBei {
    .r {
      p {
        border: 0.01rem solid red;
        border-radius: 1rem;
        color: red;
        font-size: 0.2rem;
        padding: 0.05rem 0.2rem;
      }
    }
  }
}
</style>