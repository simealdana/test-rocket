import React from "react";
import { TabContainer, TabItem } from "../../shared/components/Tab";

const Tab = ({handleFav})=>(
    <TabContainer>
        <TabItem onClick={()=>handleFav(false)}>All</TabItem>
        <TabItem onClick={()=>handleFav(true)}>Fav</TabItem>
    </TabContainer>
);

export default Tab;