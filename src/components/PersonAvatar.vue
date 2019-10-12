<template>
	<div class="avatar">

		<div class="circleborder" :class="stateclass" v-bind:style="{ width: w+4+'px', height: h+4 + 'px' }" style="margin:0 auto">
			<img v-bind:src="Src(id)" v-bind:style="{ width: w+'px', height: h + 'px' }" />
			<!--<i v-else class="el-icon-plus avatar-uploader-icon" v-bind:style="{ width: w+'px', height: h + 'px'}"></i>-->
		</div>
	</div>
</template>

<script>
	import { ApiBase } from '@/settings'
	export default {
		name: 'PersonAvatar',
		props: {
			id: "",
			w: "",
			h: "",
			stateclass: "",

		},
		methods: {
			Src(id) {
				return ApiBase + "/avatar/download?id=" + id;
			},
		}
	}
	
</script>

<style scoped>
	.avatar img {
		margin-left: -2px;
		margin-top: -2px;
		border-radius: 50%;
	}
	
	.avatar {
		text-align: center;
	}
	
	.avatar i {
		font-size: 16px;
	}
	
	.circleborder {
		border-radius: 50%;
		border-width: 4px;
		border-style: solid;
	}
	
	.normal {}
	
	.nosign {
		border-color: #909399;
	}
	
	.sign {
		border-color: #67C23A;
	}
	
	.later {
		border-color: #F56C6C;
	}
	
	.ill {
		border-color: #E6A23C;
	}
</style>