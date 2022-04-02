<template>
  <div
    style="background-color: #091022; width: 100vw; height: 100vh"
    class="center"
  >
    <!-- 表头 -->
    <div
      class="header"
      style="
        width: 99.6vw;
        background-color: #151e2d;
        height: 6vh;
        margin-left: 0.2vw;
        display: flex;
        justify-content: space-between;
      "
    >
      <!-- 表头左侧三个模块 -->
      <div style="display: flex; justify-content: flex-start">
        <!-- 图片标题 -->
        <div style="display: flex; justify-content: flex-start">
          <img
            src="../assets/a.png"
            style="height: 4vh; margin-top: 1vh; margin-left: 2vw"
          />
          <span
            style="
              height: 6vh;
              line-height: 6vh;
              margin-left: 1vw;
              color: white;
              font-size: 1vw;
            "
          >
            钢包管理系统
          </span>
        </div>
        <div
          style="
            border-bottom: solid 3px #dfb464;
            margin-left: 4vw;
            line-height: 5.7vh;
            color: #dfb464;
          "
        >
          采集明细
        </div>
      </div>
      <!-- 表头左侧三个模块 -->

      <!-- 表头右侧两个模块 -->
      <div>
        <div>
          <img
            src="../assets/a.png"
            style="height: 4vh; margin-top: 1vh; margin-left: 2vw"
          />
        </div>
        <div></div>
        <div></div>
      </div>
      <!-- 表头右侧两个模块 -->
    </div>
    <!-- 表头 -->
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "firstTable",
  data() {
    return {};
  },
};
</script>
<style scoped>
.center {
  display: flex;
  justify-content: flex-start;
}
</style>