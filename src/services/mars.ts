import api from '@api/index'
import axios from 'axios'

const getImagesFromMars = (rover: string, sol?: string) => {
  return api.get<{ photos: { img_src: string }[] }>(
    `/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol || '1000'}`
  )
}

export { getImagesFromMars }
