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
    <!-- 第二行 -->
    <div
      style="
        margin-left: 0.3vw;
        display: flex;
        justify-content: flex-start;
        width: 99vw;
      "
    >
      <!-- 日期控件部分 -->
      <div
        style="
          display: flex;
          justify-content: flex-start;
          width: 25.3vw;
          height: 3.6vh;
          margin-top: 1vh;
          background-color: #1e3466;
        "
      >
        <!-- 最左侧的日历图片 -->
        <img
          src="../assets/b.png"
          style="height: 2vh; margin-top: 0.6vh; margin-left: 0.5vw"
        />
        <!-- 日期控件 -->
        <div style="margin-top: 0.3vh">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
        <!-- 按钮 -->
        <div
          style="
            width: 12.5vw;
            display: flex;
            justify-content: space-around;
            margin-top: 0.1vh;
          "
        >
          <div
            style="
              height: 3.3vh;
              width: 4vw;
              border-radius: 0.2vw;
              background-color: #0058ce;
              color: white;
              line-height: 3.5vh;
              text-align: center;
              margin-left: -0.1vw;
            "
          >
            前一天
          </div>
          <div
            style="
              height: 3.3vh;
              width: 4vw;
              border-radius: 0.2vw;
              background-color: #0058ce;
              color: white;
              line-height: 3.5vh;
              text-align: center;
            "
          >
            今天
          </div>
          <div
            style="
              height: 3.3vh;
              width: 4vw;
              border-radius: 0.2vw;
              background-color: #0058ce;
              color: white;
              line-height: 3.5vh;
              text-align: center; ;
            "
          >
            后一天
          </div>
        </div>
      </div>
      <!-- 热修冷修按钮 -->
      <div style="width: 8vw; margin-left: 1.5vw; margin-top: 1vh">
        <div
          style="
            height: 3.3vh;
            width: 5vw;
            border-radius: 0.2vw;
            background-color: #0058ce;
            color: white;
            line-height: 3.5vh;
            text-align: center;
            display: flex;
            justify-content: flex-start;
          "
        >
          <div style="width: 2.5vw; font-size: 0.8vw">热修</div>
          <div
            style="
              background-color: #1d3466;
              width: 2.5vw;
              border-radius: 0.2vw;
              font-size: 0.8vw;
            "
          >
            冷修
          </div>
        </div>
      </div>
      <!-- 班次 -->
      <div
        style="
          display: flex;
          justify-content: flex-start;
          height: 3.3vh;
          line-height: 3.3vh;
          margin-top: 1vh;
          width: 7vw;
        "
      >
        <span style="color: #bfe5f8">班次</span>
        <select
          style="
            height: 3.3vh;
            margin-left: 0.6vw;
            border-radius: 0.2vw;
            width: 4vw;
            background: #1d3466;
            border: none;
            color: white;
          "
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <!-- 班别 -->
      <div
        style="
          display: flex;
          justify-content: flex-start;
          height: 3.3vh;
          line-height: 3.3vh;
          margin-top: 1vh;
          width: 7vw;
          margin-left: 2vw;
        "
      >
        <span style="color: #bfe5f8">班别</span>
        <select
          style="
            height: 3.3vh;
            margin-left: 0.6vw;
            border-radius: 0.2vw;
            width: 4vw;
            background: #1d3466;
            border: none;
            color: white;
          "
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <!-- 包号输入按钮 -->
      <div
        style="
          display: flex;
          justify-content: flex-start;
          height: 3.3vh;
          line-height: 3.3vh;
          margin-top: 1vh;
          width: 8vw;
          margin-left: 2vw;
        "
      >
        <span style="color: #bfe5f8">班别</span>
        <input
          type="text"
          value="请输入"
          style="
            height: 3.3vh;
            margin-left: 0.6vw;
            border-radius: 0.2vw;
            width: 5vw;
            background: #1d3466;
            border: none;
            color: white;
          "
        />
      </div>
      <!-- 搜索按钮 -->
      <div
        style="
          height: 3.3vh;
          width: 4vw;
          border-radius: 0.2vw;
          background-color: #0058ce;
          color: white;
          line-height: 3.5vh;
          text-align: center;
          margin-top: 1vh;
        "
      >
        前一天
      </div>
    </div>
    <!-- 第二行 -->
    <!-- 表格部分 -->
    <div
      style="
        width: 99vw;
        height: 85vh;
        margin-top: 1vh;
        margin-left: 0.4vw;
        background-color: #2a354b;
      "
    >
      <!-- 表头部分 -->
      <table class="table" style="width: 98vw">
        <thead style="color: #f8faff; margin-top: 1vh">
          <tr>
            <th rowspan="2">序号</th>
            <th rowspan="2">日期</th>
            <th rowspan="2">班次</th>
            <th rowspan="2">班别</th>
            <th rowspan="2">包号</th>
            <th rowspan="2">包龄</th>
            <th rowspan="2">开始时间</th>
            <th rowspan="2">结束时间</th>
            <th colspan="4">次数</th>
            <th rowspan="2">透气砖长</th>
            <th colspan="3">温度</th>
            <th rowspan="2">下线时间</th>
          </tr>
          <tr>
            <th>样品名称</th>
            <th>元素</th>
            <th>标准</th>
            <th>负责人</th>
            <th>删除</th>
            <th>化验室</th>
            <th>样品名称</th>
          </tr>
        </thead>
        <tbody style="color: #bde5f7">
          <tr v-for="(item, index) in 50" :key="index">
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
          </tr>
        </tbody>
      </table>
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
      photoURL: "",
    };
  },
  created() {
    // 获取用户名和相片,需要写一个getQueryString(name)方法
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
    // 获取用户名和相片
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
//  datetimerange组件修改样式 
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
// 表格样式
<style scoped>
.table,
thead,
tbody tr {
  width: 100%;
  /* 表格自动布局 */
  display: table;
  table-layout: fixed;
}
/* 实现鼠标滑动表格的一整行变色 */
.table tbody tr:hover > td {
  background-color: #0061d1;
}
tr:hover {
  background-color: #0061d1;
}
/* 实现鼠标滑动表格的一整行变色 */
.table tbody {
  /* 表格滚轮 */
  height: 50vh;
  display: block;
  overflow-y: scroll;
  /* 表格滚轮 */
  text-align: center;
  background-color: #2a354b;
  color: #465e72;
  width: 100.2%;
  scrollbar-width: none;
}
.table tbody tr {
  height: 4vh;
}
.table td {
  height: 4vh;
  background-color: #1e2d42;
}
.table thead tr th {
  background-color: #142752;
  border: solid 1px red;
  border-collapse: collapse;
}
.table {
  width: 84vw;
  height: 34vh;
  margin-left: 0.3vw;
}
.table thead {
  background-color: #142752;
  height: 5vh;
  width: 100%;
  color: #6f91a5;
  margin-left: 0.1vw;
}
/* 取消表格的滚轮 */
::-webkit-scrollbar-thumb {
  background-color: #000 !important;
  border-radius: 3vw;
}
/* 滑轮背景色 */
/* 滚动条的头尾的颜色 */
::-webkit-scrollbar-button {
  background-color: none;
}
/* 滚动条的头尾的颜色 */
/* 滚动条的背景色 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  background-color: none !important;
  display: none;
}
</style>
