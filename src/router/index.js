import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: resolve => require(['@/pages/index'], resolve)
        },
        {
            path: '/vueList',
            name: 'vueList',
            component: resolve => require(['@/pages/learn/list/vue/vue-list'], resolve)
        },
        {
            path: '/vueList/vue01',
            name: 'vue01',
            component: resolve => require(['@/pages/learn/detail/vue/vue-01'], resolve),
        },
        {
            path: '/vueList/vue02',
            name: 'vue02',
            component: resolve => require(['@/pages/learn/detail/vue/vue-02'], resolve),
        },
        {
            path: '/vueList/vue03',
            name: 'vue03',
            component: resolve => require(['@/pages/learn/detail/vue/vue-03'], resolve),
        },
        {
            path: '/vueList/vue04',
            name: 'vue04',
            component: resolve => require(['@/pages/learn/detail/vue/vue-04'], resolve),
        },
        {
            path: '/life/lifeList',
            name: 'lifeList',
            component: resolve => require(['@/pages/life/list/lifeList'], resolve),
        },
        {
            path: '/life/life01',
            name: 'life01',
            component: resolve => require(['@/pages/life/detail/life-01'], resolve),
        },
        {
            path: '/life/life02',
            name: 'life02',
            component: resolve => require(['@/pages/life/detail/life-02'], resolve),
        },
        {
            path: '/htmlList',
            name: 'htmlList',
            component: resolve => require(['@/pages/learn/list/html/html-list'], resolve),
        },
        {
            path: '/htmlList/html01',
            name: 'html01',
            component: resolve => require(['@/pages/learn/detail/html/html-01'], resolve),
        },
        {
            path: '/htmlList/html02',
            name: 'html02',
            component: resolve => require(['@/pages/learn/detail/html/html-02'], resolve),
        },
    ]
})