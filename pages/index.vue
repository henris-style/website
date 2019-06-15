<template>
	<main class="page page--home">
		<homeIntro />
		<homeWhat />
		<homeIncludes />
		<homeDescriptions />
		<homeFrameworks />
		<homeExamples />
	</main>
</template>

<script>
import homeIntro from '~/components/section/intro.vue';
import homeWhat from '~/components/section/what.vue';
import homeIncludes from '~/components/section/includes.vue';
import homeDescriptions from '~/components/section/descriptions.vue';
import homeFrameworks from '~/components/section/frameworks.vue';
import homeExamples from '~/components/section/examples.vue';
export default {
	components: {
		homeIntro,
		homeWhat,
		homeIncludes,
		homeDescriptions,
		homeFrameworks,
		homeExamples
	}
};
</script>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}
</style>
