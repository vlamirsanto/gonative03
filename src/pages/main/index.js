import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from 'store/actions/favorites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  }

  state = {
    repoNameInput: '',
  }

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }

  addRepository = () => {
    if (!this.state.repoNameInput.length) return;

    this.props.addFavoriteRequest(this.state.repoNameInput);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>GitMark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos
          </Text>

          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              placeholder="Usuário/Repositório"
              underlineColorAndroid="transparent"
              style={styles.input}
              autoCorrect={false}
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            />
            <TouchableOpacity
              onPress={this.addRepository}
              style={styles.button}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus favoritos ({ this.props.favoritesCount })</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.length,
});
const mapDispacthToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispacthToProps)(Main);
