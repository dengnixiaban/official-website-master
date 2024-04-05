<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="point-gift" to="/moble/cell-mall">积分商城</van-tabbar-item>
      <van-tabbar-item icon="records" to="/moble/cell-record">积分记录</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/moble/cell-mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tabber",
  data() {
    return {
        active:0
    };
  },
  mounted() {}
};
</script>
<style scoped></style>
