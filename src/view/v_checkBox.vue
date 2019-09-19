<template>
  <div>
    <div class="row">
      <check-box v-model="isChecked">复选框</check-box>
      <check-box v-model="isChecked" disabled>复选框(禁用)</check-box>
      <check-box disabled>未选中且禁用</check-box>
    </div>
    <div class="row">
      <div>没有做限制的复选框组</div>
      <check-box-group v-model="checkBoxList">复选框</check-box-group><br/>
      <div class="text_view"><span v-for="it in checkBoxList" v-if="it.checked">{{ it.value }}</span></div>
    </div>
    <div class="row">
      <div>是否全选</div>
      <check-box :indeterminate="indeterminate" text_color="#4683ff" v-model="isAllChecked" @click.native="changeCurrentCheckType">复选框</check-box>
      <check-box-group :indeterminate="indeterminate" :allChecked="isAllChecked" v-model="checkTargetList" @change="selectedCheckBoxList">复选框</check-box-group><br/>
    </div>
    <div class="row">
      <div>限制可选个数</div>
      <check-box-group max="2" v-model="checkTargetList1">复选框</check-box-group><br/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      isChecked: true,
      isAllChecked: true,
      indeterminate: false,
      checkBoxList: [
        { text: '复选框1', checked: false, value: '复选框1' },
        { text: '复选框2', checked: true, value: '复选框2' },
        { text: '复选框3', checked: true, value: '复选框3' }
      ],
      checkTargetList: ['复选框1', '复选框2', '复选框3'],
      checkTargetList1: ['复选框1', '复选框2', '复选框3']
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
    ...mapActions([
    ]),
    selectedCheckBoxList (val) {
      if (val.length === this.checkTargetList.length) {
        this.isAllChecked = true
        this.indeterminate = false
      } else {
        if (val.length > 0) {
          this.indeterminate = true
        } else {
          this.indeterminate = false
        }
        this.isAllChecked = false
      }
    },
    changeCurrentCheckType () {
      this.indeterminate = false
    }
  },
  created () {
  }
}
</script>
