<template>
  <div>
    <!-- 页面标题区域 - 增强科技感设计 -->
    <section class="relative overflow-hidden">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-30"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-40"></div>
      
      <!-- 模糊光晕效果 -->
      <div class="absolute -top-20 -left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary-400/30 rounded-full blur-3xl opacity-30"></div>
      
      <div class="bg-gradient-to-br from-primary-900 to-primary-700 py-16 md:py-24 relative z-10">
        <div class="container-custom relative">
          <!-- 3D科技感悬浮标签 -->
          <div class="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 text-primary-700 text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-primary-500/20">
            <span class="flex items-center">
              <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              <span class="relative">
                {{$t('Unleash the Power of Exclusive Campaigns')}}
                <span class="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></span>
              </span>
            </span>
          </div>
          
          <!-- 优化标题区域，增加科技感和视觉冲击力 -->
          <div class="relative">
            <h1 class="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight flex flex-col md:flex-row items-start md:items-center">
              <span class="relative inline-block ml-0 md:ml-3 transform hover:scale-105 transition-transform duration-500 group">
                <!-- 3D效果底层 - 增强层次感 -->
                <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-80 transform -skew-x-12 rounded translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></span>
                
                <!-- 发光效果 - 增强立体感 -->
                <span class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-80 transform -skew-x-12 rounded blur-sm group-hover:blur-md transition-all duration-300"></span>
                
                <!-- 文字内部有微妙的渐变和闪光效果 -->
                <span class="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white font-extrabold px-3 py-1.5 flex items-center overflow-hidden">
                  {{$t('Activity')}}
                  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                </span>
                
                <!-- 右上角装饰点 -->
                <span class="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                
                <!-- 右下角装饰线 -->
                <span class="absolute bottom-0 right-0 w-6 h-px bg-white/70 group-hover:w-10 transition-all duration-300"></span>
                
                <!-- 动态科技线条装饰 -->
                <span class="absolute inset-0 border border-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"></span>
              </span>
              
              <!-- 装饰元素 -->
              <div class="absolute -top-6 -left-8 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
              <div class="absolute -bottom-3 -right-5 w-10 h-10 border-b-2 border-r-2 border-primary-400/50 rounded-br-lg"></div>
            </h1>
            
            <!-- 动态科技装饰元素 -->
            <div class="absolute -left-4 bottom-0 flex items-center opacity-70">
              <div class="w-2 h-2 bg-primary-400 rounded-full mr-1 animate-pulse"></div>
              <div class="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
            </div>
            
            <!-- 数据码装饰 - 更加细致 -->
            <div class="absolute -right-12 bottom-2 text-xs font-mono text-primary-300/50 tracking-widest opacity-70">
              <div class="flex items-center">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-primary-400/30 mr-1.5"></span>
                10011
              </div>
              <div class="flex items-center">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-secondary-400/30 mr-1.5"></span>
                01101
              </div>
            </div>
            
            <!-- 霓虹灯光晕效果 -->
            <div class="absolute -top-10 -left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow opacity-50" style="animation-delay: 1s;"></div>
            
            <!-- 科技网格线 -->
            <div class="absolute right-0 bottom-0 w-20 h-20 opacity-10">
              <div class="w-full h-full grid-pattern"></div>
            </div>
          </div>
          
          <p class="text-white/90 text-xl max-w-2xl mb-8 leading-relaxed relative">
            {{$t('Get ready to get excited about GOPAY is exciting promotional products with exclusive promotions, discounts, and rewards.')}}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"></span>
          </p>
          
          <!-- 技术指标卡片 - 更现代的设计 -->
          <div class="mt-8 flex flex-wrap gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center group hover:-translate-y-1 transition-all duration-300 hover:bg-white/15">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <div class="text-white/80 text-sm font-light">{{$t('Provide services')}}</div>
                <div class="text-white font-bold text-xl">150+</div>
              </div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center group hover:-translate-y-1 transition-all duration-300 hover:bg-white/15">
              <div class="flex-shrink-0 w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <div class="text-white/80 text-sm font-light">{{$t('Number of users')}}</div>
                <div class="text-white font-bold text-xl">120w+</div>
              </div>
            </div>
          </div>
          
          <!-- 科技感浮动元素 - 增加交互动画 -->
          <div class="absolute bottom-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center animate-float z-30 shadow-lg shadow-primary-500/10 hover:shadow-primary-500/30 transition-shadow duration-300" style="animation-delay: 0.5s">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white transform hover:rotate-180 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目列表 - 科技感卡片设计 -->
    <section class="section relative overflow-hidden">
      <!-- 带纹理的科技感背景 -->
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-90"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-secondary-300"></span>
            <span class="mx-3 text-sm font-semibold text-secondary-600 uppercase tracking-wide">{{$t('ACTIVITY')}}</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-secondary-300"></span>
          </div>
          <h2 class="mb-4">{{$t('wonderful')}}<span class="tech-gradient">{{$t('Activity')}}</span></h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{$t('Get ready to get excited about GOPAY is exciting promotional products with exclusive promotions, discounts, and rewards.')}}</p>
        </div>
		<div class="relative">
		  <!-- 贡献时间线 - 改进的设计 -->
		  <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300 z-0 rounded-full"></div>
		  
		  <div class="relative z-10 space-y-24">
		    <div v-for="(contribution, index) in contributions" :key="index" 
		         class="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
		         
		      <!-- 左侧内容 -->
		      <div :class="[index % 2 === 0 ? 'md:w-1/2 md:text-right md:pr-12' : 'md:w-1/2 md:order-3 md:pl-12']" 
		           data-aos="fade-right" 
		           :data-aos-delay="index * 100">
		        <div class="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 md:inline-block w-full md:w-auto relative">
		          <!-- 装饰角落 -->
		          <div class="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-lg opacity-50"
		              :class="[
		                index === 0 ? 'border-primary-300' : 
		                index === 1 ? 'border-secondary-300' : 
		                index % 2 === 0 ? 'border-accent-300' : 
		                'border-purple-300'
		              ]"></div>
		          <div class="absolute bottom-0 right-0 w-5 h-5 border-b border-r rounded-br-lg opacity-50"
		              :class="[
		                index === 0 ? 'border-primary-300' : 
		                index === 1 ? 'border-secondary-300' : 
		                index % 2 === 0 ? 'border-accent-300' : 
		                'border-purple-300'
		              ]"></div>
		              
		          <!-- 日期标签 - 更现代的设计 -->
		          <div class="inline-block px-4 py-1.5 mb-3 rounded-full shadow-sm"
		             :class="[
		               index === 0 ? 'bg-primary-100 text-primary-700' : 
		               index === 1 ? 'bg-secondary-100 text-secondary-700' : 
		               index % 2 === 0 ? 'bg-accent-100 text-accent-700' : 
		               'bg-purple-100 text-purple-700'
		             ]">
		            <div class="text-xs font-medium flex items-center">
		              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
		              </svg>
		              {{ contribution.date }}
		            </div>
		          </div>
		          
		          <!-- 项目名称 - 更精美的排版 -->
		          <h3 class="text-xl font-bold mb-3 relative inline-block"
		            :class="[
		              index === 0 ? 'text-primary-700' : 
		              index === 1 ? 'text-secondary-700' : 
		              index % 2 === 0 ? 'text-accent-700' : 
		              'text-purple-700'
		            ]">
		            {{ contribution.project }}
		            <span class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r rounded-full opacity-40"
		                 :class="[
		                   index === 0 ? 'from-primary-200 to-primary-300' : 
		                   index === 1 ? 'from-secondary-200 to-secondary-300' : 
		                   index % 2 === 0 ? 'from-accent-200 to-accent-300' : 
		                   'from-purple-200 to-purple-300'
		                 ]">
		            </span>
		          </h3>
		          
		          <!-- 贡献描述 - 优化排版 -->
		          <p class="text-gray-600 leading-relaxed">{{ contribution.description }}</p>
		          
		          <!-- 热门标签 - 更精致的设计 -->
		          <div class="flex flex-wrap gap-2 mt-4">
		            <span v-for="(tag, tagIndex) in ['热门', '精选', '最新'][index % 3].split(' ')" :key="tagIndex" 
		              class="text-xs py-1 px-3 rounded-full bg-gray-50 border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300 flex items-center">
		              <span class="w-1.5 h-1.5 rounded-full mr-1.5"
		                   :class="[
		                     index === 0 ? 'bg-primary-400' : 
		                     index === 1 ? 'bg-secondary-400' : 
		                     index % 2 === 0 ? 'bg-accent-400' : 
		                     'bg-purple-400'
		                   ]"></span>
		              {{ tag }}
		            </span>
		          </div>
		        </div>
		      </div>
		      
		      <!-- 中间节点 - 增强视觉效果 -->
		      <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10 shadow-lg relative"
		           :class="[
		             index === 0 ? 'bg-gradient-to-br from-primary-400 to-primary-600' : 
		             index === 1 ? 'bg-gradient-to-br from-secondary-400 to-secondary-600' : 
		             index % 2 === 0 ? 'bg-gradient-to-br from-accent-400 to-accent-600' : 
		             'bg-gradient-to-br from-purple-400 to-purple-600'
		           ]">
		        <!-- 内部光晕 -->
		        <div class="absolute inset-1.5 rounded-full bg-white/30"></div>
		        
		        <!-- 闪光效果 -->
		        <div class="absolute inset-0 rounded-full animate-ping opacity-30"
		             :class="[
		               index === 0 ? 'bg-primary-500' : 
		               index === 1 ? 'bg-secondary-500' : 
		               index % 2 === 0 ? 'bg-accent-500' : 
		               'bg-purple-500'
		             ]" 
		             :style="`animation-delay: ${index * 0.5}s; animation-duration: 3s;`"></div>
		        
		        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		          <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
		          <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
		          <path v-else-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
		          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
		        </svg>
		        
		        <!-- 时间节点连接线 -->
		        <div v-if="index < contributions.length - 1" class="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-gray-200 to-transparent top-14 left-1/2 transform -translate-x-1/2"></div>
		      </div>
		      
		      <!-- 右侧内容（或左侧，取决于index） -->
		      <div :class="[index % 2 === 0 ? 'md:w-1/2 md:order-3 md:pl-12' : 'md:w-1/2 md:text-right md:pr-12']"></div>
		    </div>
		  </div>
		</div>
      </div>
    </section>

    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// 开源贡献数据
