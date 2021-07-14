import React from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    mainContainer: {
        width: wp('90%'),
        height: hp('45%'),
        backgroundColor: '#F3F4F9',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    icon: {
        marginTop: hp('1%'),
        marginRight: wp('1%'),
        alignSelf: 'flex-end',
        resizeMode: 'contain',
    },
    paymentErrorText: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: "700",
        textAlign: 'center',
        marginTop: hp('7%'),
        color: '#EE4B4B'
    },
    detailText: {
        width: wp('70%'),
        fontSize: 12,
        fontWeight: '400',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#A3A3A3',
        marginTop: hp('2%')
    },
    gradientStyle: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('7%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom:hp('1.5%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    TouchableStyle: {
        width: wp('30%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
    },
    supportText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        color: '#3A3A3A',
    }
})