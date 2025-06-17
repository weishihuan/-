<template>
	<div>
		<!-- Hero区域 -->
		<section class="relative overflow-hidden">
			<!-- 科技感网格背景 -->
			<div class="absolute inset-0 circuit-bg opacity-30"></div>
			<!-- 动态粒子背景 -->
			<div class="absolute inset-0 dot-grid opacity-40"></div>
			<!-- 模糊光晕效果 -->
			<div class="absolute -top-20 -left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl opacity-30"></div>
			<div class="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary-400/30 rounded-full blur-3xl opacity-30">
			</div>
			<div
				class="container-custom py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
				<div class="md:w-[45%] lg:w-[48%] mb-12 md:mb-0 ">
					<h1 class="mb-6 leading-tight">
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
						<span class="relative inline-block tech-gradient">
							{{$t('cashless never been so rewarding.')}}
						</span>
					</h1>
					<p class="text-xl text-gray-600 mb-8 max-w-md">
						{{$t('Streamline Bills, Simplify Life: Your One-Stop Bill Management App.')}}
					</p>
					<div class="flex flex-wrap gap-4">
						<router-link to="/products" class="btn btn-primary glow-effect group">
							{{$t('Download App')}}
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 ml-1 inline-block transition-transform group-hover:translate-x-1"
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</router-link>
					</div>
				</div>

				<div class="md:w-[45%] lg:w-[48%] relative">
					<!-- 主图 -->
					<div class="relative z-20 mx-auto md:max-w-[90%] lg:max-w-full">
						<div
							class="absolute -inset-0.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-400 rounded-2xl blur opacity-40 animate-pulse-slow">
						</div>
						<div class="card-glass relative overflow-hidden z-10">
							<div class="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/10]">
								<!-- 使用高质量开源AI技术相关图片替换 -->
								<img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1080"
									class="w-full h-full object-cover" />

								<!-- 网格线覆盖 -->
								<div class="absolute inset-0 grid-pattern opacity-20 z-10" style="filter: blur(0.2px)">
								</div>

								<!-- 科技感光效 -->
								<div class="absolute -inset-0.5 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
									style="backdrop-filter: blur(1px)"></div>

								<!-- 中央科技仪表盘元素 -->
								<div class="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-30">
									<!-- 外环 -->
									<div class="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center relative"
										style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent); box-shadow: 0 0 15px rgba(59, 130, 246, 0.15); backdrop-filter: blur(1px);">
										<!-- 内环 -->
										<div class="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center"
											style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%); box-shadow: inset 0 0 6px rgba(59, 130, 246, 0.2);">
											<div class="text-white text-center text-xs font-semibold"
												style="text-shadow: 0 0 4px rgba(255,255,255,0.5);">
												GoPay
											</div>
										</div>

										<!-- 点缀小圆点 -->
										<div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-blue-400"
											style="filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"></div>
										<div class="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-300"
											style="filter: drop-shadow(0 0 1px rgba(59, 130, 246, 0.6))"></div>

										<!-- 动态旋转线 -->
										<div class="absolute inset-0 rounded-full"
											style="border: 1px dashed rgba(255,255,255,0.3); animation: spin 8s linear infinite;">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- 装饰元素位置调整，减少与左侧内容重叠 -->
					<div class="absolute -bottom-10 right-0 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50">
					</div>
					<div class="absolute -top-10 left-0 w-24 h-24 bg-secondary-300 rounded-full blur-3xl opacity-50">
					</div>

					<!-- 科技感浮动元素位置调整，提高z-index，优化边缘效果 -->
					<div class="absolute top-1/4 -right-4 w-16 h-16 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/40 flex items-center justify-center animate-float z-30"
						style="animation-delay: 0.5s; box-shadow: 0 4px 8px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.8)">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-500" fill="none"
							viewBox="0 0 24 24" stroke="currentColor"
							style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
						</svg>
					</div>

					<div class="absolute top-2/3 -left-4 w-16 h-16 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/40 flex items-center justify-center animate-float z-30"
						style="animation-delay: 1s; box-shadow: 0 4px 8px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.8)">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary-500" fill="none"
							viewBox="0 0 24 24" stroke="currentColor"
							style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>
				</div>
			</div>
		</section>

		<!-- 特色产品区域 -->
		<section class="section bg-white relative overflow-hidden">
			<!-- 背景装饰 -->
			<div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-70"></div>
			<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-70"></div>

			<div class="container-custom relative z-10">
				<div class="text-center mb-12">
					<div class="inline-flex items-center justify-center mb-3">
						<span class="h-px w-8 bg-gradient-to-r from-transparent to-primary-300"></span>
						<span class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide">
							{{$t('featured products')}}
						</span>
						<span class="h-px w-8 bg-gradient-to-l from-transparent to-primary-300"></span>
					</div>
					<h2 class="mb-4"><span class="tech-gradient">{{$t('Simple, Secure & Rewards')}}</span></h2>
					<p class="text-gray-600 max-w-2xl mx-auto">
						{{$t('Bill payments made easy and rewarding with GOPAY, where convenience meets savings!')}}
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div v-for="(product, index) in featuredProducts" :key="index" class="group relative ">
						<!-- 卡片主体 -->
						<div
							class="card h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
							<div class="h-48 bg-gray-100 overflow-hidden relative">
								<!-- 图片 -->
								<img :src="product.image" :alt="product.title"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

								<!-- 顶部状态指示器 -->
								<!-- <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm">
                  {{ ['新品', '热门', '推荐'][index] }}
                </div> -->
							</div>

							<div class="p-6 flex flex-col flex-grow">
								<h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
									{{ product.title }}
								</h3>
								<p class="text-gray-600 mb-4 flex-grow">{{ product.description }}</p>
								<!-- <router-link :to="`/products/${product.id}`"
									class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group-hover:translate-x-1 transition-transform duration-300">
									了解更多
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none"
										viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</router-link> -->
							</div>
						</div>

						<!-- 悬浮效果遮罩 -->
						<div
							class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300 pointer-events-none rounded-xl">
						</div>
					</div>
				</div>

				<div class="mt-12 text-center">
					<router-link to="/products" class="btn btn-outline group">
						{{$t('Download App')}}
						<svg xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 ml-1 inline-block transition-transform group-hover:translate-x-1" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</router-link>
				</div>
			</div>
		</section>

		<!-- 开源项目区域 -->
		<section class="section relative">
			<!-- 带纹理的科技感背景 -->
			<div class="absolute inset-0 circuit-bg opacity-30"></div>
			<div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-90"></div>

			<div ref="scrollContainer" class="container-custom relative z-10">
				<div class="text-center mb-12">
					<div class="inline-flex items-center justify-center mb-3">
						<span class="h-px w-8 bg-gradient-to-r from-transparent to-secondary-300"></span>
						<span
							class="mx-3 text-sm font-semibold text-secondary-600 uppercase tracking-wide">{{$t('featured products')}}</span>
						<span class="h-px w-8 bg-gradient-to-l from-transparent to-secondary-300"></span>
					</div>
					<h2 class="mb-4"><span class="tech-gradient">{{$t('Simple, Secure & Rewards')}}</span></h2>
					<p class="text-gray-600 max-w-2xl mx-auto">
						{{$t('Bill payments made easy and rewarding with GOPAY, where convenience meets savings!')}}
					</p>
				</div>
				<!-- <div ref="scrollImgWrapper" class="overflow-hidden relative" style="height: 320px;">
				  <img
				    ref="scrollImg"
				    src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080"
				    style="width: 900px; height: 100%;"
				    @load="onImgLoad"
				  />
				</div> -->
				<div class="overflow-hidden relative animate-item" style="height: 320px; width: 50%;">
					<img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080"
						alt="可横向滚动的图片" />
				</div>
				<div class="mt-12 text-center">
					<router-link to="/projects" class="btn btn-outline">
						{{$t('Download App')}}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</router-link>
				</div>
			</div>
		</section>

		<!-- 联系我们区域 -->
		<section class="section bg-gradient-tech relative overflow-hidden">
			<!-- 科技感背景元素 -->
			<div class="absolute inset-0 dot-grid opacity-10"></div>
			<div class="absolute inset-0 circuit-bg opacity-10"></div>

			<!-- 装饰光晕 -->
			<div class="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
			<div class="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

			<div class="container-custom text-center relative z-10">
				<div
					class="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium">
					<span class="flex items-center">
						<span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
						{{$t('Looking forward to meeting you')}}
					</span>
				</div>

				<h2 class="mb-6 text-white">{{$t('Please continue to follow us')}}<span class="relative inline-block">
						<span
							class="absolute inset-x-0 bottom-0 h-3 bg-white/20 -z-10 transform skew-x-3"></span></span>
				</h2>

				<p class="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto">
					{{$t('More amazing features are coming soon that will enhance your experience.')}}
				</p>

				<router-link to="/about"
					class="btn bg-white text-primary-600 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
					{{$t('Contact Us')}}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
				</router-link>

				<!-- 技术指标 -->
				<div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
						<div class="text-2xl font-bold text-white mb-1">{{$t('Referral Program')}}</div>
						<div class="text-white/80 text-sm">
							{{$t('Visibility of your earnings from your community circles.')}}
						</div>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
						<div class="text-2xl font-bold text-white mb-1">{{$t('Loyalty Program')}}</div>
						<div class="text-white/80 text-sm">{{$t('Choose to accumulate points for gift redemption.')}}
						</div>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
						<div class="text-2xl font-bold text-white mb-1">{{$t('Expenditure Analysis')}}</div>
						<div class="text-white/80 text-sm">{{$t('A personalized dashboard on your e-transactions.')}}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		watch
	} from 'vue'
	import {
		useI18n
	} from 'vue-i18n';
	const {
		t
	} = useI18n();
	const isMobileMenuOpen = ref(false)
	let ticking = false;

	// 检查所有.animate-item元素，根据滚动位置设置其--scroll-progress变量，实现滚动驱动的动画
	function checkScroll() {
		const windowHeight = window.innerHeight;
		document.querySelectorAll('.animate-item').forEach(el => {
			const rect = el.getBoundingClientRect();
			// 计算元素可见度，范围0~1，决定动画进度
			const visible = Math.min(1, Math.max(0, (windowHeight * 0.8 - rect.top) / rect.height));
			el.style.setProperty('--scroll-progress', visible);
		});
		ticking = false;
	}

	// 滚动事件节流处理，避免高频触发，提升性能
	function onScroll() {
		if (!ticking) {
			window.requestAnimationFrame(checkScroll);
			ticking = true;
		}
	}

	// 监听页面滚动和页面加载，触发动画进度计算
	window.addEventListener('scroll', onScroll);
	window.addEventListener('load', checkScroll);
	// 模拟数据
	const featuredProducts = [{
			id: 'watermark',
			title: t('Cash Rebates'),
			description: t(
				'Every bill payment is a chance to save! Get money back into your wallet every time you pay your bill.'
			),
			image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1080',
			category: 'ai-tools'
		},
		{
			id: 'legal-eye',
			title: t('Convenience'),
			description: t(
				'Manage all your bills in one place. Check out our useful features that make bill payment a satisfying way.'
			),
			image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
			category: 'enterprise'
		},
		{
			id: 'id-photo',
			title: t('Rewards'),
			description: t(
				'Start saving big with our exciting campaigns and rewards, from exclusive discounts to surprise gifts.'
			),
			image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080',
			category: 'platform'
		},
		{
			id: 'id-photo',
			title: t('Secure & Reliable'),
			description: t(
				'Pay securely with a licensed e-wallet, with your transactions are safe, and your personal information is kept confidential.'
			),
			image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080',
			category: 'platform'
		}
	]
