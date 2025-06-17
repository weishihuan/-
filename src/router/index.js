import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'GoPay', 
      description: '为您提供产品技术解决方案，探索人工智能的无限可能，打造智能化未来。' 
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    meta: { 
      title: 'GoPay', 
      description: '探索产品提供的创新产品和服务，包括智能对话系统、数据分析平台和定制化产品解决方案。' 
    }
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('../views/ProductDetailView.vue'),
    meta: { 
      title: 'GoPay', 
      description: '了解产品的详细信息、功能特点和技术规格，选择最适合您需求的智能解决方案。' 
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { 
      title: 'GoPay', 
      description: '查看Wsh的开源项目，我们致力于促进技术的开源发展，提供丰富的开源工具和框架。' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { 
      title: 'GoPay', 
      description: '了解我们的故事、团队和技术理念，以及我们如何通过技术创新推动行业发展。' 
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: { 
      title: 'GoPay',
      description: '了解我们如何保护您的隐私和个人信息，以及我们的数据收集和使用政策。' 
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsView.vue'),
    meta: { 
      title: 'GoPay',
      description: '查看服务条款，了解使用我们服务时的权利和义务。' 
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { 
      title: 'GoPay',
      description: '抱歉，您请求的页面不存在。请返回首页继续浏览。' 
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Wsh的官网'
  next()
})

export default router 