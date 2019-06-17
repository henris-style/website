<template>
	<header id="header" class="header">
		<nuxt-link to="/" class="header__logo">
			henri's
		</nuxt-link>
		<nav class="navigation navigation--main" :class="[menuActive ? 'navigation--active' : '']">
			<div class="navigation__wrapper">
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
		</nav>
		<nav class="navigation navigation--sub">
			<a href="https://docs.henris.style">Docs</a>
			<nuxt-link to="/about">
				About
			</nuxt-link>
		</nav>
		<button class="menu-trigger" :class="[menuActive ? 'menu-trigger--active' : '']" @click="menuActive = !menuActive">
			<span></span>
		</button>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuActive: false
		};
	},
	watch: {
		route: function() {
			this.menuActive = false;
		}
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

		top: 0;
		left: 0;
		transform: translate(#{grid(3)}, #{grid(1.5)});
		color: color(Blue);
		font-weight: bold;
		text-decoration: none;
		z-index: 10;

		//

		background-color: color(Blue);
		margin: -1rem;
		padding: 1rem;
		color: color(White);
		@media #{$small-only} {
			transform: none;
			margin: 0;
		}
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
.menu-trigger {
	width: 3rem;
	height: 3rem;
	background-color: color(Black);
	border: none;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 10;
	span {
		@include menu();
	}
	&--active {
		span {
			@include menu-close();
		}
	}
	@media #{$medium-up} {
		right: -3rem;
	}
}

.navigation {
	position: fixed;
	padding: 1rem;
	z-index: 5;
	a {
		color: white;
		text-decoration: none;
		& + a {
			margin-left: 1rem;
		}
	}
	&__wrapper {
		display: flex;
		@media #{$small-only} {
			padding: grid(2);
		}
	}
	&--main {
		filter: grayscale(100%);
		mix-blend-mode: difference;
		top: calc(#{grid(1.5)} - 1rem);
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		@media #{$small-only} {
			transition: clip-path $base-transition;
			clip-path: inset(0 0 100% 0);
			mix-blend-mode: normal;
			filter: none;
			position: fixed;
			top: 0;
			left: 0;
			transform: none;
			width: 100vw;
			height: 100%;
			background-color: color(Blue);
			display: flex;
			align-items: center;
			justify-content: center;
			overflow-x: scroll;
			a {
				display: block;
				padding: 2rem;
				font-size: 2rem;
				color: color(DarkDark);
				font-weight: bold;
				background-color: white;
				white-space: nowrap;
				& + a {
					//margin: 1rem 0 0 0;
				}
				&:first-child {
					border: 1px solid red;
					margin-left: 2rem;
				}
			}
		}
	}
	&--active {
		@media #{$small-only} {
			clip-path: inset(0 0 0% 0) !important;
		}
	}
	&--sub {
		mix-blend-mode: difference;
		top: calc(#{grid(1.5)} - 1rem);
		right: calc(#{grid(3)} - 1rem);
		@media #{$small-only} {
			top: $mobile-padding;
			right: calc(#{$mobile-padding} + 1rem);
			top: 0;
		}
		z-index: 10;
	}
}
</style>
