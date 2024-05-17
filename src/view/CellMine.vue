<template>
    <div>
        <div class="userMine">
            <div style="padding-top: 56px;font-size: 16px;font-weight: 700;text-align: center;color: #FCFCFC;">个人中心</div>
            <div style="padding-top:40px;padding-left:34px;">

                <div v-if="logined" style="font-size: 16px;color:#FCFCFC">{{ user.name || '' }}</div>
                <div v-if="logined" style="font-size: 12px;color:#FCFCFC">{{ user.userName || '' }}</div>
                <a v-else style="font-size: 14px;color:#FCFCFC" @click="show = true">请登录</a>
            </div>
            <div style="width: 100%;display: flex;justify-content: center;position: absolute;bottom:15px;">
                <div
                    style="width: 365px;height: 57px;background: linear-gradient(89.31deg, #FFD447 -24.14%, #FF8D39 99.77%);border-radius: 8px 8px 0 0;padding: 16px 12px 0 12px;display: flex;justify-content: space-between;">

                    <div style="display:flex;height:24px;padding-left: 14PX;align-items: center;">
                        <img src="../assets/img/mall-icon.png" style="width: 24px;height: 24px;">
                        <div style="font-size: 14px;color: #FEFFFF;">可用积分:</div>
                        <div style="color:cadetblue ;padding-left: 5px;font-size: 16px;font-weight: 700;">{{ user.points || 0}}</div>
                    </div>
                    <div style="font-size: 16px;color:#FCFCFC">
                        {{ user.company||'' }}
                    </div>
                </div>

            </div>
            <div style="width:100vw ;height:377px;padding:12px;margin-top: 90px;">
                <div class="info">
                    <div style="font-size:16px ;color:#000000;padding-left: 4px;">收货信息</div>
                    <div style="font-size:14px ;color:#000000;padding-top: 16px;padding-left: 4px;">收货姓名：</div>
                    <div class="inputItem">
                        <input v-model="user.deliveryName" placeholder="请输入收货姓名"
                            style="background: transparent;border: none;" />
                    </div>
                    <div style="font-size:14px ;color:#000000;padding-top: 16px;padding-left: 4px;">收货电话：</div>
                    <div class="inputItem">
                        <input v-model="user.deliveryPhone" placeholder="请输入收货电话"
                            style="background: transparent;border: none;" />
                    </div>
                    <div style="font-size:14px ;color:#000000;padding-top: 16px;padding-left: 4px;">收货地址：</div>
                    <div class="inputItem">
                        <input v-model="user.deliveryAddress" placeholder="请输入收货地址"
                            style="background: transparent;border: none;" />
                    </div>
                    <div style="width: 100%;display:flex;justify-content: center;padding-top: 31px;">
                        <div @click="changeInfo" class="info-btn">
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
                        <input v-model="loginFrom.userName" placeholder="请输入用户名"
                            style="background: transparent;border: none;" />
                    </div>

                </div>
                <div style="width: 100%;display:flex;justify-content:center;padding-top: 20px;">

                    <div class="inputItem">
                        <input v-model="loginFrom.password" placeholder="请输入密码" type="password"
                            style="background: transparent;border: none;" />
                    </div>
                </div>
                <div style="padding-top:48px;width:100%;display:flex;justify-content:center">
                    <div @click="login" class="login-btn">
                        <div>登录</div>
                    </div>
                </div>
            </div>
        </van-dialog>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: 'cellMine',
    data() {
        return {
            info: {
                deliveryName:'',
                deliveryPhone:'',
                deliveryAddress:''
            },
            show: false,
            active: 0,
            logined: false,
            user: {},
            loginFrom: {}
        }
    },
    created() {
        
        let user = localStorage.getItem('userInfo')
        if (user) {
            this.logined = true
            this.user = JSON.parse(user)
            this.info.id=this.user.id
            this.info.deliveryName=this.user.deliveryName
            this.info.deliveryPhone=this.user.deliveryPhone
            this.info.deliveryAddress=this.user.deliveryAddresss
            
        }
    },
    mounted() {

    },
    methods: {
        login() {
            const queryString = new URLSearchParams(this.loginFrom).toString();
            // 发送POST请求
            fetch('/api/login/point-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: queryString
            })
                .then(response => response.json())
                .then(data => {
                    this.user = data.data
                    console.log(this.user);
                    localStorage.setItem('userInfo',JSON.stringify( data.data))
                    this.logined=true
                    this.show=false
                })
                .catch(error => console.error('Error:', error));
        },
        changeInfo(){
            
            // 发送POST请求
            fetch('/api/points-owner/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.info)
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('userInfo',JSON.stringify( this.user ))
                    Toast.success('修改成功！');
                })
                .catch(error => console.error('Error:', error));
        }
    }
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
}
</style>

