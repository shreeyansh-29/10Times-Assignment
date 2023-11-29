import store from "./redux/store";
import Route from "./routes/route";
import {Provider} from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
