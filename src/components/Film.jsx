import React, {useEffect, useState} from 'react'
import '../styles/Film.css'

export default function Film(props) {
    const [filmgenre, setFilmgenre]= useState([])

    useEffect( ()=>{
        const temp = []
        try {
            const {genres, pelicula} = props
            genres.map( genre=>{
                // console.log(genre.id)
                pelicula.genre_ids.map( id=>{
                    if(id===genre.id){
                        temp.push(genre.name)
                        temp.push(", ")
                    }
                })
            })
            console.log(temp)
        }catch(e){console.error(e.message)}
        temp.splice(temp.length-1)
        setFilmgenre(temp)
    },[])


    return (
        
        <div className="card">
            <img className="card-img-top" src={props.pelicula.poster_path} alt="Card image cap"/>
            <div className="card-body">
                <h3 className="card-title">{props.pelicula.title}</h3>
                <p className="card-text">{props.pelicula.overview}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Fecha de salida: {props.pelicula.release_date}</li>
                <li className="list-group-item">Votos: {props.pelicula.vote_average}</li>
                <li className="list-group-item">Popularidad: {props.pelicula.popularity}</li>
                <li className="list-group-item">Género: {filmgenre.length==0 ? <p>No encontrado</p> : filmgenre}</li>
            </ul>
            
        </div>
    )
}
