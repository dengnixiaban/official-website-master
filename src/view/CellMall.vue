<template>
    <div>
        <div class="mall-bg">
            <div style="font-size: 16px;color: #000000;width: 100%;height: 32px;text-align: center;padding-top: 42px;">兑换专区
            </div>

            <div style="width: 100%;display: flex;justify-content: center;position: absolute;bottom: 0;">
                <div
                    style="width: 365px;height: 44px;background: rgba(255, 255, 255, 0.8);border-radius: 8px 8px 0 0;padding: 10px;display: flex;">
                    <img src="../assets/img/mall-icon.png" style="width: 24px;height: 24px;">
                    <div style="display:flex;height:24px;padding-left: 14PX;align-items: center;">
                        <div style="font-size: 14px;">可用积分:</div>
                        <div style="color:cadetblue ;padding-left: 5px;font-size: 16px;font-weight: 700;">{{user?user.points:0 }}</div>
                    </div>

                </div>
            </div>
        </div>
        <!-- <img src="https://img0.baidu.com/it/u=775932288,286321380&fm=253&fmt=auto&app=138&f=PNG?w=767&h=393" style="width: 100%;height: 140px;"> -->
        <van-tabs v-model="active" color="green">
            <van-tab :title="item" v-for="(item, index) in typeList" :key="index" />
        </van-tabs>
      
        <Elect @buyGood="buyGood" :type="type"></Elect>
      
        
        <van-dialog v-model="show" :show-confirm-button="false">
                <div style="width: 322px;height:316px;border-redius:12px;margin-top: -1px;position: relative;">
                    <div class="title-bg"
                        style="width:322px ;height:65px ;display: flex;justify-content: center;align-items: center;">
                        <div style="font-size:18px ;color:#f5f5f5">兑换商品信息确认</div>
                    </div>
                    <div
                        style="width: 100%;height:316px;background: linear-gradient(180.44deg, #F4BE43 -102%, #FAFAFA 127.74%);">
                        <div
                            style="padding-top: 31px;padding-left:26px ;font-size: 16px;color: #1B1B1B;width: 300px;height: 32px;">
                            您将换购业务信息如下:</div>
                        <div
                            style="padding-top: 42px;padding-left:26px ;font-size: 14px;color: #424242;width: 300px;height: 32px;">
                            换购商品：{{ goodsInfo.name || ''}} {{ goodsInfo.size || ''}}</div>
                        <div
                            style="padding-top: 32px;padding-left:26px ;font-size: 14px;color: #424242;width: 200px;height: 32px;">
                            兑换积分：{{ goodsInfo.needPoints || ''}}积分</div>

                        <div style="display: flex;justify-content: center; padding-top: 65px; width:100% ;height:42px ;">
                            <div
                                style="background: linear-gradient(93.06deg, #DE6247 9.87%, #F78848 98.37%);width:271px;height: 42px;border-radius: 100px;display: flex;justify-content: center;align-items: center;">
                                <div @click="confirmBuy" style="font-size: 16px;color:#F8F8F8;">确认兑换</div>
                            </div>
                        </div>
                    </div>
                    <img @click="show=false" src="../assets/img/cancel.png" style="width:18px ;height:18px;position: absolute;top: 16px;right: 16px;" alt="">
                </div>
            

        </van-dialog>
    </div>
</template>
<script>
import { CellGroup } from 'vant'
import Elect from '../components/Elect.vue'
export default {
    name: 'cellMall',
    components: {
        Elect
    },
    data() {
        return {
            active: 0,
            typeList: ['数码家电', '家居用品', '办公用品', '环境耗材'],
            show: false,
            user:{},
            goodsList:[],
            goodsInfo:{},
            type:'数码家电'
        }
    },
    created() {
        
        let user = sessionStorage.getItem('userInfo')
        if (user) {
            this.logined = true
            this.user = JSON.parse(user)      
        }
        
    },
    mounted() {

    },
    methods: {
        buyGood(data){
            this.show=true
            this.goodsInfo=data
            
        },
        confirmBuy(){
            
            let obj={
                pointsOwnerId:this.user.id,
                prizeId:this.goodsInfo.id
            }
            const jsonData = JSON.stringify(obj);
            // 发送POST请求
            fetch('/api/prize-redemption-order/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: jsonData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data,11111);
                    this.show=false
                    this.user.points=this.user.points-this.goodsInfo.needPoints
                })
                .catch(error => console.error('Error:', error));
        }
    },
    watch:{
        active(){
            this.type=this.typeList[this.active];
        }
    }
}
</script>
<style scoped>
.mall-bg {
    height: 242px;
    width: 100%;
    background-image: url('../assets/img/mall-bg.png');
    background-size: 100% 242px;
    position: relative;
}

.title-bg {
    background-image: url('../assets/img/bg.png');
    background-size: cover;
    background-position: center center;
    padding-top: 0;
}
</style>

