import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import 'configs/reactotron';
import store from 'store';
import TodoList from 'pages/TodoList';

const App = () => (
  <Provider store={store} >
    <TodoList />
  </Provider>
);

export default App;
