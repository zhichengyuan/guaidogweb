//引用api的函数
import { login, logout, getInfo, rand } from '@/api/user'
//引用库函数
import { getToken, setToken, removeToken } from '@/utils/auth'


//数据定义
const state = {
    token: getToken(),
    info: { role: 'admin' },
    name: 'whm1',
    firstpath: "admin",
    sex: '男',
    avatar: '',
    randcode: 'randxx',
}

//修改 组件中使用$store.commit('',params)
const mutations = {
        SET_TOKEN: (state, token) => {
            setToken(token)
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_RANDCODE: (state, randcode) => {
            state.randcode = randcode
        }
    }
    //异步操作  组件中$store.dispath('')
const actions = {
    // user login
    login({
        commit
    }, userInfo) {
        const {
            username,
            password
        } = userInfo
        return new Promise((resolve, reject) => {
            login({
                username: username.trim(),
                password: password
            }).then(response => {
                commit('SET_TOKEN', response.sid)

                //返回异步对象 
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    getInfo({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const {
                    data
                } = response

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                const {
                    name,
                    avatar
                } = data

                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {

            commit('SET_TOKEN', '')
            console.log("logout")
            resolve()
                //			logout(state.token).then(() => {
                //				commit('SET_TOKEN', '')
                //				removeToken()
                //				resetRouter()
                //				resolve()
                //			}).catch(error => {
                //				reject(error)
                //			})
        })
    },
    // user randcode
    randcode({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            randcode(state.token).then(() => {
                commit('SET_RANDCODE', 'new')

                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // remove token
    resetToken({
        commit
    }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}