<template>
	<img :width="size" :height="size" :src="addressHash">
</template>

<script>
import Identicon from 'identicon.js/identicon.js';
import md5 from 'js-md5'

export default {
	name: 'IdenticonAvatar',
	props: ['size', 'address'],
	data: function () {
		return {
			addressHash: "",
		}
	},
	methods:{
		generateImage: function() {
			var hash = md5(this.address);  // 15+ hex chars
			var options = {
				foreground: [71, 140, 209, 255],               // rgba black
				background: [255, 255, 255, 255],         // rgba white
				margin: 0.2,                              // 20% margin
				size: this.size,                          // 420px square
				format: 'svg'                             // use SVG instead of PNG
			};

			// create a base64 encoded SVG
			var addressHash = new Identicon(hash, options).toString();

			addressHash = "data:image/svg+xml;base64," + addressHash;

			this.addressHash = addressHash;
		}
	},
	beforeMount(){
		this.generateImage()
	},
	watch: { 
		address: function() { // watch it
			this.generateImage();
		}
	}
}

</script>

<style scoped>

img {
	border-radius: 50%;
}

</style>
