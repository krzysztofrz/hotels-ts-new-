import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";

class Hotels extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty:</h2>
        {/* // wczesniej mielismy tu wyswietkone z reki dwa hotele // a teraz
        zrobimy sobie petle po naszych hotelach i bedziemy je wyswietlac */}
        {/* <Hotel />
        <Hotel /> */}
        {/* // napiszemy this.prosp. hotels bo spodziewamy sie takich propsow jak
        hotels, // wiemy ze to bedzie tablica wiec mozemy zrobic funkcje map i
        nastepnie wyrenderowac pojedynczy hotel // żeby przekazać pojedyncze
        parametry pojedynczego hotelu czyli obiektu ktory zawiera w sobie 6-7
        pól klucz wartosc to robimy ...hotels */}
        {this.props.hotels.map((hotel) => (
          <Hotel key={hotel.id} {...hotel} />
        ))}
        {/* // dodatkowo dodalimsy sobie id do key bo jak robimy mape to 
        // potrzebujemy klucza, a jak nie mamy to react nam wywala warningi */}
      </div>
    );
  }
}

export default Hotels;
