<template>
  <div id="app">
    <banner>
      插槽测试文字显示
    </banner>
    <p class="stylus_test">这是stylus测试文字</p>
    <mt-button type="primary">primary</mt-button>
    <!-- <router-link to="/banner">banner</router-link> -->
    <div class="target">
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
    </div>
  
    <!-- <router-view></router-view> -->
    <vfooter class="footer_style"></vfooter>
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
  mounted(){

  },
};
</script>

<style>
  #app {
    font-size: 16px;
    color: #000;
    text-align: center;
  }
  .stylus_test{
    font-size: 14px;
    color: #000;
    text-align: center;
  }
  .target{
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
  }
  .footer_style{
    margin: 10px auto 0;
  }
</style>
