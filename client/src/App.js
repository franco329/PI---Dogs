import { Route } from "react-router-dom";
import { useEffect } from "react";
import { getAll } from "./services/breedsBack";
import { useDispatch } from "react-redux";
import { initBreeds } from "./redux/actions";

import "./react/styles/LandingPage.css";
import { LandingPage } from "./react/components/LandingPage";
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
    <section>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/home/form' component={Form} />
    </section>
  );
};

export default App;
