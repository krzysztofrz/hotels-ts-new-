import React, { Component } from "react"; // musielismy zaimportowac Component
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
  hotels = [
    {
      id: 1,
      name: "Pod Akacjami",
      city: "Warszawa",
      rating: "8.3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
      image: "",
    },
    {
      id: 2,
      name: "Dębowy",
      city: "Kraków",
      rating: "8.8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
      image: "",
    },
  ];
  state = {
    hotels: this.hotels,
  };

  searchHandler = (term) => {
    console.log(term);
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ hotels });
  };

  render() {
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
