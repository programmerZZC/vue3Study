<template>
    <div>
        <Hello></Hello>    
        <button @click="message='你好'">改变message</button> 
        <h2>HomeView---{{obj.message}}</h2>
    </div>
</template>
<script>
import Hello from './Hello.vue'
export default {
    data(){
        return{
           message:"HelloWorld",
           obj:{
            message:"HelloWorld"
           }
        }
    },
    // provide:{message:"HelloWorld"},
    // 如果想去访问组件实例的属性
    provide(){
        return{
            // message:this.message
            obj:this.obj, //响应式对象的方式
            message:()=>this.message //函数返回响应式数据
        }
    },
    components:{
        Hello
    }
}
</script>