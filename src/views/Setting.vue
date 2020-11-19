<template>
    <div id="main">
        <h2>通用设置</h2>
        <div class="first">
            <p>待付款订单取消时间：拍下未付款订单 <input type="text" v-model="val1" class="ipt1"> 分钟内未付款，自动取消订单</p>
            <p>累计消费满 <input type="text" v-model="val2" class="ipt2"> 元，升一级；最高 <input type="text" v-model="val3" class="ipt1"> 级</p>
            <p>每 <input type="text" v-model="val" class="ipt3"> 积分可抵扣 <input type="text" v-model="val4" class="ipt1"> 元</p>
             <div><el-button type="primary" icon="el-icon-success" class="buten" :plain="true" @click="open2">保存</el-button></div>
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
.ipt1{
    width: 35px;
    border: #9137f3 1px solid;
    border-radius: 5px;
    height: 30px;
    text-align: center;
    margin: 0px 5px;
    outline: #9137f3;
}
.ipt2{
    width: 60px;
    border: #9137f3 1px solid;
    border-radius: 5px;
    height: 30px;
    text-align: center;
    margin: 0px 5px;
    outline: #9137f3;
}
.ipt3{
    width: 100px;
    border: #9137f3 1px solid;
    border-radius: 5px;
    height: 30px;
    text-align: center;
    margin: 0px 5px;
    outline: #9137f3;
}
.first>p{
    line-height: 66px;
    margin-left: 35px;
}
.first>div{
    text-align: center;
    margin-top: 180px;
    padding: 50px 0px;
}
.buten{
    background-color: #9137f3;
    width: 100px;
}
</style>

<script>
export default {
    name:'setting',
    data() {
        return {
            val1:'60',
            val2:'100.00',
            val3:'11',
            val4:'10',
            val:'',
        }
    },
    methods:{
        open2() {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
        },
    }
}
</script>