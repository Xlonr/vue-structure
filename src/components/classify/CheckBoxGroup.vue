<template>
    <div>
        <template v-if="isObjectData">
            <check-box v-for="(it, index) in value" :key="index" :iconColor="iconColor" :icon="icon" :_dfValue="it.value" v-model="it.checked">{{ it.text }}</check-box>
        </template>
        <template v-else>
            <check-box v-for="(it, index) in value" :key="index" :iconColor="iconColor" :icon="icon" :_dfValue="it" v-model="curValues[index]">{{ it }}</check-box>
        </template>
        <!--<check-box v-for="(it, index) in value" :key="index" :iconColor="iconColor" :icon="icon" :_dfValue="it" v-model="curValues">{{ it.text }}</check-box>-->
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
          return false
        })
      }
    },
    data () {
      return {
        isObjectData: false,
        checkBoxes: [],
        curValues: []
      }
    },
    watch: {
      curValues (newVal, oldVal) {
        let val = []
        newVal.filter((it, index) => {
          if (it) {
            val.push(this.checkBoxes[index])
          }
        })
        this.$emit('change', val)
      }
    },
    methods: {
    }
  }
</script>