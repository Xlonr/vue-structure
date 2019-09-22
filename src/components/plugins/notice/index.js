import Notice from './Notice.vue'
function noticeComponent (propsData, Vue) {
  const NoticeComponent = Vue.extend(Notice)
  return new NoticeComponent({
    el: document.createElement('div'),
    propsData
  })
}
export const notices = {
  open (params, Vue) {
    const defaultParam = { direction: 'right', duration: 4500 }
    const propsData = Object.assign(defaultParam, params)
    return noticeComponent(propsData, Vue)
  },

  info (params, Vue) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'info' }
    const propsData = Object.assign(defaultParam, params)
    return noticeComponent(propsData, Vue)
  },

  warning (params, Vue) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'warning' }
    const propsData = Object.assign(defaultParam, params)
    return noticeComponent(propsData, Vue)
  },

  success (params, Vue) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'success' }
    const propsData = Object.assign(defaultParam, params)
    return noticeComponent(propsData, Vue)
  },

  danger (params, Vue) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'danger' }
    const propsData = Object.assign(defaultParam, params)
    return noticeComponent(propsData, Vue)
  },

  confirm (params, Vue) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'confirm' }
    const propsData = Object.assign(defaultParam, params)
    return noticeComponent(propsData, Vue)
  }
}
