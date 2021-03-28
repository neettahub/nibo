import Jimp from 'jimp'
import { AddProtocol } from './AddProtocol'

export interface ImageConstructorProps {
  image: Jimp
  add: AddProtocol
}

export interface ImageProtocol {
  image: Jimp
}
