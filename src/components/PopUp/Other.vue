<template>
  <div class="other">
    <p class="title">音乐服务</p>

    <ListChild :data="{ className: 'icon-shezhi', title: '设置' }"> </ListChild>
    <ListChild :data="{ className: 'icon-dark', title: '夜间模式' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-dingshiguanbi', title: '定时关闭' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-gexingzhuangban', title: '个性装扮' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-cailing', title: '边听边存' }">
      <template #r> 未开启 </template>
    </ListChild>
    <ListChild :data="{ className: 'icon-hezi101', title: '在线听歌免流量' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-jinzhi', title: '音乐黑名单' }">
    </ListChild>
    <ListChild :data="{ className: 'icon-dunpai-', title: '青少年模式' }"
      ><template #r> 未开启 </template>
    </ListChild>
    <ListChild :data="{ className: 'icon-naozhong', title: '音乐闹钟' }">
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
.other {
  margin-top: 0.3rem;
  border-radius: 0.2rem;
  background-color: white;

  .title {
    padding: 0.3rem 0.2rem;
  }
}
</style>