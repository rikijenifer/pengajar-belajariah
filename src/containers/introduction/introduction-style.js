import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType} from '../../assets'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  backToRegister: {
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  ContainerIn : {
    flex: 9,
    // paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  ImageHeader : {
    height: 360,
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // resizeMode: 'cover',
    // alignSelf: 'center',
  },
  ViewTxtIntro : {
    marginTop: 30,
    marginBottom: 45,
    alignSelf: 'center',
  },
  TxtIntro : {
    lineHeight: 24,
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  ViewStyleBtn : {
    paddingHorizontal: 60,
  },
  StyleBtn : {
    height: 48,
    borderRadius: 100,
  },
  StyleTxtBtn : {
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  nothaveAccountDirect : {
    marginTop: 16,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  nothaveAccountTextDirect : {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  backToRegisterBld: { 
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
})

export { styles }