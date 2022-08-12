import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ArrayList from "./ArrayList";
import Clock from "./Clock";

//Authorization: Client-ID COh5PEARHEumGgWoVkufNBI82-S_0KgGB68zkP6W4ks

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID COh5PEARHEumGgWoVkufNBI82-S_0KgGB68zkP6W4ks",
      },
      params: {
        query: term,
        per_page: 50,
      },
    });
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <SearchBar onSubmit={this.onSearchSubmit} label="Search Picture" />
        <ImageList images={this.state.images} />
        <ArrayList />
        <Clock />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
