<template>
  <div class="me">
    <TopNav :current="0"></TopNav>
    <!-- <p>{{ store.state.user.userDetail }}</p> -->
    <!-- <UserInfo></UserInfo>
    <Application></Application>
    <MyLike :myPlaylist='myPlaylist.slice(0,1)'></MyLike>
    <MyPlayList :myPlaylist='myPlaylist.slice(1)'></MyPlayList> -->
    {{myPlaylist}}
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import { userDetail, getUserPlaylist, getPlaylistDetail } from "../api/index";
import { useStore } from "vuex";
import { onMounted, onBeforeMount, ref } from "vue";
import UserInfo from "../components/Me/UserInfo.vue";
import Application from "../components/Me/Application.vue";
import MyLike from "../components/Me/MyLike.vue";
import MyPlayList from "../components/Me/MyPlayList.vue";
export default {
  setup() {
    let store = useStore();
    let myPlaylist = ref();
    let detail = async () => {
      let id = store.state.user.account.id;
      let res = await userDetail(id);
      store.setUser3(res.data);
      console.log('me:',res)
      // console.log(res.data);
    };
    let playlist = async () => {
      let res = await getUserPlaylist(store.state.user.account.id);
      res = res.data.playlist;
      return res;
      // res = await getPlaylistDetail(res.data.playlist[0].id)
      // console.log('getPlaylistDetail',res)
    };
    onBeforeMount(async () => {
      detail();
      myPlaylist.value = await playlist();
      console.log(myPlaylist.value)
    });

    return { store,myPlaylist };
  },
  components: {
    TopNav,
    UserInfo,
    Application,
    MyLike,
    MyPlayList,
  },
};
</script>
<style lang="less" scoped>
.me {
  background-color: #f5f5f5;
  padding-bottom: 0.25rem;
}
</style>