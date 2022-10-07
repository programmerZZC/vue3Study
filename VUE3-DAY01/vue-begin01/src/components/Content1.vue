<template>
    <div>
        <h2>我是content1组件内容</h2>
        <div>
            <!-- 会在没有提供内容的的时候被渲染 -->
            <!-- <slot name="button"><button>默认按钮</button></slot>
            <slot name="input"></slot>
            <slot name="h2"></slot> -->
            <slot :list="list" :message="message"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'你好',
            list:[1,2,4,5,6]
        }
    }
}
</script>