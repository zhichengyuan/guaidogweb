import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/admin',
        component: Layout,
        name: 'admin',
        redirect: '/admin/dashboard',
        children: [{
            path: 'dashboard', //
            name: 'Dashboard',
            component: () =>
                import ('@/views/admin/dashboard/index'),
            meta: {
                title: '首页',
                icon: 'dashboard',
            }
        }]
    },

    {
        path: '/datamanager',
        component: Layout,
        //redirect: '/datamanager/list',
        name: 'datamanager',
        meta: {
            title: '数据管理',
            icon: 'example'
        },
        children: [{
                path: 'user',
                name: 'user',
                component: () =>
                    import ('@/views/admin/datamanager/user/list'),
                meta: {
                    title: '教职员工',
                    icon: 'dashboard',
                }
            },
            {
                path: 'useredit/:id',
                name: 'useredit',
                hidden: true,
                component: () =>
                    import ('@/views/admin/datamanager/user/edit'),
                meta: {
                    title: '员工详情',
                    icon: 'dashboard',
                }
            },
            {
                path: 'classroom',
                name: 'classroom',
                component: () =>
                    import ('@/views/admin/datamanager/classes/list'),
                meta: {
                    title: '班级列表',
                    icon: 'dashboard',
                }
            },
            {
                path: 'classroomedit/:id',
                name: 'classroomedit',
                hidden: true,
                component: () =>
                    import ('@/views/admin/datamanager/classes/edit'),
                meta: {
                    title: '班级详情',
                    icon: 'dashboard',
                }
            }, {
                path: 'student',
                name: 'student',
                component: () =>
                    import ('@/views/admin/datamanager/student/list'),
                meta: {
                    title: '学生列表',
                    icon: 'dashboard',
                }
            },
            {
                path: 'studentedit/:id',
                name: 'studentedit',
                hidden: true,
                component: () =>
                    import ('@/views/admin/datamanager/student/edit'),
                meta: {
                    title: '学生编辑',
                    icon: 'dashboard',
                }
            },

            {
                path: 'parentedit/:id',
                name: 'parentedit',
                hidden: true,
                component: () =>
                    import ('@/views/admin/datamanager/student/parentedit'),
                meta: {
                    title: '家长编辑',
                    icon: 'dashboard',
                }
            },



            //		,
            //			{
            //				path: 'classesedit/:id',
            //
            //				component: () =>
            //					import('@/views/admin/datamanager/classes/edit'),
            //				name: 'classesedit',
            //				hidden: true,
            //				meta: {
            //					title: '班级编辑',
            //					//noCache: true,
            //					icon: 'example'
            //					//activeMenu: '/example/list'
            //				}
            //			}
        ]
    },
    {
        path: '/system',
        component: Layout,
        //redirect: '/datamanager/list',
        name: 'system',
        meta: {
            title: '系统设置',
            icon: 'example'
        },
        children: [

            {
                path: 'person',
                name: 'person',
                component: () =>
                    import ('@/views/admin/setting/person'),
                meta: {
                    title: '个人信息',
                    icon: 'dashboard',
                }
            },
            {
                path: 'motifypwd',
                name: 'motifypwd',
                component: () =>
                    import ('@/views/admin/setting/person'),
                meta: {
                    title: '修改密码',
                    icon: 'dashboard',
                }
            },

            {
                path: 'system',
                name: 'system',
                component: () =>
                    import ('@/views/admin/setting/system'),
                meta: {
                    title: '系统设置',
                    icon: 'dashboard',
                }
            },
        ]
    },

    //{
    //  path: '/form',
    //  component: Layout,
    //  children: [
    //    {
    //      path: 'index',
    //      name: 'Form',
    //      component: () => import('@/views/form/index'),
    //      meta: { title: 'Form', icon: 'form' }
    //    }
    //  ]
    //},

    //{
    //  path: '/nested',
    //  component: Layout,
    //  redirect: '/nested/menu1',
    //  name: 'Nested',
    //  meta: {
    //    title: 'Nested',
    //    icon: 'nested'
    //  },
    //  children: [
    //    {
    //      path: 'menu1',
    //      component: () => import('@/views/nested/menu1/index'), // Parent router-view
    //      name: 'Menu1',
    //      meta: { title: 'Menu1' },
    //      children: [
    //        {
    //          path: 'menu1-1',
    //          component: () => import('@/views/nested/menu1/menu1-1'),
    //          name: 'Menu1-1',
    //          meta: { title: 'Menu1-1' }
    //        },
    //        {
    //          path: 'menu1-2',
    //          component: () => import('@/views/nested/menu1/menu1-2'),
    //          name: 'Menu1-2',
    //          meta: { title: 'Menu1-2' },
    //          children: [
    //            {
    //              path: 'menu1-2-1',
    //              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //              name: 'Menu1-2-1',
    //              meta: { title: 'Menu1-2-1' }
    //            },
    //            {
    //              path: 'menu1-2-2',
    //              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
    //              name: 'Menu1-2-2',
    //              meta: { title: 'Menu1-2-2' }
    //            }
    //          ]
    //        },
    //        {
    //          path: 'menu1-3',
    //          component: () => import('@/views/nested/menu1/menu1-3'),
    //          name: 'Menu1-3',
    //          meta: { title: 'Menu1-3' }
    //        }
    //      ]
    //    },
    //    {
    //      path: 'menu2',
    //      component: () => import('@/views/nested/menu2/index'),
    //      meta: { title: 'menu2' }
    //    }
    //  ]
    //},

    {
        path: '/pad',
        component: () =>
            import ('@/layout/pad/login'),
        redirect: '/pad/home',
        // redirect: '/pad/login1',
        meta: {
            title: 'PAD',
            icon: 'example'
        },
    },
    {
        path: '/padIndex',
        name: 'padIndex',
        component: () =>
            import ('@/views/pad/index'),
        redirect: '/padIndex/login',
        // redirect: '/pad/login1',
        meta: {
            title: 'PAD',
            icon: 'example'
        },
        children: [{
                path: 'login',
                name: 'login',
                component: () =>
                    import ('@/layout/pad/login'),
                meta: {
                    title: 'pad登录页面',
                    icon: 'dashboard',
                }
            }, {
                path: 'page',
                name: 'page',
                component: () =>
                    import ('../views/pad/main/index'),
                redirect: '/padIndex/page/classlist',
                meta: {
                    title: 'pad',
                    icon: 'dashboard',
                },
                children: [{
                    path: 'classlist',
                    name: 'classlist',
                    component: () =>
                        import ('../views/pad/classlist/index.vue'),
                    meta: {
                        title: '教室首页',
                        icon: 'dashboard',
                    },
                }, {
                    path: 'talkback',
                    name: 'talkback',
                    component: () =>
                        import ('../views/pad/talkback/index.vue'),
                    meta: {
                        title: '对讲',
                        icon: 'dashboard',
                    },
                }, {
                    path: 'policework',
                    name: 'policework',
                    component: () =>
                        import ('../views/pad/policework/index.vue'),
                    meta: {
                        title: '警务',
                        icon: 'dashboard',
                    },
                }, {
                    path: 'classdetails/:id',
                    name: 'classdetails',
                    component: () =>
                        import ('../views/pad/classlist/classdetails.vue'),
                    meta: {
                        title: '警务',
                        icon: 'dashboard',
                    },
                }]
            },
            {
                path: 'classroommain',
                name: 'classroommain',
                component: () =>
                    import ('@/views/pad/classroomlist'),
                meta: {
                    title: '教室首页',
                    icon: 'dashboard',
                }
            },

            {
                path: 'infirmarymain',
                name: 'infirmarymain',
                component: () =>
                    import ('@/views/pad/classroomlist'),
                meta: {
                    title: '医务室首页',
                    icon: 'dashboard',
                }
            },
            {
                path: 'studentlist',
                name: 'studentlist',
                hidden: true,
                component: () =>
                    import ('@/views/pad/studentlist'),
                meta: {
                    title: '学生列表',
                    icon: 'dashboard',
                }
            },

            {
                path: 'infirmarydedail/:id',
                name: 'infirmarydedail',
                hidden: true,
                component: () =>
                    import ('@/views/pad/infirmarydedail'),
                meta: {
                    title: '医务',
                    icon: 'dashboard',
                }
            },
            {
                path: 'infirmarylist',
                name: 'infirmarylist',
                hidden: true,
                component: () =>
                    import ('@/views/pad/infirmarylist'),
                meta: {
                    title: '医务列表',
                    icon: 'dashboard',
                }
            },
            {
                path: 'infirmarywork',
                name: 'infirmarywork',
                hidden: true,
                component: () =>
                    import ('@/views/pad/infirmarywork'),
                meta: {
                    title: '学生喂药',
                    icon: 'dashboard',
                }
            },

            {
                path: 'tel',
                name: 'tel',
                hidden: true,
                component: () =>
                    import ('@/views/pad/tel'),
                meta: {
                    title: '通话',
                    icon: 'dashboard',
                }
            },

            {
                path: 'alarm',
                name: 'alarm',
                hidden: true,
                component: () =>
                    import ('@/views/pad/alarm'),
                meta: {
                    title: '报警',
                    icon: 'dashboard',
                }
            },

        ]
    },
    {
        path: '/wx',
        component: Layout,
        //redirect: '/pad/list',
        name: 'wx',
        meta: {
            title: '小程序',
            icon: 'example'
        },
        children: [{
                path: 'parentmain',
                name: 'parentmain',
                component: () =>
                    import ('@/views/pad/classroomlist'),
                meta: {
                    title: '家长首页',
                    icon: 'dashboard',
                }
            },
            {
                path: 'infirmarymain',
                name: 'infirmarymain',
                component: () =>
                    import ('@/views/pad/classroomlist'),
                meta: {
                    title: '园长首页',
                    icon: 'dashboard',
                }
            },
            {
                path: 'teachermain',
                name: 'teachermain',
                component: () =>
                    import ('@/views/pad/classroomlist'),
                meta: {
                    title: '老师首页',
                    icon: 'dashboard',
                }
            }

        ]
    },

    //	{
    //		path: '/upload',
    //		component: Layout,
    //		//  redirect: '/dashboard',
    //		children: [{
    //			path: 'upload',
    //			name: 'Upload',
    //			component: () =>
    //				import('@/views/admin/upload/index'),
    //			meta: {
    //				title: '上传测试',
    //				icon: 'dashboard',
    //			}
    //		}]
    //	},
    //	{
    //		path: '/ui',
    //		component: Layout,
    //		//redirect: '/dashboard',
    //		children: [{
    //			path: 'ui', //
    //			name: 'ui',
    //			component: () =>
    //				import('@/views/admin/ui/index'),
    //			meta: {
    //				title: 'UI测试',
    //				icon: 'dashboard',
    //			}
    //		}]
    //	},
    //
    //	{
    //		path: '/componets',
    //		component: Layout,
    //		children: [{
    //			path: 'componets',
    //			meta: {
    //				title: 'componets Link',
    //				icon: 'test'
    //			}
    //		}]
    //	},
    //	{
    //		path: 'external-link',
    //		component: Layout,
    //		children: [{
    //			path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //			meta: {
    //				title: 'External Link',
    //				icon: 'link'
    //			}
    //		}]
    //	},
    {
        path: '/',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    // 404 page must be placed at the end !!!
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router