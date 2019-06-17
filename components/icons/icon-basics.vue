<template>
	<svg class="icon icon--basic">
		<rect width="80" height="80" x="50%" y="50%"></rect>
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
}
</style>
