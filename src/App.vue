<template>
  <div id="app">
    <Header v-if="!isMob"></Header>
    <div :class="isMob ? 'contentm' : 'content'">
      <router-view />
    </div>

    <Tabbar v-if="isMob"></Tabbar>
    
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
}, 
  data(){
    return {
      isMob:false
    }
  },
  created(){
   this.isMob=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
   if(this.isMob){
      this.$router.replace('/m-home')
    }else{
      this.$router.replace('/')
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
.contentm {
  width: 100%;
  height: calc(100% - 84px);
  overflow-y: auto;
}

</style>
