import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const Post = ({title, id, body}) => {
    return (
        <View style={postStyle.postContainer}>
            <Text style={postStyle.title}>{title} ({id})</Text>
            <Text style={postStyle.body}>{body}</Text>
        </View>
    );
}

const postStyle = StyleSheet.create({  
    postContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
    },
    title: {
        fontSize: 25,
        fontFamily: 'serif',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    body: {
        fontSize: 20,
        fontFamily: 'serif',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default Post;
