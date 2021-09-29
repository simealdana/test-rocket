import React from "react";

const InputSearch = ({search})=>{
    const handleSudmit = (event)=>{
        event.preventDefault()
        search(event.target.search.value);
    }
    return(
        <form onSubmit={(event)=>handleSudmit(event)}>
            <button type="submit" >search</button>
            <input type="text" id="search" />
        </form>
    )
};

export default InputSearch;