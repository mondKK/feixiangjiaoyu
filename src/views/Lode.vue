<template>
    <div id="main">
        <div class="delu">
            <div class="left">
                <img src="../assets/img/delu.png" alt="加载中...">
            </div>
            <div class="right">
                <div class="right_title">
                    <p>登录</p>
                    <p>非翔教育后台管理系统</p>
                </div>
                <div class="from_lode">
                    <p><el-input placeholder="请输入账号" v-model="input" prefix-icon="el-icon-user-solid" clearable> </el-input></p>
                    <p><el-input placeholder="请输入密码" v-model="pssword" prefix-icon="el-icon-key" show-password></el-input></p>
                    <p><el-checkbox v-model="checked">1个月免登陆</el-checkbox> <span>忘记密码请联系管理员</span></p>
                    <p><button class="btn" @click="denglu">登录</button></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            input:'',
            pssword:'',
            checked:true
        }
    },
    methods:{
        denglu:function(){
            this.$router.push({
                path:'/shouye'
            })
        }
    }
}
</script>

<style scoped>
    #main{
        width: 100%;
        height: 100%;
        background: url('../assets/img/bg.png') no-repeat;
        background-size: 100% 100%;
        position:fixed;
    }
    .delu{
    border-width: 0px;
    width: 700px;
    margin: 0 auto;
    margin-top: 15%;
    height: 406px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 6px;
    }
    .left{
        float: left;
        width: 50%;
        text-align: center;
        margin-top: 20px;
    }
    .right{
        float: left;
        width: 50%;
    }
    .right_title{
        margin-top: 30px;
        text-align: center;
    }
    .right_title p:nth-of-type(1){
        color: rgb(153, 0, 255);
        font-size: 27px;
        font-weight: bolder;
    }
    .right_title p:nth-of-type(2){
        color: rgb(153, 0, 255);
        font-size: 14px;
        margin-top: 7px;
        font-weight: bolder;
    }
    .from_lode{
        margin-top: 40px;
    }
    .from_lode p{
        line-height: 350%;
        /* text-align: center; */
        width: 70%;
        margin: 0 auto;
    }
    .from_lode p:nth-of-type(3){
        line-height: 200%;
    }
    .from_lode p:nth-of-type(3)>span{
        font-size: 10px;
        float: right;
        color: rgb(195, 194, 194);
    }
    .btn{
        color: white;
        width: 100%;
        background-color: rgb(153, 0, 255);
        text-align: center;
        border-radius: 10px;
        padding: 10px 0px;
    }

</style>

