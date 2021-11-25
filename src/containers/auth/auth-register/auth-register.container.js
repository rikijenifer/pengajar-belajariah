import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { Icon, Text, Datepicker, TopNavigation,  } from '@ui-kitten/components'

import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import {
    Topbar,
    Buttons,
    TextBox,
    ModalDate,
} from '../../../components'
import { Images, Color } from '../../../assets'
import styles from './auth-register.style'

const Register = (props) => {
    const navigation = useNavigation()
    const CalendarIcon = (props) => <Icon {...props} name='calendar' />
    const [modalDateVisible, setModalDateVisible] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const toggleModalDate = () => setModalDateVisible(!modalDateVisible)

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry)
    }

    const renderIcon = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    )
    
    const BackAction = () => (
        <TouchableOpacity>
            <Images.IconArrowBack.default />
        </TouchableOpacity>
    )

    const Header = () => {
        return (
          <TopNavigation
            // accessoryLeft={BackAction}
            title={<Text style={styles.TxtNavigation}>Data Personal</Text>}
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
        <>
        {/* <ModalDate
            mode='date'
            isVisible={modalDateVisible}
            date={new Date}
            backdropPress={() => toggleModalDate()}
            // dateChange={(e) => FormPersonal.setFieldValue('Birth', e)}
        /> */}
        <View style={styles.container}>
            <Header  />
            <View style={{paddingHorizontal: 30, marginTop: 30,}}>
            <TextBox
                // error
                // name='Full_Name'
                // form={FormSubmit}
                SizeInput='large'
                placeholder='Nama Lengkap'
            />
            <TextBox
                // form={FormSubmit}
                AutoCapital='none'
                name='Email'
                SizeInput='large'
                placeholder='Email'
            />
            <View style={{ flexDirection : 'row', }}>
                <TextBox
                    disabled
                    SizeInput='large'
                    placeholder='+62'
                    customStyle={styles.phoneOne}
                    keyboardType={'numeric'}
                />
                <TextBox
                    // form={FormSubmit}
                    name='Phone'
                    SizeInput='large'
                    customStyle={styles.phoneTwo}
                    placeholder='Masukan Nomor Telepon'
                    keyboardType={'numeric'}
                />
            </View>
            <TextBox
                // error
                // name='Full_Name'
                // form={FormSubmit}
                SizeInput='large'
                placeholder='Alamat Lengkap'
            />
            <TouchableOpacity
                activeOpacity={0.5}
                >
                <Datepicker
                    disabled
                    accessoryRight={CalendarIcon}
                    style={styles.datePickerInput}
                    controlStyle={styles.datePickerControl}
                    date={new Date}
                />
            </TouchableOpacity>
            <TextBox
                // form={FormSubmit}
                name='Password'
                SizeInput='large'
                placeholder='Password'
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                />
            </View>
            <View style={styles.ViewBtn}>
                <Buttons 
                    title='Selanjutnya'
                    style={styles.StyleBtn}
                    textStyle={styles.StyleTxtBtn}
                    onPress={() => {
                        navigation.navigate('AuthUploadFile')
                    }}
                />
            </View>
        </View>
        </>
    )
}

export default Register