<template>
    <div id="Software" class="container">
        <div class="row">
            <div class="contentImg">
                <div class="imgDiv">
                    <img src="https://gw.alicdn.com/bao/uploaded/i1/2214331328448/O1CN01COth7L2CHEp4Fye5Y_!!2214331328448.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/CQD.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/CQD01.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/TFL01.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/TFL02.png" alt="" class="goodsImg" />
                </div>
            </div>
            <div class="contentImg">
                <div class="imgDiv">
                    <img src="../assets/img/goods/CYD01.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/LBD.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/XBD.png" alt="" class="goodsImg" />
                </div>
                <div class="imgDiv">
                    <img src="../assets/img/goods/TFL02.png" alt="" class="goodsImg" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Software',
    data(){
        return{
         
        }
    },
  
}
</script>
<style scoped>
.container{

    
}
#left{
    margin: 50px 0;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
.goodsImg{
    width: 200px;
    height: 200px;
}
.contentImg{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 280px;
}
.imgDiv{
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:aliceblue;
}
.row{
    height: 540px;
    width: 100%;
    overflow-y: auto;
}
</style>

