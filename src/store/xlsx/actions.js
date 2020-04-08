/**
 * 导入与导出xlsx文件
 */

import xlsx from 'xlsx'

/**
 * 将Excel文件导入称json格式
 * @param {File} file
 * @returns {Promise<any>}
 */
export function importFileToJson (_, file) {
  return new Promise((resolve, reject) => {
    if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      reject(new Error('[文件格式不对]: 仅支持Excel文件格式'))
    }
    const fileReader = new FileReader()
    fileReader.onload = (f) => {
      const data = f.currentTarget.result
      const workbooks = xlsx.read(data, { type: 'binary' })
      const sheet = xlsx.utils.sheet_to_json(workbooks.Sheets[workbooks.SheetNames[0]])
      resolve(sheet)
    }
    fileReader.readAsBinaryString(file)
  })
}

/**
 * 导出表格数据
 * @param {Array<{[colName: string]: string}>} jsonData
 * @param {String} name
 * @returns {void}
 */
export function exportFileToExcel (_, { jsonData, name = 'default.xlsx' }) {
  console.log(Array.isArray(jsonData), 666)
  if (!Array.isArray(jsonData)) {
    console.error('数据格式错误：jsonData is not array')
    return
  }
  const workbooks = xlsx.utils.book_new()
  // 转换数据格式为Excel支持的
  jsonData.forEach(sheet => {
    console.log(sheet, 111)
    const aoa = [[]]
    const rows = sheet.rows
    for (let v = 0; v < rows.len; v++) {
      const rowContent = rows[v]
      if (!rowContent) continue
      aoa[v] = []
      Object.keys(rowContent.cells).forEach(index => {
        if (isNaN(+index)) return
        aoa[v][index] = rowContent.cells[index].text
      })
    }
    const ct = xlsx.utils.aoa_to_sheet(aoa)
    xlsx.utils.book_append_sheet(workbooks, ct, sheet.name)
  })
  xlsx.writeFile(workbooks, name)
}
