<template>
	<div class="edit-container">

		<el-form ref="postForm" :model="postForm" class="form-container">

			<el-form-item  label-width="100px" label="学校名称:">
				<el-input v-model="postForm.name" class="article-textarea" autosize placeholder="学校名称" />

			</el-form-item>
			<el-form-item  label-width="100px" label="学校地址:">
				<el-input v-model="postForm.addr" class="article-textarea" autosize placeholder="学校地址" />

			</el-form-item>

			<el-form-item  label-width="100px" label="联系方式:">
				<el-input v-model="postForm.tel" class="article-textarea" autosize placeholder="联系方式" />

			</el-form-item>

			<el-form-item  label-width="100px" label="邮箱:">
				<el-input v-model="postForm.email" class="article-textarea" autosize placeholder="邮箱" />

			</el-form-item>

			<el-form-item  label-width="100px" label="学校简介:">
				<el-input v-model="postForm.describe" :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please enter the content" />

			</el-form-item>

			<div style="text-align: right;">

				<el-button v-loading="loading"  type="success" @click="submitForm">
					保存
				</el-button>
				<router-link :to="'/datamanager/list/'">
				<el-button   type="success" @click="cancelForm">
					取消
				</el-button>
				</router-link>
			</div>
		</el-form>
	</div>
</template>

<script>
	import { getList, saveData } from '@/api/db'

	const defaultForm = {
		name: '1',
		addr: '', // 文章题目
		describe: '', // 文章内容
		tel: '', // 文章摘要
		email: '', // 文章外链
		image_uri: ''
	}
	export default {
		name: 'ArticleDetail',
		data() {
			return {
				postForm: {},
				loading: false,
			}
		},
		computed: {

		},
		created() {
			this.id = this.$route.params && this.$route.params.id
			this.fetchData(this.id)
		},
		methods: {
			cancelForm() {

			},
			submitForm() {
				console.log(this.postForm)
				saveData( 'school', this.postForm)
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
				
					'name': 'school',
					"_id": id
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

<style lang="scss" scoped>
	@import "@/styles/mixin.scss";
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
</style>