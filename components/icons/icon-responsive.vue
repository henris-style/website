<template>
	<svg class="icon icon--responsive">
		<rect width="60" height="60" x="66.66%" y="50%"></rect>
		<rect width="30" height="60" x="33.33%" y="50%"></rect>
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
