import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";








const Body = () => {

    const[searchText, setSearchText] = useState("");
    //Local State variable   -- Super Powerful variable
    const [ResList,setResList] = useState([]);
    const [FilterResList,setFilterResList] = useState([]);
    //Normal JS Variable
    // let ResList = [
    //     {data : {
    //         id:"1",
    //         name: "Domi",
    //         cuisines:["Bug","Bir","chomt"],
    //         costForTwo:4000,
    //         deliveryTime:36,
    //         avgRating: "4.5",
    //     }},
    //     {data : {
    //         id:"2",
    //         name: "KFC",
    //         cuisines:["Bug","Bir","chomt"],
    //         costForTwo:4000,
    //         deliveryTime:36,
    //         avgRating: "2.0",
    //     }},
    //     {data : {
    //         id:"3",
    //         name: "MCD",
    //         cuisines:["Bug","Bir","chomt"],
    //         costForTwo:4000,
    //         deliveryTime:36,
    //         avgRating: "4.5",
    //     }}
    
    // ];
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49676121688314&lng=80.268790461123&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(ResList == 0){
    //     return <Shimmer/>;
    // }

    return ResList == 0 ? (
        <Shimmer/> ) : (
        <div className="body">
        <div className="filter">
            <div className="search">
            <input 
            type="text" 
            className="search-box"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button onClick={() => {
            const filteredRes = ResList.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
                );
                setFilterResList(filteredRes);
            console.log(searchText);
            }}
            >
                Search</button>
            </div>
            <button className="filter-btn" 
                    onClick={() => {
                                const filteredlist = ResList.filter(
                                    (res) => res.info.avgRating > 4.3
                                );
                                setResList(filteredlist);
                                }}>
                Top-Rated Restaurants
            </button>
        </div>
        <div className="res-container"> 
        {FilterResList.map((rest) => (
            <ResCard key={rest.info.id} resData = {rest}/>
        ))}
        
        </div>
        </div>
    );
};

export default Body;