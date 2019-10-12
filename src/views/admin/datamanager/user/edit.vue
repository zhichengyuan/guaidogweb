<template>
	<div class="edit-container">
		
		<el-form ref="postForm" :model="postForm" class="form-container">

			<el-form-item label-width="100px" label="账号:">
				<el-input v-model="postForm.account" autosize placeholder="账号" />

			</el-form-item>
			<el-form-item label-width="100px" label="姓名:">
				<el-input v-model="postForm.name" autosize placeholder="姓名" />

			</el-form-item>
			<el-form-item label-width="100px" label="角色:">

				<el-select v-model="postForm.roles" placeholder="请选择" multiple style="width: 100%;">
					<el-option v-for="item in $store.state.global.roles" :key="item.id" :label="item.name" :value="item.name">
					</el-option>
				</el-select>

			</el-form-item>

			<el-form-item label-width="100px" label="联系方式:">
				<el-input v-model="postForm.tel" autosize placeholder="联系方式" />

			</el-form-item>

			<el-form-item label-width="100px" label="邮箱:">
				<el-input v-model="postForm.email" autosize placeholder="邮箱" />

			</el-form-item>
			<el-form-item label-width="100px" label="照片">
				<el-row>
						<el-upload class="avatar-uploader" :action="doUpload()" :show-file-list="false" :on-success="handleAvatarSuccess">
							<person-avatar :id="postForm.avatar" :w="100" :h="100"></person-avatar>
						</el-upload>
				</el-row>
			</el-form-item>

			<div style="text-align: right;">
				<el-button type="success" @click="resetPwd">
					重置密码
				</el-button>
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
	import PersonAvatar from '@/components/PersonAvatar'
	const tablename = "user"

	export default {

		name: 'ArticleDetail',
		components: {
			PersonAvatar
		},
		data() {
			return {
				id: "",
				postForm: {
					avatar: ["","",""]
				},
				loading: false,
			}
		},
		computed: {

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
//			AvatarID(p, id) {
//				return {
//					id: p + "_" + id
//				}
//			},
			cancelForm() {
				this.$router.back(-1)
			},
			resetPwd() {

			},
			doUpload() {
				return uploadAvatar()
			},
			handleAvatarSuccess(res, file) {
				if(res.code == 0) {
					var id = res.data.id
					this.postForm.avatar=res.data.fid
					saveData(tablename, this.postForm)
					
					console.log(JSON.stringify(this.postForm))
				}
			},
//			AvatarSrc(id) {
//				if(this.postForm.avatar == undefined)
//					return ""
//				if(this.postForm.avatar.length > id)
//					return getAvatar(this.postForm.avatar[id])
//				return ""
//			},
//			avatarID(id) {
//				return {
//					id: id
//				}
//			},
			submitForm() {
				this.listLoading = true
				saveData(tablename, this.postForm).then(data => {
					console.log(data)
					this.postForm = data
					this.listLoading = false
					FlashAvatar(data)
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

				//				this.$refs.postForm.validate(valid => {
				//					if(valid) {
				//						this.loading = true
				//						this.$notify({
				//							title: '成功',
				//							message: '发布文章成功',
				//							type: 'success',
				//							duration: 2000
				//						})
				//						this.postForm.status = 'published'
				//						this.loading = false
				//					} else {
				//						console.log('error submit!!')
				//						return false
				//					}
				//				})
			},
			fetchData(id) {

				let param = {

					'name': tablename,
					'req': {
						"_id": id
					}
				}
				console.log("this.postForm")
				console.log(this.postForm)
				getList(param).then(response => {
					console.log("this.postForm")
					console.log(this.postForm)
					console.log(response)
					this.postForm = response.items[0]
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
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	/*.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		text-align: center;
	}*/
	
	/*.avatar {
	
		display: block;
	}*/
</style>