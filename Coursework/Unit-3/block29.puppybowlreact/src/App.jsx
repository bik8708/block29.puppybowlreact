import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import SinglePlayerPage from "./components/SinglePlayerPage";

function App() {
  return (
    <>
      <div id="container">
        <h1> 2025 Puppy Bowl (React Edition)</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/players/:id" element={<SinglePlayerPage />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
