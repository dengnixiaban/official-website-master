<template>
    <div class="content">

        <Good @buy="buy" v-for="(item, index) in goodsList" :key="index" :good="item"></Good>


    </div>
</template>
<script>
import Good from './Good.vue'
export default {
    name: "elect",
    props:{
        type:''
    },
    components: {
        Good
    },
    data() {
        return {
            show: true,
            goodsList: []
        };
    },
    created(){
        this.getList()
    },
    methods: {
        getList() {
            
            fetch("/api/prize/list?pageNum=1&&pageSize=10&&type="+this.type)
                .then(response => response.json())
                .then(data => {
                    this.goodsList = data.data.list
                })
                .catch(error => console.error(error));
        },
        buy(data){
            
            this.$emit('buyGood',data)
        }
    },
    watch:{
        type(){
            this.getList()
        }
    }
};
</script>
<style scoped>
.content {
    width: 100%;
    height: calc(100vh - 322px);
    background-color: #ffffff;
    padding: 14px;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
  
  