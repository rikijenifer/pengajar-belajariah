import Swiper from 'react-native-swiper'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/core'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Image,
  ScrollView,
  BackHandler,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../assets'
import { styles } from './dashboard.style'

const Dashboard = () => {
    const isFocused = useIsFocused()
    const navigation = useNavigation()
    const Header = () => {
        return (
            <>
            <ImageBackground source={Images.BackgroundDashboard} style={styles.containerBackground}>
                <View style={styles.ViewHead}>
                    <TouchableOpacity onPress={() => {
                  navigation.navigate('Profile')
                }}>
                        <Image source={Images.IconNotification} style={styles.StyleIcon} />
                    </TouchableOpacity>
                    <Text style={styles.TxtTitle}>Assalamu’alaikum, Ustadz dan Ustadzah</Text>
                </View>
                <CardBtn />
            </ImageBackground>
            </>
        )
    }

    const CardBtn = () => {
        return (
            <View style={styles.ViewCardBtn}>
                <TouchableOpacity>
                    <View style={styles.ViewBtnC}>
                        <Image source={Images.IconSchSantri} style={styles.StyleIconCard} />
                        <Text style={styles.TxtIconCard}>Jadwal Santri</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.ViewBtnC}>
                        <Image source={Images.IconReviewSantri} style={styles.StyleIconCard} />
                        <Text style={styles.TxtIconCard}>Ulasan Santri</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const Body = () => {
        return (
            <>
            <View style={{marginTop: '20%',}}>
                <View style={styles.CardClass}>
                    <Image source={Images.BannerKelasAlquran} style={styles.ImgCustomQuran} />
                </View>
            </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.containerBody}>
                    <Body />
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard