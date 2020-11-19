<template>
  <div>
    <div class="tab">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;font-size:10px"
        @selection-change="handleSelectionChange"
        header-cell-style="background-color:#9137f3; text-align: center;color:#ffffff"
      >
        <el-table-column type="selection" width="45" align="center"></el-table-column>
        <el-table-column prop="number" label="订单编号" width="133" align="center"></el-table-column>
        <el-table-column prop="weixing_name" label="用户微信昵称" width="95" align="center"></el-table-column>
        <el-table-column prop="phone_number" label="用户手机号码" width="105" align="center"></el-table-column>
        <el-table-column prop="class_name" label="课程名称" width="120" align="center"></el-table-column>
        <el-table-column prop="class_number" label="课程编号" width="80" align="center"></el-table-column>
        <el-table-column prop="price" label="订单金额(元)" width="85" align="center"></el-table-column>
        <el-table-column prop="store" label="订单状态" width="70" align="center"></el-table-column>
        <el-table-column label="提交时间" width="115" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="make" label="操作" show-overflow-tooltip width="" align="center">
          <template>
            <el-button type="text" style="color:#9137f3">编辑</el-button>
          </template>&nbsp;
          <template>
            <el-button type="text" style="color:#9137f3" :plain="true" @click="open2">加入回收站</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection()" style>取消全选</el-button>
        <el-button type="text" style="color:rgb(160, 158, 158)" :plain="true" @click="open2">批量加入回收站</el-button>
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
</template>
<style scoped>
.block{
  float: right;
}
</style>
<script>
export default {
  name: "table1",
  data() {
    return {
      value: "",
      tableData: [
        { number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
        },
        {
         number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
        },
        {
          number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
        },
        {
         number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
        },
        {
         number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
        },
        {
         number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
        },
        {
         number:'2019030102369669',
          weixing_name:'Cassy',
          phone_number:'18541263669',
          class_name:'幼儿英语入门课程',
          class_number:'20192036',
          price:'2399.00',
          store:'待付款',
          date: "201-01-25 10:55",
          make:'查看订单'
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
    open2() {
        this.$message({
          message: '加入回收站成功！',
          type: 'success',
          iconClass:'el-icon-success',
          center: true
        });
        
      },
  }
};
</script>