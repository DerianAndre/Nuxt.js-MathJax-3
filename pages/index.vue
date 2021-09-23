<template>
	<div class="container">
		<div class="card shadow">
			<div class="card-body">
				<h1 class="mb-4">Nuxt.js + MathJax 3</h1>
				<p class="lead mb-4">
					An updated version of <a href="">vue-mathjax</a> designed for Nuxt.js.
				</p>
				<div class="d-md-inline-block text-center mx-auto mx-md-0 mb-3">
					<code class="py-2 px-3 mb-4" v-text="code"/><br>
					<div class="d-inline-block rounded-3 py-2 px-3 shadow-sm border border-1 bg-light text-center">
						<Math data="E=mc^{2}" display="inline"/>
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-12 col-xl-4 mb-4">
						<h2 class="h4 mb-4">Example</h2>
						<p>Ready to go, just include the component!</p>
						<div class="form-floating mb-auto">
							<textarea id="mathjax" class="form-control h-100" v-model="mathjax"/>
							<label for="mathjax">Input</label>
						</div>
					</div>
					<div class="col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-start mb-4">
						<div class="mb-4">
							<code class="bg-dark text-light py-1 px-2 rounded">
								display="block"
							</code>
						</div>
						<div  class="d-inline-block rounded-3 py-2 px-3 shadow-sm border border-1 bg-light text-center">
							<Math :data="mathjax" display="block"/>
						</div>
					</div>
					<div class="col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-start mb-4">
						<div class="mb-4">
							<code class="bg-dark text-light py-1 px-2 rounded">
								display="inline"
							</code>
						</div>
						<div  class="d-inline-block rounded-3 py-2 px-3 shadow-sm border border-1 bg-light text-center">
							<Math :data="mathjax" display="inline"/>
						</div>
					</div>
					<div class="col-12 mb-4">
						<hr>
					</div>
					<!-- Examples 2 -->
					<div class="col-12 col-xl-4 mb-4">
						<h2 class="h4 mb-4">Example 2</h2>
						<p>In this example we need to add custom delimiters, in this case <code>( )</code>, this is if you provide a custom configuration.</p>
						<div class="form-floating mb-auto">
							<textarea id="mathjax" class="form-control h-100" v-model="custom"/>
							<label for="mathjax">Input (Custom)</label>
						</div>
					</div>
					<div class="col-12 col-xl-4 d-flex flex-column justify-content-center align-items-start mb-4">
						<div class="mb-4">
							<code class="bg-dark text-light py-1 px-2 rounded">
								display="custom"
							</code>
						</div>
						<div  class="d-inline-block rounded-3 py-2 px-3 shadow-sm border border-1 bg-light text-center">
							<Math :data="custom" display="custom"/>
						</div>
					</div>
					<div class="col-12 mb-4">
						<hr>
					</div>
					<div class="col-12 col-xl-4">
						<h2 class="h4 mb-4">Example 3</h2>
						<p>This won't do anything visually, but can be helpful when you need to re-render for some reason.</p>
						<button class="btn btn-primary mb-4" @click="counter += 1">
							Click to re-render
							<span class="ms-2 badge bg-dark" v-if="counter > 0">
								{{ counter }} 
								time<span v-if="counter > 1">s</span>
							</span>
						</button>
					</div>
					<div class="col-12 col-xl-4 mb-4 d-flex flex-column justify-content-center align-items-start">
						<div  class="d-inline-block rounded-3 py-2 px-3 shadow-sm border border-1 bg-light text-center">
							<Math data="\text{Equreka!...}E=mc^{2}" display="block" :update="counter"/>
						</div>
						<small class="text-muted mt-2">Equreka is a wink wink 😉</small>
					</div>
				</div>
			</div>
			<div class="card-footer bg-transparent border-top py-3">
				<p class="text-muted m-0">Made with ❤️ by <a href="https://derianandre.com/">DerianAndre</a></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				code: '<Math data="E=mc^{2}" display="inline"/>',
				custom: '\\(\\int_{-\\infty}^\\infty \\frac{1}{1-x^2} dx\\)',
				mathjax: '\\int_{-\\infty}^\\infty \\frac{1}{1-x^2} dx',
				counter: 0,
				reRender: false
			}
		},
	}
</script>

<style>

</style>