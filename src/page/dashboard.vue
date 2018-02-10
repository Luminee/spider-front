<template>
  <div id="dashboard">
    <head-top>
    </head-top>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>


<script>
import headTop from "../components/header/header.vue";
export default {
  name: "dashboard",
  data() {
    return {
      news: null,
      moduleList: null,
      moduleU: null,
      model: null
    };
  },
  components: {
    headTop
  }
};
</script>



<style lang="scss">
@import "../assets/scss/common";
</style>


