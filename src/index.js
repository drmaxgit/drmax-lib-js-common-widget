//@flow
import logniWrapper from './logging/logniWrapper'

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
      logniWrapper.debug(`${widgetType}: Widget mounted on #${rootElementId} element.`, 1)
    }
  }

  getRootElement(rootElementId) {
    const rootElement = document.querySelector(`#${rootElementId}`)

    if (!rootElement) {
      const errorDetail = `${widgetType}: Unable to find root #${rootElementId} element.`
      logniWrapper.error(errorDetail, 3)
    }

    return rootElement
  }
}
