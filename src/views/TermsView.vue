<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">{{$t('Term of service')}}</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            {{$t('Last Updated')}}：{{ new Date().toLocaleDateString('zh-CN') }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. 服务协议的接受</h2>
            <p class="text-gray-600 mb-4">
              欢迎使用GoPay（"我们"、"GoPay"或"平台"）提供的服务。通过访问或使用我们的服务，即表示您同意接受本服务条款的所有条件和条款。如果您不同意这些条款，请勿使用我们的服务。
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. 服务说明</h2>
            <p class="text-gray-600 mb-4">
              GoPay是一个很好的平台。我们提供：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>XXXXXX</li>
              <li>新媒体内容创作工具</li>
              <li>技术咨询和支持</li>
              <li>相关培训和资源</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. 用户责任</h2>
            <p class="text-gray-600 mb-4">作为用户，您同意：</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>提供真实、准确的信息</li>
              <li>保护账户安全</li>
              <li>遵守相关法律法规</li>
              <li>合理使用平台资源</li>
              <li>尊重知识产权</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. 知识产权</h2>
            <p class="text-gray-600 mb-4">
              关于平台内容和服务的知识产权规定：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>平台原创内容的版权归属</li>
              <li>用户生成内容的权利约定</li>
              <li>AI生成内容的知识产权说明</li>
              <li>第三方内容的使用规范</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. 服务变更和终止</h2>
            <p class="text-gray-600 mb-4">
              我们保留以下权利：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>修改或终止服务的权利</li>
              <li>更新服务条款的权利</li>
              <li>限制或终止用户访问的权利</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. 免责声明</h2>
            <p class="text-gray-600 mb-4">
              我们的免责范围包括但不限于：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>服务中断或故障</li>
              <li>数据丢失或损坏</li>
              <li>第三方行为造成的损失</li>
              <li>不可抗力因素</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. 联系方式</h2>
            <p class="text-gray-600 mb-4">
              如果您对本服务条款有任何疑问，请联系我们：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>邮箱：Wsh@leepm.com</li>
              <li>地址：中国，长沙</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 服务条款页面组件逻辑
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style> 