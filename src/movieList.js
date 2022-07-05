import React from "react";
import './App.css';
import { useState, useEffect } from 'react';
var movieURLs = ["https://swapi.dev/api/films/4", 
"https://swapi.dev/api/films/5", 
"https://swapi.dev/api/films/6", 
"https://swapi.dev/api/films/1", 
"https://swapi.dev/api/films/2", 
"https://swapi.dev/api/films/3"];



export default function Movielist(props) {
    // const movies = [
    //     {
    //        "title": "Movie #1",
    //        "episode_id": 1,
    //        "release_date": "1980-01-01"
    //     },
    //     {
    //        "title": "Movie #2",
    //        "episode_id": 2,
    //        "release_date": "1980-01-01"
    //     },
    //     {
    //        "title": "Movie #3",
    //        "episode_id": 3,
    //        "release_date": "1980-03-03"
    //     },
    //     {
    //        "title": "Movie #4",
    //        "episode_id": 4,
    //        "release_date": "1980-04-04"
    //     },
    //     {
    //        "title": "Movie #5",
    //        "episode_id": 5,
    //        "release_date": "1980-05-05"
    //     },
    //     {
    //        "title": "Movie #6",
    //        "episode_id": 6,
    //        "release_date": "1980-06-06"
    //     },
    //    ]
    const [fetched, setFetched] = useState(false);
    const [moviesInfo, setMoviesInfo] = useState([]);
 
    useEffect(() =>{
        fetchMoviesInfo();
    }, [])

    async function fetchMoviesInfo(){
        for(let i = 0; i < 6; i++){
            let response = await fetch(movieURLs[i]);
            let jsonInfo = await response.json();
            console.log(i, jsonInfo.title);
            var movie = {
                title : jsonInfo.title,
                episodeID : jsonInfo.episode_id,
                releaseDate : jsonInfo.release_date,
                starships : jsonInfo.starships,
            };
            //const tempArr = moviesInfo.concat([movie]);
            moviesInfo.push(movie);
            setMoviesInfo(moviesInfo);
        }
        setFetched(true)
    }
    if (fetched)
    return (
        <div class="container" id="bodyDiv">
        <div class="header">
            <h1 id="header">Star Wars Series</h1>
        </div>
        <div id="mainDiv"> {
        moviesInfo.map(m =>
            <div class="movie">
            <p class ="movietitle">{m.title}</p>
            <p class="episodeAndDate">    episode id :   </p>
            <p class="episodeAndDate">{m.episodeId}</p>
            <p class="episodeAndDate">   released data :   </p>
            <p class="episodeAndDate">{m.releaseDate}</p>
            <button class ="mybutton" onClick={() =>{props.set(1); props.setList(m.starships); }} >starships</button>
        </div>
    )
        }
        </div>
    </div>

    );
}

async function FetchMoviesInfo(props){
    for(let i = 0; i < 6; i++){
        let response = await fetch(movieURLs[i]);
        let jsonInfo = await response.json();
        let tempArr = [jsonInfo];
        console.log(jsonInfo.title);
        if(props.fetched == 0){
            props.setMoviesInfo(tempArr);
        }
        else{
            props.setMoviesInfo([...props.moviesInfo, jsonInfo]);
        }
        props.setFetched(props.fetched + 1);
    }
}