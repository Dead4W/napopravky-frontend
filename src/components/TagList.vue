<template>
	<div class="TagList no-select">
		<div 
			class="TagItemContainer"
			v-for="tag in tags"
			:key="'tag_' + tag.id"
		>
			<span class="TagItem" :class="{'active': tag.isSelected}" @click="toggle(tag)">
				#{{ tag.title }}
			</span>
		</div>
		<input type="hidden" name="tags[]"  
			v-for="selected in getSelected()"
			:key="'tag_selected_' + selected"
			:value="selected"
		>
	</div>
</template>

<script>
import { default as api } from '../api.js'

export default {
	name: 'TagList',
	data() {
		return {
			tags: [],
		}
	},
	methods: {
		toggle (tag) {
			if(this.getSelected().length >= 3 && !tag.isSelected) {return}
			tag.isSelected = !tag.isSelected;
		},
		getSelected () {
			let selected_tags = [];

			for( let i = 0;i<this.tags.length;i++ ) {
				if( this.tags[i].isSelected ) {
					selected_tags.push(this.tags[i].id);
				}
			}

			if( selected_tags.length == 0 ) return [""]

			return selected_tags;
		},
	},
	mounted() {
		api.get(api.path.get_tags)
			.then((response) => {
				let tags = response.data;

				for( let i = 0; i<tags.length;i++ ) {
					tags[i].isSelected = false;
				}

				this.tags = tags;
			})
	}
}

</script>

<style scoped>
.TagItemContainer, .TagList {
	margin: 0;
	padding: 0;
	display: inline-block;
}

.TagItem {
	padding: 3px;
	color: #fff;
	margin: 3px;
	cursor: pointer;
	border-radius: 6px;
	border: 1px solid #343944;
	display: inline-block;
}

.active {
	border: 1px solid #444954;
	background: #393e46;
}

</style>
