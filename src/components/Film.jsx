import React, {useEffect, useState} from 'react'
import '../styles/Film.css'

export default function Film(props) {
    const [filmgenre, setFilmgenre]= useState("")

    useEffect( ()=>{
        // console.log(props.pelicula.genre_ids.length)
        let i=0,j=0;
        while(i<props.pelicula.genre_ids.length){

            while(j<props.genres.length){
                if(props.pelicula.genre_ids[i]==props.genres[i].id){
                    let temp = filmgenre
                    setFilmgenre(temp.concat(" "+props.genres[i].name))
                    // console.log(props.genres[i])
                }
                j++;
            }
            i++;

        }
        // console.log(filmgenre)
        
    },[])


    return (
        
        <div className="card">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/original/${props.pelicula.poster_path}`} alt="Card image cap"/>
            <div className="card-body">
                <h3 className="card-title">{props.pelicula.title}</h3>
                <p className="card-text">{props.pelicula.overview}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Release date: {props.pelicula.release_date}</li>
                <li className="list-group-item">Votes: {props.pelicula.vote_average}</li>
                <li className="list-group-item">Popularity: {props.pelicula.popularity}</li>
                <li className="list-group-item">Genre: {filmgenre}</li>
            </ul>
            
        </div>
    )
}
