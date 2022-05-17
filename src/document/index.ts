import yhbutton from "./yh-button"
 /**
 * 文档属性类型
 *
 * @export
 * @interface DocumentAttribute
 */
export interface DocumentAttribute {
  // 参数名称
  name: string
  // 说明
  description: string
  // 类型
  type: string
  // 可选值
  value: string
  // 默认值
  default: any
}
/**
 * 文档事件类型
 *
 * @export
 * @interface DocumentEvent
 */
 export interface DocumentEvent {
  // 事件名称
  name: string
  // 说明
  description: string
  // 参数
  parameter: string
}

/**
 * 文档方法类型
 *
 * @export
 * @interface DocumentMethod
 */
 export interface DocumentMethod {
  // 方法名称
  name: string
  // 说明
  description: string
  // 参数
  parameter: string
}

/**
 * 文档插槽类型
 *
 * @export
 * @interface DocumentSlot
 */
export interface DocumentSlot {
  // 插槽名称
  name: string
  // 说明
  description: string
}

/**
 * 文档范围方法类型
 *
 * @export
 * @interface DocumentScopedSlot
 */
 export type DocumentScopedSlot = DocumentSlot

 /**
  * 基础文档接口
  *
  * @export
  * @interface BaseDocument
  */
 export interface BaseDocument {
   attributes?: DocumentAttribute[]
   events?: DocumentEvent[]
   methods?: DocumentMethod[]
   scopedSlots?: DocumentScopedSlot[]
   slots?: DocumentSlot[]
 }

export default {
    'yh-button': yhbutton,
  }

