<template>
	<footer id="footer" class="footer">
		<div class="row center">
			<div class="column small-full medium-three-quarter footer__intro">
				<div class="content">
					<h2>
						Henri's
					</h2>
				</div>
			</div>
			<div class="column small-full medium-three-quarter footer__navigation">
				<div class="row small-full medium-third large-quarter ">
					<div class="column footer__column">
						<h4>About</h4>
						<ul class="footer__nav-list">
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/story">
									The story
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/why">
									Why?
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/help">
									Help!
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/contributing">
									Contributing
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/media">
									Media
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/examples">
									Examples
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/in-the-wild">
									In the wild
								</nuxt-link>
							</li>
						</ul>
					</div>
					<div class="column footer__column">
						<h4>Docs</h4>
						<ul class="footer__nav-list">
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/getting-started">
									Getting Started
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/installation">
									Installation
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/how-to-use">
									How to use
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/grid">
									Grid
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/colors">
									Colors
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/typography">
									Typography
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/mixins">
									Mixins
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://docs.henris.style/functions">
									Functions
								</a>
							</li>
						</ul>
						<li class="footer__nav-item"></li>
					</div>

					<div class="column footer__column">
						<h4>More</h4>
						<ul class="footer__nav-list">
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://github.com/henris-style">
									Github
									<span>Henri's code is fully on Github.</span>
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://codepen.io">
									Codepen
									<span>Some examples and the testing ground.</span>
								</a>
							</li>
							<li class="footer__nav-item">
								<a class="footer__nav-link" href="https://patreon.com">
									Patreon
									<span>Support Henri's</span>
								</a>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/extensions">
									Extensions
									<span>Make it bigger</span>
								</nuxt-link>
							</li>
							<li class="footer__nav-item">
								<nuxt-link class="footer__nav-link" to="/tools">
									Tools
									<span>Some tools to kickstart your project.</span>
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';

// Footer styles
.footer {
	color: color(Blue);
	padding: grid(2 0);
	box-shadow: grid(1.5) 0 0 0 color(IceLight) inset;

	@media #{$small-only} {
		box-shadow: $mobile-padding 0 0 0 color(IceLight) inset;
		padding: $mobile-padding $mobile-padding $mobile-padding ($mobile-padding * 2);
	}
	&__column {
		padding-top: grid(1);
		position: relative;
		h4 {
			color: color(Blue);
		}
	}
	&__intro {
	}
	&__navigation {
	}
	&__nav-list {
	}
	&__nav-item {
		display: block;
		padding: 0.5rem 0;
	}
	&__nav-link {
		color: color(DarkDark);
		text-decoration: none;
		position: relative;
		display: inline-block;
		span {
			opacity: 0.25;
			position: absolute;
			left: grid(3);
			top: 0;
			white-space: nowrap;
			@media #{$medium-down} {
				position: relative;
				display: block;
				left: 0;
				margin-top: 0.5rem;
			}
		}
	}
}
</style>
