<template>
  <div id="main">
    <h2>订单管理</h2>
    <div class="first">
      <p>
        <img src="../assets/img/20.png" alt width="15" height="15" /> 筛选
      </p>
      <div class="first_a">
        <label for>输入搜索 :</label>
        <input type="text" placeholder="输入用户昵称或手机号..." />
        <span>提交时间：</span>
        <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
        ></el-date-picker>
        <el-button
          type="primary"
          icon="el-icon-s-open"
          style="background-color:#9137f3;margin-left: 45px;"
        >筛选</el-button>
        <el-button type="text" style="color:#9137f3;margin-left: 15px;">清空筛选条件</el-button>
      </div>
    </div>

    <div class="secend">
      <div class="secend_one">
        <p>
          <img src="../assets/img/21.png" alt width="15" height="14" /> 订单列表
        </p>
      </div>
      <div class="tab">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="first"><Table1></Table1></el-tab-pane>
                <el-tab-pane label="待付款" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="学习中" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="已完成" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="已关闭" name="fiveth">yibg</el-tab-pane>
            </el-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main > h2 {
  color: #9137f3;
}
.first {
  width: 1060px;
  margin-top: 20px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  padding: 20px 0px;
}
.first > p {
  color: rgb(160, 158, 158);
  font-size: 15px;
  margin-left: 35px;
}
.first > p img {
  vertical-align: middle;
}
.first_a {
  padding: 30px 0px;
}
.first_a label {
  font-size: 15px;
  margin-left: 35px;
}
.first_a input {
  outline: none;
  height: 35px;
  margin-left: 15px;
  border: 0.5px solid rgb(160, 158, 158);
  text-indent: 5px;
  width: 170px;
}
.first_a > span {
  margin-left: 45px;
}
.first_a > el-button {
  margin-left: 35px;
}
.secend {
  width: 1060px;
  margin-top: 20px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  padding: 20px 0px;
}
.secend_one > p {
  color: rgb(97, 95, 95);
  font-size: 15px;
  margin-left: 35px;
}
.secend_one > p img {
  vertical-align: middle;
}
.tab {
  width: 94%;
  margin: 0 auto;
  margin-top: 20px;
}
</style>

<script>
    import Table1 from '../components/Table1'
  export default {
    name:'content7',
    components:{
        Table1,
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>