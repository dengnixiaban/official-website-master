<template>
    <div class="good">

        <img class="goodImg" src="https://img0.baidu.com/it/u=775932288,286321380&fm=253&fmt=auto&app=138&f=PNG?w=767&h=393"
            alt="">
        <div style="padding-left:12px;font-size: 14px;font-weight: 700;padding-top: 4px;">
            苹果电脑
        </div>
        <div style="display:flex;font-size: 12px;color: #2c2c2c;padding-top: 4px;padding-left: 12px;">
            <div>16g / 库存： 100</div>
        </div>
        <div class="buy">
            <div style="color:#DF1331;font-size: 12px;font-weight: 700;">10000 积分</div>
            <button class="buyBtn">立即兑换</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "good",
    data() {
        return {};
    }
};
</script>
<style scoped>
.good {
    height: 222px;
    width: 175px;
    border-radius: 16px;
    background-color: #ffffff;
}

.goodImg {
    width: 100%;
    height: 139px;
    border-radius: 16px 16px 0 0;
}

.buy {
    padding: 12px 7px 12px 7px;
    display: flex;
    justify-content: space-between;
    width: 100%;

}

.buyBtn {
    width: 76px;
    height: 22px;
    background: linear-gradient(93.06deg, #DE6247 9.87%, #F78848 98.37%);
    font-size: 14px;
    color: #F8F8F8;
    border: 0px;
    border-radius: 100px;
}
</style>
  
  