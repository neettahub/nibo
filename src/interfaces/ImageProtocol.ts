import Jimp from 'jimp'
import { Image } from '../Image'
import { Image as ImageElement } from '../structures/Elements/Image'
import { AddProtocol } from './AddProtocol'

export type ImageOrientation = [
  'left' | 'right',
  'top' | 'bottom'
]

export interface ReturnImageInformation {
  width: number
  height: number
  oldImage: Jimp
  newImage: Jimp
  createdImage: Image
}

export interface ReturnTextInformation {
  x: number
  y: number
  width: number
  height: number
  text: string
  fontFilePath: string
  oldImage: Jimp
  newImage: Jimp
}

export interface ImageConstructorProps {
  image: Jimp
  promises: Set<Promise<any>>
  add: AddProtocol
}

export type ImageCreateProps = Jimp | ImageElement

export interface ImageProtocol {
  value: Jimp
  save: (path: string) => Promise<Jimp>
  saveAfterPromises: (path: string) => Promise<Jimp>
}
