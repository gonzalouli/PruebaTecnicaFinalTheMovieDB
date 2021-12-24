import React, { Fragment, useState, useEffect } from 'react'
import '../styles/Home.css'
import { Link  } from 'react-router-dom';

export default function Home() {

    const [order, setOrder] = useState("Asc")
    useEffect( ()=>{
        window.localStorage.setItem("order",order)
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
            </div>
            <Link to='/topten' className="btn btn-primary">Top Ten Films</Link>
            <Link to='/title' className="btn btn-primary">Films by Title</Link>
            <Link to='/originaltitle' className="btn btn-primary">Films by Original Title</Link>
            <Link to='/overview' className="btn btn-primary">films by Overview</Link>

        </div>
        </Fragment>
    )
}
