<template>
    <div id="main">
        <h2>关于我们</h2>
        <div class="first">
            <p>请填写关于我们</p>
            <div class="first-a">
                <label>内容详情：</label>
                <div class="first-n">
                    <p><img src="../assets/img/002.png" alt=""></p>
                    <div style="height: 410px;overflow: auto;">
                        <p style="color:blue;text-align: center">关于我们</p>
                        <p style="text-align: center"><img src="../assets/img/27.png" alt=""></p>
                        <p>
                            校区环境优雅，简约舒适，电教化一体式互动教学，师生融洽，学习气氛浓郁。校区以高度本地化教育为导向，
                            争取做方圆三公里受孩子喜爱、被家长信任的教育培训机构。让孩子真正的做到爱上学习，收获成长。
                            6个精品小班教学中心，19个VIP个性化学习中心，<br>
                            非翔教育一步一步走进北京家庭，读懂孩子们的期望。<br>
                            联系我们
                        </p>
                        <div class="foot">
                            <p>Tel:0531-59696636</p>
                            <p>WeChat:feixiang0006963</p>
                            <p>Address:北京市朝阳区京顺路111号</p>
                            <p>世界购物中心</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="first-l"><button :plain="true" @click="open2"><img src="../assets/img/001.png" alt="">保存</button></div>
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
  padding: 10px 0px;
}
.first > p {
  color: rgb(160, 158, 158);
  font-size: 16px;
  width: 94%;
  margin: 0 auto;
  padding: 10px 0px;
  border-bottom: rgb(182, 178, 178) 1px solid;
}
.first-a{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
}
.first-a::after{
    display: block;
    clear: both;
    content: "";
    
}
.first-a label{
    font-size: 14px;
    float: left;
}
.first-n{
    width: 80%;
    float: left;
    border: 0.5px solid #F1F1F1;
    border-radius: 5px;
    margin-left: 10px;
}
.first-n>p{
    padding: 5px 0px;
    background-color: #FCFCFC;
}
.first-n>div:nth-of-type(1)>p{
    margin: 10px 0px;
    padding: 5px 20px;
    font-size: 14px;
    line-height: 200%;
}
.first-l{
    width: 100%;
    text-align: center;
    margin-top: 30px;
    padding-bottom: 20px;
}
.first-l img{
    vertical-align: middle;
}
.first-l button{
    background-color: #9137f3;
    color: white;
    width: 90px;
    border-radius: 5px;
    padding: 5px;
}
.foot{
    padding: 20px 0px;
}
.foot>p{
    text-align: center;
    font-size: 12px;
    line-height: 200%;
}
</style>

<script>
export default {
    name:'aboutwe',
    data() {
        return {
            
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