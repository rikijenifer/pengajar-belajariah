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
import {styles} from './auth-upload.style'

const AuthUploadFile = () => {
    const navigation = useNavigation()

    const BackAction = () => (
        <TouchableOpacity style={styles.TouchBtnHeader} onPress={() => navigation.goBack()}>
          <Images.IconArrowBack.default />
        </TouchableOpacity>
    )

    const Header = () => {
        return (
          <TopNavigation
            // accessoryLeft={BackAction}
            title={<Text style={styles.iconNavigation}>Upload File</Text>}
            style={{
              marginTop: -3,
              paddingVertical: 24,
              paddingHorizontal: 30,
              backgroundColor: Color.purpleButton,
            }}
          />
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={{paddingHorizontal: 30, marginTop: 30,}}>
                    <View>
                        <Buttons 
                            title='Selanjutnya'
                            style={styles.StyleBtn}
                            textStyle={styles.StyleTxtBtn}
                            onPress={() => {
                                navigation.navigate('ProfileInput')
                            }}
                        />
                    </View>    
                </View>
            </ScrollView>
        </View>
    )
}

export default AuthUploadFile