const contributions = [
  {
    date: '2025年5月',
    project: '满200-20',
    description: '这是一个活动哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼'
  },
  {
    date: '2025年5月',
    project: '满200-20',
    description: '这是一个活动哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼'
  },
  {
    date: '2025年5月',
    project: '满200-20',
    description: '这是一个活动哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼'
  },
  {
    date: '2025年5月',
    project: '满200-20',
    description: '这是一个活动哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼'
  },
]


</script>

<style>
/* 渐变背景 */
.bg-gradient-tech {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

/* 卡片玻璃效果 */
.card-glass {
  border-radius: 1rem;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.05),
    0 4px 8px rgba(0,0,0,0.05),
    inset 0 0 0 1px rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  backdrop-filter: blur(4px);
}

/* 科技盒子效果 */
.tech-box {
  border-radius: 1rem;
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.05),
    0 6px 12px rgba(0,0,0,0.03);
  overflow: hidden;
}

/* 动画效果 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* 网格和电路背景 */
.grid-pattern {
  background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.circuit-bg {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* 点状网格背景 */
.dot-grid {
  background-image: radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px), radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

/* 发光效果 */
.glow-effect {
  position: relative;
  z-index: 1;
}

.glow-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.5), transparent 70%);
  border-radius: inherit;
  filter: blur(15px);
}

.glow-effect:hover::after {
  opacity: 0.8;
}

/* 技术渐变文本 */
.tech-gradient {
  background: linear-gradient(to right, #1e40af, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* 慢速脉冲动画 */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 霓虹文字效果 */
.neon-text {
  text-shadow: 
    0 0 5px rgba(59, 130, 246, 0.5),
    0 0 10px rgba(59, 130, 246, 0.3),
    0 0 15px rgba(59, 130, 246, 0.1);
}
</style>