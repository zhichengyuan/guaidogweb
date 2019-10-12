<template>
	<div>
		<el-upload class="upload-file" ref='newupload' drag :action="doUpload"  :before-upload="beforeUpload" :data="pppss" :auto-upload="false">
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		</el-upload>
		<div>
			<el-button @click="newSubmitForm">上传 </el-button>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	import { upload } from '@/api/upload'
	export default {
		data() {
			return {
				doUpload: '',
				pppss: {
					srid: 'whm'
				}
			}
		},
		methods: {
			beforeUpload(file) {
				let fd = new FormData();
				fd.append('file', file); //传文件
				fd.append('srid', "www"); //传其他参数
				upload(fd).then(function(res){
					console.log(res)
				})
//				axios.post('http://127.0.0.1:9001/file/upload', fd).then(function(res) {
//					alert('成功');
//				})
			},

			newSubmitForm() { //确定上传
				this.$refs.newupload.submit();
			},
		}
	}
</script>

<style>

</style>