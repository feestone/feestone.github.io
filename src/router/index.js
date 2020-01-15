import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import vueList from '@/pages/learn/list/vue/vue-list'
import vue01 from '@/pages/learn/detail/vue/vue-01'
import vue02 from '@/pages/learn/detail/vue/vue-02'
import vue03 from '@/pages/learn/detail/vue/vue-03'
import vue04 from '@/pages/learn/detail/vue/vue-04'

import lifeList from '@/pages/life/list/lifeList'
import life01 from '@/pages/life/detail/life-01'


import htmlList from '@/pages/learn/list/html/html-list'
import html01 from '@/pages/learn/detail/html/html-01'
import html02 from '@/pages/learn/detail/html/html-02'




Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/vueList',
            name: 'vueList',
            component: vueList,
        },
        {
            path: '/vueList/vue01',
            name: 'vue01',
            component: vue01,
        },
        {
            path: '/vueList/vue02',
            name: 'vue02',
            component: vue02,
        },
        {
            path: '/vueList/vue03',
            name: 'vue03',
            component: vue03,
        },
        {
            path: '/vueList/vue04',
            name: 'vue04',
            component: vue04,
        },
        {
            path: '/life/lifeList',
            name: 'lifeList',
            component: lifeList,
        },
        {
            path: '/life/life01',
            name: 'life01',
            component: life01,
        },
        {
            path: '/htmlList',
            name: 'htmlList',
            component: htmlList,
        },
        {
            path: '/htmlList/html01',
            name: 'html01',
            component: html01,
        },
        {
            path: '/htmlList/html02',
            name: 'html02',
            component: html02,
        },
    ]
})