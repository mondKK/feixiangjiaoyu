<template>
    <div>
        <div class="top">
            <h2>新建/编辑员工</h2>
            <button @click="back"><img src="../assets/img/29.png" alt=""> 返回</button>
        </div>
        <div class="rom">
            <p class="rom_p1">请填写员工信息</p>
            <h4 class="rom_h4"> 账号信息 ：</h4>
            <div class="rom_div1">
                <p class="rom_div1_p1">
                    <label for="">员工姓名<span style="color:red">*</span> ：</label>
                    <input type="text">
                </p>
                <p class="rom_div1_p1">
                    <label for="" style="margin-left: 32px">工号<span style="color:red">*</span> ：</label>
                    <input type="text">
                </p>
                <p class="rom_div1_p1">
                    <label for="" style="margin-left: 32px">密码<span style="color:red">*</span> ：</label>
                    <input type="text" placeholder="请输入6位以上密码,数字或英文" style="width:250px">
                </p>
                <p class="rom_div1_p1">
                    <label for="" style="margin-left: 40px">状态 ：</label>
                    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </p>
                <p class="rom_div1_p1">
                    <label for="" style="margin-left: 32px">角色<span style="color:red">*</span> ：</label>
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                 <p class="rom_div1_p1">
                    <label for="" style="margin-left: 8px">手机号码 ：</label>
                    <input type="text">
                </p>
            </div>
            <div class="foot">
                <button :plain="true" @click="open2"><img src="../assets/img/001.png" alt=""> &nbsp;保存</button>
                <button @click="back"><img src="../assets/img/28.png" width="16" height="16" alt=""> &nbsp;取消</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .top{
        width: 94%;
        display: flex;
        justify-content: space-between;
    }
    .top>h2{
        color: blueviolet
    }
    .top img{
        vertical-align: middle;
    }
    .top button{
        border: 1px solid blueviolet;
        border-radius: 5px;
        background-color: white;
        padding: 5px 10px;
        outline: none;
        color: blueviolet;
        font-weight: 800;
    }
    .rom{
        width: 94%;
        margin-top: 20px;
        border: 1px solid #e4e4e4;
        background-color: #ffffff;
        padding: 20px 0px;
    }
    .rom_p1{
        width: 94%;
        margin: 0 auto;
        color: darkgray;
        font-size: 15px;
        border-bottom: 1px solid  #e4e4e4;
        padding: 10px 0px;
    }
    .rom_h4{
        width: 94%;
        margin: 0 auto;
        padding: 10px 0px;
        margin-top: 10px;
    }
    .rom_div1{
        width: 78%;
        margin: 0 auto;
    }
    rom_div1 label{
        text-align: right;
        font-size: 15px;
    }
    .rom_div1_p1{
        margin-top: 30px;
    }
    .rom_div1_p1 input{
        width: 200px;
        height: 28px;
        outline: none;
        text-indent: 10px;
    }
    .foot{
        width: 100%;
        text-align: center;
        margin-top: 30px;
        padding: 40px;
    }
    .foot img{
        vertical-align: middle;
    }
    .foot button:nth-of-type(1){
        background-color: #9137f3;
        color: white;
        width: 90px;
        border-radius: 5px;
        padding: 5px;
        margin: 0px 10px;
        outline: none;
        font-weight: 800;
    }
    .foot button:nth-of-type(2){
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
    name:'addworkers',
    data() {
        return {
            value: true,  //  开关值
            options: [
                {
                value: '选项1',
                label: '管理员'
                }, 
                {
                value: '选项2',
                label: '客服'
                },
            ],
            value2: '',  // 下拉框的值
        }
    },
    methods:{
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
}
</script>