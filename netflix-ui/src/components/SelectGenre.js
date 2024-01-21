import styled from "styled-components"
import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchMoviesByGenre,} from "../store"
import { getGenres ,fetchMovies} from "../store"
export default function SelectGenre(props){

const genres = useSelector((state)=>state.netflix.genres)
const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
const dispatch =useDispatch()

return(
    <Select className="flex" onChange={(e)=>dispatch(fetchMoviesByGenre({type:props.type,genre:e.target.value }))}>
        <option> Select your genre </option>
       {genres.map((genre)=> {
       return ( <option key={genre.id} value={genre.id}> {genre.name} </option>)
        })}
    </Select>
)
}
const Select= styled.select`
margin-left:3.5rem;
background-color:black;
color:white;
font-size:1rem;
cursor:pointer;
`