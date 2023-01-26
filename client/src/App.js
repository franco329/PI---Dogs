import { Route } from "react-router-dom";
import { LandingPage } from "./containers/LandingPage/LandingPage";
import { NavBar } from "./containers/Navbar/NavBar";
import { Home } from "./containers/Home/Home";
import { Form } from "./components/Form/Form";
import { BreedDetail } from "./containers/BreedDetail/BreedDetail";
import { Buttons } from "./components/Buttons/Buttons";

const App = () => {
  return (
    <>
      <Route exact path='/' component={LandingPage} />

      <div className='App'>
        <Route path='/home' component={NavBar} />
        <Route exact path='/home' component={Buttons} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/form' component={Form} />
        <Route exact path='/home/detail/:id' component={BreedDetail} />
      </div>
    </>
  );
};

export default App;
