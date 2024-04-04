<template>
  <div id="footer">
    <div class="logo">
      <!-- <img src="@/assets/img/logo_white.png" alt="logo图"> -->
    </div>
    <p class="title">广州中检仪达实验器材有限公司</p>
    <p class="address_tel_fax">
      <span>地址：广州市白云区江夏北中路强盛商务大厦</span>
      <span>Tel：18328501489</span>
      
    </p>
    <p class="email_wx">
      <span>邮箱：zhongjianyida@163.com</span>
      <span>公司微信号：HE-W07110509</span>
    </p>
    <!-- <p class="copy">Copyright &copy; 2018 - 2019 公司名称公司名称</p> -->
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
  
}
.logo {
  width: 95px;
  height: 20px;
  margin: 10px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

