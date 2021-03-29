import { Image } from '../..'
import { ImageElement } from '../../src/structures/Elements/Image'

const image = Image.create(new ImageElement(600, 300, 'WHITE'))

image.add.rectangle({
  data: [200, image.value.getHeight(), 'DARKBLUE'],
  position: [0, 'center']
})

image.add.rectangle({
  data: [200, image.value.getHeight(), 'RED'],
  position: [400, 'center']
})

image.value.writeAsync('./examples/images/french-flag.example.1.png')

// USING ORIENTATION

const image2 = Image.create(new ImageElement(600, 300, 'WHITE'))

image2.add.rectangle({
  data: [200, image2.value.getHeight(), 'RED'],
  position: [200, 'center'],
  orientation: ['right']
})

image2.add.rectangle({
  data: [200, image2.value.getHeight(), 'DARKBLUE'],
  position: [600, 'center'],
  orientation: ['right']
})

image2.value.writeAsync('./examples/images/french-flag.example.2.png')
