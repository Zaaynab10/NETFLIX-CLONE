import CardSlider from "./CardSlider";
export default function Slider(props){
    const getMoviesFromRange=(from,to)=>{
        return props.movies.slice(from,to)
    }
    return(
        <div>
            <CardSlider title="New Release 1" data={getMoviesFromRange(0,10)}/>
            <CardSlider title="New Release 2" data={getMoviesFromRange(10,20)}/>
            <CardSlider title="New Release 3" data={getMoviesFromRange(20,30)}/>
            <CardSlider title="New Release 4" data={getMoviesFromRange(30,40)}/>
            <CardSlider title="New Release 5" data={getMoviesFromRange(40,50)}/>
            <CardSlider title="New Release 6" data={getMoviesFromRange(50,60)}/>
        </div>
    )
    }
    