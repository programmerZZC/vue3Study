import {createRouter,createWebHashHistory} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'
import News from '../views/News.vue'
import Parent from '../views/Parent.vue'
import Styleone from '../views/Styleone.vue'
import Styletwo from '../views/Styletwo.vue'
import Page from '../views/Page.vue'
import ShopTop from '../views/ShopTop.vue'
import ShopMain from '../views/ShopMain.vue'
import ShopFoot from '../views/ShopFoot.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // 动态路由
  { path: '/user/:id', component: User },
  // 动态路由的参数一定是数字
  { 
    // 动态路由参数为数字
    // path: '/news/:id(\\d+)', 
    // component: News 
    // 有多个参数
    // path: '/news/:id+', 
    // 参数可有可无 *参数可以重复叠加
    name:"news",
    path: '/news/:id*', 
    // 参数可有可无 ?但是参数不可以重复叠加
    path: '/news/:id?',
    component: News 
  },
  
  { 
    path: '/parent', 
    component: Parent,
    children:[
        {
            path:"styleone",
            component:Styleone
        },
        {
            path:"styletwo",
            component:Styletwo
        }
    ]
  },

  {
    path:"/page",
    component:Page
  },
  {
    path:"/shop",
    components:{
      default:ShopMain,
      // 它们与<router-view>上的name属性匹配
      ShopTop:ShopTop,
      ShopFoot:ShopFoot
    }
  },
    // 404页面
  // 使用正则的方式，匹配任意的
  { path: '/:path(.*)', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router