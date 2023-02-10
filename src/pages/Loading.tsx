import React, { useRef, useEffect } from 'react'
import LottieView from 'lottie-react-native'
import AnimationJSON from '../../assets/animations/rocket-animation.json'
import { Center } from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'loading'>

const Loading = ({ navigation }: Props) => {
  const animation = useRef<LottieView>(null)
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home')
    }, 2000)
  }, [animation.current?.state])

  return (
    <Center>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#333'
        }}
        source={AnimationJSON}
      />
    </Center>
  )
}

export default Loading
