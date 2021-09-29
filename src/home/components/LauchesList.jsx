import React from "react";
import {Box} from "../../shared/components/Box";
import { parserFromUnixToLocalDate } from "../../services/parserDates";
import { v4 as uuidv4 } from 'uuid';
const LauchesList = ({ lauches,addFav }) =>
  lauches.map((lauche,i) => {
    return (
      <Box key={uuidv4()}>
        <img src={lauche.rocket.flickr_images[0]} alt="" />
        <h5>{lauche.mission_name}</h5>
        <p>{lauche.rocket.description}</p>
        <span>{parserFromUnixToLocalDate(lauche.launch_date_unix)}</span>
        <button onClick={()=>addFav(i)}>Fav</button>
      </Box>
    );
  });

export default LauchesList
