//公开给页面的数据
const getters = {
	sidebar: state => state.app.sidebar,
	device: state => state.app.device,
	token: state => state.user.token,
	avatar: state => state.user.avatar,
	name: state => state.user.name,
	rand: state => state.user.rand + "_abcd",
	sex: state => state.user.sex,
	students: state => state.student.students,
	classesname: (state) => (id) => {
		if(state.classes.classesmaps[id] != undefined)
			return state.classes.classesmaps[id].name
		return ""
	},
	studentnum: (state) => (id) => {
		var n = 0
		console.log(id)
		for(var i in state.student.students) {
					console.log(state.student.students[i].classes)
			if(state.student.students[i].classes == id)
				n=n + 1
		}
		return n
	}
	//doneTodos: state => {
	//    return state.todos.filter(todo => todo.done)
	//  }

}
export default getters