import React, { Fragment, useState, useEffect } from 'react'
import '../styles/Home.css'
import { Link  } from 'react-router-dom';
import axios from 'axios'

export default function Home() {

    const [order, setOrder] = useState("Desc")
    const [number, setNumber] = useState(1)

    useEffect( ()=>{
        window.localStorage.setItem("order",order)
        window.localStorage.setItem("number",number)
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then( async res=>{
            window.localStorage.setItem('genres',JSON.stringify(res.data.genres))

        })
    })

    return (
        <Fragment>
       
        <div className="buttonContainer">
            <div className="selector">
                <label>Ordenar: </label>
                <select className="select" onChange={e => {
                    setOrder(e.target.value)
                    window.localStorage.setItem("order",order)
                }} >
                    <option className="option">Desc</option>
                    <option className="option">Asc</option>

                </select>
                <label>Cantidad: </label>
                <input className="select" type="number" min="1" max="100" onChange={e=>{
                    setNumber(e.target.value)
                    window.localStorage.setItem("number",number)
                }}></input>
            </div>
            <Link to='/topten' className="btn btn-primary">Top Diez Peliculas Populares</Link>
            <Link to='/title' className="btn btn-primary">Peliculas por Titulo filtradas por Popularidad</Link>
            <Link to='/originaltitle' className="btn btn-primary">Peliculas por Titulo Original filtradas por Popularidad</Link>
            <Link to='/overview' className="btn btn-primary">Peliculas por Sinopsis filtradas por Popularidad</Link>

        </div>
        </Fragment>
    )
}
