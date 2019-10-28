import React from 'react';
import { Text } from 'react-native';
import { CardItem, Left, Body, Thumbnail } from 'native-base'
import { FEMALE_AVATAR } from '../../config/images';

const CardHeader = ({ avatar, name, nickname }) => {
    return(
        <CardItem>
            <Left>
                <Thumbnail source={{ avatar }} />
                <Body>
                    <Text>{ name }</Text>
                    <Text>{ nickname }</Text>
                </Body>
            </Left>
        </CardItem>
    );
}

export default CardHeader;