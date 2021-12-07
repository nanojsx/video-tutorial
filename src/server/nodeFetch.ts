import { request } from 'http'

/** Make a simple GET request */
export const nodeFetch = async (url: string) => {
  return new Promise((resolve, reject) => {
    let data = ''
    const req = request(url, res => {
      res.on('data', d => {
        data += d.toString()
      })

      res.on('end', () => {
        try {
          const json = JSON.parse(data)
          return resolve(json)
        } catch (error) {
          return resolve(data)
        }
      })
    })

    req.on('error', error => {
      return reject(error)
    })

    req.end()
  })
}
