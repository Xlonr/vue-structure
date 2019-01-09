<template>
  <div>
    <div class="row">
      <check-box v-model="isChecked">复选框</check-box>
      <check-box v-model="isChecked" disabled>复选框(禁用)</check-box>
      <check-box disabled>未选中且禁用</check-box>
    </div>
    <div class="row">
      <check-box-group v-model="checkBoxList">复选框</check-box-group><br/>
      <div class="text_view"><span v-for="it in checkBoxList" v-if="it.checked">{{ it.value }}</span></div>
    </div>
    <div class="row">
      <check-box v-model="isAllChecked">复选框</check-box>
      <check-box-group v-model="checkTargetList" @change="selectedCheckBoxList">复选框</check-box-group><br/>
    </div>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        isChecked: true,
        isAllChecked: false,
        checkBoxList: [
          {text: '复选框1', checked: false, value: '复选框1'},
          {text: '复选框2', checked: true, value: '复选框2'},
          {text: '复选框3', checked: false, value: '复选框3'}
        ],
        checkTargetList: ['复选框1', '复选框2', '复选框3']
      }
    },
    computed: {
      ...mapState([
      ])
    },
    watch: {
      isChecked (newVal, oldVal) {
        console.log(newVal)
      }
    },
    methods: {
      ...mapActions ([
      ]),
      selectedCheckBoxList (val) {
        if (val.length === this.checkTargetList.length) {
          this.isAllChecked = true
        } else {
          this.isAllChecked = false
        }
      }
    },
    created () {
    }
  }
</script>
