<template>
  <div class="home">

      <ms-form :model="model" :rules="rules" class="form">
         <ms-form-item label="姓名" prop="name">
             <ms-input v-model="model.name" type="text"></ms-input>
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
      },
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      }
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