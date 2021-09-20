import { useParams } from "react-router-dom";
import Event from "../models/Event";
import {useState, useEffect} from "react";
import getResults from "../services/GetResults";
import { LongLat } from "../models/LongLat";

interface RouteParams {
    latlong: string;
    keyword: string;
    startDateTime: string;
    endDateTime: string;
}

export default function Results () {
    const {latlong} = useParams<RouteParams>();
    const {keyword} = useParams<RouteParams>();
    const {startDateTime} = useParams<RouteParams>();
    const {endDateTime} = useParams<RouteParams>();
   const[events, setEvents] = useState<Event[]>([])

   

    function searchData() {
       getResults(keyword, latlong).then((data) => {setEvents(data)})
       
   }

//    async function searchKeyword() {
//     getResults(keyword).then((data) => {setEvents(data)})
// }
// searchKeyword();

//     function searchLocation(){
//         getLocationResults(latlong).then((data) => {setEvents(data)})
//     }

//     function searchStartDate() {
//         getStartDateResults(startDateTime).then((data) => {setEvents(data)})
//     }

//     function searchEndDate() {
//         getEndDateResults(endDateTime).then((data) => {setEvents(data)})
//     }

// searchData()
// if(keyword){
//     getResults(keyword).then((data) => {setEvents(data)})
// }
    
    useEffect(() => {
        searchData()
       
       
        // searchLocation();
        // searchStartDate()
        // searchEndDate()
        // getResults(result).then((data) => {setEvents(data)})
    }, [setEvents])

    return (
        <div>
            {latlong}
            {keyword}
            {events?.map((event, index) => {
              return <p key={index}>{event.name}</p> 
            })}
        </div>
        


    )


}


// const[events, setEvents] = useState<Event[]>([]);
// const[keyword, setKeyword] = useState<string>();
// const[latLong, setLatLong] = useState<string>();
// const[startDate, setStartDate] = useState<string>();
// const[endDate, setEndDate] = useState<string>();
 
// let name = "music";
// let 

// function searchLocation() {
//     let events2 = [...events];
//     events2 = events2.filter((event) => event.name == name);
//     setEvents(events2);
// }

// function convertStartDate() {
//     let events2 = [...events];
//     events2 = events2.filter((event) => event.name == name);
//     setEvents(events2);
// }

// const search_zip = searchLocation(events);
// const search_keyword = setKeyword(search_zip);
// const start_date = convertStartDate(search_keyword);
// const end_date = convertEndDate(start_date);


//https://app.ticketmaster.com/discovery/v2/events?apikey=hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh&keyword=music&latlong=42.5835951,-82.8293423&radius=100&unit=miles&locale=en-us&startDateTime=2021-09-25T21:47:00Z&endDateTime=2021-09-30T12:08:00Z
// 42.5835951,-82.8293423
// 2021-09-25T21:47:00Z
// 2021-09-30T12:08:00Z