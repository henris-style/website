<template>
	<section class="what background--darkdark">
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="row">
					<div class="column small-full medium-half">
						<div class="content">
							<h2>
								But what does it actually do?
							</h2>
							<p>
								Well a lot, it gives you a shitload of functions, mixins and other tools, to speed up your styling. But also
								keeps it fun to actually style the things you want.
							</p>
							<p>
								It doesn’t have any out put by default, so its very lightweight, but give you full control over what to output
								and how much. So the default is 0kb.
							</p>
						</div>
					</div>
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
.what {
	box-shadow: grid(1.5) 0 0 0 white inset;
	@media #{$small-only} {
		box-shadow: $mobile-padding 0 0 0 white inset;
	}
	.content {
		padding: grid(3 0);
		@media #{$small-only} {
			padding: $mobile-padding $mobile-padding $mobile-padding ($mobile-padding * 2);
		}
	}
}
</style>
