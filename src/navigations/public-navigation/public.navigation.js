import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
    Login,
    Register,
    NewPassword,
    Introduction,
    ProfileInput,
    AuthUploadFile,
    ForgetPassword,
    VerifyPassword,
} from '../../containers'

const PublicNavigation = () => {
    const Stack = createStackNavigator()
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Introduction' component={Introduction} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ProfileInput' component={ProfileInput} />
        <Stack.Screen name='AuthUploadFile' component={AuthUploadFile} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='VerifyPassword' component={VerifyPassword} />
        <Stack.Screen name='NewPassword' component={NewPassword} />
      </Stack.Navigator>
    )
  }
  
  export default PublicNavigation