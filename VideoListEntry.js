import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
export default class VideoListEntry extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableWithoutFeedback  onPress={()=> this.props.handleVideoListEntryTitleClick(this.props.video)}>
				<View style={{flexDirection: 'row'}}>
					<View style={{width: 160, height: 120}}>
						<Image 
							style={{width: 160, height: 120}}
							source={{uri: this.props.video.snippet.thumbnails.default.url}} />
					</View>
					<View style={{width: 280, height: 120}}>
						<View style={{alignItems: 'center'}}>
							<Text style={{fontWeight: 'bold', fontSize: 15}}> {this.props.video.snippet.title} </Text>
						</View>
						<Text> {this.props.video.snippet.description} </Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
			)
	}
}