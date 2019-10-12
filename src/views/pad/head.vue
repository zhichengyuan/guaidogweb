<template>
	<div clsss="page-header">
		<div class="haedtitle"><span>{{caption}}</span> </div>
		<div class="haedbutton"><span @click="goback()"> 返回</span>  </div>
		<el-row>
			<el-col :spam="12">
				
			</el-col>
			<el-col :spam="12">
				
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'PadHeader',
		props: {
			caption: "",
		},
		methods: {
			goback() {
				this.$router.back(-1)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.page-header{
		height: 100px;
		background-color: darkblue;
		color: white;
	}
	.haedtitle{
		width: 59%;
		display: inline-block;
		text-align: left;
		clear: both;
		padding: 0 10px;
	}
	.haedbutton{
		width: 40%;
		display: inline-block;
		text-align: right;
	}
</style>