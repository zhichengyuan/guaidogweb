<template>
	<div class="page-container">
		<pad-header :caption="'医务详情'"></pad-header>
		<div class="curdate">2019-10-10</div>
		<div>
			<student-info :student="postForm"></student-info>

		</div>
		<el-form ref="postForm" :model="postForm" class="form-container">
			<el-collapse v-model="activeName">
				<el-collapse-item name="1">
					<template slot="title">
						家长嘱托<i class="header-icon el-icon-info"></i>
					</template>

					<el-row>
						<el-col :span="8">
							<el-form-item label-width="100px" label="体温">
								<el-input v-model="postForm.name" autosize placeholder="体温" />

							</el-form-item>

						</el-col>
						<el-col :span="16">
							<el-form-item label-width="100px" label="不适症状">
								<el-input v-model="postForm.name" autosize placeholder="不适症状" />

							</el-form-item>

						</el-col>
					</el-row>
					<!--<el-card>-->

					<el-row v-for="(n,index) in 3" key="index">
						<el-col :span="8">
							<el-form-item label-width="100px">
								<template slot="label">
									在服药品{{n}}
								</template>
								<el-input v-model="postForm.name1" autosize placeholder="在服药品" />
							</el-form-item>

						</el-col>
						<el-col :span="8">
							<el-form-item label-width="100px" label="服用时间">

								<el-checkbox-group v-model="postForm.time">
									<el-checkbox label="早"></el-checkbox>
									<el-checkbox label="中"></el-checkbox>
								</el-checkbox-group>

							</el-form-item>

						</el-col>
						<!--</el-row>
							<el-row>-->
						<el-col :span="8">
							<el-form-item label-width="100px" label="服用剂量">
								<el-input v-model="postForm.name" autosize placeholder="服用剂量" />

							</el-form-item>

						</el-col>
						<!--<el-col :span="6">
									<el-button>添加</el-button>
									<el-button>删除</el-button>
								</el-col>-->
					</el-row>

					<!--</el-card>-->
					<el-row>
						<el-col :span="20">
							<el-form-item label-width="100px" label="家长备注">
								<el-input v-model="postForm.name" autosize placeholder="家长备注" />

							</el-form-item>

						</el-col>
						<el-col :span="4">
							<el-button>医务确认</el-button>

						</el-col>
					</el-row>

				</el-collapse-item name="2">
				<el-collapse-item title="医务记录">

					<el-row>
						<el-col :span="8">
							<el-form-item label-width="100px" label="体温">
								<el-input v-model="postForm.name" autosize placeholder="体温" />

							</el-form-item>

						</el-col>
						<el-col :span="16">
							<el-form-item label-width="100px" label="不适">
								<el-input v-model="postForm.name" autosize placeholder="不适症状" />

							</el-form-item>

						</el-col>
					</el-row>
					<div v-for="x in 3">
						<el-card>
							<el-row>
								<el-col :span="8">
									<el-form-item label-width="100px">
										<template slot="label">
											药品{{x}}
										</template>
										<el-input v-model="postForm.name" autosize placeholder="体温" />

									</el-form-item>

								</el-col>
								<el-col :span="16">
									<el-form-item label-width="100px" label="服用时间">

										<el-checkbox-group v-model="postForm.time1">
											<el-checkbox label="早"></el-checkbox>
											<el-checkbox label="中"></el-checkbox>
										</el-checkbox-group>
									</el-form-item>

								</el-col>
							</el-row>

							<el-row>
								<el-col :span="18">
									<el-form-item label-width="100px" label="服用剂量">
										<el-input v-model="postForm.name" autosize placeholder="服用剂量" />

									</el-form-item>

								</el-col>
								<el-col :span="6">
									<el-button>添加</el-button>
									<el-button>删除</el-button>
								</el-col>
							</el-row>

						</el-card>

					</div>
					<el-row>
						<el-col :span="24">
							<el-form-item label-width="100px" label="家长备注">
								<el-input v-model="postForm.name" autosize placeholder="家长备注" />

							</el-form-item>

						</el-col>
					</el-row>

					<el-button>提交确认</el-button>

				</el-collapse-item>

			</el-collapse>
		</el-form>

	</div>
</template>

<script>
	import { getList } from '@/api/db'
	import StudentInfo from '@/components/StudentInfo'
	import PadHeader from './head'
	import PersonAvatar from '@/components/PersonAvatar'
	export default {
		name: 'Studentdedail',
		components: {
			StudentInfo,
			PadHeader,
			PersonAvatar
		},
		//		props: {
		//			student: {},
		//		},
		data() {
			return {
				data: {},
				activeName: ["1"],
				id: "",
				postForm: {
					time: [],
					time1: []
				},

			}
		},
		created() {
			this.id = this.$route.params && this.$route.params.id
			this.fetchData(this.id)

		},
		methods: {
			fetchData(id) {
				let param = {
					'name': 'medicine',
					req: {
						"student_id": id
					}
				}
				getList(param).then(response => {
					this.postForm = response.items[0]

				}).catch(err => {

				})

			},

		}
	}
</script>

<style>
	.page-container {
		margin: 16px;
	}
	
	.curdate {}
</style>