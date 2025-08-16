<template>
  <div class="content" style="height: 84px;padding-top: 24px;">
        <van-tabbar v-model="active" :fixed="false" route>
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
.content{

}
</style>