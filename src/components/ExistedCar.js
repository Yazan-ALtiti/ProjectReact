import React from "react";

function ExistingCars({carData}) {
    return (<div id="Main-div">
        <h2>Existing Cars</h2>
        {/* الماب بتلف على العناصر وحده وحده وبتعطيهم اسم وانديكس */}
        {carData.map((car, index) => (
            <div key={index}>
                <h3>{car.carName}</h3>
                <p>{car.carPraic}</p>
                <img src={car.carImage} alt={car.carName} />
            </div>

        ))}













    </div>);
}

export default ExistingCars;