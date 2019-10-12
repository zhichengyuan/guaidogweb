<template>
	<div class="app-container">

		<h3>学生列表</h3>
		<el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<el-table-column align="center" label="序号" width="95">
				<template slot-scope="scope">
					{{ scope.$index }}
				</template>
			</el-table-column>
			<el-table-column label="姓名">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="性别">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="出生年月" align="center">
				<template slot-scope="scope">
					{{ scope.row.birthday }}
				</template>
			</el-table-column>
			<el-table-column label="所在班级" width="110" align="center">
				<template slot-scope="scope">
					<span>{{  $store.getters.classesname(scope.row.classes) }}</span>
				</template>
			</el-table-column>
			<el-table-column label="照片" width="110" align="center">
				<template slot-scope="scope">
						<person-avatar :id="scope.row.avatar"  :w="50" :h="50" :stateclass="getAvatarStateClass(scope.row)"></person-avatar>
				</template>
			</el-table-column>
			<el-table-column label="接送人" width="110" align="center">
				<template slot-scope="scope">
						
				<span  v-for="(p,index) in scope.row.parents" :key="index">
					<router-link :to="'/datamanager/parentedit/'+p._id">
					<span>{{p.relation}} </span>
					</router-link>
					
				</span>
				
				</template>
			</el-table-column>

			<el-table-column align="center" label="操作" width="120">
				<template slot-scope="scope">
					<router-link :to="'/datamanager/studentedit/'+scope.row._id">
						<el-button type="primary" size="small" icon="el-icon-edit">
							Edit
						</el-button>
					</router-link>
				</template>
			</el-table-column>

		</el-table>
		<div class="pagebutton">
			<router-link :to="'/datamanager/studentedit/new'">
			<el-button>新增</el-button>
		</router-link></div>
	</div>
</template>

<script>
	import { getList } from '@/api/db'
	import PersonAvatar from '@/components/PersonAvatar'
	const tablename = "student"
	export default {
		components: {PersonAvatar},
		filters: {
			statusFilter(status) {
				const statusMap = {
					published: 'success',
					draft: 'gray',
					deleted: 'danger'
				}
				return statusMap[status]
			}
		},
		data() {
			return {
				list: [],
				listQuery: {
					
					name: tablename,
				},
				listLoading: true
			}
		},
		created() {
			this.fetchData()
		},
		methods: {
			getAvatarStateClass(person){
				return [person.state]
			},
			AvatarSrc(id) {
				return getAvatar(id)
			},
			
			fetchData() {
				this.listLoading = true
				getList(this.listQuery).then(data => {
					this.list = data.items
					this.listLoading = false
				}).catch((err) => {
					// 处理 getJSON 和 前一个回调函数运行时发生的错误
					console.log('发生错误！', err);
					this.listLoading = false
				});

			}
		}
	}
</script>
<style>
	.pagebutton{
		text-align: right;
	}
	
</style>