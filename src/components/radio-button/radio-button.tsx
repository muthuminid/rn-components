import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';

const RadioButton = (props: any) => {
  const [ radio, setRadio ] = useState('');

  const select = (value: any) => {
    setRadio(value);
    props.onSelect(value);
  }

  const { buttonContainer } = styles;

  return (
    <View>
      {
        props.data.map((q: any) => {
          return(
            <View key={q.label}>
              <TouchableOpacity
                style={buttonContainer}
                onPress={() => select(q.value)}
              >
                <Icon
                  size={props.styling.size}
                  color={props.styling.color}
                  name={ radio === q.value ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                />
                <Text style={{marginLeft: 10, marginTop: 2, fontSize: props.styling.size - 10}}>{q.label}</Text>
              </TouchableOpacity>    
            </View>
          )
        })
      }
    </View>
  )
}

export default RadioButton;