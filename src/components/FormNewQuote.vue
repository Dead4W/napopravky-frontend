<template>
	<form @submit="submit">

		<div class="block center no-select">
			<IdenticonAvatar
				:size="96"
				:address="author"
			/>
		</div>

		<div class="block">
			<input autocomplete="off" type="text" placeholder="Автор цитаты..." name="author" 
				:value="author"
				@input="author = $event.target.value"
				class="no-select"
			>
		</div>

		<div class="block">
			<textarea autocomplete="off" placeholder="Напишите цитату..." name="text" class="no-select">
			</textarea>
		</div>

		<div class="block">
			<TagList/>
		</div>

		<div class="modal-panel-action">
			<button @click="submit($event)">Submit</button>
			<button @click="close()">Cancel</button>
		</div>
	</form>
</template>

<script>
import TagList from './TagList.vue'
import { bus } from '../bus.js'
import { default as api } from '../api.js'
import IdenticonAvatar from './IdenticonAvatar.vue';

export default {
	name: 'FormNewQuote',
	components: { 
		TagList,
		IdenticonAvatar,
	},
	data() {
		return {
			author: "",
		}
	},
	methods: {
		submit (event) {
			event.preventDefault();

			let formData = new FormData(this.$el);


			api.post(api.path.new_post, formData).then((response) => {
				bus.$emit('posts_update', response.data);
				this.$swal({
					icon: 'success',
					title: 'Success',
					text: 'New post is created!',
					timer: 1500,
				});
			})

			return false;
		},
		close () {
			event.preventDefault();

			bus.$emit('modal_close');
		}
	},
}
</script>

<style scoped>

textarea, input {
	background: #2c2f35;
	color: hsl(0deg 0% 99%);
	border-radius: 6px;
    padding: 9px 5px;
    border: 1px solid #444954;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 20vh;
    font-family: sans-serif, Arial;
    margin: 10px 0;
}

textarea {
    min-height: 60px;
}

textarea:focus, input:focus{
    outline: none;
    border: 1px solid #aebcdb;
}

.modal-panel-action {
	margin-top: 15px;
}

.center {
	margin: auto;
	width: 96px;
}

button {
	width: 120px;
	padding: 10px 0;
	background: none;
	border: 1px solid #444954;
	border-radius: 6px;
	color: #fff;
	margin-bottom: 8px;
	margin-right: 16px;
}

button:hover {
	background: #393e46;
	cursor: pointer;
}

</style>
