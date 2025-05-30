import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      <h1 className="text-3xl font-bold"></h1>
    </>
  );
}

export default App;
