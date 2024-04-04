<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/about_img.png">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>广州中检仪达实验器材有限公司</h3>
                    <p class=".text-justify">我公司是一家集研发、制造、销售为一体的实验室仪器及耗材生产厂商，产品包括：气体采样袋、采样管、采样瓶、滤筒滤膜、针式滤器、玻璃器皿、防护用品、标准品试剂、设备配件、色谱耗材、前处理耗材等；提供高品质、短交期、高性价比的一站式服务。</p>
                    <p class=".text-justify">公司本着：“一人为本，以客为尊，专业靠谱，服务至微”的经营理念，深耕环境、食品、汽车、建筑工程、化工等行业。为政府、第三方检测 、高校科研、各大生产企业等实验室，提供实验器材一站式管家服务，致力于成为国际一流的科学实验产品及服务平台。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CompanyIntroduction',
    data(){
        return{

        }
    },
    mounted(){
       
    }
}
</script>
<style scoped>
.banner{
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url('../assets/img/banner1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}
</style>

