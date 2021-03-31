// Should write "Fagner" at the center of the image

import { Image } from '../..'
import { Image as ImageElement } from '../../src/structures/Elements/Image'

const image = Image.create(ImageElement.create(1280, 1280, 'BLUE'))

image.add.text({
  value: 'Regular FiraCode',
  fontFilePath: './fonts/FiraCode/Bold/font.fnt',
  position: ['center', 'center'],
  fontSize: 400
}).then(() => {
  image.value.writeAsync('./examples/images/fagner-text.example.1.png')
})
