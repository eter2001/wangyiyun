<template>
  <div class="msg g">
    <i :class="['iconfont', data.className,{'color':data.isColor}]">
      <p>{{ data.title }}</p>
    </i>
    <div class="r">
      <p><slot name="r"></slot></p>
      <i class="iconfont " :class="{'icon-youjiantou':data.showIconFont == false?false:true}"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data:Object
  },
  setup() {},
};
</script>
<style lang="less" scoped>
.g {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
}
.g:active {
  background-color: #f2f3f5;
}
.msg {
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
  .color{
    color: #888;
    font-size: 0.28rem;
    p{
      font-size: 0.25rem;
      
    }
  }
  .r {
    font-size: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //   width: 3rem;
    p {
      font-size: 0.2rem;
      color: #666;
    }
    i {
      font-size: 0.4rem;
      color: #666;
      width: 0.3rem;
    }
  }
}
</style>