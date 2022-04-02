<template>
  <div
    style="background-color: #091022; width: 100vw; height: 100vh"
    class="center"
  >
    <!-- 表头 -->
    <div
      style="
        width: 99.6vw;
        background-color: #151e2d;
        height: 7vh;
        margin-left: 0.2vw;
      "
    >
      <img
        src="../assets/a.png"
        style="height: 5vh; margin-top: 1vh; margin-left: 2vw"
      />
      <!-- div强制不换行 -->
      <!-- display: inline; -->
      <div
        style="
          color: white;
          font-size: 1.2vw;
          width: 10vw;
          display: inline;
          border: solid 1px red;
          margin:1vh
        "
      >
        钢包管理系统
      </div>
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
}
</style>