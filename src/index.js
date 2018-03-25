import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import 'configs/reactotron';
import store from 'store';

const App = () => (
  <Provider store={store} >
    <View />
  </Provider>
);

export default App;
