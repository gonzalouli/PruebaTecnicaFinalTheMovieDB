import React, {useEffect, useState} from 'react'
import '../styles/Film.css'
import axios from 'axios'

export default function Film(props) {
    const [filmgenre, setFilmgenre]= useState([])

    useEffect(()=>{
        showGenres(props)
    },[])

    const showGenres = (props)=>{
            props.pelicula.genre_ids.map(id =>
                {   
                    props.genres.map(genre=>{ 
                            if(id==genre.id){
                                setFilmgenre([...filmgenre, genre.name])
                            }
                    })
                })
        
    }

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
                <li className="list-group-item">Genres: {filmgenre}</li>
            </ul>
            
        </div>
    )
}
