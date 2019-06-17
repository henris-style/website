<template>
	<section class="intro">
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="content">
					<h1>
						<span><span>Henri’s</span>, the Sass toolbelt</span>
						<span>which helps you do</span>
						<span> the fun things yourself again.</span>
					</h1>
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
	background-color: color(White);
	height: calc(100vh - #{grid(2)});
	display: flex;
	align-items: center;
	justify-content: center;
	.content {
		@media #{$small-only} {
			padding: $mobile-padding;
		}
	}
	h1 {
		color: color(Blue);
		font-size: grid(1);
		@include min-('font-size', 1, 20);
		> span {
			display: block;
			padding: 1rem;
			margin: -1rem;
			clip-path: inset(0 0 100% 0);
			animation: showLine 1s forwards;
		}
	}
}
@keyframes showLine {
	to {
		clip-path: inset(0 0 0% 0);
	}
}
</style>
