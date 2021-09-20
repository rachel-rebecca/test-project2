import { useHistory } from "react-router";
import { useState } from "react";

export default function Search () {
    const[keyword, setKeyword] = useState("")
    const[latlong, setLatlong] = useState("")
    const[startDateTime, setStartDateTime] = useState("")
    const[endDateTime, setEndDateTime] = useState("")
    const history = useHistory();


    function handleClick() {
        history.push({
            pathname:`/results/${keyword}${latlong}${startDateTime}${endDateTime}`
            
        })
    }
    return (
        <div>
            <form>
            <input onChange={(e) => {setKeyword(e.target.value)}} />
            <input onChange={(e) => {setLatlong(e.target.value)}}/>
            <input onChange={(e) => {setStartDateTime(e.target.value)}}/>
            <input onChange={(e) => {setEndDateTime(e.target.value)}}/>
            <button onClick={handleClick}>Search</button>
        </form>
            

        </div>
        
    )
}

//"https://app.ticketmaster.com/discovery/v2/suggest.json"


//https://app.ticketmaster.com/discovery/v2/suggest?apikey=hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh&keyword=ravens&locale=en-us

//https://app.ticketmaster.com/discovery/v2/events?apikey=hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh&keyword=ravens&radius=500&unit=miles&locale=en-us&startDateTime=2021-09-25T21:47:00Z&endDateTime=2021-09-30T21:47:00Z

//https://app.ticketmaster.com/discovery/v2/events?apikey=hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh&keyword=music&latlong=42.5835951,-82.8293423&radius=100&unit=miles&locale=en-us&startDateTime=2021-09-25T21:47:00Z&endDateTime=2021-09-30T21:47:00Z