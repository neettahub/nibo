import Jimp from 'jimp'

export const resolvePositions = (mainImage: Jimp, targetImage: Jimp, x: string | number, y: string | number) => {
  const positions = { x: 0, y: 0 }

  if (typeof x === 'number') positions.x = x
  else {
    if (x === 'center') {
      positions.x = mainImage.getWidth() / 2 - targetImage.getWidth() / 2
    } else {
      positions.x = 0
    }
  }
  if (typeof y === 'number') positions.y = y
  else {
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
