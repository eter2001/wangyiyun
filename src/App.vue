<template>
  <!-- <div>此网站仅供学习，切勿他用</div> -->
  <van-notice-bar mode="closeable">此网站仅供学习，切勿他用</van-notice-bar>
  <router-view />
  <PlayController></PlayController>
</template>
<script>
import PlayController from "./components/PlayController.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import store from "./store/index";
export default {
  setup() {
    // let store = useStore();


    localStorage.setItem('cookie', JSON.stringify("MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/eapi/clientlog;;__csrf=72fc49dc59def81910199f4a14f3ca69; Max-Age=1296010; Expires=Fri, 17 Jun 2022 07:24:00 GMT; Path=/;;MUSIC_U=a8aad923dab87ebdbf027347c18e284f11b09b8614cc41ccad13276bff17c178519e07624a9f005329cf851e5032e2e8d4190447c4bd04afd480cbf637fa4c097ac7163e3071dcca7a561ba977ae766d; Max-Age=1296000; Expires=Fri, 17 Jun 2022 07:23:50 GMT; Path=/;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/neapi/feedback;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/weapi/feedback;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/api/feedback;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/api/clientlog;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/wapi/clientlog;;__remember_me=true; Max-Age=1296000; Expires=Fri, 17 Jun 2022 07:23:50 GMT; Path=/;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/weapi/feedback;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/eapi/feedback;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/api/feedback;;MUSIC_A_T=1539610303807; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/wapi/feedback;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/eapi/feedback;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/api/clientlog;;NMTID=00OCcPWHPMD-PEshUtAo4YFtyo0RXQAAAGBI0yWaw; Max-Age=315360000; Expires=Sun, 30 May 2032 07:23:50 GMT; Path=/;;MUSIC_SNS=; Max-Age=0; Expires=Thu, 02 Jun 2022 07:23:50 GMT; Path=/;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/wapi/feedback;;MUSIC_R_T=1539610567954; Max-Age=2147483647; Expires=Tue, 20 Jun 2090 10:37:57 GMT; Path=/neapi/feedback;"))
    onMounted(() => {
      let user = JSON.parse(localStorage.getItem("user")) || "";
      store.setUser2(user && user)
    });
  },
  components: {
    PlayController,
  },
  provide: { store },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}

div::-webkit-scrollbar {
  display: none
}

.icon {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
