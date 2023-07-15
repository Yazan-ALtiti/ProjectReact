import React, { useState } from "react";
import './App.css'


function NewCarForm({ onSubmit }) {
    const [carName, setCarName] = useState("")
    const [carPraic, setCarPraice] = useState("")
    const [carImage, steCarImage] = useState(null)
    const FormsubmitHandeler = (e) => {

        e.preventDefault()
        const newCar = {
            carName: carName,
            carPraic: carPraic,
            carImage: URL.createObjectURL(carImage)
        }
        onSubmit(newCar)
        setCarName("")
        setCarPraice("")
        steCarImage(null)


    }



    return (
        <div>
            <form onSubmit={FormsubmitHandeler}>
                <label>Please enter the car name</label>
                <input onChange={(e) => setCarName(e.target.value)} value={carName} type="text" />
                <br /> <br /> <br />
                <label>Please enter the  car Praic</label>
                <input onChange={(e) => setCarPraice(e.target.value)} value={carPraic} type="number" />
                <br /> <br /> <br />

                <label>Please enter the car Image</label>
                <input value={null} accept="image/*" onChange={(e) => steCarImage(e.target.files[0])} type="file" />
                <br /> <br /> <br />

                <button type="submit">Add New Car</button>

            </form>
        </div>);
}

export default NewCarForm;