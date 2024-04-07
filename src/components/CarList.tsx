import React, { useEffect, useState } from "react";
import Post from "./Car";
import PostModel from "../models/CarModel";
import AddCar from "./AddCar";
import CarModel from "../models/CarModel";

export default function PostList() {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [modalVisible, setModalVisible] = useState(true);

  const addPostsToList = (car: PostModel) => {
    // we use this form because to get the correct timely state even if its manipulated concurrently (lesson 32 4:00 minute)
    // setPosts([post, ...cars])
    setCars((existingCars) => [car, ...existingCars]);
  };

  const closeModalHandler = () => {
    console.log("Pressed")
    setModalVisible(false)
  }

  return (
    <div>
      <div></div>
      {modalVisible && (
        <div>
          <AddCar addPost={addPostsToList} closeModalHandler={closeModalHandler} />
        </div>
      )}
      <div>
        {cars &&
          cars.length > 0 &&
          cars.map((car) => {
            console.log(car);
            return (
              <Post
                key={`${car.carBrand}${Math.random().toString()}`}
                carBrand={car.carBrand}
                carName={car.carName}
                carYear={car.carYear}
              />
            );
          })}
      </div>
    </div>
  );
}
