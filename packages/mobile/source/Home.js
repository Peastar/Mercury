import React from 'react';
import {
    ImageBackground,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Home = () => (
    <View style={styles.container}>
        <ImageBackground
            source={require('./images/peastar2019.jpg')}
            style={styles.image}>
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default Home;
