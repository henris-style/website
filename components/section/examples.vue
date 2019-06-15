<template>
	<section class="examples">
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="content">
					<h2>
						A few examples
					</h2>
					<p>
						Just a few, there is way more ofcourse in the documentation. But to give you an idea of what you can do and what
						Henri’s will help you do.
					</p>
				</div>
			</div>
		</div>

		<div class="scroller">
			<div class="scroller__container">
				<ul class="scroller__list">
					<li v-for="(example, idx) in examples" :key="idx" class="scroller__item">
						<button
							class="scroller__link"
							:class="[example.name.toLowerCase() == active ? 'scroller__link--active' : '']"
							@click="active = example.name.toLowerCase()"
						>
							<span class="scroller__text">{{ example.name }}</span>
						</button>
					</li>
					<li v-for="(example, idx) in examples" :key="idx" class="scroller__item">
						<button
							class="scroller__link"
							:class="[example.name.toLowerCase() == active ? 'scroller__link--active' : '']"
							@click="active = example.name.toLowerCase()"
						>
							<span class="scroller__text">{{ example.name }}</span>
						</button>
					</li>
					<li v-for="(example, idx) in examples" :key="idx" class="scroller__item">
						<button
							class="scroller__link"
							:class="[example.name.toLowerCase() == active ? 'scroller__link--active' : '']"
							@click="active = example.name.toLowerCase()"
						>
							<span class="scroller__text">{{ example.name }}</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div
					v-for="(example, idx) in examples"
					:key="idx"
					class="example"
					:class="[example.name.toLowerCase() == active ? 'example--active' : '']"
				>
					<ExampleGrid v-if="example.name.toLowerCase() === 'grid'" />
					<ExampleMenu v-if="example.name.toLowerCase() === 'menu'" />
					<ExampleColors v-if="example.name.toLowerCase() === 'colors'" />
					<ExampleAnimation v-if="example.name.toLowerCase() === 'animation'" />
					<ExampleBEM v-if="example.name.toLowerCase() === 'bem'" />
					<ExampleGradients v-if="example.name.toLowerCase() === 'gradients'" />
					<ExampleSizing v-if="example.name.toLowerCase() === 'sizing'" />
					<ExampleTypography v-if="example.name.toLowerCase() === 'typography'" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	components: {
		ExampleGrid: () => import('~/components/examples/example-grid.vue'),
		ExampleMenu: () => import('~/components/examples/example-menu.vue'),
		ExampleColors: () => import('~/components/examples/example-colors.vue'),
		ExampleAnimation: () => import('~/components/examples/example-animation.vue'),
		ExampleBEM: () => import('~/components/examples/example-bem.vue'),
		ExampleGradients: () => import('~/components/examples/example-gradients.vue'),
		ExampleSizing: () => import('~/components/examples/example-sizing.vue'),
		ExampleTypography: () => import('~/components/examples/example-typography.vue')
	},
	data() {
		return {
			active: '',
			examples: [
				{ name: 'Grid', active: false },
				{ name: 'Menu', active: false },
				{ name: 'Colors', active: false },
				{ name: 'Animation', active: false },
				{ name: 'BEM', active: false },
				{ name: 'Gradients', active: false },
				{ name: 'Sizing', active: false },
				{ name: 'Typography', active: false }
			]
		};
	}
};
</script>

<style lang="scss">
@import '~tools';
.examples {
	background-image: linear-gradient(to bottom, color(White), color(IceLight));
	padding: grid(3 0);
	.content {
		@media #{$small-only} {
			padding: $mobile-padding;
		}
	}
}
.scroller {
	// position: absolute;
	z-index: 2;
	&__container {
		position: relative;
		padding: grid(0.5 0);
		overflow: hidden;
		width: 100vw;
	}
	&__list {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-wrap: nowrap;
	}
	&__link {
		text-decoration: none;
		border: none;
		background: none;
		&:focus {
			outline: none;
		}
		&--active {
			.scroller__text {
				color: color(Blue);
			}
		}
	}
	&__item {
		white-space: nowrap;
		color: color(Ice);
		font-size: grid(0.4);
		@include min-(font-size, 0.4, 24);
		& + & {
			&::before {
				content: '\00a0—\00a0';
			}
		}
	}
	&__text {
		font-size: grid(0.4);
		@include min-(font-size, 0.4, 24);
		color: color(Ice);
	}
}

.example {
	padding: grid(1 0);
	position: fixed;
	opacity: 0;
	clip-path: inset(0 100% 0 0);
	&--active {
		position: relative;
		opacity: 1;
		clip-path: inset(0 0% 0 0);
		transition: opacity 0.5s, clip-path 2s;
	}
}
</style>
