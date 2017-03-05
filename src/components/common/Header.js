// import libraries for making a component

import React from 'react';
import {Text, View} from 'react-native';


// make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent : 'center',
        alignItems     : 'center',
        height         : 60,
        shadowColor    : '#000',
        shadowOffset   : {width: 0, height: 2},
        shadowOpacity  : 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


// make the component available to the other parts of the app

export { Header };