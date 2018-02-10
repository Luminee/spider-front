<template>

  <div>
    <h4>{{title}}&nbsp;{{funcName}}</h4>
    <span>
      <icon name="database"></icon>{{msg}}</span>
    <table class="gridtable">
      <tr>
        <th>所属仓储</th>
        <th>模型名称</th>
        <th>范围</th>
        <th>传入参数</th>
        <th>更新时间</th>
      </tr>

      <tr>
         <td>
          {{funcInfo.repository.class_name}}
        </td>
        <td>
          {{funcInfo.function_name}}
        </td>
        <td>
          {{funcInfo.modifier}}
        </td>
        <td>
          {{funcInfo.params}}
        </td>
        <td>
          {{funcInfo.updated_at}}
        </td>
      </tr>
    </table>

    <span>
      <icon name="database"></icon>{{msg1}}</span>
    <table class="gridtable">
      <tr>
        <th>service名称</th>
        <th>传入参数</th>
        <th>更新时间</th>
      </tr>

      <tr v-for="apiCall in api_call_list">
        <td>
           <router-link :to="{name:'serviceFuncDetial', params: {id:apiCall.api_id}}">{{apiCall.api.function_name}}</router-link>
        </td>
        <td>
          {{apiCall.api.params}}
        </td>
        <td>
          {{apiCall.api.updated_at}}
        </td>

      </tr>
    </table>
    <span v-if="setModel!=null">
      <icon name="database"></icon>{{msg2}}</span>
    <table class="gridtable" v-if="setModel!=null">
      <tr>
        <th>别名</th>
        <th>类名</th>
      
        <th>表名</th>
        <th>是否有软删</th>
        <th>更新日期</th>
      </tr>

      <tr >
        <td>
          {{setModel.alias}}
        </td>
        <td>
           <router-link :to="{name:'md', params: {id:setModel.id}}">{{setModel.class_name}}</router-link>
          
        </td>
       
        <td>
          {{setModel.table}}
        </td>
        <td>
          {{setModel.use_soft_deletes}}
        </td>
        <td>
          {{setModel.updated_at}}
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
      msg: "仓储方法",
      msg1: "调用此方法service方法的名字",
      msg2: "模型对象",
      modelObj: [],
      relation: null,
      repo: null,
      api_call_list: [],
      apiCall: null,
      funcName: null,
      funcInfo: null,
      setModel: null
    };
  },
  created() {
    this.$http
      .post(
        global.apiUrl + "api/repo/get/functionInfo",
        { function_id: this.$route.params.id },
        { emulateJSON: true }
      )
      .then(
        response => {
          this.funcInfo = response.data.data.function;
          this.api_call_list = response.data.data.function.api_call_list;
          this.funcName = response.data.data.function.function_name;
          this.setModel = response.data.data.function.set_model;

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
          global.apiUrl + "api/repo/get/functionInfo",
          { function_id: this.$route.params.id },
          { emulateJSON: true }
        )
        .then(
          response => {
            this.funcInfo = response.data.data.function;
            this.api_call_list = response.data.data.function.api_call_list;
            this.funcName = response.data.data.function.function_name;
            this.setModel = response.data.data.function.set_model;
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