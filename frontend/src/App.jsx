import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/bikes")
      .then((response) => {
        setBikes(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    // .finally(function () {
    //   // always executed
    // });
  });

  return (
    <>
      <h1>Full Stack Basic App</h1>
      <p>BIKES: {bikes.length}</p>

      {bikes.map((bike) => (
        <div key={bike.id} className="bike">
          <p className="id">{bike.id}</p>
          <h3>{bike.title}</h3>
          <p>{bike.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
