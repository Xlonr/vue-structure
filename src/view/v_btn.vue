<template>
  <div>
    <div>you can click this!</div>
      <div class="col">
        <btn class="is_small" @click="showItem">按钮</btn>
        <btn class="is_per is_small" @click="showItem">按钮</btn>
        <btn class="is_warn" @click="showItem1">按钮</btn>
        <btn class="is_success" @click="showItem1">按钮</btn>
        <btn class="is_warn is_disabled" @click="showItem1">按钮</btn>
        <btn class="is_error is_larger" @click="showItem2">按钮</btn>
      </div>
      <div class="col">
        <btn class="is_small" type="fillet" @click="showItem">小型按钮</btn>
        <btn class="is_per is_small" type="fillet" @click="showItem">小型按钮</btn>
        <btn class="is_warn" type="fillet" @click="showItem1">默认按钮</btn>
        <btn class="is_success" type="fillet" @click="showItem1">默认按钮</btn>
        <btn class="is_warn is_disabled" type="fillet" @click="showItem1">默认按钮</btn>
        <btn class="is_error is_larger" type="fillet" @click="showItem2">大型按钮</btn>
      </div>
      <div class="col">
        <btn class="is_small" icon="icon-sousuo" @click="showItem">按钮</btn>
        <btn class="is_per is_small" icon="icon-sousuo" @click="showItem">按钮</btn>
        <btn class="is_warn" icon="icon-sousuo" @click="showItem1">按钮</btn>
        <btn class="is_success" icon="icon-sousuo" @click="showItem1">按钮</btn>
        <btn class="is_warn is_disabled" icon="icon-sousuo" @click="showItem1">按钮</btn>
        <btn class="is_error is_larger" icon="icon-sousuo" @click="showItem2">按钮</btn>
      </div>
      <div class="col">
        <btn icon="icon-sousuo" class="is_small" type="circle" @click="showItem"></btn>
        <btn icon="icon-dingdan" class="is_per is_small" type="circle" @click="showItem"></btn>
        <btn icon="icon-yunduanxiazai" class="is_warn" type="circle" @click="showItem1"></btn>
        <btn icon="icon-guangbo" class="is_success" type="circle" @click="showItem1"></btn>
        <btn icon="icon-changyonggoupiaorenshanchu" class="is_warn is_disabled" type="circle" @click="showItem1"></btn>
        <btn icon="icon-sousuo" class="is_error is_larger" type="circle" @click="showItem2"></btn>
      </div>
      <div class="col">
        <btn type="text" class="is_active">标题1</btn>
        <btn type="text">标题2</btn>
        <btn type="text">标题3</btn>
        <btn type="text">标题4</btn>
        <btn type="text">标题5<tip tipContent="提示内容"></tip></btn>
      </div>
    </div>
</template>

<script>
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      ...mapActions ([
      ]),
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
      }
    },
    created () {
    }
  }
</script>
