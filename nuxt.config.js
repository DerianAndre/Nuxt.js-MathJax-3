export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Server
	server: {
		host: '0.0.0.0'
	},
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Nuxt.js + MathJax 3',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
		],
		script: [
			{ src: 'https://polyfill.io/v3/polyfill.min.js?features=es6', body: true },
		]
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/scss/style.scss',
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		//{ src: '~/plugins/bootstrap.client.js' }
	],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [

	],
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [

	],
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			vue: {
				compilerOptions: {
					whitespace: 'condense',
					preserveWhitespace: false
				}
			},
			sass: {
				implementation: require('sass')
			},
			scss: {
				implementation: require('sass')
			}
		}
	}
}
