<template>
  <div>
    <btn o_class="tip-lib" @click.native.self="showTip">提示框</btn>
    <btn o_class="tip-lib1" @click.native.self="showTip1">提示框</btn>
    <btn o_class="tip-lib2" @click.native.self="showTip2">提示框</btn>
    <btn o_class="tip-lib3" @click.native.self="showTip3">提示框</btn>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    showTip (el) {
      this.$_popOver({
        popContent: '弹出提示内容',
        direction: 'is_top',
        autoClose: true,
        name: el.target,
        closable: false
      })
    },
    showTip1 (el) {
      this.$_popOver({
        popContent: '弹出提示内容',
        direction: 'is_right',
        autoClose: false,
        name: el.target,
        closable: true
      })
    },
    showTip2 (el) {
      this.$_popOver({
        popContent: '弹出提示内容',
        direction: 'is_bottom',
        autoClose: false,
        name: el.target,
        closable: true
      })
    },
    showTip3 (el) {
      this.$_popOver({
        popContent: '弹出提示内容',
        direction: 'is_left',
        autoClose: false,
        name: el.target,
        closable: false
      })
    }
  },
  created () {
  }
}
</script>
