<template>

  
        

</template>


<script>
export default {
  name: "repoDetial",

  data() {
    return {
      title: "模块细节",
      msg: "模块基本信息",
      msg1: "关联关系",
      msg2: "被引用的方法列表",
      modelObj: [],
      relation: null,
      repo: null
    };
  },
  created() {
    this.$http
        .post(
          global.apiUrl+"api/repo/get/repositoryInfo",
          { repository_id:this.$route.params.id},
          { emulateJSON: true }
        )
        .then(
          response => {
              console.log(response.data.data)
            //this.modelObj = response.data.data.model;
          },
          error => {
            console.log(error);
          }
        );
  },
  watch: {
    $route: function(route) {
      this.$http
        .post(
          global.apiUrl+"api/repo/get/repositoryInfo",
          { repository_id: this.$route.params.id },
          { emulateJSON: true }
        )
        .then(
          response => {
              console.log(response.data.data)
            //this.modelObj = response.data.data.model;
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  mounted: function() {}
};
</script>