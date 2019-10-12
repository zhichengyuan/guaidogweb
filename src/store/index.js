import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import global from './modules/global'
import user from './modules/user'
import classes from './modules/classes'
import student from './modules/student'
Vue.use(Vuex)

//const computed={
//doneTodosCount () {
//  return this.$store.state.todos.filter(todo => todo.done).length
//}
//}

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    classes,
    global,
    student,
  },
  getters	,
})

export default store
