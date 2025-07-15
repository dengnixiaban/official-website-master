<template>
  <div id="ContactUs">
        <img src="../assets/img/productCenter/bg.jpg" style="width: 100%;height: 210px;">
        <div style="width: 100%;height: 40px;padding: 0 20%;display: flex;justify-content: space-between;background-color: #358dcf">
            <div style="width: auto;height: 40px;color: #fff;font-size: 18px;padding: 10px;cursor: pointer;" v-for="(item ,index) in goodsList" :key="index"
            @click="checkGoodType(index)"
            :class="{ check: goodType === index }"
            >{{ item.title }}</div>
        </div>
        <div class="content">
            <img src="../assets/img/contactUs/bg.jpg" style="width: 100%;height: 280px;">
            <div style="width: 100%;display: flex;justify-content: center;padding-top: 40px;padding-bottom: 80px;">
                <div style="width: 700px;height: 450px;background-color: #fff;padding: 86px 100px;">
                    <div style="width: 100%;display: flex;justify-content: space-between;">
                        <div style="color:#666666;">天猫店铺: 中谱星旗舰店</div>
                        <div style="width: 80px;height: 30px;display: flex;justify-content: center;align-items: center;cursor: pointer;background-color: #358dcf;">
                          <div @click="go(logos[0].path)" style="color: #fff;">进入店铺</div>
                        </div>
                    </div>
                     <div style="width: 100%;display: flex;justify-content: space-between;padding-top: 36px;">
                        <div style="color:#666666;">京东店铺: 中谐星旗舰店</div>
                        <div style="width: 80px;height: 30px;display: flex;justify-content: center;align-items: center;cursor: pointer;background-color: #358dcf;">
                          <div  @click="go(logos[2].path)" style="color: #fff;">进入店铺</div>
                        </div>
                    </div>
                     <div style="width: 100%;display: flex;justify-content: space-between;padding-top: 36px;">
                        <div style="color:#666666;">1688店铺: 广州中检仪达实验器材有限公司</div>
                        <div style="width: 80px;height: 30px;display: flex;justify-content: center;align-items: center;cursor: pointer;background-color: #358dcf;">
                          <div  @click="go(logos[3].path)"  style="color: #fff;">进入店铺</div>
                        </div>
                    </div>
                    <div style="padding-top: 50px;">
                      <div style="display: flex;align-items: center;padding-top: 12px;">
                        <img src="../assets/img/contactUs/cell.png" style="width: 24px;height: 24px;">
                        <div style="color: #666666;font-size: 16px;padding-left: 6px;">电话:13828810709</div>
                      </div>
                      <div style="display: flex;align-items: center;padding-top: 12px;">
                        <img src="../assets/img/contactUs/wx.png" style="width: 24px;height: 24px;">
                        <div style="color: #666666;font-size: 16px;padding-left: 6px;">微信:13828810709</div>
                      </div>
                      <div style="display: flex;align-items: center;padding-top: 12px;">
                        <img src="../assets/img/contactUs/yx.png" style="width: 24px;height: 24px;">
                        <div style="color: #666666;font-size: 16px;padding-left: 6px;">wangshuai@zjyida.com.cn</div>
                      </div>
                    </div>
                </div>
                <img src="../assets/img/contactus/img1.jpg" style="width: 700px;height: 450px;">
            </div>
            <Footer></Footer>
        </div>
        
  </div>
</template>
<script>
import { goodsList } from '../utils/goodsList';
import { mapGetters } from 'vuex'
export default {
  name: "ContactUs",
  data() {
    return {
        goodsList,
        logos:[{
        title:'天猫',
        logo:require('@/assets/img/home/tm.png'),
        path:'https://zhongpuxing.tmall.com/shop/view_shop.htm?spm=pc_detail.29232929/evo365560b447259.shop_block.dentershop.500a7dd6cDLQqK'
      },
      {
        title:'淘宝',
        logo: require('@/assets/img/home/tb.png'),
        path:''
      },
      {
        title:'京东',
        logo:require('@/assets/img/home/jd.png'),
        path:'https://mall.jd.com/index-16587151.html?from=pc'
      },
      {
        title:'1688',
        logo:require('@/assets/img/home/1688.png'),
        path:'https://shop82v7v76420398.1688.com/page/index.html?spm=0.0.wp_pc_common_header_companyName_undefined.0'
      },
      {
        title:'拼多多',
        logo:require('@/assets/img/home/pdd.png'),
        path:''
      },
        ],
        checkLogo:9
    };
  },
    computed: {
    ...mapGetters(['goodType'])
  },
  mounted() {
 
  },
  methods:{
    go(path){
         window.location.href = path;
    },
    checkGoodType(index){
        this.$store.commit('setGoodType', index);
         this.$router.push('/productCenter');
         this.$store.commit('setNavType', '产品中心');
    }
  }
};
</script>
<style scoped>
.check{
    background-color:#1c6ca6 ;
}
#ContactUs{
    width: 100%;
    background-color: #f3f3f3;
}
.abouts_title{
    padding-top: 18px;
    font-size: 18px;
    color: #333333;
}
.abouts_text{
    font-size: 16px;
    color: #999999;
    padding-top: 6px;
}
.checkLog{
    background-color: #358dcf;
}
.log{
    background-color: #fff;
}
.content{
    width: 100%;
    height: calc(100vh - 250px);
    overflow-y: auto;
}
</style>

