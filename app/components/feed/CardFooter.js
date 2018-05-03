import React from 'react';
import { CardItem, Left, Right, Icon, Button, Text} from 'native-base'

const CardFooter = ({ reactions, postTime }) => {
    return(
        <CardItem>
            <Left>
                <Button transparent
                    onPress={ () => this.props.navigation.navigate('PostScreen') }
                >
                <Icon active name="emoji-sad" />
                <Text>{ reactions } reações</Text>
                </Button>
            </Left>
            <Right>
                <Text>{ postTime } horas atrás</Text>
            </Right>
        </CardItem>
    );
}

export default CardFooter;