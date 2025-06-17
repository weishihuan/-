<template>
  <div>
    <!-- 页面标题区域 - 增加科技感背景和动态元素 -->
    <section class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 py-16 md:py-20">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-20"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-30"></div>
      
      <!-- 装饰性光晕 -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <!-- 返回按钮 -->
        <router-link to="/products" class="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回产品列表
        </router-link>
        
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <!-- 产品图片 -->
          <div class="w-full md:w-2/5 relative">
            <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
              <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
              
              <!-- 图片装饰元素 -->
              <div class="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60"></div>
              <div class="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60"></div>
            </div>
          </div>
          
          <!-- 产品信息 -->
          <div class="w-full md:w-3/5 text-white">
            <div class="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/20 shadow-lg">
              <span class="flex items-center">
                <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                {{ getCategoryName(product.categoryId) }}
              </span>
            </div>
            
            <h1 class="mb-4 text-white drop-shadow-md">{{ product.title }}<span class="relative inline-block ml-2">
              <span class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>
            </span></h1>
            <p class="text-white/90 text-xl mb-6 leading-relaxed drop-shadow-sm">{{ product.shortDescription }}</p>
            
            <div class="flex flex-wrap gap-4">
              <a 
                :href="product.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn bg-white text-primary-600 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                立即体验
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button class="btn btn-outline border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品概览信息卡 -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white relative">
      <!-- 装饰背景元素 -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 卡片1: 功能亮点 -->
          <div class="card-glass p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 group">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mr-3 group-hover:bg-primary-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-primary-600 transition-colors">核心功能</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="feature in product.features" :key="feature" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <!-- 卡片2: 技术规格 -->
          <div class="card-glass p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 group">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-500 mr-3 group-hover:bg-secondary-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-secondary-600 transition-colors">技术规格</h3>
            </div>
            <div class="space-y-3">
              <div v-for="spec in product.specs" :key="spec.name" class="flex justify-between">
                <span class="text-gray-600">{{ spec.name }}</span>
                <span class="font-medium text-gray-900">{{ spec.value }}</span>
              </div>
            </div>
          </div>
          
          <!-- 卡片3: 价格与授权 -->
          <div class="card-glass p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 group">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-500 mr-3 group-hover:bg-accent-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-accent-600 transition-colors">价格与授权</h3>
            </div>
            <div class="text-center py-4">
              <div v-if="product.isFree" class="flex flex-col items-center">
                <span class="text-green-600 font-medium bg-green-50 px-4 py-2 rounded-full text-sm mb-2">
                  免费使用
                </span>
                <p class="text-gray-600 text-sm">无需任何费用即可使用所有功能</p>
              </div>
              <div v-else class="flex flex-col items-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">¥{{ product.price }}</div>
                <p class="text-gray-600 text-sm mb-4">{{ product.pricingModel }}</p>
                <button class="btn btn-primary w-full hover:-translate-y-1 shadow-md hover:shadow-lg transition-all">
                  立即购买
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详细信息区域 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      
      <div class="container-custom relative z-10">
        <!-- 标签页导航 -->
        <div class="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-6 py-3 font-medium relative whitespace-nowrap"
            :class="activeTab === tab.id ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'"
          >
            {{ tab.name }}
            <div 
              class="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300"
              :class="activeTab === tab.id ? 'bg-primary-500' : 'bg-transparent'"
            ></div>
          </button>
        </div>
        
        <!-- 详情内容 -->
        <div class="pb-8">
          <!-- 产品详情 -->
          <div v-if="activeTab === 'details'" class="space-y-8">
            <!-- 产品介绍 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">产品介绍</h3>
              <div class="prose prose-lg max-w-none text-gray-700">
                <p>{{ product.detailedDescription }}</p>
                <!-- 可以使用v-html渲染富文本内容 -->
              </div>
            </div>
            
            <!-- 使用场景 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">适用场景</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="scenario in product.useCases" :key="scenario.title" class="card p-6 hover:border-primary-100">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mr-3">
                      <span class="text-sm font-bold">{{ scenario.icon }}</span>
                    </div>
                    <h4 class="font-semibold text-lg">{{ scenario.title }}</h4>
                  </div>
                  <p class="text-gray-600">{{ scenario.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- 产品图片展示 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">产品展示</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  v-for="(image, index) in product.images" 
                  :key="index" 
                  class="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer hover:shadow-lg transition-all duration-300"
                  @click="openImageViewer(index)"
                >
                  <img 
                    :src="image" 
                    :alt="`${product.title} - 图片 ${index + 1}`" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <!-- 图片悬浮效果 -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                      </svg>
                    </div>
                    <!-- 图片序号指示器 -->
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      {{ index + 1 }}/{{ product.images.length }}
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 图片查看器组件 -->
              <ImageViewer 
                :images="product.images" 
                :initial-index="currentImageIndex" 
                :is-open="isImageViewerOpen" 
                @close="closeImageViewer"
              />
            </div>
          </div>
          
          <!-- 技术规格 -->
          <div v-if="activeTab === 'specs'" class="space-y-8">
            <div class="card p-6">
              <h3 class="text-xl font-bold mb-4 text-gray-800">详细规格</h3>
              <div class="space-y-6">
                <div v-for="category in product.specCategories" :key="category.name">
                  <h4 class="text-lg font-semibold mb-3 pb-2 border-b border-gray-100">{{ category.name }}</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="spec in category.items" :key="spec.name" class="flex justify-between">
                      <span class="text-gray-600">{{ spec.name }}</span>
                      <span class="font-medium text-gray-900">{{ spec.value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 用户评价 -->
          <div v-if="activeTab === 'reviews'" class="space-y-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-gray-800">用户评价</h3>
              <div class="flex items-center">
                <div class="text-3xl font-bold text-primary-600 mr-2">{{ product.rating }}</div>
                <div class="flex items-center">
                  <!-- 星星评分 -->
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-gray-600 ml-2">({{ product.reviewCount }}条评价)</span>
                </div>
              </div>
            </div>
            
            <!-- 用户评价列表 -->
            <div class="space-y-6">
              <div v-for="review in product.reviews" :key="review.id" class="card p-6">
                <div class="flex justify-between mb-3">
                  <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img v-if="review.userAvatar" :src="review.userAvatar" alt="用户头像" class="w-full h-full object-cover" />
                      <div v-else class="w-full h-full flex items-center justify-center text-gray-500 font-bold">
                        {{ review.userName.charAt(0).toUpperCase() }}
                      </div>
                    </div>
                    <div>
                      <div class="font-medium">{{ review.userName }}</div>
                      <div class="text-gray-500 text-sm">{{ review.date }}</div>
                    </div>
                  </div>
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-700">{{ review.content }}</p>
              </div>
            </div>
          </div>
          
          <!-- 常见问题 -->
          <div v-if="activeTab === 'faq'" class="space-y-6">
                          <h3 class="text-2xl font-bold mb-4 text-gray-800">常见问题</h3>
            <div class="space-y-4">
              <div v-for="faq in product.faqs" :key="faq.question" class="card p-6 hover:border-primary-100">
                <div class="font-semibold text-lg mb-2">{{ faq.question }}</div>
                <p class="text-gray-700">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相关产品推荐 -->
    <section class="section bg-gray-50 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-10">
          <h2 class="mb-4 text-gray-800">相关产品推荐</h2>
          <p class="text-gray-600 text-xl max-w-2xl mx-auto">探索更多与此相关的AI产品，开启智能化应用之旅</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id" 
            class="card glow-effect hover:border-primary-100 cursor-pointer transition-all duration-300"
            @click="handleProductClick(relatedProduct.id)"
          >
            <!-- 图片部分 -->
            <div class="h-48 bg-gray-100 overflow-hidden relative">
              <img 
                :src="relatedProduct.image" 
                :alt="relatedProduct.title" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              
              <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm">
                {{ getCategoryName(relatedProduct.categoryId) }}
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                {{ relatedProduct.title }}
              </h3>
              
              <p class="text-gray-600 mb-4 line-clamp-2">{{ relatedProduct.description }}</p>
              
              <button 
                class="btn-primary-outline btn-sm inline-flex items-center group hover:bg-primary-50 active:bg-primary-100"
                @click.stop="handleProductClick(relatedProduct.id)"
              >
                了解详情
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 咨询和联系部分 -->
    <section class="section bg-gradient-to-r from-primary-700 to-primary-500 text-white relative overflow-hidden">
      <!-- 背景元素 -->
      <div class="absolute inset-0 dot-grid opacity-10"></div>
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      
      <!-- 装饰性光晕 - 与头部保持一致 -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <div class="card-glass bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl overflow-hidden relative">
          <div class="text-center mb-8">
            <div class="inline-block px-4 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              <span class="flex items-center">
                <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                个性化咨询
              </span>
            </div>
            
            <h2 class="mb-4 text-white">需要<span class="relative inline-block">
              <span class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>定制解决方案
            </span>？</h2>
            <p class="text-white/90 text-xl max-w-2xl mx-auto mb-8">
              联系我们的专业团队，获取针对您业务需求的个性化AI解决方案
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn bg-white text-primary-600 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                立即咨询
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              
              <router-link to="/about" class="btn btn-outline border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                了解我们的服务
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ImageViewer from '../components/ImageViewer.vue'

const route = useRoute()
const router = useRouter()

// 产品数据
const product = ref({
  id: '',
  title: '',
  categoryId: '',
  shortDescription: '',
  detailedDescription: '',
  image: '',
  images: [],
  isFree: false,
  price: 0,
  pricingModel: '',
  rating: 0,
  reviewCount: 0,
  features: [],
  specs: [],
  specCategories: [],
  useCases: [],
  reviews: [],
  faqs: []
})

// 图片查看器状态
const isImageViewerOpen = ref(false)
const currentImageIndex = ref(0)

// 获取产品信息
const fetchProductData = async (productId) => {
  try {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // 根据产品ID获取不同的产品数据
    let mockProduct = {
      ...product.value,
      id: productId
    }
    
    // 根据不同的产品ID返回不同的数据
    switch(productId) {
      case 'watermark':
        mockProduct = {
          id: productId,
          title: '证件水印',
          categoryId: 'assist',
          shortDescription: '智能证件水印防伪系统，为您的重要证件提供专业的数字水印保护，有效防止证件被盗用或篡改。',
          detailedDescription: '证件水印系统采用先进的AI技术，能够为各类证件提供不可见的数字水印保护。系统支持多种证件类型，包括身份证、学历证书、资格证书等。通过独特的水印算法，可以有效防止证件被伪造或篡改，同时不影响证件的美观性。',
          image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1080',
          images: [
            'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1080',
            'https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1080',
            'https://images.pexels.com/photos/5473952/pexels-photo-5473952.jpeg?auto=compress&cs=tinysrgb&w=1080'
          ],
          isFree: true,
          price: 0,
          pricingModel: '完全免费',
          demoUrl: 'https://zjsy.leepm.com/',
          rating: 4.8,
          reviewCount: 156,
          features: [
            '智能水印嵌入技术',
            '多种证件类型支持',
            '批量处理功能',
            '水印验证系统',
            '防伪追溯功能',
            '完全免费使用',
            '无需注册登录'
          ],
          specs: [
            { name: '支持格式', value: 'JPG, PNG, PDF' },
            { name: '处理速度', value: '2秒/张' },
            { name: '最大文件大小', value: '20MB' },
            { name: '使用限制', value: '无限制' }
          ],
          specCategories: [
            {
              name: '基本规格',
              items: [
                { name: '支持格式', value: 'JPG, PNG, PDF' },
                { name: '处理速度', value: '2秒/张' },
                { name: '最大文件大小', value: '20MB' },
                { name: '水印类型', value: '不可见数字水印' }
              ]
            },
            {
              name: '高级功能',
              items: [
                { name: '批量处理', value: '支持' },
                { name: '水印验证', value: '内置验证器' },
                { name: '防伪等级', value: '银行级' },
                { name: '数据加密', value: 'AES-256' },
                { name: '免费使用', value: '永久免费' }
              ]
            }
          ],
          useCases: [
            {
              title: '证书防伪',
              description: '为学历证书、资格证书等重要证件添加防伪水印',
              icon: '📜'
            },
            {
              title: '文件保护',
              description: '保护公司机密文件，防止泄露和篡改',
              icon: '🔒'
            },
            {
              title: '版权保护',
              description: '为数字作品添加版权水印，保护知识产权',
              icon: '©️'
            }
          ],
          reviews: [
            {
              id: 1,
              userName: '张经理',
              userAvatar: '',
              rating: 5,
              date: '2024-02-15',
              content: '完全免费还这么好用，太赞了！水印完全不可见但可以轻松验证真伪。'
            },
            {
              id: 2,
              userName: '李老师',
              userAvatar: '',
              rating: 5,
              date: '2024-02-10',
              content: '学校用来处理学生证书，批量处理功能很方便，而且完全免费，节省了很多经费。'
            }
          ],
          faqs: [
            {
              question: '这个产品真的完全免费吗？',
              answer: '是的，证件水印系统完全免费，无需付费即可使用所有功能。'
            },
            {
              question: '水印会影响证件的外观吗？',
              answer: '不会，我们使用的是不可见数字水印技术，不会对证件的视觉效果产生任何影响。'
            },
            {
              question: '如何验证带水印的证件？',
              answer: '可以通过我们提供的验证器进行验证，只需扫描证件即可。'
            }
          ]
        }
        break
        
      case 'id-photo':
        mockProduct = {
          id: productId,
          title: '小花证件照',
          categoryId: 'assist',
          shortDescription: '智能证件照制作工具，一键生成符合各类规格的证件照。',
          detailedDescription: '小花证件照是一款完全免费的智能证件照制作工具，采用先进的AI技术，能够快速生成符合各类规格的证件照。系统支持智能修图美化、背景更换、规格自动调整等功能，让用户轻松获得专业级证件照。适用于身份证、护照、签证等多种场景。',
          image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080',
          images: [
            'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080',
            'https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=1080',
            'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=1080'
          ],
          isFree: true,
          price: 0,
          pricingModel: '完全免费',
          demoUrl: 'https://zj.leepm.com/',
          rating: 4.9,
          reviewCount: 2156,
          features: [
            'AI智能美颜',
            '自动规格调整',
            '多种背景可选',
            '批量处理',
            '云端存储',
            '免费使用',
            '无需注册'
          ],
          specs: [
            { name: '支持证件类型', value: '20+' },
            { name: '处理时间', value: '3秒内' },
            { name: '照片规格', value: '标准/定制' },
            { name: '使用限制', value: '无限制' }
          ],
          specCategories: [
            {
              name: '基础功能',
              items: [
                { name: '支持证件类型', value: '20+' },
                { name: '处理时间', value: '3秒内' },
                { name: '照片规格', value: '标准/定制' },
                { name: '存储时间', value: '永久' }
              ]
            },
            {
              name: '高级功能',
              items: [
                { name: 'AI美颜', value: '支持' },
                { name: '背景替换', value: '支持' },
                { name: '批量处理', value: '支持' },
                { name: '云端备份', value: '支持' },
                { name: '免费使用', value: '永久免费' }
              ]
            }
          ],
          useCases: [
            {
              title: '证件办理',
              description: '快速生成身份证、护照等标准证件照',
              icon: '📷'
            },
            {
              title: '求职简历',
              description: '制作专业的求职简历照片',
              icon: '👔'
            },
            {
              title: '学生证件',
              description: '学生证、校园卡等证件照制作',
              icon: '🎓'
            }
          ],
          reviews: [
            {
              id: 1,
              userName: '王小明',
              userAvatar: '',
              rating: 5,
              date: '2024-02-18',
              content: '完全免费的证件照工具，AI美颜效果自然，太赞了！'
            },
            {
              id: 2,
              userName: '李女士',
              userAvatar: '',
              rating: 5,
              date: '2024-02-16',
              content: '在家就能免费拍证件照，太方便了，而且效果很专业。'
            }
          ],
          faqs: [
            {
              question: '使用这个工具需要付费吗？',
              answer: '不需要，小花证件照完全免费，所有功能都可以免费使用。'
            },
            {
              question: '照片是否符合官方要求？',
              answer: '是的，我们的系统严格按照各类证件的官方规格要求进行照片处理。'
            },
            {
              question: '多久能拿到照片？',
              answer: '照片处理只需3秒，处理完成后可立即下载。'
            }
          ]
        }
        break

      case 'legal-eye':
        mockProduct = {
          id: productId,
          title: '法眼',
          categoryId: 'ai',
          shortDescription: '法眼AI智能合同审核平台利用先进的人工智能技术，对合同进行全方位分析',
          detailedDescription: '法眼是一款免费的AI智能合同审核工具，能够快速识别合同中的潜在风险点，提供专业的法律建议。系统采用先进的自然语言处理技术，可以自动分析合同条款，识别不公平条款，并提供修改建议。',
          image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
          images: [
            'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
          ],
          isFree: true,
          price: 0,
          pricingModel: '完全免费',
          demoUrl: 'https://fayan.leepm.com/',
          rating: 4.8,
          reviewCount: 568,
          features: [
            'AI智能合同分析',
            '风险条款识别',
            '法律建议生成',
            '合同对比分析',
            '免费使用',
            '无需注册'
          ],
          specs: [
            { name: '支持合同类型', value: '50+' },
            { name: '分析速度', value: '10秒内' },
            { name: '准确率', value: '95%以上' }
          ],
          specCategories: [
            {
              name: '基础功能',
              items: [
                { name: '支持合同类型', value: '50+' },
                { name: '分析速度', value: '10秒内' },
                { name: '准确率', value: '95%以上' },
                { name: '使用限制', value: '无限制' }
              ]
            },
            {
              name: '高级功能',
              items: [
                { name: '风险评估', value: '支持' },
                { name: '条款比对', value: '支持' },
                { name: '修改建议', value: '支持' },
                { name: '免费使用', value: '永久免费' }
              ]
            }
          ],
          useCases: [
            {
              title: '合同审核',
              description: '快速审核各类商业合同，识别潜在风险',
              icon: '📋'
            },
            {
              title: '法律咨询',
              description: '获取专业的法律建议和解决方案',
              icon: '⚖️'
            },
            {
              title: '合同对比',
              description: '比对不同版本合同，找出关键差异',
              icon: '🔍'
            }
          ],
          reviews: [
            {
              id: 1,
              userName: '张律师',
              userAvatar: '',
              rating: 5,
              date: '2024-02-20',
              content: '非常专业的合同审核工具，而且完全免费，帮助我们提高了工作效率。'
            },
            {
              id: 2,
              userName: '王经理',
              userAvatar: '',
              rating: 5,
              date: '2024-02-19',
              content: '对于非法律专业人士来说特别有帮助，可以快速发现合同中的问题。'
            }
          ],
          faqs: [
            {
              question: '使用法眼需要付费吗？',
              answer: '不需要，法眼是完全免费的合同审核工具。'
            },
            {
              question: '支持哪些类型的合同？',
              answer: '支持劳动合同、租赁合同、买卖合同等50多种常见合同类型。'
            },
            {
              question: '如何保护合同隐私？',
              answer: '我们采用严格的加密措施保护用户数据，所有合同信息都经过脱敏处理。'
            }
          ]
        }
        break

      case 'mcp-hub':
        mockProduct = {
          id: productId,
          title: 'MCP中文资源中心',
          categoryId: 'ai',
          shortDescription: '发现并推荐AI优质MCP服务，目前已收录4700+优质MCP服务。',
          detailedDescription: 'MCP中文资源中心是一个专注于收集和推荐优质MCP（Managed Cloud Platform）服务的平台。平台目前已收录超过4700个MCP服务，涵盖浏览器控制API、GitHub工具、数据分析、Playwright、聊天机器人等多个领域。我们为开发者和用户提供全方位的MCP服务管理和发现体验。',
          image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600',
          images: [
            'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600'
          ],
          isFree: true,
          price: 0,
          pricingModel: '完全免费',
          demoUrl: 'https://mcp.leepm.com/',
          rating: 4.9,
          reviewCount: 1280,
          features: [
            '4700+优质MCP服务',
            '精选推荐服务',
            '服务数据分析',
            '活跃开发社区',
            '定期数据更新',
            '免费使用'
          ],
          specs: [
            { name: '收录服务数量', value: '4700+' },
            { name: '活跃开发者', value: '25K+' },
            { name: '推荐满意度', value: '98%' },
            { name: '月访问量', value: '350万+' }
          ],
          specCategories: [
            {
              name: '平台数据',
              items: [
                { name: '收录服务数量', value: '4700+' },
                { name: '活跃开发者', value: '25K+' },
                { name: '推荐满意度', value: '98%' },
                { name: '月访问量', value: '350万+' }
              ]
            },
            {
              name: '服务类别',
              items: [
                { name: '浏览器控制', value: '支持' },
                { name: 'GitHub工具', value: '支持' },
                { name: '数据分析', value: '支持' },
                { name: 'Playwright', value: '支持' },
                { name: '聊天机器人', value: '支持' }
              ]
            }
          ],
          useCases: [
            {
              title: '发现MCP服务',
              description: '快速找到适合您需求的MCP服务',
              icon: '🔍'
            },
            {
              title: '分享MCP服务',
              description: '提交并分享您的MCP服务给更多用户',
              icon: '🌟'
            },
            {
              title: '数据分析',
              description: '获取详细的服务使用数据和用户反馈',
              icon: '📊'
            }
          ],
          reviews: [
            {
              id: 1,
              userName: '李开发',
              userAvatar: '',
              rating: 5,
              date: '2024-02-21',
              content: '非常棒的平台，帮我找到了很多有用的MCP服务，而且完全免费。'
            },
            {
              id: 2,
              userName: '张产品',
              userAvatar: '',
              rating: 5,
              date: '2024-02-20',
              content: '平台收录的服务质量都很高，推荐算法也很准确。'
            }
          ],
          faqs: [
            {
              question: '使用平台需要付费吗？',
              answer: '不需要，MCP中文资源中心是完全免费的服务发现平台。'
            },
            {
              question: '如何提交自己的MCP服务？',
              answer: '您可以通过平台的提交功能，填写相关信息即可分享您的MCP服务。'
            },
            {
              question: '平台的数据多久更新一次？',
              answer: '我们每天都会更新服务数据和用户反馈，确保信息的及时性。'
            }
          ]
        }
        break

      case 'fayan':
        mockProduct = {
          id: productId,
          title: '法眼',
          categoryId: 'assist',
          shortDescription: '智能法律文书分析和生成工具，为您提供专业的法律文书处理服务。',
          detailedDescription: '法眼是一款专业的法律文书智能处理工具，采用先进的自然语言处理技术，能够快速分析和生成各类法律文书。系统支持合同审查、法律条款分析、文书智能生成等功能，帮助用户更高效地处理法律相关工作。',
          image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1080',
          images: [
            'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1080',
            'https://images.pexels.com/photos/5668474/pexels-photo-5668474.jpeg?auto=compress&cs=tinysrgb&w=1080',
            'https://images.pexels.com/photos/5668475/pexels-photo-5668475.jpeg?auto=compress&cs=tinysrgb&w=1080'
          ],
          isFree: true,
          price: 0,
          pricingModel: '完全免费',
          demoUrl: 'https://fayan.leepm.com/',
          rating: 4.7,
          reviewCount: 892,
          features: [
            '智能合同审查',
            '法律条款分析',
            '文书智能生成',
            '多语言支持',
            '隐私保护',
            '免费使用',
            '无需注册'
          ],
          specs: [
            {
              name: '支持文件格式',
              value: 'PDF, Word, TXT'
            },
            {
              name: '处理速度',
              value: '小于3秒/页'
            },
            {
              name: '准确率',
              value: '95%以上'
            },
            {
              name: '并发处理',
              value: '支持'
            }
          ],
          specCategories: [
            {
              name: '基本功能',
              items: [
                {
                  name: '文书类型',
                  value: '合同、协议、诉讼文书等'
                },
                {
                  name: '分析维度',
                  value: '合规性、完整性、风险点'
                },
                {
                  name: '处理语言',
                  value: '中文、英文'
                }
              ]
            },
            {
              name: '技术参数',
              items: [
                {
                  name: 'API集成',
                  value: '支持'
                },
                {
                  name: '数据加密',
                  value: 'AES-256'
                },
                {
                  name: '并发用户数',
                  value: '无限制'
                }
              ]
            }
          ],
          useCases: [
            {
              title: '合同审查',
              icon: '📄',
              description: '快速识别合同中的关键条款和潜在风险点'
            },
            {
              title: '文书生成',
              icon: '✍️',
              description: '根据模板和要求自动生成标准法律文书'
            },
            {
              title: '法规遵从',
              icon: '⚖️',
              description: '确保文书符合最新的法律法规要求'
            }
          ],
          reviews: [
            {
              userName: '李律师',
              userAvatar: '',
              rating: 5,
              date: '2024-02-25',
              content: '非常好用的法律文书工具，大大提高了工作效率。'
            },
            {
              userName: '张经理',
              userAvatar: '',
              rating: 4,
              date: '2024-02-20',
              content: '界面简洁，功能强大，对于合同审查特别有帮助。'
            },
            {
              userName: '王助理',
              userAvatar: '',
              rating: 5,
              date: '2024-02-15',
              content: '免费且专业，文书生成功能节省了大量时间。'
            }
          ],
          faqs: [
            {
              question: '使用法眼需要付费吗？',
              answer: '不需要，法眼是完全免费的法律文书处理工具。'
            },
            {
              question: '如何保护文书数据安全？',
              answer: '我们采用AES-256加密技术，确保所有文书数据的安全性。'
            },
            {
              question: '支持哪些类型的文书？',
              answer: '支持包括合同、协议、诉讼文书等在内的多种法律文书类型。'
            },
            {
              question: '处理速度如何？',
              answer: '单页文书处理时间通常少于3秒，批量处理也能保持较高效率。'
            }
          ]
        }
        break

      default:
        mockProduct = {
          id: productId,
          title: '未知产品',
          categoryId: 'other',
          shortDescription: '该产品信息暂未添加',
          image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080',
          images: [
            'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080'
          ],
          isFree: false,
          price: 0,
          pricingModel: '暂未定价',
          rating: 0,
          reviewCount: 0,
          features: [],
          specs: [],
          specCategories: [],
          useCases: [],
          reviews: [],
          faqs: []
        }
    }
    
    // 更新产品数据
    product.value = {
      ...product.value,
      ...mockProduct
    }
    
    // 更新title
    document.title = `${product.value.title} - 产品详情`
    
    console.log(`Fetched product data for ID: ${productId}`)
  } catch (error) {
    console.error('Error fetching product data:', error)
    router.push('/products')
  }
}

// 监听路由参数变化
watch(() => route.params.id, (newId, oldId) => {
  if (newId && newId !== oldId) {
    fetchProductData(newId)
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}, { immediate: true })

// 打开图片查看器
const openImageViewer = (index) => {
  currentImageIndex.value = index
  isImageViewerOpen.value = true
  // 添加禁止滚动类
  document.body.classList.add('overflow-hidden')
}

// 关闭图片查看器
const closeImageViewer = () => {
  isImageViewerOpen.value = false
  // 移除禁止滚动类
  document.body.classList.remove('overflow-hidden')
}

// 标签页数据
const tabs = [
  { id: 'details', name: '产品详情' },
  { id: 'specs', name: '技术规格' },
  { id: 'reviews', name: '用户评价' },
  { id: 'faq', name: '常见问题' }
]
const activeTab = ref('details')

// 相关产品示例数据
const relatedProducts = computed(() => {
  // 根据当前产品的类别返回相关产品
  const currentCategory = product.value.categoryId
  return [
    {
      id: 'voice-assistant',
      title: '智能语音助手',
      description: '自然交互的语音助手，为您提供全方位的智能服务，打造无缝的人机交互体验。',
      image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'assist'
    },
    {
      id: 'data-viz',
      title: '数据可视化工具',
      description: '直观展示复杂数据关系，定制各类图表与仪表盘，让数据更易理解。',
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'data'
    },
    {
      id: 'code-assistant',
      title: '代码辅助工具',
      description: '智能代码补全与优化工具，提高开发效率，减少错误，适合各种编程语言。',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'ai'
    }
  ].filter(p => p.id !== product.value.id) // 过滤掉当前产品
})

// 处理产品点击
const handleProductClick = (productId) => {
  // 如果点击的是当前产品，不做任何操作
  if (productId === product.value.id) return
  
  // 使用 router.push 进行导航
  router.push(`/products/${productId}`)
}

// 获取分类名称的方法
const getCategoryName = (categoryId) => {
  const categoryMap = {
    'all': '全部',
    'ai': 'AI工具',
    'data': '数据分析',
    'assist': '智能助手',
    'other': '其他'
  }
  return categoryMap[categoryId] || categoryId
}

onMounted(() => {
  // 获取URL中的产品ID参数
  const productId = route.params.id
  if (productId) {
    fetchProductData(productId)
  }
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.btn-sm {
  @apply px-3 py-1.5 text-sm;
}

.btn-primary-outline {
  @apply text-primary-500 border border-primary-500 rounded-lg px-4 py-2 hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style> 