<template>
  <div>
    <el-container style="height: 940px; border: 1px solid #eee">
      <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" class="left">
          <div class="title"><img src="../assets/img/1.png" alt=""> 非翔教育</div>
           <el-menu-item-group>
              <template slot="title"><router-link tag="div" to="./Shouye"><div class="sy"><img src="../assets/img/3.png">首页</div></router-link></template>
            </el-menu-item-group>
          <!-- <el-submenu index="1">
            <template slot="title">
            
            </template>
          </el-submenu> -->
          <el-submenu index="2">
            <template slot="title">
              <div class="tilie2"><img src="../assets/img/2.png"><span style="">文章管理</span></div>
            </template>
            <el-menu-item-group>
              <el-menu-item style="color:#909399;text-align: center" index="2-1"><router-link to="/content2">轮播图管理</router-link></el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="2-2"><router-link to="/content3">课程管理</router-link></el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="2-3">教育头条</el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="2-4">活动列表</el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="2-5">明星教师</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <div class="tilie2"><img src="../assets/img/4.png"><span style="">订单管理</span></div>
            </template>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <div class="tilie2"><img src="../assets/img/5.png"><span style="">用户管理</span></div>
            </template>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <div class="tilie2"><img src="../assets/img/6.png"><span style="">财务管理</span></div>
            </template>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <div class="tilie2"><img src="../assets/img/7.png"><span style="">客服系统</span></div>
            </template>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <div class="tilie2"><img src="../assets/img/8.png"><span style="">设置</span></div>
            </template>
            <el-menu-item-group>
              <el-menu-item style="color:#909399;text-align: center" index="7-1">通用设置</el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="7-2">关于我们</el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="7-3">员工管理</el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="7-4">角色管理</el-menu-item>
              <el-menu-item style="color:#909399;text-align: center" index="7-5">操作日志</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px; height: 70px;">
          <img src="../assets/img/10.png" alt="" style="margin-right: 45px;vertical-align: middle">
          <img src="../assets/img/9.png" style="margin-right: 15px;vertical-align: middle"/>
          <span style="color:white;font-weight:bolder">Daysy</span>
        </el-header>
        
        <!-- <keep-alive> -->
                
            <el-main style="width: 1200px; margin: 0 auto;background-color:">
              <router-view>
                <!-- <Mainye></Mainye> -->
                <!-- <Content2></Content2> -->
              </router-view>
                
            </el-main>

              <!-- </keep-alive> -->

        </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header{
  background-color: #9137f3;
  color: #333;
  line-height: 70px;
}
.el-aside {
  color: #333;
}
.sy{
  background-color: #9137f3;
  border-radius: 5px;
  padding: 13px 5px;
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 600;
}
.sy img{
  vertical-align: middle;
  float: left;
  margin-left: 20px;
}
.left{
  padding-right: 20px
}
.tilie2{
  padding: 0px 5px;
  text-align: center;
}
.tilie2 img{
  margin-right: 10px;
}
.title{
  padding: 15px 15px;
  text-align: center;
  color: #9137f3;
  font-weight: bolder;
  font-size: 24px;
}
.title img{
  margin: 0px 10px;
  vertical-align: middle;
}

</style>

<script>
import Content1 from '../views/Content1.vue';
import Content2 from '../views/Content2.vue';
export default {
  name:'Shouye',
  components:{
    Mainye:Content1,
    Content2,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>