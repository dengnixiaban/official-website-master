<template>
    <div>
        <div class="userMine">
            <div style="padding-top: 56px;font-size: 16px;font-weight: 700;text-align: center;color: #FCFCFC;">个人中心</div>
            <div style="padding-top:40px;padding-left:34px;">
                <a style="font-size: 14px;color:#FCFCFC">请登录</a>
                <div style="font-size: 16px;color:#FCFCFC">阿伟</div>
                <div style="font-size: 12px;color:#FCFCFC">账号:515133135</div>

            </div>
            <div style="width: 100%;display: flex;justify-content: center;position: absolute;bottom:15px;">
                <div
                    style="width: 365px;height: 57px;background: linear-gradient(89.31deg, #FFD447 -24.14%, #FF8D39 99.77%);border-radius: 8px 8px 0 0;padding: 16px 12px 0 12px;display: flex;justify-content: space-between;">

                    <div style="display:flex;height:24px;padding-left: 14PX;align-items: center;">
                        <img src="../assets/img/mall-icon.png" style="width: 24px;height: 24px;">
                        <div style="font-size: 14px;color: #FEFFFF;">可用积分:</div>
                        <div style="color:cadetblue ;padding-left: 5px;font-size: 16px;font-weight: 700;">999</div>
                    </div>
                    <div style="font-size: 16px;color:#FCFCFC">
                        公司名称
                    </div>
                </div>

            </div>
            <div style="width:100vw ;height:377px;padding:12px;margin-top: 90px;">
                <div class="info">
                    <div style="font-size:16px ;color:#000000;padding-left: 14px;">收货信息</div>
                    <div style="font-size:14px ;color:#000000;padding-top: 16px;padding-left: 14px;">收货姓名：</div>
                    <van-field v-model="info.userName" placeholder="请输入收货姓名" />
                    <div style="font-size:14px ;color:#000000;padding-top: 16px;padding-left: 14px;">收货电话：</div>
                    <van-field v-model="info.userName" placeholder="请输入收货电话" />
                    <div style="font-size:14px ;color:#000000;padding-top: 16px;padding-left: 14px;">收货地址：</div>
                    <van-field v-model="info.userName" placeholder="请输入收货地址" />
                    <div style="width: 100%;display:flex;justify-content: center;padding-top: 31px;">
                        <div class="info-btn">
                            <div>确认信息</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <van-dialog v-model="show" :show-confirm-button="false" width="366px">
            <div
                style="width: 366px;height:394px;border-redius:12px;margin-top: -1px;position: relative;background: linear-gradient(178.73deg, #FFC444 -81.83%, #EEEEEE 98.91%);">
                <img src="../assets/img/login.png"
                    style="width: 126px;height:116px;position: absolute;top: 31px;right: 30px;">
                <div @click="show = false" style="position: absolute;top: 18px;right: 18px;">关闭</div>
                <div style="padding:55px 0px 0px 46px;font-size: 22px;color: #1B1B1B;">欢迎登录</div>
                <div style="padding:25px 0px 0px 46px;display:flex;">
                    <div class="active">账号登录</div>
                    <div class="inactive" style="padding-left: 12px;">账号注册</div>
                </div>
                <div style="width: 100%;display:flex;justify-content:center;padding-top: 20px;">
                    <div class="inputItem">
                        <input v-model="info.userName" placeholder="请输入用户名" style="background: transparent;border: none;" />
                    </div>

                </div>
                <div style="width: 100%;display:flex;justify-content:center;padding-top: 20px;">

                    <div class="inputItem">
                        <input v-model="info.userName" placeholder="请输入密码" type="password"
                            style="background: transparent;border: none;" />
                    </div>
                </div>
                <div style="padding-top:48px;width:100%;display:flex;justify-content:center">
                    <div class="login-btn">
                        <div>登录</div>
                    </div>
                </div>
            </div>
        </van-dialog>
    </div>
</template>
<script>

export default {
    name: 'cellMine',
    data() {
        return {
            info: {

            },
            show: true,
            active: 0
        }
    },
    mounted() {

    },
}
</script>
<style scoped>
.userMine {
    width: 100vw;
    height: 256px;
    background-image: url('../assets/img/bg-user.png');
    background-size: 100vw 256px;
    position: relative;
}

.info {
    width: 100%;
    height: 377px;
    border-radius: 12px;
    background-color: #ffffff;
    padding: 16px 10px 0px 10px;

}

.info-btn {
    width: 177px;
    height: 41px;
    border-radius: 100px;
    background: linear-gradient(90deg, #DE6247 0%, #F58548 100%);
    justify-content: center;
    display: flex;
    align-items: center;

}

.active {
    font-size: 14px;
    color: #FF8E39;
    border-bottom: 1px solid #FF8E39;
}

.inactive {
    font-size: 14px;
    color: #505050;
}

.inputItem {
    width: 282px;
    height: 37px;
    border: 1px solid #B6B6B6;
    border-radius: 8px;
    display: flex;
    align-items: center;
}

.login-btn {
    background-color: #FF8E39;
    width: 280px;
    height: 46px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    color: #FCFCFC;
    border-radius: 100px;
}</style>

