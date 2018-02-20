import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import VideoListEntry from './VideoListEntry.js'

export default class VideoList extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <View style={{flex: 3}}>
        <Text> Video List here </Text>
        {this.props.videos.map((video) =>
		      <VideoListEntry
		        key={video.etag}
		        video={video}
		      />
		    )}
      </View>
      )
    }
  }