<template>
    <div>
        <img src="../assets/img/productCenter/bg.jpg" style="width: 100%;height: 210px;">
        
        <div style="width: 100%;height: 40px;padding: 0 20%;display: flex;justify-content: space-between;background-color: #358dcf">
            <div style="width: auto;height: 40px;color: #fff;font-size: 18px;padding: 10px;cursor: pointer;" v-for="(item ,index) in goodsList" :key="index"
            @click="checkGoodType(index)"
            :class="{ check: goodType === index }"
            >{{ item.title }}</div>
        </div>
        <div class="content">
            <div style="width: 100%;padding: 70px 360px;display: flex;justify-content: flex-start;gap: 36px; ">
                <div style="height: 500px;width: 500px;">
                    <img style="width: 500px;height: 500px;" :src="checkImgUrl">
                </div>
                <div>
                    <div style="width: 684px;display: flex;justify-content: flex-start;align-content: flex-start;flex-wrap: wrap;gap: 18px;">
                    <img  style="width: 156px;height: 156px;"
                        v-for="(item,index) in detailsInfo.imgDetails" :key="index"
                        @click="checkImg(item)"
                        :class="{checkImg:checkImgUrl == item}"
                        :src="item">
                     </div>
                     <div style="width: 100%;height: 48px;padding-top: 48px;display: flex;justify-content: center;">
                            <div style="width: 144px;height: 48px;display: flex;justify-content: center;align-items: center;background-color: #358dcf;color: #fff;font-size: 18px;cursor: pointer;">
                                <div @click="goContact()">立即询盘</div>
                            </div>
                            <div style="width: 144px;height: 48px;display: flex;justify-content: center;align-items: center;background-color: #358dcf;color: #fff;font-size: 18px;margin-left: 24px;cursor: pointer;">
                                <div @click="goback()">返回上级</div>
                            </div>
                     </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
       
    </div>
</template>
<script>
import { goodsList } from '../utils/goodsList';
import { mapGetters } from 'vuex'
export default {
    name: 'productDetails',
    data(){
        return{
         goodsList,
         detailsInfo:{},
         checkImgUrl:''
        }
    },
    computed: {
    ...mapGetters(['goodType'])
  },
    methods:{
        goContact(){
            this.$router.push('/contact');
        },
        checkGoodType(index){
         this.$store.commit('setGoodType', index);
         this.$router.push('/productCenter');
         this.$store.commit('setNavType', '产品中心');
            
        },
        checkImg(url){
            this.checkImgUrl = url 
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
.content{
    width: 100%;
    height: calc(100vh - 250px);
    overflow-y: auto;
}
.checkImg{
    border: 2px solid #358dcf;
}
</style>