<template>
	<section class="includes">
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="content">
					<h2>
						So it includes a lot of things..
					</h2>
					<p>
						Some of the things you will find in the documentation and will help you enjoy coding again :)
					</p>
				</div>
			</div>
		</div>
		<div class="row center">
			<div class="column small-full medium-three-quarter">
				<div class="blocks blocks__row row small-half medium-third">
					<div class="blocks__column column">
						<div class="blocks__block">
							<span class="blocks__icon icon--grid"> <IconGrid></IconGrid></span>
							<h4 class="blocks__title">
								Grid
							</h4>
						</div>
					</div>
					<div class="blocks__column column">
						<div class="blocks__block">
							<span class="blocks__icon icon--colors">
								<IconColors></IconColors>
							</span>
							<h4 class="blocks__title">
								Colors
							</h4>
						</div>
					</div>
					<div class="blocks__column column">
						<div class="blocks__block">
							<span class="blocks__icon icon--animation"> <IconAnimation></IconAnimation></span>
							<h4 class="blocks__title">
								Animation
							</h4>
						</div>
					</div>
					<div class="blocks__column column">
						<div class="blocks__block">
							<span class="blocks__icon icon--utilities"></span>
							<h4 class="blocks__title">
								Utilities
							</h4>
						</div>
					</div>
					<div class="blocks__column column">
						<div class="blocks__block">
							<span class="blocks__icon icon--responsive"></span>
							<h4 class="blocks__title">
								Responsive
							</h4>
						</div>
					</div>
					<div class="blocks__column column">
						<div class="blocks__block">
							<span class="blocks__icon icon--basics"></span>
							<h4 class="blocks__title">
								Basics
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	components: {
		IconGrid: () => import('~/components/icons/icon-grid.vue'),
		IconColors: () => import('~/components/icons/icon-colors.vue'),
		IconAnimation: () => import('~/components/icons/icon-animation.vue')
	}
};
</script>

<style lang="scss">
@import '~tools';
.includes {
	background-image: linear-gradient(to bottom, color(White), color(IceLight));
	padding: grid(3 0);
	.content {
		// padding: grid(3) 0;
		@media #{$small-only} {
			padding: $mobile-padding;
		}
	}
	.blocks {
		padding-top: grid(1);
		@media #{$small-only} {
			padding: $mobile-padding / 2;
		}
	}
}

.blocks {
	&__block {
		background-color: color(White);
		padding: 2rem;
	}
	&__icon {
		display: block;
		height: grid(3);
		@media #{$small-only} {
			height: grid(6);
		}
	}
	&__title {
		margin-top: 2rem;
		text-align: center;
	}
	&__row {
		width: calc(100% + 2rem);
		margin-left: -1rem;
		@media #{$small-only} {
			width: 100%;
			margin: 0;
		}
	}
	&__column {
		padding: $mobile-padding / 2;
	}
}
</style>
