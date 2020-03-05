<template>
	<div class="page page--about">
		<section class="basic-intro">
			<div class="row center">
				<div class="column small-full medium-three-quarter">
					<div class="content">
						<h1>About <strong>Henri's</strong></h1>
						<p>
							Henri's is a Sass toolbelt as we call it. That means, that Henri's is a framework, which is implementable but
							doesn't do your work for you, it helps you do your work.
						</p>
						<p>
							Unlike many other Sass frameworks, Henri's doesn't give you any styling by default, because every project or brand is unique. Henri's doesn't enforce any style. No
							website or project should look the same, especially not like a project for a company, because it should look like
							a project of your company.
						</p>
						<p>
							Ofcourse you can overrule everything, but let's start with a clean slate! Keep it minimal and keep the fun in styling things yourself.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="basic-content background--darkdark">
			<div class="row right">
				<div class="column small-full medium-three-quarter column__content">
					<div class="content">
						<h4>A little piece of history</h4>
						<p>
							A few years ago, there was a guy who was a frontend developer at a small company called Matise. At this company
							they were developing websites, little apps and other web related things. For the websites, as a basis they were
							using Foundation. Which did it's job pretty well, but had a few flaws. Foundation was also really big and because
							we didn't use most of it, we just turned off most of the packages except for the Grid.
						</p>
						<p>
							Foundation was missing things which we were using a lot of other functionality, so every new project had a folder
							being copied over and over with some extra mixins and functions. This folder became a bigger folder, with its own
							grid and grew out be a full replacement for Foundation. Called "Matise stack".
						</p>
						<p>
							To make it stand more on itself, Matise stack grew out to be called "Henri's". After the first name of the
							painter with a similar looking name as the company Henri's was developed at/for. Matise.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="basic-content background--ice">
			<div class="row center">
				<div class="column small-full medium-three-quarter column__content">
					<div class="content">
						<h4>About this website</h4>
						<p>
							This website, the "marketing" website of Henri's is build using all kind of tools and services.
						</p>
						<p>
							These are tools we love, and would love you to use them too! Or atleast check them out.
						</p>
						<div class="blocks__scroll">
							<div class="blocks blocks__row row small-half medium-half large-quarter">
								<div class="blocks__column column">
									<div class="blocks__block">
										<div class="blocks__image">
											<img src="images/logo/netlify.svg" alt="Netlify logo" />
										</div>
										<div class="blocks__description">
											<h4 class="blocks__title">
												Netlify
											</h4>
											<p>
												We use Netlify for easy and fast deployments and hosting. Netlify basic is free and works, like it should!
											</p>
											<a class="button" href="https://netlify.com">Netlify</a>
										</div>
									</div>
								</div>
								<div class="blocks__column column">
									<div class="blocks__block">
										<div class="blocks__image">
											<img src="images/logo/vue.svg" alt="Vue logo" />
										</div>
										<div class="blocks__description">
											<h4 class="blocks__title">
												Vue
											</h4>
											<p>Besides Sass, we love Vue, Vue is cool!</p>
											<a class="button" href="https://vuejs.org">Vue.js</a>
										</div>
									</div>
								</div>
								<div class="blocks__column column">
									<div class="blocks__block">
										<div class="blocks__image">
											<img src="images/logo/nuxt.svg" alt="Nuxt logo" />
										</div>
										<div class="blocks__description">
											<h4 class="blocks__title">
												Nuxt
											</h4>
											<p>Nuxt makes it super easy to create a website or app with routing, ssr and everything.</p>
											<a class="button" href="https://nuxtjs.org">Nuxt</a>
										</div>
									</div>
								</div>
								<div class="blocks__column column">
									<div class="blocks__block">
										<div class="blocks__image">
											<img src="images/logo/guyn.svg" alt="Guyn logo" />
										</div>
										<div class="blocks__description">
											<h4 class="blocks__title">
												Guyn
											</h4>
											<p>Guyn Gives us a easy to implement and use colorset.</p>
											<a class="button" href="https://guyn.nl">Guyn</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~tools';
.background--darkdark {
	box-shadow: grid(1.5) 0 0 0 white inset;
	@media #{$small-only} {
		box-shadow: $mobile-padding 0 0 0 white inset;
		padding-left: $mobile-padding * 2;
	}
}
.blocks {
}
</style>
