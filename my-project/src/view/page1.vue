<template>
  <div id="app">
    <h1>page1</h1>
    <p>{{ msg }}</p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
    </el-row>
    <banner></banner>
    <vfooter></vfooter>
  </div>
</template>
<script>
// import banner from ''
import banner from "@/components/banner/Banner";
import vfooter from "@/components/Footer";
import Button from "element-ui"

export default {
  components: {
    banner,
    vfooter,
  },
  data() {
    return {
      msg: "我是page1组件",
    };
  },
};
</script>
<style scoped>

</style>