// @flow

/**
<<<<<<< Updated upstream
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

export default logWrapper
=======
 * Simple wrapper of log.
 */
class LogWrapper {
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
    return console.info(this.addIdToMsg(msg), level)
  }

  warn(msg, level) {
    return console.warn(this.addIdToMsg(msg), level)
  }

  error(msg, level) {
    return console.error(this.addIdToMsg(msg), level)
  }

  fatal(msg, level) {
    return console.error(this.addIdToMsg(msg), level)
  }

  critical(msg, level) {
    return console.error(this.addIdToMsg(msg), level)
  }

  debug(msg, level) {
    return console.debug(this.addIdToMsg(msg), level)
  }
}

export default LogWrapper
>>>>>>> Stashed changes
