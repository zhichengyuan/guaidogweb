<template>
	<div class="app-container">
		
		<h3>班级列表</h3>
		<el-table  :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<el-table-column align="center" label="序号" width="95">
				<template slot-scope="scope">
					{{ scope.$index }}
				</template>
			</el-table-column>
			<el-table-column label="班级名称" width="200">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="班主任" width="120" align="center">
				<template slot-scope="scope">
					<span>{{ TeacherName(scope.row.teacher)}}</span>
				</template>
			</el-table-column>
			<el-table-column label="学生人数" width="110" align="center">
				<template slot-scope="scope">
					<span>{{  $store.getters.studentnum(scope.row._id)}}</span>
				</template>
			</el-table-column>
			
			<el-table-column align="center" label="操作" >
				<template slot-scope="scope">
					<router-link :to="'/datamanager/classroomedit/'+scope.row._id">
						<el-button type="primary"  icon="el-icon-edit">
							Edit
						</el-button>
					</router-link>
					<router-link :to="'/datamanager/classroomedit/new'">
			<el-button type="primary"  icon="el-icon-plus" >新增</el-button>
		</router-link>
				</template>
			</el-table-column>

		</el-table>
		<div class="pagebutton">
			</div>
	</div>
</template>

<script>
	import { getList } from '@/api/db'
	import { mapGetters } from 'vuex'
	
	export default {
		data() {
			return {
				list: this.$store.state.classes.classes,
			}
		},
		methods: {
			TeacherName(id){
				if(id == undefined)
					return ""
				return this.$store.state.global.teachermaps[id].name
				
			},
			TeacherTel(id){
				if(id == undefined)
					return ""
				return this.$store.state.global.teachermaps[id].tel
				
			},
			
		}
	}
</script>
<style>
	.pagebutton{
		text-align: right;
	}
</style>