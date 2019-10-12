<template class="page">
	<div>
		
	 <div class="list" :style="{height:($store.state.global.screenSize.height-180)+'px'} ">
		<el-row>
			<el-col :span="6" v-for="(d,index) in list" :key="index">
				<!--<router-link :to="'/pad/studentlist/'+d._id">-->
					<a @click="select_classromm(d)">
					<class-room-Info :classroom="d" ></class-room-Info>
				<!--</router-link>-->
				</a>

			</el-col>
		</el-row>
		</div>
		<!--<pad-footer></pad-footer>-->
	</div>
	
</template>

<script>
	import ClassRoomInfo from '@/components/ClassRoomInfo'
	import { mapGetters } from 'vuex'
	import { getList } from '@/api/db'
	const tablename = "classes"
	import PadFooter from './footer'
	export default {
		name: 'Studentdedail',
		components: {
			ClassRoomInfo,
			PadFooter,
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
			select_classromm(d){
				alert("ww")
				
				var system=this.$store.state.global.system
				system.curclass=d
				this.$store.commit('SET_SYSTEM', system)
				 this.$router.push({ path: '/pad/studentlist' })

			},
			TeacherName(id) {
				if(id == undefined)
					return ""
				return this.$store.state.global.teachermaps[id].name

			},
			TeacherTel(id) {
				if(id == undefined)
					return ""
				return this.$store.state.global.teachermaps[id].tel

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
		},

		computed: {
			...mapGetters([])
		}
	}
</script>

<style>
	.box-card {}
	.page{
    box-sizing: border-box;/*为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制*/
    min-height: 300px;
    padding-bottom: 25px;
}

</style>