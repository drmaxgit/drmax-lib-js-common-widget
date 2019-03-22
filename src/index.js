//@flow

export class CommonWidget {
  constructor (rootElement, htmlTemplate) {
    this.rootElement = this.getRootElement(rootElement)
    if(this.rootElement) {
      this.rootElement.innerHTML = htmlTemplate
    }
  }

  getRootElement(rootElementId) {
    return document.querySelector(`#${rootElementId}`)
  }
}

if ('undefined' !== typeof module) {
	module.exports = new CommonWidget();
}
