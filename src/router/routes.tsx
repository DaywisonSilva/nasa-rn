import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@pages/Home'
import Loading from '@pages/Loading'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName='loading'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='loading' component={Loading} />
      <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  )
}

export default Routes
