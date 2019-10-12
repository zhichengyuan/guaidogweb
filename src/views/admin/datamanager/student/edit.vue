<template>
	<div class="edit-container">

		<el-form ref="postForm" :model="postForm" class="form-container">
			<el-row>
				<el-col :span="12">
					<el-form-item label-width="100px" label="姓名:">
						<el-input v-model="postForm.name" autosize placeholder="姓名" />

					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label-width="100px" label="性别:">
						<template>
							<el-radio v-model="postForm.sex" label="1">女</el-radio>
							<el-radio v-model="postForm.sex" label="2">男</el-radio>
						</template>

					</el-form-item>
				</el-col>
			</el-row>
			<el-row>

				<el-col :span="12">
					<el-form-item label-width="100px" label="出生年月:">
						<el-input v-model="postForm.tel" autosize placeholder="出生年月" />

					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label-width="100px" label="所在班级">
						<el-select v-model="postForm.classes" placeholder="请选择">
							<el-option v-for="item in $store.state.classes.classes" :key="item._id" :label="item.name" :value="item._id">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item label-width="100px" label="照片">

				<el-row>

					<el-upload class="avatar-uploader" :action="doUpload()" :data=" {id: 0 }" :show-file-list="false" :on-success="handleAvatarSuccess">
						<person-avatar :id="postForm.avatar" :w="100" :h="100"></person-avatar>
					</el-upload>

				</el-row>
			</el-form-item>

			<el-form-item label-width="100px" label="接送人">
				<el-row>

					<el-col :span="3" v-for="(item, index) in  postForm.parents" :key="index">
						<el-upload class="avatar-uploader" :action="doUpload()" :data=" {id: index+1 }" :show-file-list="false" :on-success="handleAvatarSuccess">
							<person-avatar :id="item.avatar" :w="100" :h="100"></person-avatar>
							<span @click="deleteparent()" @click.stop>X</span>
						</el-upload>
						<el-select v-model="item.relation" placeholder="请选择" @change="onrelation(item.relation,item)" style="width: 100px;">
							<el-option v-for="r in relations" :key="r" :label="r" :value="r">
							</el-option>
						</el-select>

						<!--<el-form-item label-width="100px" label="亲属关系">
									<el-select v-model="item.data.relation" placeholder="请选择" @change="onrelation(item.data.relation,item)">
										<el-option v-for="r in relations" :key="r" :label="r" :value="r">
										</el-option>
									</el-select>
								</el-form-item>-->
					</el-col>
					<el-col :span="3">
						<div style="height: 100px;">
							</div>
						<el-button type="success" @click="addparent" >
							+
						</el-button>
						
					</el-col>
					<!--<el-col :span="12">
								<el-form-item label-width="100px" label="联系方式:">
									<el-input v-model="item.data.tel" autosize placeholder="联系方式" />

								</el-form-item>
							</el-col>-->
				</el-row>
			</el-form-item>
			<!--<el-tabs v-model="editableTabsValue" type="card" editable closable @edit="handleTabsEdit">
					<el-tab-pane v-for="(item, index) in  parents" :key="item.tab" :label="item.tab" :name="item.tab">

						<el-row>
							<el-col :span="12">
								<el-form-item label-width="100px" label="亲属关系">
									<el-select v-model="item.data.relation" placeholder="请选择" @change="onrelation(item.data.relation,item)">
										<el-option v-for="r in relations" :key="r" :label="r" :value="r">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label-width="100px" label="联系方式:">
									<el-input v-model="item.data.tel" autosize placeholder="联系方式" />

								</el-form-item>
							</el-col>
						</el-row>

						<el-form-item label-width="100px" label="照片">
							<el-row>
									<el-upload class="avatar-uploader" :action="doUpload()" :data=" {id: index+1 }" :show-file-list="false" :on-success="handleAvatarSuccess">
										<person-avatar :id="item.data.avatar" :w="100" :h="100"></person-avatar>
									</el-upload>
							</el-row>
						</el-form-item>

					</el-tab-pane>
				</el-tabs>
			</el-form-item>-->

			<!--<div v-for="(p ,pindex) in postForm.parents " :key="pindex">
				<el-form-item label-width="100px" label=" 电话:">
					<el-input v-model="p.tel" autosize placeholder="电话" />

				</el-form-item>

				<el-form-item label-width="100px">
					<el-row>
						<el-col :span="8" v-for="(a,aindex) in p.avatar" :key="aindex">
							<el-upload class="avatar-uploader" :action="doUpload()" :data="AvatarID(pindex+1,aindex)" :show-file-list="false" :on-success="handleAvatarSuccess">
								<person-avatar :id="a"></person-avatar>
							</el-upload>

						</el-col>
					</el-row>
				</el-form-item>
			</div>-->

			<div style="text-align: right;">

				<!--<el-button type="primary" icon="el-icon-circle-plus-outline">新增接送人</el-button>-->
				<el-button type="success" @click="submitForm">
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

	const tablename = "student"
	export default {
		components: {
			PersonAvatar
		},
		data() {
			return {
				editableTabsValue: "2",
				relations: ["爸爸", "妈妈", "爷爷", "奶奶","姥姥","姥爷"],
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
		//		watch: {
		//
		//			parents: { //深度监听，可监听到对象、数组的变化
		//				handler(val, oldVal) {
		//					console.log(val)
		//					for(var i in this.parents) {
		//						if(this.parents[i].tab == "新增") {
		//							if(this.parents[i].data.relation != undefined) {
		//								this.parents[i].tab = this.parents[i].data.relation
		//							}
		//
		//						}
		//					}
		//				}
		//			},
		//			deep: true
		//		},

		methods: {
		deleteparent(){
			alert("ww")
		},
			onrelation(r, item) {
				
			
			
				console.log(item)
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
					if(id[0] == "0")
						this.postForm.avatar = res.data.fid
					else {
						this.postForm.parents[id - 1].avatar = res.data.fid
					}
				}
			},
			//			beforeAvatarUpload(file) {
			//				return;
			//				let fd = new FormData();
			//				fd.append('file', file); //传文件
			//				fd.append('id', "www"); //传其他参数
			//				uploadavatar(fd).then(function(res) {
			//					console.log("resimg")
			//					postForm.avatar = res
			//					console.log(res)
			//				})
			//				//				axios.post('http://127.0.0.1:9001/file/upload', fd).then(function(res) {
			//				//					alert('成功');
			//				//				})
			//			},
			addparent() {
				this.postForm.parents.push({
					avatar:"",
					relation:""

				});
			},
			submitForm() {
				this.listLoading = true
				saveData(tablename, this.postForm).then(data => {
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
			handleTabsEdit(targetName, action) {
				let newTabName = "新增"
				if(action === 'add') {
					this.parents.push({
						tab: newTabName,
						data: {

						}
					});
					this.editableTabsValue = newTabName;
				}
				if(action === 'remove') {

					let activeName = this.editableTabsValue;
					console.log(targetName)
					//					if(activeName === targetName) {
					//						this.parents.forEach((tab, index) => {
					//							if(tab.name === targetName) {
					//								let nextTab = tabs[index + 1] || tabs[index - 1];
					//								if(nextTab) {
					//									activeName = nextTab.name;
					//								}
					//							}
					//						});
					//					}

					this.editableTabsValue = activeName;

				}
			},
			fetchData(id) {
				let param = {
					'name': tablename,
					'req': {
						"_id": id
					}
				}
				getList(param).then(data => {
					this.postForm = data.items[0]
					for(var i in this.postForm.parents) {
						this.parents.push({
							tab: this.postForm.parents[i].relation,
							data: this.postForm.parents[i]
						})
					}

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
		margin: 5px 30px;
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
		width: 110px;
		height: 110px;
		line-height: 110px;
		text-align: center;
	}
</style>