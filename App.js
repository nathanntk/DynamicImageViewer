// imports for image viewing, text viewing, and styling
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
// ButtonComponent.js used for TouchableOpacity in component creation
import ButtonComponent from './components/ButtonComponent';

const App = () => {
    const [currentImage, setCurrentImage] = useState(require('./assets/defaultImage.jpg'));

    const handleButtonClick = (buttonType) => {
        // button clicks change the current image to one clicked on
        switch (buttonType) {
            case 'Nature':
                setCurrentImage(require('./assets/natureImage.jpg'));
                break;
            case 'Seasons':
                setCurrentImage(require('./assets/seasonsImage.jpg'));
                break;
            case 'Animals':
                setCurrentImage(require('./assets/animalsImage.jpg'));
                break;
            default:
                setCurrentImage(require('./assets/defaultImage.jpg'));
        }
    };

    return (
        // create buttons with ButtonComponent, assign label, color, and button specification
        <View style={styles.container}>
            <ButtonComponent label="Nature" color="#3498db" onPress={() => handleButtonClick('Nature')} />
            <ButtonComponent label="Seasons" color="#2ecc71" onPress={() => handleButtonClick('Seasons')} />
            <ButtonComponent label="Animals" color="#e74c3c" onPress={() => handleButtonClick('Animals')} />
            <Image source={currentImage} style={styles.image} />
            <Text>Free stock images found at unsplash</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
        borderRadius: 10,
    },
});

export default App;
