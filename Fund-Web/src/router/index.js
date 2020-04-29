import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/home',
      name: 'index',
      component: () => import('@/components/index'),
      children: [{
          path: '/home',
          name: 'home',
          component: () => import('@/components/home/index'),
        },
        {
          path: '/quotes',
          name: 'quotes',
          component: () => import('@/components/quotes/index'),
        },
        {
          path: '/assets',
          name: 'assets',
          component: () => import('@/components/assets/index'),
        },
        {
          path: '/information',
          name: 'information',
          component: () => import('@/components/information/index'),
        },
        {
          path: '/self',
          name: 'self',
          component: () => import('@/components/self/index'),
        },
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/register/index')
    },
    {
      path: '/register/nextStep',
      name: 'nextStep',
      component: () => import('@/components/register/nextStep/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/index')
    },
    {
      path: '/prevention',
      name: 'prevention',
      component: () => import('@/components/views/prevention')
    },
    {
      path: '/buy',
      name: 'buy',
      component: () => import('@/components/views/transaction/buy')
    },
    // {
    //   path: '/sell',
    //   name: 'sell',
    //   component: () => import('@/components/views/transaction/sell')
    // },
    {
      path: '/fund',
      redirect: '/fund/fundDetails',
      name: 'fund',
      component: () => import('@/components/views/fund/index'),
      children: [{
          path: '/fund/fundDetails',
          name: 'fundDetails',
          component: () => import('@/components/views/fund/fundDetails/index'),
        },
        {
          path: '/fund/fundAnnouncement',
          name: 'fundAnnouncement',
          component: () => import('@/components/views/fund/fundAnnouncement/index'),
        },
        {
          path: '/fund/historicalDividend',
          name: 'historicalDividend',
          component: () => import('@/components/views/fund/historicalDividend/index'),
        },
        {
          path: '/fund/legalDocument',
          name: 'legalDocument',
          component: () => import('@/components/views/fund/legalDocument/index'),
        },
        {
          path: '/fund/personnelConference',
          name: 'personnelConference',
          component: () => import('@/components/views/fund/personnelConference/index'),
        },
        {
          path: '/fund/portfolio',
          name: 'portfolio',
          component: () => import('@/components/views/fund/portfolio/index'),
        },
      ]
    },
    {
      path: '/rateRulesTable',
      name: 'rateRulesTable',
      component: () => import('@/components/views/rateRulesTable/index'),
    },
    {
      path: '/informationPage',
      name: 'informationPage',
      component: () => import('@/components/information/informationPage'),
    },
    {
      path: '/seach',
      name: 'seach',
      component: () => import('@/components/views/seach/index'),
    },
    {
      path: '*',
      component: () => import('@/components/404')
    }

  ]
})
//全局路由，任何页面进入前
router.beforeEach((to, from, next) => {
  next()
})

export default router
