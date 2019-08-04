import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CheckBox = (props: any) => {

  const [ checkbox, setCheckbox ] = useState([]);


  const handleCheckBox = (value: any) => {
    setCheckbox((m: any) => {
      if (m.includes(value)) {
        return (m.reduce((p: any, c: any) => (c !== value && p.push(c),p),[]))
      } else {
        return m.concat(value)
      }
    });
  }

  useEffect(() => {
    props.onChecked(checkbox);
  }, [checkbox]);

  const { buttonContainer } = styles;

  return(
    <View>
      {
        props.data.map((q: any) => {
          return(
            <TouchableOpacity  style={buttonContainer} key={q.value} onPress={() => handleCheckBox(q.value)}>
              <Icon
                size={props.styling.size}
                color={props.styling.color}
                name={ checkbox.includes(q.value) ? 'check-box' : 'check-box-outline-blank'}
              />
              <Text style={{marginLeft: 10, marginTop: 2, fontSize: props.styling.size - 10}}> {q.label} </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default CheckBox;