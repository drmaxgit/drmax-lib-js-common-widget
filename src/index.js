//@flow

export class CommonWidget {
  constructor (rootElement) {
    this.rootElement = this.getRootElement('common-widget')
    const htmlTemplate = '<div>This is Common Widget</div>'
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
