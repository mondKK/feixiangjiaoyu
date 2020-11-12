<template>
  <div>
    <h2>轮播图管理</h2>
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
  </div>
</template>