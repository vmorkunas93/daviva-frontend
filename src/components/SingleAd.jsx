import React from "react";
import { Carousel } from "react-bootstrap";

const SingleAd = props => {
  return (
    <div className="card shadow-sm">
      {/* <img src={props.car.nuotraukos[0]} className="card-img-top" alt="..." /> */}
      <Carousel indicators={false} interval={null}>
        {props.car.nuotraukos.map((pic, i) => (
          <Carousel.Item>
            <img className="d-block w-100" src={pic} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="card-body">
        <h5 className="card-title">{props.car.marke}</h5>
        <p className="card-text my-0">Modelis: {props.car.modelis},</p>
        <p className="card-text mt-0">Metai: {props.car.metai}</p>
        <p className="card-text price">{props.car.kaina} &euro;</p>
      </div>
    </div>
  );
};

export default SingleAd;
