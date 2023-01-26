import axios from "axios";
import React from "react";
import CardDetail from "../../components/Card/CardDetail";

export class BreedDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breedData: [],
    };
  }

  componentDidMount() {
    //peticion axios
    const { match } = this.props;
    const breedId = match.params.id;
    axios
      .get(`http://localhost:3001/breeds/${breedId}`)
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
      <>
        <CardDetail detail={breedData} />
      </>
    );
  }
}
