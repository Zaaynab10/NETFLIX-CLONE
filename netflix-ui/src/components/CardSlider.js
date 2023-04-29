import Card from "./Card"
export default function CardSlider(props){
return(
    <div>
    {
        props.data.map((movie,index)=>{
         return (<Card movieData={movie} index={index} key={movie.id} />)
        })
        }
    </div>
)
}
