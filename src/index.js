//@flow
import logniWrapper from './logging/logniWrapper'

export default class CommonWidget {
  constructor (rootElementId, htmlTemplate) {
    this.rootElement = this.getRootElement(rootElementId)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate(rootElementId)
  }

  setHtmlTemplate(rootElementId) {
    if (this.rootElement) {
      this.rootElement.innerHTML = this.htmlTemplate
    } else {
      const errorDetail = `Unable to find root #${rootElementId} element.`
      logniWrapper.error(errorDetail, 3)
    }
  }

  getRootElement(rootElementId) {
    return document.querySelector(`#${rootElementId}`)
  }
}
