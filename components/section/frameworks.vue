<template>
	<section class="frameworks background--blue">
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="content">
					<h2>
						Work with everything because it doesn’t do stuff you don’t need.
					</h2>
					<p>
						Wow, that sounds vague! But it’s not. Many Sass frameworks give you also a lot of javascript to make stuff work.
						Henri’s doesn’t. Which makes it possible to use Henri’s in every kind of project. The only dependency is Sass.
						Either Node Sass, Sass or Ruby Sass.
					</p>
					<p>
						It doesn’t have any out put by default, so its very lightweight, but give you full control over what to output and
						how much. So the default is 0kb.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';
.frameworks {
	background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), #00000000);
	box-shadow: -grid(1.5) 0 0 0 white inset;
	@media #{$small-only} {
		box-shadow: -$mobile-padding 0 0 0 white inset;
	}
	.content {
		padding: grid(3) grid(6) grid(3) 0;
		@media #{$small-only} {
			padding: $mobile-padding #{$mobile-padding * 2} $mobile-padding $mobile-padding;
		}
	}
}
</style>
