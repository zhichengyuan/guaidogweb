<template>
	<!--页面使用数据的方式
	1 rand: {{$store.state.user.randcode}}
	2 映射成map  {{ name }}
	-->
	<div class="dashboard-container">
		<div class="dashboard-text">name: {{ name }}sex{{sex}}</div>
		{{$store.state.global.teachermaps}} rand: {{$store.state.user.randcode}} sid: {{$store.state.user.token}} role:{{$store.state.user.info.role}} 管理员{{isadmin}} 22

		<div id="echartContainer" style="width:500px; height:500px"></div>
		<el-button @click="getRandCode()"> ddd </el-button>
	</div>
</template>

<script>
	import { randcode } from '@/api/user'
	import { isAdmin } from '@/utils/auth'
	import { mapGetters } from 'vuex'

	var echarts = require('echarts')

	export default {
		name: 'Dashboard', //定义本页面要的数据 从mapgetter中获取
//		components: {
//			codemirror
//		},
		created() {
			this.isadmin = isAdmin(this.$store.state.user.info)
		},
		data() {
			return {
				isadmin: false

			}
		},
		methods: {
			getRandCode() {
				console.log("ww");
				//this.$store.dispatch('user/randcode')
				randcode().then(data => {
					console.log(data)
					this.$store.commit('user/SET_RANDCODE', data)

				}).catch(err => {
					console.log(err)
				})

			}
		},
		mounted() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('echartContainer'));
			// 绘制图表
			myChart.setOption({
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		computed: {
			...mapGetters([
				'name', //获取state中的数据
				'rand',
				'sex'
			])
		}
	}
</script>

<style lang="scss" scoped>
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