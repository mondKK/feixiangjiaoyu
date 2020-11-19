<template>
  <div id="main">
    <div class="first">
      <h2>新增轮播图</h2>
      <el-button style="font-weight: 800;" type="primary" icon="el-icon-back" class="bt" size="small" @click="back">返回</el-button>
    </div>
    <div class="secend">
      <p>请填写轮播图信息</p>
      <div class="secend_a">
        <p class="secend_a_p1">
          <label for>
            轮播图名称
            <span style="color:red">*</span>：
          </label>
          <input type="text" placeholder="请输入轮播图名称" />
        </p>
        <div class="secend_a_d1">
          <label for>
            轮播图
            <span style="color:red">*</span>：
          </label>
          <div style="margin-left: 40px;">
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <p style="font-size:12px;color:#706e6e;margin-top: 5px;">建议尺寸为768*500像素,大小小于2M</p>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </div>
        <p class="secend_a_p2">
          <label for>
            轮播图状态
            <span style="color:red">*</span>：
          </label>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            style="margin-left: 10px;"
          ></el-switch>
        </p>
        <p class="secend_a_p3">
          <label for>链接：</label>
          <input type="text" />
        </p>
        <p class="secend_a_p3">
          <label for>上传时间：</label>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </p>
        <p class="secend_a_p4">
          <label for>排序号：</label> <input type="text" v-model="num"> <span style="margin-left:10px;color:#706e6e;font-size:13px">请填写数字，数字越大越靠前！</span>
        </p>
      </div>
      <div class="secend_b">
          <button :plain="true" @click="open2"><img src="../assets/img/001.png" alt=""> &nbsp;保存</button>
          <button @click="back"><img src="../assets/img/28.png" width="16" height="16" alt=""> &nbsp;取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.first > h2 {
  color: #9137f3;
}
.first {
  display: flex;
  justify-content: space-between;
}
.bt {
  background-color: white;
  border: 1px solid #9137f3;
  color: #9137f3;
  font-weight: border;
}
.secend {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  padding: 10px 0px;
}
.secend > p {
  color: rgb(160, 158, 158);
  font-size: 15px;
  width: 94%;
  margin: 0 auto;
  padding: 10px 0px;
  border-bottom: rgb(182, 178, 178) 1px solid;
}
.secend_a {
  width: 80%;
  margin: 0 auto;
  margin-top: 35px;
}
.secend_a_p1 input {
  height: 30px;
  width: 200px;
  text-indent: 5px;
  outline: #9137f3;
  border: 1px solid silver;
  border-radius: 3px;
}
.secend_a_d1 {
  display: flex;
  margin-top: 35px;
}
.secend_a_p2 {
  display: flex;
  margin-top: 35px;
}
.secend_a_p3 {
  margin-top: 35px;
}
.secend_a_p3 > input {
  height: 30px;
  width: 350px;
  text-indent: 5px;
  outline: #9137f3;
  border: 1px solid silver;
  border-radius: 3px;
}
.secend_a_p4{
    margin-top: 35px;
}
.secend_a_p4 > input {
  height: 30px;
  width: 200px;
  text-indent: 10px;
  outline: #9137f3;
  border: 1px solid silver;
  border-radius: 3px;
}
.secend_b{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 30px;
}
.secend_b img{
    vertical-align: middle;
}
.secend_b button:nth-of-type(1){
    background-color: #9137f3;
    color: white;
    width: 90px;
    border-radius: 5px;
    padding: 5px;
    margin: 0px 10px;
    outline: none;
    font-weight: 800;
}
.secend_b button:nth-of-type(2){
    background-color: #E4E4E4;
    color: #666666;
    width: 90px;
    border-radius: 5px;
    padding: 5px;
    margin: 0px 10px;
    outline: none;
    font-weight: 800;
}
</style>

<script>
export default {
  name: "addslideshow",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      value: true,     // 开关
      value1:'',      // 日期
      num: 0,       // 默认排序号
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    back:function(){
        // this.$router.back();
        // 或者
        this.$router.go(-1);
    },
    open2() {
        this.$message({
          message: '保存成功！',
          type: 'success'
        });
    },
  }
};
</script>