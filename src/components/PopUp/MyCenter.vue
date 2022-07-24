<template>
  <div class="myCenter">
    <div class="msg g">
      <i class="iconfont icon-wodexiaoxi">
        <p>我的消息</p>
      </i>
      <div class="r">
        <p>28</p>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="cloudBei g">
      <i class="iconfont icon-sylogo2"><p>云贝中心</p> </i>
      <div class="r">
        <p>签到</p>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="framer g">
      <i class="iconfont icon-bulb"><p>创作者中心</p> </i>
      <div class="r">
        <p></p>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.myCenter {
  margin-top: 0.3rem;
  border-radius: 0.2rem;
  background-color: white;
  .g {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
  }
  .g:active{
      background-color: #f2f3f5;
  }
  .msg,
  .cloudBei,
  .framer {
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
    .r {
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //   width: 3rem;
      p {
        font-size: 00.3rem;
      }
      i {
        font-size: 0.4rem;
        width: 0.3rem;
      }
    }
  }
  .msg {
    .r {
      p {
        background-color: red;
        border-radius: 50%;
        color: white;
        font-size: 0.2rem;
        padding: 0.03rem;
      }
    }
  }
  .cloudBei {
    .r {
      p {
        border: 0.01rem solid red;
        border-radius: 1rem;
        color: red;
        font-size: 0.2rem;
        padding: 0.05rem 0.2rem;
      }
    }
  }
}
</style>