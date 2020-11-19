<template>
  <div id="main">
    <h2>教育头条</h2>
    <div class="first">
      <p>
        <img src="../assets/img/20.png" alt width="15" height="15" /> 筛选
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
          <img src="../assets/img/21.png" alt width="15" height="14" /> 文章列表
        </p>
        <div class="aniu">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            style="background-color:#FFFFFF;border: 1px solid #9137f3;color:#9137f3"
          >新增轮播图</el-button>
          <el-button
            type="primary"
            icon="el-icon-delete-solid"
            style="background-color:#FFFFFF;border: 1px solid #9137f3;color:#9137f3"
          >回收站</el-button>
        </div>
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
          <el-table-column type="selection" width="45" align="center"></el-table-column>
          <el-table-column prop="titlie" label="标题" align="center" width="210"></el-table-column>
          <el-table-column label="缩略图" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.img" height="50" width="100" />
            </template>
          </el-table-column>
          <el-table-column prop="describe" label="描述" align="center" width="220"></el-table-column>
          <el-table-column prop="name" label="上传人" align="center" width="80"></el-table-column>
          <el-table-column label="上传日期" width="145" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="make" label="操作" show-overflow-tooltip width="165" align="center">
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
.block{
  float: right;
}
</style>

<script>
export default {
    name:'content4',
    data() {
    return {
      value: "",
      tableData: [
        {
          date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
        },
        {
          date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
        },
        {
         date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
        },
        {
         date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
        },
        {
         date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
        },
        {
          date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
        },
        {
          date: "201-01-25 10:55",
          name: "Daisy",
          titlie: '30所京城中小学这样过“世界读书日”',
          img: require("../assets/img/22.png"),
          describe:'正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊...',
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
}
</script>