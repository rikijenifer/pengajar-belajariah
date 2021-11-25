import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, Text, TopNavigation } from '@ui-kitten/components'
import { GoogleSignin } from '@react-native-community/google-signin'

import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { TextBox, Buttons} from '../../../components'
import { Icons, Images, Color } from '../../../assets'
import { styles } from './auth-login.style'

const Login = () => {
    const navigation = useNavigation()
    // const BackActionWhite = () => {
    //   return (
    //     <View>
    //       <TouchableOpacity style={styles.TouchBtnHeader} onPress={() => navigation.goBack()}>
    //         <Images.IconArrowBackWhite.default />
    //       </TouchableOpacity>
    //     </View>
    //   )
    // }

    const HeaderWhite = () => {
        return (
          <TopNavigation
            // accessoryLeft={<BackActionWhite />}
            title={<Text style={styles.iconNavigationWhite}></Text>}
            style={{
              zIndex: 101,
              marginTop: -3,
              paddingVertical: 24,
              paddingHorizontal: 30,
              backgroundColor: Color.transparent,
            }}
          />
        )
    
    }

    const Top = () => {
        return(
          <>
          <ImageBackground source={Images.StylePatternTop} style={styles.StyleTop} />
          <View style={styles.ViewTop}>
            <View style={styles.ViewContent}>
              <Image source={Images.LogoBelajariah} style={styles.StyleILogo} />
              <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                <TouchableOpacity
                  style={styles.anotherLogin}
                  activeOpacity={0.6}
                  // onPress={googleSignIn}
                >
                  <Image
                    source={Images.Google}
                    style={styles.ImageIconStyle}
                  />
                  <View>
                    <Text style={styles.TxtGoogleButton}>Sign in with <Text style={styles.TxtGoogleButtonBld}>Google</Text></Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.ViewInputLog}>
                <TextBox
                    // form={FormSubmit}
                    AutoCapital='none'
                    SizeInput='large'
                    // name='Email'
                    placeholder='Masukan Alamat Email'
                    customStyle={styles.StyleInputLog}
                />
                <TextBox
                    // form={FormSubmit}
                    SizeInput='large'
                    // name='Email'
            
                    placeholder='Masukan Kata Sandi'
                    customStyle={styles.StyleInputLog}
                />
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgetPassword')
                }}>
                  <Text style={styles.forgotPassword}>Lupa kata sandi ?</Text>
                </TouchableOpacity>
              </View>
              <Buttons 
                title='Masuk'
                style={styles.StyleBtnLog}
                textStyle={styles.StyleTxtBtnLog}  />
              <View style={styles.nothaveAccount}>
                <Text style={styles.nothaveAccountText}>
                  Belum punya akun ?
                </Text>
                <TouchableOpacity 
                  onPress={() => {
                        navigation.navigate('Register')
                }}>
                  <Text style={styles.backToRegisterBld}> Daftar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </>
        )
    }

    const Bottom = () => {
        return (
          <ImageBackground source={Images.StylePatternBottom} style={styles.StyleBottom}>
            
          </ImageBackground>
        )
    }

    return (
        <View style={styles.containerLog}>
            <HeaderWhite />
            {Top()}
            <Bottom />
        </View>
    )
}

export default Login