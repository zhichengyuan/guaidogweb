<template>
	<!--页面使用数据的方式
	1 rand: {{$store.state.user.randcode}}
	2 映射成map  {{ name }}
	-->
	<div>
		<el-container>
			<el-header clsss="page-header" height="40px">

				<el-row :gutter="20">
					<el-col :span="16">

						<a>201班 </a>
						<span> / </span>
						<a>返回</a>
					</el-col>
					<el-col :span="8" style="text-align: right;">
						<a  @click="logout">退出</a>
					</el-col>
				</el-row>

			</el-header>
			<el-main>

				<div class="div_flag">
				
					<span>  <i class="el-icon-s-help text-success"   style="color: #909399"/>未签到</span>
					<span>  <i class="el-icon-s-help" style="color:#67C23A"/>签到</span>
					<span>  <i class="el-icon-s-help" style="color: #F56C6C"/>过时未签到</span>
					<span>  <i class="el-icon-s-help" style="color: #E6A23C;"/>身体异常</span>
				</div>
				<div style="height: 400px; overflow: auto;">
					<el-row :gutter="20">
						<el-col :span="3" v-for="(n,index) in list" :key="index" class="student">
							<el-avatar shape="circle" :size="100" fit="fill" :src="n.src"></el-avatar>
							<p class="student-name">{{ n.name }}</p>
						</el-col>
					</el-row>
				</div>

			</el-main>
			<el-footer height="40px" class="page-footer">
				<el-row :gutter="20">
					<el-col :span="6">

						<a>考勤</a>

					</el-col>
					<el-col :span="6">

						<a>医务</a>

					</el-col>
					<el-col :span="6">

						<a>对讲</a>

					</el-col>
					<el-col :span="6">

						<a>报警</a>

					</el-col>
				</el-row>

			</el-footer>
		</el-container>
	</div>
	<!--<div class="dashboard-container">
		<div class="dashboard-text">name: {{ name }}sex{{sex}}</div>
		rand: {{$store.state.user.randcode}}
			sid: {{$store.state.user.token}}
		
		<el-button @click="getRandCode()"> ddd </el-button>
	</div>-->
</template>

<script>
	import { getList,saveData } from '@/api/db'
	export default {
		name: 'Dashboard',
		components: {},
//		filters: {
//			statusFilter(status) {
//				const statusMap = {
//					published: 'success',
//					draft: 'info',
//					deleted: 'danger'
//				}
//				return statusMap[status]
//			}
//		},
		data() {
			return {
				list: [],
				listLoading: true,
				listQuery: {
					
					name:"classes",
				}
			}
		},
		created() {
			this.fetchData()
			saveData("classes",{name:'www2',"_id":"5d2f66d9462422b878f6d5c1"})
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

<style lang="scss" scoped>
	.el-breadcrumb__inner {
		color: #FFF;
	}
	
	.student-name {
		margin: 5px;
	}
	
	.student {
		display: inline-block;
		text-align: center;
		margin: 10px;
	}
	
	.imgstudent {
		width: 100px;
		height: 100px;
		border: solid red 1px;
		border-radius: 50%;
	}
	
	.circle {
		border-radius: 50%;
	}
	
	.el-header {
		background-color: #1482F0;
		padding: 5px;
		color: #FFF;
		text-align: left;
		line-height: 30px;
	}
	
	.el-footer {
		background-color: #999999;
		padding: 5px;
		color: #FFF;
		text-align: center;
		line-height: 30px;
	}
	
	.page-footer {
		margin-top: 5px;
	}
	
	.dashboard {
		&-container {
			margin: 30px;
		}
		&-text {
			/*链接符的形式*/
			font-size: 30px;
			line-height: 46px;
		}
	}
</style>

<!--
var SerialPortServiceClass_UUID = '00001101-0000-1000-8000-00805f9b34fb';
				var options = {
					filters: [{
						namePrefix: 'HC'
					}],
					optionalServices: [SerialPortServiceClass_UUID ]
				}
				navigator.bluetooth.requestDevice(options).then(function(device) {
						console.log('名称: ' + device.name);
						// 在此处实现设备调用
						device.gatt.connect().then(function(server) {
								console.log(server)
							server.getCharacteristic(SerialPortServiceClass_UUID).then(
								function(service) {
								console.log("www")
							}).catch(function(error) {
						console.log("出现错误： " + error);
					});
						}).catch(function(error) {
						console.log("出现错误： " + error);
					});

					})
					.catch(function(error) {
						console.log("出现错误： " + error);
					});-->