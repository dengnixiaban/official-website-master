<template>
  <div id="container">
    <div style="width: 100%;height: 100%;background-color: aliceblue;">
      <router-view />
    </div>
    <tabber></tabber>
  </div>
</template>
<script>
import tabber from "../components/Tabbar.vue";
export default {
  name: "HomePage",
  components:{
    tabber
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
  #container{
    width: 100%;
    height: 100%;
    background-color: black;
  }

</style>
