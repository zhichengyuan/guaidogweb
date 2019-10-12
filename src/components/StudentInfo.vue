<template>
	<div>
		<el-row>
			<el-col :span="4">
				<!--	<person-avatar :id="p.avatar[0]"></person-avatar>-->
				<person-avatar :id="student.avatar[0]" :w="80" :h="80"></person-avatar>
			</el-col>
			<el-col :span="20">
				<p> <span>{{student.name}}</span></p>
				<p> <span>学号：{{student.no}}</span></p>
				<p> <span>家长：
					<span v-for="(p,index) in student.parents" :key="index"> {{p.relation}} </span>
					</span>
				</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import PersonAvatar from '@/components/PersonAvatar'
	export default {
		name: 'StudentInfo',
		components: {
			PersonAvatar
		},

		props: {
			student: {},
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	p{
		margin: 0 10px;
	}
</style>