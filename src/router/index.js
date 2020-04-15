import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Student from '../views/Student'
import Learn from '../views/Learn'
import Community from '../views/Community'
import About from '../views/About'

import Academic from '../components/community/Academic'
import Download from '../components/community/Download'
import Personal from '../components/community/Personal'

import Question from '../components/Question'
import Err from '../components/Err'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',  // 路由的别名

    name: 'home',
    // component: Home,
    components: {  // 组件复用
      default: Home,
      // 'academic': Academic
    }
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn
  },
  {
    path: '/community',
    name: 'community',
    component: Community,
    // 点击社区，自动展示‘学术讨论’的默认内容 可以使用重定向
    redirect: '/community/academic',
    meta: {  // 元信息，值可以从该路由中获取，也可以从子路由中获取
      login: false
    },
    children: [
      {
        path: 'academic',   //子路由的简化写法  不带/
        name: 'academic',
        component: Academic,
        // 路由独享守卫
        beforeEnter(to, from, next) {
          const isLogin = to.matched[0].meta.login;
          if(isLogin) {
            next();
            return
          }
          const answer = confirm('你还没有登录，要登录后才能浏览信息，要登录吗？')
          if(answer) {
            next({name: 'personal'})
          } else {
            next(false)
          }
        }
      },
      {
        path: '/community/download',
        name: 'download',
        component: Download
      },
      {
        // path: '/community/personal',
        path: 'personal',  
        name: 'personal',
        component: Personal
      }
    ]
  },
  {
    path: '/question/:id',
    name: 'question',
    component: Question
  },
  {
    path: '/about',
    name: 'about',
    component: About
    //路由懒加载
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/err.html',
    name: 'err',
    component: Err
  },
  // 路由跳转错误时的页面展示处理
  {
    path: '*',
    redirect(to) { // to: 将要去的页面
      console.log('to', to)
      if(to.path == '/') {
        return '/home'
      } else {
        return {name: 'err'}
      }
    }
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 导航守卫
  // 全局守卫
  // router.beforeEach( (to, from, next) => {
  //   console.log('to', to)  //要去那个路由
  //   console.log('from', from)  // 从那个路由过来
  //   console.log('next', next) // 如果确定可以通行，则放行

  //   if(to.path === '/community/academic') {
  //     // 询问是否要进入
  //     const answer = confirm('你还没有登录，要登录后才能浏览信息，要登录吗？')
  //     if(answer) {
  //       next({name: 'personal'})
  //     } else {
  //       next(false)
  //     }
  //   } else {
  //     next()
  //   }

  // })

export default router
