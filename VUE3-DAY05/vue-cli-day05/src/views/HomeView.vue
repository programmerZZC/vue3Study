<template>
  <div class="home">
    <h2>{{$store.state.count}}</h2>
    <!-- <button @click="$store.state.count++">count++</button> 不要这样更改store中的数据，因为vuex跟踪不到数据的变化 -->
    <button @click="addCount(5)">count++</button>
    <h2>{{$store.getters.reverseMsg}}</h2>
    <h2>{{$store.getters.reverseMsgLength}}</h2>
    <h2>{{count}}</h2>
    <h2>{{msg}}</h2>
    <h2>{{reverseMsg}}</h2>
    <h2>{{addNum}}</h2>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
// @ is an alias to /src
export default {
  name: 'HomeView',
  data(){
    return{
      num:10
    }
  },
  methods:{
    addCount(num){
      // this.$store.commit('increment',num) //使用store.commit方法改变state的状态
      this.increment(num)
    },
    ...mapMutations(['increment']),
    ...mapActions(['getHot'])
  },
  // computed:mapState({
  //   // count:state=>state.count
  //   count:"count"
  // }),
  // computed:mapState(['count','msg']),
  computed:{
    addNum:function(){
      return this.num*10
    },
    ...mapState(['count','msg']),
    ...mapGetters(['mapGetters'])
  },
  mounted(){
    // this.$store.dispatch('getHot','hhh');
    this.getHot()
    console.log(this.count);
    console.log(this.msg);
  }
}
</script>
