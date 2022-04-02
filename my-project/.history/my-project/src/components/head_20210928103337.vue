<template>
  <div style="background-color: #091022; width: 100vw; height: 100vh">
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
      <div
        style="
          display: flex;
          justify-content: space-around;
          width: 9vw;
          margin-right: 1vw;
        "
      >
        <div>
          <img src="../assets/e.png" style="height: 2vh; margin-top: 1.9vh" />
        </div>
        <div>
          <div
            style="
              height: 5.7vh;
              line-height: 5.7vh;
              color: #a0bbd6;
              font-size: 1vw;
            "
          >
            {{ chn }}
          </div>
        </div>
        <div>
          <img
            :src="photoURL"
            style="
              width: 2vw;
              height: 4vh;
              border-radius: 25px;
              margin-top: 1vh;
            "
          />
        </div>
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
    return {
    };
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>
<style>
/* datetimerange组件修改样式 */
.el-range-editor.el-input__inner {
  width: 12vw;
  background-color: #1c3365;
  border: none;
}
.el-date-editor .el-range-input {
  background-color: #1c3365;
  /* color: red !important; */
}

.el-date-editor .el-range-separator {
  color: #5f5b65;
}
el-input__icon el-range__close-icon {
  display: none;
}
.el-icon-time:before {
  display: none;
}
.el-date-editor .el-range__icon {
  display: none;
}
.el-range-editor--small .el-range__close-icon,
.el-range-editor--small .el-range__icon {
  display: none;
  width: 0vw;
}
/* 开始和结束日期的input */
/* 只能通过调整这个input来达到消除右侧隐藏删除按钮所占用的空间 */
.el-range-editor--small .el-range-input {
  width: 4.5vw;
}
.el-range-editor.el-input__inner {
  width: 11vw;
}
/* 整个控件 */
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
  /* border: solid 1px red; */
  height: 2.8vh;
}
</style>
<style scoped>
  
</style>
