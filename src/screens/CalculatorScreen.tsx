import React from 'react';
import {Text, View} from 'react-native';
import { CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    calculate,
    clear,
    positiveNegative,
    addNumber,
    deleteNumber,
    handleAdd,
    handleSubstract,
    handleMultiply,
    handleDivide
  } = useCalculator();

  return (
    <View>
      <Text
        style={styles.previousResult}
        numberOfLines={1}
        adjustsFontSizeToFit  
      >
        {previousNumber}
      </Text>
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number || '0'}
      </Text>

      <View style={styles.row}>
        <CalcButton text='C' color='#9b9b9b' textColor='#000' onPress={clear} />
        <CalcButton text='+/-' color='#9b9b9b' textColor='#000' onPress={positiveNegative} />
        <CalcButton text='del' color='#9b9b9b' textColor='#000' onPress={deleteNumber} />
        <CalcButton text='/' color='#ff9427' onPress={handleDivide} />
      </View>

      <View style={styles.row}>
        <CalcButton text='7' onPress={addNumber} />
        <CalcButton text='8' onPress={addNumber} />
        <CalcButton text='9' onPress={addNumber} />
        <CalcButton text='X' color='#ff9427' onPress={handleMultiply} />
      </View>
      
      <View style={styles.row}>
        <CalcButton text='4' onPress={addNumber} />
        <CalcButton text='5' onPress={addNumber} />
        <CalcButton text='6' onPress={addNumber} />
        <CalcButton text='-' color='#ff9427' onPress={handleSubstract} />
      </View>

      <View style={styles.row}>
        <CalcButton text='1' onPress={addNumber} />
        <CalcButton text='2' onPress={addNumber} />
        <CalcButton text='3' onPress={addNumber} />
        <CalcButton text='+' color='#ff9427' onPress={handleAdd} />
      </View>

      <View style={styles.row}>
        <CalcButton text='0' size='large' onPress={addNumber} />
        <CalcButton text='.' onPress={addNumber} />
        <CalcButton text='=' color='#ff9427' onPress={calculate} />
      </View>
    </View>
  )
};