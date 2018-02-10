<template>
  <div id="repo">
    <div class="repo left">
      <h4>仓储模块</h4>
      <ul>
        <li v-for="repo in repoList">
          +  {{repo.code}}
          <div v-for="repoFunc in repo.functions_list" class="sublink">
            <router-link :to="{name:'repoFuncDetial', params: {id:repoFunc.id}}">{{repoFunc.function_name}}</router-link>
          
          </div>
        </li>
      </ul>
    </div>
    <div id="repo-detial" class="right">
      <router-view>
      </router-view>
    </div>

  </div>
</template>


<script>
// import moduleDetial from "../components/common/moduleDetial.vue";
export default {
  name: "repo",

  data() {
    return {
      repo:null,
      repoList: [],
      repoFunc: null,
    
    };
  },
  // components: {
  //   moduleDetial
  // },
  mounted: function() {
    this.$http({
      method: "GET",
      url: global.apiUrl+"api/repo/get/repositoryList",
      emulateJSON: true
    }).then(
      function(response) {
        //es5写法
        this.repoList = response.data.data.repository_list;
     
      
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


