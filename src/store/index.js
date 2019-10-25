import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // 添加购物车数组
        car: [],
        allChoice: true,
        // 登录状态   
        loginstatus: false,
        userInfo: {
            username: '123',
            password: '123456'
        },
    },
    mutations: {
        // 购物车数组去从
        addCar(state, goods) {
            let num = [];
            for (let i = 0; i < state.car.length; i++) {
                num.push(state.car[i].id);
            }
            if (num.includes(goods.id)) {
                let a = num.indexOf(goods.id)
                state.car[a].count++;
            } else {
                state.car.push(goods)
            }
        },
        // 购物车商品选中按钮
        isChecked(state, index) {
            if (state.car[index].itemIndex == true) {
                state.car[index].itemIndex = false;
            } else {
                state.car[index].itemIndex = true;
            }

            if (state.car.every(item => {
                    return item.itemIndex
                }) == true) {
                state.allChoice = true;
            } else {
                state.allChoice = false;
            }
        },
        allChoice(state) {
            if (state.car.every(item => {
                    return item.itemIndex
                }) == false) {
                state.allChoice = true;
                state.car.forEach(item => {
                    item.itemIndex = true
                })
            } else {
                state.allChoice = false
                state.car.forEach(item => {
                    item.itemIndex = false
                })
            }
        },
        // login(state,loginInfo){
        //     if(state.userInfo.username==loginInfo.id&&state.userInfo.password==loginInfo.pwd){
        //         state.loginststatus=true;
        //         this.$router.push({path:'/Personal'})
        //     }
        // },
        // 购物车数量加减
        addJ(state, index) {
            state.car[index].count++;
        },
        delJ(state, index) {
            if (state.car[index].count > 1) {
                state.car[index].count--;
            } else {
                state.car.splice(index, 1);
            }
        },
    },
    // 购物车添加总数量
    getters: {
        getCount(state) {
            let c = 0;
            state.car.forEach(item => {
                if (item.itemIndex == true)
                    c += item.count
            })
            return c
        },
        // 购物车添加总价格
        getPrc(state) {
            let d = 0;
            state.car.forEach(item => {
                let x = item.prc.split("");
                let y = x.splice(1).join("");
                if (item.itemIndex == true) {
                    d += y * item.count
                }
            })
            return d
        },
        login(state) {
            return state.userInfo
        }
    }

})