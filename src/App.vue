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
