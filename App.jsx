import Home from "./components/pages/home";
import One from "./components/pages/one";
import Three from "./components/pages/three";
import Two from "./components/pages/two";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<One />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
