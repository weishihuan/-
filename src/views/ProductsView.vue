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
			<div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40">
			</div>

			<div class="container-custom relative z-10">
				<div
					class="inline-block px-3 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
					<span class="flex items-center">
						<span class="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
						Service
					</span>
				</div>
				<h1 class="text-white mb-4">{{$t('ours')}}<span class="relative inline-block">
						<span
							class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>
							<span class="relative inline-block ml-0 md:ml-3 transform hover:scale-105 transition-transform duration-500 group">
							  <!-- 3D效果底层 - 增强层次感 -->
							  <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-80 transform -skew-x-12 rounded translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></span>
							  <!-- 发光效果 - 增强立体感 -->
							  <span class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-80 transform -skew-x-12 rounded blur-sm group-hover:blur-md transition-all duration-300"></span>
							  <!-- 文字内部有微妙的渐变和闪光效果 -->
							  <span class="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white font-extrabold px-3 py-1.5 flex items-center overflow-hidden">
							    {{$t('Service')}}
							    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
							  </span>
							  <!-- 右上角装饰点 -->
							  <span class="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
							  <!-- 右下角装饰线 -->
							  <span class="absolute bottom-0 right-0 w-6 h-px bg-white/70 group-hover:w-10 transition-all duration-300"></span>
							  <!-- 动态科技线条装饰 -->
							  <span class="absolute inset-0 border border-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"></span>
							</span>
					</span></h1>
				<p class="text-white text-opacity-90 text-xl max-w-2xl">
					{{$t('Bill payments made easy and rewarding with GOPAY, where convenience meets savings!')}}</p>
			</div>
		</section>

		<!-- 产品筛选 - 增强视觉吸引力 -->
		<section class="py-8 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 relative overflow-hidden">
			<!-- 装饰背景元素 -->
			<div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-40"></div>
			<div class="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-50 rounded-full opacity-30"></div>

			<div class="container-custom relative z-10">
				<!-- 分类标题区域优化 -->
				<div class="relative text-center mb-6">
					<div
						class="inline-block bg-gradient-to-r from-primary-600/10 via-primary-500/20 to-primary-600/10 rounded-xl px-6 py-2 backdrop-blur-sm">
						<div
							class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-200/20 rounded-full blur-3xl">
						</div>
						<div class="flex items-center justify-center">
							<div class="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 animate-pulse"></div>
							<span
								class="text-primary-700 font-semibold tracking-wide">{{$t('Category browsing')}}</span>
							<div class="w-1.5 h-1.5 rounded-full bg-primary-500 ml-2 animate-pulse"
								style="animation-delay: 0.5s"></div>
						</div>
					</div>
					<!-- 底部装饰线 -->
					<div
						class="h-px w-36 mx-auto mt-3 bg-gradient-to-r from-transparent via-primary-300 to-transparent">
					</div>
				</div>

				<div class="flex flex-wrap items-center justify-center gap-3 mt-6">
					<button v-for="category in categories" :key="category.id" @click="activeCategory = category.id"
						class="px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-md relative overflow-hidden group"
						:class="activeCategory === category.id ? 
              'bg-primary-500 text-white shadow-md shadow-primary-200/50 transform scale-105' : 
              'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'">
						<!-- 选中项的背景效果 -->
						<span v-if="activeCategory === category.id"
							class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-50"></span>
						<!-- 选中项的闪光效果 -->
						<span v-if="activeCategory === category.id"
							class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 transform"></span>

						<span class="relative z-10">{{ category.name }}</span>
					</button>
				</div>
			</div>
		</section>

		<!-- 产品列表 - 增强卡片设计 -->
		<section class="section bg-white relative overflow-hidden">
			<!-- 背景装饰 -->
			<div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
			<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-50"></div>

			<div class="container-custom relative z-10">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div v-for="product in filteredProducts" :key="product.id" class="group relative">
						<!-- 卡片主体 -->
						<div
							class="relative flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100">
							<div class="h-52 bg-gray-100 overflow-hidden relative">
								<!-- 产品图片 -->
								<img :src="product.image" :alt="product.title"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
							</div>

							<div class="p-6 flex flex-col flex-grow">
								<h3 class="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
									{{ product.title }}
								</h3>
							</div>
						</div>

						<!-- 悬浮效果遮罩 -->
						<div
							class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-xl transition-colors duration-300">
						</div>
					</div>
				</div>

				<!-- 无结果提示 - 优化样式 -->
				<div v-if="filteredProducts.length === 0"
					class="card text-center py-16 my-8 backdrop-blur-sm bg-white/80 border border-gray-200">
					<div class="text-gray-400 mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-700 mb-2">暂无产品</h3>
					<p class="text-gray-500 mb-6">该分类下暂时没有产品，请尝试其他分类。</p>
					<button @click="activeCategory = 'all'" class="btn btn-outline mx-auto">
						查看全部产品
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue'
	import {
		useI18n
	} from 'vue-i18n';
	const {
		t
	} = useI18n();
	
	// 分类数据
	const categories = [
	  { id: 'all', name: t('all') },
	  { id: 'ai', name: t('Telco Postpaid') },
	  { id: 'data', name: t('Telco Prepaid') },
	  { id: 'assist', name: t('Telco Prepaid International') },
	  { id: 'other', name: t('Bangladesh') },
	  { id: 'other', name: t('Philippines') },
	  { id: 'other', name: t('Myanmar') },
	  { id: 'other', name: t('Vietnam') },
	  { id: 'other', name: t('Nepal') },
	  { id: 'other', name: t('India') },
	  { id: 'other', name: t('Cambodia') },
	  { id: 'other', name: t('China') },
	  { id: 'other', name: t('Pakistan') },
	  { id: 'other', name: t('Singapore') },
	  { id: 'other', name: t('Sri Lanka') },
	  { id: 'other', name: t('Thailand') },
	  { id: 'other', name: t('Internet') },
	  { id: 'other', name: t('Electricity') },
	  { id: 'other', name: t('Water Bills') },
	  { id: 'other', name: t('TV & Radio') },
	  { id: 'other', name: t('Council Bills') },
	  { id: 'other', name: t('Loans') },
	  { id: 'other', name: t('E-wallet Top-up PINs') },
	  { id: 'other', name: t('Gaming Points') },
	]
	
	// 产品数据 - 添加更多详细信息
	const products = [
	  {
	    id: 'watermark',
	    title: '中国',
	    image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'assist',
	    isFree: true
	  },
	  {
	    id: 'id-photo',
	    title: '美国',
	    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'assist',
	    isFree: true
	  },
	  {
	    id: 'fayan',
	    title: '法国',
	    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'assist',
	    isFree: true
	  },
	  {
	    id: 'mcp-hub',
	    title: '英国',
	    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600',
	    categoryId: 'ai',
	    isFree: true
	  },
	  {
	    id: 'ai-writing',
	    title: '日本',
	    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
	    categoryId: 'ai',
	    isFree: false
	  },
	  {
	    id: 'legal-eye',
	    title: '缅甸',
	    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
	    categoryId: 'ai',
	    isFree: false
	  },
	  {
	    id: 'data-analysis',
	    title: '泰国',
	    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'data',
	    isFree: false
	  },
	  {
	    id: 'voice-assistant',
	    title: '111',
	    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'assist',
	    isFree: true
	  },
	  {
	    id: 'code-assistant',
	    title: '222',
	    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'ai',
	    isFree: true
	  },
	  {
	    id: 'data-viz',
	    title: '333',
	    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'data',
	    isFree: false
	  },
	  {
	    id: 'creative-inspiration',
	    title: '888',
	    image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1080',
	    categoryId: 'other',
	    isFree: true
	  }
	]


	// 当前活跃分类
	const activeCategory = ref('all')

	// 过滤产品
	const filteredProducts = computed(() => {
		if (activeCategory.value === 'all') {
			return products
		}
		return products.filter(product => product.categoryId === activeCategory.value)
	})

	// 获取分类名称
	const getCategoryName = (categoryId) => {
		const category = categories.find(cat => cat.id === categoryId)
		return category ? category.name : '未分类'
	}

</script>

<style>
	/* 确保全局样式匹配首页 */
	.bg-gradient-tech {
		background: linear-gradient(135deg, #3a66db 0%, #2e51bb 100%);
	}

	/* 卡片基础样式 */
	.card {
		background: white;
		border-radius: 0.75rem;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
	}

	/* 隐藏滚动条但保持功能 */
	.hide-scrollbar {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>