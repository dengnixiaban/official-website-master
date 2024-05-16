<template>
    <div style="width: 100vw;height:100vh">
        <div style="padding-top: 56px;font-size: 16px;font-weight: 700;text-align: center;">积分记录</div>
        <div style="width:100vw ;height:auto;padding:14px">
            <Record></Record>
        </div>
        <div style="width: 100vw;display:flex;justify-content: center;">
            <img src="../assets/img/tips.png" style="width: 109px;height:134px;">
        </div>
        
    </div>
</template>
<script>
import Record from '../components/Record.vue'
export default {
    name: 'cellRecord',
    components:{
        Record
    },
    data() {
        return {

        }
    },
    mounted() {

    },
}
</script>
<style scoped>

</style>

