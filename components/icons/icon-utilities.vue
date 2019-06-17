<template>
	<svg class="icon icon--utilities">
		<circle r="10" cx="25%" cy="50%"></circle>
		<rect width="80" height="40" x="66.66%" y="50%"></rect>
	</svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~tools';
svg {
	width: 100%;
	rect {
		fill: transparent;
		stroke: color(Blue);
		stroke-width: 2;
		transform-origin: center;
		transform-box: fill-box;
		transform: translate(-50%, -50%);
	}
	circle {
		fill: transparent;
		stroke: color(Blue);
		stroke-width: 2;
	}
}
</style>
