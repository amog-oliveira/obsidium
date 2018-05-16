import React from 'react';
import { View, Text } from 'react-native';
import { CardItem } from 'native-base'
import { styles } from './styles'

const CardMessage = ({ text }) => {
    return(
        <CardItem cardBody>
            <View style={styles.PostView}>
                <Text style={styles.text}>
                    <Text>{ text }</Text>
                </Text>
            </View>
        </CardItem>
    );
}

export default CardMessage;