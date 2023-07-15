import React, { useState } from "react";
import ExistingCars from "./components/ExistedCar";
import mercedes from './assets/mercedes.jpg'
import audi from './assets/audi.jpg'
import hummer from './assets/hummer.jpg'
import kia from './assets/Kia.jpg'
import './components/App.css'
import NewCarForm from "./components/NewCarForm";



function App() {
  const [carsData, setCarData] = useState([
    { carName: "Marcedece", carPraic: 22000, carImage: mercedes, },
    { carName: "audi", carPraic: 20000, carImage: audi, },
    { carName: "hummer", carPraic: 11000, carImage: hummer },
    { carName: "kia", carPraic: 15000, carImage: kia, }

  ])

  const handelrCarSubmit = (newCar) => {
    setCarData([...carsData, newCar])
  }

  return (
    <div className="App">
      <NewCarForm onSubmit={handelrCarSubmit} />
      <ExistingCars carData={carsData} />




    </div>
  );
}

export default App;
