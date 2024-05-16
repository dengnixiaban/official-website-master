<template>
    <div class="content">

        <Good></Good>
        <Good></Good>
       
    </div>
</template>
<script>
import Good from './Good.vue'
export default {
    name: "elect",
    components: {
        Good
    },
    data() {
        return {
            show:true
        };
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
  
  