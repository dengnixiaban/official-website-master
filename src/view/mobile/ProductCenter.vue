<template>
  <div class="homepage_m">
    <div style="padding-top: 48px;background-color:rgba(255, 255, 255, 0.7);">
        <van-tabs v-model="active" background="transparent" color="#358dcf" title-active-color="#358dcf">
             <van-tab v-for="(item ,index) in goodsList" :key="index" :title="item.title">
                    <div style="padding: 16px;">
                        <div style="width: 100%;display: flex;justify-content: center;gap: 18px; flex-wrap: wrap;">
                                <div class="productItem" v-for="(item ,index) in goodsList[active].goods" :key="index" style="width: 324px;height: 412px;margin-bottom: 32px;">
                                    <img :src="item.imgMain" style="width: 324px;height: 324px;" @click="goDetails(item)">
                                    <div style="width: 324px;height: 88px;padding: 10px;box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); border: 2px solid #fff;">
                                        <div style="font-size: 16px;color: #999999;">
                                            {{ item.name }}
                                        </div>
                                        <div style="display: flex;padding-top: 10px;" >
                                            <div class="checkDetail" style="width: 100px;height: 32px;display: flex;justify-content: center;align-items: center;cursor: pointer;">
                                                <div @click="goDetails(item)" >
                                                    查看详情
                                                </div>
                                            </div>
                                            <div class="askDetail"  style="width: 100px;height: 32px;margin-left: 12px;display: flex;justify-content: center;align-items: center;cursor: pointer;">
                                                <div @click="goContact()">立即询盘</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
             </van-tab>
        </van-tabs>
    </div>
    
  
  
    <div style="width: 100%;height: 24px; display: flex;justify-content: center;font-size: 12px;color: #666666;padding-top: 12px;padding-bottom: 6px;">备案号:粤ICP备2023015710号</div>
  </div>
</template>
<script>
import { goodsList } from '../../utils/goodsList';
export default {

  data() {
    return {
        active:0,
        goodsList,
    };
  },
  methods:{
    goStore(path){
        window.location.href = path;
    },
    goDetails(data){
        this.$router.push({
        path: '/m-productDetails',
        query: {
            details: JSON.stringify(data)
        }
        });
    }

}
};
</script>
<style scoped>
.homepage_m{
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/img/home/bg1.jpg") repeat-y;
  background-size: 100% auto; /* 宽度铺满，高度按比例缩放 */
  background-position: top center;
}
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
.checkDetail{
    color: #999999;
    border: 1px solid #999999;
}
.askDetail{
    color: #999999;
    border: 1px solid #999999;
}
.checkDetail:hover{
    background-color:#358dcf;
    color: #ffffff;
}
.askDetail:hover{
    background-color:#358dcf;
    color: #ffffff;
}
</style>