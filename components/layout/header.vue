<template>
	<header id="header" class="header">
		<nuxt-link to="/" class="header__logo">
			henri's
		</nuxt-link>
		<nav class="navigation navigation--main">
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
		<nav class="navigation navigation--sub">
			<a href="https://docs.henris.style">Docs</a>
			<nuxt-link to="/about">
				About
			</nuxt-link>
		</nav>
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
	top: 0;
	left: 0;
	height: 0;

	z-index: 100;
	width: 100%;
	&__logo {
		position: fixed;

		top: grid(1.5);
		left: grid(3);
		@media #{$small-only} {
			top: $mobile-padding;
			left: $mobile-padding;
		}
		color: color(Blue);
		font-weight: bold;
		text-decoration: none;
		z-index: 10;
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
	position: fixed;
	a {
		color: white;
		text-decoration: none;
		& + a {
			margin-left: 1rem;
		}
	}
	&--main {
		mix-blend-mode: difference;
		top: grid(1.5);
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		@media #{$small-only} {
			display: none;
		}
	}
	&--sub {
		mix-blend-mode: difference;
		top: grid(1.5);
		right: grid(3);
		@media #{$small-only} {
			top: $mobile-padding;
			right: $mobile-padding;
		}
		z-index: 10;
	}
}
</style>
