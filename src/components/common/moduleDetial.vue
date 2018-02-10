<template>

    <div >
        <h4>{{title}}&nbsp;{{modelObj.code}}</h4>
        <span><icon name="database"></icon>{{msg}}</span>
        <div>
            <table class="gridtable">
                <tr>
                    <th>别名</th>
                    <th>类名</th>
                    <th>表名</th>
                </tr>
                <tr>
                    <td>{{modelObj.alias}}</td>
                    <td>{{modelObj.class_name}}</td>
                    <td>{{modelObj.table}}</td>

                </tr>
                <tr>
                    <th colspan="3">可插入数据库字段</th>
                </tr>
                <tr>
                    <td colspan="3">{{modelObj.fillable}}</td>
                </tr>
            </table>
        </div>

        <span><icon name="database" ></icon>{{msg1}}</span>
        <div>
            <table class="gridtable">
                <tr>
                    <th>关联方法</th>
                    <th>关联类型</th>
                    <th>关联模型</th>
                    <th>主键名称</th>
                    <th>外键名称</th>
                    <th>更新时间</th>
                </tr>
                <tr v-for="relation in modelObj.relation_list">
                    <td>{{relation.relation}}</td>
                    <td>{{relation.relate_type}}</td>
                    <td><router-link :to="{name:'md', params: {id:relation.related_model_id}}">{{relation.related_model}}</router-link></td>
                    <td>{{relation.local_key}}</td>
                    <td>{{relation.foreign_key}}</td>
                    <td>{{relation.updated_at}}</td>

                </tr>
            </table>
        </div>

        <span><icon name="database" ></icon>{{msg2}}</span>
        <div>
            <table class="gridtable">
                <tr>

                    <th>方法名称</th>
                    <th>使用范围</th>
                    <th>传入参数</th>
                    <th>更新时间</th>
                </tr>
                <tr v-for="repo in modelObj.repo_function_list">

                    <td> <router-link :to="{name:'repoFuncDetial', params: {id:repo.id}}">{{repo.function_name}}</router-link></td>
                    <td>{{repo.modifier}}</td>
                    <td>{{repo.params}}</td>
                    <td>{{repo.updated_at}}</td>

                </tr>
            </table>
        </div>
    </div>

</template>


<script>
export default {
  name: "moduleDetial",

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
          global.apiUrl+"api/db/get/modelInfo",
          { model_id:this.$route.params.id},
          { emulateJSON: true }
        )
        .then(
          response => {
              
            this.modelObj = response.data.data.model;
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
          global.apiUrl+"api/db/get/modelInfo",
          { model_id: this.$route.params.id },
          { emulateJSON: true }
        )
        .then(
          response => {
            this.modelObj = response.data.data.model;
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