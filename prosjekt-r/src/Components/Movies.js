import {useState} from 'react';
import {getEvents} from '../Utilitis/eventService'
import Movie from './Movie';


const Movies = () => {
    const [data, setData] = useState([])
   
    const handleClick = async() =>{
        const events = await getEvents();
        setData(events);
    }
    return(
        <div>
            <ul>
            {data?.length > 0 ? data.map((data, index,filmtittel, movieactor) =>(
                <Movie key={index} title={data.filmtittel} actor ={data.movieactor}/>
            )) :null}
            </ul>
            <button type="button" onClick={handleClick}>jeg er en knapp</button>
        </div>
    )
}

export default Movies;


//Fungerer
/*{data?.length > 0 ? data.map((data, index,filmtittel, movieactor) =>(
    <p key={index}>Film: {data.filmtittel}, Skuespiller: {data.movieactor} </p>
)) :null}*/