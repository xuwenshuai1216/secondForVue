<template>
  <div id="app">
    <h1>page2</h1>
    <p>{{ msg }}</p>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>
<script>
import { Radio, RadioGroup, RadioButton } from "element-ui";
export default {
  data() {
    return {
      msg: "我是page2组件",
      radio: 1,
    };
  },
};
</script>