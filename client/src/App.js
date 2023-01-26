import { Route } from "react-router-dom";
import { LandingPage } from "./containers/LandingPage/LandingPage";
import { NavBar } from "./containers/Navbar/NavBar";
import { Home } from "./containers/Home/Home";
import "./app.css";
import { Form } from "./components/Form/Form";
import { BreedDetail } from "./containers/BreedDetail/BreedDetail";

const App = () => {
  return (
    <>
      <div className='landing'>
        <Route exact path='/' component={LandingPage} />
      </div>
      <div className='all'>
        <div className='navbar'>
          <Route path='/home' component={NavBar} />
        </div>
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/form' component={Form} />
        <Route exact path='/home/detail/:id' component={BreedDetail} />
      </div>
    </>
  );
};

export default App;
