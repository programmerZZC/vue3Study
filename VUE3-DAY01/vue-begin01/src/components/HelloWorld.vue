<template>
  <div>
    hello
    <h2>{{mesage}}</h2>
    <!-- <h2>{{list}}</h2> -->
  </div>
</template>
<script>
export default {
  // props:['mesage']字符串数组
  props:{ //对象
    // 1.类型的限制
    // message:String
    // 2.除了类型限制，还可以限制默认值，必传值
    mesage:{
      type:String,
      default:"你好",
      required:true
    },
    list:{ //对象或数组的默认值必须从一个工厂函数返回
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted(){
    console.log(this.$parent);
    console.log(this.$root);
  }  

}
</script>
