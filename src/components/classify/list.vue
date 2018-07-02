<template>
  <div class="view_cont">
    <div>you can click this!</div>
    <div class="col">
      <btn btnText="按钮" o_class="is_per is_small" @click="showItem"></btn>
      <btn btnText="按钮" o_class="is_warn" @click="showItem1"></btn>
      <btn btnText="按钮" o_class="is_warn is_disabled" @click="showItem1"></btn>
      <btn btnText="按钮" o_class="is_error is_larger" @click="showItem2"></btn>
    </div>
    <div class="col">
      <btn o_class="tip-lib" btnText="提示框" @click.native.self="showTip"></btn>
      <btn o_class="tip-lib1" btnText="提示框" @click.native.self="showTip1"></btn>
      <btn o_class="tip-lib2" btnText="提示框" @click.native.self="showTip2"></btn>
      <btn o_class="tip-lib3" btnText="提示框" @click.native.self="showTip3"></btn>
    </div>
    <div class="col">Some input</div>
    <div class="col">
      <x_input input_text="输入内容..." input_title="标题" :disabled="true"></x_input>
      <x_input class="edge" input_text="输入内容..." input_title="标题" title_direct="right"></x_input>
    </div>
    <div class="col">... select</div>
    <div class="row">
      <selects :dfCont="dfCont" @input="changeValue"></selects>
      <selects :dfCont="dfCont" @input="changeValue" :isClick="true"></selects>
    </div>
  </div>
</template>

<script>
//  import Board from './classify/board.vue'
  export default {
    data () {
      return {
        msg: 'this is a message!',
        itemType: false,
        dfCont: '地点'
      }
    },
    methods: {
      showItem () {
        this._confirm({
          content: '内容',
          placement: 'center',
          title: 'Title'
        })
      },
      showItem1 () {
        this._confirm({
          content: '内容1',
          placement: 'center'
        })
      },
      showItem2 () {
        this._confirm({
          content: '内容2',
          placement: 'center'
        })
      },
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
      },
      changeValue (val) {
        this.dfCont = val
        console.log(this.dfCont)
      }
    }
  }
</script>