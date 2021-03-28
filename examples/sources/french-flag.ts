import { Image } from '../..'

const image = Image.create(600, 300, 'WHITE')

image.add.rectangle({
  data: [200, image.value.getHeight(), 'DARKBLUE'],
  position: [0, 'center']
})

image.add.rectangle({
  data: [200, image.value.getHeight(), 'RED'],
  position: [400, 'center']
})

image.value.writeAsync('./examples/images/french-flag.example.1.png')
