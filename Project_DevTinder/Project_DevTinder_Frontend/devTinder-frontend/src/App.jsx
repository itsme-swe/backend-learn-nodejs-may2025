import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Requests from "./components/Request";
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
              <Route path="/connections/matches" element={<Connections />} />
              <Route path="/user/request/received" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      <h1 className="text-3xl font-bold"></h1>
    </>
  );
}

export default App;
