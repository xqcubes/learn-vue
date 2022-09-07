<template>
  <div class="home">
    <button @click="submitHandle">提交</button>
      <ms-form ref="form" :model="model" :rules="rules" class="form">
         <ms-form-item label="姓名" prop="name">
             <ms-input v-model="model.name" type="text"></ms-input>
         </ms-form-item>
         <ms-form-item label="年龄" prop="age">
             <ms-input v-model="model.age" type="text"></ms-input>
         </ms-form-item>
      </ms-form>
    
  </div>
</template>

<script>
// @ is an alias to /src
import msForm from '@/components/ms-form/ms-form.vue'
import msFormItem from '@/components/ms-form/ms-form-item.vue'
import msInput from '@/components/ms-input.vue'

export default {
  name: 'HomeView',
  components: {
    msForm,
    msFormItem,
    msInput
  },
  data(){
    return {
      model:{
        name:'22',
        age:''
      },
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          age:[
            {
              required: true,
              message: 'Please select Activity count',
              trigger: 'blur',
            },
          ]
      }
    }
  },
  methods:{
    submitHandle(){
      this.$refs.form.validate((val)=>{
          if(val){
            alert('校验通过')
          }else{
            alert('校验失败')
          }
      })
    }
  }
}
</script>
<style scoped>
  .form{
    width:400px;
    margin:0 auto;
  }
</style>