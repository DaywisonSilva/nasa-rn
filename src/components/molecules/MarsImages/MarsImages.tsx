import { Row } from 'native-base'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'

type MarsImagesProps = {
  images: Array<string>
}

const dimensions = Dimensions.get('screen')

const MarsImages = ({ images }: MarsImagesProps) => {
  const width = dimensions.width
  const height = width * 0.65

  return (
    <ScrollView>
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            source={{ uri: image }}
            style={{
              width,
              height,
              resizeMode: 'cover',
              marginBottom: 10
            }}
          />
        )
      })}
    </ScrollView>
  )
}
export default MarsImages
