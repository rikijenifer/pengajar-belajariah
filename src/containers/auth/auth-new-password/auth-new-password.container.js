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
    ModalInfo,
} from '../../../components'
import { Images, Color } from '../../../assets'
import { styles } from './auth-new-password.style'

const NewPassword = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const toggleModal = () => setModalVisible(!modalVisible)

    const BackActionWhite = () => (
        <TouchableOpacity style={styles.TouchBtnHeader} onPress={() => navigation.goBack()}>
          <Images.IconArrowBackWhite.default />
        </TouchableOpacity>
    )

    const HeaderWhite = () => {
        return (
          <TopNavigation
            // accessoryLeft={BackActionWhite}
            title={<Text style={styles.iconNavigationWhite}>Buat Kata Sandi Baru</Text>}
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
        <>
        <ModalInfo
            titleBtn='Pilih Jadwal'
            styleBtn={styles.StyleB}
            isVisible={modalVisible}
            backdropPress={() => toggleModal()}
            renderItem={
            <View style={styles.ViewContentModal}>
                <Image source={Images.IconChangeSuccess} style={styles.IconSuccesStyle} />
                <View style={styles.ViewTxtModal}>
                    <Text style={styles.TxtModal}>
                    <Text style={styles.TxtModalBld}>Kata Sandi </Text>
                    anda berhasil diubah Silahkan 
                    <Text style={styles.TxtModalBldBtn}> Masuk</Text>
                    </Text>
                </View>
            </View>} 
        />
        <View style={styles.containerNewPW}>
            <HeaderWhite />
            <View>
            <Image source={Images.IconNewPassword} style={styles.StyleIconNewPW} />
            <View style={styles.ViewTxtDesc}>
                <Text style={styles.TxtTitleNewPWBld}>Kata Sandi Baru
                <Text style={styles.TxtTitleNewPW}> harus berbeda dengan Kata Sandi Sebelumnya. </Text>
                </Text>
            </View>
            <View>
                <TextBox
                    // form={FormSubmit}
                    AutoCapital='none'
                    SizeInput='large'
                    // name='Email'
                    placeholder='Masukan Kata Sandi Baru'
                />
                <TextBox
                    // form={FormSubmit}
                    AutoCapital='none'
                    SizeInput='large'
                    // name='Email'
                    placeholder='Konfirmasi Kata Sandi Baru'
                />
            </View>
            <View style={styles.ViewBtnNewPW}>
                <Buttons 
                title='Konfirmasi'
                style={styles.StyleBtn}
                textStyle={styles.StyleTxtBtn}
                onPress={toggleModal} />
            </View>
            </View>
        </View>
        </>
    )
}

export default NewPassword