import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Color.softPink,
  },  
  background: {
    width: '100%',
    height: 290,
    resizeMode: 'cover',
    // borderRadius: 20,
  },
  btnDrawer: {
    width: 20,
    height: 30,
  },
  containerDrawerButton: {
    width: '100%',
    paddingVertical:8,
    alignItems:'center',
    paddingHorizontal:20,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerProfileHeader: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 172,
    alignItems: 'center',
  },
  containerEmailPhone: {
    flexDirection: 'row',
    marginTop: 2,
  },
  containerCard: {
    elevation: 0,
    borderWidth: 0,
    marginBottom: 20,
    backgroundColor: Color.softPink,
  },
  ViewListMenu: {
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconMenu: {
    width: 30,
    height: 30,
    marginRight: 14,
  },
  avatarBorder: {
    zIndex: 1,
    width: 110,
    height: 110,
    marginTop: 56,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100 / 2,
  },
  avatar: {
    top: 80,
    zIndex: 1,
    width: 120,
    height: 120,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100 / 2,
  },
  ViewEmail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconEmail: {
    width: 24,
    height: 20,
    marginTop: 4,
    marginRight: 6,
  },
  iconPhone: {
    marginTop: -4,
    marginRight: 4,
  },
  iconProfile: {
    alignSelf: 'center',
    marginTop: -48,
  },
  ViewTitle: {
    top: 220,
    alignItems: 'center', 
  },
  headerName: {
    marginTop: 2,
    marginBottom : 3,
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  headerEmail: {
    color: '#AB69C6',
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  headerPhone: {
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  subHeader: {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  subHeaderExit: {
    color: '#FF4545',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  dataProfile: {
    marginTop: 4,
    fontFamily: FontType.regular,
    fontSize: FontSize.small,
    color: Color.purpleHint,
  },
  divider: {
    marginVertical: 8,
  },
})

export { styles }