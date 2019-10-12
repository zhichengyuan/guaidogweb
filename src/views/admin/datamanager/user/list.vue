<template>
	<div class="app-container">
		<h3>人员列表</h3>
		<el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<el-table-column align="center" label="编号" width="60">
				<template slot-scope="scope">
					{{ scope.$index }}
				</template>
			</el-table-column>
			<el-table-column label="姓名" width="80">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="角色" width="300" align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.roles }}</span>
				</template>
			</el-table-column>
			<el-table-column label="班级列表" width="110" align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.teacher }}</span>
				</template>
			</el-table-column>
			<el-table-column label="照片" width="80" align="center">
				<template slot-scope="scope">
					<person-avatar :id="scope.row.avatar" :w="50" :h="50" :stateclass="getstateclass(scope.row)"></person-avatar>
				</template>
			</el-table-column>
			<el-table-column label="联系方式" width="110" align="center">
				<template slot-scope="scope">
					{{ scope.row.tel }}
				</template>
			</el-table-column>
			<el-table-column class-name="status-col" label="Email" width="110" align="center">
				<template slot-scope="scope">
					{{ scope.row.email }}
				</template>
			</el-table-column>
			<el-table-column align="center" label="操作" >
				<template slot-scope="scope">
					<router-link :to="'/datamanager/useredit/'+scope.row._id">
						<el-button type="primary" size="small" icon="el-icon-edit">
							
						</el-button>
					</router-link>
					<router-link :to="'/datamanager/useredit/new'">
			<el-button type="primary"  icon="el-icon-plus" ></el-button>
		</router-link>
				</template>
			</el-table-column>

		</el-table>
		
	</div>
</template>

<script>
	import { getList } from '@/api/db'
	import PersonAvatar from '@/components/PersonAvatar'
	import getAvatarStateClass from '@/api/misc'
	
	const tablename = "user"
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

					name: tablename
				},
				listLoading: true
			}
		},
		created() {
			this.fetchData()
		},
		methods: {
			getstateclass( item){
				
				return [ 'ill']
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
	.pagebutton {
		text-align: right;
	}
</style>