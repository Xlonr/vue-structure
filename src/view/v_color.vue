<template>
  <div>
    <color-selector alpha event="hover" v-model="colorValue">
      <btn slot="contain" class="is_per is_small" type="fillet" icon="icon-jiantouxia">颜色选择</btn>
    </color-selector>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      colorValue: ''
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapActions([
    ])
  },
  created () {
  },
  watch: {
    colorValue (newVal) {
      console.log(newVal)
    }
  }
}
</script>
