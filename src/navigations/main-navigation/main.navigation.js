import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Color, Images } from '../../assets'
import { Dashboard, Profile} from '../../containers'
import { styles} from './main.style'

const MainNavigation = () => {
    const { Navigator} = createBottomTabNavigator()
    const { Screen } = createBottomTabNavigator()
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                let iconName
                switch (route.name) {
                case 'Dashboard':
                    iconName = focused
                    ? Images.IconInstructorHomePurple
                    : Images.IconInstructorHome
                    break
                case 'Profile':
                    iconName = focused
                    ? Images.IconInstructorProfilePurple
                    : Images.IconInstructorProfile
                    break
                }
                return <iconName.default />
                },
            })}
            tabBarOptions={{
                adaptive: true,
                showLabel: true,
                allowFontScaling: true,
                style: styles.tabBarStyle,
                labelStyle: styles.labelStyle,
                activeTintColor: Color.bgColor,
                inactiveTintColor: Color.textLightHint,
            }}>
            <Screen
                name='Dashboard'
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}

export default MainNavigation