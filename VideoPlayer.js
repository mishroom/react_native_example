import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';
export default class VideoPlayer extends Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log("PROPS IN VPLAYER", this.props.video);
		return (
			<View style={{flex: 2}}>
				<Text> {this.props.video.snippet.title}</Text>
				<WebView
					source={{uri: `https://www.youtube.com/embed/${this.props.video.id.videoId}`}}
	        style={{marginTop:0}}/>
	      <Text> {this.props.video.snippet.description} </Text>
			</View>
		)
	}

}

