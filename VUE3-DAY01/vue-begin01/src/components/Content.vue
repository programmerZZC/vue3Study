<template>
    <div>
        <!-- 父子组件的访问方式-->
        <!-- 父组件访问子组件：$refs:开发中常用 -->
        <!-- ref:用来给元素或者子组件注册引用信息 -->
        <!-- 子组件访问父组件：$parent 在开发中尽量少用,组件复用性很高-->
        <!-- 子组件访问根组件：$root -->
        <HelloWorld :mesage='msg' :list='list' ref='hello'></HelloWorld>
    </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
    data(){
        return{
            msg:"helloworld",
            list:[1,2,3,4],
            a:23
        }
    },
    methods:{
        
    },
    mounted(){
        // console.log(this.$refs);
    },
    components:{
        HelloWorld
    }
}
</script>