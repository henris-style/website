<template>
	<section class="description">
		<div class="row">
			<div class="column small-full medium-third">
				<div class="description__icon-panel"></div>
			</div>
			<div class="column small-full medium-two-third background--darkdark description__column">
				<div class="description__panels">
					<div class="description__panel-wrapper">
						<div class="description__panel">
							<div class="content">
								<h2 class="description__title">
									Grid
								</h2>
								<p>
									The grid is one of the most important things in a website or app, to use it fully there is a full set of
									functions and mixins to create and use the grid.
								</p>
								<p>
									If you know foundation, you know Henri’s. Just go a long, check the examples and bootstrap your project within
									a few minutes.
								</p>
							</div>
						</div>

						<div class="description__panel">
							<div class="content">
								<h2 class="description__title">
									Colors
								</h2>
								<p>
									The grid is one of the most important things in a website or app, to use it fully there is a full set of
									functions and mixins to create and use the grid.
								</p>
								<p>
									If you know foundation, you know Henri’s. Just go a long, check the examples and bootstrap your project within
									a few minutes.
								</p>
							</div>
						</div>
						<div class="description__panel">
							<div class="content">
								<h2 class="description__title">
									Animations
								</h2>
								<p>
									The grid is one of the most important things in a website or app, to use it fully there is a full set of
									functions and mixins to create and use the grid.
								</p>
								<p>
									If you know foundation, you know Henri’s. Just go a long, check the examples and bootstrap your project within
									a few minutes.
								</p>
							</div>
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
.description {
	&__icon-panel {
		height: calc(100% + #{grid(2)});
		margin-top: -grid(1);
		width: 100%;
		display: block;
		background-color: color(White);
	}
	&__column {
		position: relative;
		&::after {
			display: block;
			content: '';
			width: grid(6);
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			background-image: linear-gradient(to right, color(DarkDark, 0), color(DarkDark, 1));
		}
	}
	&__panels {
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}
	&__panel-wrapper {
		display: flex;
		flex-wrap: nowrap;
	}
	&__panel {
		width: calc(100% - #{grid(4)});
		padding: grid(2 1);
		flex-shrink: 0;
		&:last-child {
			width: 100%;
			padding-right: grid(5);
		}
	}
}
</style>
