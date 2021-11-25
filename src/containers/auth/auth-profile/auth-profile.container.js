import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, Text, TopNavigation,  } from '@ui-kitten/components'

import {
  View,
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
import {styles} from './auth-profile.style'

const ProfileInput = () => {
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
            title={<Text style={styles.iconNavigation}>Profil Pengajar</Text>}
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
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        // onChangeText={(e) => setComment(e)}
                        style={styles.textArea}
                        placeholder='Ceritakan tentang diri anda dan pengalaman anda dalam mengajar Ngaji metode Dirosa atau metode lainnya'
                    />
                    <TextBox
                        // error
                        // name='Full_Name'
                        // form={FormSubmit}
                        SizeInput='large'
                        placeholder='Asal Pesantren'
                    />
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        SizeInput='large'
                        // name='Email'
                        placeholder='Asal Pesantren 1'
                    />
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        SizeInput='large'
                        // name='Email'
                        placeholder='Asal Perguruan Tinggi'
                    />
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        // name='Email'
                        SizeInput='large'
                        placeholder='Asal Perguruan Tinggi 1'
                    />
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        // name='Email'
                        SizeInput='large'
                        placeholder='Pelatihan Keislaman yang anda ikuti'
                    />
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        // name='Email'
                        SizeInput='large'
                        placeholder='Pelatihan Keislaman yang anda ikuti 1'
                    />
                    <TextBox
                        // form={FormSubmit}
                        AutoCapital='none'
                        // name='Email'
                        SizeInput='large'
                        placeholder='Domisili Sekarang'
                    />
                    <View>
                        <Buttons 
                            title='Bismillah, Daftar'
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

export default ProfileInput