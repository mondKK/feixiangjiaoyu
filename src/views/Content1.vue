<template>
    <div id="main">
        <h2>首页</h2>
        <div class="first">
            <p>经营概况 <i class="el-icon-s-unfold"></i></p>
            <ul>
                <li>
                    <div><img src="../assets/img/11.png" alt=""></div>
                    <div>
                        <p>今日参加活动人次</p>
                        <p>18</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/img/12.png" alt=""></div>
                    <div>
                        <p>今日活动收入</p>
                        <p style="font-size: 20px">￥2330.00</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/img/13.png" alt=""></div>
                    <div>
                        <p>今日课程订单数</p>
                        <p>18</p>
                    </div>
                </li>
                <li>
                    <div><img src="../assets/img/14.png" alt=""></div>
                    <div>
                        <p>今日课程订单收入</p>
                        <p style="font-size: 20px">￥2330.00</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="secend">
            <p>待办事项 <i class="el-icon-s-unfold"></i></p>
            <ul>
                <li>
                    <div><img src="../assets/img/15.png" alt="" @click="put"></div>
                    <div><p>12</p><p>待付款订单</p></div>
                </li>
                <li>
                    <div><img src="../assets/img/16.png" alt="" @click="put"></div>
                    <div><p>12</p><p>待付款订单</p></div>
                </li>
                <li style=" border-right:none">
                    <div><img src="../assets/img/17.png" alt=""></div>
                    <div><p>12</p><p>待付款订单</p></div>
                </li>
            </ul>
        </div>
        <div class="three">
            <p>收入趋势 <img src="../assets/img/18.png" alt=""></p>
            <p><span>本月</span>  <el-divider direction="vertical"></el-divider> <span style="color:#9137f3;">本周</span></p>
            <p>单位：元</p>
            <div class="img_div">
                <img src="../assets/img/19.png" alt="">
            </div>
            
        </div>
    </div>
</template>
<style scoped>
ul{
    list-style: none;
    padding: 30px 0px;
}
    #main>h2{
        color: #9137f3;
    }
    .first{
        width: 1060px;
        margin-top: 20px;
        border: 1px solid #E4E4E4;
        border-radius: 5px;
        background-color: #FFFFFF;
        padding: 25px 0px;
    }
    .first p{
        color: #666666;
        margin: 0px 20px;
        font-size: 15px;
    }
    .first p i{
        margin-left: 5px;
    }
    .first ul{
        margin-top: 25px;
    }
    .first ul li{
        display: inline-block;
        margin-left: 43px;
        width: 210px;
        height: 105px;
    }
    .first ul li>div{
        float: left;
        text-align: center;
    }
    .first ul li>div>img{
        margin-left: 15px;
        margin-top: 25px;
    }
    .first ul li>div>p:nth-of-type(1){
         color: whitesmoke;
         font-size: 13px;
         margin-top: 25px;
    }
    .first ul li>div>p:nth-of-type(2){
         color: white;
         font-size: 25px;
         margin-top: 10px;
         text-align: left;
         font-weight: bolder;
    }
    .first ul li:nth-of-type(1){
        background: linear-gradient(325deg, rgba(153, 0, 255, 1) 0%, rgba(153, 0, 255, 1) 0%, rgba(153, 153, 255, 1) 100%, rgba(153, 153, 255, 1) 100%);
        border: none;
        border-radius: 6px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .first ul li:nth-of-type(2){
        background: linear-gradient(325deg, rgba(255, 102, 153, 1) 0%, rgba(255, 102, 153, 1) 0%, rgba(255, 204, 153, 1) 100%, rgba(255, 204, 153, 1) 100%);
        border: none;
        border-radius: 6px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .first ul li:nth-of-type(3){
        background: linear-gradient(225deg, rgba(255, 204, 102, 1) 0%, rgba(255, 204, 102, 1) 0%, rgba(248, 216, 0, 1) 100%, rgba(248, 216, 0, 1) 100%);
        border: none;
        border-radius: 6px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .first ul li:nth-of-type(4){
        background: linear-gradient(225deg, rgba(144, 247, 236, 1) 0%, rgba(144, 247, 236, 1) 0%, rgba(50, 204, 188, 1) 100%, rgba(50, 204, 188, 1) 100%);
        border: none;
        border-radius: 6px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .secend{
        width: 1060px;
        margin-top: 20px;
        border: 1px solid #E4E4E4;
        border-radius: 5px;
        background-color: #FFFFFF;
        padding: 25px 0px;
    }
    .secend p{
        color: #666666;
        margin: 0px 20px;
        font-size: 15px;
    }
    .secend p i{
        margin-left: 5px;
    }
    .secend ul{
        margin-top: 25px;
    }
    .secend ul li{
        display: inline-block;
        border-right: 1px solid rgba(131, 133, 131, 0.746);
        padding: 0px 43px;
    }
    .secend ul li>div{
        float: left;
        text-align: center;
    }
    .secend ul li>div>p:nth-of-type(1){
         /* color: whitesmoke; */
         font-size: 17px;
         margin-top: 5px;
         font-weight: bolder;
    }
    .secend ul li>div>p:nth-of-type(2){
         font-size: 17px;
         margin-top: 5px;
         text-align: left;
    }
    .three{
        width: 1060px;
        margin-top: 20px;
        border: 1px solid #E4E4E4;
        border-radius: 5px;
        background-color: #FFFFFF;
        padding: 25px 0px;
    }
    .three p{
        color: #666666;
        margin: 0px 20px;
        font-size: 15px;
        line-height: 200%;
    }
    .three p>img{
        margin-left: 5px;
        vertical-align: middle;
    }
    .three p:nth-of-type(2){
        text-align: right;
    }
    .three p:nth-of-type(3){
        text-indent: 30px;
    }
    .img_div{
        text-align: center;
        margin-top: 10px;
    }
</style>

<script>
export default {
    name:'content1',
    data() {
        return {
            
        }
    },
    methods:{
        put:function(){
            this.$router.push({
                path:'/content7'
            })
        }
    }
}
</script>