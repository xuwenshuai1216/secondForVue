<template>
  <div>
    <h1>page1</h1>
    <p>{{ msg }}</p>
    <banner></banner>
    <vfooter></vfooter>
  </div>
</template>
<script>
// import banner from ''
import banner from '@/components/banner/Banner'
import vfooter from '@/components/Footer'
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