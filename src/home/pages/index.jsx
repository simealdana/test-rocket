import React, { useState, useEffect, Fragment } from "react";
import { WrapBox,Main,WrapContainer } from "../../shared/components/Box";
import { Getdata } from "../../services/getData";
import LauchesList from "../components/LauchesList";
import { SortDatabyWord } from "../../services/SortData";
import Tab from '../components/Tab';
import InputSearch from '../components/InputSearch';

const url = "https://api.spacexdata.com";
const Home = () => {

  const [lauches, setLauches] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [favs, setFavs] = useState([]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    handleGetLauches();
  }, []);

  const handleGetLauches = async () => {
    const data = await Getdata(`${url}/v3/launches`);
    const rockets = await Getdata(`${url}/v3/rockets`);
    data.map((lauche) => {
      lauche.rocket = rockets.find(
        (r) => r.rocket_id === lauche.rocket.rocket_id
      );
      return lauche;
    });
    setLauches(data);
  };

  const handleSearchLauches = (word) => {
    const data = isFav ? favs : lauches;
    const filters = SortDatabyWord(data, word);
    setfilterData([...filters]);
  };

  const handleAddFav = (index) => {
    const newfav = lauches[index];
    const newFavs = [newfav];
    const response = favs.concat(newFavs);
    setFavs(response);
  };

  const handleChangeFav = (value)=>{
    setIsFav(value);
  }

  return (
    <Fragment>
      <Main>
        <InputSearch search={handleSearchLauches}/>
        <Tab handleFav={handleChangeFav}/>
        <WrapContainer>
          <WrapBox>
            <LauchesList
              lauches={isFav ? favs : filterData.length > 0 ? filterData : lauches}
              addFav={handleAddFav}
            />
          </WrapBox>
        </WrapContainer>
        
      </Main>
    </Fragment>
  );
};

export default Home;
