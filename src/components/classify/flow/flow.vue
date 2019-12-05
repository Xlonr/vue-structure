<template>
  <div class="parent">
    <ul class="children">
      <li v-for="(item, index) in contentList" :key="index" class="child-item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

  @Component({})
export default class Flow extends Vue {
  contentList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
</script>
