// @flow
/**
 * log wrapper
 *
 * Simple wrapper prepared for logging framework
 */

const environment = process.env.NODE_ENV
const isLoggerOn = environment === 'development'

const logWrapper = {
  info: (msg: string) => {
    if (isLoggerOn) {
      console.info(msg)
    }
  },
  warn: (msg: string) => {
    if (isLoggerOn) {
      console.warn(msg)
    }
  },
  error: (msg: string) => {
    if (isLoggerOn) {
      console.error(msg)
    }
  },
  fatal: (msg: string) => {
    if (isLoggerOn) {
      console.error(msg)
    }
  },
  debug: (msg: string) => {
    if (isLoggerOn) {
      console.debug(msg)
    }
  },
}

