import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcoming from "../components/upcoming/Upcoming";
import { latest, recommended, upcome } from "../DummyData";
import Trending from "../components/trending/Trending";


const HomePage = () => {
  const [ items, setItems] = useState(upcome)
  const [ item, setItem] = useState(latest)
  const [ rec, setIRec] = useState(recommended)
  return (
    <>
    <Homes />
    <Upcoming items={items} title='Upcoming Movies' />
    <Upcoming items={item} title='Latest Movies' />
    <Trending />
    <Upcoming items={rec} title='Recommended Movies' />
    </> 
  );
};

export default HomePage;
