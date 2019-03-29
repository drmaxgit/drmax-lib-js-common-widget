// @flow
import logni from 'logni.js'

/**
 * Simple wrapper of logni.
 */
 class logniWrapper {
   static info(msg, level) {
     return window.logni.info(msg, level)
   }

   static warn(msg, level) {
     return window.logni.warn(msg, level)
   }

   static error(msg, level) {
     return window.logni.error(msg, level)
   }

   static fatal(msg, level) {
     return window.logni.fatal(msg, level)
   }

   static debug(msg, level) {
     return window.logni.debug(msg, level)
   }
 }

/**
 * Initializes Logni in case it has not been initialized in index.html.
 *
 * In normal case, Logni is loaded as remote script in index.html and
 * initialized there. In case that fails, we use compiled version that is initialized here.
 */
export const initLogniIfNeeded = () => {
  if (!window.logni) {
    logni.mask(window.logniMask)
    logni.file(window.logniLogUrl)
    logni.stderr(window.logniStdErr)
    logni.release(window.logniRelease)
    logni.enviroment(window.logniEnvironment)
    logni.name(window.logniName)

    window.logni = logni

    logniWrapper.warn('No Logni found. Using compiled version.', 3)
  }
}

export default logniWrapper
