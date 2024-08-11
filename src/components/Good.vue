<template>
    <div class="good">
        <img @click="buy(good)"  class="goodImg" :src="good.imageUrl"
            alt="">
        <div style="padding-left:12px;font-size: 14px;font-weight: 700;padding-top: 4px;">
            {{ good.name }}
        </div>
        <div style="display:flex;font-size: 12px;color: #2c2c2c;padding-top: 4px;padding-left: 12px;">
            <div>{{ good.size }} / 库存： {{ good.number }}</div>
        </div>
        <div class="buy">
            <div style="color:#DF1331;font-size: 12px;font-weight: 700;">{{ good.needPoints }} 积分</div>
            <button @click="buy(good)" class="buyBtn">立即兑换</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "good",
    props:{
        'good':{
            type: Object,
        }
    },
    data() {
        return {
        
        };
    },
    methods:{
        buy(data){
            this.$emit('buy',data)
        }
    }
};
</script>
<style scoped>
.good {
    height: 222px;
    width: 175px;
    border-radius: 16px;
    background-color: #ffffff;
    margin-top: 12px;
    box-shadow: 0px 4px 4px 0px #00000014;
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
  
  