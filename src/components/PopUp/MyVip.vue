<template>
  <div class="myVip">
    <div class="topR">
      <div class="vipLevel">
        <div class="level">{{userLevel.levelName}}</div>
        <div class="progress"><div class="progress2"></div></div>
        <div class="level2">{{userLevel.nextLevel}}</div>
      </div>
      <div class="vipCenter">会员中心</div>
    </div>
    <div class="centerR">有六点成长值待领取 ></div>
    <div class="bottomR">台偶OS上线！谁的DNA动了？</div>
  </div>
</template>
<script>
import { growthPoint,getGrowthPoint } from "../../api/index.js";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const levelVal = reactive({
      1: 450,
      2: 1350,
      3: 3150,
      4: 4950,
      5: 9450,
      6: 21600,
    });
    let userLevel = reactive({ levelName: "黑胶· ", nextLevel: "v " });
    let gp = async () => {
      let res = await growthPoint();
      let level = String(res.data.data.userLevel.level);
      let l2 = res.data.data.userLevel.growthPoint / levelVal[level];
      $(".progress2").css({ width: l2 * 100 + "%" });
      userLevel.levelName = res.data.data.userLevel.levelName;
      userLevel.nextLevel = "V" + (Number(level) + 1);

    };
    onMounted(() => {
      gp();//获取VIP部分信息
    });
    return { userLevel };
  },
};
</script>
<style lang="less" scoped>
.myVip {
  border-radius: 0.2rem;
  background-color: #353535;
  padding: 0.1rem 0.2rem;
  margin-top: 0.3rem;
  .topR {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .vipLevel {
      width: 3rem;
      display: flex;
      height: 0.7rem;
      justify-content: space-between;
      align-items: center;

      .level {
        color: #ebebeb;
        font-weight: bold;
      }
      .progress {
        height: 0.15rem;
        width: 1.2rem;
        background-color: #000;
        border-radius: 1rem;
        .progress2 {
          height: 100%;
          width: 0%;
          background-color: white;
          border-radius: 1rem;
        }
      }
      .level2 {
        color: #bfaba7;
        font-size: 0.15rem;
      }
    }
    .vipCenter {
      height: 0.5rem;
      border: 0.02rem solid #bfaba7;
      border-radius: 1rem;
      color: #bfaba7;
      font-size: 0.2rem;
      padding: 0.1rem;
      line-height: 0.2rem;
      margin-right: 0.1rem;
    }
  }
  .centerR {
    color: #bfaba7;
    font-size: 0.2rem;
    padding-bottom: 0.3rem;
  }
  .bottomR {
    color: #bfaba7;
    font-size: 0.2rem;
    padding: 0.3rem 0;
    border-top: 0.01rem solid;
  }
}
</style>