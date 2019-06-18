<template>
	<div class="block__container">
		<div class="blocks">
			<div class="blocks__row row">
				<div class="blocks__column column">
					<div v-for="(block, idx) in blocks.blocks" :key="idx" class="blocks__block">
						<div v-if="block.image" class="block__image">
							<img class="block__image-element" :src="block.image" />
						</div>
						<div v-if="block.icon" class="block__icon">
							{{ block.icon }}
						</div>
						<div v-if="block.description" class="block__content">
							<h4 v-if="block.title" class="block__title">
								{{ block.title }}
							</h4>
							{{ block.description }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		blocks: {
			type: [Array, Object],
			default: () => []
		}
	}
};
</script>

<style></style>
