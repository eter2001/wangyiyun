<template>
  <div class="otherInfo">
    <ListChild :data="{ className: 'icon-dingdan01', title: '我的订单' }"> </ListChild>
    <ListChild :data="{ className: 'icon-youhuiquan', title: '优惠券' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-kefu', title: '我的客服' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-fenxiang1', title: '分享网易云音乐' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-tianmaohuopiaotongxing', title: '个人信息收集与使用清单' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-gouwuche', title: '个人信息第三方共享清单' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-Heart-Beat', title: '个人信息与隐私保护' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-guanyu', title: '关于' }">
    </ListChild>
  </div>
</template>
<script>
import ListChild from "./ListChild.vue";
export default {
  setup() {},
  components: { ListChild },
};
</script>
<style lang="less" scoped>
.otherInfo {
  margin-top: 0.3rem;
  border-radius: 0.2rem;
  background-color: white;

  .title {
    padding: 0.3rem 0.2rem;
  }
}
</style>