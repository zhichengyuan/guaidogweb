<template>
	<div class="page-container">
		
		<el-card v-for="(item,index) in list" :key="index">
	
			<el-row>
				<el-col :span="4"><el-avatar shape="circle" :size="100" fit="fill" :src="'@assets/logo.png'"></el-avatar></el-col>
				<el-col :span="20">
					<p> <span>{{item.student.name}}</span></p>
					<p> <span>体温：{{item.student.name}} 症状：{{item.student.symptom}}</span></p>
					<p v-for="(drug,index ) in item.Drugs" :key="index"> 
						<span>{{drug.name}}</span> 
							<span>{{drug.method}}</span> 
						<span v-for="(take,index ) in drug.takemedicine" :key="index"> 
								<span>{{take.time}}</span>
									<span>{{take.done}}</span>
							</span>
						
						
					</p>
					<p> <span>医嘱：{{item.student.doctoradvice}}</span></p>
				</el-col>
			</el-row>
			
			

		</el-card>
			
<!--{{list}}-->
		
	</div>
</template>

<script>
	import { getList,saveData } from '@/api/db'
	export default {
		name: 'Dashboard',
		components: {},
		data() {
			return {
				list: [],
				listLoading: true,
				listQuery: {
					
					name:"infirmary",
				}
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
				
			
			},
			async logout() {
     	await this.$store.dispatch('user/logout')
     	console.log("redir")
      this.$router.push("/")
    }
		}
	}
</script>

<style>
	.page_container{
		margin: 5px;
	}
</style>