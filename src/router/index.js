import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hello from '../components/def/default.vue'
import calssify from '../components/calssify/calssify.vue'
import my from '../components/my/my.vue'
import thing from '../components/thing/thing.vue'
import shopping from '../components/shopping/shopping.vue'
import mian from '../components/mian/mian.vue'
import details from '../components/def/component/details.vue'
import login from '../components/my/component/login.vue'
import seek from '../components/seek/seek.vue'
import newProduct from '../components/def/component/proclassify/newproduct.vue'
import classifyDetails from '../components/calssify/component/classify-recom/classifyDetail.vue'
import commodityDetails from '../components/details/commodityDetails.vue'
import Personal from '../components/my/component/personal.vue'
// 默认主页路由配置
const routes = [
    {
        path: '/mian',
        component: mian,
        children: [{
                path: "Hello",
                component: Hello,
            },

            {
                path: "calssify",
                component: calssify,
            },
            {
                path: "thing",
                component: thing,
            },
            {
                path: "shopping",
                component: shopping,
            },
            {
                path:"Personal",
                component:Personal
            }
            
        ]
    },
    {
        path: "*",
        redirect: "/mian/hello"

    },
    {
        path: "/details",
        component: details
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/seek",
        component: seek
    },
    {
        path:"/newproduct",
        component:newProduct
    },
    {
        path:"/classifyDetails",
        component:classifyDetails
    },
    {
        path: "/commodityDetails",
        component: commodityDetails
    },
    {
        path: "/my",
        component: my
    }
];
const router = new VueRouter({
    routes: routes
})
export {
    router
}