import React, { useState } from 'react'
import { Center, Container, Spinner } from 'native-base'
import SelectRover from '@components/atoms/SelectRover'
import MarsImages from '@components/molecules/MarsImages'
import { useEffect } from 'react'
import { getImagesFromMars } from '@services/mars'

const Home = () => {
  const [marsImages, setMarsImages] = useState<string[]>([])
  const [rover, setRover] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getImages = async () => {
    if (rover) {
      setIsLoading(true)
      setMarsImages([])
      try {
        const { data } = await getImagesFromMars(rover)
        const images = data.photos
          .map((value: any) => value.img_src)
          .slice(0, 20)
        setMarsImages(images)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    getImages()
  }, [rover])

  return (
    <>
      <Center flex={1}>
        <Container my={'1/6'}>
          <SelectRover onChangeRover={(value) => setRover(value)} />
        </Container>
        {isLoading ? <Spinner size='lg' /> : null}
        <MarsImages images={marsImages} />
      </Center>
    </>
  )
}

export default Home
