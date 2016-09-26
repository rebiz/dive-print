
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Icon, Text, List, ListItem } from 'native-base';

import styles from './style';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.setIndex(undefined);
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content style={styles.sidebar} >
                <List foregroundColor={'white'}>
                    <ListItem button onPress={() => this.navigateTo('home')} iconLeft={true}>
                        <Icon name='ios-home' />
                        <Text>Главная</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft={true}>
                        <Icon name='logo-instagram' />
                        <Text>Наши работы</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft={true}>
                        <Icon name='ios-keypad' />
                        <Text>Услуги</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft={true}>
                        <Icon name='ios-calculator' />
                        <Text>Калькулятор</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft={true}>
                        <Icon name='ios-call' />
                        <Text>Контакты</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: (route) => dispatch(replaceOrPushRoute(route)),
    setIndex: (index) => dispatch(setIndex(index))
  };
}

export default connect(null, bindAction)(SideBar);
