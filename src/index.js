//@flow
import logniWrapper, { initLogniIfNeeded } from './logging/logniWrapper'
import {
  DRMAX_COMMON_DATALAYER_NAME,
  PLACEHOLDER_IMAGE_URL,
  DRMAX_APOTHEKA_URL,
  DRMAX_ESHOP_WEB_URL,
  DRMAX_CHECKOUT_WEB_URL,
} from './constants'

export default class CommonWidget {
  constructor (rootElementId, htmlTemplate, widgetType) {
    this.widgetType = widgetType
    this.apothekaUrl = DRMAX_APOTHEKA_URL
    this.eshopWebUrl = DRMAX_ESHOP_WEB_URL
    this.checkoutWebUrl = DRMAX_CHECKOUT_WEB_URL
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
    return DRMAX_COMMON_DATALAYER_NAME
  }

  getLogniWrapper() {
    return this.logniWrapper
  }
}
