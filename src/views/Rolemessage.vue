<template>
  <div id="main">
    <h2>角色管理</h2>

    <div class="first">
      <p>
        <img src="../assets/img/20.png" width="15" height="15" /> 筛选
      </p>
      <div class="first_a">
        <label for style="margin-left: 35px">输入搜索 :</label>
        <input type="text" placeholder="输入员工姓名或账号" />
          <el-button
            type="primary"
            icon="el-icon-s-open"
            style="background-color:#9137f3;margin-left: 55px;"
          >筛选</el-button>
          <el-button type="text" style="color:#9137f3;margin-left: 15px;">清空筛选条件</el-button>
      </div>
    </div>

    <div class="secend">
      <div class="secend_one">
        <p>
          <img src="../assets/img/21.png" alt width="15" height="14" /> 列表员工
        </p>
        <div class="aniu">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            style="background-color:#FFFFFF;border: 1px solid #9137f3;color:#9137f3"
            @click="add"
          >新增员工</el-button>
        </div>
      </div>

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
          <el-table-column prop="worker_number" label="工号" align="center" width="125"></el-table-column>
          <el-table-column prop="name" label="姓名" align="center" width="85"></el-table-column>
          <el-table-column prop="phone_vip" label="会员手机" align="center"></el-table-column>
          <el-table-column prop="juese" label="角色" align="center"></el-table-column>
          <el-table-column label="添加时间" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="禁用账户" width="105" align="center">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value2"
                :active-value="1"
                :inactive-value="2"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="make" label="操作" show-overflow-tooltip width="155" align="center">
            <template slot-scope="scope">
              <el-button @click="add" type="text" style="color:#9137f3;margin-right:10px;">编辑</el-button>
              <el-popover
                placement="left"
                width="320"
                v-model="scope.row.visible"
                transition="all 2s ease-in-out"
              >
                <p style="float: left;">删除后无法恢复，确定删除？</p>
                <div style="text-align: right; margin: 0; float: right;">
                  <el-button size="mini" type="primary" @click="scope.row.visible = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="open2">确定</el-button>
                </div>
                <el-button slot="reference" type="text">删除</el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection()" style>取消全选</el-button>
          <template>
            <el-popover
              placement="right"
              width="320"
              v-model="visible1"
              transition="all 2s ease-in-out"
            >
              <p style="float: left;">删除后无法恢复，确定删除？</p>
              <div style="text-align: right; margin: 0; float: right;">
                <el-button size="mini" type="primary" @click="visible1 = false">取消</el-button>
                <el-button type="primary" size="mini" @click="open2">确定</el-button>
              </div>
              <el-button slot="reference" type="text">批量删除</el-button>
            </el-popover>
          </template>
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
  margin-left: 25px;
}
.first_a > input {
  outline: none;
  height: 35px;
  margin-left: 8px;
  border: 0.5px solid rgb(160, 158, 158);
  text-indent: 5px;
  width: 170px;
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
.aniu {
  float: right;
  margin-right: 25px;
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
.block {
  float: right;
}
</style>

<script>
export default {
  name: "rolemessage",
  data() {
    return {
      visible1:false,
      tableData: [
        {
          worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        },
        {
         worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        },
        {
         worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        },
        {
          worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        },
        {
          worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        },
        {
          worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        },
        {
          worker_number: "20190301023",
          name: "John",
          phone_vip: "18854138769",
          juese:'管理员',
          date: "2019-01-25 10:55",
          value2: 0,
          visible: false,
        }
      ],
      multipleSelection: [],
      currentPage1: 5
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
        message: "删除成功！",
        type: "success",
        iconClass: "el-icon-success",
        center: true
      });
      this.visible1 = false;
      this.visible = false;
    },
    add:function(){
      this.$router.push({
        name:'addrole'
      })
    }
  }
};
</script>