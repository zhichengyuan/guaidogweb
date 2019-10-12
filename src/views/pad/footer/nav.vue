<template>
     <!-- pad端底部nav -->
    <div class="pad-nav">
        <router-link class="aa" :to="{name:'classlist'}">医务</router-link>
        <router-link class="aa" :to="{name:'talkback'}">对讲</router-link>
        <router-link class="aa" :to="{name:'policework'}">警务</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .pad-nav{
        height: 60px;
        width: 100%;
        background: #fff;
        position: fixed;
        bottom: 0px;
        display: flex;
        // -webkit-box-orient: horizontal;
        // display: -webkit-box;
        .aa {
                // display: inline-block;
                // -webkit-box-flex: 1;
                flex: 1;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                line-height: 60px;
            }
        .router-link-active{
            color:#1a75ff;
        }
    }
</style>