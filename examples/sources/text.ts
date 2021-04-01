// Should write "Fagner" at the center of the image

import { Image } from '../..'
import { Image as ImageElement } from '../../src/structures/Elements/Image'

const image = Image.create(ImageElement.create(1280, 1280, 'BLUE'))

image.add.text({
  value: 'Fagner',
  fontFilePath: './font/font.fnt',
  position: ['center', 'center'],
  fontSize: 400
})

image.saveAfterPromises('./examples/images/fagner-text.example.1.png')
