import { Route } from "react-router-dom";
import { useEffect } from "react";
import { getAll } from "./services/breedsBack";
import { useDispatch } from "react-redux";
import { initBreeds } from "./redux/actions";

import LandingPage from "./react/components/LandingPage";
import NavBar from "./react/components/Navbar";
import Home from "./react/components/Home";
import Form from "./react/components/Form";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAll().then((data) => {
      dispatch(initBreeds(data));
    });
  }, [dispatch]);

  return (
    <>
      <section className='landing-page'>
        <Route exact path='/' component={LandingPage} />
      </section>
      <section>
        <Route path='/home' component={NavBar} />
        <Route exact path='/home' component={Home} />
      </section>
      <section>
        <Route exact path='/home/form' component={Form} />
      </section>
    </>
  );
};

export default App;
