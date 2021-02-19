import axios from 'axios'
import Vue from 'vue'


export default {
	domain: "http://back.rurpg.ru/api/",
	options: {
		headers: {
			'Accept': 'application/json',
			'Content-type': 'multipart/form-data',
		}
	},

	path: {
		new_post: "posts",
		get_posts: "posts",
		get_tags: "tags",
	},

	get: function (path, data = {}) {
		const encodeGetParams = Object.entries(data).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

		return axios
			.get(this.domain + path + "?" + encodeGetParams, this.options)
			.catch(this.handle_error)
	},

	post: function(path, data) {
		return axios
			.post(this.domain + path, data, this.options)
			.catch(this.handle_error)
	},

	handle_error: function(error) {
		if( error.response.status == 422 ) {
			let error_msg = [];
			let data = error.response.data;

			for( let key in data ) {
				error_msg.push(key + ": " + data[key]);
			}

			Vue.swal({
				icon: 'error',
				title: 'Oops...',
				html: error_msg.join("<br>\r\n"),
			});
		} else {
			Vue.swal({
				icon: 'error',
				title: '',
				html: error.response.statusText,
			});
		}
	},
}