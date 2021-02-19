<template>
	<div class="QuoteItem">
		<div class="meta">
			<div class="userAvatar no-select">
				<IdenticonAvatar
					:size="48"
					:address="author"
				/>
			</div>
			<div class="userInfo">
				<div class="author">{{ author }}</div>
				<div class="timeAgo">{{ timeAgo }}</div>
			</div>
		</div>
		<div class="text">{{ text }}</div>
		<div class="tagsList">
			<span class="tagItem" v-for="tag in tags" :key="'B' + tag.id">
				#{{ tag.title }}
			</span>
		</div>
	</div>

</template>

<script>
import IdenticonAvatar from './IdenticonAvatar.vue';

export default {
	name: 'QuoteItem',
	props: ['author', 'text', 'timeAgo', 'tags'],
	components: { IdenticonAvatar },
}

</script>

<style scoped>



.tagsList {
	margin-top: 15px;
}

.tagsList .tagItem {
	border-radius: 6px;
	display: inline-block;
	margin: 0 2px;
	color: hsl(210deg 60% 55%);
	font-size: 12pt;
	cursor: pointer;
	font-family: 'Brygada 1918', serif;
}

.tagsList .tagItem:hover {
	text-decoration: underline;
}

.userAvatar, .userInfo {
	display: inline-block;
	float: left;
}

.userInfo {
	margin-left: 10px;
	margin-top: 8px;
	width: 65%;
}

.QuoteItem {
    border-radius: 20px;
    background: hsl(222deg 9% 19%);
    box-shadow: 0 0 0 1px hsla(222,9.4%,26.8%,1);
    padding: 10px 15px 10px 15px;
    text-align: left;
    margin: 30px 0;
}

.text {
    overflow-wrap: anywhere;
}

.meta {
	margin: 15px 0px;
    display: block;
    overflow: hidden;
}

.timeAgo {
	margin: 3px 0;
	font-size: 9pt;
}

.timeAgo:hover {
	text-decoration: underline;
	cursor: pointer;
}

.author {
	color: hsl(210deg 60% 55%);
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
}

.author:hover {
	text-decoration: underline;
	color: hsl(210deg 84% 62%);
	cursor: pointer;
}

</style>
