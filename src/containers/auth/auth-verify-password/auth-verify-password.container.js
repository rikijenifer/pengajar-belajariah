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
import { styles } from './auth-verify-password.style'

const VerifyPassword = () => {
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
            title={<Text style={styles.iconNavigationWhite}>Verifikasi</Text>}
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
        <View style={styles.containerVerif}>
            <HeaderWhite />
            <View>
                <Image source={Images.IconVerificationCode} style={styles.StyleIconVerify} />
                <View style={styles.ViewTxtDescVerify}>
                    <Text style={styles.TxtTitleDescVerify}>Silahkan Masukan
                    <Text style={styles.TxtTitleDescBldVerify}> Verifikasi Kode </Text>
                    yang dikirim ke Email anda!
                    </Text>
                </View>
                <View style={styles.ViewInputVerify}>
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        SizeInput='large'
                        // name='Email'
                        placeholder='Masukan Kode Verifikasi'
                    />
                </View>
                <View style={styles.ViewBtnTxtVerify}>
                    <TouchableOpacity>
                    <Text style={styles.TxtAgainBtn}>Kirim Ulang Kode</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewBtnForVerify}>
                    <Buttons 
                    title='Verifikasi'
                    style={styles.StyleBtn}
                    textStyle={styles.StyleTxtBtn}
                    onPress={() => {
                        navigation.navigate('NewPassword')}} />
                </View>
            </View>
        </View>
    )
}

export default VerifyPassword