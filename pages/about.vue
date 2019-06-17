<template>
	<div class="page page--about">
		<section class="basic-intro">
			<div class="row center">
				<div class="column small-full medium-three-quarter">
					<div class="content">
						<h1>About Henri's</h1>
						<p>
							Henri's is a Sass toolbelt as we call it. That means, that Henri's is a framework, which is implementable but
							doesn't do your work for you, it helps you do your work.
						</p>
						<p>
							Like many other Sass frameworks, they give you a certain style, useable components and in the end your project
							looks like another project made with that framework. Henri's doesn't do that, it doesn't give you that style. No
							website or project should look the same, especially not like a project for a company, because it should look like
							a project or website of that company. In that companies style.
						</p>
						<p>
							Ofcourse you can overrule everything,
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
						<div class="blocks blocks__row row small-half medium-quarter">
							<div class="blocks__column column">
								<div class="blocks__block">
									<div class="blocks__image">
										<img src="images/logo/netlify.svg" alt="Netlify logo" />
									</div>
									<h4 class="block__title">
										Netlify
									</h4>
								</div>
							</div>
							<div class="blocks__column column">
								<div class="blocks__block">
									<div class="blocks__image">
										<img src="images/logo/vue.svg" alt="Vue logo" />
									</div>
									<h4 class="block__title">
										Vue
									</h4>
								</div>
							</div>
							<div class="blocks__column column">
								<div class="blocks__block">
									<div class="blocks__image">
										<img src="images/logo/nuxt.svg" alt="Nuxt logo" />
									</div>
									<h4 class="block__title">
										Nuxt
									</h4>
								</div>
							</div>
							<div class="blocks__column column">
								<div class="blocks__block">
									<div class="blocks__image">
										<img src="images/logo/guyn.svg" alt="Guyn logo" />
									</div>
									<h4 class="block__title">
										Guyn
									</h4>
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
}
.blocks {
	&__image {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		img {
			position: absolute;
			width: 80%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-height: 80%;
		}
	}
}
</style>
