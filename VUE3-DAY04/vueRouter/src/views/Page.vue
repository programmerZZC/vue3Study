<template>
    <div>
        <h2>Page页面sss</h2>
        <button @click="goPage">跳转页面</button>
    </div>
</template>
<script>
export default {
    methods:{
        goPage:function(){
        //     this.$router.push()
        // 通过传入对象
        //    this.$router.push({path:"/"})
        // }
        // 带参数
        // this.$router.push({path:"/user/123"})
        // this.$router.push({name:"news",params:{id:123}})
        // 带问号
        this.$router.push({path:"/about",query:{name:"zhangsan"}})
        // 替换当前位置
        // this.$router.replace({path:"/about",query:{name:"zhangsan"},replace:true})
        }
    }
}
</script>
