<template>
    <div style="width: 100vw;height:100vh">
        <div style="padding-top: 56px;font-size: 16px;font-weight: 700;text-align: center;">积分记录</div>
        <div  style="width:100vw ;height:auto;padding:14px">
            <Record v-for="(item,index) in recordList" :key="index" :item="item"></Record>
        </div>
        <div v-if="recordList.length==0"  style="width: 100vw;display:flex;justify-content: center;">
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
            recordList:[]
        }
    },
    created(){
        this.getList()
    },
    mounted() {

    },
    methods: {
        getList() {
            
            fetch("/api/points-record/list?pageNum=1&&pageSize=10")
                .then(response => response.json())
                .then(data => {
                    this.recordList = data.data.list
                })
                .catch(error => console.error(error));
        },
      
    },
}
</script>
<style scoped>

</style>

