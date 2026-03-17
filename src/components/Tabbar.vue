<template>
  <div  style="height: 48px;background-color: #358dcf;">
        <van-tabbar v-model="active" :fixed="false" active-color="#fff" inactive-color="#fff" route style="background-color: #358dcf;">
            <van-tabbar-item to="/m-home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/m-productCenter" icon="shop-o">产品中心</van-tabbar-item>
            <van-tabbar-item to="/m-aboutUs" icon="like-o">关于我们</van-tabbar-item>
            <van-tabbar-item to="/m-contact" icon="contact-o">联系我们</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style scoped>

.van-tabbar-item--active {
  background-color: #1c6ca6; /* 选中背景色 */
  color: #fff !important;    /* 选中字体颜色 */
}
</style>