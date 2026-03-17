<template>
    <div class="homepage_m">
        <div style="padding:12px;background-color:rgba(255, 255, 255, 0.7);">
            <img :src="detailsInfo.imgDetails[checkIndex]" style="width: 100%;">
            <div style="width: 100%;display: flex;justify-content:start;flex-wrap: wrap;gap: 16px;padding-top: 12px;">
                <img  style="width: 30%;"
                        v-for="(item,index) in detailsInfo.imgDetails" :key="index"
                        @click="checkImg(item,index)"
                        :class="{checkImg:checkImgUrl == item}"
                        :src="item">
            </div>
        
            <div style="width: 100%;height: 48px;padding-top: 28px;display: flex;justify-content: center;">
                            <div style="width: 144px;height: 48px;display: flex;justify-content: center;align-items: center;background-color: #358dcf;color: #fff;font-size: 18px;cursor: pointer;">
                                <div @click="goContact()">立即询盘</div>
                            </div>
                            <div style="width: 144px;height: 48px;display: flex;justify-content: center;align-items: center;background-color: #358dcf;color: #fff;font-size: 18px;margin-left: 24px;cursor: pointer;">
                                <div @click="goback()">返回上级</div>
                            </div>
           </div>
        </div>
       
    </div>
</template>
<script>
import { goodsList } from '../../utils/goodsList';
import { mapGetters } from 'vuex'
export default {
    name: 'productDetails',
    data(){
        return{
         goodsList,
         detailsInfo:{},
         checkImgUrl:'',
         checkIndex:0
        }
    },
    computed: {
    ...mapGetters(['goodType'])
  },
    methods:{
        goContact(){
            this.$router.push('/m-contact');
        },
        checkImg(url,index){
            this.checkImgUrl = url 
            this.checkIndex = index
        },
        goback(){
            this.$router.go(-1); // 返回上一级页面

        }
    },
    created(){
        const details = this.$route.query.details;
        this.detailsInfo = details ? JSON.parse(details) : null;
        this.checkImgUrl = this.detailsInfo.imgDetails[0]
        console.log(this.checkImgUrl,11);
        
    },
    mounted(){
     
    }
  
}
</script>
<style scoped>
.check{
    background-color:#1c6ca6 ;
}
.homepage_m{
  width: 100%;
  min-height: 100vh;
  padding: 0 0 24px 0;
}
.checkImg{
    border: 2px solid #358dcf;
}
</style>