</script>

<style>
	.animate-item {
		opacity: 1;
		transform: translateX(calc(30vw * (1 - var(--scroll-progress, 0))));
		will-change: transform;
		transition: none;
	}

	/* 小屏幕下减少移动距离，避免动画过大 */
	@media (max-width: 640px) {
		.animate-item {
			transform: translateX(calc(40vw * (1 - var(--scroll-progress, 0))));
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse-subtle {

		0%,
		100% {
			opacity: 0.8;
		}

		50% {
			opacity: 1;
		}
	}

	/* 卡片容器样式优化 */
	.card-glass {
		/* 增加圆角 */
		border-radius: 1rem;
		/* 多层阴影效果 */
		box-shadow:
			0 1px 2px rgba(0, 0, 0, 0.05),
			0 4px 8px rgba(0, 0, 0, 0.05),
			inset 0 0 0 1px rgba(255, 255, 255, 0.15);
		/* 平滑边缘 */
		border: 1px solid rgba(255, 255, 255, 0.1);
		/* 确保内容不超出边界 */
		overflow: hidden;
		/* 轻微模糊效果软化边缘 */
		backdrop-filter: blur(4px);
	}

	/* 为圆角添加微妙渐变效果，减轻锯齿感 */
	.card-glass::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		padding: 1px;
		background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), transparent);
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: destination-out;
		mask-composite: exclude;
		pointer-events: none;
	}
</style>