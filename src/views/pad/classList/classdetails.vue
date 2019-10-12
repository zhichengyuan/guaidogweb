<template>
    <div class="classDetails">
        <h2>
            <span class="first">未签到</span>
            <span class="senced">已签到</span>
            <span class="">过时未签到</span>
            <span class="there">身体异常</span>
        </h2>
        <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" v-for="(item,index) in students" :key="index">
                <div class="student">
                    <div class="img-box">
                        <img :src="item.imgurl" alt="">
                    </div>
                    <p>{{item.name}}</p>
                </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="student">
                    <div class="img-box border-red">
                        <img src="" alt="">
                    </div>
                    <p>电风扇</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return{
            students:[
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
                {
                    id:1,
                    name:'刘梅梅',
                    imgurl:''
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .classDetails{
        overflow: hidden;
        padding-left:20px;
        padding-right:20px;
        h2{
            margin: 0px;
            margin-bottom:20px;
            span{
                color:#d8d8d8;
                font-size: 14px;
                position: relative;
                margin-left:40px;
                &:after {
                    content: ' ';
                    position: absolute;
                    left: -15px;
                    top: 2px;
                    width: 10px;
                    height: 10px;
                    background-color: red;
                    border-radius: 50%;
                }
                &.first:after{
                    background-color: #ccc;
                }
                &.senced:after{
                    background-color: #b1dd5b;
                }
                &.there:after{
                    background-color: #ffc661;
                }
            }
            
        }
        .student{
            // width: 200px;
            text-align: center;
            position: relative;
            margin-bottom: 30px;
            .img-box{
                width:150px;
                height: 150px;
                display: inline-block;
                // position: absolute;
                margin-bottom: 20px;
                background:#ccc;
                border-radius: 50%;
            }
            .border-red{
                border:1px solid red;
                box-shadow:0px 0px  7px 1px red;
            }
            p{
                font-size: 18px;
            }
        }
    }
</style>