// imports for button creation, text viewing, and styling
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// initialization of button component 
const ButtonComponent = ({ label, onPress, color }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ButtonComponent;
