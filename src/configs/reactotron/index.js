/**
 * Configuração do Reactotron para fins de debug
 *
 * @author Dot.Lib <vlamir.santo@dotlib.com.br>
 * @since 23/02/2018
 */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear(); // Limpa a tela do Reactotron a cada reload

  console.tron = tron;
}
