<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view />
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
html,body{
  width:100%;
  height:100%;
}
.content {
  width: 100%;
  height: 100%;
}
</style>
