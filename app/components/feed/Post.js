import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Button, Icon, Right } from 'native-base'
import { styles } from './styles';
import { FEMALE_AVATAR } from '../../config/images';

const Post = (props) => {
    return(
        <Container>
            <Content>
                <Card cardDefaultBg={} style={ styles.CardView }>
                    <CardItem>
                        <Left>
                            <Thumbnail source={ FEMALE_AVATAR }/>
                            <Body>
                                <Text>Amanda Oliveira</Text>
                                <Text>AMOG</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <View style={styles.PostView}>
                            <Text>Minha Denúncia</Text>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name='thumbs-down' />
                                <Text>10 curtidas</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Text>12 horas atrás</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

export default Post;