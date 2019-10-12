<template>
	<div>
		<pad-header :caption="heads"></pad-header>
			<div class="padmain" :style="{height:($store.state.global.screenSize.height-110)+'px'} ">
				
			<el-card v-for="(item,index) in list" :key="index">

				<el-row>
					<el-col :span="4">
						<person-avatar :id="item.avatar" :w="50" :h="50" :stateclass="'ill'"></person-avatar>

					</el-col>
					<el-col :span="20">
						<!--<p> <span>{{item.student.name}}</span></p>
					<p> <span>体温：{{item.student.name}} 症状：{{item.student.symptom}}</span></p>
					<p v-for="(drug,index ) in item.Drugs" :key="index"> 
						<span>{{drug.name}}</span> 
							<span>{{drug.method}}</span> 
						<span v-for="(take,index ) in drug.takemedicine" :key="index"> 
								<span>{{take.time}}</span>
									<span>{{take.done}}</span>
							</span>
						
						
					</p>-->
						<p> <span>医嘱：{{item.doctoradvice}}</span></p>
					</el-col>
				</el-row>

			</el-card>
		</div>
		<pad-footer></pad-footer>

	</div>
</template>

<script>
	
	import { getList, saveData } from '@/api/db'
		import PadHeader from './head'
	import PadFooter from './footer'
	import PersonAvatar from '@/components/PersonAvatar'
	const tablename = "student"
	export default {
		name: 'Dashboard',
		components: {
		PadHeader,
			PadFooter,
			PersonAvatar
		},
		data() {
			return {
				list: [],
				heads: "",
				listLoading: true,
				listQuery: {

					name: tablename,
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
		}
	}
</script>

<style>
	
	.padmain {
		overflow: auto;
	}
</style>