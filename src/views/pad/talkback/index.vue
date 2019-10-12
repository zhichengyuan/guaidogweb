<template>
    <div>
        <ul class="talkback">
            <li>
                <a href="">
                    <span class="roomname">门卫室</span>
                    <span class="icon"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="roomname">消防</span>
                    <span class="icon"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="roomname">公安</span>
                    <span class="icon"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="roomname">医院</span>
                    <span class="icon"></span>
                </a>
            </li>
          
            <li>
                <a href="">
                    <span class="roomname">居委会</span>
                    <span class="icon"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="roomname">教育局</span>
                    <span class="icon"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="roomname">公司</span>
                    <span class="icon"></span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
   .talkback{
       li{
           height: 70px;
           background:#fff;
           padding:0px 30px;
           margin-bottom: 10px;
           a{
               display: inline-block;
               height: 100%;
               line-height: 70px;
               width: 100%;
               font-size: 20px;
               font-weight: 400;
               .icon{
                   display: inline-block;
                   float:right;
                   width: 30px;
                   height: 30px;
                   margin-top: 20px;
                   background:url('../../../assets/imgs/phone.png') no-repeat center;
                   background-size: 100%;
               }
           }
           
       }
       
   }
    
</style>