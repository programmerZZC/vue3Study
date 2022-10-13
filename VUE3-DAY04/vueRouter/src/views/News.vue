<template>
    <div>
        新闻
    </div>
</template>
<script>
export default {
    data(){
        return{
            age:16
        }
    },
    beforeRouteEnter(next){ //拿不到实例对象，通过next的回调函数
        next((vm)=>{
            console.log(vm.age);
        })
        console.log('路由组件进入之前');
    },
    beforeRouteUpdate(){
        console.log('路由更新组件之前');
    },
    beforeRouteLeave(){
        console.log('路由离开组件之前');
    }
}
</script>