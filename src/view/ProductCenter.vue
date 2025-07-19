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
            <div style="width: 100%;padding: 32px 260px;display: flex;justify-content: flex-start;gap: 36px; flex-wrap: wrap;">
                <div class="productItem" v-for="(item ,index) in goodsList[goodType].goods" :key="index" style="width: 324px;height: 412px;margin-bottom: 32px;">
                    <img :src="item.imgMain" style="width: 324px;height: 324px;">
                    <div style="width: 324px;height: 88px;padding: 10px;box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); border: 2px solid #fff;">
                        <div style="font-size: 16px;color: #999999;">
                            {{ item.name }}
                        </div>
                        <div style="display: flex;padding-top: 10px;" >
                            <div style="width: 100px;height: 32px;background-color: #358dcf;color: #fff;display: flex;justify-content: center;align-items: center;cursor: pointer;">
                                <div @click="goDetails(item)" >
                                    查看详情
                                </div>
                            </div>
                            <div style="width: 100px;height: 32px;background-color: #358dcf;color: #fff;margin-left: 12px;display: flex;justify-content: center;align-items: center;cursor: pointer;">
                                <div @click="goContact()">立即询盘</div>
                            </div>
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
    name: 'productCenter',
    data(){
        return{
         goodsList,
         
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
             this.$store.commit('setGoodType', index)
            
        },
         goDetails(data){
            this.$router.push({
            path: '/productDetails',
            query: {
                details: JSON.stringify(data)
            }
            });
        }
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
.productItem:hover{
  background-color: #ffffff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform: scale(1.03);
}
</style>

