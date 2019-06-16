<template>
	<svg class="icon icon--animation">
		<g>
			<rect width="80" height="30" x="50%" y="50%"></rect>
			<rect width="80" height="30" x="50%" y="50%" />
			<rect width="80" height="30" x="50%" y="50%" />
		</g>
		<g>
			<circle cx="50%" cy="50%" r="5"></circle>
			<circle cx="50%" cy="50%" r="5"></circle>
			<circle cx="50%" cy="50%" r="5"></circle>
		</g>
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
		transform: translate(-25%, -50%);
		&:nth-child(1) {
			transform: translate(-75%, -175%);
		}
		&:nth-child(3) {
			transform: translate(-50%, 75%);
		}
	}
	circle {
		fill: transparent;
		stroke: color(Blue);
		stroke-width: 2;
		transform-origin: center;
		transform-box: fill-box;
		transform: translate(-50%, 0%);
		&:nth-child(1) {
			transform: translate(-450%, -380%);
		}
		&:nth-child(3) {
			transform: translate(-250%, 380%);
		}
	}
	circle {
		fill: color(Blue);
	}
}
</style>
