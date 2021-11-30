import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Text,
  Image,
  Easing,
  Animated,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'

import { Images } from '../../assets'
import {styles} from './profile.style.js'
const Profile = () => {
    const navigation = useNavigation()

    const Header = () => {
        return (
            <ImageBackground source={Images.BackgroundProfile} style={styles.background}>
                <Avatar
                    size='large'
                    activeOpacity={0.5}
                    containerStyle={styles.avatar}
                    source={Images.ImageProfileDefault}
                />
                <View style={styles.ViewTitle}>
                    <Text style={styles.headerName}>Ustadz Hamdan Ngaja</Text>
                    <View style={styles.ViewEmail}>
                        <Image source={Images.IconEmail} style={styles.iconEmail} />
                        <Text style={styles.headerEmail}>email@gmail.com</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <Header />
            <Card containerStyle={styles.containerCard}>
                <TouchableOpacity>
                    <View style={styles.ViewListMenu}>
                        <Image source={Images.IconEmail} style={styles.IconMenu} />
                        <Text style={styles.subHeader}>Ubah Data Diri</Text>
                    </View>
                </TouchableOpacity>
                <Card.Divider style={styles.divider} />

                <TouchableOpacity>
                    <View style={styles.ViewListMenu}>
                        <Image source={Images.IconEmail} style={styles.IconMenu} />
                        <Text style={styles.subHeader}>Ubah Kata sandi</Text>
                    </View>
                </TouchableOpacity>
                <Card.Divider style={styles.divider} />

                <TouchableOpacity>
                    <View style={styles.ViewListMenu}>
                        <Image source={Images.IconEmail} style={styles.IconMenu} />
                        <Text style={styles.subHeader}>Kebijakan Privasi</Text>
                    </View>
                </TouchableOpacity>
                <Card.Divider style={styles.divider} />

                <TouchableOpacity>
                    <View style={styles.ViewListMenu}>
                        <Image source={Images.IconEmail} style={styles.IconMenu} />
                        <Text style={styles.subHeader}>Syarat dan ketentuan</Text>
                    </View>
                </TouchableOpacity>
                <Card.Divider style={styles.divider} />

                <TouchableOpacity>
                    <View style={styles.ViewListMenu}>
                        <Image source={Images.IconExit} style={styles.IconMenu} />
                        <Text style={styles.subHeaderExit}>Keluar</Text>
                    </View>
                </TouchableOpacity>
            </Card>
            </ScrollView>
        </View>
    )
}

export default Profile