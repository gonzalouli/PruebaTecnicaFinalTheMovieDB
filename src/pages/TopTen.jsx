import React, {Fragment, useEffect, useState}from 'react'
import axios from 'axios'
import Film from '../components/Film'

function TopTen() {
    const [films, setFilm] = useState([])
    const [genres, setGenres] = useState(JSON.parse(window.localStorage.getItem('genres')))

    useEffect(async()=>{
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES&page=1`).then(res=> {

            
            res.data.results.sort( (a,b)=>{
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

            res.data.results.filter(film =>
            film.poster_path==null ? film.poster_path=`${process.env.PUBLIC_URL}img/default-film-img.jpg` : film.poster_path =`https://image.tmdb.org/t/p/original/${film.poster_path}`
            )
            setFilm(res.data.results.slice(0, 10))

            return
        })
    },[])

    return (
        <Fragment>
            {   films.map((film, index) => {
                    return <Film key={index} pelicula={film} genres={genres} />
                })
            }
        </Fragment>

    )
}

export default TopTen
