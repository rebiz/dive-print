import React, {Component} from 'react';
import {connect} from 'react-redux';

import {TouchableOpacity} from 'react-native';

import {openDrawer, closeDrawer} from '../../actions/drawer';
import {setIndex} from '../../actions/list';
import {replaceRoute, replaceOrPushRoute} from '../../actions/route';

import {Container, Header, Footer, FooterTab, Title, Content, Text, Button, Icon, View} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route, index) {
    this.props.closeDrawer();
    this.props.setIndex(index);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme}>
        <Header>
          <Title>ДайвПринт</Title>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name='menu'/>
          </Button>
        </Header>

        <Content>
          <Grid style={{marginTop: 20}}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity style={styles.row} onPress={() => this.navigateTo('blankPage', i)}>
                  <Text style={styles.text}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </Row>
            )}

          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <View active>
              <Icon name='home' />
              <Text>Главная</Text>
            </View>
            <View>
              <Icon name='view-comfy' />
              <Text>Услуги</Text>
            </View>
            <View>
              <Icon name='monetization-on' />
              <Text>Цены</Text>
            </View>
            <View>
              <Icon name='mail-outline' />
              <Text>Контакты</Text>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: (route) => dispatch(replaceRoute(route)),
    replaceOrPushRoute: (route) => dispatch(replaceOrPushRoute(route)),
    setIndex: (index) => dispatch(setIndex(index))

  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list
  };
}

export default connect(mapStateToProps, bindAction)(Home);
