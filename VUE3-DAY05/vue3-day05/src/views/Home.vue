<template>
    <div>
        {{store.state.msg}}
        <button @click="updateMsg">改变msg</button>
        <!-- <ul>
            <li v-for="item in bannersList" :key="item.targetId"><img src="item.imageUrl" alt=""></li>
        </ul> -->
        <ul>
            <li v-for="item in store.state.bannersList" :key="item.targetId"><img src="item.imageUrl" alt=""></li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    inject:['store'],
    data(){
        return{
            bannersList:[]
        }
    },
    // http://localhost:3001/banner
    // fetch:原生js，时http数据请求的一种方式
    created(){
        // fetch返回promise对象
        // fetch('http://localhost:3001/banner').then((res)=>{ // 默认执行get请求
        //     //json()将响应的body，解析成json的promise
        //     // console.log(res.json());
        //     return res.json()
        // }).then((res)=>{
        //     console.log(res);
        //     // this.bannersList=res.banners
        //     this.store.updateBannersList(res.banners)
        // })

        // axios：基于promise的http库
        // axios.get('http://localhost:3001/banner').then((res)=>{
        //     console.log(res);
        // })
        // 跨域请求数据，浏览器有同源策略的保护，通过proxy实现跨域请求数据
        axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%9C%E8%8E%9E&ci=91&channelId=4').then((res)=>{
            console.log(res);
        })
    },
    // axios
    methods:{
        updateMsg:function(){
            this.store.updateMsg()
        }
    }
}
</script>