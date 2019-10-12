<template>
	<div class="app-container">
		<h3>班级列表</h3>
		<el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<el-table-column align="center" label="编号" width="95">
				<template slot-scope="scope">
					{{ scope.$index }}
				</template>
			</el-table-column>
			<el-table-column label="学校名称">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="学校地址" width="110" align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.addr }}</span>
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
			<el-table-column align="center" prop="created_at" label="简述" width="200">
				<template slot-scope="scope">
					<i class="el-icon-time" />
					<span>{{ scope.row.describe }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="操作" width="120">
				<template slot-scope="scope">
					<router-link :to="'/datamanager/edit/'+scope.row._id">
						<el-button type="primary" size="small" icon="el-icon-edit">
							Edit
						</el-button>
					</router-link>
				</template>
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
	import { getList } from '@/api/db'

	export default {
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
					
					name: "school",
				},
				listLoading: true
			}
		},
		created() {
			this.fetchData()
		},
		methods: {
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