import React, { Component } from "react"; // musielismy zaimportowac Component
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";

// przerobimy ten komponent funkcyjny App na klasowy
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Menu />
//       <Hotels />
//     </div>
//   );
// }

class App extends Component {
  //    tworzymy state ale bez konstrukotra, bo poza stanem w tym konstruktorze nic nie robie
  //    normalnie byłyb taki zapis w kompnenice klasowym:

  //      constructor(props) {
  //        super(props);
  //        this.state = {

  //    a to jest ponizje zapis skrocony
  state = {
    hotels: [
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
    ],
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        {/* // musimy teraz ten stan przekazac do komponentu hotels, a wiec tworzymy sobie jakas wartosc np hotels i wrzucamy tam stat
        // niemal wszedzie gdzie mamy komponety klasowe uzycie propsow, musimy uzyc slowa kluczowego this */}
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
