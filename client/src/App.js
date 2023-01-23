import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/Homepage/Homepage";
import CreateDog from "./pages/CreateDog/CreateDog";
import DetailsDog from "./pages/DetailsDog/DetailsDog";

function App() {
  return (
    <BrowserRouter>
      <Route index element={<LandingPage />} />
      <Route path='/' element={<NavBar />}>
        <Route path='home' element={<HomePage />} />
        <Route path='create' element={<CreateDog />} />
        <Route path='details/:id' element={<DetailsDog />} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
