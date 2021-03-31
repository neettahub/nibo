import Jimp from 'jimp'
import { ImageOrientation } from '../interfaces/ImageProtocol'

export const resolvePositions = (mainImage: Jimp, targetImage: Jimp, x: string | number, y: string | number, orientation?: Partial<ImageOrientation>) => {
  const positions = { x: 0, y: 0 }

  const [orientationX = 'left', orientationY = 'top'] = orientation ?? []

  if (typeof x === 'number') {
    if (orientationX === 'left') {
      positions.x = x
    } else {
      positions.x = mainImage.getWidth() - x
    }
  } else {
    if (x === 'center') {
      positions.x = mainImage.getWidth() / 2 - targetImage.getWidth() / 2
    } else {
      positions.x = 0
    }
  }
  if (typeof y === 'number') {
    if (orientationY === 'top') {
      positions.y = y
    } else {
      positions.y = mainImage.getHeight() - y
    }
  } else {
    if (y === 'center') {
      positions.y = mainImage.getHeight() / 2 - targetImage.getHeight() / 2
    } else {
      positions.y = 0
    }
  }

  return {
    x: positions.x,
    y: positions.y
  }
}
