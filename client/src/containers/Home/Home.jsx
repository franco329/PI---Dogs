import React from "react";
import axios from "axios";
import "./Home.css";
import { Card } from "../../components/Card/Card";

export class Home extends React.Component {
  state = {
    breedData: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3001/breeds`)
      .then((res) => {
        const breedData = res.data;

        this.setState({
          breedData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { breedData } = this.state;

    return (
      <div className='pageBody'>
        <div className='container'>
          <Card breedData={breedData} />
        </div>
      </div>
    );
  }
}
