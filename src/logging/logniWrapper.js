// @flow
import logni from 'logni.js'

/**
 * Simple wrapper of logni.
 */
const logniWrapper = {
  info: (msg: string, level: number) => {
    window.logni.info(msg, level)
  },
  warn: (msg: string, level: number) => {
    window.logni.warn(msg, level)
  },
  error: (msg: string, level: number) => {
    window.logni.error(msg, level)
  },
  fatal: (msg: string, level: number) => {
    window.logni.fatal(msg, level)
  },
  debug: (msg: string, level: number) => {
    window.logni.debug(msg, level)
  },
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
