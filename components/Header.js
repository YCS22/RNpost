import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


//header component for screens
const Header = ({ text }) => {
    return (
        <View style={styles.View}>
            <Text style={styles.Text}>{text}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: 'white',
        marginBottom: 5
    },
    View: {
        height: 50,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        shadowOpacity: 0.3,
        backgroundColor: "#16082f"
    }
})



export default Header;