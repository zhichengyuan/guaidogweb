//引用api的函数
import { getList } from '@/api/db'
//数据定义
const state = {
	students: [],
	studentmaps: {},
}

//修改 组件中使用$store.commit('',params)
const mutations = {
	SET_STUDENT: (state, students) => {
		state.students = students
		state.studentmaps={}
		for(var i in students) {
			state.studentmaps[students[i]._id] = students[i]
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
				name: 'student'
			}).then(response => {
				commit('SET_STUDENT', response.items)
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