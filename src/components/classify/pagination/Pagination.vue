<template>
  <div class="pagination is_small">
    <component :is="changePageType" @changePaging="changePaging">
      <ul class="pagination-bg" slot="cont">
        <li v-for="v in page" :key="v.num" :class="['pagination-bg_num', {'active': v.num === currentNum, 'disabled': !v.allowPage}]" @click="v.allowPage && clickPageNumber(v.num)">{{v.num}}</li>
      </ul>
    </component>
  </div>
</template>

<script>
export default {
  props: {
    pageType: {
      type: String,
      default: 'btn'
    },
    pageNum: {
      type: Number,
      default: 10
    }
  },
  data () {
    const components = {
      default: 'page-arrow',
      btn: 'page-button'
    }
    return {
      page: [],
      currentNum: 1,
      pageComponent: components
    }
  },
  created () {
    this.page = Array.from({ length: this.pageNum }).map((v, index) => {
      return { num: index + 1, allowPage: index !== 4 }
    })
  },
  computed: {
    changePageType () {
      return this.pageComponent[this.pageType]
    }
  },
  methods: {
    clickPageNumber (num) {
      this.currentNum = num
    },
    changePaging (val) {
      const nums = []
      this.page.forEach(it => !it.allowPage && nums.push(it.num))
      const findNextNum = (num) => {
        if (val === 'prev') {
          num--
        } else if (val === 'next') {
          num++
        }
        if ((val === 'prev' && num < 1) || (val === 'next' && num > this.pageNum)) return
        if (nums.includes(num)) {
          findNextNum(num)
        } else {
          this.currentNum = num
        }
      }
      findNextNum(this.currentNum)
    }
  },
  watch: {
    currentNum (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('pageNum', this.currentNum)
        console.log(this.currentNum)
      }
    }
  }
}
</script>
