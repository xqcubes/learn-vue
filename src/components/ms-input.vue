<template>
  <div class="ms-input">
    <input v-bind="$attrs" :value="value" @input="inputHandle" @blur="blurHandle"/>
  </div>
</template>

<script>
import {broadcast} from '@/utils/index'
export default {
    name:'msInput',
    inheritAttrs:false,
    props:{
       value:{
         type:String,
         default:''
       }
    },
    data(){
        return{

        }
    },
    methods:{
       inputHandle(v){
            this.$emit('input',v.target.value)
            broadcast(this,'msFormItem')&&broadcast(this,'msFormItem').inputHandle()
        },
        blurHandle(){
           
            broadcast(this,'msFormItem')&&broadcast(this,'msFormItem').blurHandle()
        }
    }
}
</script>

<style>

</style>