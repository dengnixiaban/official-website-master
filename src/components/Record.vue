<template>
    <div class="good">
        <div style="height:78px;display: flex;">
            <img v-if="item.increasedPoints < 0" class="goodImg" :src="item.prizeEntity.imageUrl" alt="">
            <img v-else class="goodImg" src="../assets/img/coin.png" alt="">
            <div style="padding-left: 10px;">
                <div v-if="item.increasedPoints < 0" style="font-size: 14px;font-weight: 700;">
                    {{ item.prizeEntity.name }}
                </div>
                <div v-if="item.increasedPoints < 0" style="font-size: 12px;color: #4B4B4B;padding-top: 12px;">
                    {{ item.prizeEntity.size }}
                </div>
                <div style="font-size: 12px;color: #4B4B4B;padding-top: 12px;">
                    成交时间：{{ item.createTime.substring(0, 10) }}
                </div>
                <div v-if="item.increasedPoints > 0"
                    style="padding-left:10px;font-size: 12px;color:green;padding-top: 32px;">
                    增加积分：
                </div>
            </div>

        </div>

        <div>
            <div style="padding-left:10px;font-size: 12px;color:blueviolet;padding-top: 12px;text-align: right;">
                交易成功
            </div>
            <div v-if="item.increasedPoints > 0" style="padding-left:10px;font-size: 12px;color:green;padding-top: 32px;">
                {{ item.increasedPoints }}
            </div>
            <div v-else style="padding-left:10px;font-size: 12px;color: red;padding-top: 32px;">
                兑换积分：{{ item.increasedPoints }}
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "good",
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {};
    }
};
</script>
<style scoped>
.good {
    height: 98px;
    width: 365px;
    border-radius: 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 4px 4px 0px #00000014;
    margin-top: 12px;
}

.goodImg {
    width: 78px;
    height: 78px;
    border-radius: 16px;
}
</style>
  
  