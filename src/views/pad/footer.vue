<template>
	<div class="footer" >
		<a v-for="(f,index) in foots " @click="go(f.path)"><span>{{f.title}}</span></a>
	</div>
</template>

<script>
	export default {
		name: 'PadFooter',
		data() {
			return {
				foots: [{
					title: "考勤",
					path: "/pad/studentlist"
				}, {
					title: "医务",
					path: "/pad/infirmarylist"
				}, {
					title: "对讲",
					path: "/pad/tel"
				}, {
					title: "报警",
					path: "/pad/alarm"
				}],
			}

		},
		methods: {
			go(path) {
				this.$router.push({ path: path })
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer {
		text-align: center;
		height: 25px;
		margin-top: 5px;
		opacity: 0.5;
		color: #5E5E5E;
	}
	
	.footer span {
		width: 150px;
		display: inline-block;
	}
</style>