import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { styles } from './styles'

type CalcButtonProps = {
  text: string,
  color?: string,
  textColor?: string,
  size?: 'normal' | 'large';
  onPress?: (newNumber: string) => void;
}

export const CalcButton = (
  {
    text,
    color = '#2d2d2d',
    textColor = '#fff',
    size = 'normal',
    onPress
  }: CalcButtonProps
) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress && onPress(text)}>
      <View style={{
          ...styles.button,
          backgroundColor: color,
          width: size === 'large' ? 180 : 80
      }}>
        <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
