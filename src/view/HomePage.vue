<template>
  <div id="HomePage">
      <div class="main_view">
        <transition name="fade" mode="out-in">
          <div
            class="bg-image"
            :key="current" 
            :style="{ backgroundImage: `url(${backgrounds[current]})` }"
          ></div>
        </transition>


        <div style="position: absolute;top: 300px;left: 298px;color: #333333;">
            <div style="font-size: 60px;">您的实验器材管家</div>
            <div style="font-size: 32px;padding-top: 36px;">省心、省力、省时</div>
            <div style="font-size: 20px;padding-top: 36px;color: #999999;">Your laboratory equipment manager:</div>
            <div style="font-size: 20px;color: #999999;">Easy, effortless, and time-saving</div>
            <div style="padding-top: 120px;display: flex;font-size: 18px;color: #999999;">
                <div style="display: flex;">
                   <img src="../assets/img/home/phone.png" style="width: 24px;height: 24px;" alt=""> 
                   <div style="padding-left: 8px;">13828810709</div>
                </div>
                <div style="display: flex;padding-left: 48px;">
                  <img src="../assets/img/home/mail.png" style="width: 24px;height: 24px;" alt=""> 
                  <div style="padding-left: 8px;">wangshuai@zjyda.com.cn</div>
                </div>
           </div>
        </div>
       


    </div>

    <div style="width: 100%;padding: 0 260px;height: 640px;position: absolute;top: 1000px;">
      <div style="width: 100%;display: flex; justify-content: center;">
        <div style="width: 1400px;">
           <div style="display: flex;font-size: 20px;">
                <div :class="checkIntro==1?'introtextActive':'introtext'" @click="checkIntro = 1" style="width: 240px;height: 80px;border-top-left-radius: 18px;display: flex;justify-content: center;align-items: center;">
                  <div>品牌介绍</div>
                </div>
                <div :class="checkIntro==2?'introtextActive':'introtext'" @click="checkIntro = 2" style="width: 240px;height: 80px;margin-left: 4px;display: flex;justify-content: center;align-items: center;">
                  <div>电商销售渠道</div>
                </div>
                <div :class="checkIntro==3?'introtextActive':'introtext'" @click="checkIntro = 3" style="width: 240px;height: 80px;border-top-right-radius: 18px;margin-left: 4px;display: flex;justify-content: center;align-items: center;">
                  <div>商品售后保障</div>
                </div>
            </div>
        </div>
         
      </div>
      <div style="width: 100%;display: flex; justify-content: center;font-size: 16px;color: #999999;">
         <div class="card-shadow" style="width: 1400px;height: 560px;background-color: #ffffff;border-bottom-left-radius: 18px;border-bottom-right-radius: 18px;border-top-right-radius: 18px;padding: 54px 74px;">
           <div v-if="checkIntro == 1">
              <div>我公司是一家集研发、制造、销售为一体的实验室仪器及耗材生产厂商，产品包括:气体采样袋、采样管、采样瓶、滤简滤膜、针式滤器、玻璃器皿、防护用品、标准品试剂设备配件、色谱耗材、前处理耗材等:提供高品质、短交期、高性价比的一站式服务。</div>
            <div style="padding-top: 48px;">
              <div>
                1.自主研发与品质控制
              </div>
              <div>
                旗下中谱星品牌拥有多项专利技术，核心产品通过CNAS、CE、FDA认证。严格遵循IS0 9001质量管理体系，从原材料到成品全程质控。
              </div>
            </div>
            <div style="padding-top: 36px;">
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
             <div style="padding-top: 36px;">
              <div>
                3.品牌愿景
              </div>
              <div>
                “精准成就未来,让环境检测更轻松”为使命，持续推动检测技术智能化，国产化"，助力全球科学研究和产业升级。
              </div>
            </div>
             <div style="padding-top: 36px;">
              <div>
              4.公司本着
              </div>
              <div>
               "以人为本，以客为尊，专业靠谱，服务至微”的经营理念，深耕环境、食品、汽车、建筑工程、化工等行业。为政府、第三方检测、高校科研、各大生产企业等实验室，提供实验器材一站式管家服务，致力于成为国际一流的科学实验产品及服务平台。
              </div>
            </div>
           </div>
          <div v-if="checkIntro == 2">
              <div style="width: 100%;height: 100px;display: flex;justify-content: center;align-items: center;">
                    <div style="font-size: 18px;color: #333333;font-size: 18px;">点击图标打开店铺</div>
              </div>
              <div style="width: 100%;height: 320px;display: flex;justify-content: space-between;align-items: center;padding: 80px;">
                <div v-for="(item, index) in logos" :key="index" >
                    <img  :src="item.logo" @click="goStore(item.path)" style="width: 80px;height: 80px;">
                    <div style="width: 100%;height: 60px;display: flex;justify-content: center;align-items: center;color: #333333;">
                      <div>
                        {{ item.title }}
                      </div>
                    </div>
                </div>
                    
              </div>
          </div>
          <div v-if="checkIntro == 3">
              <div style="width: 100%;height: 100%;padding: 32px;display: flex;">
                  <div>
                    <div>
                      <div style="font-size: 18px;color: #333333;">
                        符合以下条件，可以要求换货
                      </div>
                      <div style="font-size: 16px;">
                        客户在收到货物时当面在送货员面前拆包检查，发现货物有质量问题的;
                      </div>
                      <div style="font-size: 16px;">
                        换货流程:客户当面要求送货人员退回货物，然后与我们联系。我们会为您重新发货，货物到达时间顺延。
                      </div>
                    </div>
                    <div style="padding-top: 60px;">
                      <div style="font-size: 18px;color: #333333;">
                        符合以下条件，可以要求退货
                      </div>
                      <div style="font-size: 16px;">
                        客户收到货物后两天之内，发现商品有明显的制造缺陷的;
                      </div>
                      <div style="font-size: 16px;">
                        货物经过一次换货但仍然存在质量问题的;
                      </div>
                      <div style="font-size: 16px;">
                        退货流程:客户在收到货物后两天内与我们联系，我们会在三个工作日内通过银行汇款把您的货款退回。
                      </div>
                    </div>
                    <div style="padding-top: 60px;">
                      <div style="font-size: 18px;color: #333333;">
                        在以下情况我们有权拒绝客户的退换货要求
                      </div>
                      <div style="font-size: 16px;">
                        货物出现破损，但没有在收货时当场要求送货人员换货的;
                      </div>
                      <div style="font-size: 16px;">
                        超过退换货期限的退换货要求;
                      </div>
                      <div style="font-size: 16px;">
                        退换货物不全或者外观受损；
                      </div>
                      <div style="font-size: 16px;">
                        客户发货单据丢失或者不全；
                      </div>
                      <div style="font-size: 16px;">
                        产品并非我们提供；
                      </div>
                      <div style="font-size: 16px;">
                        货物本身不存在质量问题的。
                      </div>
                    </div>
                  </div>
                  <div style="height: 400px;width: 440px; display: flex;justify-content: center;align-items: center;">
                    <div>
                       <div>
                       <img src="../assets/img/home/sh.png"  style="width: 360px;height: 360px;">
                      </div>
                      <div style="padding-top: 24px;padding-left: 36px;">
                        工作时间:周一至周五 8:30-18:00
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
     
       
    </div>

    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" >
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p style="font-size: 30px;color:#333333;">我们的优势</p>
          <p style="font-size: 16px;color: #999999;">Our advantages</p>
        </div>
      </div>
      <div style="width: 100%;height: 463px;padding: 86px 260px 140px 260px;display: flex;justify-content: space-between;">
          <div v-for="(item,index) in serverList" :key="index" style="width: 300px;height: 377px;border: 1px solid #999999;"  :class="serveType == index ?'serveLists' : 'serveList'"  @mouseover="serveType = index" @mouseleave="serveType = 9">
            <div style="width: 300px;padding-top: 78px;display: flex;justify-content: center;">
                <img v-if="serveType == index" :src="item.logos" style="width: 48px;height: 48px;">
                 <img v-else :src="item.logo" style="width: 48px;height: 48px;">
            </div>
            <div :class="serveType == index ? 'serveTitles' : 'serveTitle'" style="width: 300px;padding-top: 36px;display: flex;justify-content: center;font-size: 28px;">
                <div>{{ item.title }}</div>
            </div>
            <div style="width: 300px;padding-top: 36px;display: flex;justify-content: center;font-size: 16px;">
                <div>{{ item.content1 }}</div>
            </div>
             <div style="width: 300px;padding-top: 36px;display: flex;justify-content: center;font-size: 16px;">
                <div>{{ item.content2 }}</div>
            </div>
          </div>
      </div>
    </div>
    <!-- 产品中心 -->
     <div style="width: 100%;padding: 100px 260px 140px 260px;height: 1300px;background-color:#f3f3f3 ;">
             <div class="container">
                <div class="whyChooseUs-title text-center">
                  <p style="font-size: 30px;color:#333333;">产品中心</p>
                  <p style="font-size: 16px;color: #999999;">Product Center</p>
                </div>
            </div>
            <div style="width: 100%;height: 1200px; padding-top: 86px;display: flex">
              <div>
                 <div v-for="(item , index) in productTypes" :key="index"
                   @click="typeSelected = index "
                  :class="typeSelected == index ? 'product productTextSelected':'product productText'" >
                   <div>{{ item }}</div>
                </div>
              </div>
              <div style="width: 1300px;height: 900px; display: flex; flex-wrap: wrap;padding-left: 100px;overflow: auto;align-content: flex-start;gap: 18px;">
                    <div v-for="(item , index ) in goodsList[typeSelected].goods" :key="index" style="width: 205px;height: 265px;margin-bottom: 20px;margin-left: 20px;">
                        <img @click="goDetails(item)" :src="item.imgMain" style="width: 205px;height: 205px;">
                        <div style="width: 205px;height: 60px;display: flex;justify-content: center;align-items: center;font-size: 16px;color: #999999;">
                              <div>{{ item.name }}</div>
                        </div>
                    </div>
               </div>
            </div>
        
     </div>
     <Footer></Footer>
  </div>
