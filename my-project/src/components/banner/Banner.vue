<template>
  <div>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <div>使用slot分发内容</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      msg: "",
    };
  },
};
</script>
<style scoped>
</style>
    