<template>
  <div>
    <span @click="nextComp">This is the second view.</span>
    <my-component v-model="msg"></my-component>
    <div class="imt"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 10,
      msg: '111222'
    }
  },
  methods: {
    nextComp () {
      console.log(this.msg)
    }
  }
}
</script>
