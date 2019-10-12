<template>
	<div>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
		<el-row>
			<el-input placeholder="请输入内容" v-model="input10" clearable>
				<i slot="suffix" class="el-input__icon el-icon-date"></i>
			</el-input>

		</el-row>
		<el-row>
			<template>
				<el-input-number v-model="num1" controls-position="right" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
			</template>

		</el-row>
		<el-select v-model="selectvalue" placeholder="请选择" clearable multiple>
			<el-option v-for="item in options" :key="item.value" :label="item.label" :disabled="item.disabled" :value="item.value">
			</el-option>
		</el-select>

		<el-switch v-model="value2" active-text="按月付费" inactive-text="按年付费" active-value="100" inactive-value="0" active-color="#13ce66" inactive-color="#ff4949">

		</el-switch>
		<el-row>
			<template>
				<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
					<el-radio-button label="top">top</el-radio-button>
					<el-radio-button label="right">right</el-radio-button>
					<el-radio-button label="bottom">bottom</el-radio-button>
					<el-radio-button label="left">left</el-radio-button>
				</el-radio-group>

				<el-tabs :tab-position="tabPosition" style="height: 200px;">
					<el-tab-pane label="用户管理">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
			</template>

		</el-row>

		<el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>

		<div class="demo-image__placeholder">
			<div class="block">
				<span class="demonstration">默认</span>
				<el-image :src="src"></el-image>
			</div>
			<div class="block">
				<span class="demonstration">自定义</span>
				<el-image :src="src">
					<div slot="placeholder" class="image-slot">
						加载中<span class="dot">...</span>
					</div>
				</el-image>
			</div>
		</div>
		<div class="demo-image__placeholder">
			<div class="block">
				<span class="demonstration">默认</span>
				<el-image :src="src"></el-image>
			</div>
			<div class="block">
				<span class="demonstration">自定义</span>
				<el-image :src="src">
					<div slot="placeholder" class="image-slot">
						加载中<span class="dot">...</span>
					</div>
				</el-image>
			</div>
		</div>
		<div class="demo-image__placeholder">
			<div class="block">
				<span class="demonstration">默认</span>
				<el-image :src="src"></el-image>
			</div>
			<div class="block">
				<span class="demonstration">自定义</span>
				<el-image :src="src">
					<div slot="placeholder" class="image-slot">
						加载中<span class="dot">...</span>
					</div>
				</el-image>
			</div>
		</div>
		<div class="demo-image__placeholder">
			<div class="block">
				<span class="demonstration">默认</span>
				<el-image :src="src"></el-image>
			</div>
			<div class="block">
				<span class="demonstration">自定义</span>
				<el-image :src="src">
					<div slot="placeholder" class="image-slot">
						加载中<span class="dot">...</span>
					</div>
				</el-image>
			</div>
		</div>

		<template>
			<el-button @click="resetDateFilter">清除日期过滤器</el-button>
			<el-button @click="clearFilter">清除所有过滤器</el-button>
			<el-table ref="filterTable" :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="日期" sortable width="180" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址" :formatter="formatter">
				</el-table-column>
				<el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" filter-placement="bottom-end">
					<template slot-scope="scope">
						<el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
					</template>
				</el-table-column>
			</el-table>
		</template>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
				tabPosition: 'left',
				input10: '',
				num1: 1,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					tag: '公司'
				}],
				value2: true,
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面',
					disabled: true
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				selectvalue: ''

			}
		},
		methods: {
			resetDateFilter() {
				this.$refs.filterTable.clearFilter('date');
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},
			formatter(row, column) {
				return row.address;
			},
			filterTag(value, row) {
				return row.tag === value;
			},
			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			handleChange(value) {
				console.log(value);
			}
		}
	}
</script>

<style>

</style>