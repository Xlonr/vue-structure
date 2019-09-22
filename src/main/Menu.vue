<template>
  <div class="menu">
    <span class="title">Components</span>
    <ul class="menu_list">
      <li :class="['menu_item', {'active': activeIndex === index}]" v-for="(it, index) in menuList" :key="index" @click="$router.push(it.path), activeIndex = index">{{ it.text }}</li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      menuList: [
        { text: '按钮 (Button)', path: '/vBtn' },
        { text: '复选框 (checkBox)', path: '/vCheckBox' },
        { text: '日历 (picker)', path: '/vPicker' },
        { text: '单选 (radio)', path: '/vRadio' },
        { text: '下拉框 (select)', path: '/vSelect' },
        { text: '输入框 (input)', path: '/vInput' },
        { text: '通知 (notice)', path: '/vNotice' },
        { text: '进度 (process)', path: '/vProcess' },
        { text: '时钟 (clock)', path: '/vClock' },
        { text: '圆环进度 (cirque)', path: '/vCirqueProcess' },
        { text: '颜色选择器 (color)', path: '/vColor' },
        { text: '分页（page）', path: '/vPage' }
      ],
      activeIndex: 0
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
  }
}
</script>
