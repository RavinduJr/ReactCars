import React from "react";
import classes from './Car.module.scss'

interface Props {
  carBrand: string;
  carYear: string;
  carName: string;
}

export default function Post(props: Props) {
  return (
    <div className={classes.cardContainer}>
      <div>
        <p>{props.carBrand}</p>
      </div>
      <div>
        <p>{props.carName}</p>
      </div>
      <div>
        <p>{props.carYear}</p>
      </div>
    </div>
  );
}
