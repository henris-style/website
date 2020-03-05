<template>
	<div class="page page--help">
		<section class="basic-intro">
			<div class="row center">
				<div class="column small-full medium-three-quarter">
					<div class="content">
						<h1>Need help?</h1>
						<p>
							Yeah, everyone needs some help every once in a while. Whether it's a question like; "Can I do this with Henri's"
							or "How can I do this the best way?", you can ask us everything and we will try to answer it as fast possible.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="basic-content background--darkdark">
			<div class="row right">
				<div class="column small-full medium-three-quarter column__content">
					<div class="content">
					<h4>But how?</h4>
						<ul>
							<li>
								Well, if you have an issue or found a bug in Henri's. You can open an issue on Github.
							</li>
							<li>
								Or if you have any question related to your project, how to do a certain thing. Please send us an
								<a href="mailto:me@silvandiepen.com">email</a> or get into our
								<a href="https://henrisstyle.slack.com">Slack</a> channel.
							</li>
						</ul>
						<h4>Slack</h4>
						<p>We have a Slack channel! Join us at <a href="https://henrisstyle.slack.com">Henris Slack</a>.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="basic-content background--blue">
			<div class="row center">
				<div class="column small-full medium-three-quarter">
					<div class="content">
						<center>
						<h3>But we also need help!</h3>
						<p>
							Help with anything, from extending, improving the codebase to new ideas or even marketing. If you like Henri's. Don't hesitate to..
						</p>
						<a class="button button--white" href="/contact">Get involved!</a> 
						</center>
					</div>
				
				</div>
			</div>
		</section>
	
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';
.background--darkdark {
	box-shadow: grid(1.5) 0 0 0 white inset;
	@media #{$small-only} {
		box-shadow: $mobile-padding 0 0 0 white inset;
		padding-left: $mobile-padding * 2;
	}
}
</style>
