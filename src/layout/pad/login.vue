<template>
    <div class="container">
        <el-container>
            <el-header>
                <div class="logo"><a href="">logo</a>智慧接送管理平台</div>
            </el-header>
            <el-main>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="10" class="user-logn">
                        <div class="content-align">用户登录</div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="10">
                        <div class="user">
                            <span></span>
                            <el-input
                            placeholder="请输入账号"
                            v-model="username"
                            clearable>
                            </el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="10">
                        <div class="password">
                            <span></span>
                            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="10">
                        <div class="login-in">
                            <el-button type="primary" round>登录<span></span></el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    }
}
</script>
<style lang="scss" scoped>
  @import "@/styles/pad/padLogin.scss";
</style>