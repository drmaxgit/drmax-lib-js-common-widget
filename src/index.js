//@flow
import logniWrapper, { initLogniIfNeeded } from './logging/logniWrapper'
import { DEFAULT_DATA_LAYER_NAME, PLACEHOLDER_IMAGE_URL, APOTHEKAS_API_URL } from './constants'

export default class CommonWidget {
  constructor (rootElementId, htmlTemplate, widgetType) {
    this.widgetType = widgetType
    this.apothekaApiUrl = APOTHEKAS_API_URL
    this.placeholderImageUrl = PLACEHOLDER_IMAGE_URL
    initLogniIfNeeded(this.widgetType)
    this.logniWrapper = new logniWrapper(this.widgetType)
    this.rootElement = this.getRootElement(rootElementId)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate(rootElementId)
  }

  setHtmlTemplate(rootElementId) {
    if (this.rootElement) {
      this.rootElement.innerHTML = this.htmlTemplate
      this.logniWrapper.debug(`Widget mounted on #${rootElementId} element.`, 1)
    }
  }

  getRootElement(rootElementId) {
    const rootElement = document.querySelector(`#${rootElementId}`)

    if (!rootElement) {
      const errorDetail = `Unable to find root #${rootElementId} element.`
      this.logniWrapper.error(errorDetail, 3)
    }

    return rootElement
  }

  static getDataLayerName() {
    return DEFAULT_DATA_LAYER_NAME
  }

  getLogniWrapper() {
    return this.logniWrapper
  }
}
