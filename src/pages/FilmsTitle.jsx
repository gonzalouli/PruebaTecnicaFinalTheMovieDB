import React, {Fragment, useState}from 'react'
import '../styles/FilmsTitle.css'

export default function FilmsTitle() {
    const [text, setText] = useState("")
    const [sended, setSended] = useState(false)

    const handleChange = (e)=>{
        e.preventDefault()


    }

    return (
        <Fragment>
            <div className="form">
                <label for="exampleInputEmail1">Title: </label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
                {/* <button className="btn btn-secondary" onClick={handleFilms}>Send</button> */}
            </div>
        </Fragment>
    )
}
