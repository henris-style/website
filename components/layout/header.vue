<template>
	<header id="header" class="header">
		<div class="row">
			<div class="column small-half medium-fifth text-left">
				<nuxt-link to="/" class="header__logo">
					henri's
				</nuxt-link>
			</div>
			<div class="column hide-for-small medium-three-fifth text-center header__navigation">
				<nav class="navigation">
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
				</nav>
			</div>
			<div class="column small-half medium-fifth text-right header__subnavigation">
				<nav class="navigation">
					<a href="https://docs.henris.style">Docs</a>
					<nuxt-link to="/about">
						About
					</nuxt-link>
				</nav>
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
	padding: grid(1.5 3);
	@media #{$small-only} {
		padding: $mobile-padding;
	}
	&__logo {
		color: color(Blue);
		font-weight: bold;
		text-decoration: none;
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

.navigation {
	a {
		text-decoration: none;
		& + a {
			margin-left: 1rem;
		}
	}
}
</style>
