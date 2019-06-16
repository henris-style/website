<template>
	<svg class="icon icon--grid">
		<line x1="50%" x2="50%" y1="100%" y2="0%" />
		<line x1="50%" x2="50%" y1="100%" y2="0%" />
		<line x1="50%" x2="50%" y1="100%" y2="0%" />
		<line x1="50%" x2="50%" y1="100%" y2="0%" />
		<line x1="50%" x2="50%" y1="100%" y2="0%" />
	</svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~tools';
svg {
	width: 100%;
	line {
		fill: transparent;
		stroke: color(Blue);
		stroke-width: 3;
		transform-origin: center;
		transform-box: fill-box;
		--translate-x: 0;
		--rotate: 0deg;
		transform: translateX(var(--translate-x)) rotate(var(--rotate));

		&:nth-child(1) {
			--translate-x: #{-grid(1)};
			@media #{$small-only} {
				--translate-x: #{-grid(2)};
			}
		}
		&:nth-child(2) {
			--translate-x: #{-grid(0.5)};
			@media #{$small-only} {
				--translate-x: #{-grid(1)};
			}
		}
		&:nth-child(3) {
			--translate-x: #{-grid(0)};
		}
		&:nth-child(4) {
			--translate-x: #{grid(0.5)};
			@media #{$small-only} {
				--translate-x: #{grid(1)};
			}
		}
		&:nth-child(5) {
			--translate-x: #{grid(1)};
			@media #{$small-only} {
				--translate-x: #{grid(2)};
			}
		}
	}
}
</style>
