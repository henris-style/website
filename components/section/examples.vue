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
					<li class="scroller__item">
						<span class="scroller__text">Grid</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">Menu</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">Colors</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">Animation</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">BEM</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">Gradients</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">Sizing</span>
					</li>
					<li class="scroller__item">
						<span class="scroller__text">Typography</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="row center">
			<div class="column small-full medium-three-quarter"></div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';
.examples {
	background-image: linear-gradient(to bottom, color(White), color(IceLight));
	padding: grid(3 0);
	.content {
		// padding: grid(3) 0;
		@media #{$small-only} {
			padding: $mobile-padding;
		}
	}
}
.scroller {
	&__container {
		padding: grid(0.5 0);
		overflow-x: scroll;
	}
	&__list {
		display: flex;
		flex-wrap: nowrap;
	}
	&__item {
		white-space: nowrap;
		font-size: grid(0.4);
		@include min-(font-size, 0.4, 24);
		& + & {
			&::before {
				content: '\00a0—\00a0';
			}
		}
	}
}
</style>
