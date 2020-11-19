<template>
  <div id="main">
    <h2>财务管理</h2>
    <div class="first">
      <p class="first_p1">
        <img src="../assets/img/26.png" alt width="15" height="15" /> 财务统计
      </p>
      <p class="first_p2">
        <label for>订单总额：</label>￥
        <span style="margin-right:100px">322000.00</span>
        <label for>订单总数：</label>￥
        <span>322</span>
      </p>
      <p class="first_p3">
        <img src="../assets/img/20.png" alt width="15" height="15" /> 筛选
      </p>
      <p class="first_p4">
        <label for>订单状态 ：</label>
        <el-checkbox-group v-model="checkList" style="display:inline-block">
          <el-checkbox label="待支付"></el-checkbox>
          <el-checkbox label="已关闭"></el-checkbox>
          <el-checkbox label="学习中"></el-checkbox>
          <el-checkbox label="已完成"></el-checkbox>
          <!-- <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>-->
        </el-checkbox-group>
      </p>
      <p class="first_p4">
        <label for>订单分类 ：</label>
        <el-checkbox-group v-model="checkList2" style="display:inline-block">
          <el-checkbox label="课程订单"></el-checkbox>
          <el-checkbox label="活动订单"></el-checkbox>
          <!-- <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>-->
        </el-checkbox-group>
      </p>
      <div class="first_a">
        <label for>输入搜索 :</label>
        <input type="text" placeholder="输入轮播图标题..." />
        <span>上传时间：</span>
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
          <img src="../assets/img/21.png" alt width="15" height="14" /> 流水列表
        </p>
      </div>

      <div class="tab">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          header-cell-style="background-color:#9137f3; text-align: center;color:#ffffff"
          cell-style="height:100px"
        >
          <el-table-column prop="number" label="订单编号" align="center"></el-table-column>
          <el-table-column prop="dingdanfenlei" label="订单分类" align="center"></el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="price" label="订单金额" align="center"></el-table-column>
          <el-table-column prop="store" label="订单状态" align="center"></el-table-column>
          <el-table-column label="下单时间" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <div class="block">
              <!-- <span class="demonstration">显示总数</span> -->
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000"
              ></el-pagination>
          </div>
        </div>
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
.first p {
  color: rgb(122, 121, 121);
  font-size: 15px;
  margin-left: 35px;
}
.first_p1 img {
  vertical-align: middle;
}
.first_p2 {
  margin-top: 25px;
}
.first_p2 > label {
  color: black;
}
.first_p2 > span {
  color: red;
}
.first_p3 {
  margin-top: 50px;
}
.first_p3 img {
  vertical-align: middle;
}
.first_p4 {
  margin-top: 20px;
}
.first_p4 > label {
  color: black;
}
.first_a {
  padding: 30px 0px;
  margin-top: 20px;
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
.secend_one > p {
  float: left;
}
.secend_one::after {
  display: block;
  clear: both;
  content: "";
}
.tab {
  width: 94%;
  margin: 0 auto;
  margin-top: 20px;
}
.fenye{
  margin-top: 20px;
}
.fenye::after{
  display: block;
  clear: both;
  content: "";
}
.block{
  float: right;
}
</style>
<script>
export default {
  name: "caiwuguanli",
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      checkList2: ["选中且禁用", "复选框 A"],
      value: "",
      tableData: [
        {
          number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        },
        {
         number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        },
        {
          number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        },
        {
          number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        },
        {
         number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        },
        {
          number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        },
        {
          number:'2019030102369669',
          dingdanfenlei:'课程订单',
          title:'幼儿英语课程',
          price:'2366.00',
          store:'待支付',
          date: "2019-01-25 10:55",
        }
      ],
      multipleSelection: [],
      currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4
    };
  },
   methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    },
  }
};
</script>