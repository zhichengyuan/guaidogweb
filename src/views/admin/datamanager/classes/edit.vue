<template>
	<div class="edit-container">

		<el-form ref="postForm" :model="postForm" class="form-container">

			<el-form-item  label-width="100px" label="班级名称:">
				<el-input v-model="postForm.name" autosize placeholder="班级名称" />

			</el-form-item>
			<el-form-item  label-width="100px" label="班主任:">
				<!--<el-input v-model="postForm.teacher" autosize placeholder="班主任" />-->

				<el-select v-model="postForm.teacher" placeholder="请选择" >
					<el-option v-for="item in $store.state.global.teachers" :key="item._id" :label="item.name" :value="item._id">
					</el-option>
				</el-select>
				
			</el-form-item>

			<el-form-item  label-width="100px" label="联系方式:">
				<el-input v-model="postForm.tel" autosize placeholder="联系方式" />

			</el-form-item>

			<el-form-item  label-width="100px" label="邮箱:">
				<el-input v-model="postForm.email" autosize placeholder="邮箱" />

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
	const tablename = "classes"
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
				id: "",
				postForm: {},
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
			cancelForm() {
				this.$router.back(-1)
			},

			submitForm() {
				this.listLoading = true
				saveData( tablename, this.postForm).then(data => {
					console.log(data)
					this.postForm = data
					this.$store.dispatch('fetchClasses')
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
					'req':{"_id": id}
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
</style>