<template>
    <div>
        <div class="mall-bg">
            <div style="font-size: 16px;color: #000000;width: 100%;height: 32px;text-align: center;padding-top: 42px;" >兑换专区</div>

            <div style="width: 100%;display: flex;justify-content: center;position: absolute;bottom: 0;">
                <div style="width: 365px;height: 44px;background: rgba(255, 255, 255, 0.8);border-radius: 8px 8px 0 0;padding: 10px;display: flex;">
                    <img src="../assets/img/mall-icon.png" style="width: 24px;height: 24px;">
                </div>
            </div>
        </div>
        <!-- <img src="https://img0.baidu.com/it/u=775932288,286321380&fm=253&fmt=auto&app=138&f=PNG?w=767&h=393" style="width: 100%;height: 140px;"> -->
       

    </div>
</template>
<script>

export default {
    name: 'cellMall',
    data(){
        return{
         
        }
    },
    mounted() {
       
    },
}
</script>
<style scoped>
    .mall-bg{
        height: 242px;
        width: 100%;
        background-image: url('../assets/img/mall-bg.png');
        background-size: 100% 242px;
        position: relative;
    }
</style>

