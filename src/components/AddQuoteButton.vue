<template>
	<div class="AddQuoteButton">
		<button @click="show()">
			<font-awesome-icon icon="plus" size="lg"/>
		</button>
		<v-easy-dialog v-model="visible">
			<div class="flex flex-col">

				<FormNewQuote/>

			</div>
		</v-easy-dialog>
	</div>
</template>

<script>
import FormNewQuote from './FormNewQuote.vue'
import VEasyDialog from 'v-easy-dialog'
import { bus } from '../bus.js'

export default {
	name: 'AddQuoteButton',
	components: { 
		VEasyDialog,
		FormNewQuote,
	},
	data() {
		return {
			visible: false,
		}
	},
	methods: {
		show () {
			this.visible = true;
		},
		hide () {
			this.visible = false;
		}
	},
	plugins: [
		'~plugins/vue-js-modal.js'
	],
	mounted() {
		let self = this;

		bus.$on('posts_update', function() {
			self.hide();
		});

		bus.$on('modal_close', function() {
			self.hide();
		});
	},
}
</script>

<style scoped>

h2 {
	text-align: center;
}

button {
	cursor: pointer;
}

</style>
