import React, { Fragment, useState, useEffect } from 'react'
import '../styles/Home.css'
import { Link  } from 'react-router-dom';

export default function Home() {

    const [order, setOrder] = useState("Asc")
    const [number, setNumber] = useState(1)

    useEffect( ()=>{
        window.localStorage.setItem("order",order)
        window.localStorage.setItem("number",number)
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
                    <option className="option">Asc</option>
                    <option className="option">Desc</option>
                </select>
                <label>Cantidad: </label>
                <input className="select" type="number" min="1" max="100" onChange={e=>{
                    setNumber(e.target.value)
                    window.localStorage.setItem("number",number)
                }}></input>
            </div>
            <Link to='/topten' className="btn btn-primary">Top Ten Films filter (Vote average)</Link>
            <Link to='/title' className="btn btn-primary">Films by Title (filter popularity)</Link>
            <Link to='/originaltitle' className="btn btn-primary">Films by Original Title (filter popularity)</Link>
            <Link to='/overview' className="btn btn-primary">Films by Overview (filter popularity)</Link>

        </div>
        </Fragment>
    )
}
