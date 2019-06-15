<template>
	<header id="header" class="header">
		<div class="row">
			<div class="column small-half medium-fifth text-left">
				henri's
			</div>
			<div class="column hide-for-small medium-three-fifth text-center">
				<nuxt-link to="/story">
					Story
				</nuxt-link>
				<nuxt-link to="/why">
					Why
				</nuxt-link>
				<nuxt-link to="/help">
					Help
				</nuxt-link>
				<nuxt-link to="/examples">
					Examples
				</nuxt-link>
				<nuxt-link to="/in-the-wild">
					In the wild
				</nuxt-link>
			</div>
			<div class="column small-half medium-fifth text-right">
				<a href="https://docs.henris.style">Docs</a>
				<nuxt-link to="/about">
					About
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<script>
import project from '~/package.json';
export default {
	data() {
		return {
			projectName: project.name
		};
	}
};
</script>

<style lang="scss">
@import '~tools';

.header {
	// Header styles
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	padding: grid(2 3);
	@media #{$small-only} {
		padding: $mobile-padding;
	}
}
.text-left {
	text-align: left;
}
.text-center {
	text-align: center;
}
.text-right {
	text-align: right;
}
</style>
