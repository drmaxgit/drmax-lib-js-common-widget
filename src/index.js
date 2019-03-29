//@flow
import logniWrapper from './logging/logniWrapper'
import { DEFAULT_DATA_LAYER_NAME } from './constants'

export default class CommonWidget {
  constructor (rootElementId, htmlTemplate, widgetType) {
    this.rootElement = this.getRootElement(rootElementId)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate(rootElementId)
    this.widgetType = widgetType
  }

  setHtmlTemplate(rootElementId) {
    if (this.rootElement) {
      this.rootElement.innerHTML = this.htmlTemplate
      logniWrapper.debug(`${this.widgetType}: Widget mounted on #${rootElementId} element.`, 1)
    }
  }

  getRootElement(rootElementId) {
    const rootElement = document.querySelector(`#${rootElementId}`)

    if (!rootElement) {
      const errorDetail = `${this.widgetType}: Unable to find root #${rootElementId} element.`
      logniWrapper.error(errorDetail, 3)
    }

    return rootElement
  }

  static getDataLayerName() {
    return DEFAULT_DATA_LAYER_NAME
  }

  static getLogniWrapper() {
    return logniWrapper
  }
}
