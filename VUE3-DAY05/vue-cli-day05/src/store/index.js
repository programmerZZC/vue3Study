import {createStore} from "vuex";
import axios from "axios";
// 创建store实例
const store = createStore({
    state(){ // 是存储的单一状态，是存储的基本数据
        return{
            count:0,
            msg:'helloworld',
            hotList:[]
        }
    },
    // 如果state的状态需要过滤或者其他的操作
    getters:{ // 可以认为是store中的计算属性
        reverseMsg:function(state){
            return state.msg.split('').reverse().join('')
        },
        reverseMsgLength:function(state,getters){ //getters表示当前store中的getters对象
            return getters.reverseMsg.length
        }
    },
    mutations:{ // 通过store,commit方法触发对应函数状态变更
        increment(state,value){ //state表示上面state返回的对象，value表示穿过来的参数
            state.count+=value
        },
        updateHotList:function(state,value){
            state.hotList=value
        }
    },
    actions:{
        getHot:function(context,payload){ //context:与store实例具有相同的属性和方法的对象
            // fetch('/path/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%9C%E8%8E%9E&ci=91&channelId=4').then((res)=>{
            //     console.log(res.json());
            //    console.log(context)
            // })
            axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%9C%E8%8E%9E&ci=91&channelId=4').then(res=>{
                console.log(res);
                console.log(context);
                context.commit('updateHotList',res.data.data.hot)
                console.log(context.state.hotList);
                console.log(payload);
            })

        }
    }
})
export default store