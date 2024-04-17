import React, {useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Router} from './src/navigation/RootNavigation';
import {AppState} from 'react-native';
import {checkToken} from './src/api/user';

function App(): React.JSX.Element {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await checkToken();
        }

        appState.current = nextAppState;
      },
    );
    checkToken();

    return () => subscription.remove();
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
