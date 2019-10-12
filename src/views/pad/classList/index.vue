<template>
    <div class="classlist">
        <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2" v-for="(item,index) in classlist" :key="index" >
                <div class="content" @click="classDetails(item.id)">
                    <div class="img-box">
                        <img :src="item.imgurl" alt="">
                        <span>{{item.classname}}</span>
                    </div>
                    <p>班主任：{{item.teacher}}</p>
                    <p>学&nbsp;&nbsp;&nbsp;&nbsp;生：{{item.students}}人</p>
                </div>
            </el-col>
           
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return{
            classlist:[
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
                {
                    id:1,
                    classname:'A102班',
                    teacher:'张芳芳',
                    students:'32',
                    imgurl:''
                },
               
            ],
        }
    },
    methods:{
        classDetails(id) {
            this.$router.push({name:'classdetails',params: {id:'1'}})
        }
    }
}
</script>
<style lang="scss" scoped>
    .classlist{
        padding:0 20px;
        .content{
            height: 240px;
            width: 100%;
            margin-bottom: 30px;
            .img-box{
                height: 200px;
                background: #c4c4c4;
                position: relative;
                margin-bottom: 10px;
                span{
                    position: absolute;
                    left:10px;
                    top:10px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #fff;
                }
            }
            p{
                font-size: 16px;
                padding-left:5px;
            }
        }
    }
   
</style>