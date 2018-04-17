import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as TodoActions from 'store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View style={styles.container}>
    {
      todos.map(todo => (
        <View key={todo.id} style={{ flexDirection: 'row' }}>
          <Text>{todo.text}</Text>
          <TouchableOpacity
            onPress={() => { removeTodo(todo.id); }}
          >
            <Text> - Remover TODO</Text>
          </TouchableOpacity>
        </View>
      ))
    }
    <TouchableOpacity onPress={() => { addTodo('Fazer café novamente'); }}>
      <Text>Adicionar TODO</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
