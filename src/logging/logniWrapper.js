// @flow
import logni from 'logni.js'

/**
 * Simple wrapper of logni.
 */
class logniWrapper {
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
      return `${this.id}: ${msg}`
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
    return window.logni.fatal(this.addIdToMsg(msg), level)
  }

  debug(msg, level) {
    return window.logni.debug(this.addIdToMsg(msg), level)
  }
}

/**
 * Initializes Logni in case it has not been initialized in index.html.
 *
 * In normal case, Logni is loaded as remote script in index.html and
 * initialized there. In case that fails, we use compiled version that is initialized here.
 */
export const initLogniIfNeeded = (widgetType) => {
  const logniWrapperObject = new logniWrapper(widgetType)
  if (!window.logni) {
    logni.mask(window.logniMask)
    logni.file(window.logniLogUrl)
    logni.stderr(window.logniStdErr)
    logni.release(window.logniRelease)
    logni.enviroment(window.logniEnvironment)
    logni.name(window.logniName)

    window.logni = logni

    logniWrapperObject.warn('No Logni found. Using compiled version.', 3)
  }
}

export default logniWrapper
