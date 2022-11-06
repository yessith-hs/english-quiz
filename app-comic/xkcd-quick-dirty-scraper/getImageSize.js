import sizeOf from 'image-size'
import { get } from 'https'

export const getImageSize = ({ imgUrl }) => {
  return new Promise(resolve => {
    get(imgUrl, response => {
      const chunks = []
      response
        .on('data', chunk => {
          chunks.push(chunk)
        })
        .on('end', () => {
          const buffer = Buffer.concat(chunks)
          const { width, height } = sizeOf(buffer)
          resolve({ width, height })
        })
    })
  })
}
