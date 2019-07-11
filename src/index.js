//@flow
import { getMeta } from './helpers'
import LogniWrapper, { initLogniIfNeeded } from './logging/logniWrapper'
import {
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
  DRMAX_MEGAMENU_WIDGET_URL,
  DRMAX_APOTHEKA_WIDGET_URL,
  PHARMACY_ID_COOKIE_NAME,
  DRMAX_COMMON_COOKIE_PREFIX,
} from './constants'

export default class CommonWidget {
  constructor (rootElementId, htmlTemplate, widgetType) {
    this.widgetType = widgetType
    initLogniIfNeeded(this.widgetType)
    this.logniWrapper = new LogniWrapper(this.widgetType)

    if (rootElementId) {
      this.rootElement = this.getRootElement(rootElementId)
    }

    this.htmlTemplate = htmlTemplate
    this.setHtmlTemplate(rootElementId)
  }

  static getMetaConstants() {
    const drmaxApothekaApiUrl = getMeta('drmax-apotheka-api-url') || DRMAX_APOTHEKA_API_URL
    const drmaxCommonCookiePrefix = getMeta('drmax-common-env-url') || DRMAX_COMMON_COOKIE_PREFIX

    return {
      drmaxEshopApiUrl: getMeta('drmax-eshop-api-url') || DRMAX_ESHOP_API_URL,
      drmaxEshopWebUrl: getMeta('drmax-eshop-web-url') || DRMAX_ESHOP_WEB_URL,
      drmaxCheckoutWebUrl: getMeta('drmax-checkout-web-url') || DRMAX_CHECKOUT_WEB_URL,
      drmaxCheckoutRefreshDelay: getMeta('drmax-checkout-refreshdelay') || DRMAX_CHECKOUT_REFRESHDELAY,
      drmaxCommonDatalayerName: getMeta('drmax-common-datalayer-name') || DRMAX_COMMON_DATALAYER_NAME,
      drmaxCommonCookieDomain: getMeta('drmax-common-cookie-domain') || DRMAX_COMMON_COOKIE_DOMAIN,
      drmaxCommonCookieMaxAge: getMeta('drmax-common-cookie-maxage') || DRMAX_COMMON_COOKIE_MAXAGE,
      drmaxCommonCookiePrefix,
      drmaxApothekaApiUrl,
      drmaxApothekaWebUrl: getMeta('drmax-apotheka-web-url') || DRMAX_APOTHEKA_WEB_URL,
      drmaxSearchApiUrl: getMeta('drmax-search-api-url') || DRMAX_SEARCH_API_URL,
      drmaxSsoWebUrl: getMeta('drmax-sso-web-url') || DRMAX_SSO_WEB_URL,
      drmaxCmsApiUrl: getMeta('drmax-cms-api-url') || DRMAX_CMS_API_URL,
      drmaxMediaWebUrl: getMeta('drmax-media-web-url') || DRMAX_MEDIA_WEB_URL,
      drmaxCommonWebUrl: getMeta('drmax-common-web-url') || DRMAX_COMMON_WEB_URL,
      drmaxApothekaUrl: drmaxApothekaApiUrl + DRMAX_APOTHEKA_API_URL_PREFIX,
      drmaxPlaceholderImageUrl: `${DRMAX_MEDIA_WEB_URL}/media/catalog/product/placeholder/default/150x150/square_placeholder.png`,
      drmaxMegamenuWidgetUrl: getMeta('drmax-megamenu-widget-url') || DRMAX_MEGAMENU_WIDGET_URL,
      drmaxApothekaWidgetUrl: getMeta('drmax-apotheka-widget-url') || DRMAX_APOTHEKA_WIDGET_URL,
      drmaxPharmacyIdCookieName: drmaxCommonCookiePrefix + PHARMACY_ID_COOKIE_NAME,
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
