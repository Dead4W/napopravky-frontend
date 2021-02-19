<template>
	<div>
		<div class="QuotesList">
			<QuoteItem
				v-for="post in posts"
				:key="post.id"
				:text="post.text"
				:author="post.author"
				:timeAgo="post.timeAgo"
				:tags="post.tags"
			/>
		</div>
		<div class="PageList">
			<PageItem
				v-for="index in pages_count"
				:key="index"
				:page="index"
				:current_page="current_page"
			/>
		</div>
	</div>
</template>

<script>
import QuoteItem from './QuoteItem.vue'
import PageItem from './PageItem.vue'

import TimeAgo from 'javascript-time-ago'
import { bus } from '../bus.js'
import { default as api } from '../api.js'

import ru from 'javascript-time-ago/locale/ru'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(ru)
TimeAgo.addLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo(['ru-RU', 'de-DE', 'en-US'])

export default {
	name: 'BasePage',
	components: {
		QuoteItem,
		PageItem,
	},
	data() {
		return {
			posts: [],
			pages_count: 1,
			current_page: 1,
			intervalUpdatePosts: 0,
		};
	},
	methods: {
		updatePosts (page = 1) {
			this.current_page = page;

			api.get(api.path.get_posts, {
				page: page,
			}).then((response) => {
				let posts = response.data.posts;

				for( let i = 0; i<posts.length;i++ ) {
					posts[i].timeAgo = timeAgo.format(+(new Date(posts[i].date)));
				}

				this.pages_count = response.data.pages_count;
				this.posts = posts;
			});
		},
		updatePostsInterval: function(){
			this.intervalUpdatePosts = setInterval(this.updatePosts, 60000);
		}
	},
	mounted() {
		let self = this;

		bus.$on('posts_update', function() {
			self.updatePosts();
		});

		bus.$on('change_page', function(page) {
			self.updatePosts(page);
		});

		this.updatePosts();
		this.updatePostsInterval();
	},
}
</script>

<style scoped>

.QuotesList {
	max-width: 100vw;
	width: 600px;
	margin: auto;
	margin-top: 10px;
	padding: 0 30px 30px 30px;
	overflow: hidden;
}

.PageList {
	position: fixed;
	bottom: 0;
	width: 100vw;
	left: 0;
	background: #2b2e34;
	box-shadow: #0000004d 0 -1px 10px 0px;
}

</style>
