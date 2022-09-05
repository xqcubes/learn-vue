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
  provide(){
    return {
      form:this
    }
  },

};
</script>

<style>
</style>