<template>
  <div id="app">
    <Header v-if="!isMob"></Header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isMob:false
    }
  },
  created(){
    
   this.isMob=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
   if(this.$route.path==='/'||this.$route.path==='/moble'){
    if(this.isMob){
      this.$router.replace('/moble/cell-mall')
    }else{
      this.$router.replace('/')
    }
   }
  },
  mounted(){
    this.adjustZoomForLaptop();
  },
  methods:{
    adjustZoomForLaptop() {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        // 粗略判断：屏幕尺寸小于等于 15.6 寸（常见笔记本分辨率）
        const isLaptop = (screenWidth < 1920 && screenHeight < 1080);

        if (isLaptop) {
          document.body.style.zoom = '80%'; // 页面缩放
        }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
}
</style>
