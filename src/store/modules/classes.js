//引用api的函数
import { getList } from '@/api/db'
//数据定义
const state = {
	classes: [],
	classesmaps: {},
}

//修改 组件中使用$store.commit('',params)
const mutations = {
	SET_CLASSESS: (state, classes) => {
		state.classes = classes
		state.classesmaps={}
		for(var i in classes) {
			state.classesmaps[state.classes[i]._id] = state.classes[i]
		}
	}
}
//异步操作  组件中$store.dispath('')
const actions = {
	fetchClasses({
		commit
	}) {
		return new Promise((resolve, reject) => {
			getList({
				name: 'classes'
			}).then(response => {
				commit('SET_CLASSESS', response.items)
			}).catch(error => {
				reject(error)
			})
		})
	},
}

export default {
	state,
	mutations,
	actions
}