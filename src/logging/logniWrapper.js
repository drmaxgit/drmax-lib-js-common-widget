// @flow
import logni from 'logni.js'
import {
  LOGNI_NAME,
  LOGNI_MASK,
  LOGNI_RELEASE,
  LOGNI_STDERR,
  LOGNI_LOG_URL,
  LOGNI_ENVIROMENT,
} from '../constants'

/**
 * Simple wrapper of logni.
 */
class LogniWrapper {
  constructor(id) {
    this.id = id
  }

  /**
  * Prepends id in front of a message.
  *
  * @param msg
  * @returns {string}
  */
  addIdToMsg(msg) {
    if (this.id) {
      return `[${this.id}] ${msg}`
    }
    return `${msg}`
  }

  info(msg, level) {
    return window.logni.info(this.addIdToMsg(msg), level)
  }

  warn(msg, level) {
    return window.logni.warn(this.addIdToMsg(msg), level)
  }

  error(msg, level) {
    return window.logni.error(this.addIdToMsg(msg), level)
  }

  fatal(msg, level) {
    return window.logni.critical(this.addIdToMsg(msg), level)
  }

  critical(msg, level) {
    return window.logni.critical(this.addIdToMsg(msg), level)
  }

  debug(msg, level) {
    return window.logni.debug(this.addIdToMsg(msg), level)
  }
}

/**
 * Init logni if needed
 *
 * Initializes Logni in case it has not been initialized in index.html.
 *
 * In normal case, Logni is loaded as remote script in index.html and
 * initialized there. In case that fails, we use compiled version that is initialized here.
 *
 * @param widgetType
 */
export const initLogniIfNeeded = (widgetType) => {
  const logniWrapperObject = new LogniWrapper(widgetType)
  if (!window.logni) {
    logni.mask(LOGNI_MASK)
    logni.file(LOGNI_LOG_URL)
    logni.stderr(LOGNI_STDERR)
    logni.release(LOGNI_RELEASE)
    logni.enviroment(LOGNI_ENVIROMENT)
    logni.name(LOGNI_NAME)

    window.logni = logni

    logniWrapperObject.warn('No Logni found. Using compiled version.', 3)
  }
}

export default LogniWrapper
