<template>
  <div class="ms-form-item" :class="{'error':errorMsg?true:false}">
       <label class="label" :for="prop" v-if="label">{{label}}</label>
        <div class="ms-form-item__content">
            <slot></slot>
        </div> 
        <div v-if="errorMsg" class="errorMsg">{{errorMsg}}</div>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
    name:'msFormItem',
    props:{
        label: {
            type:String,
            default:''
        },
        prop:{
            type:String,
            default:''
        }
    },
    inject:['form'],
    data(){
        return {
            errorMsg:''
        }
    },
    methods:{
         inputHandle(){

         },
         blurHandle(){
            this.validate()
         },
         validate(){
            const  descriptor = {[this.prop] :this.form.rules[this.prop]}
            const validator = new Schema(descriptor);
            var model = {
                [this.prop]:this.form.model[this.prop]
            }
        validator.validate(model, { firstFields: true }, errors => {

        this. errorMsg = errors ? errors[0].message : '';

       
      })

         }

    }
}
</script>

<style lang="scss" scoped>
    .ms-form-item{
        margin-bottom: 20px;
        clear: both;
        .label{
            float: left;
        }
    }
    .error{
        border-color:red;
    }
    .errorMsg{
        color:red;
    }
</style>