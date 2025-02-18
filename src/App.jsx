import {useState} from "react";

import MainPage from "./pages/mainPage";

import {Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
