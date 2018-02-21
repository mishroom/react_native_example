import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch () {
    Alert.alert('Button Pressed', 'Build search function lol');
  }
  render() {
    return (
      <View >
        <Text>
          Enter Search Here:
        </Text>
        <View  style={{flexDirection: 'row'}}>
          <View  style={{width: 390, height: 40}}>
          	<TextInput
            style={{height: 35, borderColor: 'black', borderWidth: 2}}
            onChange={(text)=> this.setState({query: text})}
            value={this.state.query}
            />
        </View>
        <View  style={{width: 80, height: 40}}>
          <Button
            onPress={this.onSearch}
            title="Search"
            color="#FF0000"
          />
        </View>
      </View>
      </View>
    )
  }
}
 // style={{flex: 1}}
