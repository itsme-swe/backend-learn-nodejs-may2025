import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Base Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/Test" element={<div>Login Page</div>} />
        </Routes>
      </BrowserRouter>

      <NavBar />

      <h1 class="text-3xl font-bold">Hello World!</h1>
    </>
  );
}

export default App;
