<template>
      <div class="header">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
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
.el-range-input{
  color: red !important;
} */

</style>
<style>

/* datetimerange组件修改样式 */

.header .el-date-editor .el-range-input {
    color: #7a91bb !important;
}
</style>
