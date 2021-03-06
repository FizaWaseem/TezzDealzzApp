import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    mainContainer: {
        width: wp('90%'),
        height: hp('55%'),
        backgroundColor: COLOR.WhiteOlive,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    graidentView: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center'
    },
    icon: {
        height: 48,
        width: 48,
        marginTop: hp('1%'),
        marginLeft: wp('1%'),
        alignSelf: 'flex-start',
        resizeMode: 'contain',
    },
    image: {
        width: wp('70%'),
        alignSelf: 'center',
        height: hp('20%'),
        marginTop: hp('3%'),
        borderRadius: 14,
        resizeMode:"cover"
    },
    modelText: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily:'IBMPlexSans-Bold',
        textAlign: 'center',
        marginTop: hp('1%'),
        color: COLOR.RaisinBlack
    },
    buttonIcon: {
        height: hp('3%'),
        width: wp('5%'),
        resizeMode:'contain',
        marginRight:wp('2%'),
        alignSelf: 'center',
    },
    detailView: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    amountText: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.primary
    },
    locationText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.secondary,
        paddingTop: hp('0.5%'),
        marginRight:wp('2.5%')
    },
    gradientStyle: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom:hp('1.5%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR.White,
    },
})