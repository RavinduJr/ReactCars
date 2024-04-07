import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./AddCar.module.scss";
import CarModel from "../models/CarModel";

interface Props {
  addPost: (post: CarModel) => void;
  closeModalHandler: () => void;
}

export default function AddProduct(props: Props) {
  const [carName, setCarName] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carBrand, setCarBrand] = useState("");

  const carNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCarName(event.target.value);
  };

  const carYearHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCarYear(event.target.value);
  };

  const carBrandHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCarBrand(event.target.value);
  };

  const onsubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postBody: CarModel = {
      carName: carName,
      carYear: carYear,
      carBrand: carBrand,
    };
    props.addPost(postBody);
  };

  return (
    <>
      <div className={classes.container} onClick={props.closeModalHandler} />
      <dialog open className={classes.cardContainer}>
        <form onSubmit={onsubmitHandler}>
          <p>Car Name</p>
          <input type="text" onChange={carNameHandler} />
          <p>Car Year</p>
          <input type="text" onChange={carYearHandler} />
          <p>Car Brand</p>
          <input type="text" onChange={carBrandHandler} />
          <button type="submit">Ok</button>
        </form>
      </dialog>
    </>
  );
}
