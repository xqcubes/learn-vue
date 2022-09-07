<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "msForm",
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
  },
  data(){
    return {
      filedList:[]
    }
  },
  provide(){
    return {
      form:this
    }
  },
  created(){
    this.$on('addFiled',this.addFiledHandle);
  },
  methods:{
    validate(callback){
     const all = this.filedList.map((item)=>{
       return  item.validate()
      })
      console.log(all);
      Promise.all(all).then(()=>{
        callback.call(this.form,true)
      }).catch(()=>{
        callback.call(this.form,false)
      })

    },
    addFiledHandle(v){
      this.filedList.push(v);
    }
  }

};
</script>

<style>
</style>