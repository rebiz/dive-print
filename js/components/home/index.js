import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openDrawer, closeDrawer} from '../../actions/drawer';
import {setIndex} from '../../actions/list';
import {replaceRoute, replaceOrPushRoute} from '../../actions/route';

import {Container, Header, Footer, FooterTab, Title, Content, Button, Icon, View} from 'native-base';
import {List, ListItem, Thumbnail, Text} from 'native-base';
import myTheme from '../../themes/base-theme';

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
            <Icon name='ios-menu'/>
          </Button>
        </Header>
        <Content>
        <List>
          <ListItem>
            <Thumbnail square size={80} source={require('../../../images/blackwhite.jpg')} />
            <Text style={{color: '#000'}}> Черно-белое копирование и печать</Text>
            <Text note>Профессионально, оперативно, качественно и копируем черно-белые документы!</Text>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../../../images/color.jpg')} />
            <Text style={{color: '#000'}}>Цветное копирование и цветная печать</Text>
            <Text note>У нас Вам быстро и по доступной цене сделают цветные копии документов</Text>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../../../images/pereplet.jpg')} />
            <Text style={{color: '#000'}}>Брошюровка и переплет</Text>
            <Text note>Твердый и мягкий переплет книг, дипломных проектов и диссертаций</Text>
          </ListItem>
        </List>
        </Content>
        <Footer>
          <FooterTab>
            <View active>
              <Icon name='ios-home' />
            </View>
            <View>
              <Icon name='logo-instagram' />
            </View>
            <View>
              <Icon name='ios-keypad' />
            </View>
            <View>
              <Icon name='ios-calculator' />
            </View>
            <View>
              <Icon name='ios-call' />
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
