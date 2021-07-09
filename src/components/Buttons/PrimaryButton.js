import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { btnColor } from '../../utils/theme'

const PrimaryButton = ({ onPress }) => {
    const width = Dimensions.get('screen').width
    const btnSize = 48
    return (
        <TouchableOpacity
            onPress={onPress}>
            <View style={{
                height: btnSize,
                width: width - 48,
                backgroundColor: btnColor,
                borderRadius: btnSize / 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                }}>Save</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({})
