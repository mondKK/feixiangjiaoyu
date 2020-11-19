<template>
  <div id="main">
    <h2>操作日志</h2>
    <div class="first">
      <p>
        <img src="../assets/img/20.png" alt width="15" height="15" /> 筛选
      </p>
      <div class="first_a">
        <label for>操作人 :</label>
        <el-select v-model="value1" placeholder="请选择" style="margin-left: 10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>操作时间：</span>
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
          <img src="../assets/img/21.png" alt width="15" height="14" /> 日志列表
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
        >
          <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
          <el-table-column prop="made_pepole" label="操作人" align="center"></el-table-column>
           <el-table-column prop="made_model" label="操作模块" align="center"></el-table-column>
          <el-table-column label="操作时间" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="made_room" label="操作内容" align="center"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
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
  margin-left: 35px;
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
.block{
  /* float: right; */
  text-align: right;
}
</style>

<script>
export default {
    name:'madelod',
    data() {
        return {
            value:'',      //操作日期
            options: [
                {
                  value: "选项1",
                  label: "请选择"
                },
                {
                  value: "选项2",
                  label: "admin"
                },
                {
                  value: "选项3",
                  label: "daisy"
                },
                {
                  value: "选项4",
                  label: "john"
                },
            ],
            value1: "请选择",
            tableData: [
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                },
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                },
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                },
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                },
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                },
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                },
                {
                  made_pepole: 'admin',
                  made_model:'订单管理',
                  date: "2019-01-25 10:55",
                  made_room:'确认订单',
                }
            ],
            multipleSelection: [],
            currentPage1: 5,
        }
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
}
</script>