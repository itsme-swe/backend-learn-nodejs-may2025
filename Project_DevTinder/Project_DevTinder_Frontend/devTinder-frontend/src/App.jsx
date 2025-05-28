import Body from "./Body";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      <h1 class="text-3xl font-bold"></h1>
    </>
  );
}

export default App;
