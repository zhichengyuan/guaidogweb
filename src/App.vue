<template>
	<div id="app">
		
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		
		created() {
			this.fetchData()
		},
		mounted() {
			const that = this
			window.onresize = () => {
				return(() => {
					//window.screenWidth = document.body.clientWidth
					this.$store.commit('SET_SCREENSIZE', {width:document.body.clientWidth,height:document.body.clientHeight});
					
					//that.screenWidth = window.screenWidth
				})()
			}
		},
		methods: {
			fetchData() {
				console.log("www")
				this.$store.commit('SET_SYSTEM', {})
				this.$store.commit('SET_SCREENSIZE', {width:document.body.clientWidth,height:document.body.clientHeight});
				this.$store.dispatch('fetchRoules')
				this.$store.dispatch('fetchTeachers')
				this.$store.dispatch('fetchClasses')
				
				

			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 0px;
		background: #fbfbfc;
		p{
			margin: 0px;
		}
	}
</style>