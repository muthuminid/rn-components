/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CheckBox, RadioButton } from './src/components';

class App extends Component {
  data = [
    {
      label: 'Value One',
      value: 'valueOne'
    },
    {
      label: 'Value Two',
      value: 'valueTwo'
    },
    {
      label: 'Value Three',
      value: 'valueThree'
    }
  ]

  state = {
    radio: '',
    checkbox: []
  }

  handleRadioButton = (value: any) => {
    this.setState({radio: value})
  }

  handleCheckBox = (value: any) => {
    this.setState({checkbox: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{borderBottomWidth: 2}}>
          <Text style={{fontSize: 20, margin: 10}}>Radio Group</Text>
          <RadioButton data={this.data} onSelect={this.handleRadioButton} styling={{ color: 'blue', size: 30 }}/>
        </View>
        <View>
          <Text style={{fontSize: 20, margin: 10}}>Checkbox group</Text>
          <CheckBox data={this.data} onChecked={this.handleCheckBox} styling={{ color: 'blue', size: 30 }}/>
        </View>
        <View>
          <Text>
            {this.state.radio}
            {this.state.checkbox}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;