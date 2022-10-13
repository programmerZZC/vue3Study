<template>
    <div>
        <h2>shop头部</h2>
    </div>
</template>
<script>
export default {
    props:['id'],
    mounted(){
        console.log(this.id);
    }
}
</script>