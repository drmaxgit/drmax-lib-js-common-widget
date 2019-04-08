import { getMeta } from './helpers'

// DEFAULT CONSTANTS
export const DEFAULT_DRMAX_ESHOP_API_URL = 'https://api-eshop.drmax.cz'
export const DEFAULT_DRMAX_ESHOP_WEB_URL = 'https://www.drmax.cz'
export const DEFAULT_DRMAX_CHECKOUT_WEB_URL = 'https://kosik.drmax.cz'
export const DEFAULT_DRMAX_CHECKOUT_REFRESHDELAY = 30
export const DEFAULT_DRMAX_COMMON_DATALAYER_NAME = 'dataLayerDrmax'
export const DEFAULT_DRMAX_COMMON_COOKIE_DOMAIN = '.drmax.cz'
export const DEFAULT_DRMAX_COMMON_COOKIE_MAXAGE = 2592000
export const DEFAULT_DRMAX_APOTHEKA_API_URL = 'https://api-apotheka.drmax.cz'
export const DEFAULT_DRMAX_APOTHEKA_WEB_URL = 'https://lekarny.drmax.cz'
export const DEFAULT_DRMAX_SEARCH_API_URL = 'https://api-algolia.drmax.cz'
export const DEFAULT_DRMAX_SSO_WEB_URL = 'https://sso.drmax.cz -> SSO web'
export const DEFAULT_DRMAX_CMS_API_URL = 'https://www.drmax.cz'
export const DEFAULT_DRMAX_MEDIA_WEB_URL = 'https://media-eshop.drmax.cz'
export const DEFAULT_DRMAX_COMMON_WEB_URL = 'https://live-common.drmax.cz'

// META CONFIG (FROM OUTSIDE)
export const DRMAX_ESHOP_API_URL = getMeta('drmax-eshop-api-url') || DEFAULT_DRMAX_ESHOP_API_URL
export const DRMAX_ESHOP_WEB_URL = getMeta('drmax-eshop-web-url') || DEFAULT_DRMAX_ESHOP_WEB_URL
export const DRMAX_CHECKOUT_WEB_URL = getMeta('drmax-checkout-web-url') || DEFAULT_DRMAX_CHECKOUT_WEB_URL
export const DRMAX_CHECKOUT_REFRESHDELAY = getMeta('drmax-checkout-refreshdelay') || DEFAULT_DRMAX_CHECKOUT_REFRESHDELAY
export const DRMAX_COMMON_DATALAYER_NAME = getMeta('drmax-common-datalayer-name') || DEFAULT_DRMAX_COMMON_DATALAYER_NAME
export const DRMAX_COMMON_COOKIE_DOMAIN = getMeta('drmax-common-cookie-domain') || DEFAULT_DRMAX_COMMON_COOKIE_DOMAIN
export const DRMAX_COMMON_COOKIE_MAXAGE = getMeta('drmax-common-cookie-maxage') || DEFAULT_DRMAX_COMMON_COOKIE_MAXAGE
export const DRMAX_APOTHEKA_API_URL = getMeta('drmax-apotheka-api-url') || DEFAULT_DRMAX_APOTHEKA_API_URL
export const DRMAX_APOTHEKA_WEB_URL = getMeta('drmax-apotheka-web-url') || DEFAULT_DRMAX_APOTHEKA_WEB_URL
export const DRMAX_SEARCH_API_URL = getMeta('drmax-search-api-url') || DEFAULT_DRMAX_SEARCH_API_URL
export const DRMAX_SSO_WEB_URL = getMeta('drmax-sso-web-url') || DEFAULT_DRMAX_SSO_WEB_URL
export const DRMAX_CMS_API_URL = getMeta('drmax-cms-api-url') || DEFAULT_DRMAX_CMS_API_URL
export const DRMAX_MEDIA_WEB_URL = getMeta('drmax-media-web-url') || DEFAULT_DRMAX_MEDIA_WEB_URL
export const DRMAX_COMMON_WEB_URL = getMeta('drmax-common-web-url') || DEFAULT_DRMAX_COMMON_WEB_URL

// APOTHEKA
export const DRMAX_APOTHEKA_API_URL_PREFIX = '/api/v1/pharmacy'
export const DRMAX_APOTHEKA_URL = DRMAX_APOTHEKA_API_URL + DRMAX_APOTHEKA_API_URL_PREFIX

// PLACEHOLDER IMAGE
export const PLACEHOLDER_IMAGE_URL = `${DRMAX_MEDIA_WEB_URL}/media/catalog/product/placeholder/default/square_placeholder.png`

// LOGNI
export const LOGNI_MASK = 'I3E1C1W2'
export const LOGNI_LOG_URL = 'https://develop-jslog.logni.net'
export const LOGNI_STD_ERR = '0'
export const LOGNI_RELEASE = '1.0'
export const LOGNI_ENVIROMENT = 'develop'
export const LOGNI_NAME = 'drmax-widget'
