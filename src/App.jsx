import InitPage from "./pages/InitPage";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
    </Routes>
  );
}

export default App;
