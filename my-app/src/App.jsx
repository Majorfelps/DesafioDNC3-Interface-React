import React from "react";
import List from "./components/Lista/List";
import Nav  from "./components/navbar/Nav";
import './global.scss'
import Table from "./components/table/Table";


function App() {
  
  return (
    <div className="App" >
      <Nav />
      <Table />
    </div>
  );
}

export default App;
