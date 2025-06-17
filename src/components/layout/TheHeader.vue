<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <!-- <router-link to="/" class="flex items-center gap-2">
          <img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="头图标" class="h-10" />
        </router-link> -->
							<span class="yuyan">
							<a-dropdown placement="bottom">
							    <a class="ant-dropdown-link" @click.prevent>
							      <TranslationOutlined />
							      
							    </a>
							    <template #overlay>
							      <a-menu>
							        <a-menu-item>
							          <a href="javascript:;" @click="translate('zh')">中文</a>
							        </a-menu-item>
							        <a-menu-item>
							          <a href="javascript:;" @click="translate('en')">英语</a>
							        </a-menu-item>
							      </a-menu>
							    </template>
							  </a-dropdown>
							</span>
							<span class="relative inline-block ml-0 md:ml-3 transform hover:scale-105 transition-transform duration-500 group">
							<!-- 3D效果底层 - 增强层次感 -->
							<span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-80 transform -skew-x-12 rounded translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></span>
							<!-- 发光效果 - 增强立体感 -->
							<span class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-80 transform -skew-x-12 rounded blur-sm group-hover:blur-md transition-all duration-300"></span>
							<!-- 文字内部有微妙的渐变和闪光效果 -->
							<span class="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white font-extrabold px-3 py-1.5 flex items-center overflow-hidden">
								GOPAY
							<span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
							</span>
							 <!-- 右上角装饰点 -->
							<span class="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
							<!-- 右下角装饰线 -->
							<span class="absolute bottom-0 right-0 w-6 h-px bg-white/70 group-hover:w-10 transition-all duration-300"></span>
							 <!-- 动态科技线条装饰 -->
							<span class="absolute inset-0 border border-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"></span>
						</span>
        <!-- 导航菜单 - 桌面端 -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" 
            class="nav-link" 
            :class="{ 'nav-link-active': $route.path === item.path }">
            {{ item.label }}
          </router-link>
        </nav>

        <!-- 触发移动端菜单按钮 -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-gray-700 p-2">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t py-4 shadow-md">
      <div class="container-custom">
        <nav class="flex flex-col space-y-4">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" 
            class="nav-link block py-2" 
            :class="{ 'nav-link-active': $route.path === item.path }"
            @click="isMobileMenuOpen = false">
            {{ item.label }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n';
import i18n from '@/i18n'
import {
  TranslationOutlined,
} from '@ant-design/icons-vue';
const { t } = useI18n();
const isMobileMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t('Home Page'), path: '/' },
  { label: t('Service'), path: '/products' },
  { label: t('Activity'), path: '/projects' },
  { label: t('About Us'), path: '/about' }
])

function translate(lang) {
  localStorage.setItem('lang', lang)
  i18n.global.locale.value = lang
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-500 transition-colors font-medium;
}

.nav-link-active {
  @apply text-primary-500 font-semibold;
}
.yuyan{
	position: absolute;
	right: 40px;
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 100%;
}
</style> 