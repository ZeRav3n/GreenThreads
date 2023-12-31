import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

const Onboarding = ({ navigation }) => {
    return(
        <Block flex style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Block flex center>
                <ImageBackground
                    source={require('../assets/testimage1.png')}
                    style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
                />
            </Block>
            <Block flex space='between' style={styles.padded}>
                <Block flex space='around' style={{ zIndex: 2 }}>
                    <Block>
                        <Text color='white' size={60}>Green</Text>
                    </Block>
                    <Block row>
                        <Text color='white' size={60}>Threads</Text>
                    </Block>
                    <Block>
                    <Text size={16} color='rgba(255,255,255,0.6)'>
                        Your one stop to help the full community.
                    </Text>
            </Block>
            <Block center>
                <Button
                    shadowless
                    style={styles.button}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('App')}>
                    GET STARTED
                    </Button>
                    </Block>
                    </Block>
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        position: 'relative',
        bottom: theme.SIZES.BASE,
    },
    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
    },
});

export default Onboarding;