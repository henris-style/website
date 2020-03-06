<template>
	<header id="header" class="header">
		<div class="header__container">
			<nuxt-link to="/" class="header__logo">
				henri's
			</nuxt-link>
			<nav class="navigation navigation--main" :class="[menuActive ? 'navigation--active' : '']">
				<ul class="navigation__list">
					<li class="navigation__item">
						<nuxt-link class="navigation__link" to="/about">
							<span class="navigation__text">Story..</span>
						</nuxt-link>
					</li>
					<li class="navigation__item">
						<nuxt-link class="navigation__link" to="/why">
							<span class="navigation__text">Why?</span>
						</nuxt-link>
					</li>
					<li class="navigation__item">
						<nuxt-link class="navigation__link" to="/help">
							<span class="navigation__text">Help!</span>
						</nuxt-link>
					</li>
					<!-- <li class="navigation__item">
				<nuxt-link  class="navigation__link" to="/examples">
					<span class="navigation__text">Examples</span>
				</nuxt-link>
</li>
	<li class="navigation__item">			<nuxt-link t class="navigation__link" to="/in-the-wild">
					<span class="navigation__text">In the wild</span>
				</nuxt-link>

</li> -->
				</ul>
			</nav>
			<nav class="navigation navigation--sub">
				<ul class="navigation__list">
					<li class="navigation__item">
						<a class="navigation__link" href="https://docs.henris.style">
							<span class="navigation__text">Docs</span>
						</a>
					</li>
					<!-- <li class="navigation__item">
			<nuxt-link  class="navigation__link" to="/about">
				<span class="navigation__text">About</span>
			</nuxt-link>
</li> -->
				</ul>
			</nav>
			<button class="menu-trigger" :class="[menuActive ? 'menu-trigger--active' : '']" @click="menuActive = !menuActive">
				<span></span>
			</button>
		</div>
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
@keyframes iosFix {
	0% {
		top: 0px;
	}
	100% {
		top: 0.01px;
	}
}
.header {
	position: fixed;
	// Header styles
	top: 0;
	left: 0;
	height: 0;

	z-index: 100;
	width: 100%;
	&__logo {
		color: color(Blue);
		font-weight: bold;
		text-decoration: none;
		z-index: 20;

		//
		align-self: flex-start;

		background-color: color(Blue);
		padding: 1em;
		color: color(White);
		@media #{$small-only} {
			transform: none;
			margin: 0;
		}
	}
	&__container {
		padding: grid(1);
		// max-width: 960px;
		margin: auto;
		display: flex;
		justify-content: space-between;
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
	&:focus {
		outline: none;
		background-color: color(DarkDark);
	}
	span {
		@include menu();
	}
	&--active {
		span {
			@include menu-close();
		}
	}
	// @media #{$medium-up} {
	right: -3rem;
	// }
}

.navigation {
	z-index: 5;
	animation: iosFix 0.5s infinite;
	background-color: white;

	&__link {
		display: block;
		padding: 1em;
		text-decoration: none;
		&.active--exact {
			background-color: color(Blue);
			color: white;
		}
		&:hover {
			color: color(Blue);
		}
	}
	&__text {
		display: block;
		color: inherit;
	}
	&__item {
		display: block;
	}
	&__list {
		display: flex;
	}
	&--main {
		font-weight: bold;
	}
	&--active {
		@media #{$small-only} {
			animation: iosFix 0.5s infinite;
			clip-path: inset(0 0 0% 0) !important;
		}
	}
}
</style>
