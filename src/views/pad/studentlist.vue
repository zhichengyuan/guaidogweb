<template>
	<div>
		<pad-header :caption="heads"></pad-header>
		<div class="padmain">
			<div class="div_flag">
				<span>  <i class="el-icon-s-help text-success"   style="color: #909399"/>未签到</span>
				<span>  <i class="el-icon-s-help" style="color:#67C23A"/>签到</span>
				<span>  <i class="el-icon-s-help" style="color: #F56C6C"/>过时未签到</span>
				<span>  <i class="el-icon-s-help" style="color: #E6A23C;"/>身体异常</span>
			</div>
			<div class="padmain" :style="{height:($store.state.global.screenSize.height-130)+'px'} ">
				<el-row>
					<!--	<div v-for="(i) in 100">-->
					<el-col :span="2" v-for="(p,index) in students" :key="index" class="student">
						<a @click="gowork(p)" align="center">
							<person-avatar :id="p.avatar" :w="50" :h="50" :stateclass="getAvatarStateClass(p)"></person-avatar>
							<p class="student-name">{{ p.name }}</p>
						</a>
					</el-col>
					<!--	</div>-->
				</el-row>
			</div>
		</div>
		<pad-footer></pad-footer>
	</div>
	<!--<div class="dashboard-container">
		<div class="dashboard-text">name: {{ name }}sex{{sex}}</div>
		rand: {{$store.state.user.randcode}}
			sid: {{$store.state.user.token}}
		
		<el-button @click="getRandCode()"> ddd </el-button>
	</div>-->
</template>

<script>
	import { getList, saveData } from '@/api/db'
	import { uploadAvatar, getAvatar } from '@/api/upload'
	import PersonAvatar from '@/components/PersonAvatar'
	import PadHeader from './head'
	import PadFooter from './footer'

	const tablename = "student"
	export default {
		name: 'Dashboard',
		components: {
			PersonAvatar,
			PadHeader,
			PadFooter
		},
		data() {
			return {
				students: [],
				classesid: '',
				heads: "",
				timer: '',
			}
		},
		created() {
			var system = this.$store.state.global.system
			this.classesid = system.curclass._id
			this.fetchData(this.classesid)
		},
		mounted() {
			this.timer = setInterval(this.flashState, 5000);
		},
		beforeDestroy() {
			clearInterval(this.timer);
		},
		methods: {
			flashState() {
				this.students[0].state = "sign"
			},

			getAvatarStateClass(person) {
				return [person.state]
			},
			gowork(student) {
				//this.$router.push("/pad/infirmarydedail/" + student._id)

			},
			fetchData() {
				let param = {
					'name': tablename,
					'req': {
						"classes": this.classesid
					}
				}
				getList(param).then(data => {
					this.students = data.items
				}).catch(err => {
					console.log(err)
				})

			}

		},

	}
</script>

<style lang="scss" scoped>
	.div_flag span {
		margin-left: 10px;
	}
	
	.el-breadcrumb__inner {
		color: #FFF;
	}
	
	.padmain {
		overflow: auto;
	}
	
	.student-name {
		margin: 5px;
	}
	
	.student {
		display: inline-block;
		text-align: center;
		margin: 10px;
	}
	/*.imgstudent {
		width: 100px;
		height: 100px;
		border: solid red 1px;
		border-radius: 50%;
	}*/
	/*.circle {
		border-radius: 50%;
	}*/
	
	.el-header {
		background-color: #1482F0;
		padding: 5px;
		color: #FFF;
		text-align: left;
		line-height: 30px;
	}
	/*.el-footer {
		background-color: #999999;
		padding: 5px;
		color: #FFF;
		text-align: center;
		line-height: 30px;
	}*/
	/*.page-footer {
		margin-top: 5px;
	}
	*/

</style>
