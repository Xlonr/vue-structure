<template>
    <div class="checkbox_group">
        <template v-if="isObjectData">
            <check-box v-for="(it, index) in value" :key="index" :iconColor="iconColor" :icon="icon" :_dfValue="it.value" v-model="it.checked">{{ it.text }}</check-box>
        </template>
        <template v-else>
            <check-box v-for="(it, index) in value" :key="index" :iconColor="iconColor" :icon="icon" :_dfValue="it" v-model="curValues[index]" v-bind="bindAttrs(curValues[index])">{{ it }}</check-box>
        </template>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'icon-xuanzhong'
    },
    iconColor: {
      type: String,
      default: '#fff'
    },
    value: {
      type: Array,
      default: () => {
        return ['复选框1', '复选框2', '复选框3']
      }
    },
    allChecked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    max: {
      type: String,
      default: '-1'
    }
  },
  computed: {
  },
  created () {
    this.checkBoxes = this.value
    if (typeof this.value[0] === 'object') {
      this.isObjectData = true
    } else {
      this.curValues = this.value.map((it) => {
        return this.allChecked
      })
    }
  },
  data () {
    return {
      isObjectData: false,
      checkBoxes: [],
      curValues: [],
      resultValues: []
    }
  },
  watch: {
    curValues (newVal, oldVal) {
      this.resultValues = []
      newVal.filter((it, index) => {
        if (it) {
          this.resultValues.push(this.checkBoxes[index])
        }
      })
      if (typeof this.max === 'number') {
        if (this.max > 0) {
          if (this.resultValues.length > +this.max) {
            return
          }
        } else {
          return
        }
      }
      //        console.log(this.resultValues)
      this.$emit('change', this.resultValues)
    },
    allChecked (newVal) {
      if (this.indeterminate) return
      const checkList = this.curValues.map((it) => {
        return newVal
      })
      this.curValues = checkList
      //        if (newVal) {
      //          this.$emit('change', this.checkBoxes)
      //        } else {
      //          this.$emit('change', [])
      //        }
    }
  },
  methods: {
    bindAttrs (res) {
      if (+this.max === -1) return
      if (this.resultValues.length === +this.max && !res) {
        return { is_disabled: true }
      }
    }
  }
}
</script>
