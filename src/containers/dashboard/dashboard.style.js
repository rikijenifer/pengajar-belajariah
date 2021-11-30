import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: Color.softPink,
  },
  containerBackground: {
    width: '100%',
    // height: '55%',
  },
  containerBody : {
    // width: '100%',
    height: '100%',
    marginHorizontal: 20,
  },
  containerFooter: {
    bottom: 0,
    height: 400,
    paddingTop: 12,
    paddingBottom: 36,
    position: 'absolute',
    paddingHorizontal: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  containerRowView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerCard: {
    width: 164,
    padding: 0,
    height: 220,
    borderRadius: 20,
    marginHorizontal: 12,
  },
  contentSwiper: {
    marginHorizontal: -12,
  },
  cardBackground: {
    width: 164,
    height: 220,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  illustration: {
    resizeMode: 'stretch',
  },
  logo: { marginTop: 12 },
  textTitle: {
    color: Color.black,
    fontSize: 18,
    fontFamily: FontType.regular,
  },
  textSubTitle: {
    color: Color.textHint,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textClassName: {
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.berkshire,
  },
  textTaskCount: {
    marginTop: 2,
    color: Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textBtnViewTask: {
    marginTop: 4,
    borderWidth: 2,
    borderRadius: 16,
    color: Color.white,
    paddingVertical: 4,
    textAlign: 'center',
    paddingHorizontal: 16,
    borderColor: Color.white,
    fontSize: FontSize.medium,
    textAlignVertical: 'center',
    fontFamily: FontType.regular,
  },
  activeDot: {
    backgroundColor: Color.purpleButton,
    width: 20,
  },
  ViewHead : {
    padding: 40,
  },
  StyleIcon : {
    width: 18,
    height: 20,
    alignSelf: 'flex-end',
  },
  TxtTitle : {
    marginTop: 20,
    color: Color.white,
    fontSize: FontSize.large,
  },
  ViewCardBtn : {
    top: '12%',
    zIndex: 100,
    padding: 14,
    width: '80%',
    elevation: 4,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: '10%',
    backgroundColor: Color.white,
    justifyContent: 'space-around',
  },
  ViewBtnC : {
    alignItems: 'center',
  },  
  StyleIconCard : {
    width: 60,
    height: 60,
    marginBottom: 6,
  },
  TxtIconCard : {
    color: Color.grey,
    textAlign: 'center',
    fontSize: FontSize.smallMedium,
  },
  CardClass: {
    elevation: 2,
    width: '100%',
    height: 'auto',
    borderWidth: 0,
    borderRadius: 20,
    marginVertical: 8,
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    backgroundColor : Color.greyMedium,
    shadowOffset: { width: 0, height: 1 },
  },
  ImgCustomQuran: {
    width: '100%',
    maxWidth: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
})

export { styles }