const { URL } = require('url')
const fetch = require('node-fetch')

const getRequest = (url, form, timeout) => {
  if (form) {
    const urlObj = new URL(url)
    for (const k in form) {
      urlObj.searchParams.append(k, form[k])
    }
    url = urlObj.href
  }
  console.log('--------------url---------------', url)
  return fetch(url, {timeout}).then(response => {
    return response.json() || {}
  }).catch(error => {
    if (Object.keys(error).length === 0) {
      error = {message: 'Bad server'}
    }
    return error
  })
}

module.exports = { getRequest }