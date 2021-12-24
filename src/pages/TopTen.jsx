import React, {Fragment, useEffect, useState}from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import Film from '../components/Film'

function TopTen() {
    const [films, setFilm] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(async()=>{
        await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=58854cdf9227a9ac2f479804f5930ffc&language=es-ES&page=1").then(res=> {
            res.data.results.splice(0, 10)
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
            console.log(res.data.results)
            setFilm(res.data.results)
            axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=58854cdf9227a9ac2f479804f5930ffc&language=en-US").then(res=>{
                setGenres(res.data.genres)
                console.log(res.data.genres)

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
