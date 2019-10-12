<template>
	<el-card class="box-card">
		<p>{{classroom.name}}</p>
		<p><span class="caption">班主任：</span> {{TeacherName(classroom.teacher)}}</p>
		<!--<p><span class="caption">学 生：</span>  {{classroom.childnum}}</p>-->
	</el-card>
</template>

<script>
	export default {
		name: 'ClassRoomInfo',
		props: {
			classroom: {},
		},
		methods: {
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
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-card{
		margin: 10px;
	}
	.caption{
		color: #13CE66;
	}
	p{
		text-align: center;
	}
</style>