import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, Text, TopNavigation,  } from '@ui-kitten/components'

import {
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import {
    Topbar,
    Buttons,
    TextBox,
} from '../../../components'
import { Images, Color } from '../../../assets'
import { styles } from './auth-forget-password.style'

const ForgetPassword = () => {
    const navigation = useNavigation()

    const BackActionWhite = () => (
        <TouchableOpacity style={styles.TouchBtnHeader} onPress={() => navigation.goBack()}>
          <Images.IconArrowBackWhite.default />
        </TouchableOpacity>
    )

    const HeaderWhite = () => {
        return (
          <TopNavigation
            // accessoryLeft={BackActionWhite}
            title={<Text style={styles.iconNavigationWhite}>Lupa Kata Sandi?</Text>}
            style={{
              marginTop: -3,
              paddingVertical: 24,
              paddingHorizontal: 30,
              backgroundColor: Color.white,
            }}
          />
        )
    }

    return (
        <View style={styles.containerForget}>
            <HeaderWhite />
            <View>
                <Image source={Images.IconForgetPassword} style={styles.StyleIcon} />
                <View style={styles.ViewTxtDesc}>
                    <Text style={styles.TxtTitleDesc}>Silahkan Masukan
                    <Text style={styles.TxtTitleDescBld}> Alamat Email </Text>
                    untuk verifikasi kode.
                    </Text>
                </View>
                <View>
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        SizeInput='large'
                        // name='Email'
                        placeholder='Masukan Alamat Email'
                    />
                </View>
                <View style={styles.ViewBtnForA}>
                    <Buttons 
                        title='Kirim'
                        style={styles.StyleBtn}
                        textStyle={styles.StyleTxtBtn}
                        onPress={() => {
                            navigation.navigate('VerifyPassword')}} 
                    />
                </View>
            </View>
        </View>
    )
}

export default ForgetPassword