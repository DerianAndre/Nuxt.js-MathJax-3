<template>
	<header class="header bg-light shadow mb-3"
		:class="{
			'navbar-top':    scrollPosition < scrollOffset,
			'navbar-scroll': scrollPosition > scrollOffset,
			'navbar-open':   navbarOpen
		}"
	>
		<nav class="navbar navbar-light navbar-expand-md">
			<div class="container justify-content-start">
				<NuxtLink to="/" class="navbar-brand">
					Nuxt.js <3
				</NuxtLink>

				<button @click="navbarOpen = !navbarOpen" type="button" class="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<i class="bi bi-list fs-1"></i>
				</button>

				<div id="navbarCollapse" class="navbar-collapse collapse flex-grow-0">
					<ul class="navbar-nav">
						<li v-for="item in menu" :key="item.name">
							<NuxtLink :to="item.to" class="nav-link">{{ item.name}}</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				navbarOpen:     false,
				scrollOffset:   100,
				scrollPosition: 0,
				menu: [
					{ name: 'Examples', to: '/' },
					{ name: 'Component Props', to: '/props' },
				]
			}
		},

		methods: {
			updateScroll() {
			this.scrollPosition = window.scrollY
			}
		},
		
		mounted() {
			this.updateScroll();
			window.addEventListener('scroll', this.updateScroll);
		}
	}
</script>