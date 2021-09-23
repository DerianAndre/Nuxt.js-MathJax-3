<template>
	<div class="container">
		<div class="card shadow">
			<div class="card-body">
				<h2 class="mb-4">Component Props</h2>
				<div class="hstack gap-3 flex-wrap mb-4">
					<a target="_blank" rel="noopener nofollow" class="btn btn-primary" href="https://docs.mathjax.org/en/latest/index.html">
						MathJax documentation
					</a>
					<a target="_blank" rel="noopener nofollow" class="btn btn-primary" href="https://docs.mathjax.org/en/latest/web/start.html">
						MathJax components
					</a>
				</div>
				<div class="table-responsive mb-4">
					<table class="table table-hover font-monospace">
						<thead class="table-dark text-uppercase small">
							<tr>
								<th class="rounded-start">Name</th>
								<th>Type</th>
								<th>Values</th>
								<th>Default</th>
								<th class="rounded-end">Description</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in props" :key="item.name">
								<td><code v-html="item.name"/></td>
								<td class="small text-muted" v-html="item.type" />
								<td><span v-html="item.values" v-if="item.values"/></td>
								<td><code v-html="item.default"/></td>
								<td class="small" v-html="item.description" />
							</tr>
						</tbody>
					</table>
				</div>
				<h2>Default config</h2>
				<p>Using <code>config</code> will override the default configuration, so make sure you add everything you need!</p>
<pre class="language-json">
   {
      tex: {
         inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
         ],
         displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]']
         ],
         processEscapes: true,
         processEnvironments: true,
      }
   }
</pre>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			props: [
				{
					name: 'data',
					type: 'String | Boolean',
					values: '—',
					default: 'false',
					description: 'The content to display with MathJax 3'
				}, {
					name: 'safe',
					type: 'Boolean',
					values: 'true, false',
					default: 'true',
					description: 'Render <code>data</code> as <code>text</code> (true) or <code>html</code> (false)'
				}, {
					name: 'display',
					type: 'String',
					values: 'block, inline, or custom',
					default: 'block',
					description: 'The display style of the component',
				}, {
					name: 'config',
					type: 'Object',
					values: '—',
					default: '{}',
					description: 'The configuration options for MathJax'
				}, {
					name: 'update',
					type: 'Any',
					values: '—',
					default: 'null',
					description: 'Force a MathJax re-render with typeset'
				},	{
					name: 'source',
					type: 'String',
					values: 'local, cdn',
					default: 'local',
					description: 'The source of the MathJax library, <code>local</code> in static or <code>cdn</code> from web.'
				}, {
					name: 'file',
					type: 'String',
					values: '—',
					default: 'tex-mml-chtml',
					description: 'The configuration file name of MathJax (component file). <b>DON\'T</b> put <code>.js</code>'
				}
			]
		}
	},
}
</script>