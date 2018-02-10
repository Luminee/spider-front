<template>
  <div id="repo">
    <div class="repo left">
      <h4>服务模块</h4>
      <ul>
        <li v-for="service in serviceList">
          +  {{service.code}}
          <div v-for="serviceFunc in service.api_list" class="sublink">
            <router-link :to="{name:'serviceFuncDetial', params: {id:serviceFunc.id}}">{{serviceFunc.function_name}}</router-link>
          
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
  name: "service",

  data() {
    return {
      service:null,
      serviceList: [],
      serviceFunc: null,
    
    };
  },
  // components: {
  //   moduleDetial
  // },
  mounted: function() {
    this.$http({
      method: "GET",
      url: global.apiUrl+"api/service/get/serviceList",
      emulateJSON: true
    }).then(
      function(response) {
        //es5写法
        this.serviceList = response.data.data.service_list;
     
      
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


