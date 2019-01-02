### 全局方法（气泡提示） $_popOver
#### direction（方向）
&emsp;is_top:      气泡向上
&emsp;is_right:    气泡向右
&emsp;is_bottom:   气泡向下
&emsp;is_left:     气泡向左

### code
<table class="_table"><tr><td bgcolor=#DCDCDC>

```
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
          autoClose: false,
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
```
</td></tr></table>