import React from "react";
import './App.css';
import {useEffect, useState } from 'react';

function StarShipInfo (props) {
    if(props == "notSelected"){
        return
    }
    else {
    return (
        <div>
            <p class = "episodeAndDate">{props.item.model}</p>
            <p class = "episodeAndDate">{props.item.manufacturer}</p>
            <p class = "episodeAndDate">{props.item.crew}</p>
            <p class = "episodeAndDate">{props.item.passengers}</p>
        </div>
    );
    }
}

export default function Starship(props) {
    const [selectedStarship, selectStraship] = useState("notSelected");
    const [starshipsInfo, setStarshipsInfo] = useState([]);
    const [fetched, setFetched] = useState(false);
    useEffect(() =>{
        fetchStarshipsInfo();
    }, []);
    // const starships_mock =
    // [
    //     {
    //    "name": "StarShip #1",
    //    "model": "Model #1",
    //    "manufacturer": "Manufacturer #1",
    //    "crew": "Crew #1",
    //    "passengers": "Passengers #1"
    //     },
    //     {
    //    "name": "StarShip #2",
    //    "model": "Model #2",
    //    "manufacturer": "Manufacturer #2",
    //    "crew": "Crew #2",
    //    "passengers": "Passengers #2"
    //     },
    //     {
    //    "name": "StarShip #3",
    //    "model": "Model #3",
    //    "manufacturer": "Manufacturer #3",
    //    "crew": "Crew #3",
    //    "passengers": "Passengers #3"
    //     },
    //     {
    //    "name": "StarShip #4",
    //    "model": "Model #4",
    //    "manufacturer": "Manufacturer #4",
    //    "crew": "Crew #4",
    //    "passengers": "Passengers #4"
    //     },
    //     {
    //    "name": "StarShip #5",
    //    "model": "Model #5",
    //    "manufacturer": "Manufacturer #5",
    //    "crew": "Crew #5",
    //    "passengers": "Passengers #5"
    //     },
    //     {
    //    "name": "StarShip #6",
    //    "model": "Model #6",
    //    "manufacturer": "Manufacturer #6",
    //    "crew": "Crew #6",
    //    "passengers": "Passengers #6"
    //     },
    //     {
    //    "name": "StarShip #7",
    //    "model": "Model #7",
    //    "manufacturer": "Manufacturer #7",
    //    "crew": "Crew #7",
    //    "passengers": "Passengers #7"
    //     },
    //    ]

    async function fetchStarshipsInfo(){
        for(let i = 0; i < props.starshipsURLs.length; i++){
            console.log(props.starshipsURLs[i])
            let response = await fetch(props.starshipsURLs[i]);
            let jsonInfo = await response.json();
            var starship = {
                name : jsonInfo.name,
                model : jsonInfo.model,
                manufacturer : jsonInfo.manufacturer,
                crew : jsonInfo.crew,
                passengers : jsonInfo.passengers,
            };
            starshipsInfo.push(starship);
            setStarshipsInfo(starshipsInfo);
        }
        setFetched(true)
    }

    if (fetched) {

       return (
        <div class="container" id="bodyDiv">
        <div class="header">
            <h1 id="header">STAR SHIPS</h1>
        </div>
        <div id="mainDiv"> {
        // starships_mock && starships_mock.map(m =>
        //     <div class="starship_div">
        //     {/* <p class ="movietitle" onClick={() => props.selectStraship(props.item) }>{m.name}</p> */}
        //     <p class ="movietitle" >{m.name}</p> 
        //     <StarShipInfo item={m}/>
        // </div> )
    starshipsInfo.map( (m) =>
    <div class="starship_div">
        <button class ="movietitle" onClick={() => selectStraship(m)}>{m.name}</button>
    </div>
    

    )
        }
    <StarShipInfo item={selectedStarship}/>

        
        </div>
        <button class="home" onClick={() => props.set(0)} >home</button>
    </div>

    );
    }

}
