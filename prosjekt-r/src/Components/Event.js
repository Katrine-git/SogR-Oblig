import {useState} from 'react';
import {getEvents} from '../Utilitis/eventService'
import {getSkuespiller} from '../Utilitis/eventService';

const Events = () => {
    const [data, setData] = useState([])
   
    const handleClick = async() =>{
        const events = await getEvents();
        console.log("data", events);
        //const hei = await getSkuespiller();
        setData(events);
    }
    console.log(data);
    console.log("hgds", )
    return(
        <div>
        
            {data?.length > 0 ? data.map((data) =>
            //<p>{data.movieactor}</p>, 
            <p key={data.filmtittel}>{data.filmtittel}</p>,
            ) :null}
            <button type="button" onClick={handleClick}>jeg er en knapp</button>
        </div>
    )
}

export default Events;



// listeMedFilmer.map(movie => <Movie BrukPropsDuLagetHer />)

//{data?.length > 0 ?.data.map(movie => filmtittel) <p>{data[0].title)}</p> : null}
//{data?.length > 0 ? data.map(data) => <EventItem key={data.filmtittel}{...data} />


//Fungerer
//{data?.length > 0 ? <p>{JSON.stringify(data[0].filmtittel)}</p> : null}

//funerer men uten key
// {data?.length > 0 ? data.map((data) => <p>{data.filmtittel}</p> ) :null}