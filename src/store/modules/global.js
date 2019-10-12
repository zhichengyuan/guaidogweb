//引用api的函数
import { getList } from '@/api/db'

//数据定义
const state = {
	system:{},
	roles: [],
	teachers: [],
	teachermaps: {},
	screenSize:{width:1024,height:768},
	
}

//computed: {
//	TeacherName: (state) => (id) => {
//		return state.teachermaps[id].name
//	}
//
//}

//修改 组件中使用$store.commit('',params)
const mutations = {
	SET_ROLES: (state, roles) => {
		state.roles = roles
	},
	SET_SYSTEM: (state, system) => {
		state.system = system
	},
	SET_SCREENSIZE: (state, size) => {
		state.screenSize = size
		console.log("size",size.width,size.height)
	},
	SET_ROLES: (state, roles) => {
		state.roles = roles
	},
	SET_TEACHERS: (state, teachers) => {
		state.teachers = teachers
		state.teachermaps={}
		for(var i in teachers) {
			state.teachermaps[state.teachers[i]._id] = state.teachers[i]
		}
	},
}
//异步操作  组件中$store.dispath('')
const actions = {
	fetchRoules({
		commit
	}) {
		return new Promise((resolve, reject) => {
			getList({
				
				name: 'setting',
				'req': {
					name: 'roule'
				}
			}).then(response => {
				commit('SET_ROLES', response.items[0].items)
			}).catch(error => {
				reject(error)
			})
		})
	},
	fetchTeachers({
		commit
	}) {
		return new Promise((resolve, reject) => {
			getList({
				
				name: 'user',
				'req': {
					roles: {
						'$in': ['班主任']
					}
				}
			}).then(response => {
				commit('SET_TEACHERS', response.items)
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