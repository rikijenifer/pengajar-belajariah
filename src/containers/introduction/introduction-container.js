import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'

import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import {
    Buttons,
    ModalNoConnection,
} from '../../components'
import { Images } from '../../assets'
import { styles } from './introduction-style'

const Introduction = () => {
    const navigation = useNavigation()
    const Header = () => {
        return (
          <View>
            <Image source={Images.HeaderIntro} style={styles.ImageHeader} />
          </View>
        )
    }
    
    const Intro = () => {
        return (
          <View>
            <View style={styles.ViewTxtIntro}>
              <Text style={styles.TxtIntro}>Tambah Penghasilanmu dengan</Text>
              <Text style={styles.TxtIntro}>bergabung menjadi pengajar Dirosa</Text>
            </View>
            <View style={styles.ViewStyleBtn}>
              <Buttons title='Daftar'
                style={styles.StyleBtn}
                textStyle={styles.StyleTxtBtn}
                onPress={() => {
                  navigation.navigate('Register')
                }} />
            </View>
            <View style={styles.nothaveAccountDirect}>
              <Text style={styles.nothaveAccountTextDirect}>Sudah punya akun ?</Text>
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('Login')
              }}>
                <Text style={styles.backToRegisterBld}> Masuk di sini</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
    }

    return (
        <View style={styles.ContainerIn}>
            <Header />
            <Intro />
        </View>
    )
}

export default Introduction