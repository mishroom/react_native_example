import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';
export default class VideoPlayer extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={{paddingVertical:20, flex: 1, }}>
				<View style={{alignItems: 'center'}}>
					<Text 
						style={{fontWeight: 'bold', fontSize: 20}}
					> {this.props.video.snippet.title}</Text>
				</View>
				<WebView
					source={{uri: `https://www.youtube.com/embed/${this.props.video.id.videoId}`}}
	        style={{marginTop:0}}/>
	      <Text> {this.props.video.snippet.description} </Text>
			</View>
		)
	}

}

 // style={{flex: 2}}