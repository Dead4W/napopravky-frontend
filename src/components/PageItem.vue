<template>
	<div class="PageItem" :class="{'active': current_page == page}" @click="changePage(page)">
		{{ page }}
	</div>

</template>

<script>
import { bus } from '../bus.js'

export default {
	name: 'PageItem',
	props: ['page', 'current_page'],
	methods: {
		changePage (page) {
			bus.$emit('change_page', page);
		},
	},
}

</script>

<style scoped>

.PageItem {
	display: inline-block;
	padding: 3px 6px;
	margin: 2px 5px;
	cursor: pointer;
}

.active {
	text-decoration: underline;
	background: #2c2f35;
}

</style>
