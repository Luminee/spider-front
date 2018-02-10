<template>

    <div>
        <h2>{{title}}&nbsp;{{funcName}}</h2>
        <span>
            <icon name="database"></icon>{{msg}}</span>
        <table class="gridtable">
            <tr>
                <th>service名称</th>
                <th>传入参数</th>
                <th>更新时间</th>
            </tr>

            <tr v-for="apiCall in api_call_list">
                <td >
                    {{apiCall.api.function_name}}
                </td>
                 <td >
                    {{apiCall.api.params}}
                </td>
                  <td >
                    {{apiCall.api.updated_at}}
                </td>

            </tr>
        </table>
    </div>

</template>


<script>
export default {
  name: "repoFuncDetial",

  data() {
    return {
      title: "仓储细节",
      msg: "调用此方法service方法的名字",
      msg1: "关联关系",
      msg2: "被引用的方法列表",
      modelObj: [],
      relation: null,
      repo: null,
      api_call_list: [],
      apiCall: null,
      funcName:null
    };
  },
  created() {
    this.$http
      .post(
        global.apiUrl+"api/repo/get/functionInfo",
        { function_id: this.$route.params.id },
        { emulateJSON: true }
      )
      .then(
        response => {
          this.api_call_list = response.data.data.function.api_call_list;
          this.funcName = response.data.data.function.function_name;
          
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
          global.apiUrl+"api/repo/get/functionInfo",
          { function_id: this.$route.params.id },
          { emulateJSON: true }
        )
        .then(
          response => {
            this.api_call_list = response.data.data.function.api_call_list;
            this.funcName = response.data.data.function.function_name
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