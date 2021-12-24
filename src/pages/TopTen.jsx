import React, {Fragment, useEffect, useState}from 'react'
import axios from 'axios'
import Film from '../components/Film'

function TopTen() {
    const [films, setFilm] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(async()=>{
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES&page=1`).then(res=> {

            const number = window.localStorage.getItem("number")
            
            res.data.results.sort( (a,b)=>{
                if(window.localStorage.getItem("order")=="Asc"){
                    if(a.vote_average>b.vote_average)
                        return 1
                    if(a.vote_average<b.vote_average)
                        return -1
                    else
                        return 0
                }else{
                    if(a.vote_average>b.vote_average)
                        return -1
                    if(a.vote_average<b.vote_average)
                        return 1
                    else
                        return 0
                }
            })

            setFilm(res.data.results.slice(0, number))

            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then( async res=>{
                setGenres(res.data.genres)
                // console.log(res.data.genres)

            })

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