</template>
<script>
import { goodsList } from '../utils/goodsList';
export default {
  name: "HomePage",
  data() {
    return {
        backgrounds: [
        require('@/assets/img/home/bg1.jpg'),
         require('@/assets/img/home/bg2.jpg'),
         require('@/assets/img/home/bg3.jpg'),
      ],
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
      current: 0,
      timer: null,
    
      serverList: [
        {
          logo: require("@/assets/img/home/zx.png"),
          logos: require("@/assets/img/home/zxs.png"),
          title: "工厂直销",
          content1: "我们是厂家直销",
          content2: "品质更好，价格更优"
        },
        {
          logo: require("@/assets/img/home/pl.png"),
          logos: require("@/assets/img/home/pls.png"),
          title: "品类齐全",
          content1: "我们共计拥有上千种产品，",
          content2: "满足客户所有需求"
        },
        {
          logo: require("@/assets/img/home/dz.png"),
          logos: require("@/assets/img/home/dzs.png"),
          title: "定制化服务",
          content1: "我们可以为客户提供定制化产品",
          content2: "根据客户需求研发生产"
        },
        {
          logo: require("@/assets/img/home/wy.png"),
          logos: require("@/assets/img/home/wys.png"),
          title: "售后无忧",
          content1: "7X24小时售后服务，",
          content2: "及时响应，提供有效服务"
        }
      ],
      checkIntro:1,
      productTypes:['气体采样袋','气体采样管','滤膜滤筒','水质采样','土壤采样','低浓度颗粒物采样','仪器配件'],
      typeSelected:0,
      serveType:9,
      goodsList
      
    };
  },
 mounted() {
  console.log(goodsList);
  
  this.timer = setInterval(() => {
    this.current = (this.current + 1) % this.backgrounds.length;
  }, 15000); 
},
beforeDestroy() {
  clearInterval(this.timer);
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
  }
}
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
  height: 100%;
}

.main_view{
  position: relative;
  width: 100%;
  height: 1200px;
  overflow: hidden;
  background: linear-gradient(-152deg, #c0dbef, #ffffff); /* 背景渐变 */
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease;
}

/* 渐显渐隐过渡 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s ease; /* ✅ 动画时间稍长，1.2s */
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 品牌介绍 */
.introtext{
  background-color:#358dcf ;
  color: #ffffff;
}
.introtextActive{
  background-color:#ffffff ;
  color: #666666;
}

.card-shadow {

  /* 阴影 */
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
  /* 兼容小程序和H5，需设置 display */
}

/* 为什么选择我们 */
#whyChooseUs {
  padding-bottom: 50px;
  background-color:#f3f3f3 ;
  padding-top: 600px;
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
</style>

