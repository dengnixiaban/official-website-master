<template>
  <div id="ContactUs">
        <div style="">
             <img src="../../assets/img/aboutUs/bg.jpg" style="width: 100%;height: 180px;">
            <div style="width: 100%; padding: 12px">
                <div style="width: 100%;background-color: #fff;padding:10px;">
                    <div class="abouts_title">
                        我公司是一家集研发、制造、销售为一体的实验室仪器及耗材生产厂商，产品包括:气体采样袋、采样管、采样瓶、滤简滤膜、针式滤器、玻璃器皿、
                    </div>
                    <div class="abouts_title">
                        防护用品、标准品试剂、设备配件、色耗材、前处理耗材等;提供高品质、短交期、高性价比的一站式服务。
                    </div>
                    <div class="abouts_title">
                        1.自主研发与品质控制
                    </div>
                    <div class="abouts_text">
                        旗下中谱星品牌拥有多项专利技术，核心产品通过CNAS、CE、FDA认证。严格遵循IS09001质量管理体系，从原材料到成品全程质控。
                    </div>
                    <div class="abouts_title">2.全渠道销售网络</div>
                    <div class="abouts_text">线上电商:覆盖天猫、京东、1688等平台，提供便捷采购体验。</div>
                    <div class="abouts_text">线下经销:与全国500+经销商合作，快速响应区域需求。</div>
                    <div class="abouts_text">外贸出口:产品远销东南亚、欧洲、非洲，服务全球实验室。</div>
                    <div class="abouts_title">3.品牌愿景</div>
                    <div class="abouts_text">“精准成就未来,让环境检测更轻松”为使命，持续推动检测技术智能化、国产化，助力全球科学研究和产业升级。</div>
                    <div class="abouts_title">4.公司本着</div>
                    <div class="abouts_text">“一人为本，以客为尊，专业靠谱，服务至微”的经营理念，深耕环境、食品、汽车、建筑工程、化工等行业。为政府、第三方检测、高校科研、各大生产企业等实验室，</div>
                    <div class="abouts_text">供实验器材一站式管家服务，致力于成为国际一流的科学实验产品及服务平台。</div>
                </div>
                <div style="width: 100%;height: 240px;padding-top: 36px;display: flex;justify-content: space-between;">
                    <div style="width: 30%;height: 240px;background-color: #fff;padding: 10px; ">
                        <div style="width: 100%;padding-top: 34px;display: flex;justify-content: center;">
                            <div style="font-size: 24px;color: #358dcf;">使命</div>
                        </div>
                        <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                            <div style="font-size: 20px;color: #999999;">MISSION</div>
                        </div>
                        <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                            <div style="font-size: 12px;color: #666666;padding-top: 10px;">精准成就未来，环境检测更轻松</div>
                        </div>
                    </div>
                    <div style="width: 30%;height: 240px;background-color: #fff; padding: 10px;">
                        <div style="width: 100%;padding-top: 34px;display: flex;justify-content: center;">
                            <div style="font-size: 24px;color: #358dcf;">愿景</div>
                        </div>
                        <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                            <div style="font-size: 20px;color: #999999;">VISION</div>
                        </div>
                        <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                            <div style="font-size: 12px;color: #666666;padding-top: 10px;">打造为国内顶尖、全球卓越的生物医疗实验,用品一站式综合服务提供商</div>
                        </div>
                        
                    </div>
                    <div style="width:30%;height: 240px;background-color: #fff;padding: 10px; ">
                        <div style="width: 100%;padding-top: 34px;display: flex;justify-content: center;">
                            <div style="font-size: 24px;color: #358dcf;">价值观</div>
                        </div>
                        <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                            <div style="font-size: 20px;color: #999999;">VALUES</div>
                        </div>
                        <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                            <div style="font-size: 12px;color: #666666;padding-top: 10px;">以人为本，以客为尊,</div>
                        </div>
                        <div style="width: 100%;display: flex;justify-content: center;">
                            <div style="font-size: 12px;color: #666666;padding-top: 4px;">专业靠谱，服务至微</div>
                        </div>
                    </div>
                </div>
                <div style="width: 100%;padding-top: 48px;display: flex;justify-content: center;">
                    <div style="font-size: 60px;">营销渠道</div>
                </div>
                <div style="width: 100%;padding-top: 14px;display: flex;justify-content: center;">
                    <div style="font-size: 32px;color: #999999;">MARKETING CHANNELS</div>
                </div>
                <div  style="width: 100%;display: flex;justify-content: space-between;padding-top: 26px;padding-bottom: 60px;">
                    <div v-for="(item , index) in logos" :key="index"  style="width: 258px;height: 258px;display: flex;justify-content: center;align-items: center;cursor: pointer;" :class="checkLogo == index?'checkLog':'log'" 
                        @mouseenter="checkLogo = index"
                        @mouseleave="checkLogo = 9"
                        @click="go(item.path)"
                    >
                        <img :src="item.logo" style="width: 80px;height: 80px;">
                    </div>
                </div>
            </div>    
        </div>
        
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "ContactUs",
  data() {
    return {
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

</style>
