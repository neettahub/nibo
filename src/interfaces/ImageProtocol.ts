import Jimp from 'jimp'
import { ImageElement } from '../structures/Elements/Image'
import { AddProtocol } from './AddProtocol'

export type ImageOrientation = [
  'left' | 'right',
  'top' | 'bottom'
]

export interface ImageConstructorProps {
  image: Jimp
  add: AddProtocol
}

export type ImageCreateProps = Jimp | ImageElement

export interface ImageProtocol {
  value: Jimp
}
