<template>
  <div class="myPlayList">
    <div class="caption">
      <div class="create playList_active">创建歌单</div>
      <div class="collection">收藏歌单</div>
    </div>
    <div class="create">
      <div class="header">
        <p>创建歌单(3个)</p>
        <i class="iconfont icon-jiahao"></i
        ><i class="iconfont icon-sangedian"></i>
      </div>
      <div class="content">
        <div class="c" v-for="(item,i) in myPlaylist" :key="i" @click="toListView(item.id)">
          <img
            :src="item.coverImgUrl"
            alt=""
          />
          <div class="title">
            <p>{{item.name}}</p>
            <p>222首</p>
          </div>
          <i class="iconfont icon-sangedian"></i>
        </div>
      </div>
    </div>
    <div class="collection">
      <div class="header">
        <p>收藏歌单(0个)</p>
        <i class="iconfont icon-jiahao"></i
        ><i class="iconfont icon-sangedian"></i>
      </div>
      <div class="content">
        <p class="null">暂无歌单</p>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
  props:{
    myPlaylist:Array
  },
  setup(props) {
    console.log('props.myPlaylist',props.myPlaylist)
    let router = useRouter()
    let toListView =(id)=>{
        router.push({ path: "/listview", query: { id: id } })
    }
    return {toListView}
  },
}
</script>
<style lang="less" scoped>
.myPlayList {
  width: 7.1rem;
  margin: 1.1rem auto;
  padding: 0.25rem;
  background-color: white;
  border-radius: 0.2rem;
  position: relative;
  .caption {
    position: absolute;
    top: -0.7rem;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    .create {

    }
    .collection {
    }
    .playList_active{
        border-bottom: 0.1rem solid orangered;
    }
  }
  .collection,.create {
      margin-bottom: 0.25rem;
    .header {
      font-size: 0.25rem;
      color: #666;
      display: flex;
      justify-content: space-between;
      margin-bottom: 00.25rem;
      p {
        width: 80%;
      }
    }
    .content {
      color: #666;
      font-size: 0.25rem;
      .c {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.2rem;
        img {
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 0.2rem;
        }
        .title {
          display: flex;
          width: 70%;
          height: 100%;
          flex-direction: column;
          p {
          }
        }
        i {
        }
      }
      .null{
          text-align: center;
      }
    }
  }
}
</style>