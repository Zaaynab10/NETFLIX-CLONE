import {configureStore , createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {API_KEY, TMBD_BASE_URL} from "../utils/constants"
//fetch genres from TMDB 
export const getGenres= createAsyncThunk( "netflix/genres",async()=>{
    //Recupérer le type de genres au niveau de TMBD
const {data:{genres}} = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
return genres
})
export const fetchMovies=createAsyncThunk("netflix/trending",async({type},thunkApi)=>{
const {netflix:{genres}} =thunkApi.getState()
const moviesArray=[]
for(let i=1;moviesArray.length<60 && i<10;i++){
const {data:{results}} =await axios.get(`${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}${ `&page=${i}`}`)
results.forEach((movie)=>{
// distinguer les genres 
let moviesGenre=[]
 movie.genre_ids.forEach((genre_id)=>{
     const name = genres.find((genre)=> genre_id===genre.id)
     if(name) moviesGenre.push(name.name)
 })
 
// creer un tableau des movies trending 
    if(movie.backdrop_path){
        moviesArray.push({
            id:movie.id,
            image:movie.backdrop_path,
            genre:moviesGenre.slice(0, 3),
            name: movie?.original_name ? movie.original_name :movie.original_title,
        })
    } 
}
)
}

 return moviesArray
})
const NetflixSlice=createSlice({
    name:"Netflix",
    initialState: {
        movies:[],
        genresLoaded:false,
        genres:[]
    },
  
    reducers:{


    },
    // gere les operations asynchrones 
    extraReducers: builder =>{
        builder.addCase(getGenres.fulfilled , (state,action)=>{
            state.genres=action.payload // action.payload is the genres promise return during the getGenres()
            state.genresLoaded=true // means we retrieve correctly genres 
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies=action.payload
          });
    }
})

export const {} =NetflixSlice.actions
export const store = configureStore({
    reducer: {netflix: NetflixSlice.reducer}
})