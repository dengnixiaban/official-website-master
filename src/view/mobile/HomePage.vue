<template>
  <div class="homepage_m">
    <div style="width: 100%;display: flex;justify-content: center;align-items: center;padding-top:48px;">
      <img src="../../assets/img/home/logo.png" style="width: 320px;">
    </div>
    <div style="color: #333333;display: flex;justify-content: center;padding-top: 48px;">
      <div>
        <div style="font-size: 24px;">您的实验器材管家</div>
            <div style="font-size: 16px;padding-top: 16px;">省心、省力、省时</div>
            <div style="font-size: 12px;padding-top: 16px;color: #999999;">Your laboratory equipment manager:</div>
            <div style="font-size: 12px;color: #999999;">Easy, effortless, and time-saving</div>
            <div style="padding-top: 40px;display: flex;font-size: 12px;color: #999999;">
                <div style="display: flex;">
                   <img src="../../assets/img/home/phone.png" style="width: 14px;height: 14px;" alt=""> 
                   <div style="padding-left: 8px;">13828810709</div>
                </div>
                <div style="display: flex;padding-left: 48px;">
                  <img src="../../assets/img/home/mail.png" style="width: 14px;height: 14px;" alt=""> 
                  <div style="padding-left: 8px;">wangshuai@zjyda.com.cn</div>
                </div>
           </div>
      </div>
            
    </div>
    <div style="padding-top: 24px;">
        <van-tabs v-model="activetab" background="transparent" color="#358dcf" title-active-color="#358dcf">
          <van-tab title="品牌介绍">
            <div style="background-color:rgba(255, 255, 255, 0.5);padding: 18px;color: #333333;">
              <div>我公司是一家集研发、制造、销售为一体的实验室仪器及耗材生产厂商，产品包括:气体采样袋、采样管、采样瓶、滤筒滤膜、针式滤器、玻璃器皿、防护用品、标准品试剂设备配件、色谱耗材、前处理耗材等:提供高品质、短交期、高性价比的一站式服务。</div>
            <div style="padding-top: 18px;">
              <div>
                1.自主研发与品质控制
              </div>
              <div>
                旗下中谱星品牌拥有多项专利技术，核心产品通过CNAS、CE、FDA认证。严格遵循IS0 9001质量管理体系，从原材料到成品全程质控。
              </div>
            </div>
            <div style="padding-top: 18px;">
              <div>
                2.全渠道销售网络
              </div>
              <div>
                线上电商:覆盖天猫、京东、1688等平台，提供便捷采购体验。
              </div>
                <div>
                线下经销:与全国500+经销商合作，快速响应区域需求。
              </div>
                <div>
                外贸出口:产品远销东南亚、欧洲、非洲，服务全球实验室。
              </div>
            </div>
             <div style="padding-top: 18px;">
              <div>
                3.品牌愿景
              </div>
              <div>
                “精准成就未来,让环境检测更轻松”为使命，持续推动检测技术智能化，国产化"，助力全球科学研究和产业升级。
              </div>
            </div>
             <div style="padding-top: 18px;">
              <div>
              4.公司本着
              </div>
              <div>
               "以人为本，以客为尊，专业靠谱，服务至微”的经营理念，深耕环境、食品、汽车、建筑工程、化工等行业。为政府、第三方检测、高校科研、各大生产企业等实验室，提供实验器材一站式管家服务，致力于成为国际一流的科学实验产品及服务平台。
              </div>
            </div>
           </div>
          </van-tab>
          <van-tab title="电商销售渠道">

            <div style="width: 100%;height: 390px; display: flex;justify-content: space-between;align-items: center;padding: 40px;background-color:rgba(255, 255, 255, 0.5);">
                <div class="logsItem" v-for="(item, index) in logos" :key="index" >
                    <img  :src="item.logo" @click="goStore(item.path)" style="width: 40px;height: 40px;">
                    <div class="logsTitle" style="width: 100%;height: 30px;display: flex;justify-content: center;align-items: center;">
                      <div>
                        {{ item.title }}
                      </div>
                    </div>
                </div>
                    
            </div>
          </van-tab>
          <van-tab title="商品售后保证">
              <div style="padding: 16px;background-color:rgba(255, 255, 255, 0.5);height: 390px;">
                    <div>
                      <div style="font-size: 12px;color: #333333;">
                        符合以下条件，可以要求换货
                      </div>
                      <div style="font-size: 12px;">
                        客户在收到货物时当面在送货员面前拆包检查，发现货物有质量问题的;
                      </div>
                      <div style="font-size: 12px;">
                        换货流程:客户当面要求送货人员退回货物，然后与我们联系。我们会为您重新发货，货物到达时间顺延。
                      </div>
                    </div>
                    <div style="padding-top: 20px;">
                      <div style="font-size: 16px;color: #333333;">
                        符合以下条件，可以要求退货
                      </div>
                      <div style="font-size: 12px;">
                        客户收到货物后两天之内，发现商品有明显的制造缺陷的;
                      </div>
                      <div style="font-size: 12px;">
                        货物经过一次换货但仍然存在质量问题的;
                      </div>
                      <div style="font-size: 12px;">
                        退货流程:客户在收到货物后两天内与我们联系，我们会在三个工作日内通过银行汇款把您的货款退回。
                      </div>
                    </div>
                    <div style="padding-top: 20px;">
                      <div style="font-size: 16px;color: #333333;">
                        在以下情况我们有权拒绝客户的退换货要求
                      </div>
                      <div style="font-size: 12px;">
                        货物出现破损，但没有在收货时当场要求送货人员换货的;
                      </div>
                      <div style="font-size: 12px;">
                        超过退换货期限的退换货要求;
                      </div>
                      <div style="font-size: 12px;">
                        退换货物不全或者外观受损；
                      </div>
                      <div style="font-size: 12px;">
                        客户发货单据丢失或者不全；
                      </div>
                      <div style="font-size: 12px;">
                        产品并非我们提供；
                      </div>
                      <div style="font-size: 12px;">
                        货物本身不存在质量问题的。
                      </div>
                    </div>
                  </div>
          </van-tab>
         
        </van-tabs>
    </div>
    <div id="whyChooseUs" >
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p style="font-size: 30px;color:#333333;">我们的优势</p>
          <p style="font-size: 16px;color: #999999;">Our advantages</p>
        </div>
      </div>
      <div style="width: 100%;height: 200px;display: flex;justify-content: space-between;padding: 12px;">
          <div v-for="(item,index) in serverList" :key="index" style="width: 100px;height: 100px;border: 1px solid #999999;"  class="serveList" @click="go(item.path,index)">
            <div style="width: 100px;padding-top: 18px;display: flex;justify-content: center;">
               
                 <img :src="item.logo" style="width: 24px;height: 24px;">
            </div>
            <div class="serveTitle" style="width: 100px;padding-top: 12px;display: flex;justify-content: center;font-size: 14px;">
                <div>{{ item.title }}</div>
            </div>
          </div>
      </div>
    </div>
    <div style="width: 100%;height: 24px; display: flex;justify-content: center;font-size: 12px;color: #666666;padding-top: 12px;padding-bottom: 6px;">备案号:粤ICP备2023015710号</div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      activetab:1,
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
     
      ],
      serverList: [
        {
          logo: require("@/assets/img/home/zx.png"),
          logos: require("@/assets/img/home/zxs.png"),
          title: "工厂直销",
          content1: "我们是厂家直销",
          content2: "品质更好，价格更优",
          path:'/m-aboutUs'
        },
        {
          logo: require("@/assets/img/home/pl.png"),
          logos: require("@/assets/img/home/pls.png"),
          title: "品类齐全",
          content1: "我们共计拥有上千种产品，",
          content2: "满足客户所有需求",
          path:'/m-productCenter'
        },
        {
          logo: require("@/assets/img/home/dz.png"),
          logos: require("@/assets/img/home/dzs.png"),
          title: "定制化服务",
          content1: "我们可以为客户提供定制化产品",
          content2: "根据客户需求研发生产",
          path:'/m-contact'
        },
        {
          logo: require("@/assets/img/home/wy.png"),
          logos: require("@/assets/img/home/wys.png"),
          title: "售后无忧",
          content1: "7X24小时售后服务，",
          content2: "及时响应，提供有效服务"
        }
      ],
    };
  },
  methods:{
  goStore(path){
    window.location.href = path;
  },
  goDetails(data){
    this.$router.push({
      path: '/productDetails',
      query: {
        details: JSON.stringify(data)
      }
    });
  },
  go(path,index){
    if(index== 0){
       this.$store.commit('setNavType', '关于我们');
    }else if(index == 1 ){
      this.$store.commit('setNavType', '产品中心');
    }else{
      this.$store.commit('setNavType', '联系我们');
    }
   
    this.$router.push({
      path: path,
    });
  }
}
};
</script>
<style scoped>
.homepage_m{
  width: 100%;
  height: 100%;
  
  background: url(../../assets/img/home/bg1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center
}
/* 为什么选择我们 */
#whyChooseUs {
  background-color:#f3f3f3 ;
  padding-top: 20px;
}
.product{
  width: 200px;
  height: 72px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;
}
.productText{
  color: #999999;
  border: 1px solid #999999;
}
.productTextSelected{
  color: #ffffff;
  background-color: #358dcf;
}
.serveLists {
  background-color: #358dcf;
  color: #ffffff;
}
.serveList {
  color: #999999;
}
.serveTitle{
  color: #666666;
}
.serveTitles{
  color: #ffffff;
}
.productItem:hover{
  background-color: #ffffff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform: scale(1.03);
}
.logsItem:hover{
  color: #358dcf;
}
</style>