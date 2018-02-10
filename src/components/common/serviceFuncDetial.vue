<template>

  <div>
    <h2>{{title}}&nbsp;{{funcName}}</h2>
    <span>
      <icon name="database"></icon>{{msg}}</span>
    <table class="gridtable">
      <tr>
        <th>范围</th>
        <th>名称</th>
        <th>传入参数</th>
        <th>返回值</th>
        <th>是否有事务</th>
        <th>更新时间</th>
      </tr>

      <tr>
        <td>
          {{api.modifier}}

        </td>
        <td>
          {{api.function_name}}
        </td>
        <td>
          {{api.params}}
        </td>
        <td>
          {{api.return}}
        </td>
        <td>
          {{api.has_transaction}}
        </td>
        <td>
          {{api.updated_at}}
        </td>

      </tr>
    </table>
    <span>
      <icon name="database"></icon>{{msg1}}</span>
    <table class="gridtable">
      <tr>
        <th>类名</th>
        <th>名称</th>
        <th>注入仓储</th>
        <th>注入字段</th>
        <th>更新时间</th>
      </tr>

      <tr>
        <td>
          {{service_list.class_name}}
        </td>
        <td>
          {{service_list.code}}
        </td>
        <td>
          {{service_list.ioc_repos}}
        </td>
        <td>
          {{service_list.ioc_variables}}
        </td>
        <td>
          {{service_list.updated_at}}
        </td>

      </tr>
    </table>
    <span>
      <icon name="database"></icon>{{msg2}}</span>
    <table class="gridtable">
      <tr>
        <th>名称</th>
        <th>传入参数</th>
        <th>更新时间</th>
      </tr>

      <tr v-for="apiCall in api_call_list">
        <td>
          <router-link :to="{name:'repoFuncDetial', params: {id:apiCall.function_id}}">{{apiCall.function_name}}</router-link>
        </td>
        <td>
          {{apiCall.params}}
        </td>

        <td>
          {{apiCall.updated_at}}
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
      title: "方法细节",
      msg: "服务方法",
      msg1: "此方法所属的服务",
      msg2: "调用仓储方法列表",
      modelObj: [],
      relation: null,
      repo: null,
      api_call_list: [],
      apiCall: null,
      funcName: null,
      service_list: [],
      service: null,
      api: null
    };
  },
  created() {
    this.$http
      .post(
        global.apiUrl + "api/service/get/apiInfo",
        { api_id: this.$route.params.id },
        { emulateJSON: true }
      )
      .then(
        response => {
          this.api = response.data.data.api;
          this.api_call_list = response.data.data.api.call_list;
          this.service_list = response.data.data.api.service;
          this.funcName = response.data.data.api.function_name;

          // //this.modelObj = response.data.data.model;
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
          global.apiUrl + "api/service/get/apiInfo",
          { api_id: this.$route.params.id },
          { emulateJSON: true }
        )
        .then(
          response => {
            this.api = response.data.data.api;
            this.api_call_list = response.data.data.api.call_list;
            this.service_list = response.data.data.api.service;
            this.funcName = response.data.data.api.function_name;

            // //this.modelObj = response.data.data.model;
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