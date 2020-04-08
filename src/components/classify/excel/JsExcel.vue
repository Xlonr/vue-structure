<template>
  <div id="vue-js-excel">
    <div class="other-btns">
      <btn class="is_small iconfont" icon="icon-shangchuan">上传</btn><btn class="is_small iconfont" icon="icon-download-fill" @click="downloadFile">下载</btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Spreadsheet from 'spreadsheet'
// import zhCN from 'spreadsheet/dist/locale/zh-cn'
import { mapActions } from 'vuex'

// Spreadsheet.locale('zh-cn', zhCN)

@Component({
  methods: {
    ...mapActions([
      'importFileToJson',
      'exportFileToExcel'
    ])
  }
})
export default class JsExcel extends Vue {
  _JsExcel = null
  options = {
    mode: 'edit', // edit | read
    showToolbar: true,
    showGrid: true,
    showContextmenu: true,
    view: {
      height: () => document.documentElement.clientHeight,
      width: () => document.documentElement.clientWidth
    },
    row: {
      len: 100,
      height: 25
    },
    col: {
      len: 26,
      width: 100,
      indexWidth: 60,
      minWidth: 60
    },
    style: {
      bgcolor: '#ffffff',
      align: 'left',
      valign: 'middle',
      textwrap: false,
      strike: false,
      underline: false,
      color: '#0a0a0a',
      font: {
        name: 'Helvetica',
        size: 10,
        bold: false,
        italic: false
      }
    }
  }

  // 选中某个单元格
  _CellSelected (cell, ri, ci) {
    // console.log(cell, ri, ci)
  }

  // 选中多个单元格
  _CellsSelected (cell, options) {
    // console.log(cell, options)
  }

  // 编辑单元格
  _CellEdit (text, ri, ci) {
    // console.log(text, ri, ci)
  }

  // 下载成Excel文件
  downloadFile () {
    this.exportFileToExcel({ jsonData: this._JsExcel.getData() })
  }

  created () {
  }

  mounted () {
    if (this.$el.parentElement) {
      const { width } = this.$el.parentElement.getBoundingClientRect()
      const _options = {
        view: {
          height: () => document.documentElement.clientHeight - 150,
          width: () => width
        }
      }
      this.options = { ...this.options, ..._options }
    }
    this._JsExcel = new Spreadsheet('#vue-js-excel', this.options)
      .loadData({})
      .change(data => {
        console.log(data, 2222)
      })
    this._JsExcel.validate()
    this._JsExcel.on('cell-selected', this._CellSelected)
    this._JsExcel.on('cells-selected', this._CellSelected)
    this._JsExcel.on('cell-edited', this._CellSelected)
  }
}
</script>
