<template>
    <div class="homepage_m">
        <div style="padding-top: 48px;background-color:rgba(255, 255, 255, 0.7);">
            <div style="width: 100%;;display: flex;justify-content:center;gap: 36px;flex-wrap: wrap; ">
                  <img  style="width: 324px;height: 324px;"
                        v-for="(item,index) in detailsInfo.imgDetails" :key="index"
                        @mouseenter="checkImg(item)"
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
.homepage_m{
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/img/home/bg1.jpg") repeat-y;
  background-size: 100% auto; /* 宽度铺满，高度按比例缩放 */
  background-position: top center;
}
.checkImg{
    border: 2px solid #358dcf;
}
</style>