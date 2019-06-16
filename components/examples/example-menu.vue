<template>
	<div class="example example--menu">
		<div class="example__intro">
			<h4>Menu</h4>
			<p>
				Almost every website or app has this thing, that little hamburger menu thingy. There are many ways to make these.
				You You could put an SVG image, just another image, or you can make it with a little bit of code.
			</p>
			<p>That makes it a little easier to have control over every element and to animate it.</p>
			<p>
				You can find more information about the hamburger menu mixins in the
				<a class="button" href="https://docs.henris.style/menu">docs:menu</a>
			</p>
		</div>
		<hr />
		<div class="example__examples">
			<div class="row example__example">
				<div class="column small-two-third example__description">
					<code>
						<pre>
@include menu();
						</pre>
					</code>
				</div>
				<div class="column small-third">
					<div class="example__view example__block">
						<span class="menu-example">
							<span></span>
						</span>
					</div>
				</div>
			</div>
			<div class="row example__example">
				<div class="column small-two-third example__description">
					<code>
						<pre>
@include menu(5rem, 1rem, 0.5rem, Lime, 0.5rem);
						</pre>
					</code>
				</div>
				<div class="column small-third">
					<div class=" example__view example__block">
						<span class="menu-example-alt">
							<span></span>
						</span>
					</div>
				</div>
			</div>
			<div class="row example__example">
				<div class="column small-two-third example__description">
					<code>
						<pre>
@include menu(5rem, 1rem, 0.5rem, Lime, 0.5rem);
@include menu-close; </pre
						></code
					>
				</div>
				<div class="column small-third">
					<div class=" example__view example__block">
						<span class="menu-example-alt-close">
							<span></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';

.example {
	&__example {
		& + & {
			margin-top: 2rem;
		}
		background-color: color(White);
	}
	&__description {
		display: flex;
		align-items: center;
		padding: grid(1);
		position: relative;
		max-width: 100%;
		overflow: scroll;
	}
	&__block {
		position: relative;
		background-color: color(DarkDark);
		// height: grid(5);
		// width: grid(5);
		width: 100%;
		padding-bottom: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

code pre {
	line-height: 1.5;
	font-family: Roboto Mono;
}

.menu-example {
	width: 3rem;
	height: 3rem;
	span {
		@include menu();
	}
}
.menu-example-alt {
	span {
		@include menu(5rem, 1rem, 0.5rem, color(Lime), 0.5rem);
	}
}
.menu-example-alt-close {
	span {
		@include menu(5rem, 1rem, 0.5rem, color(Lime), 0.5rem);
		@include menu-close();
	}
}
</style>
