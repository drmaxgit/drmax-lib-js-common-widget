//@flow
import { getMeta } from './helpers'
import logniWrapper, { initLogniIfNeeded } from './logging/logniWrapper'
import {
  PLACEHOLDER_IMAGE_URL,
  DRMAX_APOTHEKA_API_URL_PREFIX,
  DRMAX_ESHOP_API_URL,
  DRMAX_ESHOP_WEB_URL,
  DRMAX_CHECKOUT_WEB_URL,
  DRMAX_CHECKOUT_REFRESHDELAY,
  DRMAX_COMMON_DATALAYER_NAME,
  DRMAX_COMMON_COOKIE_DOMAIN,
  DRMAX_COMMON_COOKIE_MAXAGE,
  DRMAX_APOTHEKA_API_URL,
  DRMAX_APOTHEKA_WEB_URL,
  DRMAX_SEARCH_API_URL,
  DRMAX_SSO_WEB_URL,
  DRMAX_CMS_API_URL,
  DRMAX_MEDIA_WEB_URL,
  DRMAX_COMMON_WEB_URL,
} from './constants'

export default class CommonWidget {
  constructor (rootElementId, htmlTemplate, widgetType) {
    this.widgetType = widgetType
    initLogniIfNeeded(this.widgetType)
    this.logniWrapper = new logniWrapper(this.widgetType)
    this.rootElement = this.getRootElement(rootElementId)
    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate(rootElementId)
  }

  static getMetaConstants() {
    const apothekaApiUrl = getMeta('drmax-apotheka-api-url') || DRMAX_APOTHEKA_API_URL
    return {
      eshopApiUrl: getMeta('drmax-eshop-api-url') || DRMAX_ESHOP_API_URL,
      eshopWebUrl: getMeta('drmax-eshop-web-url') || DRMAX_ESHOP_WEB_URL,
      checkoutWebUrl: getMeta('drmax-checkout-web-url') || DRMAX_CHECKOUT_WEB_URL,
      checkoutRefreshDelay: getMeta('drmax-checkout-refreshdelay') || DRMAX_CHECKOUT_REFRESHDELAY,
      commonDatalayerName: getMeta('drmax-common-datalayer-name') || DRMAX_COMMON_DATALAYER_NAME,
      commonCookieDomain: getMeta('drmax-common-cookie-domain') || DRMAX_COMMON_COOKIE_DOMAIN,
      commonCookieMaxAge: getMeta('drmax-common-cookie-maxage') || DRMAX_COMMON_COOKIE_MAXAGE,
      apothekaApiUrl,
      apothekaWebUrl: getMeta('drmax-apotheka-web-url') || DRMAX_APOTHEKA_WEB_URL,
      searchApiUrl: getMeta('drmax-search-api-url') || DRMAX_SEARCH_API_URL,
      ssoWebUrl: getMeta('drmax-sso-web-url') || DRMAX_SSO_WEB_URL,
      cmsApiUrl: getMeta('drmax-cms-api-url') || DRMAX_CMS_API_URL,
      mediaWebUrl: getMeta('drmax-media-web-url') || DRMAX_MEDIA_WEB_URL,
      commonWebUrl: getMeta('drmax-common-web-url') || DRMAX_COMMON_WEB_URL,
      apothekaUrl: apothekaApiUrl + DRMAX_APOTHEKA_API_URL_PREFIX,
      placeholderImageUrl: `${DRMAX_MEDIA_WEB_URL}/media/catalog/product/placeholder/default/square_placeholder.png`,
    }
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

  unmount() {
    this.rootElement.innerHTML = ''
  }
}
