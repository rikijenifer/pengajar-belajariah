import { StyleSheet } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container : {
    flex: 9,
    // paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  image: {
    marginTop: 30,
    height: hp('23'),
    width: wp('57.5'),
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    marginTop: 20,
    borderWidth: 0,
    marginBottom: 10,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: Color.purpleButton,
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    color: Color.greyHeadInput,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  checkbox: {
    marginTop: 18,
    paddingLeft: 4,
  },
  textCheckbox: {
    lineHeight: 19,
    color: Color.black,
    fontFamily : FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textCheckBox2: {
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  backToLogin: {
    fontSize: FontSize.small,
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.regular,
  },
  textBackToLogin: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  footer : {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  phoneOne : { width : '24%', marginRight : '2%' },
  phoneTwo : { width : '74%' },

  //Style Regis
  containerReg : {
    flex: 9,
    marginTop: 3,
    // paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  TxtNavigation: {
    fontSize: FontSize.medium,
    color: '#fff',
    fontFamily: FontType.bold,
  },
  TouchBtnHeader : {
    marginRight: 30,
  },
  ViewBtn : {
    paddingHorizontal: 30,
  },
  StyleBtn : {
    height: 56,
    borderRadius: 100,
  },
  StyleTxtBtn : {
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  datePickerInput: {
    height: 47,
    marginTop: 3,
    paddingTop: 3,
    width: '100%',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 21,
    paddingHorizontal: 8,
    borderColor: '#b3b3b3',
    backgroundColor: Color.white,
  },
  datePickerControl: {
    borderWidth: 0,
    backgroundColor: Color.transparent,
  },

  // Input Profile Pengajar
  textArea: {
    width: '100%',
    marginBottom: 26,
    elevation : 1,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    backgroundColor: Color.white,
  },

  // Input Schedule Pengajar
  containerSche : {
    flex: 9,
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  TxtTitleZone : {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  ViewRadio : {
    marginBottom: 26,
  },  
  ViewRadioBtn : {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TxtInputRadio: {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  ViewDrop: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  DropInput: {
    height: 47,
    marginTop: 3,
    paddingTop: 3,
    width: '52%',
    marginRight: '8%',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderColor: '#b3b3b3',
    backgroundColor: Color.white,
  },
  DropInputChild: {
    height: 47,
    marginTop: 3,
    paddingTop: 3,
    width: '40%',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderColor: '#b3b3b3',
    backgroundColor: Color.white,
  },
  ViewBtnSch : {
    // marginTop: '25%',
    // paddingHorizontal: 30,
  },
  StyleBtnAdd : {
    height: 56,
    width: '100%',
    borderRadius: 100,
  },
  StyleTxtBtnAdd : {
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },

  //Instructor Forget Password
  containerForget : {
    flex: 9,
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  iconNavigationWhite: {
    fontSize: 16,
    color: Color.black,
    fontFamily: FontType.bold,
  },
  StyleIcon : {
    width: 150,
    height: 170,
    alignSelf: 'center',
  },
  ViewTxtDesc : {
    marginTop: 30,
    marginBottom: 40,
  },
  TxtTitleDesc : {
    color: Color.black,
    textAlign: 'center',
    lineHeight: 24,
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
  },
  TxtTitleDescBld : {
    fontFamily: FontType.bold,
  },
  ViewBtnFor : {
    // marginTop: '25%',
    // paddingHorizontal: 30,
  },

  //Instructor Verify
  containerVerif : {
    flex: 9,
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  iconNavigationWhite: {
    fontSize: 16,
    color: Color.black,
    fontFamily: FontType.bold,
  },
  StyleIconVerify : {
    width: 180,
    height: 120,
    alignSelf: 'center',
  },
  ViewTxtDescVerify : {
    marginTop: 30,
    marginBottom: 40,
  },
  TxtTitleDescVerify : {
    color: Color.black,
    textAlign: 'center',
    lineHeight: 24,
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
  },
  TxtTitleDescBldVerify : {
    fontFamily: FontType.bold,
  },
  ViewInputVerify : {
    marginTop: '4%',
  },
  ViewBtnTxtVerify : {
    // marginTop: 4,
    marginBottom: 30,
  },
  TxtAgainBtn : {
    textAlign: 'center',
    color: Color.purpleText,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  ViewBtnForVerify : {
    // marginTop: '25%',
    // paddingHorizontal: 30,
  },

  //Instructor New Password
  containerNewPW : {
    flex: 9,
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  iconNavigationWhite: {
    fontSize: 16,
    color: Color.black,
    fontFamily: FontType.bold,
  },
  StyleIconNewPW : {
    width: 134,
    height: 150,
    alignSelf: 'center',
  },
  TxtTitleNewPW : {
    fontFamily: FontType.regular,
  },
  TxtTitleNewPWBld : {
    lineHeight: 24,
    color: Color.black,
    textAlign: 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  ViewBtnNewPW : {
    // marginTop: '25%',
    // paddingHorizontal: 30,
  },
  ViewContentModal : {
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  IconSuccesStyle : {
    width: 118,
    height: 120,
  },
  ViewTxtModal : {
    width: '70%',
    marginTop: 20,
  },
  TxtModalBld : {
    color: Color.black,
    fontFamily: FontType.bold,
  },
  TxtModal : {
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.medium,
  },
  TxtModalBldBtn : {
    color: Color.purpleText,
    fontFamily: FontType.bold,
  },

  //Instructor Login
  containerLog : {
    flex: 9,
    // marginTop: 30,
    // paddingHorizontal: 30,
    // backgroundColor: Color.white,
  },
  StyleTop : {
    zIndex: 1,
    height:  400,
    width: '100%',
    marginTop: '-16%',
    // backgroundColor: '#000',
  },
  ViewTop : {
    zIndex: 100,
    marginTop: '-90%',
  },
  StyleILogo : {
    width: 75,
    height: 116,
    marginTop: '8%',
    alignSelf: 'center',
  },
  ViewContent : {
    paddingHorizontal: 30,
  },
  anotherLogin: {
    padding: 9,
    width: '90%',
    height: 'auto',
    marginTop: '20%',
    marginBottom: 30,
    borderRadius: 25,
    paddingLeft: '12%',
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.greyHintBG,
  },
  ImageIconStyle: {
    width: 32,
    height: 32,
    // marginLeft: '12%',
  },
  TxtGoogleButton : {
    marginLeft: 15,
    color: Color.black,
    fontSize: FontSize.large,
    fontFamily: FontType.regular,
  },
  TxtGoogleButtonBld : {
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  ViewInputLog : {
    marginTop: 20,
  },
  forgotPassword: {
    marginTop: -10,
    marginBottom: 20,
    textAlign: 'right',
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  StyleBtnLog : {
    height: 54,
    borderRadius: 100,
  },
  StyleInputLog : {
    // borderBottomWidth: 1,
    // borderWidth: 0,
    // borderColor: Color.transparent,
  },
  StyleTxtBtnLog : {
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  nothaveAccount : {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  nothaveAccountText : {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  backToRegister: {
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  backToRegisterBld: { 
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  StyleBottom : {
    zIndex: 2,
    height: 300,
    top: '-40%',
    bottom: '0%',
    width: '100%',
  }
})

export default styles