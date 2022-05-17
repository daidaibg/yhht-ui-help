import { DocumentEvent,DocumentSlot } from '@/document'

const attributes = [
  {
    name: 'block',
    description: '是否为块级元素',
    type: 'Boolean',
    value: '- ',
    default: 'false'
  },
  {
    name: 'shape',
    description: '按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形可选项：rectangle/square/round/circle 正方形暂不支持使用',
    type: 'string',
    value: 'rectangle / square / round / circle',
    default: 'rectangle'
  },
  {
    name: 'size',
    description: '组件尺寸',
    type: 'string',
    value: 'small/medium/large',
    default: 'medium'
  },
  {
    name: 'loading',
    description: '是否加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },

  {
    name: 'theme',
    description: '组件风格，依次为默认色、品牌色、危险色、警告色、成功色。',
    type: 'string',
    value: 'default/primary/danger/warning/success',
    default: 'default'
  },
  {
    name: 'variant',
    description: '按钮形式，基础、线框、虚线、文字',
    type: 'string',
    value: 'base/outline/dashed/text',
    default: 'base'
  }
]

export const events: DocumentEvent[] = [
  { name: 'click', description: '点击事件', parameter: '—' },

]

export const slots: DocumentSlot[] = [
  { name: '—', description: '默认' },
]

export const document = { attributes,events,slots }

export default document


