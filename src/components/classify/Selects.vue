<template>
    <div class="_select">
        <div class="text_area">
            <div class="_select_cont"
                 contenteditable="true"
                 @click="clickToggle"
                 @input="inputText"
                 @focus="keyCodeIdx"
                 v-text="dfCont">
            </div>
        </div>
        <div class="_option" v-if="isShow" @mouseleave="mouseToggle">
            <ul class="_option_list">
                <li class="_option_item" v-for="it in options" @click.self="getItem(it)">{{ it }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    dfCont: {
      type: String,
      default: ''
    },
    dataFun: {
      type: Function,
      default: () => {
        return () => {}
      }
    },
    isSearch: {
      type: Boolean,
      default: true
    },
    isClick: {
      type: Boolean,
      default: false
    },
    isInterface: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options () {
      if (this.isSearch && !this.isInterface) {
        const arr = []
        if (this.currentCont) {
          this.cont_list.map((it) => {
            const cx = it.match(this.currentCont.trim())
            if (cx) {
              arr.push(it)
            }
          })
          return arr
        } else {
          return this.cont_list
        }
      } else if (this.isSearch && this.isInterface) {
        return this.dataFun(this.currentCont)
      } else {
        return this.cont_list
      }
    }
  },
  beforeCreate () {
  },
  data () {
    return {
      cont_list: [
        '上海',
        '北京',
        '天津',
        '哈尔滨',
        '江苏'
      ],
      isShow: false,
      currentCont: ''
    }
  },
  methods: {
    getItem (ct) {
      this.$el.querySelector('._select_cont').innerText = ct
      this.isShow = false
      this.$emit('input', ct)
      //        this.$forceUpdate()
    },
    keyCodeIdx (v) {
      //        document.addEventListener('keydown', (e) => {
      //          if (e.keyCode === 13) {
      //            let dom = this.$el.querySelector('._select_cont')
      //            v.preventDefault()
      //            let cont = dom.innerHTML
      //            dom.innerHTML = cont.replace(/<br>/g, '')
      /// /            this.$el.querySelector('._select_cont').innerText = cont
      /// /            return false
      //            console.log(cont)
      //          }
      //        })
    },
    clickToggle () {
      if (this.isClick) {
        this.isShow = !this.isShow
      } else {
        this.isShow = true
      }
    },
    mouseToggle () {
      if (!this.isClick) {
        this.isShow = false
      }
    },
    inputText (val) {
      this.currentCont = val.target.innerText.trim()
      return val.target.innerText.trim()
    }
    //      inputCont (val) {
    //        this.currentCont = val.target.innerText
    //        console.log(val.target.innerText)
    //      }
  }
}
</script>
