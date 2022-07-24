<template>
  <div class="userInfo">
    <img
      src="http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg"
      alt=""
    />
    <div class="userName">
      {{ store.state.user.userDetail.profile.nickname
      }}<i class="iconfont icon-VIP"></i>
    </div>
    <div class="user">
      <p class="focus">0 关注</p>
      |
      <p class="fans">0 粉丝</p>
      |
      <p class="level">Lv.{{store.state.user.userDetail.level}}</p>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    // console.log("store", store.state.user.userDetail);
    return { store };
  },
};
</script>
<style lang="less" scoped>
.userInfo {
  width: 7.1rem;
  margin: 1rem auto;
  margin-bottom: 00.2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.2rem;
  img {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: -0.7rem;
  }
  .userName {
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.1rem;
  }
  .user {
    color: #666;
    display: flex;
    width: 3rem;
    justify-content: space-between;
    .focus {
    }
    .fans {
    }
    .level {
    }
  }
}
</style>