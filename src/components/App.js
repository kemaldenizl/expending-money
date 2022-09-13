import { Component } from "react";
import { Navi } from "./Navi";
import { Products } from "./Products";

export default class App extends Component {

  render () {
    return (
      <div>
        <Navi></Navi>
        <Products></Products>
      </div>
    )
  }
}

