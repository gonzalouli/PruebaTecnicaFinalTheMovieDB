import React, {Fragment, useEffect, useState}from 'react'
import axios from 'axios'
import Film from '../components/Film'
import NoFilm from '../components/NoFilm'

export default function FilmsOverview() {
    const [text, setText] = useState("")
    const [sended, setSended] = useState(false)
    const [films, setFilm] = useState([])
    const [genres, setGenres] = useState(JSON.parse(window.localStorage.getItem('genres')))


    const handleFilms = async (e)=>{
    
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}&append_to_response=videos,images&language=es-ES`).then(res=> {
            let temp = res.data.results;
            const number = window.localStorage.getItem("number")
            
            temp.sort( (a,b)=>{
                if(window.localStorage.getItem("order")=="Asc"){
                    if(a.popularity>b.popularity)
                        return 1
                    if(a.popularity<b.popularity)
                        return -1
                    else
                        return 0
                }else{
                    if(a.popularity>b.popularity)
                        return -1
                    if(a.popularity<b.popularity)
                        return 1
                    else
                        return 0
                }
            })

            temp = temp.filter(film => {
                const over = film.overview.toLowerCase()
                const textLowe = text.toLowerCase()

                if(over.includes(textLowe)){
                    film.poster_path==null ? film.poster_path=`${process.env.PUBLIC_URL}img/default-film-img.jpg` : film.poster_path =`https://image.tmdb.org/t/p/original/${film.poster_path}`
                    return film
                } else return null;
            })

            setFilm(temp.slice(0, number))
            
            setSended(true)
            return
        })
    }
    
    
    

    return (
        <Fragment>
            <div className="form">
                <label >Overview: </label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
                <button className="btn btn-secondary" onClick={handleFilms}>Send</button>
            </div>
            {
                sended ? films.map((film, index) => {
                    return <Film key={index} pelicula={film} genres={genres} />
                }) : null
            }
            {
                sended && films.length === 0 ? <NoFilm/> : null
                
            }
        </Fragment>
    )
}
