import { Provider } from "react-redux";
import store from "./src/redux/store";
import Inicio from "./src/screens/inicio";
import Peliculas from "./src/screens/peliculas";
import Series from "./src/screens/series";


export default function App() {

  return (
    <Provider store={store}>
      <Peliculas/>
    </Provider>
  );
}