<template>
	<section class="intro">
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="content">
					<h1><span>Henri’s</span>, the Sass toolbelt which helps you do the fun things yourself.</h1>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~tools';
.intro {
	height: calc(100vh - #{grid(2)});
	display: flex;
	align-items: center;
	justify-content: center;
	.content {
		max-width: 40rem;
		@media #{$small-only} {
			padding: $mobile-padding;
		}
	}
	h1 {
		color: color(Blue);
		font-size: grid(1);
		@include min-('font-size', 1, 32);
	}
}
</style>
