<template>
    <div>
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