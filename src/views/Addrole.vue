<template>
    <div id="main">
        <div class="first">
            <h2>新建/编辑角色</h2>
            <button @click="back"><img src="../assets/img/29.png" alt=""> 返回</button>
        </div>
        <div class="secend">
            <p></p>
        </div>
    </div>
</template>

<style scoped>
#main{
    width: 90%;
    margin: 0 auto;
}
    .first{
        display: flex;
        justify-content: space-between;
    }
    .first>h2{
        color: blueviolet
    }
    .first img{
        vertical-align: middle;
    }
    .first button{
        border: 1px solid blueviolet;
        border-radius: 5px;
        background-color: white;
        padding: 5px 10px;
        outline: none;
        color: blueviolet;
        font-weight: 800;
    }
</style>

<script>
export default {
    name:'addrole',
    data() {
        return {
            
        }
    },
}
</script>
