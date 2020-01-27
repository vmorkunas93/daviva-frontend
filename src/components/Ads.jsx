import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleAd from "./SingleAd";

const Ads = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios("/API/InformacijaTestui");
      setCars(cars => [...cars, res.data]);
    };
    fetchCars();
  }, []);

  const addCar = async () => {
    const res = await axios("/API/InformacijaTestui");
    setCars(cars => [...cars, res.data]);
  };

  return (
    <div>
      <div className="ads-container mt-3">
        {cars.map((car, i) => (
          <SingleAd key={i} car={car} />
        ))}
      </div>
      <button onClick={() => addCar()} className="btn btn-primary my-3">
        Pridėti
      </button>
    </div>
  );
};

export default Ads;
