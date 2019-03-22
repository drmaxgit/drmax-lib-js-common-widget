//@flow

export default class CommonWidget {
  constructor (rootElement, htmlTemplate) {
    this.rootElement = this.getRootElement(rootElement)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate()
  }

  setHtmlTemplate() {
    if(this.rootElement) {
      this.rootElement.innerHTML = this.htmlTemplate
    }
  }

  getRootElement(rootElementId) {
    return document.querySelector(`#${rootElementId}`)
  }
}
