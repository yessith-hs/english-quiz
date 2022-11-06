import fs from 'fs-extra'
import axios from 'axios'
import { getImageSize } from './getImageSize.js'

const LOG_PREFIX = '[🤤 Dirty Scraper]'
const log = (...arg)=> console.log(LOG_PREFIX, arg)
const time = (str = 'tiempo') => {
  console.time(`${LOG_PREFIX}${str}`)
  return () => console.timeEnd(`${LOG_PREFIX}${str}`)
}

const { writeJson } = fs
const INITIAL_ID_XKCD_COMIC = 2500
const MAX_ID_XKCD_COMIC = 2501
// const MAX_ID_XKCD_COMIC = 2600

for (let id = INITIAL_ID_XKCD_COMIC; id < MAX_ID_XKCD_COMIC; id++) {
  const API_URL = `https://xkcd.com/${id}/info.0.json`
  log(`✨ Fetching ${API_URL}...`)

  const { data } = await axios.get(API_URL)
  const { num, news, transcript, img, ...restOfComic } = data
  log(`✨ Fetched comic #${num}. Getting image dimensions...`)

  const jsonFile = `./comics/comic-${id}.json`
  const { width, height } = await getImageSize({ imgUrl: img })
  log(`✨ Get image dimensions: width:${width} / height:${height}`)

  const comicStore = {
    id,
    img,
    width,
    height,
    restOfComic
  }
  await writeJson(jsonFile, comicStore)
  log(`✅ Wrote ${jsonFile}! \n`)
}
time()