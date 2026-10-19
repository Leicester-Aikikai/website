import { images } from '../data/images.js'

export function getImage(source) {
  const path = source?.replace('https://leicesteraikikai.com', '')
  return images[path] || { src: source }
}

export function getSocialImage(source) {
  const image = getImage(source)
  return { src: image.social || source, width: image.socialWidth, height: image.socialHeight }
}
