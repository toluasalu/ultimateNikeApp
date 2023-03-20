import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/index';
import { Provider} from "react-redux";

import { store } from "./src/store/index";

export default function App() {

  

  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}


