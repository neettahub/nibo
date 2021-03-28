import { Image } from '../..'

const image = Image.create(500, 300, 'WHITE')

image.add.circle({
  data: [150, 150, 'RED'],
  position: ['center', 'center']
})

image.value.writeAsync('./examples/images/japan-flag.example.1.png')
