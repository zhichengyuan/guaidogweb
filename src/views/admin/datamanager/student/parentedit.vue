<template>
	<div class="edit-container">

		<el-form ref="postForm" :model="postForm" class="form-container">

			<el-form-item  label-width="100px" label="姓名:">
				<el-input v-model="postForm.name" autosize placeholder="姓名" />

			</el-form-item>
			<el-form-item  label-width="100px" label="性别:">
				<template>
					<el-radio v-model="postForm.sex" label="1">女</el-radio>
					<el-radio v-model="postForm.sex" label="2">男</el-radio>
				</template>

			</el-form-item>

			<el-form-item  label-width="100px" label="出生年月:">
				<el-input v-model="postForm.tel" autosize placeholder="出生年月" />

			</el-form-item>
			<el-form-item  label-width="100px" label="所在班级">
				<el-select v-model="postForm.classes" placeholder="请选择">
					<el-option v-for="item in classes" :key="item._id" :label="item.name" :value="item._id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item  label-width="100px" label="照片">
				<el-row>
					<el-col :span="8" v-for="(n) in [0,1,2]" :key="n">

						<el-upload class="avatar-uploader" :action="doUpload()" :data="avatarID(n)" :show-file-list="false" :on-success="handleAvatarSuccess">
							<img v-if="AvatarSrc(n)" :src="AvatarSrc(n)" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>

					</el-col>
				</el-row>
			</el-form-item>

			<div style="text-align: right;">

				<el-button v-loading="loading" type="success" @click="submitForm">
					保存
				</el-button>

				<el-button type="success" @click="cancelForm">
					取消
				</el-button>

			</div>
		</el-form>
	</div>
</template>

<script>
	import { getList, saveData } from '@/api/db'

	import { uploadAvatar, getAvatar } from '@/api/upload'
	const tablename = "student"
	const defaultForm = {
		_id: "",
		name: '1',
		addr: '', // 文章题目
		describe: '', // 文章内容
		tel: '', // 文章摘要
		email: '', // 文章外链

	}

	export default {
		data() {
			return {
				classes: [],
				id: "",
				postForm: {},
				loading: false,
			
			}
		},
		created() {
			let id = this.$route.params && this.$route.params.id
			console.log(id)
			if(id != "new")
				this.fetchData(id)
			else
				console.log(id)
		},
		methods: {
			AvatarSrc(id) {
				if(this.postForm.avatar == undefined)
					return ""
				if(this.postForm.avatar.length > id)
					return getAvatar(this.postForm.avatar[id])
				return ""
			},

		
			avatarID(id) {
				return {
					id: id
				}
			},

			cancelForm() {
				this.$router.back(-1)
			},
				doUpload() {
				return uploadAvatar()
			},
			handleAvatarSuccess(res, file) {
				if(res.code == 0) {
					var id = res.data.id

					this.postForm.avatar.splice(id, 1, res.data.fid)

					console.log(JSON.stringify(this.postForm))
				}
			},
			beforeAvatarUpload(file) {
				return;
				let fd = new FormData();
				fd.append('file', file); //传文件
				fd.append('id', "www"); //传其他参数
				uploadavatar(fd).then(function(res) {
					console.log("resimg")
					postForm.avatar = res
					console.log(res)
				})
				//				axios.post('http://127.0.0.1:9001/file/upload', fd).then(function(res) {
				//					alert('成功');
				//				})
			},
			submitForm() {
				this.listLoading = true
				saveData( tablename, this.postForm).then(data => {
					console.log(data)
					this.postForm = data
					this.listLoading = false
					this.$notify({
						title: '成功',
						message: '保存成功',
						type: 'success',
						duration: 2000
					})
					this.$router.back(-1)

				}).catch((err) => {

					console.log('发生错误！', err);
					this.listLoading = false
				});
			},
			fetchData(id) {

				let param = {
					
					'name': tablename,
					'req':{"_id": id}
				}
				console.log("this.postForm")
				console.log(this.postForm)

				getList(param).then(data => {
					console.log("this.postForm")
					console.log(this.postForm)
					console.log(data)
					this.postForm = data.items[0]
					//
					//					// just for test
					//					this.postForm.title += `   Article Id:${this.postForm.id}`
					//					this.postForm.content_short += `   Article Id:${this.postForm.id}`
					//
					//					// set tagsview title
					//					this.setTagsViewTitle()
					//
					//					// set page title
					//					this.setPageTitle()
				}).catch(err => {
					console.log(err)
				})


			},

		}

	}
</script>

<style lang="scss">
	@import "~@/styles/mixin.scss";
	.edit-container {
		margin: 5px 100px;
	}
	
	.article-textarea /deep/ {
		textarea {
			padding-right: 40px;
			resize: none;
			border: none;
			border-radius: 0px;
			border-bottom: 1px solid #bfcbd9;
		}
	}
	
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>