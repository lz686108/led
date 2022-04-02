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
    <!-- 日期控件部分 -->
    <div style="margin-left: 0.5vw; margin-top: 1vh">
      <div class="header">
        <el-date-picker
          class="te"
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
      <!-- <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div> -->
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "firstTable",
  data() {
    return {
      token: "",
      card: "",
      chn: "",
      value1: "",
    };
  },
  created() {
    this.token = this.getQueryString("token");
    //this.select(this.token);
    // 查询新钢铁用户权限
    this.card = this.getQueryString("card");
    if (this.card == null) {
      window.location.href =
        "http://10.6.1.129/login/index.html?url=" + window.location.href;
    }
    sessionStorage.setItem("card", this.card);
    this.card = sessionStorage.getItem("card");
    this.$axios("http://10.6.1.198:8888/shiro/web/authc/address", {
      params: {
        user: this.card,
      },
    }).then((res) => {
      this.chn = res.data.obj.chn; //中文名
      this.photoURL = res.data.obj.photoURL; //头像图片路径

      console.log(this.photoURL);
      console.log(this.chn);
      sessionStorage.setItem("chn", this.chn);
      sessionStorage.setItem("photoURL", this.photoURL);
    });
    // 获取用户名和相片
  },
  methods: {
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },
    // 获取用户名和相片
    // select(token) {
    //   this.$axios(
    //     "http://so.newsteel.ai:8888/shiro/web/authc/isPermitted?permission=prod:sop:view&token=" +
    //       token
    //   ).then((res) => {});
    // },
    // 查询新钢铁用户权限
  },
};
</script>
<style scoped>
/* .center {
  display: flex;
  justify-content: flex-start;
}
 */
</style>
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
.el-range-editor--small .el-range-input{
  border: solid 1px red;
}
.el-date-editor el-range-editor el-input__inner te el-date-editor--datetimerange el-range-editor--small{
  border: red 1px solid;
}
</style>
