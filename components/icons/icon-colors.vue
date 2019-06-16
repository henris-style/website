<template>
	<svg class="icon icon--colors">
		<circle cx="50%" cy="50%" r="15"></circle>
		<circle cx="50%" cy="50%" r="15"></circle>
		<circle cx="50%" cy="50%" r="15"></circle>
	</svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~tools';
svg {
	width: 100%;
	circle {
		fill: transparent;
		stroke: color(Blue);
		transform-origin: center;
		transform-box: fill-box;
		--transform-rotate: 0deg;
		transform: rotate(var(--transform-rotate)) translate(-100%, 0%) scale(3);
		&:nth-child(2) {
			--transform-rotate: 120deg;
		}
		&:nth-child(3) {
			--transform-rotate: 240deg;
		}
	}
}
</style>
