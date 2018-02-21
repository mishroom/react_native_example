import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, StyleSheet, View } from 'react-native';
import VideoListEntry from './VideoListEntry.js'

export default class VideoList extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <ScrollView>
      	<View style={{paddingVertical:20}}>
        {this.props.videos.map((video) =>
		      <VideoListEntry
		        key={video.etag}
		        video={video}
		        handleVideoListEntryTitleClick={this.props.handleVideoListEntryTitleClick}
		      />
		    )}
		    </View>
      </ScrollView>
      )
    }
  }
  // style={{flex: 3}}