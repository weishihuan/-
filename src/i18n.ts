import { createI18n } from 'vue-i18n'
import zh from './locales/zh-cn'
import en from './locales/en'

const i18n = createI18n({
	legacy: false, // 必须设置为false以支持Vue3组合式API
	locale: localStorage.getItem('language') || 'zh', // 从本地存储读取或默认中文
	fallbackLocale: 'zh', // 当未匹配到指定语言时使用的回退语言
	globalInjection: true, // 是否启用全局注入 `$t`
	messages: {
		'zh': zh,
		'en': en
	}
})

export default i18n