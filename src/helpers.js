// DOM

/**
 * Retrieve data of specified meta tag. Usually some config values or app version.
 *
 * @param name
 * @returns {null}
 */
export const getMeta = (name: string) => {
  const element = document.querySelector(`meta[name='${name}']`)
  return element ? element.getAttribute('content') : null
}
