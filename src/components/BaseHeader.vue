<template>
  <div class="header">
	<v-container fill-height fluid>
		<v-row align="center"
		justify="center">
			<v-col class="col-author">
				<a href="https://github.com/Dead4W" target="_blank">@Dead4W</a>
			</v-col>
			<v-col align="center" class="col-title">
				<span class="headerTitle">Цитатник НаПоправку</span>
			</v-col>
			<v-col align="right" class="col-add-action">
				<AddQuoteButton/>
			</v-col>
		</v-row>
	</v-container>
  </div>

</template>

<script>
import AddQuoteButton from './AddQuoteButton.vue'

export default {
  name: 'BaseHeader',
  components: {
    AddQuoteButton,
  }
}
</script>

<style scoped>
.header	{
	width: 100vw;
	background-color: #2b2e34;
	height: 60px;
	padding: 5px 15px;
	position: relative;
	font-family: 'Brygada 1918', serif;
	box-shadow: #0000004d 0 1px 10px 0px;
}

.headerTitle {
    font-size: 14pt;
}

.col-author {
	text-align: left;
}

@media only screen and (max-width: 768px) {

	.col-author {
		display: none;
	}

	.col-title {
		text-align: left;
	}

	.col-add-action {
		max-width: 46px;
	}

}
</style>
