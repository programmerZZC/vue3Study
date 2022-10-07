<template>
    <div>用户</div>
</template>
<!-- <script>
export default {
    mounted(){
        // $route表示当前活跃的路由对象
        console.log(this.$route.params.id);
    }
}
</script> -->
<script setup>
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id);
</script>
