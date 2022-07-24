<template>
  <div class="listview">
    <ListViewTop :playlist="state.playlist"></ListViewTop>
    <PlayList :playlist="state.playlist"></PlayList>
  </div>
</template>
<script>
import { onMounted, provide,onBeforeMount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPlaylistDetail } from "../api/index";
import ListViewTop from "../components/ListViewTop.vue";
import PlayList from "../components/PlayList.vue";
// import store from "../store/index.js";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      playlist: {
        creator: {},
        tracks: [],
      },
    });
    onMounted(async () => {
      let id = route.query.id;
      console.log('listview:id=',id)
      let res = await getPlaylistDetail(id);
      state.playlist = res.data.playlist;
      // console.log(res);
      // store.setPlayList(state.playlist.tracks);
      // store.setPlayPaused(false)
      console.log("jr", state.playlist);
    });
    return { route, router, state };
  },
  components: {
    ListViewTop,
    PlayList,
  },
  // inject:['store']
};
</script>