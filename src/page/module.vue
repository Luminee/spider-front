<template>
  <div id="modules">
    <div class="moduleList left">
      <h4>模块名称</h4>
      <ul>
        <li v-for="moduleU in moduleList">
          + {{moduleU.code}}
          <div v-for="model in moduleU.model_list" class="sublink">
            <router-link :to="{name:'md', params: {id:model.id}}">{{model.code}}</router-link>
          
          </div>
        </li>
      </ul>

    </div>
    <div id="module-detial" class="right">
      <router-view></router-view>
    </div>

  </div>
</template>


<script>
import moduleDetial from "../components/common/moduleDetial.vue";
export default {
  name: "module",

  data() {
    return {
      news: null,
      moduleList: null,
      moduleU: null,
      model: null
    };
  },
  components: {
    moduleDetial
  },
  mounted: function() {
    this.$http({
      method: "GET",
      url: global.apiUrl+"/api/db/get/modelList",
      emulateJSON: true
    }).then(
      function(response) {
        //es5写法
        this.moduleList = response.data.data.module_list;
      },
      function(error) {
        //error
      }
    );
  }
};
</script>



<style lang="scss">
@import "../assets/scss/common";
</style>


