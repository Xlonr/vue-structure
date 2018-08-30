<template>
    <div>
        <check-box v-for="(it, index) in checkBoxList" :key="index" :checkText="it" :iconColor="iconColor" :icon="icon" @checkValue="(val) => checkBoxValue(it, val)"></check-box>
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
        default: '#21fe8d'
      },
      checkBoxList: {
        type: Array,
        default: () => {
          return ['复选框1', '复选框2', '复选框3']
        }
      }
    },
    computed: {
    },
    beforeCreate () {
    },
    data () {
      return {
        checkedNum: 0,
        arrList: []
      }
    },
    methods: {
      checkBoxValue (it, val) {
        if (val) {
          this.arrList.push(it)
        } else {
          this.arrList = this.arrList.filter((v) => {
            if (v !== it) {
              return v
            }
          })
        }
        this.$emit('checkValue', this.arrList)
      }
    }
  }
</script>