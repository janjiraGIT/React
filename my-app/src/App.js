import React, { useState } from 'react';
import Header from "./components/Header"
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import jokesData from "./components/jokesData"
import Joke from "./components/Joke"
import "./App.css";

import Product from "./components/Product"
import productsList from "./components/productList"

function App() {

  const jokeComponents = jokesData.map(joke => {
    return (
      <Joke 
      question={joke.question} 
      punchLine={joke.punchLine} 
      />
    )
  })

  const productComponents = productsList.map(item =>  <Product key={item.id} product={item} /> )

  return (

    <div className="app">
      <Header />
      <MainContent />
      <Footer />
      <TodoItem />
      <TodoItem />
      {jokeComponents}
      {productComponents}
      <ContactCard
        contact={{
          name: "Mr.Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(46) 555-61482",
          email: "kitty@hotmail.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Mr. Fluffykins",
          imgUrl: "http://placekitten.com/300/300",
          phone: "(46) 515-61482",
          email: "kitty@gmail.com"
        }}


      />
    </div>
  );
}

export default App;