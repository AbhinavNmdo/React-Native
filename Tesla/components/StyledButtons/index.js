import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function StyledButton(props) {
    const type = props.type;
    const back = type === 'primary' ? '#36363c' : '#d7d6d7';
    const text = type === 'primary' ? '#d7d6d7' : '#36363c';
    const content = props.content

    return (
        <View style={styles.container}>
            <Pressable 
                onPress={()=>{console.warn("Hello World")}}
                style={[styles.button, {backgroundColor: back}]}
            >
                <Text style={[styles.btnText, {color: text}]}>{content}</Text>
            </Pressable>
        </View>
    )
}
