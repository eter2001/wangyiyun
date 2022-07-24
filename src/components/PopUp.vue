<template>
  <div class="popUp">
    <div class="user">
      <img
        class="userImg"
        :src="
          userDetail.userImg ||
          'http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg'
        "
        alt=""
      />
      <div class="userName">{{ userDetail.name || "未登录" }}</div>
      <div class="r iconfont icon-saoyisao-copy"></div>
    </div>
    <MyVip></MyVip>
    <MyCenter></MyCenter>
    <MusicService></MusicService>
    <Other></Other>
    <OtherInfo></OtherInfo>
    <div class="exit">退出登录/关闭</div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import MyVip from "../components/PopUp/MyVip.vue";
import MyCenter from "../components/PopUp/MyCenter.vue";
import MusicService from "../components/PopUp/MusicService.vue";
import Other from "../components/PopUp/Other.vue";
import OtherInfo from "../components/PopUp/OtherInfo.vue";
export default {
  setup() {
    let store = useStore();
    let userDetail = reactive({ userImg: null }, { name: null });
    try {
      userDetail.userImg = store.state.user.userDetail.profile.avatarUrl;
      userDetail.name = store.state.user.userDetail.profile.nickname;
    } catch {}
    // userDetail.value =
    return { userDetail };
  },
  components: { MyVip, MyCenter, MusicService, Other, OtherInfo },
};
</script>
<style lang="less" scoped>
.popUp {
  padding: 0.1rem;
  width: 100%;
  background-color: #f5f5f5;
  .user {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .userImg {
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 50%;
    }
    .userName {
      font-size: 00.3rem;
      width: 4.3rem;
      line-height: 0.6rem;
    }
    .r {
      font-size: 00.4rem;
    }
  }
  .exit {
    width: 100%;
    text-align: center;
    padding: 0.3rem;
    margin-top: 0.3rem;
    border-radius: 0.2rem;
    background-color: white;
    color: red;
  }
}
</style>