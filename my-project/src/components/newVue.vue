<template>
  <div>
    <button @click="count++">模板内容点击了{{ count }}</button>
    <span>通过import注册局部组件</span><br />
    <span>{{ users[1].name }}</span>
  </div>
</template>
 
<script>
export default {
  name: "newVue",
  data: function () {
    return {
      count: 0,
    };
  },
  name: "users",
  //props:['users'],
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
 
<style scoped>
</style>