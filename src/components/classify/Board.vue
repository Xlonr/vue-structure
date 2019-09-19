<template>
  <div>
    <ul><li v-for="list in num">{{list}}</li></ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 10
    }
  }
}
</script>
