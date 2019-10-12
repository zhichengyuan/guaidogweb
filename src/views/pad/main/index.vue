<template>
    <div class="main">
        <top-head />
        <div style="padding-top:60px;padding-bottom:60px;">
           <router-view></router-view>
        </div>
        <footer-nav />
   </div>
</template>
<script>
import TopHead from "@/views/pad/header/header.vue";
import FooterNav from "@/views/pad/footer/nav.vue";
export default {
   components:{
      TopHead,
      FooterNav
   }
}
</script>

<style lang="scss" scoped>
    
</style>