<template>
  <div class="myLike" @click="toListView(myPlaylist[0].id)">
    <div class="l">
      <div class="img">
        <img
          :src="myPlaylist[0].coverImgUrl"
          alt=""
        />
        <div class="mask">
          <i class="iconfont icon-shixin"></i>
        </div>
      </div>
      <div class="title">
        <p class="p1">我喜欢的音乐</p>
        <p class="p2">6首</p>
      </div>
    </div>
    <div class="r">
      <i class="iconfont icon-xindong"></i>
      <p>心动模式</p>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  props:{
    myPlaylist:Array
  },
  setup(props) {
    let router = useRouter();
    let toListView = (id) => {
      router.push({ path: "/listview", query: { id: id } });
    };
      console.log('myPlaylist:0:',props.myPlaylist)
    return { toListView };
  },
};
</script>
<style lang="less" scoped>
.myLike {
  width: 7.1rem;
  margin: 0rem auto;
  margin-bottom: 00.2rem;
  padding: 0.25rem;
  background-color: white;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l {
    display: flex;
    .img {
      position: relative;
      img {
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 0.2rem;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 0.2rem;
        /*最后一个参数是半透明度，可以透过调整0-1的数值，调整到满意的透明度*/
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 00.5rem;
          color: white;
          opacity: 0.8;
        }
      }
    }
    .title {
      margin-left: 0.2rem;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      width: 1.9rem;
      .p1 {
      }
      .p2 {
      }
    }
  }
  .r {
    border: 0.02rem solid #eee;
    border-radius: 1rem;
    padding: 0.05rem 0.1rem;
    display: flex;
    align-items: center;
    i {
      font-size: 0.4rem;
    }
    p {
      font-size: 0.2rem;
    }
  }
}
</style>