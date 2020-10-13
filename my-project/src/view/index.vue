<template>
  <div id="app">
    <p class="stylus_test">这是stylus测试文字</p>
    <banner></banner>
    <!-- <router-link to="/banner">banner</router-link> -->
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <!-- <router-view></router-view> -->
    <vfooter></vfooter>
  </div>
</template>

<script>
import newVue from "@/components/newVue";
import banner from "@/components/banner/Banner";
import vfooter from "@/components/Footer";

export default {
  components: {
    newVue,
    banner,
    vfooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-size: 16px;
  color: #000;
  text-align: center;
}
</style>
