<template>
  <!-- 头部整体盒子 -->
  <div id="header">
    <!-- 头部顶部 -->
  
    <img src="../assets/img/home/logo.png" style="width: 354px;height: 90px;">
    <div style="display: flex;">
        <div  class="navMenuItem" v-for="(item,index) in navList" :key="index" @click="navClick(item,item.name)">
           <div :class="navType == item.name ? 'activeMenu':'navText'"  style="padding-bottom: 5px;">
             {{ item.name }}
           </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "产品中心",
          path: "/productCenter",
        },
        {
          name: "关于我们",
          path: "/aboutUs",
        },
        {
          name: "技术支持",
          path: "/support",
        },
        {
          name: "联系我们",
          path: "/contact",
        },
      ]
    };
  },
  computed: {
    ...mapGetters(['navType'])
  },
  methods: {
    navClick(item, name) {
      this.$store.commit('setNavType', name)
     this.$router.push(item.path);

    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  padding: 60px 298px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 999;
}
.activeMenu{
  font-weight: 700;
  border-bottom: 3px solid #358dcf;
}
.navMenuItem {
  padding: 5px 20px;
  cursor: pointer;
  font-size: 20px;
}

.navText {
  display: inline-block;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
}

.navMenuItem:hover .navText {
  border-bottom: 3px solid #358dcf;
  font-weight: 700;
}

</style>
