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
      <View style={{flex: 1}}>
        <Text>
          Enter Search Here:
        </Text>
      	<TextInput
        style={{height: 70, borderColor: 'black', borderWidth: 2}}
        onChange={(text)=> {console.log("butt"); this.setState({query: text})}}
        value={this.state.query}
      />
      <Button
        onPress={this.onSearch}
        title="Search Video"
        color="#FF0000"
      />
      </View>
    )
  }
}

