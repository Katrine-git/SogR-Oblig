import {useState} from 'react';
import {getEvents} from '../Utilitis/eventService'


const Movies = () => {
    const [data, setData] = useState([])
   
    const handleClick = async() =>{
        const events = await getEvents();
        setData(events);
    }
    return(
        <div>
            {data?.length > 0 ? data.map((data, index,filmtittel, movieactor) =>(
                <p key={index}>Film: {data.filmtittel}, Skuespiller: {data.movieactor} </p>
            )) :null}
            <button type="button" onClick={handleClick}>jeg er en knapp</button>
        </div>
    )
}

export default Movies;